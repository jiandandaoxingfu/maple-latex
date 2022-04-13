import { Remarkable } from 'remarkable';

const md = new Remarkable({
  html: true, // Enable HTML tags in source
  breaks: false, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks
});

function math_format(math) {
  return math.replace(/(<|>)/g, ' $1 ')
    .replace(/\\\\/g, '\\\\  ')
    .replace(/\\(R|C|Z|N)([^a-zA-Z])/g, '\\mathbb{$1}$2')
    .replace(/\\part([^i])/g, '\\partial$1')
    .replace(/(^\$\$|\$\$$)/g, '$$$$$$')
    .replaceAll('-AAAAAAA-', '\r\n');
}

export function typora() {
  // 解析typora文档，支持数学公式
  let file = document.getElementById('typora-upload').files[0];
  if (!file.name.match(/\.(md|tex)$/)) return
  let reader = new FileReader();
  reader.onload = function() {
    let result = this.result.replace(/\r\n/g, '-AAAAAAA-')
    // 将自定义的tex命令设置到tex.macros
    let cmds = {};
    this.result.match(/\\newcommand{(.*?)}\[0\]{(.*?)}\r\n/g)
      ?.forEach( cmd => {
          let match = cmd.match(/\\newcommand{\\(.*?)}\[0\]{(.*?)}\r\n/);
          cmds[match[1]] = `{${match[2]}}`;
      });
    if(window.MathJax?.config?.tex) {
      window.MathJax.config.tex.macros = cmds;
      window.MathJax.startup.getComponents();
    }

    result = result.replace(/.*?\\begin{document}/, '')
      .replaceAll('dfrac', 'frac')
      .replace(/\\bm([^a-zA-Z])/g, ' $1')
      .replace(/\\chapter{(.*?)}/g, '\r\n# $1\r\n')
      .replace(/\\section{(.*?)}/g, '\r\n## $1\r\n')
      .replace(/\\subsection{(.*?)}/g, '\r\n### $1\r\n')
      
    // 匹配所有数学公式，将其中</>号前后加空格，不然会被解析为html标签。
    // 将每一个公式替换为EQUATION-id，然后使用remarkable解析md，之后在替换回来，
    // 使用MathJax渲染。
    let math_inline = result.match(/\${1,2}.+?\${1,2}/g) || [];
    let math_block = result.match(/\\begin{(equation|align|)\*?}.*?\\end{(equation|align|)\*?}/g) || [];
    math_inline = math_inline.map(math => {
      result = result.replace(math, 'EQUATION-TO-REPLACE1');
      return math_format(math);
    })
    math_block = math_block.map(math => {
      result = result.replace(math, 'EQUATION-TO-REPLACE2');
      return math_format(math);
    })

    result = result.replace(/(\r\n#+.*?\r\n)/g, '\r\n$1\r\n')
                   .replace(/\\/g, '')
                   .replace(/begin{(.*?)}(.*?)end{(.*?)}/g, '\r\n<span class="highlight">$1</span>: $2 \r\n')
                   .replace(/bibitem{(.*?)}/g, '- **$1**')
                   .replaceAll('eqref', '\\eqref')
                   .replaceAll('-AAAAAAA-', '\r\n')
    result = md.render(result);

    math_inline.forEach(math => {
      result = result.replace('EQUATION-TO-REPLACE1', math);
    })
    math_block.forEach(math => {
      result = result.replace('EQUATION-TO-REPLACE2', math);
    })

    document.getElementById('output').innerHTML = result;
    document.getElementById('input').value = result;

    window.MathJax.typeset([document.getElementById('output')]);
  }
  reader.readAsText(file);
}