import React from 'react';
import './App.css';
import {
  Button,
  Layout,
  Divider,
  Input,
  Col,
  Row,
  Card,
  Upload,
  Switch
} from 'antd';
import {
  UploadOutlined
} from '@ant-design/icons';
import {
  Remarkable
} from 'remarkable';

const md = new Remarkable({
  html: true, // Enable HTML tags in source
  breaks: false, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks
});

const {
  Sider,
  Header,
  Content,
  Footer
} = Layout;
const InputGroup = Input.Group;
const ButtonGroup = Button.Group;

(function() {
  document.getElementsByTagName('head')[0].innerHTML += `
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            messageStyle: 'none',
            tex2jax: {inlineMath: [['$','$']], preview: 'none'},
            jax: ["input/TeX", "output/SVG"],
            TeX: { equationNumbers: { }}
        });
    </script>
  `
  var script = document.createElement('script');
  script.setAttribute('type', "text/javascript");
  script.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=default");
  document.getElementsByTagName('head')[0].appendChild(script);
})();

function $$(id) {
  return document.getElementById(id);
}

var islock = false;

// 使用说明
const TEXT =
  `
    功能: 
      可以实时预览数学公式(先输入数学环境)，创建列表和矩阵
      处理Maple生成的latex代码等。
    
    excel数据转列表：  
      输入框清空，将excel数据复制到输入框，点击转换按钮
      即可. 要求不同行要换行，数据中无空格, 
      不同数据间有空格(或tab键)隔开.
    
    下面maple相关的功能均与方程族推导相关，其余问题未必可用
    
    连续公式格式化：
      格式化maple生成的latex代码，去除冗余
      将latex代码粘贴在输入框，点击格式化即可。
    
    展示系数格式化：
      主要针对无穷展开同次幂系数。
    
    szce格式化：
      连续静态零曲率方程格式化，并且输出各未知量的依赖关系。
    
    离散szce格式化：
      离散静态零曲率方程格式化，并且输出各未知量的依赖关系。
    
    DT-gT: 
      指将gauge变换T代入T_x+TU=U_hatT.
    
    DT-coe:
      指将gauge变换T代入T_x+TU=U_hatT后比较各式中lambda
      各次幂系数所得等式

    latex2maple:
      将mathpix-snipping-tool通过图片识别生成的矩阵的latex代码
      转化成maple中矩阵输入表达式。
      目前主要支持以下环境：
        矩阵：如
          \\begin{array}{cc}
            u     & 1 \\
            \\lambda  & v
          \\end{array}
        多行：如
          \\begin{aligned}{cc}
            &u + 1 \\
            &\\lambda + v
          \\end{aligned}
        单个公式：如
          x^2 + y^2
    maple2mma:
      将复制的maple表达式转换为mathematics的表达式。目前支持以下函数：
          exp, log, abs, sqrt, conjugate, Re, Im,
          sin, cos, tan, sinh, cosh, tanh, 
    typora:
      读取typora生成的markdown文档并解析。
      目前仅支持标题，数学公式解析。

    
    双击： 左侧收起/恢复，
    
    注：1. 个人用，不具有普适性，不保证完全正确。 
        2. 仅支持latex数学公式，其它命令不支持。
    `
var input_value = '';
var is_show_guide = true;

function show_guide() {
  if (is_show_guide) {
    input_value = $$('input').value;
    $$('input').value = TEXT;
  } else {
    $$('input').value = input_value;
    renderer($$('input'), $$('output'));
  }
  is_show_guide = !is_show_guide;
}

// 双击左侧输入区收起
var is_left_hide = true;
document.body.addEventListener('dblclick', function() {
  if (is_left_hide) {
    $$('left').style.display = 'none';
    $$('sider').style.minWidth = '99%';
    $$('sider').style.maxWidth = '99%';
    $$('sider').style.width = '99%';
  } else {
    $$('left').style.display = 'block';
    $$('sider').style.minWidth = '50%';
    $$('sider').style.maxWidth = '50%';
    $$('sider').style.width = '50%';
  }
  is_left_hide = !is_left_hide;
});

