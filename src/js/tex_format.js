import { Notification } from '../utils/Notification';

function get_blocks(lc) {
  let lc_ = lc;
  let begin_match = lc_.match(/\\begin{(.*?)}/);
  let blocks = [];
  while( begin_match ) {
    let begin_index = begin_match.index,
        envir = begin_match[1],
        end = `\\end{${envir}}`,
        end_index = 0,
        sub_lc = '',
        bm = [],
        em = [1];
    while( bm.length !== em.length ) { // 同一环境的嵌套, 如 array 环境
      end_index = lc_.slice(end_index).indexOf(end) + end.length + end_index;
      sub_lc = lc_.slice(begin_index, end_index);
      bm = sub_lc.match(/\\begin{/g) || [];
      em = sub_lc.match(/\\end{/g) || [];
    }
    blocks.push( lc_.slice(0, begin_index) );
    blocks.push( lc_.slice(begin_index, end_index) );
    lc_ = lc_.slice(end_index);
    begin_match = lc_.match(/\\begin{(.*?)}/);
  }
  
  if( lc_.length > 0 ) blocks.push(lc_);

  return blocks.reduce( (i, j) => i + j ) === lc ? blocks : [];
}

function create_block_tree(doc, level) {
  let lines = doc.split('\n'),
      envir = ['', ''],
      child = [],
      format_text = '';
  if( doc.indexOf('\\begin') < 0 || lines.length < 3 ) { // 叶节点
    format_text = doc.split('\n')
                     .map( s => s.replace(/^ */, ' '.repeat( 3 * (level - 1) ) ) )
                     .reduce( (i, j) => i + '\n' + j );
  } else {
    let isblock = doc.match(/^\\begin/) !== null && doc.match(/\\end{.*?}$/) !== null;
    if( isblock ) {
      envir = [ lines[0], lines.slice(-1)[0] ].map( s => s.replace(/^ */, ' '.repeat( 3 * (level - 1) ) ) );
      if (envir[0].match(/(theorem|lemma|proposition|remark|proof|frame|abstract)/)) {
        isblock = false;
      }
      doc = lines.slice(1, -1).reduce( (i, j) => i + '\n'+ j );
    } else {
      envir = ['', '']
    }
    child = get_blocks(doc).map( doc => create_block_tree(doc, level + isblock) );
  }

  return {
    level: level,
    envir: envir,
    child: child,
    format_text: format_text
  }
}

function recover_from_block_tree(tree) {
  if( tree.child.length === 0 ) {
    return tree.format_text;
  }

  let text = `
${tree.envir[0]}
${tree.child.map( child => recover_from_block_tree(child) ).reduce( (i, j) => i + j )}
${tree.envir[1]}
`;
  return text;
}

export function tex_format() {
  let lc = document.getElementById('input').value.replace(/\n\t/g, '\n');
  // 保留注释原格式
  let descriptions = lc.match(/ *%.*?\n/g);
  lc = lc.replace(/[ \t]*%.*?\n/g, '_DESCRIPTION_\n')
         .replace(/\n/g, 'AAAAAAAAA')
         .replace(/\t/g, '    ');

  let header = lc.match(/.*?\\begin{document}/);
  if( header ) {
    header = header[0].replaceAll('AAAAAAAAA', '\n');
  } else {
    header = '';
  }

  let doc = lc.match(/\\begin{document}(.*?)\\end{document}/);
  let isDoc = doc !== null;
  if( !isDoc ) {
    doc = lc.replaceAll('AAAAAAAAA', '\n');
  } else {
    doc = doc[1].replace(/\\begin{thebibliography}.*?\\end{thebibliography}/, '')
                .replaceAll('AAAAAAAAA', '\n'); // bug: 如果参考文献列表出现在文中, 会被移到结尾
  }
  
  let bib = lc.match(/\\begin{thebibliography}.*?\\end{thebibliography}/)
  if( bib ) {
    bib = bib[0].replaceAll('AAAAAAAAA', '\n')
                .replaceAll('\\bibitem', '\n\\bibitem')
                .replace(/( *\n){3,}/g, '\n\n');
  } else {
    bib = '';
  }
  
  // \command {} => \command{}
  doc = doc.replace(/(\\[a-z]+)\s+{/g, "$1{");
  // a. A --> a. \n A,      
  doc = doc.replace(/([a-z]|\$|})\. {0,}([A-Z])/g, "$1.\n$2");
  // 你[.。] 我--> 你[.。] \n 我
  doc = doc.replace(/([\u4e00-\u9fa5]|\$|})([.。]) {0,}([\u4e00-\u9fa5])/g, "$1$2\n$3"); 
  // a \begin{} --> a \n \begin{}
  doc = doc.replace(/(\\begin{)/g, '\n$1');
  // \begin{}{}[] a --> \begin{}{}[] \n a
  doc = doc.replace(/(\\begin{.*?}{\w+}) *([^\n])/g, '$1\n$2');
  doc = doc.replace(/(\\begin{.*?}\[[^\\]*\]) *([^\n])/g, '$1\n$2');
  doc = doc.replace(/(\\begin{.*?}) *([^\n{[])/g, '$1\n$2'); 
  doc = doc.replace(/(\\begin{.*?)\n\s*(\\label{.*?})/g, '$1$2');
  // a \end b --> a \n \end \n b
  doc = doc.replace(/(\\end{.*?})/g, '\n$1\n');
  // ... \n a --> ... a
  doc = doc.replace(/( [a-zA-Z]+) *\n *([a-zA-Z]+[ ,.;]?)/g, '$1 $2'); 
  // a  a
  doc = doc.replace(/ ([a-zA-Z]+)\s\s+([a-zA-Z]+[ ,.;]?)/g, ' $1 $2'); 
  // a \\ b
  doc = doc.replace(/([a-z].*?\\\\)(.*?[a-z])/g, '$1\n$2');

  let bm = doc.match(/\\begin{/g) || [], 
      em = doc.match(/\\end{/g) || [];
  if( bm.length !== em.length ) {
    Notification('bottomRight', '\\begin{}与\\end{}个数不等, 无法处理');
    return
  }

  let block_tree = create_block_tree(doc, 1);
  window.block_tree = block_tree;
  console.log( block_tree );
  doc = recover_from_block_tree(block_tree)
        .replace(/(\s*\n){3,}/g, '\n\n')
        .replace(/(\\end{.*?}\n) *\n/g, '$1')
        .replace(/\s*\n\s*(\n\s*\\end{)/g, '$1')
        .replace(/\n\s*(\n\s*\\begin{)/g, '$1')
        .replace(/(\\begin{.*?\n)\s*\n/g, '$1')
        .replace(/(\\chapter{)/g, '\n\n\n$1')
        .replace(/(\\[a-z]*section{)/g, '\n\n\n$1')
        .replace(/(\\end{frame})/g, '$1\n\n\n')
        .replace(/([^\n]) *\n(\\begin{(theorem|remark|proposition|proof|lemma)})/g, '$1\n\n$2')
        .replace(/(\\end{(theorem|remark|proposition|proof|lemma)}) *\n([^\n])/g, '$1\n\n$2')
  lc = header + doc + bib + (isDoc ? '\n\\end{document}' : '');
  if( descriptions !== null ) {
    for( let i=0; i<descriptions.length; i++) {
      lc = lc.replace('_DESCRIPTION_', descriptions[i].slice(0, -1));
    }
  }

  document.getElementById('input').value = lc;
  Notification('bottomRight', '已完成');
}