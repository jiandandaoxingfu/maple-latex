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
// \frac{a}{b} --> (a)/{b}
function frac(c, start, end) {
	return c.slice(0, start) + '(' + c.slice(start + 6, end) + ')/' + c.slice(end + 1, c.length);
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

export function latex2maple() {
	// lc: latex code of align/array/$$, created by mathpix-snipping-tool.exe
	// return: maple expression 
	let lc = document.getElementById('input').value;
	// \right.\\ \left.
	// \left( * \right) -->  ( * )
	// \left[ * \right] -->  ( * )
	// \left| * |\right --> (abs())
	lc = lc.replace(/\\right\./g, '');
	lc = lc.replace(/\\left\./g, '');
	lc = lc.replace(/\\left(\(|\[|\\{)/g, ' ( ');
	lc = lc.replace(/\\right(\)|\]|\\})/g, ' ) ');
	lc = lc.replace(/\\left\|(.*?)\\right\|/g, ' (abs($1)) ');
	lc = lc.replace(/\\[bB]ig/g, '');
	// ' i(' --> ' i (';
	lc = lc.replace(/ i\(/g, ' i (');
	// &  --> ' '
	// [,] \\ --> , 
	lc = lc.replace(/&/g, " ");
	lc = lc.replace(/(, *)?\\\\/g, ' ');
	lc = lc.replace(/\\times/g, " ");
	// \tilde{*} --> *
	lc = match_bracket(lc, ['{', '}'], '\\\\(tilde|hat|bar|underline|acute|check|boldsymbol|mathrm){', remove_decoration);
	// \lambdax--> lambda x
	lc = lc.replace(/\\(alpha|beta|gamma|delta|lambda|eta|zeta|xi|rho|phi|psi)([a-zA-Z])/g, '$1 $2');
	// \frac{expr1}{expr2} --> 2a/2b
	lc = match_bracket(lc, ['{', '}'], '\\\\frac{', frac);
	// v_{n-1} --> v(n-1)
	lc = lc.replace(/_{n}/g, '(n) ');
	lc = lc.replace(/_{n([+-])(\d+)}/g, '(n$1$2) ');
	// expr_{12x x x ... x} --> diff(expr, x$n)
	lc = lc.replace(/ *_ */g, '_').replace(/{ */g, '{').replace(/ *}/g, '}');
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
	// x^{3n + 1} --> x^(3n + 1), 
	lc = match_bracket(lc, ['{', '}'], '\\^{', power);
	// sqrt[n]{x+y}
	lc = match_bracket(lc, ['{', '}'], 'sqrt(\\[(.*?)\\])?{', sqrt);
	// sin t --> sin(t)
	{
		lc = lc.replace(/e\^/g, " \\exp ");
		lc = lc.replace(/\\ln /g, "\\log ");
		let func = '(exp|log|sinh|cosh|sech|csch|coth|tanh|sin|cos|tan|arccos|arcsin|arctan|arccot)';
		let reg = new RegExp(`\\\\(${func}) ([a-zA-Z0-9])`, "g");
		lc = lc.replace(reg, " $1($3)");
		reg = new RegExp(`\\\\(${func}) `, "g");
		lc = lc.replace(reg, " $1");
		lc = match_bracket(lc, ['{', '}'], func + '{', f2f);
		lc = match_bracket(lc, ['[', ']'], func + '\\[', f2f);
	}
	// \ --> ""
	lc = lc.replace(/\\/g, '');
	lc = lc.replace(/\[/g, '(');
	lc = lc.replace(/\]/g, ')');

	// a_{m} --> a[m]
	lc = lc.replace(/_ ?{(m|k|l|i|j|p|q|n)}/g, '[$1] ');
	lc = lc.replace(/\s*?_{(\d+)}/g, '$1');
	lc = lc.replace(/_ ?{(.*?)}/g, '[$1]');

	// {/} --> (/)
	lc = lc.replace(/{/g, ' ( ').replace(/}/g, ' ) ');

	// )( --> ) (
	lc = lc.replace(/\)\(/g, ') (').replace(/ {2,}/g, " ");

	// (*) --> (ccc)
	lc = lc.replace(/\(\*\)/g, '(ccc)');

	document.getElementById('input').value += '\r\n\r\n' + lc;
	Notification('bottomRight', '已完成');
}