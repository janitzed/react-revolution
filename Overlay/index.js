module.exports=(()=>{var e={280:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var r=n(924),a=n.n(r),o=n(946),c=n.n(o),l=n(33),s=n.n(l),i=n(491),u=n.n(i),d=n(22),f=n.n(d),p=n(246),y=n.n(p),v=n(323),b=n.n(v);const m=require("react");var k=n.n(m);const h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1;return e.map((function(e){n[e]!==t[e]&&(r=!0)})),r};function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b()(e);if(t){var a=b()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y()(this,n)}}const E=function(e){f()(n,e);var t=C(n);function n(e){var r;return c()(this,n),(r=t.call(this,e)).EscListener=r.EscListener.bind(u()(r)),r.state={addClass:e.addClass&&a()("8")==a()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&a()("8")==a()(e.defaultClass)?e.defaultClass:"rr-overlay",id:e.id&&a()("8")==a()(e.id)?e.id:"",display:a()(!0)==a()(e.display)&&e.display,callback:e.callback&&a()((function(){}))==a()(e.callback)?e.callback:void 0,callbackProps:e.callbackProps,data:e.data},r}return s()(n,[{key:"componentDidMount",value:function(){this.addEscEventListener()}},{key:"componentWillUnmount",value:function(){this.removeEscEventListener()}},{key:"addEscEventListener",value:function(){window.addEventListener("keydown",this.EscListener,!1)}},{key:"removeEscEventListener",value:function(){window.removeEventListener("keydown",this.EscListener,!1)}},{key:"EscListener",value:function(e){"Escape"!==e.key&&"Esc"!==e.key&&27!==e.keyCode&&27!==e.which||this.cancel()}},{key:"cancel",value:function(){var e=this.state,t=e.callback,n=e.callbackProps;t&&t(n)}},{key:"render",value:function(){var e=this,t=this.state,n=t.display,r=t.data,a=t.defaultClass,o=t.addClass,c=t.id;return n?k().createElement("div",{className:"".concat(a," ").concat(o),id:c},k().createElement("div",{className:"dimmed",onClick:function(){return e.cancel()}}),r&&k().createElement("div",{className:"data ctx"},r)):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return h(["addClass","defaultClass","id","data","display","callback","callbackProps"],e,t)?{addClass:e.addClass&&a()("8")==a()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&a()("8")==a()(e.defaultClass)?e.defaultClass:"rr-overlay",id:e.id&&a()("8")==a()(e.id)?e.id:"",display:a()(!0)==a()(e.display)&&e.display,callback:e.callback&&a()((function(){}))==a()(e.callback)?e.callback:void 0,callbackProps:e.callbackProps,data:e.data}:null}}]),n}(k().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},323:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},22:(e,t,n)=>{var r=n(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},246:(e,t,n)=>{var r=n(924),a=n(491);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},596:e=>{function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},924:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(280)})();