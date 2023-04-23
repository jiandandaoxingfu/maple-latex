import { match_bracket } from '../utils/match_bracket';
import { Notification } from '../utils/Notification';

// ^{ ... } --> ^( ... )
function power(c, start, end) {
	return c.slice(0, start + 1) + '(' + c.slice(start + 2, end) + ')' + c.slice(end + 1, c.length);
}
// sqrt[... ]{ ... } --> ...^(...)
function sqrt(c, start, end, m) {
	let power = m[2] ? parseInt(m[2]) : 2;
	return c.slice(0, start - 1) + ' (' + c.slice(start + m[0].length, end) + ')^(1/' + power + ') ' + c.slice(end + 1, c.length);
}
// sin {...} / [...] --> sin(...)
function f2f(c, start, end, m) {
	let func = m[0].slice(0, -1);
	return c.slice(0, start) + func + '(' + c.slice(start + func.length + 1, end) + ')' + c.slice(end + 1, c.length);
}
// sin ^2 {...} --> (sin(...))^2
function f2f2(c, start, end, m) {
	let [func, i] = m[0].slice(0, -1).split('^');
	return c.slice(0, start) + func + '(' + c.slice(start + func.length + 3, end) + `)^${i}` + c.slice(end + 1, c.length);
}
// \frac{a}{b} --> (a)/{b}
function frac(c, start, end) {
	return c.slice(0, start) + '(' + c.slice(start + 6, end) + ')/' + c.slice(end + 1, c.length);
}
// \frac{d x}{f(x)} --> 1/f(x) d x
function frac_dx(c, start, end) {
	return c.slice(0, start) + '1/(' + c.slice(start+11, end) + ') d x' + c.slice(end + 1);
}
// \tilde{a} --> a
function remove_decoration(c, start, end, m) {
	let func = m[0].slice(0, -1);
	return c.slice(0, start) + ' ' + c.slice(start + func.length + 1, end) + ' ' + c.slice(end + 1, c.length);
}
// expr_{x x x ... x} --> diff(expr, x$n)
function diff(c, start, end) {
	let c_l = c.slice(0, start),
		expr = c.slice(start + 2, end),
		vars = c_l.match(/}[xyzt]( [xyzt])*{$/)[0].slice(1, -1).replaceAll(' ', ' ,');
	c_l = c_l.replace(/}[xyzt]( [xyzt])*{$/, '');
	return c_l + `)${vars} ,${expr}(ffid ` + c.slice(end + 1, c.length);
}
// int_{}^{} expr d x --> int(expr, x=0..1)
function int(c, start, end, m, func) {
	if (func.endsWith('_{')) {
		let lower = c.slice(start + func.length - 1, end);
		let upper;
		let c_ = c.slice(0, start + func.length - 3) + c.slice(end + 1);
		m = match_bracket(c_, ['{', '}'], '\\\\int\\^{', int);
		[end, upper] = JSON.parse(m);
		let fdx = c_.slice(end + 1);
		let idx = fdx.indexOf(' d ');
		let f = fdx.slice(0, idx);
		let x = fdx[idx + 3];
		return c.slice(0, start) + `Int(${f}, ${x}=${lower}..${upper})` + c_.slice(end + 1 + idx + 4);
	} else {
		return JSON.stringify( [end, c.slice(start + func.length - 2, end)] );
	}
}

