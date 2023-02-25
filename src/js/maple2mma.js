import { match_bracket } from '../utils/match_bracket';
import { Notification } from '../utils/Notification';

// sin(...) --> sin[...]
function f2F(c, start, end, m) {;
  let func = m[0].slice(0, -1),
    func_ = func[0].toUpperCase() + func.slice(1);
  return c.slice(0, start) + func_ + '[' + c.slice(start + func_.length + 1, end) + ']' + c.slice(end + 1, c.length);
}

export function maple2mma() {
  // convert mathematical expressions of maple to mathematics.
  // input: copy the mathematical expressions of maple
  let lc = document.getElementById('input').value;
  // ln(...) --> log(...)
  lc = lc.replace(/ln(\(|\])/g, 'log$1');
  // operatorname(...) --> Operatorname[...]
  ['exp', 'log', 'sinh', 'cosh', 'sech', 'csch', 'coth', 'tanh', 
    'sin', 'cos', 'tan', 'sqrt', 'abs', 'conjugate',
  ].forEach(func => {
    lc = match_bracket(lc, ['(', ')'], func + '\\(', f2F);
  })
  lc = lc.replaceAll('arc', 'Arc');
  // diff -> D
  lc = lc.replace(/diff\(([^,]*?), ([a-zA-Z])\)/g, "D[$1, $2]"); 
  for(let i=1; i<10; i++) {
    let re = new RegExp('diff\\(([a-zA-Z]+(\\(.*?\\))?)' + ', ([a-z])'.repeat(i) + '\\)', 'g');
    lc = lc.replace(re, `D[$1, {$3, ${i}}]`);
  }
  lc = lc.replace(/diff\(([^,]*?), ([a-zA-Z])\$(\d+)\)/g, "D[$1, {$2, $3}]");
  // (x, ...) --> [x, ...]
  lc = lc.replace(/([a-z_\d])\(([a-z].*?)\)/g, '$1[$2]');

  document.getElementById('input').value += '\r\n\r\n' + lc;
  Notification('bottomRight', '已完成');
}