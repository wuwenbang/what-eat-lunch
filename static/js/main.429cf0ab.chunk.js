(this["webpackJsonpwhat-eat-lunch"]=this["webpackJsonpwhat-eat-lunch"]||[]).push([[0],{155:function(e,n,t){},246:function(e,n,t){},248:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(15),a=t.n(r),i=(t(155),t(2)),u=t.n(i),s=t(16),o=t(4),l=t(7),j=t(61),f=t(13),d=t(249),b=[{index:0,name:"\u5c0f\u559c\u7530"},{index:1,name:"\u8c37\u7530\u7a3b\u9999"},{index:2,name:"\u9ea6\u5f53\u52b3"},{index:3,name:"\u80e1\u5b50\u5927\u53a8"},{index:4,name:"\u5bb6\u6709\u597d\u9762"}];var h=t(24),x=t.n(h);function m(e){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout((function(){e("success")}),n)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return 0===e.length?0:e[Math.floor(Math.random()*e.length)]}function k(e){var n=x()().subtract(x()().weekday(),"days");return x()(e).isAfter(n,"days")}t(246);var v=t(5);function y(){var e=Object(c.useState)(-1),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(!1),i=Object(o.a)(a,2),h=i[0],O=i[1],y=Object(c.useState)(!1),w=Object(o.a)(y,2),C=w[0],T=w[1],g=Object(c.useState)(""),L=Object(o.a)(g,2),S=L[0],M=L[1],N=Object(c.useState)(),A=Object(o.a)(N,2),I=A[0],J=A[1],B=Object(c.useState)(!1),E=Object(o.a)(B,2),P=E[0],q=E[1],z=function(){var e=Object(d.a)("lunch-list",b),n=Object(o.a)(e,2),t=n[0],c=n[1];return{lunchList:t,insertLunch:function(e){var n=Math.max.apply(Math,Object(f.a)(t.map((function(e){return e.index}))));c((function(t){return t?[].concat(Object(f.a)(t),[{index:n+1,name:e}]):[]}))},deleteLunch:function(e){c((function(n){return n?n.filter((function(n){return n.index!==e})):[]}))},updateLunch:function(e,n){c((function(t){return t?t.map((function(t){return t.index===e&&(t.name=n),t})):[]}))},insertTime:function(e,n){c((function(t){return t?t.map((function(t){return t.index===e?Object(j.a)(Object(j.a)({},t),{},{lastTime:n}):t})):[]}))},resetTime:function(){c((function(e){return e?e.map((function(e){return{index:e.index,name:e.name}})):[]}))}}}(),D=z.lunchList,F=z.insertLunch,G=z.deleteLunch,H=z.updateLunch,K=z.insertTime,Q=z.resetTime,R=function(){var e=Object(s.a)(u.a.mark((function e(){var n,t,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(!0),n=D.filter((function(e){return!e.lastTime||!k(e.lastTime)})),t=n.map((function(e){return e.index})),c=p(t),a=0;case 5:if(!(a<10)){e.next=13;break}return c=p(t),r(c),e.next=10,m(100);case 10:a++,e.next=5;break;case 13:K(c,x()().valueOf()),q(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)(l.e,{className:"header",children:["\u4e2d\u5348\u5403\uff1a",t>=0?D[t].name:"?"]}),Object(v.jsx)(l.d,{className:"content",children:D.map((function(e){return Object(v.jsxs)(l.d.Item,{extra:Object(v.jsxs)(l.e,{children:[Object(v.jsx)(l.a,{onClick:function(){J(e),M(e.name),O(!0)},children:"\u4fee\u6539"}),Object(v.jsx)(l.a,{color:"danger",onClick:function(){return G(e.index)},children:"\u5220\u9664"})]}),children:[e.name,e.lastTime&&k(e.lastTime)&&Object(v.jsx)(l.f,{round:!0,color:"success",style:{marginLeft:8},children:"\u672c\u5468\u5403\u8fc7"})]},e.index)}))}),Object(v.jsx)(l.b,{visible:h,actions:[{key:"confirm",text:"\u786e\u5b9a",onClick:function(){S&&I&&(H(I.index,S),O(!1))}},{key:"cancel",text:"\u53d6\u6d88",onClick:function(){return O(!1)}}],content:Object(v.jsx)(l.e,{children:Object(v.jsx)(l.c,{placeholder:"\u8bf7\u8f93\u5165\u9910\u5385\u540d\u79f0",value:S,onChange:function(e){return M(e)}})})}),Object(v.jsx)(l.b,{visible:C,actions:[{key:"confirm",text:"\u786e\u5b9a",onClick:function(){S&&(F(S),T(!1))}},{key:"cancel",text:"\u53d6\u6d88",onClick:function(){T(!1)}}],content:Object(v.jsx)(l.e,{children:Object(v.jsx)(l.c,{placeholder:"\u8bf7\u8f93\u5165\u9910\u5385\u540d\u79f0",value:S,onChange:function(e){return M(e)}})})}),Object(v.jsxs)(l.e,{className:"footer",children:[Object(v.jsx)(l.a,{onClick:function(){return T(!0)},color:"success",children:"\u589e\u52a0\u9009\u9879"}),Object(v.jsx)(l.a,{color:"primary",onClick:R,loading:P,children:"\u4e2d\u5348\u5403\u4ec0\u4e48"}),Object(v.jsx)(l.a,{color:"warning",onClick:Q,children:"\u91cd\u7f6e\u65f6\u95f4"})]})]})}a.a.render(Object(v.jsx)(y,{}),document.getElementById("root"))}},[[248,1,2]]]);
//# sourceMappingURL=main.429cf0ab.chunk.js.map