import { match_bracket } from '../utils/match_bracket';
import { Notification } from '../utils/Notification';

// ^{ ... } --> ^( ... )
function power(c, pos, i) {
  return c.slice(0, pos + 1) + '(' + c.slice(pos + 2, i) + ')' + c.slice(i + 1, c.length);
}
// sqrt[... ]{ ... } --> ...^(...)
function sqrt(c, pos, i, m) {
  let power = m[2] ? parseInt(m[2]) : 2;
  return c.slice(0, pos-1) + ' (' + c.slice(pos + m[0].length, i) + ')^(1/' + power + ') ' + c.slice(i + 1, c.length);
}
// sin {...} / [...] --> sin(...)
function f2f(c, pos, i, m) {
  let func = m[0].slice(0, -1);
  console.log( [ func, c ] );
  return c.slice(0, pos) + func + '(' + c.slice(pos + func.length + 1, i) + ')' + c.slice(i + 1, c.length);
}

export function latex2maple() {
  // lc: latex code of align/array/$$, created by mathpix-snipping-tool.exe
  // return: maple expression 
  // \left[ eq1, ...\left.\\
  //    \right.    eq2 \right] --> (eq1 + eq2)
  let lc = document.getElementById('input').value;
  lc = lc.replace(/\\right\./g, '');
  lc = lc.replace(/\\left\./g, "");
  lc = lc.replace(/&/g, " ");
  lc = lc.replace(/\\\\/g, '');
  lc = [[ lc ]];

  lc = lc.map(arr => arr.map(c => {
    c = c.replace(/\\(tilde|hat|bar|underline|acute|check){(.*?)}/g, '$2')
    c = c.replace(/\\mathrm{([a-zA-Z])}/g, '$1');
    c = c.replace(/\\times/g, " ");
    // \lambda --> lambda
    c = c.replace(/\\(lambda|zeta|eta|xi|gamma|alpha|beta|delta|rho)([a-zA-Z])/g, '$1 $2');
    // \left( * \right) -->  ( * )
    // \left[ * \right] -->  ( * )
    // \left| * |\right --> (abs())
    c = c.replace(/\\left[(\[\]]/g, ' ( ');
    c = c.replace(/\\right[\)\]]/g, ' ) ');
    c = c.replace(/\\left\|(.*?)\\right\|/g, '(abs($1))');
    // v_{n-1} --> v(n-1)
    c = c.replace(/_{n}/g, '(n) ');
    c = c.replace(/_{n([+-])(\d+)}/g, '(n$1$2) ');
    // w_{x} --> diff(w(x), x); 
    c = c.replace(/(\w)_{([a-z])}/g, ' diff($1, $2) ').replace(/ {2,}/g, " ");
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
      let re = RegExp(`([a-zA-Z0-9]+)\\^{([+-])[+-]{${i}}}`, 'g');
      c = c.replace(re, `shift($1, $2${i+1})`);
    }

    c = c.replace(/\\operatorname{([a-zA-Z]+)}/g, "\\$1 ");
    c = c.replace(/ {2,}/g, " ");
    // x^{3n + 1} --> x^(3n + 1), 
    c = match_bracket(c, ['{', '}'], '\\^{', power);
    // sqrt[n]{x+y}
    c = match_bracket(c, ['{', '}'], 'sqrt(\\[(.*?)\\])?{', sqrt);
    // sin t --> sin(t)
    c = c.replace(/e\^/g, " \\exp ");
    c = c.replace(/\\ln /g, "\\log ");
    ['exp', 'log', 'sinh', 'cosh', 'sech', 'csch', 'coth', 'tanh', 'sin', 'cos', 'tan', 'arccos', 'arcsin', 'arctan', 'arccot'].forEach(func => {
      let reg = new RegExp( "\\\\(" + func + ") ([a-zA-Z0-9])", "g");
      c = c.replace(reg, " $1($2)");
      reg = new RegExp( "\\\\(" + func + ") ", "g");
      c = c.replace(reg, " $1");
      c = match_bracket(c, ['{', '}'], func + '{', f2f);
      c = match_bracket(c, ['[', ']'], func + '\\[', f2f);
    })
    // \frac{expr1}{expr2} --> 2a/2b
    c = c.replace(/frac/g, '');
    c = c.replace(/}{/g, ') / (');
    // \ --> ""
    c = c.replace(/\\/g, '');
    c = c.replace(/\[/g, '(');
    c = c.replace(/\]/g, ')');

    // a_{m} --> a[m]
    c = c.replace(/_ ?{(m|k|l|i|j|p|q|n)}/g, '[$1] ');
    c = c.replace(/\s*?_{(\d+)}/g, '$1');
    c = c.replace(/_ ?{(.*?)}/g, '[$1]');
    
    // {/} --> (/)
    c = c.replace(/{/g, ' ( ').replace(/}/g, ' ) ');

    // )( --> ) (
    c = c.replace(/\)\(/g, ') (').replace(/ {2,}/g, " ");
    return c;
  }))
  
  lc = lc[0][0];
  document.getElementById('input').value += '\r\n\r\n' + lc;
  Notification('bottomRight', '已完成');
}