(this["webpackJsonpmaple-latex"]=this["webpackJsonpmaple-latex"]||[]).push([[0],{83:function(e,t,n){},84:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),l=n.n(r),c=n(20),i=n.n(c),o=(n(83),n(24)),p=(n(84),!1);function s(e,t){if(!("input"===e.id&&e.value.length>1e4)&&!p){p=!0;var n=e.value.replace(/(beta|gamma|eta|zeta|xi|alpha|delta)/g,"$1   ");document.getElementById("buffer").innerHTML=n.replace(/\n/g,"<br />"),"input"===e.tagName.toLowerCase()&&(document.getElementById("buffer").innerHTML="$"+document.getElementById("buffer").innerHTML+"$"),window.MathJax.typesetPromise([document.getElementById("buffer")]).then((function(){return function(e){p=!1,e.innerHTML=document.getElementById("buffer").innerHTML}(t)}))}}var g={app:{width:"100%",height:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},left:{display:"flex",width:"50%",height:"100%",minHeight:"300px",flexDirection:"column",justifyContent:"space-between"},header:{backgroundColor:"white",lineHeight:"20px",padding:"10px",overflowY:"auto",height:"120px",borderBottom:"6px solid #f0f2f5"},button:{borderRadius:"3px",margin:"2px",padding:"5px 10px"},textarea:{overflowY:"auto",width:"100%",padding:"10px 10px",outline:"none",border:"none",flexGrow:1},footer:{display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",textAlign:"center",padding:"10px 5px 10px 5px",background:"#f0f2f5"},output:{width:"50%",minWidth:"100px",minHeight:"300px",height:"100%",flexGrow:1,background:"white",padding:"20px 20px",overflowY:"auto",borderLeft:"6px solid #f0f2f5"},tip:{position:"absolute",height:"30px",top:"130px",left:"0",right:"0",margin:"0 auto",textAlign:"center",zIndex:"2",display:"none"},timeline:{position:"absolute",top:"0",left:"0",width:"100%",minHeight:"100%",zIndex:"-3",backgroundColor:"white"}},d=n(64),u=n(30),h=n(99),m=n(75),f=n(27),b=n(41),x=n(98),$=n(102),j=h.a.Group,y=m.a.Group;var v=function(e){var t=e.display,n=e.setdisplay,l=Object(r.useState)(3),c=Object(o.a)(l,2),i=c[0],p=c[1],g=Object(r.useState)(3),v=Object(o.a)(g,2),O=v[0],A=v[1],w=function(e){var t=Math.min(parseInt(e.target.value),10);"row"===e.target.id?p(t):A(t)},E=function(e){s(e.target,document.getElementById("tip"))},B=function(e){e.target.innerHTML=""},_=function(e){s(e.target,document.getElementById("tip"))},I=function(){var e,t=document.getElementsByClassName("ele"),n=[],a="\u8865\u96f6"===document.getElementById("padend").getElementsByTagName("span")[0].innerText?"0":"",r=Object(d.a)(t);try{for(r.s();!(e=r.n()).done;){var l=e.value;n.push(l.value||a)}}catch(p){r.e(p)}finally{r.f()}var c=function(e){for(var t=Math.max.apply(Math,Object(u.a)(e.map((function(e){return e.length})))),n="",a=0;a<i;a++){for(var r=0;r<O-1;r++)n+=e[a*O+r].padEnd(t," ")+" & ";n+=e[a*O+O-1].padEnd(t," ")+" \\\\\r\n"}return n}(n);if("\u751f\u6210\u77e9\u9635"===window.event.target.innerText)document.getElementById("input").value+="\r\n$$\r\n\\left(\r\n\\begin{matrix}\r\n"+c+"\\end{matrix}\r\n\\right)\r\n$$",s(document.getElementById("input"),document.getElementById("output"));else{var o="".padEnd(2*O,"|l");document.getElementById("input").value+="\r\n\\begin{tabular}{"+o+"|}\r\n\\hline\r\n"+c+"\\hline\r\n\\end{tabular}"}},z={table:{position:"absolute",width:"600px",top:"150px",left:"0",right:"0",margin:"0 auto",display:t,background:"white"},InputGroup:{float:"left",maxWidth:"200px",top:"4px",left:"10px"},Button:{margin:"4px",padding:"5px 10px"},Switch:{top:"10px",transform:"scale(1.25)",left:"-10px"}};return Object(a.jsxs)(x.a,{id:"table",style:z.table,children:[Object(a.jsxs)("div",{id:"button_container",style:{position:"relative",left:"0",top:"0",textAlign:"center"},children:[Object(a.jsx)(j,{style:z.InputGroup,children:Object(a.jsxs)(b.a,{gutter:6,children:[Object(a.jsx)(f.a,{span:12,children:Object(a.jsx)(h.a,{id:"row",addonBefore:"\u884c",onChange:w,value:i},"100")}),Object(a.jsx)(f.a,{span:12,children:Object(a.jsx)(h.a,{id:"column",addonBefore:"\u5217",onChange:w,value:O},"101")})]})}),Object(a.jsxs)(y,{style:{left:"25px"},children:[Object(a.jsx)($.a,{style:z.Switch,checkedChildren:"\u8865\u96f6",unCheckedChildren:"\u4e0d\u8865",defaultChecked:!0,id:"padend"}),Object(a.jsx)(m.a,{style:z.Button,onClick:I,type:"danger",children:"\u751f\u6210\u77e9\u9635"}),Object(a.jsx)(m.a,{style:z.Button,onClick:I,type:"default",children:"\u751f\u6210\u5217\u8868"}),Object(a.jsx)(m.a,{style:z.Button,onClick:function(){n("none"),document.getElementById("tip").style.display="none"},type:"primary",children:"\u5173\u95ed"})]})]}),Object(a.jsx)("div",{id:"inputs",children:function(){for(var e=[],t=0;t<i;t++){for(var n=[],r=0;r<O;r++)n.push(Object(a.jsx)(f.a,{style:{flex:"1"},children:Object(a.jsx)(h.a,{className:"ele",style:{margin:"5px"},onInput:E,onBlur:B,onFocus:_})},Math.random()));e.push(Object(a.jsx)(b.a,{style:{display:"flex",flexDirection:"row"},children:n},Math.random()))}return Object(a.jsx)(j,{style:{width:"98%"},children:e})}()}),Object(a.jsx)("div",{id:"tip",style:z.tip})]})},O=n(57),A=n.n(O),w=n(73),E=n(101),B=n(97);var _=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(r.useState)(!1),i=Object(o.a)(c,2),p=i[0],s=i[1],d=function(){var e=Object(w.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=1;case 2:if(!(n<5)){e.next=14;break}return e.t0=t.push,e.t1=t,e.t2=u.a,e.next=8,fetch("https://api.github.com/repos/jiandandaoxingfu/maple-latex/commits?page=".concat(n)).then((function(e){return e.json()})).then((function(e){return e.map((function(e){var t=new Date(e.commit.author.date);return{date:t=t.toJSON().split("T")[0]+" "+t.toTimeString().split("G")[0],msg:e.commit.message.replace(/\n+/g,"\n").split("\n")}})).filter((function(e){return!e.msg[0].match(/merge|bump/i)}))})).catch((function(e){return s(!1),[]}));case 8:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4);case 11:n++,e.next=2;break;case 14:console.log(t),l(t);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{id:"timeline",style:g.timeline,onClick:function(){document.getElementById("timeline").style.zIndex="-3"===document.getElementById("timeline").style.zIndex?3:-3,document.getElementById("timeline").style.display="block"!==document.getElementById("timeline").style.display?"block":"none",p||(s(!0),d())},children:Object(a.jsx)("div",{id:"timeline-container",children:(null===n||void 0===n?void 0:n[0])?Object(a.jsx)(E.a,{mode:"left",children:n.map((function(e){return Object(a.jsxs)(E.a.Item,{label:e.date,children:[Object(a.jsx)("p",{children:Object(a.jsx)("h2",{children:e.msg[0]})}),e.msg.slice(1).map((function(e){return Object(a.jsxs)("p",{children:[" ",e," "]})}))]})}))}):Object(a.jsx)(B.a,{size:"large"})})})};function I(e,t,n,a,r){for(;e.match(new RegExp(n));)for(var l=e.match(new RegExp(n)),c=l.index,i=0,o=0,p=c+(l[0].length-1);p<e.length;p++)if((i+=e[p]===t[0])===(o+=e[p]===t[1])){e=a(e,c,p,l,n,r);break}return e}var z=n(100);function k(e,t){z.a.info({message:"",description:t,placement:e})}function T(e,t,n,a,r,l){return r=r.slice(0,-2),e.slice(0,t)+l+"["+e.slice(t+r.length+1,n)+"]"+e.slice(n+1,e.length)}var C={arctan:"ArcTan",arcsin:"ArcSin",arccos:"ArcCos",arcsinh:"ArcSinh",arccot:"ArcCot",arccosh:"ArcCosh",arctanh:"ArcTanh",arccoth:"ArcCoth",arcsec:"ArcSec",arccsc:"ArcCsc",arccsch:"ArcCsch",arcsech:"ArcSech",exp:"Exp",log:"Log",ln:"Log",sinh:"Sinh",cosh:"Cosh",sech:"Sech",csch:"Csch",coth:"Coth",tanh:"Tanh",sin:"Sin",cos:"Cos",tan:"Tan",sqrt:"Sqrt",abs:"Abs",conjugate:"Conjugate",diff:"D",JacobiTheta1:"EllipticTheta1",JacobiTheta2:"EllipticTheta2",JacobiTheta3:"EllipticTheta3",JacobiTheta4:"EllipticTheta4"};var M=m.a.Group;var S=function(e){var t=e.display,n=e.setdisplay,r=function(){n("none")},l={table:{position:"absolute",width:"405px",maxHeight:"410px",top:"150px",left:"0",right:"0",margin:"0 auto",display:t,background:"white",overflow:"hidden",textAlign:"center"},inputs:{position:"relative",width:"405px",margin:"auto",maxHeight:"300px",overflowY:"auto",marginBottom:"10px"}};return Object(a.jsxs)(x.a,{id:"func_convert",style:l.table,children:[Object(a.jsxs)(b.a,{children:[Object(a.jsx)(f.a,{style:{overflow:"hidden",width:"150px",marginRight:"20px",marginBottom:"7px"},children:Object(a.jsx)("b",{children:"Maple"})},Math.random()),Object(a.jsx)(f.a,{children:Object(a.jsx)("label",{style:{marginRight:"34px",display:"inline-block"}})}),Object(a.jsx)(f.a,{style:{overflow:"hidden",width:"150px",marginBottom:"7px"},children:Object(a.jsx)("b",{children:"Mathematica"})},Math.random())]},Math.random()),Object(a.jsx)("div",{id:"inputs",style:l.inputs,children:"block"===t&&function(){var e=function(){var e,t,n=null===(e=(" "+document.getElementById("input").value).match(/[a-zA-Z_][a-zA-Z\d_]*?\(/g))||void 0===e?void 0:e.map((function(e){return e.slice(0,-1)}));return(n=Object(u.a)(new Set(n))).sort((function(e,t){return(e.length<t.length)-1})),(null===(t=n)||void 0===t?void 0:t[0])?n:[]}();if(!(e.length<1)){for(var t=[],n=0;n<e.length;n++){var r;t.push(Object(a.jsxs)(b.a,{children:[Object(a.jsx)(f.a,{style:{overflow:"hidden",width:"150px",marginRight:"20px",marginBottom:"7px"},children:Object(a.jsx)(h.a,{className:"ele maple-func",value:e[n]})},Math.random()),Object(a.jsx)(f.a,{children:Object(a.jsx)("label",{style:{marginRight:"15px",paddingTop:"5px",display:"inline-block"},children:"\u27f6"})}),Object(a.jsx)(f.a,{style:{overflow:"hidden",width:"150px",marginBottom:"7px"},children:Object(a.jsx)(h.a,{className:"ele mma-func",defaultValue:null!==(r=C[e[n]])&&void 0!==r?r:e[n]})},Math.random())]},Math.random()))}return Object(a.jsx)("div",{children:t})}}()}),Object(a.jsxs)(M,{style:{marginBottom:"10px"},children:[Object(a.jsx)(m.a,{onClick:function(){r(),function(){var e=Object(u.a)(document.querySelectorAll(".maple-func")).map((function(e){return e.value})),t=Object(u.a)(document.querySelectorAll(".mma-func")).map((function(e){return e.value})),n=document.getElementById("input").value;e.forEach((function(e,a){if("diff"===e){for(var r=1;r<10;r++){var l=new RegExp("diff\\(([a-zA-Z_][a-zA-Z_\\d]*?([\\(\\[][^\\[\\]\\(\\)]*?[\\)\\]])?)"+", ([a-z])".repeat(r)+"\\)","g");n=n.replace(l,"D[$1, {$3, ".concat(r,"}]"))}n=n.replace(/diff\(([^,]*?), ([a-zA-Z])\$(\d+)\)/g,"D[$1, {$2, $3}]")}else n=I(n,["(",")"],e+"\\(",T,t[a])})),n=n.replace(/EllipticTheta(\d)\[/g,"EllipticTheta[$1, "),document.getElementById("input").value+="\r\n\r\n"+n,k("bottomRight","\u5df2\u5b8c\u6210")}()},type:"primary",children:"\u8f6c\u6362"}),Object(a.jsx)(m.a,{onClick:r,type:"danger",style:{marginLeft:"25px"},children:"\u53d6\u6d88"})]})]})},Z=!0,R="";function L(){Z?(R=document.getElementById("input").value,document.getElementById("input").value=D):(document.getElementById("input").value=R,s(document.getElementById("input"),document.getElementById("output"))),Z=!Z}var D="\u53ef\u4ee5\u5b9e\u65f6\u9884\u89c8\u6570\u5b66\u516c\u5f0f(\u5148\u8f93\u5165\u6570\u5b66\u73af\u5883)\uff0c\u521b\u5efa\u5217\u8868\u548c\u77e9\u9635\n\u5904\u7406Maple\u751f\u6210\u7684latex\u4ee3\u7801\u7b49\u3002\n\n\u53cc\u51fb\uff1a \u5de6\u4fa7\u6536\u8d77/\u6062\u590d\uff0c\n    \n\u6ce8\uff1a\n    1. \u4e2a\u4eba\u7528\uff0c\u4e0d\u5177\u6709\u666e\u9002\u6027\uff0c\u4e0d\u4fdd\u8bc1\u5b8c\u5168\u6b63\u786e\u3002 \u4e0d\u8fc7\u4e00\u76f4\u5728\u7528, \u7ecf\u5e38\u66f4\u65b0\u4fee\u590dbug.\n    2. \u4ec5\u652f\u6301latex\u6570\u5b66\u516c\u5f0f\uff0c\u5176\u5b83\u547d\u4ee4\u4e0d\u652f\u6301\u3002\n    3. \u5982\u51fa\u73b0\u9519\u8bef\uff0c \u53ef\u4ee5\u628a\u76f8\u5e94\u7684tex\u4ee3\u7801\u548c\u9519\u8bef\u63cf\u8ff0\n       \u53d1\u9001\u81f3: jiaminxin@outlook.com.\n    4. mma: Mathematics, szce: stationary zero-curvature equation.\n    \nlatex2maple:\n      \u5c06mathpix-snipping-tool\u901a\u8fc7\u56fe\u7247\u8bc6\u522b\u751f\u6210\u7684latex\u4ee3\u7801\n      \u8f6c\u5316\u6210maple\u7684\u8868\u8fbe\u5f0f\u3002 \u76ee\u524d\u5bf9\u5171\u8f6d\u8fd8\u6709\u95ee\u9898.\n      \u6ce8\u610f, \u5982\u679ctex\u4ee3\u7801\u4e0d\u662f\u901a\u8fc7mathpix-snipping-tool\u751f\u6210, \u53ef\u80fd\u4f1a\u8f6c\u6362\u5931\u8d25.\n      \u56e0\u4e3a\u6bcf\u4e2a\u4eba\u4e66\u5199\u4e60\u60ef\u4e0d\u540c, \u60c5\u51b5\u592a\u591a, \u4e0d\u597d\u5904\u7406.\n\nmaple2mma:\n      \u5c06\u590d\u5236\u7684maple\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3amathematics\u7684\u8868\u8fbe\u5f0f\u3002\n      \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u51fd\u6570\uff1a\n      exp, log, abs, sqrt, conjugate, Re, Im,\n      sin, cos, tan, sinh, cosh, tanh, sech, csch,\n\nDT-gT: \n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT.\n    \nDT-coe:\n      \u6307\u5c06gauge\u53d8\u6362T\u4ee3\u5165T_x+TU=U_hatT\u540e\u6bd4\u8f83\u5404\u5f0f\u4e2d\n      lambda\u5404\u6b21\u5e42\u7cfb\u6570\u6240\u5f97\u7b49\u5f0f \n  \n\u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316maple\u751f\u6210\u7684latex\u4ee3\u7801\uff0c\u53bb\u9664\u5197\u4f59\n      \u5c06latex\u4ee3\u7801\u7c98\u8d34\u5728\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u683c\u5f0f\u5316\u5373\u53ef\u3002\n    \n\u8fde\u7eedszce\u683c\u5f0f\u5316\uff1a\n      \u8fde\u7eed\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\n      \u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n  \n\u79bb\u6563\u516c\u5f0f\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316maple\u751f\u6210\u7684latex\u4ee3\u7801\uff0c\u53bb\u9664\u5197\u4f59\n      \u5c06latex\u4ee3\u7801\u7c98\u8d34\u5728\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u683c\u5f0f\u5316\u5373\u53ef\u3002\n\n\u79bb\u6563szce\u683c\u5f0f\u5316\uff1a\n      \u79bb\u6563\u9759\u6001\u96f6\u66f2\u7387\u65b9\u7a0b\u683c\u5f0f\u5316\uff0c\u5e76\u4e14\u8f93\u51fa\u5404\u672a\u77e5\u91cf\n      \u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n \ngrammarly:\n      \u4f7f\u7528Grammarly\u7f51\u7ad9\u68c0\u67e5\u8bba\u6587(\u82f1\u8bed)\u5c0f\u9519\u8bef\u3002\n      \u5c06tex\u5185\u5bb9\u4e2d\u7684\u6570\u5b66\u516c\u5f0f\u7b49\u5173\u952e\u4fe1\u606f\u5220\u9664\u3002\n\nTex\u683c\u5f0f\u5316\uff1a\n      \u683c\u5f0f\u5316.tex\u6587\u672c\u3002 \u63d0\u4f9b\u65ad\u53e5\uff0c\u7f29\u8fdb\u3002 \n      (\u76ee\u524d\u5b58\u5728\u7684bug: \u4ee5\u67d0\u4e00\u73af\u5883\u7ed3\u675f\u7684\u6bb5\u843d\u4f1a\u4e0e\u4e0b\u4e00\u4e2a\u6bb5\u843d\u5408\u5e76.)\n\n";function q(e,t,n){return e.slice(0,t+1)+"("+e.slice(t+2,n)+")"+e.slice(n+1,e.length)}function H(e,t,n,a){var r=a[2]?parseInt(a[2]):2;return e.slice(0,t-1)+" ("+e.slice(t+a[0].length,n)+")^(1/"+r+") "+e.slice(n+1,e.length)}function J(e,t,n,a){var r=a[0].slice(0,-1);return e.slice(0,t)+r+"("+e.slice(t+r.length+1,n)+")"+e.slice(n+1,e.length)}function N(e,t,n,a){var r=a[0].slice(0,-1).split("^"),l=Object(o.a)(r,2),c=l[0],i=l[1];return e.slice(0,t)+c+"("+e.slice(t+c.length+3,n)+")^".concat(i)+e.slice(n+1,e.length)}function G(e,t,n){return e.slice(0,t)+"("+e.slice(t+6,n)+")/"+e.slice(n+1,e.length)}function F(e,t,n){return e.slice(0,t)+"1/("+e.slice(t+11,n)+") d x"+e.slice(n+1)}function P(e,t,n,a){var r=a[0].slice(0,-1);return e.slice(0,t)+" "+e.slice(t+r.length+1,n)+" "+e.slice(n+1,e.length)}function U(e,t,n){var a=e.slice(0,t),r=e.slice(t+2,n),l=a.match(/}[xyzt]( [xyzt])*{$/)[0].slice(1,-1).replaceAll(" "," ,");return(a=a.replace(/}[xyzt]( [xyzt])*{$/,""))+")".concat(l," ,").concat(r,"(ffid ")+e.slice(n+1,e.length)}function W(e,t,n,a,r){if(r.endsWith("_{")){var l,c=e.slice(t+r.length-1,n),i=e.slice(0,t+r.length-3)+e.slice(n+1);a=I(i,["{","}"],"\\\\int\\^{",W);var p=JSON.parse(a),s=Object(o.a)(p,2);n=s[0],l=s[1];var g=i.slice(n+1),d=g.indexOf(" d "),u=g.slice(0,d),h=g[d+3];return e.slice(0,t)+"Int(".concat(u,", ").concat(h,"=").concat(c,"..").concat(l,")")+i.slice(n+1+d+4)}return JSON.stringify([n,e.slice(t+r.length-2,n)])}function Y(){var e=document.getElementById("input").value;e=I(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\(begin *|end *){.*?}/g,"")).replace(/\\{/g,"(")).replace(/\\}/g,")")).replace(/\\right *\./g,"")).replace(/\\left *\./g,"")).replace(/\\left *([([{])/g," ( ")).replace(/\\right *([)\]}])/g," ) ")).replace(/\\left *\|(.*?)\\right *\|/g," (abs($1)) ")).replace(/\|(.*?)\|/g," (abs($1)) ")).replace(/\\[bB]ig/g,"")).replace(/&/g,", ")).replace(/(, *)?\\\\/g,", ")).replace(/\\times/g," ")).replace(/\\infty/g,"infinity")).replace(/\\color{\w+}/g,"")).replace(/~/g,"")).replace(/\\[cdl]dot[s]/g," * "),["{","}"],"\\\\(tilde|hat|bar|underline|acute|check|boldsymbol|mathrm){",P),e=I(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\(alpha|beta|gamma|delta|lambda|eta|zeta|xi|rho|phi|psi)([a-zA-Z(])/g,"$1 $2")).replace(/_n/g,"(n) ")).replace(/_{n}/g,"(n) ")).replace(/_{n([+-])(\d+)}/g,"(n$1$2) ")).replace(/ *_ */g,"_").replace(/{ */g,"{").replace(/ *}/g,"}")).replace(/_([xyzt])/g,"_{$1}")).replace(/(\w+)_{(\d{0,}),? ?([xyzt]( [xyzt])*)}/g,"($1$2)_{$3}")).split("").reverse().join(""),["}","{"],"_}",U),e=I(e,[")","("],"_\\)",U),e=(e=I(e,["]","["],"_\\]",U)).split("").reverse().join("");for(var t=0;t<=12;t++){var n=RegExp("([a-zA-Z0-9]+)\\^{([+-])[+-]{".concat(t,"}}"),"g");e=e.replace(n,"shift($1, $2".concat(t+1,")"))}e=I(e=(e=e.replace(/\\operatorname{([a-zA-Z]+)}/g,"\\$1 ")).replace(/ {2,}/g," "),["{","}"],"\\\\frac{d ([a-zA-Z])}{",F),e=I(e=(e=e.replace(/\\int_([a-zA-Z0-9]+)/g,"\\int_{$1}")).replace(/\^([a-zA-Z0-9]+)/g,"^{$1}"),["{","}"],"\\\\int_{",W),e=I(e=e.replace(/\\int (.*?) d ([a-zA-Z])/g,"Int($1, $2)"),["{","}"],"\\\\frac{",G),e=I(e,["{","}"],"\\^{",q),e=(e=(e=(e=(e=(e=I(e,["{","}"],"sqrt(\\[(.*?)\\])?{",H)).replace(/([ +-/()^=_])[({] *([a-zA-Z\d+]) *[)}]/g,"$1 $2 ")).replace(/ *\^ */g,"^")).replace(/ *_ */g,"_")).replace(/e\^/g," \\exp ")).replace(/\\ln /g,"\\log ");var a="(exp|log|arctan|arcsin|arccos|arcsinh|arccot|arccosh|arctanh|arccoth|arcsec|arccsc|arccsch|arcsech|sinh|cosh|sech|csch|coth|tanh|sin|cos|tan|sec|csc)",r=new RegExp("\\\\(".concat(a,") (\\\\?[a-zA-Z0-9^_/]+)"),"g");e=e.replace(r," $1($3)"),r=new RegExp("\\\\(".concat(a,") *"),"g"),e=e.replace(r," $1"),r=new RegExp("(".concat(a,") *\\^(\\d+) *([{[(])"),"g"),e=I(e=e.replace(r,"$1^$3$4"),["{","}"],a+"{",J),e=I(e,["[","]"],a+"\\[",J),e=I(e,["{","}"],a+"\\^\\d+{",N),e=I(e,["[","]"],a+"\\^\\d+\\[",N),e=(e=(e=(" "+(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=I(e,["(",")"],a+"\\^\\d+\\(",N)).replace(/\\/g,"")).replace(/\[/g,"(")).replace(/\]/g,")")).replace(/_ ?{(m|k|l|i|j|p|q|n)}/g,"[$1] ")).replace(/_ ?(m|k|l|i|j|p|q|n)/g,"[$1] ")).replace(/\s*?_{(\d+)}/g,"$1")).replace(/\s*?_(\d)/g,"[$1]")).replace(/_ ?{(.*?)}/g,"[$1]")).replace(/{/g," ( ").replace(/}/g," ) ")).replace(/q?quad/g," ")).replace(/\)\(/g,") (")).replace(/([^a-zA-Z][ijklIxyzt])\(/g,"$1 (")).replace(/^[\n ]*[,.]/,"").replace(/[,.][ \n]*$/,"").replace(/, *\n *,/g,",\n"))).replace(/([^a-zA-Z0-9_])([a-zA-Z_][a-zA-Z0-9_]*)\^\(?\*\)?/g,"$1 conjugate($2)")).replace(/\(\*\)/g,"(conj)")).replace(/ {2,}/g," "),document.getElementById("input").value+="\r\n\r\n"+e,k("bottomRight","\u5df2\u5b8c\u6210")}function V(){var e=document.getElementById("input").value;return e="<hr><hr>\r\n\r\n \u539f\u7ed3\u679c\uff1a\r\n$$"+(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\!)/g," ")).replace(/(\s,)/g,"\\\\ "))+"$$<hr>"}function K(e){var t=document.getElementById("input").value;return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\n/g,"")).replace(/,0,/g,",")).replace(/[+-]?{\\frac\s{\\rm\sd}{{\\rm\sd}\w}}\s\\left\(\s[0-9]+\s\\right\)/g," ")).replace(/{\\frac {\\partial }{\\partial (\w)}} \\left\( (.*?) (\\left\( x,t \\right\).*?)\\right\)/g,"($2 $3)_{$1}")).replace(/{\\frac\s{\\partial\s}{\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{\\partial\s\^{(\d+)}}{\\partial\s{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\rm d}{{\\rm d}(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$2_{$1} $3")).replace(/{\\frac\s{{\\rm d}\^{(\d+)}}{{\\rm d}{(\w)}\^{\d+}}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d}}{\\partial\s(\w)\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$3_{$1$2} $4")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s(\w)\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$1$3$2} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s(\w)}}(.*?)\s(\\left\(.*?\\right\))/g,"$4_{$2$1$3} $5")).replace(/{\\frac\s{\\partial\s\^{\d+}}{\\partial\s{(\w)}\^{(\d+)}\\partial\s{(\w)}\^{(\d+)}}}(.*?)\s(\\left\(.*?\\right\))/g,"$5_{$2$1$4$3} $6"),"1"===e&&(t=(t=(t=t.replace(/D_{{\d}}\s+\\left\(\s+(\w)\s+\\right\)\s+\\left\(\s+(\d),(\w)\s+\\right\)/g,"$1_{$2,$3}")).replace(/(\w)\s+\\left\(\s+(\d),\w\s+\\right\)/g,"$1_{$2}")).replace(/\s,/g," =0, \\\\")),t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/\\left\(\s[a-z](,[a-z]){0,}\s\\right\)/g," ")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/{({\w})}/g,"$1")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+([^\^])/g,"$1 $3")).replace(/\\left\(\s+(\w(_{\w+}|))\s+\\right\)\s+\^({\d+})/g,"$1^$3")).replace(/([a-zA-Z]+)_{(\w+)}_{(\w+)}/g,"$1_{$2,$3}")).replace(/\s,/g,"\t \\\\\t ")).replace(/\\\\\s+\\\\/g,"\\\\")).replace(/\s{2,}/g," ")}function Q(){var e=document.getElementById("input").value;return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\n/g,"")).replace(/([a-zA-Z]+)(\d+)/g,"$1_{$2}")).replace(/{\\it(.*?)}/g,"$1")).replace(/\\noalign{\\medskip}/g," ")).replace(/(\\,|\\!)/g," ")).replace(/\s,/g,"\t \\\\\t ")).replace(/\s{2,}/g," ")).replace(/\\left\(\sn\s\\right\)/g,"")).replace(/\\left\(\sn([+-])1\s\\right\)/g,"^{$1}")).replace(/\\left\(\sn([+-])2\s\\right\)/g,"^{$1$1}")).replace(/\\left\(\sn([+-])3\s\\right\)/g,"^{$1$1$1}")).replace(/\\left\(\sn([+-])4\s\\right\)/g,"^{$1$1$1$1}")).replace(/\\left\(\sn([+-])5\s\\right\)/g,"^{$1$1$1$1$1}")).replace(/\\left\(\sn([+-])6\s\\right\)/g,"^{$1$1$1$1$1$1}")).replace(/\\left\(\sn([+-])7\s\\right\)/g,"^{$1$1$1$1$1$1$1}")}function X(e,t){var n;n="1"===t?Q():K(e);var a=V();document.getElementById("input").value=a+"\r\n\r\n\r\n\u8f6c\u6362\u7ed3\u679c\uff1a\r\n \r\n\r\n$"+n+"$",s(document.getElementById("input"),document.getElementById("output"))}function ee(e){var t,n;t=(t=(t=(t=(t="1"===e?Q():K("0")).replace(/\s/g,"")).replace(/.*?{array}{.*?}(.*)\\end.*/,"$1")).replace(/\\lambda/g,"\\lambda ")).replace(/\\\\/g,"&").split("&"),n="0"===e?t.map((function(e){var t=function(e){if(/^[^-+]*?\w_\{\d\d,\w\}/.test(e))return e;"-"!==e[0]&&(e="+"+e);var t=e.match(/[+-][^+-]*?\w_\{\d\d,\w\}[^+-]*?/),n="";null!==t&&(n=t[0],e=e.replace(t[0],""));"+"===n[0]&&(n=n.slice(1));return n+e}(e);return[t,te(t)]})):t.map((function(e){return[e,te(e)]}));var a="",r="";n.forEach((function(e){a+="&"+e[0]+"=0,\\\\ \r\n",r+=e[1]})),a="\\begin{align}\r\n"+a+"\\end{align}",r="\\begin{align}\r\n"+r+"\\end{align}";var l=V();document.getElementById("input").value=l+"\r\n\r\n"+a+"\r\n\r\n<hr><hr>\u4f9d\u8d56\u5173\u7cfb:\r\n",document.getElementById("input").value=document.getElementById("input").value+"$"+r+"$<hr><hr>",s(document.getElementById("input"),document.getElementById("output"))}function te(e){var t=(e+=" ").match(/(-|\+)V_{\d\d}(?=(\+|\s|-))/g),n="";return t&&t.forEach((function(t){n+="-"+t,e=e.replace(t,"")})),"+"===(e=(e=(e="&"+n+"="+e+",\\\\ \r\n").replace(/--/g,"+")).replace(/-\+/g,"-"))[1]?e="&"+e.slice(2,e.length):"="===e[1]&&(e=""),e}function ne(){var e=K("0");e=(e=(e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).replace(/\s/g,"")).replace(/&/g,"=0,\\\\&")).replace(/\\\\([^&])/g,"=0,\\\\&$1")).replace(/\\left\[\\begin{array}{\w+}(.*?)\\end{array}\\right\]/,"\\begin{align}& $1=0.\\end{align}")).replace(/\\lambda/g,"\\lambda ");var t=V();document.getElementById("input").value=t+"\r\n\r\n\r\n$"+e+"$",s(document.getElementById("input"),document.getElementById("output"))}function ae(){var e=K("0");e=(e=(e=(e=e.replace(/H(\w)/g,"\\hat{$1}")).slice(1,e.length-1)).replace(/\\\\/g,"=0, \\\\\r\n&")).replace(/((\s|\+|-))_{x}/g,"$1 0"),e="\\begin{align}&".concat(e,"=0.\\end{align}");var t=V();document.getElementById("input").value=t+"\r\n\r\n\r\n$"+e+"$",s(document.getElementById("input"),document.getElementById("output"))}var re=function(){X("0","0")},le=function(){X("0","1")},ce=function(){ee("0")},ie=function(){ee("1")};function oe(){var e=document.getElementById("input").value;e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\cite{.*?}/g,"[1]")).replace(/\\eqref{.*?}/g,"(2)")).replace(/\\ref{.*?}/g,"(3)")).replace(/\\label{.*?}/g,"")).replace(/\$.*?\$/g,"$A=B$")).replace(/\\begin{align\*?}(.|\n)*?\\end{align\*?}/g,"$$A=B$$")).replace(/\\begin{equation\*?}(.|\n)*?\\end{equation\*?}/g,"$$A=B$$")).replace(/\\begin{thebibliography\*?}(.|\n)*?\\end{thebibliography\*?}/g,"")).replace(/\d{8}/g,"1")).replace(/(.|\n)*\\begin{abstract}/,""),document.getElementById("input").value="\r\n\r\n"+e,k("bottomRight","\u5df2\u5b8c\u6210")}function pe(e,t){var n=e.split("\n"),a=["",""],r=[],l="";if(e.indexOf("\\begin")<0||n.length<3)l=e.split("\n").map((function(e){return e.replace(/^ */," ".repeat(3*(t-1)))})).reduce((function(e,t){return e+"\n"+t}));else{var c=null!==e.match(/^\\begin/)&&null!==e.match(/\\end{.*?}$/);c?((a=[n[0],n.slice(-1)[0]].map((function(e){return e.replace(/^ */," ".repeat(3*(t-1)))})))[0].match(/(theorem|lemma|proposition|remark|proof|frame|abstract)/)&&(c=!1),e=n.slice(1,-1).reduce((function(e,t){return e+"\n"+t}))):a=["",""],r=function(e){for(var t=e,n=t.match(/\\begin{(.*?)}/),a=[];n;){for(var r=n.index,l=n[1],c="\\end{".concat(l,"}"),i=0,o="",p=[],s=[1];p.length!==s.length;)i=t.slice(i).indexOf(c)+c.length+i,p=(o=t.slice(r,i)).match(/\\begin{/g)||[],s=o.match(/\\end{/g)||[];a.push(t.slice(0,r)),a.push(t.slice(r,i)),n=(t=t.slice(i)).match(/\\begin{(.*?)}/)}return t.length>0&&a.push(t),a.reduce((function(e,t){return e+t}))===e?a:[]}(e).map((function(e){return pe(e,t+c)}))}return{level:t,envir:a,child:r,format_text:l}}function se(e){return 0===e.child.length?e.format_text:"\n".concat(e.envir[0],"\n").concat(e.child.map((function(e){return se(e)})).reduce((function(e,t){return e+t})),"\n").concat(e.envir[1],"\n")}function ge(){var e=document.getElementById("input").value.replace(/\n\t/g,"\n"),t=e.match(/ *%.*?\n/g),n=(e=e.replace(/[ \t]*%.*?\n/g,"_DESCRIPTION_\n").replace(/\n/g,"AAAAAAAAA").replace(/\t/g,"    ")).match(/.*?\\begin{document}/);n=n?n[0].replaceAll("AAAAAAAAA","\n"):"";var a=e.match(/\\begin{document}(.*?)\\end{document}/),r=null!==a;a=r?a[1].replace(/\\begin{thebibliography}.*?\\end{thebibliography}/,"").replaceAll("AAAAAAAAA","\n"):e.replaceAll("AAAAAAAAA","\n");var l=e.match(/\\begin{thebibliography}.*?\\end{thebibliography}/);l=l?l[0].replaceAll("AAAAAAAAA","\n").replaceAll("\\bibitem","\n\\bibitem").replace(/( *\n){3,}/g,"\n\n"):"";var c=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=a.replace(/(\\[a-z]+)\s+{/g,"$1{")).replace(/([a-z]|\$|})\. {0,}([A-Z])/g,"$1.\n$2")).replace(/([\u4e00-\u9fa5]|\$|})([.\u3002]) {0,}([\u4e00-\u9fa5])/g,"$1$2\n$3")).replace(/(\\begin{)/g,"\n$1")).replace(/(\\begin{.*?}{\w+}) *([^\n])/g,"$1\n$2")).replace(/(\\begin{.*?}\[[^\\]*\]) *([^\n])/g,"$1\n$2")).replace(/(\\begin{.*?}) *([^\n{[])/g,"$1\n$2")).replace(/(\\begin{.*?)\n\s*(\\label{.*?})/g,"$1$2")).replace(/(\\end{.*?})/g,"\n$1\n")).replace(/( [a-zA-Z]+) *\n *([a-zA-Z]+[ ,.;]?)/g,"$1 $2")).replace(/ ([a-zA-Z]+)\s\s+([a-zA-Z]+[ ,.;]?)/g," $1 $2")).replace(/([a-z].*?\\\\)(.*?[a-z])/g,"$1\n$2")).match(/\\begin{/g)||[],i=a.match(/\\end{/g)||[];if(c.length===i.length){var o=pe(a,1);if(window.block_tree=o,console.log(o),e=n+(a=se(o).replace(/(\s*\n){3,}/g,"\n\n").replace(/(\\end{.*?}\n) *\n/g,"$1").replace(/\s*\n\s*(\n\s*\\end{)/g,"$1").replace(/\n\s*(\n\s*\\begin{)/g,"$1").replace(/(\\begin{.*?\n)\s*\n/g,"$1").replace(/(\\chapter{)/g,"\n\n\n$1").replace(/(\\[a-z]*section{)/g,"\n\n\n$1").replace(/(\\end{frame})/g,"$1\n\n\n").replace(/([^\n]) *\n(\\begin{(theorem|remark|proposition|proof|lemma)})/g,"$1\n\n$2").replace(/(\\end{(theorem|remark|proposition|proof|lemma)}) *\n([^\n])/g,"$1\n\n$2"))+l+(r?"\n\\end{document}":""),null!==t)for(var p=0;p<t.length;p++)e=e.replace("_DESCRIPTION_",t[p].slice(0,-1));document.getElementById("input").value=e,k("bottomRight","\u5df2\u5b8c\u6210")}else k("bottomRight","\\begin{}\u4e0e\\end{}\u4e2a\u6570\u4e0d\u7b49, \u65e0\u6cd5\u5904\u7406")}var de=function(e){var t=e.setMatrix_display,n=e.setList_display,r=["\u4f7f\u7528\u8bf4\u660e","\u65f6\u95f4\u8f74","\u521b\u5efa\u77e9\u9635","latex2maple","maple2mma","DT-gT","DT-coe","\u8fde\u7eed\u516c\u5f0f\u683c\u5f0f\u5316","\u8fde\u7eedszce\u683c\u5f0f\u5316","\u79bb\u6563\u516c\u5f0f\u683c\u5f0f\u5316","\u79bb\u6563szce\u683c\u5f0f\u5316","grammarly","latex\u683c\u5f0f\u5316"],l=[L,function(){document.getElementById("timeline").click()},function(){t("block"),document.getElementById("tip").style.display="block"},Y,function(){return n("block")},ne,ae,re,ce,le,ie,oe,ge],c=["danger","danger","primary","default","default","primary","primary","default","default","primary","primary","default","default"];return Object(a.jsx)("div",{children:function(){for(var e=r.length,t=[],n=0;n<e;n++)t.push(Object(a.jsx)(m.a,{style:g.button,onClick:l[n],type:c[n],children:r[n]},n));return t}()})};function ue(){var e="none"!==document.getElementById("left").style.display;document.getElementById("left").style.display=e?"none":"flex"}var he=function(){var e=Object(r.useState)("none"),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(r.useState)("none"),i=Object(o.a)(c,2),p=i[0],d=i[1];return document.body.addEventListener("dblclick",ue),Object(a.jsxs)("div",{id:"app",style:g.app,children:[Object(a.jsxs)("div",{id:"left",style:g.left,children:[Object(a.jsx)("div",{style:g.header,children:Object(a.jsx)(de,{setMatrix_display:l,setList_display:d})}),Object(a.jsx)("textarea",{id:"input",style:g.textarea,onInput:function(){s(document.getElementById("input"),document.getElementById("output"))}}),Object(a.jsxs)("div",{style:g.footer,children:[Object(a.jsxs)("span",{style:{margin:"0px 10px"},children:["\xa92018-2023",Object(a.jsx)("a",{style:{color:"black"},rel:"noreferrer",target:"_blank",href:"https://github.com/jiandandaoxingfu/maple-latex",children:Object(a.jsx)("strong",{children:" Maple-Latex"})})," v2.6 \xa0"]}),Object(a.jsx)("span",{}),Object(a.jsxs)("span",{style:{margin:"0 10px"},children:["Created by",Object(a.jsx)("a",{style:{color:"black"},rel:"noreferrer",target:"_blank",href:"https://github.com/jiandandaoxingfu",children:Object(a.jsx)("strong",{children:"  JMx  "})}),"with",Object(a.jsx)("a",{style:{color:"black"},rel:"noreferrer",target:"_blank",href:"https://reactjs.org/",children:Object(a.jsx)("strong",{children:"  React  "})}),"and \u2764\ufe0f \xa0\xa0\xa0\xa0",Object(a.jsx)("a",{style:{color:"black"},rel:"noreferrer",target:"_blank",href:"https://jiandandaoxingfu.github.io/myblog/post/maple-latex/",children:Object(a.jsx)("strong",{children:"\u6587\u6863"})})]})]})]}),Object(a.jsx)("div",{id:"output",style:g.output}),Object(a.jsx)(v,{display:n,setdisplay:l}),Object(a.jsx)(S,{display:p,setdisplay:d}),Object(a.jsx)(_,{}),Object(a.jsx)("div",{id:"buffer",style:{display:"none"}})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)}))};window.MathJax={tex:{inlineMath:[["$","$"]],tags:"ams"}};var fe=document.createElement("script");fe.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js",fe.async=!0,document.head.appendChild(fe),i.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(he,{})}),document.getElementById("root")),me()}},[[94,1,2]]]);
//# sourceMappingURL=main.b5cff74f.chunk.js.map