// !!!!!!!!!!!!!!!!!!!!!此处是关键， https://www.jianshu.com/p/20f137e2b8c9
function renderer(source, target) {
  if (islock) return;
  islock = true;
  let value = source.value.replace(/(beta|gamma|eta|zeta|xi|alpha|delta)/g, '$1   ');
  $$('buffer').innerHTML = value.replace(/\n/g, "<br />");
  if (source.tagName.toLowerCase() === 'input') {
    $$('buffer').innerHTML = '$' + $$('buffer').innerHTML + '$';
  }
  window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, $$('buffer')], [preview_math, target]);
}

function preview_math(target) {
  islock = false;
  target.innerHTML = $$('buffer').innerHTML;
}

function show_table() {
  $$('table').style.display = 'block';
  $$('tip').style.display = 'block';
}

// 根据输入区字符串生成表格
function excel2table() {
  let data = $$('input').value;
  if (data === '') return;
  // 判断最后一个字符是否为换行符，以确定行数。
  let rows = data.match(/\r\n|\n/g).length + 1;
  let str_arr = data.split(/\s+|\t|\n|\r\n/g);
  if (data[data.length - 1] === '\n') {
    rows -= 1;
    str_arr.pop();
  }
  let columns = str_arr.length / rows;
  if (columns % 1 !== 0) {
    alert('数据不规范');
    return;
  }
  data = this.data_format(str_arr);
  let str = ''.padEnd(2 * columns, '|c');
  $$('input').value += ('\r\n\ \r\n\\begin{tabular}{' + str + '|}\r\n\\hline\r\n' + data + '\\hline\r\n\\end{tabular}');
}


function simple_format() {
  let lc = $$('input').value;
  lc = lc.replace(/\n/g, '');
  lc = lc.replace(/{\\it(.*?)}/g, '$1');
  lc = lc.replace(/\\noalign{\\medskip}/g, ' ');
  lc = lc.replace(/(\\!)/g, ' ');
  lc = lc.replace(/(\s,)/g, '\\\\ ');
  lc = '<hr><hr>\r\n\r\n 原结果：\r\n$$' + lc + '$$<hr>';
  return lc;
}

