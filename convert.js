function convert(c, bracket, func, callback) {
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
				c = callback(c, bracket, m, pos, i);
				break
			}
		}
	}
	return c;
}

function power(c, bracket, m, pos, i) {
	return c.slice(0, pos + 1) + bracket[2] + c.slice(pos + 2, i) + bracket[3] + c.slice(i + 1, c.length);
}

function sqrt(c, bracket, m, pos, i) {
	let power = m[2] ? parseInt(m[2]) : 2;
	return c.slice(0, pos-1) + ' (' + c.slice(pos + m[0].length, i) + ')^(1/' + power + ') ' + c.slice(i + 1, c.length);
}

function f2F(c, bracket, m, pos, i) {;
	let func = m[0].slice(0, -1),
		func_ = func[0].toUpperCase() + func.slice(1);
	return c.slice(0, pos) + func_ + '[' + c.slice(pos + func_.length + 1, i) + ']' + c.slice(i + 1, c.length);
}

var c = 'a^{3x + 4t} sin(x + 2 ( t+3)) + conjugate(x) + abs(x) + sqrt[3.5]{2 x+ 1+ t} + sinh(x+c t)';

c = convert(c, ['{', '}', '(', ')'], '\\^{', power);
console.log(c);

c = convert(c, ['{', '}', '(', ')'], 'sqrt(\\[(.*?)\\])?{', sqrt);
console.log(c);

['exp', 'log', 'sinh', 'cosh', 'tanh', 'sin', 'cos', 'tan', 'sqrt', 'abs', 'conjugate'].forEach(func => {
	c = convert(c, ['(', ')', '[', ']'], func + '\\(', f2F);
});

console.log(c);