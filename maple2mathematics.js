expr = 'exp((2*x+45)*t+(15/4*I)*x + 4) + fjawi +sin((2*x+45)*t+(15/4*I)*x + 4) + exp((2*x+45)*t+(15/4*I)*x + 4) + 32rj2qig+ exp((2*x+45)*t+(15/4*I)*x + 4)';

['exp', 'sin', 'cos', 'log'].forEach(func => {
	while (expr.indexOf(func) > -1) {
		let pos = expr.indexOf(func),
			num_l = 0,
			num_r = 0;
		for (var i = pos + 3; i < expr.length; i++) {
			num_l += expr[i] === "(" ? 1 : 0;
			num_r += expr[i] === ")" ? 1 : 0;
			if (num_l === num_r) {
				expr = expr.slice(0, pos) + func[0].toUpperCase() + func.slice(1) + '[' + expr.slice(pos + 4, i) + ']' + expr.slice(i + 1, expr.length);
				break
			}
		}
	}
})

console.log(expr)