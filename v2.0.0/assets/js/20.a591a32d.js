(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{517:function(t,e,i){},541:function(t,e,i){"use strict";i(517)},564:function(t,e,i){"use strict";i.r(e);i(138),i(22),i(135),i(35),i(71),i(137);var n=i(27),r=i(34),o=i.n(r),a={name:"tm-sidebar-tree",props:["value","title","tree","level"],data:function(){return{show:null}},mounted:function(){Object(n.find)(this.value,["key",this.$page.key])&&this.$emit("active",this.title)},watch:{$route:function(t,e){Object(n.find)(this.value,["key",t.name])&&this.revealParent(this.title)}},methods:{hide:function(t){var e=this.indexFile(t),i=t.frontmatter&&!1===t.frontmatter.order;return e&&e.frontmatter&&e.frontmatter.parent&&!1===e.frontmatter.parent.order||i},iconCollapsed:function(t){return!(!t.directory||this.iconExpanded(t))||!t.path&&this.show!=t.title&&(t.children||t.directory)},iconExpanded:function(t){return this.show==t.title&&!t.key},iconActive:function(t){return""!==this.$page.path&&(t.path==this.$page.path||t.key==this.$page.key)},outboundLink:function(t){return/^[a-z]+:/i.test(t)},isInternalLink:function(t){return t.path&&!t.directory&&!t.static&&!this.outboundLink(t.path)},isOutboundLink:function(t){return t.path&&this.outboundLink(t.path)||t.static},handleEnter:function(t){console.log("enter"),this.revealChild(t.title)},componentName:function(t){return this.isInternalLink(t)?"router-link":(this.isOutboundLink(t),"a")},indexFile:function(t){return!!t.children&&Object(n.find)(t.children,(function(t){var e=t.relativePath;return!!e&&(e.toLowerCase().match(/index.md$/i)||e.toLowerCase().match(/readme.md$/i))}))},setHeight:function(t){t.style.setProperty("--max-height",t.scrollHeight+"px")},titleFormatted:function(t){var e=new o.a({html:!0,linkify:!0});return"<div>".concat(e.renderInline(t),"</div>")},titleText:function(t){var e=this.indexFile(t);return t.frontmatter?t.frontmatter.title||t.title:e?e.frontmatter&&e.frontmatter.parent&&e.frontmatter.parent.title?e.frontmatter.parent.title:e.title.match(/readme\.md/i)||e.title.match(/index\.md/i)?t.title:e.title:t.title},revealChild:function(t){this.show=this.show==t?null:t},revealParent:function(t){this.show=t,this.$emit("active",this.title)},directoryChildren:function(t){if(!0===t.directory){var e=t.path&&t.path.split("/").filter((function(t){return""!=t}));return(e=e.reduce((function(t,e){return Object(n.find)(t.children||t,["title",e])}),this.tree)).children||[]}return[]}}},l=(i(541),i(0)),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.value,(function(e){return i("div",[t.hide(e)?t._e():i(t.componentName(e),{tag:"component",staticClass:"item",class:[t.level>0&&"item__child",{item__dir:!e.path}],style:{"--vline":t.level<1?"hidden":"visible","--vline-color":!t.iconActive(e)&&!t.iconExpanded(e)||t.iconExpanded(e)?"rgba(0,0,0,0.1)":"var(--color-primary)"},attrs:{to:e.path,target:t.outboundLink(e.path)&&"_blank",rel:t.outboundLink(e.path)&&"noreferrer noopener",href:t.outboundLink(e.path)||e.static?e.path:"#",tag:"a",role:!e.path&&"button"},on:{keydown:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.handleEnter(e)},click:function(i){!t.outboundLink(e.path)&&t.revealChild(e.title)}}},[t.iconExpanded(e)&&t.level<1?i("tm-icon-hex",{staticClass:"item__icon item__icon__expanded",staticStyle:{"--icon-color":"var(--color-primary, blue)"}}):t._e(),t.iconCollapsed(e)&&t.level<1?i("tm-icon-hex",{staticClass:"item__icon item__icon__collapsed",staticStyle:{"--icon-color":"rgba(0,0,0,0.18)"}}):!t.outboundLink(e.path)&&t.level<1&&!t.iconExpanded(e)?i("tm-icon-hex",{staticClass:"item__icon item__icon__internal"}):t.outboundLink(e.path)||e.static?i("tm-icon-outbound",{staticClass:"item__icon item__icon__outbound"}):t._e(),i("div",{class:{item__selected:t.iconActive(e)||t.iconExpanded(e),item__selected__dir:t.iconCollapsed(e),item__selected__alt:t.iconExpanded(e)},style:{"padding-left":1*t.level+"rem"},domProps:{innerHTML:t._s(t.titleFormatted(t.titleText(e)))}})],1),(e.children||t.directoryChildren(e),i("div",[i("transition",{attrs:{name:"reveal"},on:{enter:t.setHeight,leave:t.setHeight}},[t.hide(e)?t._e():i("tm-sidebar-tree",{directives:[{name:"show",rawName:"v-show",value:e.title==t.show,expression:"item.title == show"}],attrs:{level:t.level+1,value:e.children||t.directoryChildren(e)||[],title:e.title},on:{active:function(e){return t.revealParent(e)}}})],1)],1))],1)})),0)}),[],!1,null,"15b24446",null);e.default=c.exports}}]);