function latex_format_maple(is_coeff) {
  // is_coeff: 是否为无穷展式系数
  let lc = $$('input').value;
  // 去除换行符
  lc = lc.replace(/\n/g, '');
  lc = lc.replace(/,0,/g, ',');
  // 修正(偏)导数
  // 对常数求导
  // {\frac {\rm d}{{\rm d}x}} \left( 1 \right)
  lc = lc.replace(/[+-]?{\\frac\s{\\rm\sd}{{\\rm\sd}\w}}\s\\left\(\s[0-9]+\s\\right\)/g, ' ');

  // 一阶与高阶偏导数， 
  // {\frac {\partial }{\partial x}} \left( w{\it b31} \left( x,t \right) \right)
  lc = lc.replace(/{\\frac {\\partial }{\\partial (\w)}} \\left\( (.*?) (\\left\( x,t \\right\).*?)\\right\)/g, '($2 $3)_{$1}');
  // lc = lc.replace(/{\\frac\s{\\partial\s\^{(\d+)}}{\\partial\s{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g, '$3_{$1$2} $4');

  // 一阶与高阶偏导数
  // {\frac {\partial }{\partial x}} { w{\it b31} } \left( x,t \right)
  lc = lc.replace(/{\\frac\s{\\partial\s}{\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g, '$2_{$1} $3');
  lc = lc.replace(/{\\frac\s{\\partial\s\^{(\d+)}}{\\partial\s{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g, '$3_{$1$2} $4');

  // 一阶与高阶偏导数
  lc = lc.replace(/{\\frac\s{\\rm d}{{\\rm d}(\w)}}(.*?)\s(\\left\(.*?\\right\))/g, '$2_{$1} $3');
  lc = lc.replace(/{\\frac\s{{\\rm d}\^{(\d+)}}{{\\rm d}{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g, '$3_{$1$2} $4');
  lc = lc.replace(/{\\frac\s{\\partial\s\^{\d}}{\\partial\s(\w)\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g, '$3_{$1$2} $4');

  // 一阶或高阶混合偏导数
  lc = lc.replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s(\w)\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g, '$4_{$1$3$2} $5');
  lc = lc.replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g, '$4_{$2$1$3} $5');
  lc = lc.replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g, '$5_{$2$1$4$3} $6');

  if (is_coeff === '1') {
    // D_2(A)(0, x) --> A_{0, x}
    lc = lc.replace(/D_{{\d}}\s+\\left\(\s+(\w)\s+\\right\)\s+\\left\(\s+(\d),(\w)\s+\\right\)/g, '$1_{$2,$3}');
    // A(2, x) --> A_2.
    lc = lc.replace(/(\w)\s+\\left\(\s+(\d),\w\s+\\right\)/g, '$1_{$2}');
    lc = lc.replace(/\s,/g, ' =0, \\\\');
  }
  // Vij --> V_{ij}
  lc = lc.replace(/([a-zA-Z]+)(\d+)/g, '$1_{$2}');
  // 删除(x), (x, t, ..)
  lc = lc.replace(/\\left\(\s[a-z](,[a-z]){0,}\s\\right\)/g, ' ');
  // 冗余
  lc = lc.replace(/{\\it(.*?)}/g, '$1');
  lc = lc.replace(/\\noalign{\\medskip}/g, ' ');
  lc = lc.replace(/(\\,|\\!)/g, ' ');
  // {{i}} --> {i}.
  lc = lc.replace(/{({\w})}/g, '$1');
  // (A_{x}) or (A) --> A_{x} or A.
  lc = lc.replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+([^\^])/g, '$1 $3');
  // (A_{x})^i or (A)^i --> A^i_{x} or A^i.   
  lc = lc.replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+\^({\d+})/g, '$1^$3');
  // V_{x}_{y} --> V_{x, y}
  lc = lc.replace(/([a-zA-Z]+)_{(\w+)}_{(\w+)}/g, '$1_{$2,$3}');
  lc = lc.replace(/\s,/g, '\t \\\\\t ');
  lc = lc.replace(/\\\\\s+\\\\/g, '\\\\');
  lc = lc.replace(/\s{2,}/g, ' ');
  return lc;
}

function discrete_latex_format_maple() {
  let lc = $$('input').value;
  lc = lc.replace(/\n/g, "");
  lc = lc.replace(/([a-zA-Z]+)(\d+)/g, "$1_{$2}");
  lc = lc.replace(/{\\it(.*?)}/g, "$1");
  lc = lc.replace(/\\noalign{\\medskip}/g, " ");
  lc = lc.replace(/(\\,|\\!)/g, " ");
  lc = lc.replace(/\s,/g, "\t \\\\\t ");
  lc = lc.replace(/\s{2,}/g, " ");
  lc = lc.replace(/\\left\(\sn\s\\right\)/g, "");
  lc = lc.replace(/\\left\(\sn([+-])1\s\\right\)/g, "^{$1}");
  lc = lc.replace(/\\left\(\sn([+-])2\s\\right\)/g, "^{$1$1}");
  lc = lc.replace(/\\left\(\sn([+-])3\s\\right\)/g, "^{$1$1$1}");
  lc = lc.replace(/\\left\(\sn([+-])4\s\\right\)/g, "^{$1$1$1$1}");
  lc = lc.replace(/\\left\(\sn([+-])5\s\\right\)/g, "^{$1$1$1$1$1}");
  lc = lc.replace(/\\left\(\sn([+-])6\s\\right\)/g, "^{$1$1$1$1$1$1}");
  lc = lc.replace(/\\left\(\sn([+-])7\s\\right\)/g, "^{$1$1$1$1$1$1$1}");
  return lc;
}


function set_input_format_latex(is_coeff, is_discrete) {
  let lc;
  if (is_discrete === '1') {
    lc = discrete_latex_format_maple();
  } else {
    lc = latex_format_maple(is_coeff);
  }
  let old_code = simple_format();
  $$('input').value = old_code + ('\r\n\r\n\r\n转换结果：\r\n \r\n\r\n$' + lc + '$');
  renderer($$('input'), $$('output'));
}

function set_input_format_szce(is_discrete) {
  // szce(静态零曲率方程)格式化(n>2)
  let lc;
  if (is_discrete === '1') {
    lc = discrete_latex_format_maple();
  } else {
    lc = latex_format_maple('0');
  }
  lc = lc.replace(/\s/g, '');

  lc = lc.replace(/.*?{array}{.*?}(.*)\\end.*/, '$1');
  lc = lc.replace(/\\lambda/g, '\\lambda ');
  lc = lc.replace(/\\\\/g, '&').split('&');
  // 将导数项 V_{ij, x}，及 V_{ij}分别移到左端
  let eqs;
  if (is_discrete === '0') {
    eqs = lc.map(eq => {
      let eq1 = move_V_ij_x_2_left(eq),
        eq2 = move_V_ij_2_left(eq1);
      return [eq1, eq2];
    })
  } else {
    eqs = lc.map(eq => [eq, move_V_ij_2_left(eq)]);
  }

  let format_szce = '',
    format_szce_relation = '';
  eqs.forEach(eq => {
    format_szce += '&' + eq[0] + '=0,\\\\ \r\n';
    format_szce_relation += eq[1];
  })
  format_szce = '\\begin{align}\r\n' + format_szce + '\\end{align}';
  format_szce_relation = '\\begin{align}\r\n' + format_szce_relation + '\\end{align}';
  let old_code = simple_format();
  $$('input').value = old_code + '\r\n\r\n' + format_szce + '\r\n\r\n<hr><hr>' + '依赖关系:\r\n';
  $$('input').value = $$('input').value + '$' + format_szce_relation + '$<hr><hr>';
  renderer($$('input'), $$('output'));
}

function move_V_ij_x_2_left(eq) {
  // 将 V_{ij, x}移到左端。
  // 判断是否已经在左端
  if (/^[^-+]*?\w_\{\d\d,\w\}/.test(eq)) return eq;
  // 约去系数
  // eq = eq.replace(/-?[^+-]*?\\left\((.*?)\\right\)/g, '$1');
  if (eq[0] !== '-') {
    eq = '+' + eq;
  }
  let is_match = eq.match(/[+-][^+-]*?\w_\{\d\d,\w\}[^+-]*?/),
    V_ij_x = '';
  if (is_match !== null) {
    V_ij_x = is_match[0];
    eq = eq.replace(is_match[0], '');
  }
  if (V_ij_x[0] === '+') {
    V_ij_x = V_ij_x.slice(1);
  }
  return V_ij_x + eq;
}

function move_V_ij_2_left(eq) {
  // szce各变量依赖关系, 主要是将 V_{ij}移到等式左端。
  eq += ' ';
  let matchs = eq.match(/(-|\+)V_{\d\d}(?=(\+|\s|-))/g);
  let lhs = '';
  if (matchs) {
    matchs.forEach(mt => {
      lhs += '-' + mt
      eq = eq.replace(mt, '');
    })
  }
  eq = '&' + lhs + '=' + eq + ',\\\\ \r\n';
  eq = eq.replace(/--/g, '+');
  eq = eq.replace(/-\+/g, '-');
  if (eq[1] === '+') {
    eq = '&' + eq.slice(2, eq.length);
  } else if (eq[1] === '=') {
    eq = '';
  }
  return eq;
}

//  指将gauge变换T代入T_x+TU=U_hatT.
function DT_gauge() {
  let lc = latex_format_maple('0');
  lc = lc.replace(/H(\w)/g, '\\hat{$1}');
  lc = lc.replace(/\s/g, '');
  lc = lc.replace(/&/g, '=0,\\\\&');
  lc = lc.replace(/\\\\([^&])/g, '=0,\\\\&$1');
  lc = lc.replace(/\\left\[\\begin{array}{\w+}(.*?)\\end{array}\\right\]/, '\\begin{align}& $1=0.\\end{align}');
  lc = lc.replace(/\\lambda/g, '\\lambda ');

  let old_code = simple_format();
  $$('input').value = old_code + ('\r\n\r\n\r\n$' + lc + '$');
  renderer($$('input'), $$('output'));
}

//  指将gauge变换T代入T_x+TU=U_hatT后比较各式中lambda
//  各次幂系数所得等式
function DT_coe() {
  let lc = latex_format_maple('0');
  lc = lc.replace(/H(\w)/g, '\\hat{$1}');

  lc = lc.slice(1, lc.length - 1);
  lc = lc.replace(/\\\\/g, '=0, \\\\\r\n&');
  lc = lc.replace(/((\s|\+|-))_{x}/g, '$1 0');
  lc = `\\begin{align}&${lc}=0.\\end{align}`;

  let old_code = simple_format();
  $$('input').value = old_code + ('\r\n\r\n\r\n$' + lc + '$');
  renderer($$('input'), $$('output'));
}

function latex2maple() {
  // lc: latex code of align/array/$$, created by mathpix-snipping-tool.exe
  // return: maple expression 
  // \left[ eq1, ...\left.\\
  //    \right.		eq2 \right] --> (eq1 + eq2)
  let lc = $$('input').value.replace(/\\right\. \\\\\n\\left\./g, '');
  lc = lc.replace(/\\right\. \\\\\n/g, '');
  lc = lc.replace(/\\\\/g, '');
  let type = '';
  if (lc.includes('align')) {
    lc = lc.split(/\n/g).slice(1, -1).map(d => d.split(/&/g).slice(1));
    type = 'array';
  } else if (lc.includes('array')) {
    lc = lc.split(/\n/g).slice(1, -1).map(d => d.split(/&/g));
    type = 'matrix';
  } else { // lc of single expression
    lc = [[lc]]
  }

  lc = lc.map(arr => arr.map(c => {
    c = c.replace(/\\(tilde|hat|bar|underline|acute|check){(.*?)}/g, '$2')
    c = c.replace(/\\mathrm{([a-zA-Z])}/g, '$1');
    // \lambda --> lambda
    c = c.replace(/\\(lambda|zeta|eta|xi|gamma|alpha|beta|delta)([a-zA-Z])/g, '$1 $2');
    // \left( * \right) -->  ( * )
    // \left[ * \right] -->  ( * )
    c = c.replace(/\\left[(\[\]]/g, ' ( ');
    c = c.replace(/\\right[\)\]]/g, ' ) ');
    // v_{n-1} --> v(n-1)
    c = c.replace(/_{n}/g, '(n) ');
    c = c.replace(/_{n([+-])(\d+)}/g, '(n$1$2) ');
    // a_{m} --> a[m]
    c = c.replace(/_{(m|k|l|i|j|p|q|n)}/g, '[$1] ');
    // w_{x} --> diff(w(x), x); 
    c = c.replace(/(\w)_{([a-z])}/g, ' diff($1, $2) ');
    // ( w - v )_{x}  --> diff( (w - v)(x), x)
    c = c.replace(/\(([a-zA-Z0-9/+\^-\s]+)\)_{([a-z])}/g, ' diff($1, $2) ');
    // w_{12, x..x} --> diff(w12, x$n)   
    // w_{x..x}  --> diff(w, x$n),  
    // ( w - v )_{x..x}  --> diff( (w - v), x$n), 
    for (let i = 1; i <= 12; i++) {
      let re1 = RegExp(`(\\w)_{(\\d+),(\\s\\w){${i}}}`, 'g'),
        re2 = RegExp(`(\\w)_{(\\w)(\\s\\w){${i}}}`, 'g'),
        re3 = RegExp(`\\(([a-zA-Z0-9/+\\^-\\s]+)\\)_{(\\w)(\\s\\w){${i}}}`);
      c = c.replace(re1, ` diff($1$2, $3$$${i}) `);
      c = c.replace(re2, ` diff($1, $2$$${i+1}) `);
      c = c.replace(re3, ` diff($1, $2$$${i+1}) `);
    }
    // u^{+++} --> u(n+3)
    for (let i = 0; i <= 12; i++) {
      let re = RegExp(`([a-zA-Z])\\^{([+-])[+-]{${i}}}`, 'g');
      c = c.replace(re, `$1(n $2 ${i+1})`);
    }
    // x_{3} --> x[3]
    c = c.replace(/\s*?_{(\d+)}/g, '$1');
    c = c.replace(/_{(.*?)}/g, '[$1]');
    // x^{3n + 1} --> x^(3n + 1), 也适用于嵌套问题
    while( c.indexOf('^{') > -1 ) {
      let pos = c.indexOf('^{'),
          num_l = 0,
          num_r = 0;
      for( var i = pos + 1; i < c.length; i++ ) {
        num_l += c[i] === "{" ? 1 : 0;
        num_r += c[i] === "}" ? 1 : 0;
        if( num_l === num_r ) {
              c = c.slice(0, pos + 1) + '(' + c.slice(pos + 2, i) + ')' + c.slice(i+1, c.length);
              break
          }
      }
    }
    // \frac{expr1}{expr2} --> 2a/2b
    c = c.replace(/frac/g, '');
    c = c.replace(/}{/g, ') / (');
    // {/} --> (/)
    c = c.replace(/{/g, ' ( ').replace(/}/g, ' ) ');
    // \ --> ""
    c = c.replace(/\\/g, '');
    // )( --> ) (
    c = c.replace(/\)\(/g, ') (');
    return c + '          ';
  }))
  
  if (type === 'matrix') {
    lc = 'Matrix(' +
      JSON.stringify(lc).replace(/"/g, '') +
      ')';
  } else if (type === 'array') {
    lc = '[' +
      JSON.stringify(lc).replace(/(\["|"\])/g, '') +
      ']';
  } else {
    lc = lc[0][0];
  }
  $$('input').value += '\r\n\r\n' + lc;
}

function maple2mma() {
  // convert mathematical expressions of maple to mathematics.
  // input: copy the mathematical expressions of maple
  let lc = $$('input').value;

  ['exp', 'log', 'sin', 'cos', 'tan', 'sqrt', 'sinh', 'cosh', 'tanh', 'abs', 'conjugate'].forEach(func => {
    while (lc.indexOf(func) > -1) {
      let pos = lc.indexOf(func),
        num_l = 0,
        num_r = 0;
      for (var i = pos + 3; i < lc.length; i++) {
        num_l += lc[i] === "(" ? 1 : 0;
        num_r += lc[i] === ")" ? 1 : 0;
        if (num_l === num_r) {
          func = func[0].toUpperCase() + func.slice(1);
          lc = lc.slice(0, pos) + func + '[' + lc.slice(pos + 4, i) + ']' + lc.slice(i + 1, lc.length);
          break
        }
      }
    }
  })
  lc = lc.replaceAll('arc', 'Arc');

  $$('input').value += '\r\n\r\n' + lc;
}


function typora() {
  // 解析typora文档，支持数学公式
  let file = $$('typora-upload').files[0];
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

    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, $$('output')]);
  }
  reader.readAsText(file);
}

class Table extends React.Component {
    state = {
      rows: 3,
      columns: 4,
      display: 'none',
    }

    onTextChange = (event) => {
      let value = Math.min( parseInt(event.target.value), 10 );
        if( event.target.id === 'row' ) {
            this.setState({ rows : value });
        } else {
            this.setState({ columns: value });
        }
    }

    eleOnInput = (event) => {
      renderer( event.target, $$('tip') );
    }

    eleOnBlur = (event) => {
      event.target.innerHTML = '';
    }

    eleOnFocus = (event) => {
      renderer( event.target, $$('tip') );
    }

    create_inputs = () => {
      let rows = this.state.rows;
      let columns = this.state.columns;
      let input_rows = [];
      for(let i=0; i<rows; i++) {
          let input_columns = [];
          for(let j=0; j<columns; j++) {
              input_columns.push(
                  <Col style={{ flex: '1' }} key={ Math.random() }>
                      <Input className='ele' style={{ margin: '5px' }} onInput={ this.eleOnInput } onBlur={ this.eleOnBlur } onFocus={ this.eleOnFocus }/>
                  </Col> )
          }
          input_rows.push( <Row style={{ display: 'flex', flexDirection: 'row' }} key={ Math.random() }>{ input_columns }</Row> )
      }
      return ( <InputGroup style={{ width: '98%' }}>{ input_rows }</InputGroup> );
    }
    

    // 格式化数据
    data_format = (str_arr) => {
        // input: str_arr = ['1', '22', '333', '2222'];
        // output: 1    & 22   \\
        //         333  & 2222 \\
        let rows = this.state.rows;
        let columns = this.state.columns;
        let n = Math.max( ...str_arr.map( str => str.length ) ); // 数组中字符串最大长度
        let data = '';
        for(let i=0; i<rows; i++) {
            for(let j=0; j<columns - 1; j++) {
                data += str_arr[i*columns + j].padEnd(n, ' ') + ' & ';
            }
            data += (str_arr[i*columns + columns - 1].padEnd(n, ' ') + ' \\\\\r\n');
        }
        return data;
    }

    // 根据输入框中内容，生成矩阵或列表
    table2matrix = () => {
        let eles = document.getElementsByClassName('ele');
        let str_arr = [];
        let pandend_str = document.getElementById('padend').getElementsByTagName('span')[0].innerText === '补零' ? '0' : '';
        for(let ele of eles) {
            str_arr.push(ele.value || pandend_str);
        }
        let data = this.data_format(str_arr);
        if( window.event.target.innerText === '生成矩阵' ) {
            $$('input').value += ('\r\n$$\r\n\\left(\r\n\\begin{matrix}\r\n' + data + '\\end{matrix}\r\n\\right)\r\n$$');
            renderer($$('input'), $$('output'));
        }else {
            let str = ''.padEnd(2*this.state.columns, '|l');
            $$('input').value += ('\r\n\\begin{tabular}{' + str + '|}\r\n\\hline\r\n' + data + '\\hline\r\n\\end{tabular}');
        }
    }
    
    close_table = () => {
        $$('table').style.display = 'none';
        $$('tip').style.display = 'none';
    }

    render() {
        let styles = {
            table: {
                position: 'absolute',
                width: '600px',
                top: '150px',
                left: '0',
                right: '0',
                margin: '0 auto',
                display: this.state.display, 
                background: 'white'
            },
            InputGroup: { float: 'left', maxWidth: '200px', top: '4px', left: '10px'}, 
            Button: { margin: '4px', padding: '5px 10px' },
            Switch: { top: '10px', transform: 'scale(1.25)', left: '-10px' },
        }

        return (
            <Card id='table' style={ styles.table }>
                <div id='button_container' style={{ position: 'relative', left: '0', top: '0', textAlign: 'center'}}>
                    <InputGroup style={ styles.InputGroup }>
                        <Row gutter={6}>
                            <Col span={12}>
                                <Input id='row' addonBefore='行' onChange={ this.onTextChange } value={ this.state.rows } key='100'/>
                            </Col>
                            <Col span={12}>
                                <Input id='column' addonBefore='列' onChange={ this.onTextChange } value={ this.state.columns } key='101'/>
                            </Col>
                        </Row>
                    </InputGroup>
                    <ButtonGroup style={{ left: '25px' }}>
                        <Switch style={ styles.Switch } checkedChildren="补零" unCheckedChildren="不补" defaultChecked id="padend"/>
                        <Button style={ styles.Button } onClick={ this.table2matrix } type='danger'>生成矩阵</Button>
                        <Button style={ styles.Button } onClick={ this.table2matrix } type='default'>生成列表</Button>
                        <Button style={ styles.Button } onClick={ this.close_table }  type='primary'>关闭</Button>
                    </ButtonGroup>
                </div>
                <div id='inputs'>
                    { this.create_inputs() }
                </div>
            </Card>
        );
    }
}




export default () => {
  const styles = {
    left: { 
      width: '50%', 
      diaplay: 'bolck',
      overflow: 'hidden'
    },
    header: {
          height: '16%', 
          backgroundColor: 'white', 
          overflowY: 'scroll', 
          lineHeight: '20px', 
          padding: '10px',                
    }, 
    content: { 
        backgroundColor: 'white',
        height: '80%'
    },
    button: {
      borderRadius: '3px',
      margin: '2px',
      padding: '5px 10px',
    },
    textarea: { 
      width: '100%', 
      height: '100%', 
      padding: '10px 10px', 
      outline: 'none', 
      border: 'none' 
    }, 
    output: { 
      width: '100%', 
      height: '100%', 
      background: 'white', 
      padding: '20px 40px',
      userSelect: 'none',
      overflowY: 'scroll',
      userSelect: 'none',
    },
    footer: { 
      textAlign: 'center', 
      height: '4%',
      padding: '3px 0' 
    }, 
    tip: {
      position: 'absolute',
      height: '30px',
      top: '130px',
      left: '0',
      right: '0',
      margin: '0 auto',
      textAlign: 'center',
      zIndex: '2',
      display: 'none'
    }
  }
  var continuous_formula = () =>{ set_input_format_latex("0", "0") };
  var discrete_formula = () =>{ set_input_format_latex("0", "1") };
  var coeff_formula = () =>{ set_input_format_latex("1", "0") };
  var continuous_szce_formula = () =>{ set_input_format_szce("0") };
  var discrete_szce_formula = () =>{ set_input_format_szce("1") };
  var inputOnchange = () => { renderer($$('input'), $$('output')) };
  const btn_name = ['使用说明', '创建矩阵', 'Excel转列表', 'latex2maple', 'maple2mma', 
                    'DT-gT', 'DT-coe', '连续公式格式化', '展式系数格式化', 'szce格式化', 
                    '离散公式格式化', '离散szce格式化', 'typora'];
  const btn_click = [show_guide, show_table, excel2table, latex2maple, maple2mma, 
                     DT_gauge, DT_coe, continuous_formula, coeff_formula, continuous_szce_formula, 
                     discrete_formula, discrete_szce_formula, typora];
  const btn_type = ["default", "primary", "primary", "primary", "primary", 
                    "default", "default", "dashed", "dashed", "dashed", 
                    "danger", "danger", "primary"];
  const btn_arr = () => {
    let n = btn_name.length;
    let arr = [];
    for( let i=0; i<n-1; i++ ) {
      arr.push( 
        <Button
          style={ styles.button } 
          onClick={ btn_click[i] }
          type={ btn_type[i] } 
          key={ i }
        >
          { btn_name[i] }
        </Button> 
      );
    }

    arr.push(
      <Upload 
        beforeUpload = {btn_click[n-1]}
        id="typora-upload" >
              <Button
                style={ styles.button } 
                type={ btn_type[n-1] } 
                key={ n-1 }
                icon={ <UploadOutlined /> }
              >
                {  btn_name[n - 1]   }
              </Button>
      </Upload> 
    );

    return arr;
  }

    return (
      <div>
        <Layout>
            <Layout id='left' style={ styles.left }>
              <Header style={ styles.header }>
                <div>{ btn_arr() }</div>
              </Header>

              <Divider dashed style={{ margin: '2px 0' }}/>

              <Content style={ styles.content }>
            <textarea id='input' style={ styles.textarea } onInput={ inputOnchange }>
            </textarea>
              </Content>

              <Footer style={ styles.footer }>
                Maple-Latex ©2019 Created by <a target="_blank" href="https://github.com/jiandandaoxingfu/maple-latex">JMx</a><br />
              </Footer>
            </Layout>

            <Divider dashed style={{ margin: '0 2px' }} type='vertical' />

            <Sider id='sider' width='50%' style={{ height: document.documentElement.clientHeight + 'px' }}>
          <div id='output' style={ styles.output }></div>
            </Sider>
        </Layout>
        
        <div id='buffer' style={{ display: 'none' }}></div>
        <div id='tip' style={ styles.tip }></div>
        <Table />
      </div>
    );
}
