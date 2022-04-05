import { Remarkable } from 'remarkable';

const md = new Remarkable({
  html: true, // Enable HTML tags in source
  breaks: false, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks
});

export function typora() {
  // 解析typora文档，支持数学公式
  let file = document.getElementById('typora-upload').files[0];
  if (!file.name.match(/\.md$/)) return
  let reader = new FileReader();
  reader.onload = function() {
    let result = this.result;
    // 匹配所有数学公式，将其中</>号前后加空格，不然会被解析为html标签。
    // 将每一个公式替换为EQUATION-id，然后使用remarkable解析md，之后在替换回来，
    // 使用MathJax渲染。
    let maths = result.match(/\${1,2}(\r\n|.){1,}?\${1,2}/g) || [];
    maths = maths.map(math => {
      result = result.replace(math, 'EQUATION-TO-REPLACE');
      return math.replace(/(<|>)/g, ' $1 ')
        .replace(/\\\\/g, '\\\\  ')
        .replace(/\\(R|C|Z|N)([^a-zA-Z])/g, '\\mathbb{$1}$2')
        .replace(/\\part([^i])/g, '\\partial$1')
        .replace(/(^\$\$|\$\$$)/g, '$$$$$$'); // replace会把两个$$变成一个。
    })

    result = result.replace(/(\r\n#+.*?\r\n)/g, '\r\n$1\r\n');
    result = md.render(result);

    maths.forEach(math => {
      result = result.replace('EQUATION-TO-REPLACE', math);
    })

    document.getElementById('output').innerHTML = result;
    document.getElementById('input').value = result;

    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, document.getElementById('output')]);
  }
  reader.readAsText(file);
}