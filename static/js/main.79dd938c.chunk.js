(this["webpackJsonpmaple-latex"]=this["webpackJsonpmaple-latex"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(6),l=n(0),r=n.n(l),c=n(20),i=n.n(c),o=(n(97),n(98),n(117)),p=n(112),s=!1,d=!0;function g(e,t){if(d&&"input"===e.id&&e.value.length>1e4)d=!1;else if(!s){s=!0;var n=e.value.replace(/(beta|gamma|eta|zeta|xi|alpha|delta)/g,"$1   ");document.getElementById("buffer").innerHTML=n.replace(/\n/g,"<br />"),"input"===e.tagName.toLowerCase()&&(document.getElementById("buffer").innerHTML="$"+document.getElementById("buffer").innerHTML+"$"),window.MathJax.typesetPromise([document.getElementById("buffer")]).then((function(){return function(e){s=!1,e.innerHTML=document.getElementById("buffer").innerHTML}(t)}))}}var u={left:{width:"50%",diaplay:"bolck",overflow:"hidden"},header:{height:"16%",backgroundColor:"white",overflowY:"scroll",lineHeight:"20px",padding:"10px"},content:{backgroundColor:"white",height:"80%"},button:{borderRadius:"3px",margin:"2px",padding:"5px 10px"},textarea:{width:"100%",height:"100%",padding:"10px 10px",outline:"none",border:"none"},output:{width:"100%",height:"100%",background:"white",padding:"20px 40px"},footer:{textAlign:"center",height:"30px",minHeight:"30px",padding:"3px 0"},tip:{position:"absolute",height:"30px",top:"130px",left:"0",right:"0",margin:"0 auto",textAlign:"center",zIndex:"2",display:"none"},timeline:{position:"absolute",top:"0",left:"0",width:"100%",minHeight:"100%",zIndex:"-3",backgroundColor:"white"}},m=n(71),h=n(55),f=n(72),b=n(73),$=n(89),x=n(86),y=n(116),v=n(48),j=n(27),A=n(42),E=n(114),w=n(119),I=y.a.Group,O=v.a.Group,B=function(e){Object($.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(f.a)(this,n);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={rows:3,columns:4,display:"none"},e.onTextChange=function(t){var n=Math.min(parseInt(t.target.value),10);"row"===t.target.id?e.setState({rows:n}):e.setState({columns:n})},e.eleOnInput=function(e){g(e.target,document.getElementById("tip"))},e.eleOnBlur=function(e){e.target.innerHTML=""},e.eleOnFocus=function(e){g(e.target,document.getElementById("tip"))},e.create_inputs=function(){for(var t=e.state.rows,n=e.state.columns,l=[],r=0;r<t;r++){for(var c=[],i=0;i<n;i++)c.push(Object(a.jsx)(j.a,{style:{flex:"1"},children:Object(a.jsx)(y.a,{className:"ele",style:{margin:"5px"},onInput:e.eleOnInput,onBlur:e.eleOnBlur,onFocus:e.eleOnFocus})},Math.random()));l.push(Object(a.jsx)(A.a,{style:{display:"flex",flexDirection:"row"},children:c},Math.random()))}return Object(a.jsx)(I,{style:{width:"98%"},children:l})},e.data_format=function(t){for(var n=e.state.rows,a=e.state.columns,l=Math.max.apply(Math,Object(h.a)(t.map((function(e){return e.length})))),r="",c=0;c<n;c++){for(var i=0;i<a-1;i++)r+=t[c*a+i].padEnd(l," ")+" & ";r+=t[c*a+a-1].padEnd(l," ")+" \\\\\r\n"}return r},e.table2matrix=function(){var t,n=document.getElementsByClassName("ele"),a=[],l="\u8865\u96f6"===document.getElementById("padend").getElementsByTagName("span")[0].innerText?"0":"",r=Object(m.a)(n);try{for(r.s();!(t=r.n()).done;){var c=t.value;a.push(c.value||l)}}catch(p){r.e(p)}finally{r.f()}var i=e.data_format(a);if("\u751f\u6210\u77e9\u9635"===window.event.target.innerText)document.getElementById("input").value+="\r\n$$\r\n\\left(\r\n\\begin{matrix}\r\n"+i+"\\end{matrix}\r\n\\right)\r\n$$",g(document.getElementById("input"),document.getElementById("output"));else{var o="".padEnd(2*e.state.columns,"|l");document.getElementById("input").value+="\r\n\\begin{tabular}{"+o+"|}\r\n\\hline\r\n"+i+"\\hline\r\n\\end{tabular}"}},e.close_table=function(){document.getElementById("table").style.display="none",document.getElementById("tip").style.display="none"},e}return Object(b.a)(n,[{key:"render",value:function(){var e={table:{position:"absolute",width:"600px",top:"150px",left:"0",right:"0",margin:"0 auto",display:this.state.display,background:"white"},InputGroup:{float:"left",maxWidth:"200px",top:"4px",left:"10px"},Button:{margin:"4px",padding:"5px 10px"},Switch:{top:"10px",transform:"scale(1.25)",left:"-10px"}};return Object(a.jsxs)(E.a,{id:"table",style:e.table,children:[Object(a.jsxs)("div",{id:"button_container",style:{position:"relative",left:"0",top:"0",textAlign:"center"},children:[Object(a.jsx)(I,{style:e.InputGroup,children:Object(a.jsxs)(A.a,{gutter:6,children:[Object(a.jsx)(j.a,{span:12,children:Object(a.jsx)(y.a,{id:"row",addonBefore:"\u884c",onChange:this.onTextChange,value:this.state.rows},"100")}),Object(a.jsx)(j.a,{span:12,children:Object(a.jsx)(y.a,{id:"column",addonBefore:"\u5217",onChange:this.onTextChange,value:this.state.columns},"101")})]})}),Object(a.jsxs)(O,{style:{left:"25px"},children:[Object(a.jsx)(w.a,{style:e.Switch,checkedChildren:"\u8865\u96f6",unCheckedChildren:"\u4e0d\u8865",defaultChecked:!0,id:"padend"}),Object(a.jsx)(v.a,{style:e.Button,onClick:this.table2matrix,type:"danger",children:"\u751f\u6210\u77e9\u9635"}),Object(a.jsx)(v.a,{style:e.Button,onClick:this.table2matrix,type:"default",children:"\u751f\u6210\u5217\u8868"}),Object(a.jsx)(v.a,{style:e.Button,onClick:this.close_table,type:"primary",children:"\u5173\u95ed"})]})]}),Object(a.jsx)("div",{id:"inputs",children:this.create_inputs()}),Object(a.jsx)("div",{id:"tip",style:e.tip})]})}}]),n}(r.a.Component),_=n(63),T=n.n(_),z=n(82),k=n(65),C=n(118),M=n(111);var R=function(){var e=Object(l.useState)([]),t=Object(k.a)(e,2),n=t[0],r=t[1],c=Object(l.useState)(!1),i=Object(k.a)(c,2),o=i[0],p=i[1],s=function(){var e=Object(z.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=1;case 2:if(!(n<4)){e.next=14;break}return e.t0=t.push,e.t1=t,e.t2=h.a,e.next=8,fetch("https://api.github.com/repos/jiandandaoxingfu/maple-latex/commits?page=".concat(n)).then((function(e){return e.json()})).then((function(e){return e.map((function(e){var t=new Date(e.commit.author.date);return{date:t=t.toJSON().split("T")[0]+" "+t.toTimeString().split("G")[0],msg:e.commit.message.replace(/\n+/g,"\n").split("\n")}})).filter((function(e){return e.msg[0].indexOf("Merge")+e.msg[0].indexOf("Bump")<-1}))})).catch((function(e){return p(!1),[]}));case 8:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4);case 11:n++,e.next=2;break;case 14:console.log(t),r(t);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{id:"timeline",style:u.timeline,onClick:function(){document.getElementById("timeline").style.zIndex="-3"===document.getElementById("timeline").style.zIndex?3:-3,document.getElementById("timeline").style.display="block"!==document.getElementById("timeline").style.display?"block":"none",o||(p(!0),s())},children:Object(a.jsx)("div",{id:"timeline-container",children:(null===n||void 0===n?void 0:n[0])?Object(a.jsx)(C.a,{mode:"left",children:n.map((function(e){return Object(a.jsxs)(C.a.Item,{label:e.date,children:[Object(a.jsx)("p",{children:Object(a.jsx)("h2",{children:e.msg[0]})}),e.msg.slice(1).map((function(e){return Object(a.jsxs)("p",{children:[" ",e," "]})}))]})}))}):Object(a.jsx)(M.a,{size:"large"})})})},Z=n(113),L=n(120),H=!0,S="";var D="\u53ef\u4ee5\u5b9e\u65f6\u9884\u89c8\u6570\u5b66\u516c\u5f0f(\u5148\u8f93\u5165\u6570\u5b66\u73af\u5883)\uff0c\u521b\u5efa\u5217\u8868\u548c\u77e9\u9635\n\u5904\u7406Maple\u751f\u6210\u7684latex\u4ee3\u7801\u7b49\u3002\n\n\u53cc\u51fb\uff1a \u5de6\u4fa7\u6536\u8d77/\u6062\u590d\uff0c\n    \n\u6ce8\uff1a\n    1. \u4e2a\u4eba\u7528\uff0c\u4e0d\u5177\u6709\u666e\u9002\u6027\uff0c\u4e0d\u4fdd\u8bc1\u5b8c\u5168\u6b63\u786e\u3002 \n    2. \u4ec5\u652f\u6301latex\u6570\u5b66\u516c\u5f0f\uff0c\u5176\u5b83\u547d\u4ee4\u4e0d\u652f\u6301\u3002\n    \n\u6b22\u8fce\u4f7f\u7528\uff0c \u5982\u51fa\u73b0\u9519\u8bef\uff0c \u5e0c\u671b\u53ef\u4ee5\u628a\u76f8\u5e94\u7684tex\u4ee3\u7801\u548c\u9519\u8bef\u63cf\u8ff0\n\u53d1\u9001\u81f3: jiaminxin@outlook.com.\n\nExcel\u8f6c\u5217\u8868\uff1a  \n      \u8f93\u5165\u6846\u6e05\u7a7a\uff0c\u5c06excel\u6570\u636e\u590d\u5236\u5230\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u8f6c\u6362\u6309\u94ae\n      \u5373\u53ef. \u8981\u6c42\u4e0d\u540c\u884c\u8981\u6362\u884c\uff0c\u6570\u636e\u4e2d\u65e0\u7a7a\u683c, \n      \u4e0d\u540c\u6570\u636e\u95f4\u6709\u7a7a\u683c(\u6216tab\u952e)\u9694\u5f00.\n    \nlatex2maple:\n      \u5c06mathpix-snipping-tool\u901a\u8fc7\u56fe\u7247\u8bc6\u522b\u751f\u6210\u7684latex\u4ee3\u7801\n      \u8f6c\u5316\u6210maple\u7684\u8868\u8fbe\u5f0f\u3002 \u76ee\u524d\u5bf9\u5171\u8f6d\u8fd8\u6709\u95ee\u9898.\n   \nDT-gT: \n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT.\n    \nDT-coe:\n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT\u540e\u6bd4\u8f83\u5404\u5f0f\u4e2d\n      lambda\u5404\u6b21\u5e42\u7cfb\u6570\u6240\u5f97\u7b49\u5f0f\n\nmaple2mma:\n      \u5c06\u590d\u5236\u7684maple\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3amathematics\u7684\u8868\u8fbe\u5f0f\u3002\n      \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u51fd\u6570\uff1a\n      exp, log, abs, sqrt, conjugate, Re, Im,\n      sin, cos, tan, sinh, cosh, tanh, sech, csch, \n  \n\u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316maple\u751f\u6210\u7684latex\u4ee3\u7801\uff0c\u53bb\u9664\u5197\u4f59\n      \u5c06latex\u4ee3\u7801\u7c98\u8d34\u5728\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u683c\u5f0f\u5316\u5373\u53ef\u3002\n    \n\u5c55\u793a\u7cfb\u6570\u683c\u5f0f\u5316\uff1a\n      \u4e3b\u8981\u9488\u5bf9\u65e0\u7a77\u5c55\u5f00\u540c\u6b21\u5e42\u7cfb\u6570\u3002\n    \n\u8fde\u7eedszce\u683c\u5f0f\u5316\uff1a\n      \u8fde\u7eed\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\n      \u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n    \n\u79bb\u6563szce\u683c\u5f0f\u5316\uff1a\n      \u79bb\u6563\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\n      \u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n \ngrammarly:\n      \u4f7f\u7528Grammarly\u7f51\u7ad9\u68c0\u67e5\u8bba\u6587(\u82f1\u8bed)\u5c0f\u9519\u8bef\u3002\n      \u5c06tex\u5185\u5bb9\u4e2d\u7684\u6570\u5b66\u516c\u5f0f\u7b49\u5173\u952e\u4fe1\u606f\u5220\u9664\u3002\n\nTex\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316.tex\u6587\u672c\u3002 \u652f\u6301\u65ad\u53e5\uff0c\u7f29\u8fdb\u3002 \n      (\u76ee\u524d\u5b58\u5728\u7684bug: \u4ee5\u67d0\u4e00\u73af\u5883\u7ed3\u675f\u7684\u6bb5\u843d\u4f1a\u4e0e\u4e0b\u4e00\u4e2a\u6bb5\u843d\u5408\u5e76.)\n      \ntypora:\n      \u8bfb\u53d6typora\u751f\u6210\u7684markdown\u6587\u6863\u5e76\u89e3\u6790\u3002\n      \u4e5f\u53ef\u4ee5\u6e32\u67d3tex\u6587\u4ef6, \u652f\u6301\u6807\u9898, \u6570\u5b66\u516c\u5f0f\u89e3\u6790.\n";function N(e,t,n,a){for(;e.match(new RegExp(n));)for(var l=e.match(new RegExp(n)),r=l.index,c=0,i=0,o=r+(l[0].length-1);o<e.length;o++)if((c+=e[o]===t[0])===(i+=e[o]===t[1])){e=a(e,r,o,l);break}return e}var q=n(115);function P(e,t){q.a.info({message:"",description:t,placement:e})}function J(e,t,n){return e.slice(0,t+1)+"("+e.slice(t+2,n)+")"+e.slice(n+1,e.length)}function U(e,t,n,a){var l=a[2]?parseInt(a[2]):2;return e.slice(0,t-1)+" ("+e.slice(t+a[0].length,n)+")^(1/"+l+") "+e.slice(n+1,e.length)}function F(e,t,n,a){var l=a[0].slice(0,-1);return e.slice(0,t)+l+"("+e.slice(t+l.length+1,n)+")"+e.slice(n+1,e.length)}function G(e,t,n){return e.slice(0,t)+"("+e.slice(t+6,n)+")/"+e.slice(n+1,e.length)}function Q(e,t,n,a){var l=a[0].slice(0,-1);return e.slice(0,t)+" "+e.slice(t+l.length+1,n)+" "+e.slice(n+1,e.length)}function W(e,t,n){var a=e.slice(0,t),l=e.slice(t+2,n),r=a.match(/}[xyzt]( [xyzt])*{$/)[0].slice(1,-1).replaceAll(" "," ,");return(a=a.replace(/}[xyzt]( [xyzt])*{$/,""))+")".concat(r," ,").concat(l,"(ffid ")+e.slice(n+1,e.length)}function V(e,t,n,a){var l=a[0].slice(0,-1),r=l[0].toUpperCase()+l.slice(1);return e.slice(0,t)+r+"["+e.slice(t+r.length+1,n)+"]"+e.slice(n+1,e.length)}function Y(){var e=document.getElementById("input").value;return e="<hr><hr>\r\n\r\n \u539f\u7ed3\u679c\uff1a\r\n$$"+(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\!)/g," ")).replace(/(\s,)/g,"\\\\ "))+"$$<hr>"}function K(e){var t=document.getElementById("input").value;return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\n/g,"")).replace(/,0,/g,",")).replace(/[+-]?{\\frac\s{\\rm\sd}{{\\rm\sd}\w}}\s\\left\(\s[0-9]+\s\\right\)/g," ")).replace(/{\\frac {\\partial }{\\partial (\w)}} \\left\( (.*?) (\\left\( x,t \\right\).*?)\\right\)/g,"($2 $3)_{$1}")).replace(/{\\frac\s{\\partial\s}{\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{\\partial\s\^{(\d+)}}{\\partial\s{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\rm d}{{\\rm d}(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{{\\rm d}\^{(\d+)}}{{\\rm d}{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d}}{\\partial\s(\w)\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s(\w)\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$1$3$2} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$2$1$3} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$5_{$2$1$4$3} $6"),"1"===e&&(t=(t=(t=t.replace(/D_{{\d}}\s+\\left\(\s+(\w)\s+\\right\)\s+\\left\(\s+(\d),(\w)\s+\\right\)/g,"$1_{$2,$3}")).replace(/(\w)\s+\\left\(\s+(\d),\w\s+\\right\)/g,"$1_{$2}")).replace(/\s,/g," =0, \\\\")),t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/\\left\(\s[a-z](,[a-z]){0,}\s\\right\)/g," ")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/{({\w})}/g,"$1")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+([^\^])/g,"$1 $3")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+\^({\d+})/g,"$1^$3")).replace(/([a-zA-Z]+)_{(\w+)}_{(\w+)}/g,"$1_{$2,$3}")).replace(/\s,/g,"\t \\\\\t ")).replace(/\\\\\s+\\\\/g,"\\\\")).replace(/\s{2,}/g," ")}function X(){var e=document.getElementById("input").value;return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/\s,/g,"\t \\\\\t ")).replace(/\s{2,}/g," ")).replace(/\\left\(\sn\s\\right\)/g,"")).replace(/\\left\(\sn([+-])1\s\\right\)/g,"^{$1}")).replace(/\\left\(\sn([+-])2\s\\right\)/g,"^{$1$1}")).replace(/\\left\(\sn([+-])3\s\\right\)/g,"^{$1$1$1}")).replace(/\\left\(\sn([+-])4\s\\right\)/g,"^{$1$1$1$1}")).replace(/\\left\(\sn([+-])5\s\\right\)/g,"^{$1$1$1$1$1}")).replace(/\\left\(\sn([+-])6\s\\right\)/g,"^{$1$1$1$1$1$1}")).replace(/\\left\(\sn([+-])7\s\\right\)/g,"^{$1$1$1$1$1$1$1}")}function ee(e,t){var n;n="1"===t?X():K(e);var a=Y();document.getElementById("input").value=a+"\r\n\r\n\r\n\u8f6c\u6362\u7ed3\u679c\uff1a\r\n \r\n\r\n$"+n+"$",g(document.getElementById("input"),document.getElementById("output"))}function te(e){var t,n;t=(t=(t=(t=(t="1"===e?X():K("0")).replace(/\s/g,"")).replace(/.*?{array}{.*?}(.*)\\end.*/,"$1")).replace(/\\lambda/g,"\\lambda ")).replace(/\\\\/g,"&").split("&"),n="0"===e?t.map((function(e){var t=function(e){if(/^[^-+]*?\w_\{\d\d,\w\}/.test(e))return e;"-"!==e[0]&&(e="+"+e);var t=e.match(/[+-][^+-]*?\w_\{\d\d,\w\}[^+-]*?/),n="";null!==t&&(n=t[0],e=e.replace(t[0],""));"+"===n[0]&&(n=n.slice(1));return n+e}(e);return[t,ne(t)]})):t.map((function(e){return[e,ne(e)]}));var a="",l="";n.forEach((function(e){a+="&"+e[0]+"=0,\\\\ \r\n",l+=e[1]})),a="\\begin{align}\r\n"+a+"\\end{align}",l="\\begin{align}\r\n"+l+"\\end{align}";var r=Y();document.getElementById("input").value=r+"\r\n\r\n"+a+"\r\n\r\n<hr><hr>\u4f9d\u8d56\u5173\u7cfb:\r\n",document.getElementById("input").value=document.getElementById("input").value+"$"+l+"$<hr><hr>",g(document.getElementById("input"),document.getElementById("output"))}function ne(e){var t=(e+=" ").match(/(-|\+)V_{\d\d}(?=(\+|\s|-))/g),n="";return t&&t.forEach((function(t){n+="-"+t,e=e.replace(t,"")})),"+"===(e=(e=(e="&"+n+"="+e+",\\\\ \r\n").replace(/--/g,"+")).replace(/-\+/g,"-"))[1]?e="&"+e.slice(2,e.length):"="===e[1]&&(e=""),e}function ae(e,t){var n=e.split("\n"),a=["",""],l=[],r="";if(e.indexOf("\\begin")<0||n.length<3)r=e.split("\n").map((function(e){return e.replace(/^ */," ".repeat(3*(t-1)))})).reduce((function(e,t){return e+"\n"+t}));else{var c=null!==e.match(/^\\begin/)&&null!==e.match(/\\end{.*?}$/);c?(a=[n[0],n.slice(-1)[0]].map((function(e){return e.replace(/^ */," ".repeat(3*(t-1)))})),e=n.slice(1,-1).reduce((function(e,t){return e+"\n"+t}))):a=["",""],l=function(e){for(var t=e,n=t.match(/\\begin{(.*?)}/),a=[];n;){for(var l=n.index,r=n[1],c="\\end{".concat(r,"}"),i=0,o="",p=[],s=[1];p.length!==s.length;)i=t.slice(i).indexOf(c)+c.length+i,p=(o=t.slice(l,i)).match(/\\begin{/g)||[],s=o.match(/\\end{/g)||[];a.push(t.slice(0,l)),a.push(t.slice(l,i)),n=(t=t.slice(i)).match(/\\begin{(.*?)}/)}return t.length>0&&a.push(t),a.reduce((function(e,t){return e+t}))===e?a:[]}(e).map((function(e){return ae(e,t+c)}))}return{level:t,envir:a,child:l,format_text:r}}function le(e){return 0===e.child.length?e.format_text:"\n".concat(e.envir[0],"\n").concat(e.child.map((function(e){return le(e)})).reduce((function(e,t){return e+t})),"\n").concat(e.envir[1],"\n")}var re=new(n(84).a)({html:!0,breaks:!1,langPrefix:"language-"});function ce(e){return e.replace(/(<|>)/g," $1 ").replace(/\\\\/g,"\\\\  ").replace(/\\(R|C|Z|N)([^a-zA-Z])/g,"\\mathbb{$1}$2").replace(/\\part([^i])/g,"\\partial$1").replace(/(^\$\$|\$\$$)/g,"$$$$$$").replaceAll("-AAAAAAA-","\n").replace(/\\bm ([a-zA-Z0-9])/g,"\\boldsymbol $1").replace(/\\bm *(\\[a-zA-Z]+)/g,"\\boldsymbol$1").replace(/\\bm *{(.*?)}/g,"\\boldsymbol{$1}")}function ie(){var e="none"!==document.getElementById("left").style.display;document.getElementById("left").style.display=e?"none":"block",document.getElementById("sider").style.minWidth=e?"99%":"50%",document.getElementById("sider").style.maxWidth=e?"99%":"50%",document.getElementById("sider").style.width=e?"99%":"50%"}document.body.addEventListener("dblclick",ie);var oe=["\u4f7f\u7528\u8bf4\u660e","\u65f6\u95f4\u8f74","\u521b\u5efa\u77e9\u9635","Excel\u8f6c\u5217\u8868","latex2maple","maple2mma","DT-gT","DT-coe","\u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316","\u5c55\u5f0f\u7cfb\u6570\u683c\u5f0f\u5316","\u8fde\u7eedszce\u683c\u5f0f\u5316","\u79bb\u6563\u516c\u5f0f\u683c\u5f0f\u5316","\u79bb\u6563szce\u683c\u5f0f\u5316","grammarly","Tex\u683c\u5f0f\u5316","typora"],pe=[function(){H?(S=document.getElementById("input").value,document.getElementById("input").value=D):(document.getElementById("input").value=S,g(document.getElementById("input"),document.getElementById("output"))),H=!H},function(){document.getElementById("timeline").click()},function(){document.getElementById("table").style.display="block",document.getElementById("tip").style.display="block"},function(){var e=document.getElementById("input").value;if(""!==e){var t=e.match(/\r\n|\n/g).length+1,n=e.split(/\s+|\t|\n|\r\n/g);"\n"===e[e.length-1]&&(t-=1,n.pop());var a=n.length/t;if(a%1===0){e=this.data_format(n);var l="".padEnd(2*a,"|c");document.getElementById("input").value+="\r\n \r\n\\begin{tabular}{"+l+"|}\r\n\\hline\r\n"+e+"\\hline\r\n\\end{tabular}"}else alert("\u6570\u636e\u4e0d\u89c4\u8303")}},function(){var e=document.getElementById("input").value;e=N(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\right\./g,"")).replace(/\\left\./g,"")).replace(/\\left(\(|\[|\\{)/g," ( ")).replace(/\\right(\)|\]|\\})/g," ) ")).replace(/\\left\|(.*?)\\right\|/g," (abs($1)) ")).replace(/\\[bB]ig/g,"")).replace(/ i\(/g," i (")).replace(/&/g,", ")).replace(/(, *)?\\\\/g,", ")).replace(/\\times/g," "),["{","}"],"\\\\(tilde|hat|bar|underline|acute|check|boldsymbol|mathrm){",Q),e=N(e=e.replace(/\\(alpha|beta|gamma|delta|lambda|eta|zeta|xi|rho|phi|psi)([a-zA-Z])/g,"$1 $2"),["{","}"],"\\\\frac{",G),e=N(e=(e=(e=(e=(e=e.replace(/_{n}/g,"(n) ")).replace(/_{n([+-])(\d+)}/g,"(n$1$2) ")).replace(/ *_ */g,"_").replace(/{ */g,"{").replace(/ *}/g,"}")).replace(/(\w+)_{(\d{0,}),? ?([xyzt]( [xyzt])*)}/g,"($1$2)_{$3}")).split("").reverse().join(""),["}","{"],"_}",W),e=N(e,[")","("],"_\\)",W),e=(e=N(e,["]","["],"_\\]",W)).split("").reverse().join("");for(var t=0;t<=12;t++){var n=RegExp("([a-zA-Z0-9]+)\\^{([+-])[+-]{".concat(t,"}}"),"g");e=e.replace(n,"shift($1, $2".concat(t+1,")"))}e=N(e=(e=e.replace(/\\operatorname{([a-zA-Z]+)}/g,"\\$1 ")).replace(/ {2,}/g," "),["{","}"],"\\^{",J),e=(e=(e=N(e,["{","}"],"sqrt(\\[(.*?)\\])?{",U)).replace(/e\^/g," \\exp ")).replace(/\\ln /g,"\\log ");var a="(exp|log|sinh|cosh|sech|csch|coth|tanh|sin|cos|tan|arccos|arcsin|arctan|arccot)",l=new RegExp("\\\\(".concat(a,") ([a-zA-Z0-9])"),"g");e=e.replace(l," $1($3)"),l=new RegExp("\\\\(".concat(a,") "),"g"),e=N(e=e.replace(l," $1"),["{","}"],a+"{",F),e=(e=(e=(e=(e=(e=(e=(e=(e=(e=N(e,["[","]"],a+"\\[",F)).replace(/\\/g,"")).replace(/\[/g,"(")).replace(/\]/g,")")).replace(/_ ?{(m|k|l|i|j|p|q|n)}/g,"[$1] ")).replace(/\s*?_{(\d+)}/g,"$1")).replace(/_ ?{(.*?)}/g,"[$1]")).replace(/{/g," ( ").replace(/}/g," ) ")).replace(/\)\(/g,") (").replace(/ {2,}/g," ")).replace(/\(\*\)/g,"(ccc)"),document.getElementById("input").value+="\r\n\r\n"+e,P("bottomRight","\u5df2\u5b8c\u6210")},function(){var e=document.getElementById("input").value;e=e.replace(/ln(\(|\])/g,"log$1"),["exp","log","sinh","cosh","sech","csch","coth","tanh","sin","cos","tan","sqrt","abs","conjugate"].forEach((function(t){e=N(e,["(",")"],t+"\\(",V)})),e=(e=(e=(e=e.replaceAll("arc","Arc")).replace(/diff\(([^,]*?), ([a-zA-Z])\)/g,"D[$1, $2]")).replace(/diff\(([^,]*?), ([a-zA-Z])\$(\d+)\)/g,"D[$1, {$2, $3}]")).replace(/([a-z_\d])\(([a-z].*?)\)/g,"$1[$2]"),document.getElementById("input").value+="\r\n\r\n"+e,P("bottomRight","\u5df2\u5b8c\u6210")},function(){var e=K("0");e=(e=(e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).replace(/\s/g,"")).replace(/&/g,"=0,\\\\&")).replace(/\\\\([^&])/g,"=0,\\\\&$1")).replace(/\\left\[\\begin{array}{\w+}(.*?)\\end{array}\\right\]/,"\\begin{align}& $1=0.\\end{align}")).replace(/\\lambda/g,"\\lambda ");var t=Y();document.getElementById("input").value=t+"\r\n\r\n\r\n$"+e+"$",g(document.getElementById("input"),document.getElementById("output"))},function(){var e=K("0");e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).slice(1,e.length-1)).replace(/\\\\/g,"=0, \\\\\r\n&")).replace(/((\s|\+|-))_{x}/g,"$1 0"),e="\\begin{align}&".concat(e,"=0.\\end{align}");var t=Y();document.getElementById("input").value=t+"\r\n\r\n\r\n$"+e+"$",g(document.getElementById("input"),document.getElementById("output"))},function(){ee("0","0")},function(){ee("1","0")},function(){te("0")},function(){ee("0","1")},function(){te("1")},function(){var e=document.getElementById("input").value;e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\cite{.*?}/g,"[1]")).replace(/\\eqref{.*?}/g,"(2)")).replace(/\\ref{.*?}/g,"(3)")).replace(/\\label{.*?}/g,"")).replace(/\$.*?\$/g,"$$")).replace(/\\begin{align\*?}(.|\n)*?\\end{align\*?}/g,"$ $")).replace(/\\begin{equation\*?}(.|\n)*?\\end{equation\*?}/g,"$ $")).replace(/\\begin{thebibliography\*?}(.|\n)*?\\end{thebibliography\*?}/g,"")).replace(/\d{8}/g,"1")).replace(/(.|\n)*\\begin{abstract}/,""),document.getElementById("input").value="\r\n\r\n"+e,P("bottomRight","\u5df2\u5b8c\u6210")},function(){var e=document.getElementById("input").value.replace(/\n\t/g,"\n"),t=e.match(/ *%.*?\n/g),n=(e=e.replace(/[ \t]*%.*?\n/g,"_DESCRIPTION_\n").replace(/\n/g,"AAAAAAAAA").replace(/\t/g,"    ")).match(/.*?\\begin{document}/);n=n?n[0].replaceAll("AAAAAAAAA","\n"):"";var a=e.match(/\\begin{document}(.*?)\\end{document}/),l=null!==a;a=l?a[1].replace(/\\begin{thebibliography}.*?\\end{thebibliography}/,"").replaceAll("AAAAAAAAA","\n"):e.replaceAll("AAAAAAAAA","\n");var r=e.match(/\\begin{thebibliography}.*?\\end{thebibliography}/);r=r?r[0].replaceAll("AAAAAAAAA","\n").replaceAll("\\bibitem","\n\\bibitem").replace(/( *\n){3,}/g,"\n\n"):"";var c=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=a.replace(/(\\[a-z]+)\s+{/g,"$1{")).replace(/([a-z]|\$|})\. {0,}([A-Z])/g,"$1.\n$2")).replace(/([\u4e00-\u9fa5]|\$|})([\.\u3002]) {0,}([\u4e00-\u9fa5])/g,"$1$2\n$3")).replace(/(\\begin{)/g,"\n$1")).replace(/(\\begin{.*?}{\w+}) *([^\n])/g,"$1\n$2")).replace(/(\\begin{.*?}\[[^\\]*\]) *([^\n])/g,"$1\n$2")).replace(/(\\begin{.*?}) *([^\n{\[])/g,"$1\n$2")).replace(/(\\begin{.*?)\n\s*(\\label{.*?})/g,"$1$2")).replace(/(\\end{.*?})/g,"\n$1\n")).replace(/( [a-zA-Z]+) *\n *([a-zA-Z]+[ ,\.;]?)/g,"$1 $2")).replace(/ ([a-zA-Z]+)\s\s+([a-zA-Z]+[ ,\.;]?)/g," $1 $2")).replace(/([a-z].*?\\\\)(.*?[a-z])/g,"$1\n$2")).match(/\\begin{/g)||[],i=a.match(/\\end{/g)||[];if(c.length===i.length){var o=ae(a,1);if(window.block_tree=o,console.log(o),e=n+(a=le(o).replace(/(\s*\n){3,}/g,"\n\n").replace(/(\\end{.*?}\n) *\n/g,"$1").replace(/\s*\n\s*(\n\s*\\end{)/g,"$1").replace(/\n\s*(\n\s*\\begin{)/g,"$1").replace(/(\\begin{.*?\n)\s*\n/g,"$1").replace(/(\\chapter{)/g,"\n\n\n$1").replace(/(\\[a-z]*section{)/g,"\n\n\n$1").replace(/(\\end{frame})/g,"$1\n\n\n"))+r+(l?"\n\\end{document}":""),null!==t)for(var p=0;p<t.length;p++)e=e.replace("_DESCRIPTION_",t[p].slice(0,-1));document.getElementById("input").value=e,P("bottomRight","\u5df2\u5b8c\u6210")}else P("bottomRight","\\begin{}\u4e0e\\end{}\u4e2a\u6570\u4e0d\u7b49, \u65e0\u6cd5\u5904\u7406")},function(){var e,t,n=null===(e=document.getElementById("typora-upload"))||void 0===e||null===(t=e.files)||void 0===t?void 0:t[0];if(null===n||void 0===n?void 0:n.name.match(/\.(tex|md)$/)){var a=new FileReader,l=document.createElement("div");l.id="typora-loading",l.setAttribute("style","position: absolute; top: 45%; left: 0; width: 100%; text-align: center;"),l.innerHTML='\n    <div class="ant-spin ant-spin-lg ant-spin-spinning">\n      <span class="ant-spin-dot ant-spin-dot-spin">\n        <i class="ant-spin-dot-item"></i>\n        <i class="ant-spin-dot-item"></i>\n        <i class="ant-spin-dot-item"></i>\n        <i class="ant-spin-dot-item"></i>\n      </span>\n    </div>\n  ',document.body.appendChild(l),a.onload=function(){var e,t,n,a=this.result.replace(/\r\n/g,"\n").replace(/\\bm #1/g,"\\boldsymbol #1"),l={};null===(e=a.match(/\\newcommand{(.*?)}\[\d\]{(.*?)}\n/g))||void 0===e||e.forEach((function(e){var t=e.match(/\\newcommand{\\(.*?)}\[(\d)\]{(.*?)}\n/);l[t[1]]="0"===t[2]?"{".concat(t[3],"}"):["{".concat(t[3],"}"),1]})),(null===(t=window.MathJax)||void 0===t||null===(n=t.config)||void 0===n?void 0:n.tex)&&(window.MathJax.config.tex.macros=l,window.MathJax.startup.getComponents());var r=(a=a.replace(/\n/g,"-AAAAAAA-").replace(/.*?\\begin{document}/,"").replaceAll("dfrac","frac").replace(/\\chapter{(.*?)}/g,"\n# $1\n").replace(/\\section{(.*?)}/g,"\n## $1\n").replace(/\\subsection{(.*?)}/g,"\n### $1\n")).match(/\${1,2}.+?\${1,2}/g)||[],c=a.match(/\\begin{(equation|align|)\*?}.*?\\end{(equation|align|)\*?}/g)||[];r=r.map((function(e){return a=a.replace(e,"EQUATION-TO-REPLACE1"),ce(e)})),c=c.map((function(e){return a=a.replace(e,"EQUATION-TO-REPLACE2"),ce(e)})),a=a.replace(/(\n#+.*?\n)/g,"\n$1\n").replace(/\\/g,"").replace(/begin{(.*?)}(.*?)end{(.*?)}/g,'\n<span class="highlight">$1</span>: $2 \n').replace(/bibitem{(.*?)}/g,"- **$1**").replaceAll("eqref","\\eqref").replaceAll("-AAAAAAA-","\n"),a=re.render(a),r.forEach((function(e){a=a.replace("EQUATION-TO-REPLACE1",e)})),c.forEach((function(e){a=a.replace("EQUATION-TO-REPLACE2",e)})),document.getElementById("output").innerHTML=a,window.MathJax.typesetPromise([document.getElementById("output")]).then((function(){return document.body.removeChild(document.getElementById("typora-loading"))}))},a.readAsText(n)}}],se=["danger","danger","primary","primary","default","default","primary","primary","default","default","default","primary","primary","default","default","default"];var de=function(){return Object(a.jsx)("div",{children:function(){for(var e=oe.length,t=[],n=0;n<e-1;n++)t.push(Object(a.jsx)(v.a,{style:u.button,onClick:pe[n],type:se[n],children:oe[n]},n));return t.push(Object(a.jsx)(Z.a,{onClick:ie,beforeUpload:pe[e-1],id:"typora-upload",children:Object(a.jsx)(v.a,{style:u.button,type:se[e-1],icon:Object(a.jsx)(L.a,{}),children:oe[e-1]},e-1)})),t}()})},ge=o.a.Sider,ue=o.a.Header,me=o.a.Content,he=o.a.Footer;var fe=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(o.a,{children:[Object(a.jsxs)(o.a,{id:"left",style:u.left,children:[Object(a.jsx)(ue,{style:u.header,children:Object(a.jsx)(de,{})}),Object(a.jsx)(p.a,{dashed:!0,style:{margin:"2px 0"}}),Object(a.jsx)(me,{style:u.content,children:Object(a.jsx)("textarea",{id:"input",style:u.textarea,onInput:function(){g(document.getElementById("input"),document.getElementById("output"))}})}),Object(a.jsxs)(he,{style:u.footer,children:["Maple-Latex v2.6 \xa92018-2022 Created by ",Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/jiandandaoxingfu/maple-latex",children:"JMx"}),"\xa0\xa0",Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://jiandandaoxingfu.github.io/myblog/post/maple-latex/",children:"\u6587\u6863"})]})]}),Object(a.jsx)(p.a,{dashed:!0,style:{margin:"0 2px"},type:"vertical"}),Object(a.jsx)(ge,{id:"sider",width:"50%",style:{height:document.documentElement.clientHeight+"px"},children:Object(a.jsx)("div",{id:"output",style:u.output})})]}),Object(a.jsx)(B,{}),Object(a.jsx)(R,{}),Object(a.jsx)("div",{id:"buffer",style:{display:"none"}})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),l(e),r(e),c(e)}))};window.MathJax={tex:{inlineMath:[["$","$"]],tags:"ams"}};var $e=document.createElement("script");$e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js",$e.async=!0,document.head.appendChild($e),i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(fe,{})}),document.getElementById("root")),be()},97:function(e,t,n){},98:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.79dd938c.chunk.js.map