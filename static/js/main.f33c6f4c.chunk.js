(this.webpackJsonpmastermind=this.webpackJsonpmastermind||[]).push([[0],{28:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(1),o=r(7),i=r.n(o),s=r(3),a=r(4),l=r(41),j=r(11),d=r(10);var u=function(e){return Object(n.jsxs)("div",{children:[e.roundNumber&&Object(n.jsxs)("div",{children:[e.isNewRound&&e.gameOver?Object(n.jsx)("h3",{children:"GameOver"}):Object(n.jsxs)("h3",{children:["round ",e.roundNumber]}),e.result&&Object(s.a)(Array(e.result[0])).map((function(e,t){return Object(n.jsx)(d.a,{},t)})),e.result&&Object(s.a)(Array(e.result[1])).map((function(e,t){return Object(n.jsx)(j.a,{},t)})),e.result&&e.result[0]+e.result[1]===0?Object(n.jsx)("div",{children:Object(n.jsx)("h5",{children:"No Match!"})}):Object(n.jsx)("div",{})]}),e.colors.map((function(t,r){return Object(n.jsx)(l.a,{className:"colors",variant:"outlined",disabled:!e.isNewRound||e.gameOver,style:{background:!e.isCode&&t,borderRadius:"40%",fontSize:"15px",padding:"20px 0px",width:"5px",height:"20px",margin:"3px 3px"},onClick:function(){return e.onPicked(t,r)},children:e.isCode?"?":""},r)}))]})};var b=function(e){return Object(n.jsx)(l.a,{onClick:function(){return e.onPicked(e.color)},variant:"contained",style:{background:e.color,margin:"5px 5px",fontWeight:e.myColors.includes(e.color)?"bold":"normal"},children:e.text?e.text:e.color})},O=["silver","white","tomato","gold","lightblue","pink","mediumslateblue","orchid","crimson","rosybrown","sandybrown","turquoise","sienna","lightcoral","palegreen","burlywood","olive","papayawhip","beige","lightcyan","lavender","darksalmon","thistle","coral","seagreen","teal","yellowgreen","darkseagreen","lightslategray","purple","dimgray","hotpink","darkslateblue"];var h=function(e){var t=Object(c.useState)([]),r=Object(a.a)(t,2),o=r[0],i=r[1],j=e.numColors;function d(e){var t;o.includes(e)?(t=e,i((function(e){return e.filter((function(e){return e!==t}))}))):function(e){i((function(t){return[].concat(Object(s.a)(t),[e])}))}(e)}return Object(n.jsxs)("div",{id:"right-side",children:[Object(n.jsxs)("div",{className:"color-plate",children:[Object(n.jsxs)("h3",{children:["Choose your ",j," colors!"]}),Object(n.jsx)("div",{children:O.map((function(e,t){return Object(n.jsx)(b,{color:e,onPicked:d,chosen:!1,myColors:o},t)}))})]}),Object(n.jsxs)("div",{className:"color-plate",children:[Object(n.jsx)("h3",{children:"My Colors"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:o.length!==j&&"Select "+j+" Colors!"}),Object(n.jsx)("div",{children:o.map((function(e,t){return Object(n.jsx)(b,{color:e,onPicked:d,chosen:!0,myColors:o},e+t)}))}),Object(n.jsx)("br",{}),Object(n.jsx)(l.a,{style:{margin:"5px 5px",background:"#ed6969"},variant:"contained",color:"primary",onClick:function(){return function(){for(var e=[],t=0;t<j;){var r=O[Math.floor(Math.random()*O.length)];e.includes(r)||(e.push(r),t++)}return i(e),o}()},children:"Random"}),Object(n.jsx)(l.a,{style:{margin:"5px 5px",background:"#7b68ee"},variant:"contained",color:"primary",disabled:o.length!==j&&!0,onClick:function(){return e.onSubmit(o)},children:"Done"})]})]})},x=r(16);var m=function(){return Object(n.jsx)("header",{children:Object(n.jsxs)("h1",{children:[Object(n.jsx)(x.a,{}),"Mastermind"]})})};var v=function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("p",{children:["Created by ","Kim Minki"," \u24d2 ",2020]})})},f=r(14),p=r(17);var g=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"sider",children:[Object(n.jsx)(f.a,{}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{children:"color match"}),Object(n.jsx)(j.a,{}),Object(n.jsx)("h3",{children:"position match"}),Object(n.jsx)(d.a,{})]}),Object(n.jsxs)("div",{className:"sider",children:[Object(n.jsx)(f.a,{}),Object(n.jsx)("hr",{}),Object(n.jsxs)("h3",{children:["Click to",Object(n.jsx)("br",{}),"add/remove ",Object(n.jsx)("br",{}),"color"]}),Object(n.jsx)(p.a,{})]})]})};var y=function(e){var t=Object(c.useState)([]),r=Object(a.a)(t,2),o=r[0],i=r[1],j=e.numCode;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)(u,{result:e.result,roundNumber:e.roundNumber,colors:e.isNewRound?o:e.colors,isCode:!1,isNewRound:e.isNewRound,gameOver:e.gameOver,onPicked:function(e,t){i((function(e){return e.filter((function(e,r){return r!==t}))}))}})]}),e.isNewRound&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"color-plate",children:Object(n.jsx)(u,{colors:e.colors,isCode:!1,onPicked:function(e){i((function(t){return[].concat(Object(s.a)(t),[e])}))},isNewRound:e.isNewRound,gameOver:e.gameOver})}),Object(n.jsx)(l.a,{style:{margin:"5px 5px",background:"#7b68ee"},disabled:j!==o.length,variant:"contained",color:"primary",onClick:function(){var t=o.slice();return i([]),e.onSubmit(t)},children:"Done"})]})]})};var N=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),r=t[0],o=t[1],i=Object(c.useState)([4]),l=Object(a.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)([]),O=Object(a.a)(b,2),x=O[0],f=O[1],p=Object(c.useState)([]),N=Object(a.a)(p,2),k=N[0],C=N[1],w=Object(c.useState)(!1),S=Object(a.a)(w,2),R=S[0],M=S[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{}),r.length?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"color-plate",children:[Object(n.jsx)("h3",{children:"Target Code"}),Object(n.jsx)(u,{colors:j,isCode:!0})]}),Object(n.jsxs)("div",{className:"color-plate",children:[Object(n.jsx)("h3",{children:"Your Code"}),x.map((function(e,t){return Object(n.jsx)(y,{colors:e,result:k[t],isNewRound:!1,roundNumber:t+1,code:j,gameOver:R},t)})),Object(n.jsx)(y,{colors:r,numCode:4,onSubmit:function(e){var t=0,r=j.filter((function(r,n){return r===e[n]&&t++,e.includes(r)})),n=Object(s.a)(new Set(r)).length,c=[t,n];f((function(t){return[].concat(Object(s.a)(t),[e])})),C((function(e){return[].concat(Object(s.a)(e),[c])})),JSON.stringify(e)===JSON.stringify(j)&&M(!0)},isNewRound:!0,roundNumber:x.length+1+" (now)",gameOver:R})]})]}):Object(n.jsx)(h,{onSubmit:function(e){o(e),d((function(t){for(var r=[],n=0;n<t;n++)r.push(e[Math.floor(Math.random()*e.length)]);return r}))},numColors:8}),Object(n.jsx)(g,{}),Object(n.jsx)(v,{})]})};i.a.render(Object(n.jsx)(N,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f33c6f4c.chunk.js.map