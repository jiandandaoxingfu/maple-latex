(this["webpackJsonpmaple-latex"]=this["webpackJsonpmaple-latex"]||[]).push([[0],{87:function(e,t,a){},88:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),l=a.n(r),i=a(25),c=a.n(i),p=(a(87),a(62)),s=a(63),o=a(77),u=a(64),g=a(65),d=a(80),h=a(76),f=(a(88),a(101)),$=a(100),x=a(45),m=a(27),b=a(39),v=a(99),j=a(102),y=a(98),w=a(97),O=a(103),_=new(a(66).a)({html:!0,breaks:!1,langPrefix:"language-"}),T=f.a.Sider,E=f.a.Header,k=f.a.Content,C=f.a.Footer,A=$.a.Group,z=x.a.Group;function M(e){return document.getElementById(e)}!function(){document.getElementsByTagName("head")[0].innerHTML+="\n    <script type=\"text/x-mathjax-config\">\n        MathJax.Hub.Config({\n            messageStyle: 'none',\n            tex2jax: {inlineMath: [['$','$']], preview: 'none'},\n            jax: [\"input/TeX\", \"output/SVG\"],\n            TeX: { equationNumbers: { }}\n        });\n    <\/script>\n  ";var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=default"),document.getElementsByTagName("head")[0].appendChild(e)}();var B=!1,H="",I=!0;function L(){I?(H=M("input").value,M("input").value="\u53ef\u4ee5\u5b9e\u65f6\u9884\u89c8\u6570\u5b66\u516c\u5f0f(\u5148\u8f93\u5165\u6570\u5b66\u73af\u5883)\uff0c\u521b\u5efa\u5217\u8868\u548c\u77e9\u9635\n\u5904\u7406Maple\u751f\u6210\u7684latex\u4ee3\u7801\u7b49\u3002\n\n\u53cc\u51fb\uff1a \u5de6\u4fa7\u6536\u8d77/\u6062\u590d\uff0c\n    \n\u6ce8\uff1a\n    1. \u4e2a\u4eba\u7528\uff0c\u4e0d\u5177\u6709\u666e\u9002\u6027\uff0c\u4e0d\u4fdd\u8bc1\u5b8c\u5168\u6b63\u786e\u3002 \n    2. \u4ec5\u652f\u6301latex\u6570\u5b66\u516c\u5f0f\uff0c\u5176\u5b83\u547d\u4ee4\u4e0d\u652f\u6301\u3002\n    \n\u6b22\u8fce\u4f7f\u7528\uff0c \u5982\u51fa\u73b0\u9519\u8bef\uff0c \u5e0c\u671b\u53ef\u4ee5\u628a\u76f8\u5e94\u7684tex\u4ee3\u7801\u548c\u9519\u8bef\u63cf\u8ff0\n\u53d1\u9001\u81f3: jiaminxin@outlook.com.\n\nexcel\u6570\u636e\u8f6c\u5217\u8868\uff1a  \n      \u8f93\u5165\u6846\u6e05\u7a7a\uff0c\u5c06excel\u6570\u636e\u590d\u5236\u5230\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u8f6c\u6362\u6309\u94ae\n      \u5373\u53ef. \u8981\u6c42\u4e0d\u540c\u884c\u8981\u6362\u884c\uff0c\u6570\u636e\u4e2d\u65e0\u7a7a\u683c, \n      \u4e0d\u540c\u6570\u636e\u95f4\u6709\u7a7a\u683c(\u6216tab\u952e)\u9694\u5f00.\n      \n\u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316maple\u751f\u6210\u7684latex\u4ee3\u7801\uff0c\u53bb\u9664\u5197\u4f59\n      \u5c06latex\u4ee3\u7801\u7c98\u8d34\u5728\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u683c\u5f0f\u5316\u5373\u53ef\u3002\n    \n\u5c55\u793a\u7cfb\u6570\u683c\u5f0f\u5316\uff1a\n      \u4e3b\u8981\u9488\u5bf9\u65e0\u7a77\u5c55\u5f00\u540c\u6b21\u5e42\u7cfb\u6570\u3002\n    \nszce\u683c\u5f0f\u5316\uff1a\n      \u8fde\u7eed\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\n      \u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n    \n\u79bb\u6563szce\u683c\u5f0f\u5316\uff1a\n      \u79bb\u6563\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\n      \u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n    \nDT-gT: \n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT.\n    \nDT-coe:\n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT\u540e\u6bd4\u8f83\u5404\u5f0f\u4e2d\n      lambda\u5404\u6b21\u5e42\u7cfb\u6570\u6240\u5f97\u7b49\u5f0f\n\nlatex2maple:\n      \u5c06mathpix-snipping-tool\u901a\u8fc7\u56fe\u7247\u8bc6\u522b\u751f\u6210\u7684latex\u4ee3\u7801\n      \u8f6c\u5316\u6210maple\u7684\u8868\u8fbe\u5f0f\u3002 \u652f\u6301\u5355\u4e2a\u516c\u5f0f(\u53ef\u4ee5\u591a\u884c)\n      \u6216\u8005\u591a\u4e2a\u516c\u5f0f\u9017\u53f7\u9694\u5f00\u3002 \n\nmaple2mma:\n      \u5c06\u590d\u5236\u7684maple\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3amathematics\u7684\u8868\u8fbe\u5f0f\u3002\n      \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u51fd\u6570\uff1a\n      exp, log, abs, sqrt, conjugate, Re, Im,\n      sin, cos, tan, sinh, cosh, tanh, sech, csch, \n\ngrammarly:\n      \u4f7f\u7528Grammarly\u7f51\u7ad9\u68c0\u67e5\u8bba\u6587(\u82f1\u8bed)\u5c0f\u9519\u8bef\u3002\n      \u5c06tex\u5185\u5bb9\u4e2d\u7684\u6570\u5b66\u516c\u5f0f\u7b49\u5173\u952e\u4fe1\u606f\u5220\u9664\u3002\n\ntypora:\n      \u8bfb\u53d6typora\u751f\u6210\u7684markdown\u6587\u6863\u5e76\u89e3\u6790\u3002\n      \u76ee\u524d\u4ec5\u652f\u6301\u6807\u9898\uff0c\u6570\u5b66\u516c\u5f0f\u89e3\u6790\u3002\n\nTo Do: \n    Tex\u683c\u5f0f\u5316\uff1a\n            \u683c\u5f0f\u5316tex\u6587\u672c\u3002\n    "):(M("input").value=H,Z(M("input"),M("output"))),I=!I}var R=!0;function Z(e,t){if(!B){B=!0;var a=e.value.replace(/(beta|gamma|eta|zeta|xi|alpha|delta)/g,"$1   ");M("buffer").innerHTML=a.replace(/\n/g,"<br />"),"input"===e.tagName.toLowerCase()&&(M("buffer").innerHTML="$"+M("buffer").innerHTML+"$"),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,M("buffer")],[S,t])}}function S(e){B=!1,e.innerHTML=M("buffer").innerHTML}function D(){M("table").style.display="block",M("tip").style.display="block"}function N(){var e=M("input").value;if(""!==e){var t=e.match(/\r\n|\n/g).length+1,a=e.split(/\s+|\t|\n|\r\n/g);"\n"===e[e.length-1]&&(t-=1,a.pop());var n=a.length/t;if(n%1===0){e=this.data_format(a);var r="".padEnd(2*n,"|c");M("input").value+="\r\n \r\n\\begin{tabular}{"+r+"|}\r\n\\hline\r\n"+e+"\\hline\r\n\\end{tabular}"}else alert("\u6570\u636e\u4e0d\u89c4\u8303")}}function q(){var e=M("input").value;return e="<hr><hr>\r\n\r\n \u539f\u7ed3\u679c\uff1a\r\n$$"+(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\!)/g," ")).replace(/(\s,)/g,"\\\\ "))+"$$<hr>"}function F(e){var t=M("input").value;return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\n/g,"")).replace(/,0,/g,",")).replace(/[+-]?{\\frac\s{\\rm\sd}{{\\rm\sd}\w}}\s\\left\(\s[0-9]+\s\\right\)/g," ")).replace(/{\\frac {\\partial }{\\partial (\w)}} \\left\( (.*?) (\\left\( x,t \\right\).*?)\\right\)/g,"($2 $3)_{$1}")).replace(/{\\frac\s{\\partial\s}{\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{\\partial\s\^{(\d+)}}{\\partial\s{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\rm d}{{\\rm d}(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{{\\rm d}\^{(\d+)}}{{\\rm d}{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d}}{\\partial\s(\w)\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s(\w)\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$1$3$2} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$2$1$3} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$5_{$2$1$4$3} $6"),"1"===e&&(t=(t=(t=t.replace(/D_{{\d}}\s+\\left\(\s+(\w)\s+\\right\)\s+\\left\(\s+(\d),(\w)\s+\\right\)/g,"$1_{$2,$3}")).replace(/(\w)\s+\\left\(\s+(\d),\w\s+\\right\)/g,"$1_{$2}")).replace(/\s,/g," =0, \\\\")),t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/\\left\(\s[a-z](,[a-z]){0,}\s\\right\)/g," ")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/{({\w})}/g,"$1")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+([^\^])/g,"$1 $3")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+\^({\d+})/g,"$1^$3")).replace(/([a-zA-Z]+)_{(\w+)}_{(\w+)}/g,"$1_{$2,$3}")).replace(/\s,/g,"\t \\\\\t ")).replace(/\\\\\s+\\\\/g,"\\\\")).replace(/\s{2,}/g," ")}function J(){var e=M("input").value;return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/\s,/g,"\t \\\\\t ")).replace(/\s{2,}/g," ")).replace(/\\left\(\sn\s\\right\)/g,"")).replace(/\\left\(\sn([+-])1\s\\right\)/g,"^{$1}")).replace(/\\left\(\sn([+-])2\s\\right\)/g,"^{$1$1}")).replace(/\\left\(\sn([+-])3\s\\right\)/g,"^{$1$1$1}")).replace(/\\left\(\sn([+-])4\s\\right\)/g,"^{$1$1$1$1}")).replace(/\\left\(\sn([+-])5\s\\right\)/g,"^{$1$1$1$1$1}")).replace(/\\left\(\sn([+-])6\s\\right\)/g,"^{$1$1$1$1$1$1}")).replace(/\\left\(\sn([+-])7\s\\right\)/g,"^{$1$1$1$1$1$1$1}")}function U(e,t){var a;a="1"===t?J():F(e);var n=q();M("input").value=n+"\r\n\r\n\r\n\u8f6c\u6362\u7ed3\u679c\uff1a\r\n \r\n\r\n$"+a+"$",Z(M("input"),M("output"))}function G(e){var t,a;t=(t=(t=(t=(t="1"===e?J():F("0")).replace(/\s/g,"")).replace(/.*?{array}{.*?}(.*)\\end.*/,"$1")).replace(/\\lambda/g,"\\lambda ")).replace(/\\\\/g,"&").split("&"),a="0"===e?t.map((function(e){var t=function(e){if(/^[^-+]*?\w_\{\d\d,\w\}/.test(e))return e;"-"!==e[0]&&(e="+"+e);var t=e.match(/[+-][^+-]*?\w_\{\d\d,\w\}[^+-]*?/),a="";null!==t&&(a=t[0],e=e.replace(t[0],""));"+"===a[0]&&(a=a.slice(1));return a+e}(e);return[t,P(t)]})):t.map((function(e){return[e,P(e)]}));var n="",r="";a.forEach((function(e){n+="&"+e[0]+"=0,\\\\ \r\n",r+=e[1]})),n="\\begin{align}\r\n"+n+"\\end{align}",r="\\begin{align}\r\n"+r+"\\end{align}";var l=q();M("input").value=l+"\r\n\r\n"+n+"\r\n\r\n<hr><hr>\u4f9d\u8d56\u5173\u7cfb:\r\n",M("input").value=M("input").value+"$"+r+"$<hr><hr>",Z(M("input"),M("output"))}function P(e){var t=(e+=" ").match(/(-|\+)V_{\d\d}(?=(\+|\s|-))/g),a="";return t&&t.forEach((function(t){a+="-"+t,e=e.replace(t,"")})),"+"===(e=(e=(e="&"+a+"="+e+",\\\\ \r\n").replace(/--/g,"+")).replace(/-\+/g,"-"))[1]?e="&"+e.slice(2,e.length):"="===e[1]&&(e=""),e}function W(){var e=F("0");e=(e=(e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).replace(/\s/g,"")).replace(/&/g,"=0,\\\\&")).replace(/\\\\([^&])/g,"=0,\\\\&$1")).replace(/\\left\[\\begin{array}{\w+}(.*?)\\end{array}\\right\]/,"\\begin{align}& $1=0.\\end{align}")).replace(/\\lambda/g,"\\lambda ");var t=q();M("input").value=t+"\r\n\r\n\r\n$"+e+"$",Z(M("input"),M("output"))}function Q(){var e=F("0");e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).slice(1,e.length-1)).replace(/\\\\/g,"=0, \\\\\r\n&")).replace(/((\s|\+|-))_{x}/g,"$1 0"),e="\\begin{align}&".concat(e,"=0.\\end{align}");var t=q();M("input").value=t+"\r\n\r\n\r\n$"+e+"$",Z(M("input"),M("output"))}function V(){var e=M("input").value;e=(e=(e=[[e=(e=(e=(e=e.replace(/\\right\./g,"")).replace(/\\left\./g,"")).replace(/&/g," ")).replace(/\\\\/g,"")]]).map((function(e){return e.map((function(e){e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\(tilde|hat|bar|underline|acute|check){(.*?)}/g,"$2")).replace(/\\mathrm{([a-zA-Z])}/g,"$1")).replace(/\\times/g," ")).replace(/\\(lambda|zeta|eta|xi|gamma|alpha|beta|delta|rho)([a-zA-Z])/g,"$1 $2")).replace(/\\left[(\[\]]/g," ( ")).replace(/\\right[\)\]]/g," ) ")).replace(/_{n}/g,"(n) ")).replace(/_{n([+-])(\d+)}/g,"(n$1$2) ")).replace(/(\w)_{([a-z])}/g," diff($1, $2) ").replace(/ {2,}/g," ")).replace(/\(([a-zA-Z0-9/+\^-\s]+)\)_{([a-z])}/g," diff($1, $2) ");for(var t=1;t<=12;t++){var a=RegExp("(\\w)_{(\\d+),(\\s\\w){".concat(t,"}}"),"g"),n=RegExp("(\\w)_{(\\w)(\\s\\w){".concat(t,"}}"),"g"),r=RegExp("\\(([a-zA-Z0-9/+\\^-\\s]+)\\)_{(\\w)(\\s\\w){".concat(t,"}}"));e=(e=(e=e.replace(a," diff($1$2, $3$$".concat(t,") "))).replace(n," diff($1, $2$$".concat(t+1,") "))).replace(r," diff($1, $2$$".concat(t+1,") "))}for(var l=0;l<=12;l++){var i=RegExp("([a-zA-Z0-9]+)\\^{([+-])[+-]{".concat(l,"}}"),"g");e=e.replace(i,"shift($1, $2".concat(l+1,")"))}return e=Y(e=(e=e.replace(/\\operatorname{([a-zA-Z]+)}/g,"\\$1 ")).replace(/ {2,}/g," "),["{","}"],"\\^{",K),e=(e=(e=Y(e,["{","}"],"sqrt(\\[(.*?)\\])?{",ee)).replace(/e\^/g," \\exp ")).replace(/\\ln /g,"\\log "),["exp","log","sinh","cosh","sech","csch","coth","tanh","sin","cos","tan"].forEach((function(t){var a=new RegExp("\\\\("+t+") ([a-zA-Z0-9])","g");e=e.replace(a," $1($2)"),a=new RegExp("\\\\("+t+") ","g"),e=Y(e=e.replace(a," $1"),["{","}"],t+"{",te),e=Y(e,["[","]"],t+"\\[",te)})),e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/frac/g,"")).replace(/}{/g,") / (")).replace(/\\/g,"")).replace(/\[/g,"(")).replace(/\]/g,")")).replace(/_ ?{(m|k|l|i|j|p|q|n)}/g,"[$1] ")).replace(/\s*?_{(\d+)}/g,"$1")).replace(/_ ?{(.*?)}/g,"[$1]")).replace(/{/g," ( ").replace(/}/g," ) ")).replace(/\)\(/g,") (").replace(/ {2,}/g," ")}))})))[0][0],M("input").value+="\r\n\r\n"+e}function X(){var e=M("input").value;["exp","log","sinh","cosh","sech","csch","coth","tanh","sin","cos","tan","sqrt","abs","conjugate"].forEach((function(t){e=Y(e,["(",")"],t+"\\(",ae)})),e=(e=(e=e.replaceAll("arc","Arc")).replace(/diff\(([^,]*?), ([a-zA-Z])\)/g,"D[$1, $2]")).replace(/diff\(([^,]*?), ([a-zA-Z])\$(\d+)\)/g,"D[$1, {$2, $3}]"),M("input").value+="\r\n\r\n"+e}function Y(e,t,a,n){for(;e.match(new RegExp(a));)for(var r=e.match(new RegExp(a)),l=r.index,i=0,c=0,p=l+(r[0].length-1);p<e.length;p++)if((i+=e[p]===t[0]?1:0)===(c+=e[p]===t[1]?1:0)){e=n(e,l,p,r);break}return e}function K(e,t,a){return e.slice(0,t+1)+"("+e.slice(t+2,a)+")"+e.slice(a+1,e.length)}function ee(e,t,a,n){var r=n[2]?parseInt(n[2]):2;return e.slice(0,t-1)+" ("+e.slice(t+n[0].length,a)+")^(1/"+r+") "+e.slice(a+1,e.length)}function te(e,t,a,n){var r=n[0].slice(0,-1);return console.log([r,e]),e.slice(0,t)+r+"("+e.slice(t+r.length+1,a)+")"+e.slice(a+1,e.length)}function ae(e,t,a,n){var r=n[0].slice(0,-1),l=r[0].toUpperCase()+r.slice(1);return e.slice(0,t)+l+"["+e.slice(t+l.length+1,a)+"]"+e.slice(a+1,e.length)}function ne(){var e=M("input").value;e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\cite{.*?}/g,"\\cite{}")).replace(/\\eqref{.*?}/g,"\\eqref{}")).replace(/\\ref{.*?}/g,"\\ref{}")).replace(/\\label{.*?}/g,"")).replace(/\$.*?\$/g,"$$")).replace(/\\begin{align\*?}(.|\n)*?\\end{align\*?}/g,"$ $")).replace(/\\begin{equation\*?}(.|\n)*?\\end{equation\*?}/g,"$ $")).replace(/\\begin{thebibliography\*?}(.|\n)*?\\end{thebibliography\*?}/g,"")).replace(/\d{8}/g,"1")).replace(/(.|\n)*\\begin{abstract}/,""),M("input").value="\r\n\r\n"+e}function re(){var e=M("typora-upload").files[0];if(e.name.match(/\.md$/)){var t=new FileReader;t.onload=function(){var e=this.result,t=e.match(/\${1,2}(\r\n|.){1,}?\${1,2}/g)||[];t=t.map((function(t){return e=e.replace(t,"EQUATION-TO-REPLACE"),t.replace(/(<|>)/g," $1 ").replace(/\\\\/g,"\\\\  ").replace(/\\(R|C|Z|N)([^a-zA-Z])/g,"\\mathbb{$1}$2").replace(/\\part([^i])/g,"\\partial$1").replace(/(^\$\$|\$\$$)/g,"$$$$$$")})),e=e.replace(/(\r\n#+.*?\r\n)/g,"\r\n$1\r\n"),e=_.render(e),t.forEach((function(t){e=e.replace("EQUATION-TO-REPLACE",t)})),document.getElementById("output").innerHTML=e,document.getElementById("input").value=e,window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,M("output")])},t.readAsText(e)}}document.body.addEventListener("dblclick",(function(){R?(M("left").style.display="none",M("sider").style.minWidth="99%",M("sider").style.maxWidth="99%",M("sider").style.width="99%"):(M("left").style.display="block",M("sider").style.minWidth="50%",M("sider").style.maxWidth="50%",M("sider").style.width="50%"),R=!R}));var le=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={rows:3,columns:4,display:"none"},e.onTextChange=function(t){var a=Math.min(parseInt(t.target.value),10);"row"===t.target.id?e.setState({rows:a}):e.setState({columns:a})},e.eleOnInput=function(e){Z(e.target,M("tip"))},e.eleOnBlur=function(e){e.target.innerHTML=""},e.eleOnFocus=function(e){Z(e.target,M("tip"))},e.create_inputs=function(){for(var t=e.state.rows,a=e.state.columns,r=[],l=0;l<t;l++){for(var i=[],c=0;c<a;c++)i.push(Object(n.jsx)(m.a,{style:{flex:"1"},children:Object(n.jsx)($.a,{className:"ele",style:{margin:"5px"},onInput:e.eleOnInput,onBlur:e.eleOnBlur,onFocus:e.eleOnFocus})},Math.random()));r.push(Object(n.jsx)(b.a,{style:{display:"flex",flexDirection:"row"},children:i},Math.random()))}return Object(n.jsx)(A,{style:{width:"98%"},children:r})},e.data_format=function(t){for(var a=e.state.rows,n=e.state.columns,r=Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.length})))),l="",i=0;i<a;i++){for(var c=0;c<n-1;c++)l+=t[i*n+c].padEnd(r," ")+" & ";l+=t[i*n+n-1].padEnd(r," ")+" \\\\\r\n"}return l},e.table2matrix=function(){var t,a=document.getElementsByClassName("ele"),n=[],r="\u8865\u96f6"===document.getElementById("padend").getElementsByTagName("span")[0].innerText?"0":"",l=Object(s.a)(a);try{for(l.s();!(t=l.n()).done;){var i=t.value;n.push(i.value||r)}}catch(o){l.e(o)}finally{l.f()}var c=e.data_format(n);if("\u751f\u6210\u77e9\u9635"===window.event.target.innerText)M("input").value+="\r\n$$\r\n\\left(\r\n\\begin{matrix}\r\n"+c+"\\end{matrix}\r\n\\right)\r\n$$",Z(M("input"),M("output"));else{var p="".padEnd(2*e.state.columns,"|l");M("input").value+="\r\n\\begin{tabular}{"+p+"|}\r\n\\hline\r\n"+c+"\\hline\r\n\\end{tabular}"}},e.close_table=function(){M("table").style.display="none",M("tip").style.display="none"},e}return Object(g.a)(a,[{key:"render",value:function(){var e={table:{position:"absolute",width:"600px",top:"150px",left:"0",right:"0",margin:"0 auto",display:this.state.display,background:"white"},InputGroup:{float:"left",maxWidth:"200px",top:"4px",left:"10px"},Button:{margin:"4px",padding:"5px 10px"},Switch:{top:"10px",transform:"scale(1.25)",left:"-10px"}};return Object(n.jsxs)(v.a,{id:"table",style:e.table,children:[Object(n.jsxs)("div",{id:"button_container",style:{position:"relative",left:"0",top:"0",textAlign:"center"},children:[Object(n.jsx)(A,{style:e.InputGroup,children:Object(n.jsxs)(b.a,{gutter:6,children:[Object(n.jsx)(m.a,{span:12,children:Object(n.jsx)($.a,{id:"row",addonBefore:"\u884c",onChange:this.onTextChange,value:this.state.rows},"100")}),Object(n.jsx)(m.a,{span:12,children:Object(n.jsx)($.a,{id:"column",addonBefore:"\u5217",onChange:this.onTextChange,value:this.state.columns},"101")})]})}),Object(n.jsxs)(z,{style:{left:"25px"},children:[Object(n.jsx)(j.a,{style:e.Switch,checkedChildren:"\u8865\u96f6",unCheckedChildren:"\u4e0d\u8865",defaultChecked:!0,id:"padend"}),Object(n.jsx)(x.a,{style:e.Button,onClick:this.table2matrix,type:"danger",children:"\u751f\u6210\u77e9\u9635"}),Object(n.jsx)(x.a,{style:e.Button,onClick:this.table2matrix,type:"default",children:"\u751f\u6210\u5217\u8868"}),Object(n.jsx)(x.a,{style:e.Button,onClick:this.close_table,type:"primary",children:"\u5173\u95ed"})]})]}),Object(n.jsx)("div",{id:"inputs",children:this.create_inputs()})]})}}]),a}(l.a.Component),ie=function(){var e={left:{width:"50%",diaplay:"bolck",overflow:"hidden"},header:{height:"16%",backgroundColor:"white",overflowY:"scroll",lineHeight:"20px",padding:"10px"},content:{backgroundColor:"white",height:"80%"},button:{borderRadius:"3px",margin:"2px",padding:"5px 10px"},textarea:{width:"100%",height:"100%",padding:"10px 10px",outline:"none",border:"none"},output:Object(p.a)({width:"100%",height:"100%",background:"white",padding:"20px 40px",userSelect:"none",overflowY:"scroll"},"userSelect","none"),footer:{textAlign:"center",height:"30px",minHeight:"30px",padding:"3px 0"},tip:{position:"absolute",height:"30px",top:"130px",left:"0",right:"0",margin:"0 auto",textAlign:"center",zIndex:"2",display:"none"}},t=["\u4f7f\u7528\u8bf4\u660e","\u521b\u5efa\u77e9\u9635","Excel\u8f6c\u5217\u8868","latex2maple","maple2mma","DT-gT","DT-coe","\u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316","\u5c55\u5f0f\u7cfb\u6570\u683c\u5f0f\u5316","\u8fde\u7eedszce\u683c\u5f0f\u5316","\u79bb\u6563\u516c\u5f0f\u683c\u5f0f\u5316","\u79bb\u6563szce\u683c\u5f0f\u5316","grammarly","typora"],a=[L,D,N,V,X,W,Q,function(){U("0","0")},function(){U("1","0")},function(){G("0")},function(){U("0","1")},function(){G("1")},ne,re],r=["danger","primary","primary","default","default","primary","primary","default","default","default","primary","primary","default","default"];return Object(n.jsxs)("div",{children:[Object(n.jsxs)(f.a,{children:[Object(n.jsxs)(f.a,{id:"left",style:e.left,children:[Object(n.jsx)(E,{style:e.header,children:Object(n.jsx)("div",{children:function(){for(var l=t.length,i=[],c=0;c<l-1;c++)i.push(Object(n.jsx)(x.a,{style:e.button,onClick:a[c],type:r[c],children:t[c]},c));return i.push(Object(n.jsx)(y.a,{beforeUpload:a[l-1],id:"typora-upload",children:Object(n.jsx)(x.a,{style:e.button,type:r[l-1],icon:Object(n.jsx)(O.a,{}),children:t[l-1]},l-1)})),i}()})}),Object(n.jsx)(w.a,{dashed:!0,style:{margin:"2px 0"}}),Object(n.jsx)(k,{style:e.content,children:Object(n.jsx)("textarea",{id:"input",style:e.textarea,onInput:function(){Z(M("input"),M("output"))}})}),Object(n.jsxs)(C,{style:e.footer,children:["Maple-Latex v2.0.0 \xa92022 Created by ",Object(n.jsx)("a",{target:"_blank",href:"https://github.com/jiandandaoxingfu/maple-latex",children:"JMx"})]})]}),Object(n.jsx)(w.a,{dashed:!0,style:{margin:"0 2px"},type:"vertical"}),Object(n.jsx)(T,{id:"sider",width:"50%",style:{height:document.documentElement.clientHeight+"px"},children:Object(n.jsx)("div",{id:"output",style:e.output})})]}),Object(n.jsx)("div",{id:"buffer",style:{display:"none"}}),Object(n.jsx)("div",{id:"tip",style:e.tip}),Object(n.jsx)(le,{})]})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,104)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),l(e),i(e)}))};c.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(ie,{})}),document.getElementById("root")),ce()}},[[92,1,2]]]);
//# sourceMappingURL=main.32fd522d.chunk.js.map