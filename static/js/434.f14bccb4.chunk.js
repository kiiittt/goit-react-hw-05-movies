"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[434],{623:function(r,e,t){t.d(e,{Hx:function(){return v},WK:function(){return p},Y5:function(){return o},wr:function(){return s},xc:function(){return i}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"8b801a00c53265c17aedd2cbc707fdf5",language:"en-US"};var s=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/trending/movie/day");case 3:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(e));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(e,"/credits"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.cast);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(e,"/reviews"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/search/movie?query=".concat(e));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},434:function(r,e,t){t.r(e),t.d(e,{default:function(){return g}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(87),o=t(623),i=t(791),v=t(689),p="MoviesList_List__FxWIB",f="MoviesList_Link__abDw6",l=t(184);var h=function(r){var e=r.title,t=r.movieId,n=(0,v.TH)();return(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"/movies/".concat(t),state:{from:n},className:f,children:e})})};var m=function(r){var e=r.movies;return(0,l.jsx)("ul",{className:p,children:e.map((function(r){var e=r.id,t=r.title;return(0,l.jsx)(h,{movieId:e,title:t,className:f},e)}))})},d="SearchMovie_form__iToRm",x="SearchMovie_input__97k05",_="SearchMovie_searchBtn__jnOgX";var b=function(r){var e=r.onSubmit,t=(0,i.useState)(""),n=(0,a.Z)(t,2),u=n[0],c=n[1];return(0,l.jsxs)("form",{className:d,onSubmit:function(r){r.preventDefault(),""!==u.trim()&&(e(u),c(""))},children:[(0,l.jsx)("input",{className:x,value:u,onChange:function(r){c(r.target.value)}}),(0,l.jsx)("button",{type:"submit",className:_,children:"Search"})]})};var g=function(){var r=(0,i.useState)([]),e=(0,a.Z)(r,2),t=e[0],u=e[1],v=(0,s.lr)(),p=(0,a.Z)(v,2),f=p[0],h=p[1],d=f.get("query"),x=(0,i.useCallback)(function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,o.WK)(e);case 2:t=r.sent,u(t),h({query:e});case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[h]);return(0,i.useEffect)((function(){d&&x(d)}),[f,d,x]),(0,l.jsxs)("div",{children:[(0,l.jsx)(b,{onSubmit:x}),(0,l.jsx)(m,{movies:t})]})}}}]);
//# sourceMappingURL=434.f14bccb4.chunk.js.map