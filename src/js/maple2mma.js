import { match_bracket } from '../utils/match_bracket';
import { Notification } from '../utils/Notification';

// sin(...) --> sin[...]
function f2F(c, start, end, m, func, Func) {;
  func = func.slice(0, -2);
  return c.slice(0, start) + Func + '[' + c.slice(start + func.length + 1, end) + ']' + c.slice(end + 1, c.length);
} 

export const func_map = {
  arctan: 'ArcTan',
  arcsin: 'ArcSin',
  arccos: 'ArcCos',
  arcsinh: 'ArcSinh',
  arccot: 'ArcCot',
  arccosh: 'ArcCosh',
  arctanh: 'ArcTanh',
  arccoth: 'ArcCoth',
  arcsec: 'ArcSec',
  arccsc: 'ArcCsc',
  arccsch: 'ArcCsch',
  arcsech: 'ArcSech',
  exp: 'Exp',
  log: 'Log',
  ln: 'Log',
  sinh: 'Sinh',
  cosh: 'Cosh',
  sech: 'Sech',
  csch: 'Csch',
  coth: 'Coth',
  tanh: 'Tanh',
  sin: 'Sin',
  cos: 'Cos',
  tan: 'Tan',
  sqrt: 'Sqrt',
  abs: 'Abs',
  conjugate: 'Conjugate',
  diff: 'D',
  JacobiTheta1: 'EllipticTheta1',
  JacobiTheta2: 'EllipticTheta2',
  JacobiTheta3: 'EllipticTheta3',
  JacobiTheta4: 'EllipticTheta4',
}

export function get_maple_func() {
  const maple_expr = document.getElementById('input').value;
  let maple_func = (' ' + maple_expr).match(/[a-zA-Z_][a-zA-Z\d_]*?\(/g)?.map( func => func.slice(0, -1) );
  maple_func = [ ...new Set(maple_func) ];
  maple_func.sort( (a, b) => (a.length < b.length) - 1 );
  return !maple_func?.[0] ? [] : maple_func;
}

export function maple2mma() {
  let maple_func_list = [...document.querySelectorAll('.maple-func')].map(e => e.value);
  let mma_func_list = [...document.querySelectorAll('.mma-func')].map(e => e.value);
  let lc = document.getElementById('input').value;
  maple_func_list.forEach( (func, i) => {
    if (func === 'diff') {
      for(let i=1; i<10; i++) {
        let re = new RegExp('diff\\(([a-zA-Z_][a-zA-Z_\\d]*?([\\(\\[][^\\[\\]\\(\\)]*?[\\)\\]])?)' + ', ([a-z])'.repeat(i) + '\\)', 'g');
        lc = lc.replace(re, `D[$1, {$3, ${i}}]`);
      }
      lc = lc.replace(/diff\(([^,]*?), ([a-zA-Z])\$(\d+)\)/g, "D[$1, {$2, $3}]");
    } else {
      lc = match_bracket(lc, ['(', ')'], func + '\\(', f2F, mma_func_list[i]);
    }
  })
  lc = lc.replace(/EllipticTheta(\d)\[/g, 'EllipticTheta[$1, ');

  document.getElementById('input').value += '\r\n\r\n' + lc;
  Notification('bottomRight', '已完成');
}