(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(2),a=c.n(r),o=c(9),i=c.n(o),s=(c(15),c(5)),l=c(1),b=c(4),j=c(3);c(16);function d(e,t){this.name=e,this.price=t}var u={Sicilian:new d("Sicilian \ud83c\udf55",330),Caprese:new d("Caprese \ud83c\udf55",380),Pepperoni:new d("Pepperoni \ud83c\udf55",420),Margherita:new d("Margherita \ud83c\udf55",470),Napoletana:new d("Napoletana \ud83c\udf55",300)},O={Ravioli:new d("Ravioli \ud83c\udf5d",330),Fusilli:new d("Fusili \ud83c\udf5d",330),Penne:new d("Penne \ud83c\udf5d",400),Rigatoni:new d("Rigatoni \ud83c\udf5d",360),Farfalle:new d("Farfalle \ud83c\udf5d",360)},p={Mustard:new d("Mustard \ud83e\uddc2",10),Mayo:new d("Mayo \ud83c\udf7c",10),Ketchup:new d("Ketchup \ud83c\udf45",10),Salt:new d("Salt \ud83e\uddc2",10),Pepper:new d("Pepper \ud83e\uddc2",10)};function h(e,t,c){d.call(this,e,t),this.volume=c}var m={Cola:new h("Coca Cola \ud83e\uddf4",150,330),Sprite:new h("Beer \ud83c\udf7a",180,330),Tea:new h("Tea \ud83c\udf75",150,200)},f=[{person:1,order:!1,orderFood:[]},{person:2,order:!1,orderFood:[]},{person:3,order:!1,orderFood:[]},{person:4,order:!1,orderFood:[]}],x=function(e){var t=e.errMsg,c=e.infoMsg,a=e.setErrMsg,o=e.setInfoMsg;return Object(r.useEffect)((function(){setTimeout((function(){a("")}),3e3)}),[t]),Object(r.useEffect)((function(){setTimeout((function(){o("")}),3e3)}),[c]),Object(n.jsxs)(n.Fragment,{children:[t&&Object(n.jsx)("div",{className:"notification",style:{display:t?"visible":"hidden"},children:Object(n.jsx)("p",{style:{color:"red"},children:t})}),c&&Object(n.jsx)("div",{className:"notification",style:{display:c?"visible":"hidden",border:"1px solid green"},children:Object(n.jsx)("p",{style:{color:"green"},children:c})})]})},v=function(){var e=new Date;return"".concat(e.getDate(),"/").concat(e.getMonth(),"/").concat(e.getFullYear()," ").concat(e.getHours(),":").concat(e.getMinutes())},w=function(){return Math.floor(1e5*Math.random())};var N=function(){var e,t=Object.values(u),c=Object.values(O),a=Object.values(p),o=Object.values(m),i=Array.from({length:4}),d=Object(r.useState)(""),h=Object(j.a)(d,2),N=h[0],g=h[1],k=Object(r.useState)(""),C=Object(j.a)(k,2),P=C[0],M=C[1],S=Object(r.useState)(Object(b.a)(f)),F=Object(j.a)(S,2),y=F[0],T=F[1],E=Object(r.useState)(Object(b.a)(f)),Y=Object(j.a)(E,2),z=Y[0],R=Y[1],I=Object(r.useState)(Object(b.a)(f)),B=Object(j.a)(I,2),D=B[0],J=B[1],K=Object(r.useState)(Object(b.a)(f)),A=Object(j.a)(K,2),H=A[0],W=A[1],q=Object(r.useState)(!0),G=Object(j.a)(q,2),L=G[0],Q=G[1],U=Object(r.useState)(!0),V=Object(j.a)(U,2),X=V[0],Z=V[1],$=Object(r.useState)(!0),_=Object(j.a)($,2),ee=_[0],te=_[1],ce=Object(r.useState)(!0),ne=Object(j.a)(ce,2),re=ne[0],ae=ne[1],oe=Object(r.useState)(0),ie=Object(j.a)(oe,2),se=ie[0],le=ie[1],be=Object(r.useState)(0),je=Object(j.a)(be,2),de=je[0],ue=je[1],Oe=Object(r.useState)(0),pe=Object(j.a)(Oe,2),he=pe[0],me=pe[1],fe=Object(r.useState)(0),xe=Object(j.a)(fe,2),ve=xe[0],we=xe[1],Ne=Object(r.useState)({tableOne:"",tableTwo:"",tableThree:"",tableFour:"",profit:0}),ge=Object(j.a)(Ne,2),ke=ge[0],Ce=ge[1];function Pe(e,t){var c=function(e){return Object(l.a)(Object(l.a)({},e),{},{order:!1})},n=function(e){return function(t){return t.person==e?Object(l.a)(Object(l.a)({},t),{},{order:!0}):Object(l.a)(Object(l.a)({},t),{},{order:!1})}};T(y.map(c)),R(z.map(c)),J(D.map(c)),W(H.map(c)),(1==e&&!L||2==e&&!X||3==e&&!ee||4==e&&!re)&&g("You first need to pay bill"),1==e&&L?(M("You can Make Order"),T(y.map(n(t)))):2==e&&X?(M("You can Make Order"),R(z.map(n(t)))):3==e&&ee?(M("You can Make Order"),J(D.map(n(t)))):4==e&&re&&(M("You can Make Order"),W(H.map(n(t))))}function Me(e){var t=function(e){return Object(l.a)(Object(l.a)({},e),{},{order:!1})};if(1===e){if(se<200)return void g("Please order more :)");T(y.map(t)),Q(!1),Ce(Object(l.a)(Object(l.a)({},ke),{},{tableOne:"Order: date ".concat(v(),", table number ").concat(e)}))}else if(2===e){if(de<200)return void g("Please order more :)");R(z.map(t)),Z(!1),Ce(Object(l.a)(Object(l.a)({},ke),{},{tableTwo:"Order: date ".concat(v(),", table number ").concat(e)}))}else if(3===e){if(he<200)return void g("Please order more :)");J(D.map(t)),te(!1),Ce(Object(l.a)(Object(l.a)({},ke),{},{tableThree:"Order: date ".concat(v(),", table number ").concat(e)}))}else if(4===e){if(ve<200)return void g("Please order more :)");W(H.map(t)),ae(!1),Ce(Object(l.a)(Object(l.a)({},ke),{},{tableFour:"Order: date ".concat(v(),", table number ").concat(e)}))}}var Se=function(e){M("We hope we will see you again"),1===e?(T(Object(b.a)(f)),Q(!0),le(0),Ce(Object(l.a)(Object(l.a)({},ke),{},{tableOne:"Paid: date ".concat(v(),", table number ").concat(e,", price ").concat(se),profit:ke.profit+se}))):2===e?(R(Object(b.a)(f)),Z(!0),ue(0),Ce(Object(l.a)(Object(l.a)({},ke),{},{tableTwo:"Paid: date ".concat(v(),", table number ").concat(e,", price ").concat(de),profit:ke.profit+de}))):3===e?(J(Object(b.a)(f)),te(!0),me(0),Ce(Object(l.a)(Object(l.a)({},ke),{},{tableThree:"Paid: date ".concat(v(),", table number ").concat(e,", price ").concat(he),profit:ke.profit+he}))):4===e&&(W(Object(b.a)(f)),ae(!0),we(0),Ce(Object(l.a)(Object(l.a)({},ke),{},{tableFour:"Paid: date ".concat(v(),", table number ").concat(e,", price ").concat(ve),profit:ke.profit+ve})))},Fe=function(e){return function(t){if(t.person===e+1)return t.orderFood.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("small",{children:e.name})},w())}))}},ye=function(e){return Object(n.jsx)("button",{className:"btn-pizza",onClick:function(){return function(e){var t=function(t){return 1===t&&y.find((function(e){return e.order}))?le(se+e.price):2===t&&z.find((function(e){return e.order}))?ue(de+e.price):3===t&&D.find((function(e){return e.order}))?me(he+e.price):4===t&&H.find((function(e){return e.order}))&&we(ve+e.price),function(t){return t.order?Object(l.a)(Object(l.a)({},t),{},{orderFood:t.orderFood.concat(e)}):t}};T(y.map(t(1))),R(z.map(t(2))),J(D.map(t(3))),W(H.map(t(4)))}(e)},children:e.name},e.name)};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"pizzas",children:t.map(ye)}),Object(n.jsx)("div",{className:"pasta",children:c.map(ye)}),Object(n.jsx)("div",{className:"pasta",children:a.map(ye)}),Object(n.jsx)("div",{className:"pasta",children:o.map(ye)}),Object(n.jsx)(x,(e={errMsg:N,setErrMsg:g,infoMsg:P},Object(s.a)(e,"setErrMsg",g),Object(s.a)(e,"setInfoMsg",M),e)),Object(n.jsxs)("div",{className:"all-tables",children:[Object(n.jsxs)("div",{className:"table1",children:[i.map((function(e,t){return Object(n.jsxs)("div",{className:"person",children:[Object(n.jsxs)("p",{children:["Person ",t+1]}),Object(n.jsx)("button",{onClick:function(){return Pe(1,t+1)},children:"Order"}),y.map(Fe(t))]},w())})),Object(n.jsxs)("div",{className:"house-control",children:[Object(n.jsx)("button",{className:"complete",onClick:function(){return Me(1)},style:{backgroundColor:L?"white":"red",color:L?"black":"white",border:!L&&"none"},children:"Complete"}),Object(n.jsx)("button",{onClick:function(){return Se(1)},children:"Paid"})]}),Object(n.jsxs)("div",{className:"price",children:["Price ",Object(n.jsx)("span",{children:se})]})]}),Object(n.jsxs)("div",{className:"table2",children:[i.map((function(e,t){return Object(n.jsxs)("div",{className:"person",children:[Object(n.jsxs)("p",{children:["Person ",t+1]}),Object(n.jsx)("button",{onClick:function(){return Pe(2,t+1)},children:"Order"}),z.map(Fe(t))]})})),Object(n.jsxs)("div",{className:"house-control",children:[Object(n.jsx)("button",{className:"complete",onClick:function(){return Me(2)},style:{backgroundColor:X?"white":"red",color:X?"black":"white",border:!X&&"none"},children:"Complete"}),Object(n.jsx)("button",{onClick:function(){return Se(2)},children:"Paid"})]}),Object(n.jsxs)("div",{className:"price",children:["Price ",Object(n.jsx)("span",{children:de})]})]}),Object(n.jsxs)("div",{className:"table3",children:[i.map((function(e,t){return Object(n.jsxs)("div",{className:"person",children:[Object(n.jsxs)("p",{children:["Person ",t+1]}),Object(n.jsx)("button",{onClick:function(){return Pe(3,t+1)},children:"Order"}),D.map(Fe(t))]},w())})),Object(n.jsxs)("div",{className:"house-control",children:[Object(n.jsx)("button",{className:"complete",onClick:function(){return Me(3)},style:{backgroundColor:ee?"white":"red",color:ee?"black":"white",border:!ee&&"none"},children:"Complete"}),Object(n.jsx)("button",{onClick:function(){return Se(3)},children:"Paid"})]}),Object(n.jsxs)("div",{className:"price",children:["Price ",Object(n.jsx)("span",{children:he})]})]}),Object(n.jsxs)("div",{className:"table4",children:[i.map((function(e,t){return Object(n.jsxs)("div",{className:"person",children:[Object(n.jsxs)("p",{children:["Person ",t+1]}),Object(n.jsx)("button",{onClick:function(){return Pe(4,t+1)},children:"Order"}),H.map(Fe(t))]},w())})),Object(n.jsxs)("div",{className:"house-control",children:[Object(n.jsx)("button",{className:"complete",onClick:function(){return Me(4)},style:{backgroundColor:re?"white":"red",color:re?"black":"white",border:!re&&"none"},children:"Complete"}),Object(n.jsx)("button",{onClick:function(){return Se(4)},children:"Paid"})]}),Object(n.jsxs)("div",{className:"price",children:["Price ",Object(n.jsx)("span",{children:ve})]})]})]}),Object(n.jsxs)("div",{className:"console",children:[Object(n.jsx)("p",{children:ke.tableOne&&ke.tableOne}),Object(n.jsx)("p",{children:ke.tableTwo&&ke.tableTwo}),Object(n.jsx)("p",{children:ke.tableThree&&ke.tableThree}),Object(n.jsx)("p",{children:ke.tableFour&&ke.tableFour}),Object(n.jsxs)("p",{children:["Total Earnings: ",Object(n.jsx)("span",{className:"profit",children:ke.profit})]})]})]})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f02b639a.chunk.js.map