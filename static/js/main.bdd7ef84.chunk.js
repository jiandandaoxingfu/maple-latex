(this["webpackJsonpmaple-latex"]=this["webpackJsonpmaple-latex"]||[]).push([[0],{87:function(e,t,n){},88:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),l=n.n(r),c=n(20),i=n.n(c),p=(n(87),n(88),!1),o=!0;function s(e,t){if(o&&"input"===e.id&&e.value.length>1e4)o=!1;else if(!p){p=!0;var n=e.value.replace(/(beta|gamma|eta|zeta|xi|alpha|delta)/g,"$1   ");document.getElementById("buffer").innerHTML=n.replace(/\n/g,"<br />"),"input"===e.tagName.toLowerCase()&&(document.getElementById("buffer").innerHTML="$"+document.getElementById("buffer").innerHTML+"$"),window.MathJax.typesetPromise([document.getElementById("buffer")]).then((function(){return function(e){p=!1,e.innerHTML=document.getElementById("buffer").innerHTML}(t)}))}}var g={app:{width:"100%",height:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},left:{display:"flex",width:"50%",height:"100%",minWidth:"100px",minHeight:"300px",flexDirection:"column",justifyContent:"space-between"},header:{backgroundColor:"white",lineHeight:"20px",padding:"10px",overflowY:"auto",height:"120px",borderBottom:"4px solid #f0f2f5"},button:{borderRadius:"3px",margin:"2px",padding:"5px 10px"},textarea:{overflowY:"auto",width:"100%",padding:"10px 10px",outline:"none",border:"none",flexGrow:1},footer:{textAlign:"center",padding:"10px 5px 10px 5px",background:"#f0f2f5"},output:{minWidth:"100px",minHeight:"300px",height:"100%",flexGrow:1,background:"white",padding:"20px 20px",overflowY:"auto",borderLeft:"6px solid #f0f2f5"},tip:{position:"absolute",height:"30px",top:"130px",left:"0",right:"0",margin:"0 auto",textAlign:"center",zIndex:"2",display:"none"},timeline:{position:"absolute",top:"0",left:"0",width:"100%",minHeight:"100%",zIndex:"-3",backgroundColor:"white"}},u=n(64),d=n(49),m=n(65),h=n(66),f=n(80),$=n(77),b=n(103),x=n(78),y=n(26),v=n(39),j=n(102),w=n(106),I=b.a.Group,A=x.a.Group,B=function(e){Object(f.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={rows:3,columns:4,display:"none"},e.onTextChange=function(t){var n=Math.min(parseInt(t.target.value),10);"row"===t.target.id?e.setState({rows:n}):e.setState({columns:n})},e.eleOnInput=function(e){s(e.target,document.getElementById("tip"))},e.eleOnBlur=function(e){e.target.innerHTML=""},e.eleOnFocus=function(e){s(e.target,document.getElementById("tip"))},e.create_inputs=function(){for(var t=e.state.rows,n=e.state.columns,r=[],l=0;l<t;l++){for(var c=[],i=0;i<n;i++)c.push(Object(a.jsx)(y.a,{style:{flex:"1"},children:Object(a.jsx)(b.a,{className:"ele",style:{margin:"5px"},onInput:e.eleOnInput,onBlur:e.eleOnBlur,onFocus:e.eleOnFocus})},Math.random()));r.push(Object(a.jsx)(v.a,{style:{display:"flex",flexDirection:"row"},children:c},Math.random()))}return Object(a.jsx)(I,{style:{width:"98%"},children:r})},e.data_format=function(t){for(var n=e.state.rows,a=e.state.columns,r=Math.max.apply(Math,Object(d.a)(t.map((function(e){return e.length})))),l="",c=0;c<n;c++){for(var i=0;i<a-1;i++)l+=t[c*a+i].padEnd(r," ")+" & ";l+=t[c*a+a-1].padEnd(r," ")+" \\\\\r\n"}return l},e.table2matrix=function(){var t,n=document.getElementsByClassName("ele"),a=[],r="\u8865\u96f6"===document.getElementById("padend").getElementsByTagName("span")[0].innerText?"0":"",l=Object(u.a)(n);try{for(l.s();!(t=l.n()).done;){var c=t.value;a.push(c.value||r)}}catch(o){l.e(o)}finally{l.f()}var i=e.data_format(a);if("\u751f\u6210\u77e9\u9635"===window.event.target.innerText)document.getElementById("input").value+="\r\n$$\r\n\\left(\r\n\\begin{matrix}\r\n"+i+"\\end{matrix}\r\n\\right)\r\n$$",s(document.getElementById("input"),document.getElementById("output"));else{var p="".padEnd(2*e.state.columns,"|l");document.getElementById("input").value+="\r\n\\begin{tabular}{"+p+"|}\r\n\\hline\r\n"+i+"\\hline\r\n\\end{tabular}"}},e.close_table=function(){document.getElementById("table").style.display="none",document.getElementById("tip").style.display="none"},e}return Object(h.a)(n,[{key:"render",value:function(){var e={table:{position:"absolute",width:"600px",top:"150px",left:"0",right:"0",margin:"0 auto",display:this.state.display,background:"white"},InputGroup:{float:"left",maxWidth:"200px",top:"4px",left:"10px"},Button:{margin:"4px",padding:"5px 10px"},Switch:{top:"10px",transform:"scale(1.25)",left:"-10px"}};return Object(a.jsxs)(j.a,{id:"table",style:e.table,children:[Object(a.jsxs)("div",{id:"button_container",style:{position:"relative",left:"0",top:"0",textAlign:"center"},children:[Object(a.jsx)(I,{style:e.InputGroup,children:Object(a.jsxs)(v.a,{gutter:6,children:[Object(a.jsx)(y.a,{span:12,children:Object(a.jsx)(b.a,{id:"row",addonBefore:"\u884c",onChange:this.onTextChange,value:this.state.rows},"100")}),Object(a.jsx)(y.a,{span:12,children:Object(a.jsx)(b.a,{id:"column",addonBefore:"\u5217",onChange:this.onTextChange,value:this.state.columns},"101")})]})}),Object(a.jsxs)(A,{style:{left:"25px"},children:[Object(a.jsx)(w.a,{style:e.Switch,checkedChildren:"\u8865\u96f6",unCheckedChildren:"\u4e0d\u8865",defaultChecked:!0,id:"padend"}),Object(a.jsx)(x.a,{style:e.Button,onClick:this.table2matrix,type:"danger",children:"\u751f\u6210\u77e9\u9635"}),Object(a.jsx)(x.a,{style:e.Button,onClick:this.table2matrix,type:"default",children:"\u751f\u6210\u5217\u8868"}),Object(a.jsx)(x.a,{style:e.Button,onClick:this.close_table,type:"primary",children:"\u5173\u95ed"})]})]}),Object(a.jsx)("div",{id:"inputs",children:this.create_inputs()}),Object(a.jsx)("div",{id:"tip",style:e.tip})]})}}]),n}(l.a.Component),E=B,O=n(56),_=n.n(O),z=n(75),k=n(58),T=n(105),C=n(101);var M=function(){var e=Object(r.useState)([]),t=Object(k.a)(e,2),n=t[0],l=t[1],c=Object(r.useState)(!1),i=Object(k.a)(c,2),p=i[0],o=i[1],s=function(){var e=Object(z.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=1;case 2:if(!(n<5)){e.next=14;break}return e.t0=t.push,e.t1=t,e.t2=d.a,e.next=8,fetch("https://api.github.com/repos/jiandandaoxingfu/maple-latex/commits?page=".concat(n)).then((function(e){return e.json()})).then((function(e){return e.map((function(e){var t=new Date(e.commit.author.date);return{date:t=t.toJSON().split("T")[0]+" "+t.toTimeString().split("G")[0],msg:e.commit.message.replace(/\n+/g,"\n").split("\n")}})).filter((function(e){return!e.msg[0].match(/merge|bump/i)}))})).catch((function(e){return o(!1),[]}));case 8:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4);case 11:n++,e.next=2;break;case 14:console.log(t),l(t);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{id:"timeline",style:g.timeline,onClick:function(){document.getElementById("timeline").style.zIndex="-3"===document.getElementById("timeline").style.zIndex?3:-3,document.getElementById("timeline").style.display="block"!==document.getElementById("timeline").style.display?"block":"none",p||(o(!0),s())},children:Object(a.jsx)("div",{id:"timeline-container",children:(null===n||void 0===n?void 0:n[0])?Object(a.jsx)(T.a,{mode:"left",children:n.map((function(e){return Object(a.jsxs)(T.a.Item,{label:e.date,children:[Object(a.jsx)("p",{children:Object(a.jsx)("h2",{children:e.msg[0]})}),e.msg.slice(1).map((function(e){return Object(a.jsxs)("p",{children:[" ",e," "]})}))]})}))}):Object(a.jsx)(C.a,{size:"large"})})})},D=!0,R="";var Z="\u53ef\u4ee5\u5b9e\u65f6\u9884\u89c8\u6570\u5b66\u516c\u5f0f(\u5148\u8f93\u5165\u6570\u5b66\u73af\u5883)\uff0c\u521b\u5efa\u5217\u8868\u548c\u77e9\u9635\n\u5904\u7406Maple\u751f\u6210\u7684latex\u4ee3\u7801\u7b49\u3002\n\n\u53cc\u51fb\uff1a \u5de6\u4fa7\u6536\u8d77/\u6062\u590d\uff0c\n    \n\u6ce8\uff1a\n    1. \u4e2a\u4eba\u7528\uff0c\u4e0d\u5177\u6709\u666e\u9002\u6027\uff0c\u4e0d\u4fdd\u8bc1\u5b8c\u5168\u6b63\u786e\u3002 \u4e0d\u8fc7\u4e00\u76f4\u5728\u7528, \u7ecf\u5e38\u66f4\u65b0\u4fee\u590dbug.\n    2. \u4ec5\u652f\u6301latex\u6570\u5b66\u516c\u5f0f\uff0c\u5176\u5b83\u547d\u4ee4\u4e0d\u652f\u6301\u3002\n    3. \u5982\u51fa\u73b0\u9519\u8bef\uff0c \u53ef\u4ee5\u628a\u76f8\u5e94\u7684tex\u4ee3\u7801\u548c\u9519\u8bef\u63cf\u8ff0\n       \u53d1\u9001\u81f3: jiaminxin@outlook.com.\n    4. mma: Mathematics, szce: stationary zero-curvature equation.\n    \nlatex2maple:\n      \u5c06mathpix-snipping-tool\u901a\u8fc7\u56fe\u7247\u8bc6\u522b\u751f\u6210\u7684latex\u4ee3\u7801\n      \u8f6c\u5316\u6210maple\u7684\u8868\u8fbe\u5f0f\u3002 \u76ee\u524d\u5bf9\u5171\u8f6d\u8fd8\u6709\u95ee\u9898.\n\nmaple2mma:\n      \u5c06\u590d\u5236\u7684maple\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3amathematics\u7684\u8868\u8fbe\u5f0f\u3002\n      \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u51fd\u6570\uff1a\n      exp, log, abs, sqrt, conjugate, Re, Im,\n      sin, cos, tan, sinh, cosh, tanh, sech, csch,\n\nDT-gT: \n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT.\n    \nDT-coe:\n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT\u540e\u6bd4\u8f83\u5404\u5f0f\u4e2d\n      lambda\u5404\u6b21\u5e42\u7cfb\u6570\u6240\u5f97\u7b49\u5f0f \n  \n\u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316maple\u751f\u6210\u7684latex\u4ee3\u7801\uff0c\u53bb\u9664\u5197\u4f59\n      \u5c06latex\u4ee3\u7801\u7c98\u8d34\u5728\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u683c\u5f0f\u5316\u5373\u53ef\u3002\n    \n\u8fde\u7eedszce\u683c\u5f0f\u5316\uff1a\n      \u8fde\u7eed\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\n      \u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n  \n\u79bb\u6563\u516c\u5f0f\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316maple\u751f\u6210\u7684latex\u4ee3\u7801\uff0c\u53bb\u9664\u5197\u4f59\n      \u5c06latex\u4ee3\u7801\u7c98\u8d34\u5728\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u683c\u5f0f\u5316\u5373\u53ef\u3002\n\n\u79bb\u6563szce\u683c\u5f0f\u5316\uff1a\n      \u79bb\u6563\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\n      \u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n \ngrammarly:\n      \u4f7f\u7528Grammarly\u7f51\u7ad9\u68c0\u67e5\u8bba\u6587(\u82f1\u8bed)\u5c0f\u9519\u8bef\u3002\n      \u5c06tex\u5185\u5bb9\u4e2d\u7684\u6570\u5b66\u516c\u5f0f\u7b49\u5173\u952e\u4fe1\u606f\u5220\u9664\u3002\n\nTex\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316.tex\u6587\u672c\u3002 \u63d0\u4f9b\u65ad\u53e5\uff0c\u7f29\u8fdb\u3002 \n      (\u76ee\u524d\u5b58\u5728\u7684bug: \u4ee5\u67d0\u4e00\u73af\u5883\u7ed3\u675f\u7684\u6bb5\u843d\u4f1a\u4e0e\u4e0b\u4e00\u4e2a\u6bb5\u843d\u5408\u5e76.)\n\n";function H(e,t,n,a){for(;e.match(new RegExp(n));)for(var r=e.match(new RegExp(n)),l=r.index,c=0,i=0,p=l+(r[0].length-1);p<e.length;p++)if((c+=e[p]===t[0])===(i+=e[p]===t[1])){e=a(e,l,p,r);break}return e}var L=n(104);function S(e,t){L.a.info({message:"",description:t,placement:e})}function q(e,t,n){return e.slice(0,t+1)+"("+e.slice(t+2,n)+")"+e.slice(n+1,e.length)}function G(e,t,n,a){var r=a[2]?parseInt(a[2]):2;return e.slice(0,t-1)+" ("+e.slice(t+a[0].length,n)+")^(1/"+r+") "+e.slice(n+1,e.length)}function F(e,t,n,a){var r=a[0].slice(0,-1);return e.slice(0,t)+r+"("+e.slice(t+r.length+1,n)+")"+e.slice(n+1,e.length)}function N(e,t,n){return e.slice(0,t)+"("+e.slice(t+6,n)+")/"+e.slice(n+1,e.length)}function J(e,t,n,a){var r=a[0].slice(0,-1);return e.slice(0,t)+" "+e.slice(t+r.length+1,n)+" "+e.slice(n+1,e.length)}function P(e,t,n){var a=e.slice(0,t),r=e.slice(t+2,n),l=a.match(/}[xyzt]( [xyzt])*{$/)[0].slice(1,-1).replaceAll(" "," ,");return(a=a.replace(/}[xyzt]( [xyzt])*{$/,""))+")".concat(l," ,").concat(r,"(ffid ")+e.slice(n+1,e.length)}function U(e,t,n,a){var r=a[0].slice(0,-1),l=r[0].toUpperCase()+r.slice(1);return e.slice(0,t)+l+"["+e.slice(t+l.length+1,n)+"]"+e.slice(n+1,e.length)}function W(){var e=document.getElementById("input").value;return e="<hr><hr>\r\n\r\n \u539f\u7ed3\u679c\uff1a\r\n$$"+(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\!)/g," ")).replace(/(\s,)/g,"\\\\ "))+"$$<hr>"}function Y(e){var t=document.getElementById("input").value;return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\n/g,"")).replace(/,0,/g,",")).replace(/[+-]?{\\frac\s{\\rm\sd}{{\\rm\sd}\w}}\s\\left\(\s[0-9]+\s\\right\)/g," ")).replace(/{\\frac {\\partial }{\\partial (\w)}} \\left\( (.*?) (\\left\( x,t \\right\).*?)\\right\)/g,"($2 $3)_{$1}")).replace(/{\\frac\s{\\partial\s}{\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{\\partial\s\^{(\d+)}}{\\partial\s{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\rm d}{{\\rm d}(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{{\\rm d}\^{(\d+)}}{{\\rm d}{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d}}{\\partial\s(\w)\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s(\w)\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$1$3$2} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$2$1$3} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$5_{$2$1$4$3} $6"),"1"===e&&(t=(t=(t=t.replace(/D_{{\d}}\s+\\left\(\s+(\w)\s+\\right\)\s+\\left\(\s+(\d),(\w)\s+\\right\)/g,"$1_{$2,$3}")).replace(/(\w)\s+\\left\(\s+(\d),\w\s+\\right\)/g,"$1_{$2}")).replace(/\s,/g," =0, \\\\")),t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/\\left\(\s[a-z](,[a-z]){0,}\s\\right\)/g," ")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/{({\w})}/g,"$1")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+([^\^])/g,"$1 $3")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+\^({\d+})/g,"$1^$3")).replace(/([a-zA-Z]+)_{(\w+)}_{(\w+)}/g,"$1_{$2,$3}")).replace(/\s,/g,"\t \\\\\t ")).replace(/\\\\\s+\\\\/g,"\\\\")).replace(/\s{2,}/g," ")}function V(){var e=document.getElementById("input").value;return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/\s,/g,"\t \\\\\t ")).replace(/\s{2,}/g," ")).replace(/\\left\(\sn\s\\right\)/g,"")).replace(/\\left\(\sn([+-])1\s\\right\)/g,"^{$1}")).replace(/\\left\(\sn([+-])2\s\\right\)/g,"^{$1$1}")).replace(/\\left\(\sn([+-])3\s\\right\)/g,"^{$1$1$1}")).replace(/\\left\(\sn([+-])4\s\\right\)/g,"^{$1$1$1$1}")).replace(/\\left\(\sn([+-])5\s\\right\)/g,"^{$1$1$1$1$1}")).replace(/\\left\(\sn([+-])6\s\\right\)/g,"^{$1$1$1$1$1$1}")).replace(/\\left\(\sn([+-])7\s\\right\)/g,"^{$1$1$1$1$1$1$1}")}function K(e,t){var n;n="1"===t?V():Y(e);var a=W();document.getElementById("input").value=a+"\r\n\r\n\r\n\u8f6c\u6362\u7ed3\u679c\uff1a\r\n \r\n\r\n$"+n+"$",s(document.getElementById("input"),document.getElementById("output"))}function Q(e){var t,n;t=(t=(t=(t=(t="1"===e?V():Y("0")).replace(/\s/g,"")).replace(/.*?{array}{.*?}(.*)\\end.*/,"$1")).replace(/\\lambda/g,"\\lambda ")).replace(/\\\\/g,"&").split("&"),n="0"===e?t.map((function(e){var t=function(e){if(/^[^-+]*?\w_\{\d\d,\w\}/.test(e))return e;"-"!==e[0]&&(e="+"+e);var t=e.match(/[+-][^+-]*?\w_\{\d\d,\w\}[^+-]*?/),n="";null!==t&&(n=t[0],e=e.replace(t[0],""));"+"===n[0]&&(n=n.slice(1));return n+e}(e);return[t,X(t)]})):t.map((function(e){return[e,X(e)]}));var a="",r="";n.forEach((function(e){a+="&"+e[0]+"=0,\\\\ \r\n",r+=e[1]})),a="\\begin{align}\r\n"+a+"\\end{align}",r="\\begin{align}\r\n"+r+"\\end{align}";var l=W();document.getElementById("input").value=l+"\r\n\r\n"+a+"\r\n\r\n<hr><hr>\u4f9d\u8d56\u5173\u7cfb:\r\n",document.getElementById("input").value=document.getElementById("input").value+"$"+r+"$<hr><hr>",s(document.getElementById("input"),document.getElementById("output"))}function X(e){var t=(e+=" ").match(/(-|\+)V_{\d\d}(?=(\+|\s|-))/g),n="";return t&&t.forEach((function(t){n+="-"+t,e=e.replace(t,"")})),"+"===(e=(e=(e="&"+n+"="+e+",\\\\ \r\n").replace(/--/g,"+")).replace(/-\+/g,"-"))[1]?e="&"+e.slice(2,e.length):"="===e[1]&&(e=""),e}function ee(e,t){var n=e.split("\n"),a=["",""],r=[],l="";if(e.indexOf("\\begin")<0||n.length<3)l=e.split("\n").map((function(e){return e.replace(/^ */," ".repeat(3*(t-1)))})).reduce((function(e,t){return e+"\n"+t}));else{var c=null!==e.match(/^\\begin/)&&null!==e.match(/\\end{.*?}$/);c?(a=[n[0],n.slice(-1)[0]].map((function(e){return e.replace(/^ */," ".repeat(3*(t-1)))})),e=n.slice(1,-1).reduce((function(e,t){return e+"\n"+t}))):a=["",""],r=function(e){for(var t=e,n=t.match(/\\begin{(.*?)}/),a=[];n;){for(var r=n.index,l=n[1],c="\\end{".concat(l,"}"),i=0,p="",o=[],s=[1];o.length!==s.length;)i=t.slice(i).indexOf(c)+c.length+i,o=(p=t.slice(r,i)).match(/\\begin{/g)||[],s=p.match(/\\end{/g)||[];a.push(t.slice(0,r)),a.push(t.slice(r,i)),n=(t=t.slice(i)).match(/\\begin{(.*?)}/)}return t.length>0&&a.push(t),a.reduce((function(e,t){return e+t}))===e?a:[]}(e).map((function(e){return ee(e,t+c)}))}return{level:t,envir:a,child:r,format_text:l}}function te(e){return 0===e.child.length?e.format_text:"\n".concat(e.envir[0],"\n").concat(e.child.map((function(e){return te(e)})).reduce((function(e,t){return e+t})),"\n").concat(e.envir[1],"\n")}var ne=["\u4f7f\u7528\u8bf4\u660e","\u65f6\u95f4\u8f74","\u521b\u5efa\u77e9\u9635","latex2maple","maple2mma","DT-gT","DT-coe","\u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316","\u8fde\u7eedszce\u683c\u5f0f\u5316","\u79bb\u6563\u516c\u5f0f\u683c\u5f0f\u5316","\u79bb\u6563szce\u683c\u5f0f\u5316","grammarly","latex\u683c\u5f0f\u5316"],ae=[function(){D?(R=document.getElementById("input").value,document.getElementById("input").value=Z):(document.getElementById("input").value=R,s(document.getElementById("input"),document.getElementById("output"))),D=!D},function(){document.getElementById("timeline").click()},function(){document.getElementById("table").style.display="block",document.getElementById("tip").style.display="block"},function(){var e=document.getElementById("input").value;e=H(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\right\./g,"")).replace(/\\left\./g,"")).replace(/\\left(\(|\[|\\{)/g," ( ")).replace(/\\right(\)|\]|\\})/g," ) ")).replace(/\\left\|(.*?)\\right\|/g," (abs($1)) ")).replace(/\\[bB]ig/g,"")).replace(/ i\(/g," i (")).replace(/&/g,", ")).replace(/(, *)?\\\\/g,", ")).replace(/\\times/g," "),["{","}"],"\\\\(tilde|hat|bar|underline|acute|check|boldsymbol|mathrm){",J),e=H(e=e.replace(/\\(alpha|beta|gamma|delta|lambda|eta|zeta|xi|rho|phi|psi)([a-zA-Z])/g,"$1 $2"),["{","}"],"\\\\frac{",N),e=H(e=(e=(e=(e=(e=(e=e.replace(/_{n}/g,"(n) ")).replace(/_{n([+-])(\d+)}/g,"(n$1$2) ")).replace(/ *_ */g,"_").replace(/{ */g,"{").replace(/ *}/g,"}")).replace(/_([xyzt])/g,"_{$1}")).replace(/(\w+)_{(\d{0,}),? ?([xyzt]( [xyzt])*)}/g,"($1$2)_{$3}")).split("").reverse().join(""),["}","{"],"_}",P),e=H(e,[")","("],"_\\)",P),e=(e=H(e,["]","["],"_\\]",P)).split("").reverse().join("");for(var t=0;t<=12;t++){var n=RegExp("([a-zA-Z0-9]+)\\^{([+-])[+-]{".concat(t,"}}"),"g");e=e.replace(n,"shift($1, $2".concat(t+1,")"))}e=H(e=(e=e.replace(/\\operatorname{([a-zA-Z]+)}/g,"\\$1 ")).replace(/ {2,}/g," "),["{","}"],"\\^{",q),e=(e=(e=H(e,["{","}"],"sqrt(\\[(.*?)\\])?{",G)).replace(/e\^/g," \\exp ")).replace(/\\ln /g,"\\log ");var a="(exp|log|sinh|cosh|sech|csch|coth|tanh|sin|cos|tan|arccos|arcsin|arctan|arccot)",r=new RegExp("\\\\(".concat(a,") ([a-zA-Z0-9])"),"g");e=e.replace(r," $1($3)"),r=new RegExp("\\\\(".concat(a,") "),"g"),e=H(e=e.replace(r," $1"),["{","}"],a+"{",F),e=(e=(e=(e=(e=(e=(e=(e=(e=(e=H(e,["[","]"],a+"\\[",F)).replace(/\\/g,"")).replace(/\[/g,"(")).replace(/\]/g,")")).replace(/_ ?{(m|k|l|i|j|p|q|n)}/g,"[$1] ")).replace(/\s*?_{(\d+)}/g,"$1")).replace(/_ ?{(.*?)}/g,"[$1]")).replace(/{/g," ( ").replace(/}/g," ) ")).replace(/\)\(/g,") (").replace(/ {2,}/g," ")).replace(/\(\*\)/g,"(ccc)"),document.getElementById("input").value+="\r\n\r\n"+e,S("bottomRight","\u5df2\u5b8c\u6210")},function(){var e=document.getElementById("input").value;e=e.replace(/ln(\(|\])/g,"log$1"),["exp","log","sinh","cosh","sech","csch","coth","tanh","sin","cos","tan","sqrt","abs","conjugate"].forEach((function(t){e=H(e,["(",")"],t+"\\(",U)})),e=(e=(e=(e=e.replaceAll("arc","Arc")).replace(/diff\(([^,]*?), ([a-zA-Z])\)/g,"D[$1, $2]")).replace(/diff\(([^,]*?), ([a-zA-Z])\$(\d+)\)/g,"D[$1, {$2, $3}]")).replace(/([a-z_\d])\(([a-z].*?)\)/g,"$1[$2]"),document.getElementById("input").value+="\r\n\r\n"+e,S("bottomRight","\u5df2\u5b8c\u6210")},function(){var e=Y("0");e=(e=(e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).replace(/\s/g,"")).replace(/&/g,"=0,\\\\&")).replace(/\\\\([^&])/g,"=0,\\\\&$1")).replace(/\\left\[\\begin{array}{\w+}(.*?)\\end{array}\\right\]/,"\\begin{align}& $1=0.\\end{align}")).replace(/\\lambda/g,"\\lambda ");var t=W();document.getElementById("input").value=t+"\r\n\r\n\r\n$"+e+"$",s(document.getElementById("input"),document.getElementById("output"))},function(){var e=Y("0");e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).slice(1,e.length-1)).replace(/\\\\/g,"=0, \\\\\r\n&")).replace(/((\s|\+|-))_{x}/g,"$1 0"),e="\\begin{align}&".concat(e,"=0.\\end{align}");var t=W();document.getElementById("input").value=t+"\r\n\r\n\r\n$"+e+"$",s(document.getElementById("input"),document.getElementById("output"))},function(){K("0","0")},function(){Q("0")},function(){K("0","1")},function(){Q("1")},function(){var e=document.getElementById("input").value;e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\cite{.*?}/g,"[1]")).replace(/\\eqref{.*?}/g,"(2)")).replace(/\\ref{.*?}/g,"(3)")).replace(/\\label{.*?}/g,"")).replace(/\$.*?\$/g,"$A=B$")).replace(/\\begin{align\*?}(.|\n)*?\\end{align\*?}/g,"$$A=B$$")).replace(/\\begin{equation\*?}(.|\n)*?\\end{equation\*?}/g,"$$A=B$$")).replace(/\\begin{thebibliography\*?}(.|\n)*?\\end{thebibliography\*?}/g,"")).replace(/\d{8}/g,"1")).replace(/(.|\n)*\\begin{abstract}/,""),document.getElementById("input").value="\r\n\r\n"+e,S("bottomRight","\u5df2\u5b8c\u6210")},function(){var e=document.getElementById("input").value.replace(/\n\t/g,"\n"),t=e.match(/ *%.*?\n/g),n=(e=e.replace(/[ \t]*%.*?\n/g,"_DESCRIPTION_\n").replace(/\n/g,"AAAAAAAAA").replace(/\t/g,"    ")).match(/.*?\\begin{document}/);n=n?n[0].replaceAll("AAAAAAAAA","\n"):"";var a=e.match(/\\begin{document}(.*?)\\end{document}/),r=null!==a;a=r?a[1].replace(/\\begin{thebibliography}.*?\\end{thebibliography}/,"").replaceAll("AAAAAAAAA","\n"):e.replaceAll("AAAAAAAAA","\n");var l=e.match(/\\begin{thebibliography}.*?\\end{thebibliography}/);l=l?l[0].replaceAll("AAAAAAAAA","\n").replaceAll("\\bibitem","\n\\bibitem").replace(/( *\n){3,}/g,"\n\n"):"";var c=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=a.replace(/(\\[a-z]+)\s+{/g,"$1{")).replace(/([a-z]|\$|})\. {0,}([A-Z])/g,"$1.\n$2")).replace(/([\u4e00-\u9fa5]|\$|})([\.\u3002]) {0,}([\u4e00-\u9fa5])/g,"$1$2\n$3")).replace(/(\\begin{)/g,"\n$1")).replace(/(\\begin{.*?}{\w+}) *([^\n])/g,"$1\n$2")).replace(/(\\begin{.*?}\[[^\\]*\]) *([^\n])/g,"$1\n$2")).replace(/(\\begin{.*?}) *([^\n{\[])/g,"$1\n$2")).replace(/(\\begin{.*?)\n\s*(\\label{.*?})/g,"$1$2")).replace(/(\\end{.*?})/g,"\n$1\n")).replace(/( [a-zA-Z]+) *\n *([a-zA-Z]+[ ,\.;]?)/g,"$1 $2")).replace(/ ([a-zA-Z]+)\s\s+([a-zA-Z]+[ ,\.;]?)/g," $1 $2")).replace(/([a-z].*?\\\\)(.*?[a-z])/g,"$1\n$2")).match(/\\begin{/g)||[],i=a.match(/\\end{/g)||[];if(c.length===i.length){var p=ee(a,1);if(window.block_tree=p,console.log(p),e=n+(a=te(p).replace(/(\s*\n){3,}/g,"\n\n").replace(/(\\end{.*?}\n) *\n/g,"$1").replace(/\s*\n\s*(\n\s*\\end{)/g,"$1").replace(/\n\s*(\n\s*\\begin{)/g,"$1").replace(/(\\begin{.*?\n)\s*\n/g,"$1").replace(/(\\chapter{)/g,"\n\n\n$1").replace(/(\\[a-z]*section{)/g,"\n\n\n$1").replace(/(\\end{frame})/g,"$1\n\n\n"))+l+(r?"\n\\end{document}":""),null!==t)for(var o=0;o<t.length;o++)e=e.replace("_DESCRIPTION_",t[o].slice(0,-1));document.getElementById("input").value=e,S("bottomRight","\u5df2\u5b8c\u6210")}else S("bottomRight","\\begin{}\u4e0e\\end{}\u4e2a\u6570\u4e0d\u7b49, \u65e0\u6cd5\u5904\u7406")}],re=["danger","danger","primary","default","default","primary","primary","default","default","primary","primary","default","default"];var le=function(){return Object(a.jsx)("div",{children:function(){for(var e=ne.length,t=[],n=0;n<e;n++)t.push(Object(a.jsx)(x.a,{style:g.button,onClick:ae[n],type:re[n],children:ne[n]},n));return t}()})};function ce(){var e="none"!==document.getElementById("left").style.display;document.getElementById("left").style.display=e?"none":"flex"}var ie=function(){return document.body.addEventListener("dblclick",ce),Object(a.jsxs)("div",{id:"app",style:g.app,children:[Object(a.jsxs)("div",{id:"left",style:g.left,children:[Object(a.jsx)("div",{style:g.header,children:Object(a.jsx)(le,{})}),Object(a.jsx)("textarea",{id:"input",style:g.textarea,onInput:function(){s(document.getElementById("input"),document.getElementById("output"))}}),Object(a.jsxs)("div",{style:g.footer,children:["\xa92018-2022 ",Object(a.jsx)("strong",{children:"Maple-Latex"})," v2.6 By",Object(a.jsx)("a",{style:{color:"black"},rel:"noreferrer",target:"_blank",href:"https://github.com/jiandandaoxingfu/maple-latex",children:Object(a.jsx)("strong",{children:"  JMx "})}),"\xa0\xa0",Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://jiandandaoxingfu.github.io/myblog/post/maple-latex/",children:"\u6587\u6863"})]})]}),Object(a.jsx)("div",{id:"output",style:g.output}),Object(a.jsx)(E,{}),Object(a.jsx)(M,{}),Object(a.jsx)("div",{id:"buffer",style:{display:"none"}})]})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)}))};window.MathJax={tex:{inlineMath:[["$","$"]],tags:"ams"}};var oe=document.createElement("script");oe.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js",oe.async=!0,document.head.appendChild(oe),i.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(ie,{})}),document.getElementById("root")),pe()}},[[98,1,2]]]);
//# sourceMappingURL=main.bdd7ef84.chunk.js.map