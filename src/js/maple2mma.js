import { match_bracket } from '../utils/match_bracket';
import { Notification } from '../utils/Notification';

// sin(...) --> sin[...]
function f2F(c, start, end, m, func, Func) {;
  func = func.slice(0, -2);
  return c.slice(0, start) + Func + '[' + c.slice(start + func.length + 1, end) + ']' + c.slice(end + 1, c.length);
} 

export function maple2mma() {
  let maple_func_list = [...document.querySelectorAll('.maple-func')].map(e => e.value);
  let mma_func_list = [...document.querySelectorAll('.mma-func')].map(e => e.value);
  let lc = document.getElementById('input').value;
  maple_func_list.forEach( (func, i) => {
    if (func === 'diff') {
      lc = lc.replace(/diff\(([^,]*?), ([a-zA-Z])\)/g, "D[$1, $2]"); 
      for(let i=1; i<10; i++) {
        let re = new RegExp('diff\\(([a-zA-Z]+(\\(.*?\\))?)' + ', ([a-z])'.repeat(i) + '\\)', 'g');
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