export function latex2maple() {
	// lc: latex code of align/array/$$, created by mathpix-snipping-tool.exe
	// return: maple expression 
	let lc = document.getElementById('input').value;
	// \begin{*} \end{*} --> ''
	lc = lc.replace(/\\(begin *|end *){.*?}/g, '');

	// \right.\\ \left.
	// \left( * \right) -->  ( * )
	// \left[ * \right] -->  ( * )
	// \left| * |\right --> (abs())
	lc = lc.replace(/\\{/g, '(');
	lc = lc.replace(/\\}/g, ')');
	lc = lc.replace(/\\right *\./g, '');
	lc = lc.replace(/\\left *\./g, '');
	lc = lc.replace(/\\left *([([{])/g, ' ( ');
	lc = lc.replace(/\\right *([)\]}])/g, ' ) ');
	lc = lc.replace(/\\left *\|(.*?)\\right *\|/g, ' (abs($1)) ');
	lc = lc.replace(/\|(.*?)\|/g, ' (abs($1)) ');
	lc = lc.replace(/\\[bB]ig/g, '');

	// &  --> ', '
	// [,] \\ --> , 
	lc = lc.replace(/&/g, ", ");
	lc = lc.replace(/(, *)?\\\\/g, ', ');
	lc = lc.replace(/\\times/g, " ");
	lc = lc.replace(/\\infty/g, "infinity");
	lc = lc.replace(/\\color{\w+}/g, '');
	lc = lc.replace(/~/g, '');
	lc = lc.replace(/\\[cdl]dot[s]/g, ' * ');

	// \tilde{*} --> *
	lc = match_bracket(lc, ['{', '}'], '\\\\(tilde|hat|bar|underline|acute|check|boldsymbol|mathrm){', remove_decoration);
	
	// \lambdax--> lambda x
	lc = lc.replace(/\\(alpha|beta|gamma|delta|lambda|eta|zeta|xi|rho|phi|psi)([a-zA-Z(])/g, '$1 $2');
	
	// v_{n-1} --> v(n-1)
	lc = lc.replace(/_n/g, '(n) ');
	lc = lc.replace(/_{n}/g, '(n) ');
	lc = lc.replace(/_{n([+-])(\d+)}/g, '(n$1$2) ');
	
	// expr_{12x x x ... x} --> diff(expr, x$n)
	lc = lc.replace(/ *_ */g, '_').replace(/{ */g, '{').replace(/ *}/g, '}');
	lc = lc.replace(/_([xyzt])/g, '_{$1}');
	lc = lc.replace(/(\w+)_{(\d{0,}),? ?([xyzt]( [xyzt])*)}/g, '($1$2)_{$3}') ;
	lc = lc.split('').reverse().join('');
	lc = match_bracket(lc, ['}', '{'], '_}', diff);
	lc = match_bracket(lc, [')', '('], '_\\)', diff);
	lc = match_bracket(lc, [']', '['], '_\\]', diff);
	lc = lc.split('').reverse().join('');
	
	// u^{+++} --> u(n+3)
	for (let i = 0; i <= 12; i++) {
		let re = RegExp(`([a-zA-Z0-9]+)\\^{([+-])[+-]{${i}}}`, 'g');
		lc = lc.replace(re, `shift($1, $2${i+1})`);
	}
	lc = lc.replace(/\\operatorname{([a-zA-Z]+)}/g, "\\$1 ");
	lc = lc.replace(/ {2,}/g, " ");
	
	// \int_0^{+infinity} e^{-s} s^5 d s --> int(expr, s=0..infinity)
	lc = match_bracket(lc, ['{', '}'], '\\\\frac{d ([a-zA-Z])}{', frac_dx);
	lc = lc.replace(/\\int_([a-zA-Z0-9]+)/g, '\\int_{$1}');
	lc = lc.replace(/\^([a-zA-Z0-9]+)/g, '^{$1}');
	lc = match_bracket(lc, ['{', '}'], '\\\\int_{', int);
	lc = lc.replace(/\\int (.*?) d ([a-zA-Z])/g, 'Int($1, $2)');
		
	// \frac{expr1}{expr2} --> 2a/2b
	lc = match_bracket(lc, ['{', '}'], '\\\\frac{', frac);

	// x^{3n + 1} --> x^(3n + 1), 
	lc = match_bracket(lc, ['{', '}'], '\\^{', power);
	
	// sqrt[n]{x+y}
	lc = match_bracket(lc, ['{', '}'], 'sqrt(\\[(.*?)\\])?{', sqrt);
	
	// (\d+) --> \d+
	lc = lc.replace(/([ +-/()^=_])[({] *([a-zA-Z\d+]) *[)}]/g, '$1 $2 ');

	// a ^ 2--> a^2
	lc = lc.replace(/ *\^ */g, '^');
	lc = lc.replace(/ *_ */g, '_');

	// sin t --> sin(t)
	lc = lc.replace(/e\^/g, " \\exp ");
	lc = lc.replace(/\\ln /g, "\\log ");
	let func = '(exp|log|arctan|arcsin|arccos|arcsinh|arccot|arccosh|arctanh|arccoth|arcsec|arccsc|arccsch|arcsech|sinh|cosh|sech|csch|coth|tanh|sin|cos|tan|sec|csc)';
	let reg = new RegExp(`\\\\(${func}) (\\\\?[a-zA-Z0-9^_/]+)`, "g");
	lc = lc.replace(reg, " $1($3)");
	reg = new RegExp(`\\\\(${func}) *`, "g");
	lc = lc.replace(reg, " $1");
	reg = new RegExp(`(${func}) *\\^(\\d+) *([{[(])`, "g");
	lc = lc.replace(reg, '$1^$3$4');
	lc = match_bracket(lc, ['{', '}'], func + '{', f2f);
	lc = match_bracket(lc, ['[', ']'], func + '\\[', f2f);
	lc = match_bracket(lc, ['{', '}'], func + '\\^\\d+{', f2f2);
	lc = match_bracket(lc, ['[', ']'], func + '\\^\\d+\\[', f2f2);
	lc = match_bracket(lc, ['(', ')'], func + '\\^\\d+\\(', f2f2);
	
	// \ --> ""
	lc = lc.replace(/\\/g, '');
	lc = lc.replace(/\[/g, '(');
	lc = lc.replace(/\]/g, ')');

	// a_{m} --> a[m]
	lc = lc.replace(/_ ?{(m|k|l|i|j|p|q|n)}/g, '[$1] ');
	lc = lc.replace(/_ ?(m|k|l|i|j|p|q|n)/g, '[$1] ');
	lc = lc.replace(/\s*?_{(\d+)}/g, '$1');
	lc = lc.replace(/\s*?_(\d)/g, '[$1]');
	lc = lc.replace(/_ ?{(.*?)}/g, '[$1]');

	// {/} --> (/)
	lc = lc.replace(/{/g, ' ( ').replace(/}/g, ' ) ');
	
	// remove quad
	lc = lc.replace(/q?quad/g, ' ');

	// [)ijklIixyzt]( --> [)ijklIxyzt] (
	lc = lc.replace(/\)\(/g, ') (');
	lc = lc.replace(/([^a-zA-Z][ijklIxyzt])\(/g, '$1 (');

	// remove extra ,
	lc = lc.replace(/^[\n ]*[,.]/, '').replace(/[,.][ \n]*$/, '').replace(/, *\n *,/g, ',\n')
	
	// f^(*) --> conjugate(f)
	lc = (' ' + lc).replace(/([^a-zA-Z0-9_])([a-zA-Z_][a-zA-Z0-9_]*)\^\(?\*\)?/g, '$1 conjugate($2)');
	lc = lc.replace(/\(\*\)/g, '(conj)');

	// remove extra spaces
	lc = lc.replace(/ {2,}/g, " ");

	document.getElementById('input').value += '\r\n\r\n' + lc;
	Notification('bottomRight', '已完成');
}