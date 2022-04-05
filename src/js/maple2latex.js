import { renderer } from '../utils/renderer';

function simple_format() {
  let lc = document.getElementById('input').value;
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
  let lc = document.getElementById('input').value;
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
  let lc = document.getElementById('input').value;
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
  document.getElementById('input').value = old_code + ('\r\n\r\n\r\n转换结果：\r\n \r\n\r\n$' + lc + '$');
  renderer(document.getElementById('input'), document.getElementById('output'));
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
  document.getElementById('input').value = old_code + '\r\n\r\n' + format_szce + '\r\n\r\n<hr><hr>' + '依赖关系:\r\n';
  document.getElementById('input').value = document.getElementById('input').value + '$' + format_szce_relation + '$<hr><hr>';
  renderer(document.getElementById('input'), document.getElementById('output'));
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
  document.getElementById('input').value = old_code + ('\r\n\r\n\r\n$' + lc + '$');
  renderer(document.getElementById('input'), document.getElementById('output'));
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
  document.getElementById('input').value = old_code + ('\r\n\r\n\r\n$' + lc + '$');
  renderer(document.getElementById('input'), document.getElementById('output'));
}

const continuous_formula = () =>{ set_input_format_latex("0", "0") };
const discrete_formula = () =>{ set_input_format_latex("0", "1") };
const coeff_formula = () =>{ set_input_format_latex("1", "0") };
const continuous_szce_formula = () =>{ set_input_format_szce("0") };
const discrete_szce_formula = () =>{ set_input_format_szce("1") };

export {
  DT_gauge, DT_coe, continuous_formula, coeff_formula, 
  continuous_szce_formula, discrete_formula, discrete_szce_formula
}