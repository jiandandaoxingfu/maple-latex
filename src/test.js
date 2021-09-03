lc = '\\frac{3 e^(x^{2})\\left(8 e^{3 t+\\frac{x^{2}}{2}}-3 e^{4 t+x^{2}}-6 e^{2 t}+e^{2 x^{2}}\\right)}{-18 e^{2 t+x^{2}}+32 e^{3 t+\\frac{3 x^{2}}{2}}-18 e^{4 t+2 x^{2}}+2 e^{6 t}+e^{3 x^{2}}}'
function latex2maple() {
  // lc: latex code of align/array/$$, created by mathpix-snipping-tool.exe
  // return: maple expression 
  // \left[ eq1, ...\left.\\
  //    \right.		eq2 \right] --> (eq1 + eq2)
  lc = lc.replace(/\\right\. \\\\\n\\left\./g, '');
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
  // $$('input').value += '\r\n\r\n' + lc;
}
latex2maple()