(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),j=n.n(r),s=n(16),i=n.n(s),a=(n(23),n(10)),u=n(2),b=n(8);function o(t){return Object(c.jsx)("button",{type:t.type,children:t.children})}o.defaultProps={label:"Enter label for button",type:"submit"};var l=o;function h(t){var e=t.value,n=t.setCurrency,j=Object(r.useState)([]),s=Object(b.a)(j,2),i=s[0],a=s[1];return Object(r.useEffect)((function(){return fetch("https://api.ratesapi.io/api/latest?base=PLN").then((function(t){return t.json()})).then((function(t){a(Object.keys(t.rates))})),function(){}}),[]),Object(c.jsx)("select",{value:e,onChange:function(t){return n(t.target.value)},children:i.map((function(t){return Object(c.jsx)("option",{value:t,children:t},"curr-".concat(t))}))})}var O=function(t){var e=Object(r.useState)(0),n=Object(b.a)(e,2),j=n[0],s=n[1],i=Object(r.useState)(0),a=Object(b.a)(i,2),u=a[0],o=a[1],O=Object(r.useState)("PLN"),d=Object(b.a)(O,2),p=d[0],x=d[1],f=Object(r.useState)("USD"),v=Object(b.a)(f,2),m=v[0],g=v[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("https://api.ratesapi.io/api/latest?base=".concat(p)).then((function(t){return t.json()})).then((function(t){s(u*t.rates[m])}))},children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"number",placeholder:"Amount",onChange:function(t){return o(t.target.value)}})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"From:"}),Object(c.jsx)(h,{value:p,setCurrency:x})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"To:"}),Object(c.jsx)(h,{value:m,setCurrency:g})]}),Object(c.jsxs)("div",{children:["Result: ",j," "]}),Object(c.jsx)(l,{type:"submit",children:"Send"})]})},d=function(){return Object(c.jsx)("h1",{children:"Contact page"})},p=function(){return Object(c.jsx)("h1",{children:"About page"})};n(24);var x=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(a.a,{children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/contact",children:"Contact"})})]}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/",exact:!0,children:Object(c.jsx)(O,{})}),Object(c.jsx)(u.a,{path:"/about",children:Object(c.jsx)(p,{})}),Object(c.jsx)(u.a,{path:"/contact",component:d})]})]})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,j=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),j(t),s(t)}))};i.a.render(Object(c.jsx)(j.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.a9cdebd1.chunk.js.map