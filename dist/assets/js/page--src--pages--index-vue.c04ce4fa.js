(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(t,s,a){},180:function(t,s,a){"use strict";var o=a(176);a.n(o).a},187:function(t,s){},189:function(t,s,a){"use strict";var o=a(190),e=a(191),i={components:{PostMeta:o.a,PostTags:e.a},props:["post"]},n=(a(180),a(13)),r=Object(n.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__header"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=r.exports},217:function(t,s,a){"use strict";var o=a(187),e=a.n(o);s.default=e.a},219:function(t,s,a){"use strict";a.r(s);a(0),a(76),a(86),a(36),a(77),a(136),a(29),a(85),a(6),a(5),Boolean,Boolean;a(87);var o=a(188),e=a(189),i={components:{Author:o.a,PostCard:e.a},metaInfo:{title:"Home"}},n=a(13),r=a(217),c=Object(n.a)(i,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",{attrs:{"show-logo":!1}},[s("Author",{attrs:{"show-title":!0}}),s("div",{staticClass:"posts"},this._l(this.$page.posts.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)],1)}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(c);s.default=c.exports}}]);