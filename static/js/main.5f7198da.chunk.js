(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),i=n(2),r=n(3),s=n(5),b=n(4),o=n(1),l=n.n(o),d=(n(12),n(0)),u=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(r.a)(n,[{key:"render",value:function(){var t,e=this.props,n=e.tabs,a=e.oneSelectTab,c=e.selectTabId;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"tab__title",children:n.map((function(t){return Object(d.jsx)("button",{type:"button",onClick:function(){a(t)},children:t.title},t.id)}))}),Object(d.jsx)("div",{className:"tab__content",children:null===(t=n.find((function(t){return t.id===c})))||void 0===t?void 0:t.content})]})}}]),n}(l.a.Component),j=(n(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),h=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={selectTab:j[0]},t.changeTab=function(e){t.setState({selectTab:e})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.selectTab;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("h1",{children:["Selected tab is\xa0",t.title]}),Object(d.jsx)(u,{tabs:j,selectTabId:t.id,oneSelectTab:this.changeTab}),Object(d.jsx)("div",{children:j.length})]})}}]),n}(l.a.Component),v=h;c.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5f7198da.chunk.js.map