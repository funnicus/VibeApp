(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),a=n(28),s=n.n(a),u=(n(35),n(8)),o=n.n(u),j=n(11),b=n(13),d=n(9),h=n(2),l=(n(37),function(){return Object(c.jsxs)("div",{id:"nav",children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/send-vibes",children:"Send some vibes!"})})]})}),Object(c.jsx)("hr",{})]})}),p=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)("hgroup",{children:[Object(c.jsx)("h1",{children:"Vibe app"}),Object(c.jsx)("h2",{children:"Keeping you connected during the pandemic!"}),Object(c.jsx)("p",{children:"Send some positive vibes to your fellow students! \ud83d\ude18"})]})})},x=n(18),O=n.n(x),v="/api/vibes/",f={getRandom:function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(v,"random"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),uploadVibe:function(){var e=Object(j.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={vibe:t},e.next=3,O.a.post("".concat(v),n);case 3:return c=e.sent,r=c.data,console.log(r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=(n(60),function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Send some vibes \ud83d\ude0e"}),Object(c.jsx)("form",{id:"send-vibes-form",onSubmit:function(e){e.preventDefault(),f.uploadVibe(n),console.log("Vibe submitted"),i("")},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",value:n,placeholder:"send a vibe...",onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Submit your vibe!"})]})})]})}),g=(n(61),function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],i=t[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getRandom();case 2:t=e.sent,i(t.vibe);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var a=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.getRandom();case 3:n=e.sent,i(n.vibe);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{id:"home",children:[Object(c.jsx)(l,{}),Object(c.jsxs)(h.c,{children:[Object(c.jsxs)(h.a,{path:"/send-vibes",children:[Object(c.jsx)(m,{}),Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Vibe app by Juhana Kuparinen, junction hackathon 2020"})]}),Object(c.jsxs)(h.a,{path:"/",children:[Object(c.jsx)(p,{}),Object(c.jsxs)("div",{id:"random-vibe",children:[Object(c.jsx)("h3",{children:"Here is a random vibe for you!"}),Object(c.jsx)("p",{id:"vibe",children:n||"waiting for a vibe..."}),Object(c.jsx)("button",{onClick:a,children:"Get a new vibe!"}),Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Vibe app by Juhana Kuparinen, junction hackathon 2020"})]})]})]})]})})});s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d.a,{children:Object(c.jsx)(g,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.aa61aab8.chunk.js.map