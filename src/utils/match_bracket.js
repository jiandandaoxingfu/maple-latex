// 获取[], (), {}中的东西, []里面可以出现[].
// match_bracker(code, ['{', '}'], 'sin{', f2f)
// function f2f(c, start, end, m) {
//   let func = m[0].slice(0, -1);
//   return c.slice(0, start) + func + '(' + c.slice(start + func.length + 1, end) + ')' + c.slice(end + 1, c.length);
// ....sin{x+y} ...
// ..../sin/(/x+y/)... 
// }

export function match_bracket(c, bracket, func, callback) {
  while (c.match(new RegExp(func))) {
    let m = c.match(new RegExp(func)),
        start = m.index,
        len = m[0].length - 1,
        num_l = 0,
        num_r = 0;
    for (var end = start + len; end < c.length; end++) {
      num_l += c[end] === bracket[0];
      num_r += c[end] === bracket[1];
      if (num_l === num_r) {
        c = callback(c, start, end, m);
        break
      }
    }
  }
  return c;
}