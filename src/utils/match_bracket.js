// 获取[], (), {}中的东西, []里面可以出现[].
export function match_bracket(c, bracket, func, callback) {
  while (c.match(new RegExp(func))) {
    let m = c.match(new RegExp(func)),
       pos = m.index,
      len = m[0].length - 1,
      num_l = 0,
      num_r = 0;
    for (var i = pos + len; i < c.length; i++) {
      num_l += c[i] === bracket[0] ? 1 : 0;
      num_r += c[i] === bracket[1] ? 1 : 0;
      if (num_l === num_r) {
        c = callback(c, pos, i, m);
        break
      }
    }
  }
  return c;
}