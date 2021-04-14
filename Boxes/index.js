module.exports=(()=>{var t={956:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>E});var o=n(221),i=n.n(o),r=n(837),a=n.n(r),l=n(924),c=n.n(l),s=n(946),u=n.n(s),d=n(33),f=n.n(d),m=n(491),p=n.n(m),y=n(22),h=n.n(y),v=n(246),b=n.n(v),g=n(323),x=n.n(g);const O=require("react");var P=n.n(O),D=void 0;const j=function t(){var e=Math.floor(Date.now()/1e3),n="".concat(e).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(D!==n)return D=n,n;t()};const C=function(t){var e=!0;c()([])===c()(t)&&t||(e=!1);try{if(e.length)for(var n=0;n<=e.length-1;n++){e[n];break}}catch(t){e=!1}return e};const T=function(t){var e=!0;c()({})===c()(t)&&t||(e=!1);try{Object.keys(t)}catch(t){e=!1}return e};const w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!t)return!1;try{return t.getBoundingClientRect().top+e<=(window.innerHeight||document.documentElement.clientHeight)}catch(t){return!1}};const S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!1;return t.map((function(t){n[t]!==e[t]&&(o=!0)})),o};function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=x()(t);if(e){var i=x()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return b()(this,n)}}const E=function(t){h()(n,t);var e=L(n);function n(t){var o;return u()(this,n),(o=e.call(this,t)).handleScrollEvent=o.handleScrollEvent.bind(p()(o)),o.state={uuid:"".concat(j()),addClass:t.addClass&&c()("8")==c()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&c()("8")==c()(t.defaultClass)?t.defaultClass:"rr-boxes",id:t.id&&c()("8")==c()(t.id)?t.id:"",direction:t.direction&&c()("8")==c()(t.direction)&&["right","left"].includes(t.direction)?t.direction:"right",type:t.type&&c()("8")==c()(t.type)&&["10","20","30","40","50","60","70","80","90","100"].includes(t.type)?t.type:"30",animation:t.animation&&c()("8")==c()(t.animation)&&["mount","scroll"].includes(t.animation)?t.animation:"scroll",scrollAdd:t.scrollAdd&&c()(8)===c()(t.scrollAdd)&&0<t.scrollAdd?t.scrollAdd:0,animationTime:t.animationTime&&c()(8)===c()(t.animationTime)&&0<t.animationTime?t.animationTime:300,data:C(t.data)?t.data:[],itemsPerLine:t.itemsPerLine&&c()(8)===c()(t.itemsPerLine)&&0<t.itemsPerLine?t.itemsPerLine:3,animationDelay:t.animationDelay&&c()(8)===c()(t.animationDelay)&&0<t.animationDelay?t.animationDelay:50},o}return f()(n,[{key:"componentDidMount",value:function(){var t=this.state.animation;if("scroll"===t)return this.setMarginTop(),this.setScrollListener();"mount"===t&&this.executeAnimation()}},{key:"componentWillUnmount",value:function(){"scroll"===this.state.animation&&this.setScrollListener(!1)}},{key:"setScrollListener",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];window.removeEventListener("scroll",this.handleScrollEvent),t&&window.addEventListener("scroll",this.handleScrollEvent)}},{key:"handleScrollEvent",value:function(){w(this.boxesReference,this.state.scrollAdd)&&this.executeAnimation()}},{key:"setMarginTop",value:function(){var t=this.state.data;if(0!==t.length){for(var e=0;e<=t.length-1;e++)void 0===t[e].marginTop&&(t[e].marginTop="".concat(this.state.type,"px"));this.setState({data:t})}}},{key:"executeAnimation",value:function(){var t=this.state.data;if(0!==t.length){for(var e=this.state,n=e.itemsPerLine,o=e.type,i=e.animationTime,r=e.animationDelay,a=e.direction,l=!1,c="left"===a?0:n,s=0,u=0;u<=t.length-1;u++)void 0===t[u].animation&&(l=!0,void 0===t[u].marginTop&&(t[u].marginTop="".concat(o,"px")),t[u].animation="animationRrBoxesFromTop".concat(o," ").concat(i,"ms forwards ease-in"),t[u].animationDelay="".concat(c*r,"ms")),"left"===a&&(c+=1),"right"===a&&(c-=1,0!==u&&c%n==0&&(c=n+n*(s+=1)));l&&this.setState({data:t})}}},{key:"handleClick",value:function(t){t.callback(t.callbackProps)}},{key:"getDataJsx",value:function(){var t=this,e=this.state,n=e.data,o=e.itemsPerLine,r=e.uuid;if(0!==n.length){for(var l=[],s=[],u=function(e){var u={};n[e].animation&&(u.animation=n[e].animation),n[e].marginTop&&(u.marginTop=n[e].marginTop),n[e].animationDelay&&(u.animationDelay=n[e].animationDelay),s.push(P().createElement("div",i()({key:"box-item-".concat(e,"-").concat(r),className:"box-item",style:u},T(n[e].props)&&function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n[e].props),n[e].callback&&c()((function(){}))===c()(n[e].callback)&&{onClick:function(){return t.handleClick(n[e])}}),n[e].data&&n[e].data)),(e===n.length-1&&s.length||0!==e&&s.length%o==0)&&(l.push(P().createElement("div",{key:"box-group-".concat(e,"-").concat(r),className:"box-group flex"},s)),s=[])},d=0;d<=n.length-1;d++)u(d);return l}}},{key:"render",value:function(){var t=this,e=this.state,n=e.addClass,o=e.defaultClass,i=e.id;return P().createElement("div",{className:"".concat(o," ").concat(n),id:i,ref:function(e){return t.boxesReference=e}},this.getDataJsx())}}],[{key:"getDerivedStateFromProps",value:function(t,e){return S(["addClass","id","defaultClass","direction","type","animation","animationTime","data","itemsPerLine","animationDelay","scrollAdd"],t,e)?{addClass:t.addClass&&c()("8")==c()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&c()("8")==c()(t.defaultClass)?t.defaultClass:"rr-boxes",id:t.id&&c()("8")==c()(t.id)?t.id:"",direction:t.direction&&c()("8")==c()(t.direction)&&["right","left"].includes(t.direction)?t.direction:"right",type:t.type&&c()("8")==c()(t.type)&&["10","20","30","40","50","60","70","80","90","100"].includes(t.type)?t.type:"30",animation:t.animation&&c()("8")==c()(t.animation)&&["mount","scroll"].includes(t.animation)?t.animation:"scroll",scrollAdd:t.scrollAdd&&c()(8)===c()(t.scrollAdd)&&0<t.scrollAdd?t.scrollAdd:0,animationTime:t.animationTime&&c()(8)===c()(t.animationTime)&&0<t.animationTime?t.animationTime:300,data:C(t.data)?t.data:[],itemsPerLine:t.itemsPerLine&&c()(8)===c()(t.itemsPerLine)&&0<t.itemsPerLine?t.itemsPerLine:3,animationDelay:t.animationDelay&&c()(8)===c()(t.animationDelay)&&0<t.animationDelay?t.animationDelay:50}:null}}]),n}(P().Component)},491:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},946:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},33:t=>{function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}},837:t=>{t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},221:t=>{function e(){return t.exports=e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},e.apply(this,arguments)}t.exports=e},323:t=>{function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},22:(t,e,n)=>{var o=n(596);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},246:(t,e,n)=>{var o=n(924),i=n(491);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?i(t):e}},596:t=>{function e(n,o){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,o)}t.exports=e},924:t=>{function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e}},e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(956)})();