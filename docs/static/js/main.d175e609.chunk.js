(this["webpackJsonpmaple-latex"]=this["webpackJsonpmaple-latex"]||[]).push([[0],{87:function(e,t,a){},88:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),l=a.n(r),i=a(25),c=a.n(i),s=(a(87),a(62)),p=a(63),o=a(77),u=a(64),d=a(65),g=a(80),h=a(76),f=(a(88),a(101)),$=a(100),x=a(45),m=a(27),b=a(39),j=a(99),y=a(102),v=a(98),w=a(97),O=a(103),_=new(a(66).a)({html:!0,breaks:!1,langPrefix:"language-"}),T=f.a.Sider,E=f.a.Header,k=f.a.Content,C=f.a.Footer,M=$.a.Group,A=x.a.Group;function z(e){return document.getElementById(e)}!function(){document.getElementsByTagName("head")[0].innerHTML+="\n    <script type=\"text/x-mathjax-config\">\n        MathJax.Hub.Config({\n            messageStyle: 'none',\n            tex2jax: {inlineMath: [['$','$']], preview: 'none'},\n            jax: [\"input/TeX\", \"output/SVG\"],\n            TeX: { equationNumbers: { }}\n        });\n    <\/script>\n  ";var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=default"),document.getElementsByTagName("head")[0].appendChild(e)}();var B=!1,H="",I=!0;function L(){I?(H=z("input").value,z("input").value="\n    \u529f\u80fd: \n      \u53ef\u4ee5\u5b9e\u65f6\u9884\u89c8\u6570\u5b66\u516c\u5f0f(\u5148\u8f93\u5165\u6570\u5b66\u73af\u5883)\uff0c\u521b\u5efa\u5217\u8868\u548c\u77e9\u9635\n      \u5904\u7406Maple\u751f\u6210\u7684latex\u4ee3\u7801\u7b49\u3002\n    \n    excel\u6570\u636e\u8f6c\u5217\u8868\uff1a  \n      \u8f93\u5165\u6846\u6e05\u7a7a\uff0c\u5c06excel\u6570\u636e\u590d\u5236\u5230\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u8f6c\u6362\u6309\u94ae\n      \u5373\u53ef. \u8981\u6c42\u4e0d\u540c\u884c\u8981\u6362\u884c\uff0c\u6570\u636e\u4e2d\u65e0\u7a7a\u683c, \n      \u4e0d\u540c\u6570\u636e\u95f4\u6709\u7a7a\u683c(\u6216tab\u952e)\u9694\u5f00.\n    \n    \u4e0b\u9762maple\u76f8\u5173\u7684\u529f\u80fd\u5747\u4e0e\u65b9\u7a0b\u65cf\u63a8\u5bfc\u76f8\u5173\uff0c\u5176\u4f59\u95ee\u9898\u672a\u5fc5\u53ef\u7528\n    \n    \u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316maple\u751f\u6210\u7684latex\u4ee3\u7801\uff0c\u53bb\u9664\u5197\u4f59\n      \u5c06latex\u4ee3\u7801\u7c98\u8d34\u5728\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u683c\u5f0f\u5316\u5373\u53ef\u3002\n    \n    \u5c55\u793a\u7cfb\u6570\u683c\u5f0f\u5316\uff1a\n      \u4e3b\u8981\u9488\u5bf9\u65e0\u7a77\u5c55\u5f00\u540c\u6b21\u5e42\u7cfb\u6570\u3002\n    \n    szce\u683c\u5f0f\u5316\uff1a\n      \u8fde\u7eed\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n    \n    \u79bb\u6563szce\u683c\u5f0f\u5316\uff1a\n      \u79bb\u6563\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n    \n    DT-gT: \n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT.\n    \n    DT-coe:\n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT\u540e\u6bd4\u8f83\u5404\u5f0f\u4e2dlambda\n      \u5404\u6b21\u5e42\u7cfb\u6570\u6240\u5f97\u7b49\u5f0f\n\n    latex2maple:\n      \u5c06mathpix-snipping-tool\u901a\u8fc7\u56fe\u7247\u8bc6\u522b\u751f\u6210\u7684\u77e9\u9635\u7684latex\u4ee3\u7801\n      \u8f6c\u5316\u6210maple\u4e2d\u77e9\u9635\u8f93\u5165\u8868\u8fbe\u5f0f\u3002\n      \u76ee\u524d\u4e3b\u8981\u652f\u6301\u4ee5\u4e0b\u73af\u5883\uff1a\n        \u77e9\u9635\uff1a\u5982\n          \\begin{array}{cc}\n            u     & 1 \\\n            \\lambda  & v\n          \\end{array}\n        \u591a\u884c\uff1a\u5982\n          \\begin{aligned}{cc}\n            &u + 1 \\\n            &\\lambda + v\n          \\end{aligned}\n        \u5355\u4e2a\u516c\u5f0f\uff1a\u5982\n          x^2 + y^2\n    maple2mma:\n      \u5c06\u590d\u5236\u7684maple\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3amathematics\u7684\u8868\u8fbe\u5f0f\u3002\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u51fd\u6570\uff1a\n          exp, log, abs, sqrt, conjugate, Re, Im,\n          sin, cos, tan, sinh, cosh, tanh, \n    typora:\n      \u8bfb\u53d6typora\u751f\u6210\u7684markdown\u6587\u6863\u5e76\u89e3\u6790\u3002\n      \u76ee\u524d\u4ec5\u652f\u6301\u6807\u9898\uff0c\u6570\u5b66\u516c\u5f0f\u89e3\u6790\u3002\n\n    \n    \u53cc\u51fb\uff1a \u5de6\u4fa7\u6536\u8d77/\u6062\u590d\uff0c\n    \n    \u6ce8\uff1a1. \u4e2a\u4eba\u7528\uff0c\u4e0d\u5177\u6709\u666e\u9002\u6027\uff0c\u4e0d\u4fdd\u8bc1\u5b8c\u5168\u6b63\u786e\u3002 \n        2. \u4ec5\u652f\u6301latex\u6570\u5b66\u516c\u5f0f\uff0c\u5176\u5b83\u547d\u4ee4\u4e0d\u652f\u6301\u3002\n    "):(z("input").value=H,N(z("input"),z("output"))),I=!I}var S=!0;function N(e,t){if(!B){B=!0;var a=e.value.replace(/(beta|gamma|eta|zeta|xi|alpha|delta)/g,"$1   ");z("buffer").innerHTML=a.replace(/\n/g,"<br />"),"input"===e.tagName.toLowerCase()&&(z("buffer").innerHTML="$"+z("buffer").innerHTML+"$"),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,z("buffer")],[J,t])}}function J(e){B=!1,e.innerHTML=z("buffer").innerHTML}function R(){z("table").style.display="block",z("tip").style.display="block"}function Z(){var e=z("input").value;if(""!==e){var t=e.match(/\r\n|\n/g).length+1,a=e.split(/\s+|\t|\n|\r\n/g);"\n"===e[e.length-1]&&(t-=1,a.pop());var n=a.length/t;if(n%1===0){e=this.data_format(a);var r="".padEnd(2*n,"|c");z("input").value+="\r\n \r\n\\begin{tabular}{"+r+"|}\r\n\\hline\r\n"+e+"\\hline\r\n\\end{tabular}"}else alert("\u6570\u636e\u4e0d\u89c4\u8303")}}function F(){var e=z("input").value;return e="<hr><hr>\r\n\r\n \u539f\u7ed3\u679c\uff1a\r\n$$"+(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\!)/g," ")).replace(/(\s,)/g,"\\\\ "))+"$$<hr>"}function U(e){var t=z("input").value;return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\n/g,"")).replace(/,0,/g,",")).replace(/[+-]?{\\frac\s{\\rm\sd}{{\\rm\sd}\w}}\s\\left\(\s[0-9]+\s\\right\)/g," ")).replace(/{\\frac {\\partial }{\\partial (\w)}} \\left\( (.*?) (\\left\( x,t \\right\).*?)\\right\)/g,"($2 $3)_{$1}")).replace(/{\\frac\s{\\partial\s}{\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{\\partial\s\^{(\d+)}}{\\partial\s{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\rm d}{{\\rm d}(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{{\\rm d}\^{(\d+)}}{{\\rm d}{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d}}{\\partial\s(\w)\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s(\w)\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$1$3$2} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$2$1$3} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$5_{$2$1$4$3} $6"),"1"===e&&(t=(t=(t=t.replace(/D_{{\d}}\s+\\left\(\s+(\w)\s+\\right\)\s+\\left\(\s+(\d),(\w)\s+\\right\)/g,"$1_{$2,$3}")).replace(/(\w)\s+\\left\(\s+(\d),\w\s+\\right\)/g,"$1_{$2}")).replace(/\s,/g," =0, \\\\")),t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/\\left\(\s[a-z](,[a-z]){0,}\s\\right\)/g," ")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/{({\w})}/g,"$1")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+([^\^])/g,"$1 $3")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+\^({\d+})/g,"$1^$3")).replace(/([a-zA-Z]+)_{(\w+)}_{(\w+)}/g,"$1_{$2,$3}")).replace(/\s,/g,"\t \\\\\t ")).replace(/\\\\\s+\\\\/g,"\\\\")).replace(/\s{2,}/g," ")}function D(){var e=z("input").value;return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/\s,/g,"\t \\\\\t ")).replace(/\s{2,}/g," ")).replace(/\\left\(\sn\s\\right\)/g,"")).replace(/\\left\(\sn([+-])1\s\\right\)/g,"^{$1}")).replace(/\\left\(\sn([+-])2\s\\right\)/g,"^{$1$1}")).replace(/\\left\(\sn([+-])3\s\\right\)/g,"^{$1$1$1}")).replace(/\\left\(\sn([+-])4\s\\right\)/g,"^{$1$1$1$1}")).replace(/\\left\(\sn([+-])5\s\\right\)/g,"^{$1$1$1$1$1}")).replace(/\\left\(\sn([+-])6\s\\right\)/g,"^{$1$1$1$1$1$1}")).replace(/\\left\(\sn([+-])7\s\\right\)/g,"^{$1$1$1$1$1$1$1}")}function G(e,t){var a;a="1"===t?D():U(e);var n=F();z("input").value=n+"\r\n\r\n\r\n\u8f6c\u6362\u7ed3\u679c\uff1a\r\n \r\n\r\n$"+a+"$",N(z("input"),z("output"))}function P(e){var t,a;t=(t=(t=(t=(t="1"===e?D():U("0")).replace(/\s/g,"")).replace(/.*?{array}{.*?}(.*)\\end.*/,"$1")).replace(/\\lambda/g,"\\lambda ")).replace(/\\\\/g,"&").split("&"),a="0"===e?t.map((function(e){var t=function(e){if(/^[^-+]*?\w_\{\d\d,\w\}/.test(e))return e;"-"!==e[0]&&(e="+"+e);var t=e.match(/[+-][^+-]*?\w_\{\d\d,\w\}[^+-]*?/),a="";null!==t&&(a=t[0],e=e.replace(t[0],""));"+"===a[0]&&(a=a.slice(1));return a+e}(e);return[t,W(t)]})):t.map((function(e){return[e,W(e)]}));var n="",r="";a.forEach((function(e){n+="&"+e[0]+"=0,\\\\ \r\n",r+=e[1]})),n="\\begin{align}\r\n"+n+"\\end{align}",r="\\begin{align}\r\n"+r+"\\end{align}";var l=F();z("input").value=l+"\r\n\r\n"+n+"\r\n\r\n<hr><hr>\u4f9d\u8d56\u5173\u7cfb:\r\n",z("input").value=z("input").value+"$"+r+"$<hr><hr>",N(z("input"),z("output"))}function W(e){var t=(e+=" ").match(/(-|\+)V_{\d\d}(?=(\+|\s|-))/g),a="";return t&&t.forEach((function(t){a+="-"+t,e=e.replace(t,"")})),"+"===(e=(e=(e="&"+a+"="+e+",\\\\ \r\n").replace(/--/g,"+")).replace(/-\+/g,"-"))[1]?e="&"+e.slice(2,e.length):"="===e[1]&&(e=""),e}function q(){var e=U("0");e=(e=(e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).replace(/\s/g,"")).replace(/&/g,"=0,\\\\&")).replace(/\\\\([^&])/g,"=0,\\\\&$1")).replace(/\\left\[\\begin{array}{\w+}(.*?)\\end{array}\\right\]/,"\\begin{align}& $1=0.\\end{align}")).replace(/\\lambda/g,"\\lambda ");var t=F();z("input").value=t+"\r\n\r\n\r\n$"+e+"$",N(z("input"),z("output"))}function Q(){var e=U("0");e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).slice(1,e.length-1)).replace(/\\\\/g,"=0, \\\\\r\n&")).replace(/((\s|\+|-))_{x}/g,"$1 0"),e="\\begin{align}&".concat(e,"=0.\\end{align}");var t=F();z("input").value=t+"\r\n\r\n\r\n$"+e+"$",N(z("input"),z("output"))}function V(){var e=z("input").value.replace(/\\right\. \\\\\n\\left\./g,""),t="";(e=(e=e.replace(/\\right\. \\\\\n/g,"")).replace(/\\\\/g,"")).includes("align")?(e=e.split(/\n/g).slice(1,-1).map((function(e){return e.split(/&/g).slice(1)})),t="array"):e.includes("array")?(e=e.split(/\n/g).slice(1,-1).map((function(e){return e.split(/&/g)})),t="matrix"):e=[[e]],e=e.map((function(e){return e.map((function(e){e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\(tilde|hat|bar|underline|acute|check){(.*?)}/g,"$2")).replace(/\\mathrm{([a-zA-Z])}/g,"$1")).replace(/\\(lambda|zeta|eta|xi|gamma|alpha|beta|delta)([a-zA-Z])/g,"$1 $2")).replace(/\\left[(\[\]]/g," ( ")).replace(/\\right[\)\]]/g," ) ")).replace(/_{n}/g,"(n) ")).replace(/_{n([+-])(\d+)}/g,"(n$1$2) ")).replace(/_{(m|k|l|i|j|p|q|n)}/g,"[$1] ")).replace(/(\w)_{([a-z])}/g," diff($1, $2) ")).replace(/\(([a-zA-Z0-9/+\^-\s]+)\)_{([a-z])}/g," diff($1, $2) ");for(var t=1;t<=12;t++){var a=RegExp("(\\w)_{(\\d+),(\\s\\w){".concat(t,"}}"),"g"),n=RegExp("(\\w)_{(\\w)(\\s\\w){".concat(t,"}}"),"g"),r=RegExp("\\(([a-zA-Z0-9/+\\^-\\s]+)\\)_{(\\w)(\\s\\w){".concat(t,"}}"));e=(e=(e=e.replace(a," diff($1$2, $3$$".concat(t,") "))).replace(n," diff($1, $2$$".concat(t+1,") "))).replace(r," diff($1, $2$$".concat(t+1,") "))}for(var l=0;l<=12;l++){var i=RegExp("([a-zA-Z])\\^{([+-])[+-]{".concat(l,"}}"),"g");e=e.replace(i,"$1(n $2 ".concat(l+1,")"))}for(e=(e=e.replace(/\s*?_{(\d+)}/g,"$1")).replace(/_{(.*?)}/g,"[$1]");e.indexOf("^{")>-1;)for(var c=e.indexOf("^{"),s=0,p=0,o=c+1;o<e.length;o++)if((s+="{"===e[o]?1:0)===(p+="}"===e[o]?1:0)){e=e.slice(0,c+1)+"("+e.slice(c+2,o)+")"+e.slice(o+1,e.length);break}return(e=(e=(e=(e=(e=e.replace(/frac/g,"")).replace(/}{/g,") / (")).replace(/{/g," ( ").replace(/}/g," ) ")).replace(/\\/g,"")).replace(/\)\(/g,") ("))+"          "}))})),e="matrix"===t?"Matrix("+JSON.stringify(e).replace(/"/g,"")+")":"array"===t?"["+JSON.stringify(e).replace(/(\["|"\])/g,"")+"]":e[0][0],z("input").value+="\r\n\r\n"+e}function X(){var e=z("input").value;["exp","log","sin","cos","tan","sqrt","sinh","cosh","tanh","abs","conjugate"].forEach((function(t){for(;e.indexOf(t)>-1;)for(var a=e.indexOf(t),n=0,r=0,l=a+3;l<e.length;l++)if((n+="("===e[l]?1:0)===(r+=")"===e[l]?1:0)){t=t[0].toUpperCase()+t.slice(1),e=e.slice(0,a)+t+"["+e.slice(a+4,l)+"]"+e.slice(l+1,e.length);break}})),e=e.replaceAll("arc","Arc"),z("input").value+="\r\n\r\n"+e}function Y(){var e=z("typora-upload").files[0];if(e.name.match(/\.md$/)){var t=new FileReader;t.onload=function(){var e=this.result,t=e.match(/\${1,2}(\r\n|.){1,}?\${1,2}/g)||[];t=t.map((function(t){return e=e.replace(t,"EQUATION-TO-REPLACE"),t.replace(/(<|>)/g," $1 ").replace(/\\\\/g,"\\\\  ").replace(/\\(R|C|Z|N)([^a-zA-Z])/g,"\\mathbb{$1}$2").replace(/\\part([^i])/g,"\\partial$1").replace(/(^\$\$|\$\$$)/g,"$$$$$$")})),e=e.replace(/(\r\n#+.*?\r\n)/g,"\r\n$1\r\n"),e=_.render(e),t.forEach((function(t){e=e.replace("EQUATION-TO-REPLACE",t)})),document.getElementById("output").innerHTML=e,document.getElementById("input").value=e,window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,z("output")])},t.readAsText(e)}}document.body.addEventListener("dblclick",(function(){S?(z("left").style.display="none",z("sider").style.minWidth="99%",z("sider").style.maxWidth="99%",z("sider").style.width="99%"):(z("left").style.display="block",z("sider").style.minWidth="50%",z("sider").style.maxWidth="50%",z("sider").style.width="50%"),S=!S}));var K=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={rows:3,columns:4,display:"none"},e.onTextChange=function(t){var a=Math.min(parseInt(t.target.value),10);"row"===t.target.id?e.setState({rows:a}):e.setState({columns:a})},e.eleOnInput=function(e){N(e.target,z("tip"))},e.eleOnBlur=function(e){e.target.innerHTML=""},e.eleOnFocus=function(e){N(e.target,z("tip"))},e.create_inputs=function(){for(var t=e.state.rows,a=e.state.columns,r=[],l=0;l<t;l++){for(var i=[],c=0;c<a;c++)i.push(Object(n.jsx)(m.a,{style:{flex:"1"},children:Object(n.jsx)($.a,{className:"ele",style:{margin:"5px"},onInput:e.eleOnInput,onBlur:e.eleOnBlur,onFocus:e.eleOnFocus})},Math.random()));r.push(Object(n.jsx)(b.a,{style:{display:"flex",flexDirection:"row"},children:i},Math.random()))}return Object(n.jsx)(M,{style:{width:"98%"},children:r})},e.data_format=function(t){for(var a=e.state.rows,n=e.state.columns,r=Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.length})))),l="",i=0;i<a;i++){for(var c=0;c<n-1;c++)l+=t[i*n+c].padEnd(r," ")+" & ";l+=t[i*n+n-1].padEnd(r," ")+" \\\\\r\n"}return l},e.table2matrix=function(){var t,a=document.getElementsByClassName("ele"),n=[],r="\u8865\u96f6"===document.getElementById("padend").getElementsByTagName("span")[0].innerText?"0":"",l=Object(p.a)(a);try{for(l.s();!(t=l.n()).done;){var i=t.value;n.push(i.value||r)}}catch(o){l.e(o)}finally{l.f()}var c=e.data_format(n);if("\u751f\u6210\u77e9\u9635"===window.event.target.innerText)z("input").value+="\r\n$$\r\n\\left(\r\n\\begin{matrix}\r\n"+c+"\\end{matrix}\r\n\\right)\r\n$$",N(z("input"),z("output"));else{var s="".padEnd(2*e.state.columns,"|l");z("input").value+="\r\n\\begin{tabular}{"+s+"|}\r\n\\hline\r\n"+c+"\\hline\r\n\\end{tabular}"}},e.close_table=function(){z("table").style.display="none",z("tip").style.display="none"},e}return Object(d.a)(a,[{key:"render",value:function(){var e={table:{position:"absolute",width:"600px",top:"150px",left:"0",right:"0",margin:"0 auto",display:this.state.display,background:"white"},InputGroup:{float:"left",maxWidth:"200px",top:"4px",left:"10px"},Button:{margin:"4px",padding:"5px 10px"},Switch:{top:"10px",transform:"scale(1.25)",left:"-10px"}};return Object(n.jsxs)(j.a,{id:"table",style:e.table,children:[Object(n.jsxs)("div",{id:"button_container",style:{position:"relative",left:"0",top:"0",textAlign:"center"},children:[Object(n.jsx)(M,{style:e.InputGroup,children:Object(n.jsxs)(b.a,{gutter:6,children:[Object(n.jsx)(m.a,{span:12,children:Object(n.jsx)($.a,{id:"row",addonBefore:"\u884c",onChange:this.onTextChange,value:this.state.rows},"100")}),Object(n.jsx)(m.a,{span:12,children:Object(n.jsx)($.a,{id:"column",addonBefore:"\u5217",onChange:this.onTextChange,value:this.state.columns},"101")})]})}),Object(n.jsxs)(A,{style:{left:"25px"},children:[Object(n.jsx)(y.a,{style:e.Switch,checkedChildren:"\u8865\u96f6",unCheckedChildren:"\u4e0d\u8865",defaultChecked:!0,id:"padend"}),Object(n.jsx)(x.a,{style:e.Button,onClick:this.table2matrix,type:"danger",children:"\u751f\u6210\u77e9\u9635"}),Object(n.jsx)(x.a,{style:e.Button,onClick:this.table2matrix,type:"default",children:"\u751f\u6210\u5217\u8868"}),Object(n.jsx)(x.a,{style:e.Button,onClick:this.close_table,type:"primary",children:"\u5173\u95ed"})]})]}),Object(n.jsx)("div",{id:"inputs",children:this.create_inputs()})]})}}]),a}(l.a.Component),ee=function(){var e={left:{width:"50%",diaplay:"bolck",overflow:"hidden"},header:{height:"16%",backgroundColor:"white",overflowY:"scroll",lineHeight:"20px",padding:"10px"},content:{backgroundColor:"white",height:"80%"},button:{borderRadius:"3px",margin:"2px",padding:"5px 10px"},textarea:{width:"100%",height:"100%",padding:"10px 10px",outline:"none",border:"none"},output:Object(s.a)({width:"100%",height:"100%",background:"white",padding:"20px 40px",userSelect:"none",overflowY:"scroll"},"userSelect","none"),footer:{textAlign:"center",height:"4%",padding:"3px 0"},tip:{position:"absolute",height:"30px",top:"130px",left:"0",right:"0",margin:"0 auto",textAlign:"center",zIndex:"2",display:"none"}},t=["\u4f7f\u7528\u8bf4\u660e","\u521b\u5efa\u77e9\u9635","Excel\u8f6c\u5217\u8868","latex2maple","maple2mma","DT-gT","DT-coe","\u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316","\u5c55\u5f0f\u7cfb\u6570\u683c\u5f0f\u5316","szce\u683c\u5f0f\u5316","\u79bb\u6563\u516c\u5f0f\u683c\u5f0f\u5316","\u79bb\u6563szce\u683c\u5f0f\u5316","typora"],a=[L,R,Z,V,X,q,Q,function(){G("0","0")},function(){G("1","0")},function(){P("0")},function(){G("0","1")},function(){P("1")},Y],r=["default","primary","primary","primary","primary","default","default","dashed","dashed","dashed","danger","danger","primary"];return Object(n.jsxs)("div",{children:[Object(n.jsxs)(f.a,{children:[Object(n.jsxs)(f.a,{id:"left",style:e.left,children:[Object(n.jsx)(E,{style:e.header,children:Object(n.jsx)("div",{children:function(){for(var l=t.length,i=[],c=0;c<l-1;c++)i.push(Object(n.jsx)(x.a,{style:e.button,onClick:a[c],type:r[c],children:t[c]},c));return i.push(Object(n.jsx)(v.a,{beforeUpload:a[l-1],id:"typora-upload",children:Object(n.jsx)(x.a,{style:e.button,type:r[l-1],icon:Object(n.jsx)(O.a,{}),children:t[l-1]},l-1)})),i}()})}),Object(n.jsx)(w.a,{dashed:!0,style:{margin:"2px 0"}}),Object(n.jsx)(k,{style:e.content,children:Object(n.jsx)("textarea",{id:"input",style:e.textarea,onInput:function(){N(z("input"),z("output"))}})}),Object(n.jsxs)(C,{style:e.footer,children:["Maple-Latex \xa92019 Created by ",Object(n.jsx)("a",{target:"_blank",href:"https://github.com/jiandandaoxingfu/maple-latex",children:"JMx"}),Object(n.jsx)("br",{})]})]}),Object(n.jsx)(w.a,{dashed:!0,style:{margin:"0 2px"},type:"vertical"}),Object(n.jsx)(T,{id:"sider",width:"50%",style:{height:document.documentElement.clientHeight+"px"},children:Object(n.jsx)("div",{id:"output",style:e.output})})]}),Object(n.jsx)("div",{id:"buffer",style:{display:"none"}}),Object(n.jsx)("div",{id:"tip",style:e.tip}),Object(n.jsx)(K,{})]})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,104)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),l(e),i(e)}))};c.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(ee,{})}),document.getElementById("root")),te()}},[[92,1,2]]]);
//# sourceMappingURL=main.d175e609.chunk.js.map