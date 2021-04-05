/*
 * @Author:             old jia
 * @Email:              jiaminxin@outlook.com
 * @Date:               2021-03-20 11:17:35
 * @Last Modified by:   jiandandaoxingfu
 * @Last Modified time: 2021-04-05 14:49:44
 */

function latex2maple() {
  // lc: latex code of align/array/$$, created by mathpix-snipping-tool.exe
  // return: maple expression 
  // let lc = $$('input').value.replace(/\\\\/g, '');
  lc = lc.replace(/\\/g, '\\\\');
  let type = '';
  if (lc.includes('align')) {
    lc = lc.split(/\n/g).slice(1, -1).map(d => d.split(/&/g).slice(1));
    type = 'array';
  } else if (lc.includes('array')) {
    lc = lc.split(/\n/g).slice(1, -1).map(d => d.split(/&/g));
    type = 'matrix';
  } else { // lc of single expression
    lc = [
      [lc]
    ];
  }

  lc = lc.map(arr => arr.map(c => {
    c = c.replace(/\\(tilde|hat|bar|underline|acute|check){(.*?)}/g, '$2')
    c = c.replace(/\\mathrm{([a-zA-Z])}/g, '$1');
    // \lambda --> lambda
    c = c.replace(/\\(lambda|zeta|eta|xi|gamma|alpha|beta|delta)/g, '$1');
    // \left( * \right) -->  ( * )
    c = c.replace(/\\left\((.*?)\\right\)/g, ' ( $1 ) ');
    // \left[ * \right] -->  ( * )
    c = c.replace(/\\left\[(.*?)\\right\]/g, ' ( $1 ) ');
    // v_{n-1} --> v(n-1)
    c = c.replace(/_{n}/g, '(n)');
    c = c.replace(/_{n([+-])(\d+)}/g, '(n$1$2)');
    // a_{m} --> a[m]
    c = c.replace(/_{(m|k|l|i|j)}/g, '[$1]');
    // w_{x} --> diff(w(x), x); 
    c = c.replace(/(\w)_{([a-z])}/g, ' diff($1($2), $2) ');
    // ( w - v )_{x}  --> diff( (w - v)(x), x)
    c = c.replace(/\(([a-zA-Z0-9/+\^-\s]+)\)_{([a-z])}/g, ' diff(($1)(x), $2) ');
    // w_{12, x..x} --> diff(w12(x), x$n)   
    // w_{x..x}  --> diff(w(x), x$n),  
    // ( w - v )_{x..x}  --> diff( (w - v)(x), x$n), 
    for (let i = 1; i <= 12; i++) {
      let re1 = RegExp(`(\\w)_{(\\d+),(\\s\\w){${i}}}`, 'g'),
        re2 = RegExp(`(\\w)_{(\\w)(\\s\\w){${i}}}`, 'g'),
        re3 = RegExp(`\\(([a-zA-Z0-9/+\\^-\\s]+)\\)_{(\\w)(\\s\\w){${i}}}`);
      c = c.replace(re1, ` diff($1$2($3), $3$$${i})`);
      c = c.replace(re2, ` diff($1($2), $2$$${i+1})`);
      c = c.replace(re3, ` diff(($1)(x), $2$$${i+1})`);
    }
    // u^{+++} --> u(n+3)
    for (let i = 0; i <= 12; i++) {
      let re = RegExp(`([a-zA-Z])\\^{([+-])[+-]{${i}}}`, 'g');
      c = c.replace(re, `$1(n $2 ${i+1})`);
    }
    // x_{3} --> x[3]
    c = c.replace(/_{(\w+)}/g, '$1');
    c = c.replace(/_{(.*?)}/g, '[$1]');
    // x^{3n + 1} --> x^(3n + 1)
    c = c.replace(/\^{(.*?)}/g, '^($1)');
    // \frac{expr1}{expr2} --> 2a/2b
    c = c.replace(/\\frac{(.*?)}{(.*?)}/g, ' ($1)/($2) ');
    // {.*?} --> (.*?)
    c = c.replace(/{(.*?)}/g, '($1)');
    // \ --> ""
    c = c.replace(/\\/g, '');
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
  // $$('input').value += '\r\n\r\n' + lc;
  console.log(lc)
}


lc = `\\left(u_{n}^{2}-v_{n}^{2}\\right)\\left(v_{n-1}^{2}-u_{n-1}^{2}+v_{n-1} v_{n+1}-u_{n-1} u_{n+1}\\right)+4 u_{n-1} u_{n} v_{n-1} v_{n}`;
latex2maple(lc);