(this["webpackJsonpinsta-clone"]=this["webpackJsonpinsta-clone"]||[]).push([[6],{53:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"g",(function(){return b})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return v})),n.d(t,"d",(function(){return g})),n.d(t,"i",(function(){return N})),n.d(t,"a",(function(){return I})),n.d(t,"c",(function(){return L})),n.d(t,"h",(function(){return U}));var r=n(29),c=n(57),a=n(16),s=n(51),o=n.n(s),u=n(52),i=n(23);function l(e){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("userId","==",t).get();case 2:return n=e.sent,r=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,r=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(o.a.mark((function e(t,n){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("userId","not-in",[t].concat(Object(c.a)(n))).limit(10).get();case 2:return r=e.sent,s=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.b.firestore().collection("users").doc(t).update({following:r?i.a.arrayRemove(n):i.a.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,n){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.b.firestore().collection("users").doc(t).update({followers:r?i.a.arrayRemove(n):i.a.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(o.a.mark((function e(t,n){var c,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","in",n).get();case 2:return c=e.sent,s=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(s.map(function(){var e=Object(u.a)(o.a.mark((function e(n){var c,s,u,i,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=!1,(null===(c=n.likes)||void 0===c?void 0:c.includes(t))&&(s=!0),e.next=4,b(n.userId);case 4:return u=e.sent,i=Object(r.a)(u,1),l=i[0],d=l.username,e.abrupt("return",Object(a.a)(Object(a.a)({username:d},n),{},{userLikedPhoto:s}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,n){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.b.firestore().collection("photos").doc(t).update({likes:n?i.a.arrayRemove(r):i.a.arrayUnion(r)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,n){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.b.firestore().collection("photos").doc(t).update({comments:i.a.arrayUnion({displayName:n,comment:r})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(o.a.mark((function e(t,n){var c,s,u,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).where("following","array-contains",n).get();case 2:return c=e.sent,s=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),u=Object(r.a)(s,1),l=u[0],d=void 0===l?{}:l,e.abrupt("return",!!d.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3);function c(e){var t=e.username,n=e.className;return Object(r.jsx)("img",{src:"/images/avatars/".concat(t,".png"),alt:"User Profile",title:t,className:n,onError:function(e){e.target.src="/images/avatars/default.png"}})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(1),c=n(18),a=n(19),s=n(30),o=n(13),u=n(55),i=n.n(u),l=n(54),d=n(3);function b(){var e=Object(r.useContext)(s.a).user,t=Object(r.useContext)(a.a).firebase;return Object(d.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary mb-8",children:Object(d.jsx)("div",{className:"container max-w-screen-lg mx-auto px-5 h-full",children:Object(d.jsxs)("div",{className:"flex justify-between h-full",children:[Object(d.jsx)("div",{className:"flex items-center text-gray-700 text-center",children:Object(d.jsx)(c.b,{to:o.a,className:"w-12/12",children:Object(d.jsx)("span",{className:"mt-2 text-black-light font-medium text-xl",children:"Insta Clone"})})}),Object(d.jsx)("div",{className:"flex items-center text-gray-700 text-center",children:e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(c.b,{to:o.a,children:Object(d.jsx)("svg",{className:"w-8 mr-6 text-black-light",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})}),Object(d.jsx)("button",{type:"button",title:"Log Out",onClick:function(){return t.auth().signOut()},onKeyDown:function(e){"Enter"===e.key&&t.auth().signOut()},children:Object(d.jsx)("svg",{className:"w-8 mr-6 text-black-light",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),Object(d.jsx)("div",{className:"flex items-center",children:e.displayName?Object(d.jsx)(c.b,{to:"/p/".concat(e.displayName.toLowerCase()),children:Object(d.jsx)(l.a,{username:e.displayName,className:"w-8 h-8 rounded-full"})}):Object(d.jsx)(i.a,{circle:!0,height:32,width:32})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(c.b,{to:o.b,className:"mr-4",children:Object(d.jsx)("button",{type:"button",tabIndex:"-1",className:"bg-blue-medium hover:bg-blue-mediumHover font-bold text-sm text-white rounded w-20 h-8",children:"Log In"})}),Object(d.jsx)(c.b,{to:o.e,className:"mr-4",children:Object(d.jsx)("button",{type:"button",tabIndex:"-1",className:"text-blue-medium hover:text-white hover:bg-blue-medium font-bold text-sm border border-blue-medium rounded w-20 h-8",children:"Sign Up"})})]})})]})})})}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(51),c=n.n(r),a=n(52),s=n(29),o=n(1),u=n(30),i=n(53);function l(){var e=Object(o.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(o.useContext)(u.a).user;return Object(o.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.g)(l.uid);case 2:t=e.sent,n=Object(s.a)(t,1),a=n[0],r(a||{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===l||void 0===l?void 0:l.uid)?function(){e.apply(this,arguments)}():r({})}),[l]),{user:n,setUser:r}}},70:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n(1),c=n(58),a=Object(r.createContext)(null),s=n(51),o=n.n(s),u=n(52),i=n(29),l=n(55),d=n.n(l),b=n(53),j=n(18),p=n(54),m=n(3);function f(e){var t=e.profileDocId,n=e.profileId,c=e.profUsername,s=e.userId,l=e.userDocId,d=Object(r.useState)(!1),f=Object(i.a)(d,2),x=f[0],h=f[1],O=Object(r.useContext)(a).setUser;function v(){return(v=Object(u.a)(o.a.mark((function e(){var r,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,Object(b.j)(l,n,!1);case 3:return e.next=5,Object(b.k)(t,s,!1);case 5:return e.next=7,Object(b.g)(s);case 7:r=e.sent,c=Object(i.a)(r,1),a=c[0],O(a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return x?null:Object(m.jsxs)("div",{className:"flex items-center justify-between",children:[Object(m.jsx)(j.b,{to:"/p/".concat(c),children:Object(m.jsxs)("div",{className:"flex items-center justify-between",children:[Object(m.jsx)(p.a,{username:c,className:"flex rounded-full w-8 mr-3"}),Object(m.jsx)("p",{className:"font-bold text-sm",children:c})]})}),Object(m.jsx)("button",{className:"text-xs text-blue-medium font-bold",type:"button",onClick:function(){return v.apply(this,arguments)},children:"Follow"})]})}function x(e){var t=e.userId,n=e.following,c=e.docId,a=Object(r.useState)(null),s=Object(i.a)(a,2),l=s[0],j=s[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)(t,n);case 2:r=e.sent,j(r||[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t,n]),l?l.length>0?Object(m.jsxs)("div",{className:"rounded flex flex-col",children:[Object(m.jsx)("div",{className:"flex items-center justify-between text-sm mb-2",children:Object(m.jsx)("p",{className:"font-bold text-gray-base",children:"Suggestions for you"})}),Object(m.jsx)("div",{className:"mt-4 grid gap-4",children:l.map((function(e){return Object(m.jsx)(f,{profileDocId:e.docId,profileId:e.userId,profUsername:e.username,userId:t,userDocId:c},e.userId)}))})]}):null:Object(m.jsx)(d.a,{count:1,height:150,className:"mt-5"})}function h(e){var t=e.username,n=e.fullName;return t&&n?Object(m.jsxs)(j.b,{to:"/p/".concat(t),className:"grid grid-cols-4 gap-4 mb-6 items-center",children:[Object(m.jsx)("div",{className:"flex items-center justify-between col-span-1",children:Object(m.jsx)(p.a,{username:t,className:"rounded-full w-16 flex mr-3"})}),Object(m.jsxs)("div",{className:"col-span-3",children:[Object(m.jsx)("p",{className:"font-bold text-sm",children:t}),Object(m.jsx)("p",{className:"text-sm",children:n})]})]}):Object(m.jsx)(d.a,{count:1,height:61})}function O(){var e=Object(r.useContext)(a).user,t=(e=void 0===e?{}:e).username,n=e.fullName,c=e.userId,s=e.following,o=e.docId;return Object(m.jsxs)("div",{className:"p-4",children:[Object(m.jsx)(h,{username:t,fullName:n}),Object(m.jsx)(x,{userId:c,following:s,docId:o})]})}var v=n(30);function w(e){var t=e.docId,n=e.totalLikes,c=e.likedPhoto,a=e.handleFocus,s=Object(r.useContext)(v.a).user.uid,l=void 0===s?"":s,d=Object(r.useState)(c),j=Object(i.a)(d,2),p=j[0],f=j[1],x=Object(r.useState)(n),h=Object(i.a)(x,2),O=h[0],w=h[1],g=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f((function(e){return!e})),e.next=3,Object(b.i)(t,p,l);case 3:w((function(e){return p?e-1:e+1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"flex justify-between p-4",children:Object(m.jsxs)("div",{className:"flex",children:[Object(m.jsx)("svg",{className:"w-6 h-6 mr-4 cursor-pointer select-none ".concat(p?"text-red-primary fill-red":"text-black-light"),onClick:g,onKeyDown:function(e){"Enter"===e.key&&g()},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(m.jsx)("svg",{className:"w-6 h-6 cursor-pointer select-none text-black-light",onClick:a,onKeyDown:function(e){"Enter"===e.key&&a()},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})]})}),Object(m.jsx)("div",{className:"p-4 py-0",children:Object(m.jsx)("p",{className:"font-bold",children:"".concat(O,1===O?" like":" likes")})})]})}var g=n(57),y=n(69);function N(e){var t=e.docId,n=e.comments,c=e.setComments,a=e.commentInput,s=Object(r.useState)(""),l=Object(i.a)(s,2),d=l[0],j=l[1],p=Object(r.useContext)(v.a).user.displayName,f=function(){var e=Object(u.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),c([{displayName:p,comment:d}].concat(Object(g.a)(n))),j(""),e.next=5,Object(b.a)(t,p,d);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"border-t border-gray-primary",children:Object(m.jsxs)("form",{className:"flex justify-between pl-0 pr-5",onSubmit:f,children:[Object(m.jsx)("input",{type:"text",autoComplete:"off",name:"add-comment",placeholder:"Add a comment",className:"text-sm text-gray-base w-full mr-3 py-5 px-4",value:d,onChange:function(e){var t=e.target;return j(t.value)},ref:a}),Object(m.jsx)("button",{className:"text-sm font-bold text-blue-medium ".concat(d.length<=1&&"opacity-25"),disabled:d.length<=1,children:"POST"})]})})}function k(e){var t=e.docId,n=e.allComments,c=e.datePosted,a=e.commentInput,s=Object(g.a)(n).reverse(),o=Object(r.useState)(s),u=Object(i.a)(o,2),l=u[0],d=u[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"p-4 pt-1",children:[l.length>=3&&Object(m.jsxs)("p",{className:"text-sm text-gray-base mb-1 cursor-pointer",children:["View all ",l.length," comments"]}),l.slice(0,3).map((function(e){return Object(m.jsxs)("p",{className:"mb-1",children:[Object(m.jsx)(j.b,{to:"/p/".concat(e.displayName),children:Object(m.jsx)("span",{className:"mr-1 font-bold hover:underline",children:e.displayName})}),Object(m.jsx)("span",{className:"text-gray-500 text-sm",children:e.comment})]},"".concat(e.displayName,"-").concat(e.comment))})),Object(m.jsxs)("p",{className:"text-gray-base text-xs uppercase mt-2",children:[Object(y.a)(c,new Date)," ago"]})]}),Object(m.jsx)(N,{docId:t,comments:l,setComments:d,commentInput:a})]})}function I(e){var t=e.username,n=e.caption;return Object(m.jsxs)("div",{className:"p-4 pt-2 pb-0",children:[Object(m.jsx)(j.b,{to:"/p/".concat(t),children:Object(m.jsx)("span",{className:"mr-1 font-bold hover:underline",children:t})}),Object(m.jsx)("span",{className:"text-gray-500 text-sm",children:n})]})}function C(e){var t=e.username;return Object(m.jsx)("div",{className:"flex border-b border-gray-primary h-4 p-4 py-8",children:Object(m.jsx)("div",{className:"flex items-center",children:Object(m.jsxs)(j.b,{to:"/p/".concat(t),className:"flex items-center",children:[Object(m.jsx)(p.a,{username:t,className:"rounded-full h-8 w-8 flex mr-3"}),Object(m.jsx)("p",{className:"font-bold  hover:underline",children:t})]})})})}function L(e){var t=e.src,n=e.caption;return Object(m.jsx)("img",{src:t,alt:n})}function S(e){var t=e.content,n=Object(r.useRef)(null);return Object(m.jsxs)("div",{className:"rounded bg-white border border-gray-primary mb-16",children:[Object(m.jsx)(C,{username:t.username}),Object(m.jsx)(L,{src:t.imageSrc,caption:t.caption}),Object(m.jsx)(w,{docId:t.docId,totalLikes:t.likes.length,likedPhoto:t.userLikedPhoto,handleFocus:function(){return n.current.focus()}}),Object(m.jsx)(I,{username:t.username,caption:t.caption}),Object(m.jsx)(k,{docId:t.docId,allComments:t.comments,datePosted:t.dateCreated,commentInput:n})]})}function U(){var e=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useContext)(a).user,l=(s=void 0===s?{}:s).userId,d=void 0===l?"":l,j=s.following;return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],!(j.length>0)){e.next=5;break}return e.next=4,Object(b.d)(d,j);case 4:t=e.sent;case 5:t.sort((function(e,t){return t.dateCreated-e.dateCreated})),c(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d&&function(){e.apply(this,arguments)}()}),[d,j]),{photos:n}}().photos;return Object(m.jsx)("div",{className:"container col-span-2",children:e?(null===e||void 0===e?void 0:e.length)>0?e.map((function(e){return Object(m.jsx)(S,{content:e},e.docId)})):Object(m.jsx)("p",{className:"text-center text-2xl",children:"Follow people to see photos"}):Object(m.jsx)(d.a,{count:4,width:640,height:600,className:"mb-5"})})}var P=n(59);function D(){var e=Object(P.a)(),t=e.user,n=e.setUser;return Object(r.useEffect)((function(){document.title="Insta Clone"}),[]),Object(m.jsx)(a.Provider,{value:{user:t,setUser:n},children:Object(m.jsxs)("div",{className:"bg-gray-background",children:[Object(m.jsx)(c.a,{}),Object(m.jsx)("div",{className:"container max-w-screen-lg mx-auto px-5",children:Object(m.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-between",children:[Object(m.jsx)(U,{}),Object(m.jsx)(O,{})]})})]})})}}}]);
//# sourceMappingURL=6.129ab6ef.chunk.js.map