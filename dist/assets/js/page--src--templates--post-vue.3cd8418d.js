(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{184:function(t,e,n){},185:function(t,e,n){},186:function(t,e){},192:function(t,e,n){var o=n(2);e.f=o},210:function(t,e,n){"use strict";var o=n(4),r=n(1),i=n(23),s=n(20),a=n(12),c=n(83),u=n(135),f=n(3),l=n(11),p=n(35),m=n(10),d=n(8),v=n(24),y=n(21),h=n(34),g=n(33),b=n(56),w=n(84),S=n(53),_=n(211),O=n(81),C=n(22),j=n(14),P=n(78),$=n(18),N=n(15),x=n(79),E=n(54),k=n(55),T=n(80),J=n(2),M=n(192),A=n(212),D=n(57),F=n(28),I=n(82).forEach,L=E("hidden"),G=J("toPrimitive"),H=F.set,Q=F.getterFor("Symbol"),W=Object.prototype,q=r.Symbol,z=i("JSON","stringify"),B=C.f,K=j.f,R=_.f,U=P.f,V=x("symbols"),X=x("op-symbols"),Y=x("string-to-symbol-registry"),Z=x("symbol-to-string-registry"),tt=x("wks"),et=r.QObject,nt=!et||!et.prototype||!et.prototype.findChild,ot=a&&f((function(){return 7!=b(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=B(W,e);o&&delete W[e],K(t,e,n),o&&t!==W&&K(W,e,o)}:K,rt=function(t,e){var n=V[t]=b(q.prototype);return H(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,n){t===W&&st(X,e,n),d(t);var o=h(e,!0);return d(n),l(V,o)?(n.enumerable?(l(t,L)&&t[L][o]&&(t[L][o]=!1),n=b(n,{enumerable:g(0,!1)})):(l(t,L)||K(t,L,g(1,{})),t[L][o]=!0),ot(t,o,n)):K(t,o,n)},at=function(t,e){d(t);var n=y(e),o=w(n).concat(lt(n));return I(o,(function(e){a&&!ct.call(n,e)||st(t,e,n[e])})),t},ct=function(t){var e=h(t,!0),n=U.call(this,e);return!(this===W&&l(V,e)&&!l(X,e))&&(!(n||!l(this,e)||!l(V,e)||l(this,L)&&this[L][e])||n)},ut=function(t,e){var n=y(t),o=h(e,!0);if(n!==W||!l(V,o)||l(X,o)){var r=B(n,o);return!r||!l(V,o)||l(n,L)&&n[L][o]||(r.enumerable=!0),r}},ft=function(t){var e=R(y(t)),n=[];return I(e,(function(t){l(V,t)||l(k,t)||n.push(t)})),n},lt=function(t){var e=t===W,n=R(e?X:y(t)),o=[];return I(n,(function(t){!l(V,t)||e&&!l(W,t)||o.push(V[t])})),o};(c||(N((q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===W&&n.call(X,t),l(this,L)&&l(this[L],e)&&(this[L][e]=!1),ot(this,e,g(1,t))};return a&&nt&&ot(W,e,{configurable:!0,set:n}),rt(e,t)}).prototype,"toString",(function(){return Q(this).tag})),N(q,"withoutSetter",(function(t){return rt(T(t),t)})),P.f=ct,j.f=st,C.f=ut,S.f=_.f=ft,O.f=lt,M.f=function(t){return rt(J(t),t)},a&&(K(q.prototype,"description",{configurable:!0,get:function(){return Q(this).description}}),s||N(W,"propertyIsEnumerable",ct,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),I(w(tt),(function(t){A(t)})),o({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(Y,e))return Y[e];var n=q(e);return Y[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?b(t):at(b(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:ut}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),o({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),z)&&o({target:"JSON",stat:!0,forced:!c||f((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}))},{stringify:function(t,e,n){for(var o,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(o=e,(m(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!it(e))return e}),r[1]=e,z.apply(null,r)}});q.prototype[G]||$(q.prototype,G,q.prototype.valueOf),D(q,"Symbol"),k[L]=!0},211:function(t,e,n){var o=n(21),r=n(53).f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?function(t){try{return r(t)}catch(t){return s.slice()}}(t):r(o(t))}},212:function(t,e,n){var o=n(134),r=n(11),i=n(192),s=n(14).f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||s(e,t,{value:i.f(t)})}},213:function(t,e,n){"use strict";var o=n(4),r=n(12),i=n(1),s=n(11),a=n(10),c=n(14).f,u=n(133),f=i.Symbol;if(r&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(p,f);var m=p.prototype=f.prototype;m.constructor=p;var d=m.toString,v="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=d.call(t);if(s(l,t))return"";var n=v?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:p})}},214:function(t,e,n){"use strict";var o=n(184);n.n(o).a},215:function(t,e,n){"use strict";var o=n(185);n.n(o).a},216:function(t,e,n){"use strict";var o=n(186),r=n.n(o);e.default=r.a},218:function(t,e,n){"use strict";n.r(e);n(210),n(213);var o=n(190),r=n(191),i=(n(214),n(13)),s=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h4",[this._v("Subscribe to my Newsletter")]),e("p",{staticClass:"text"},[this._v("Don't miss out on new articles from me. Get notified when a new article is published.")]),e("form",{staticClass:"form",attrs:{action:"https://tinyletter.com/anekenonso",method:"post",target:"popupwindow",onsubmit:"window.open('https://tinyletter.com/anekenonso', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"}},[e("input",{staticClass:"form__email",attrs:{type:"text",name:"email",id:"email",onfocus:"this.value=''","aria-label":"email",placeholder:"Email address"}}),e("input",{attrs:{type:"hidden",value:"1",name:"embed"}}),e("input",{staticClass:"form__submit",attrs:{type:"submit",value:"Subscribe"}})])])}],!1,null,null,null).exports,a={components:{Author:n(188).a,PostMeta:o.a,PostTags:r.a,Newsletter:s},metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"description",content:this.$page.post.description}]}}},c=(n(215),n(216)),u=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"post-title"},[n("h1",{staticClass:"post-title__text"},[t._v("\n      "+t._s(t.$page.post.title)+"\n    ")]),n("PostMeta",{attrs:{post:t.$page.post}})],1),n("div",{staticClass:"post content-box"},[n("div",{staticClass:"post__header"},[t.$page.post.cover_image?n("g-image",{attrs:{alt:"Cover image",src:t.$page.post.cover_image}}):t._e()],1),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post__content",domProps:{innerHTML:t._s(t.$page.post.content)}}),n("div",{staticClass:"post__footer"},[n("PostTags",{attrs:{post:t.$page.post}})],1)]),n("div",{staticClass:"post-comments"}),n("Newsletter",{staticClass:"post-newsletter"}),n("Author",{staticClass:"post-author"})],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(u);e.default=u.exports}}]);