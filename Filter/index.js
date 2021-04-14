module.exports=(()=>{var e={737:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var n=r(221),a=r.n(n),o=r(946),s=r.n(o),c=r(33),i=r.n(c),l=r(491),u=r.n(l),d=r(22),h=r.n(d),f=r(246),p=r.n(f),y=r(323),v=r.n(y);const m=require("react");var w=r.n(m),g=r(924),k=r.n(g);const b=function(e){var t=!0;k()([])===k()(e)&&e||(t=!1);try{if(t.length)for(var r=0;r<=t.length-1;r++){t[r];break}}catch(e){t=!1}return t};const C=function(e){return null!=e&&k()("")===k()(e)};const P=function(e){return null!=e&&k()(!0)===k()(e)};const A=function(e){return null!=e&&k()((function(){}))===k()(e)};const x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!1;return e.map((function(e){r[e]!==t[e]&&(n=!0)})),n};const O=function(e){var t=!0;k()({})===k()(e)&&e||(t=!1);try{Object.keys(e)}catch(e){t=!1}return t};const E=function(e){return null!=e&&k()(8)===k()(e)};var D=void 0;const S=function e(){var t="".concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));return D!==t?(D=t,t):e()};function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var a=v()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return p()(this,r)}}const N=function(e){h()(r,e);var t=K(r);function r(e){var n;return s()(this,r),(n=t.call(this,e)).refNode=w().createRef(),n.attachHandleClick=n.attachHandleClick.bind(u()(n)),n.handleClick=n.handleClick.bind(u()(n)),n.attachHandleKeyDown=n.attachHandleKeyDown.bind(u()(n)),n.handleKeyDown=n.handleKeyDown.bind(u()(n)),n.state={current:[],uuid:"".concat(S()),addClass:C(e.addClass)?e.addClass:"",defaultClass:C(e.defaultClass)?e.defaultClass:"rr-filter",id:C(e.id)?e.id:"",data:b(e.data)?e.data:[],reset:!P(e.reset)||e.reset,disabled:!P(e.disabled)||e.disabled,callback:A(e.callback)?e.callback:void 0,callbackProps:e.callbackProps,supportKeyDown:!P(e.supportKeyDown)||e.supportKeyDown,dummy:O(e.dummy)?e.dummy:{}},n.arrowBehaviorActive=!1,n.resetArrowBehavior(),n}return i()(r,[{key:"componentDidMount",value:function(){var e=this;this.attachHandleClick(),this.attachHandleKeyDown();var t=this.state.current;this.state.data.map((function(){return t.push(e.getEmptyOption())})),this.setState({current:t})}},{key:"componentWillUnmount",value:function(){this.attachHandleClick(!1),this.attachHandleKeyDown(!1)}},{key:"callback",value:function(){var e=this.state,t=e.current,r=e.callback,n=e.callbackProps;r&&r(t,n)}},{key:"attachHandleClick",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];document.removeEventListener("click",this.handleClick),e&&document.addEventListener("click",this.handleClick)}},{key:"attachHandleKeyDown",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.state.supportKeyDown&&(document.removeEventListener("keydown",this.handleKeyDown),e&&document.addEventListener("keydown",this.handleKeyDown))}},{key:"handleClick",value:function(e){this.refNode&&this.refNode.current&&!this.refNode.current.contains(e.target)&&this.toggle(-1,!1)}},{key:"select",value:function(e,t,r){for(var n=this,a=this.state,o=a.current,s=a.data,c=0;c<=o.length-1;c++)c==e&&(r?(o[c].selected=-1,o[c].selectedText="",this.resetArrowBehavior()):(o[c].selected=t,o[c].selectedText=s[c].options[t].text,this.setArrowChild(t)));this.setState({current:o},(function(){n.toggle(e),n.state.reset?n.reset(e):n.callback()}))}},{key:"reset",value:function(e){for(var t=this.state.current,r=0;r<=t.length-1;r++)r>e&&(t[r]=this.getEmptyOption());this.setState({current:t},this.callback)}},{key:"getEmptyOption",value:function(){return{selected:-1,selectedText:"",show:!1}}},{key:"getOptionJsx",value:function(e,t,r,n){var o=this,s=e.text,c=e.empty,i=n.selected;return w().createElement("li",a()({key:"".concat(t,"-option-").concat(r),value:s,className:"li ".concat(r===i?"selected":""," ").concat(c?"empty":""," ").concat(r===this.getArrowChild()&&t===this.getArrowParent()?"arrow-selected":"")},r!==i&&{onClick:function(){return o.select(t,r,c)}},{onMouseOver:function(){return o.setArrowChild(r)}}),s)}},{key:"handleKeyDown",value:function(e){if(this.arrowBehaviorActive){var t=this.state,r=t.current,n=t.data;if(E(this.getArrowParent())&&b(r)&&r.length){var a=O(n[this.getArrowParent()])&&b(n[this.getArrowParent()].options)?n[this.getArrowParent()].options:[];if(a.length){var o=["Enter",13],s=["ArrowDown",40],c=["ArrowUp",38],i=["Escape",27],l=[].concat(o,s,c,i);if((e.key||e.keycode)&&(l.includes(e.key)||l.includes(e.keycode))){var u=e.key,d=e.keycode,h=this.getArrowChild();if(s.includes(u)||s.includes(d))return(h+=1)>=a.length&&(h=0),this.setArrowChild(h),this.forceUpdate();if(c.includes(u)||c.includes(d))return(h-=1)<0&&(h=a.length-1),this.setArrowChild(h),this.forceUpdate();if((o.includes(u)||o.includes(d))&&O(n[this.getArrowParent()])&&b(n[this.getArrowParent()].options)&&O(n[this.getArrowParent()].options[h])){var f=n[this.getArrowParent()].options[h].empty;this.select(this.getArrowParent(),this.getArrowChild(),f)}(i.includes(u)||i.includes(d))&&(this.toggle(-1,!1),this.resetArrowBehavior())}}}}}},{key:"toggle",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.resetArrowBehavior();for(var r=this.state.current,n=0;n<=r.length-1;n++)n==e&&t?(r[n].show=!r[n].show,!0===r[n].show&&this.state.supportKeyDown&&(this.serArrowParent(e),O(r[this.getArrowParent()])&&E(r[this.getArrowParent()].selected)&&this.setArrowChild(r[this.getArrowParent()].selected))):r[n].show=!1;this.setState({current:r})}},{key:"allowToogle",value:function(e,t){return!!(!this.state.disabled||0===t||e&&e[t-1]&&-1!==e[t-1].selected)}},{key:"getFilterJsx",value:function(){var e=this,t=this.state,r=t.current,n=t.dummy,o=[];if(this.state.data.map((function(t,n){var s=t.options,c=t.arrow;b(s)||(s=[]),O(c)||(c={});var i=c,l=i.char,u=i.direction;C(u)&&["right","left"].includes(u)||(u="right");var d="filter-".concat(n),h=[];t.options.map((function(t,a){return h.push(e.getOptionJsx(t,n,a,r[n]?r[n]:e.getEmptyOption()))}));var f=r&&r[n]&&r[n].selectedText?r[n].selectedText:t.text;o.push(w().createElement("span",{key:d,className:"dropdown"},w().createElement("span",a()({className:"placeholder user-select-none"},e.allowToogle(r,n)&&{onClick:function(){return e.toggle(n)}}),"left"===u&&l&&w().createElement("span",{className:"icon icon-left"},l),w().createElement("span",{className:"text ".concat(r&&r[n]&&r[n].selectedText?"":"dimmed")},f&&f),"right"===u&&l&&w().createElement("span",{className:"icon icon-right"},l)),r&&r[n]&&r[n].show&&w().createElement("div",{className:"wrapper"},w().createElement("ul",{className:"ul"},h))))})),O(n)&&E(n.count)&&0<n.count){var s=n.count,c=n.placeholders;if((!E(s)||0>s)&&(s=0),b(c)&&0!==c.length||(c=[]),s&&o.length-1<s&&c.length)for(var i=o.length-1;i<s;i++){var l=O(c[i])?c[i]:c[c.length-1],u=l.arrow,d=l.placeholder;O(u)||(u={});var h=u,f=h.char,p=h.direction;C(p)&&["right","left"].includes(p)||(p="right"),o.push(w().createElement("span",{key:"custom-placeholder-".concat(i,"-").concat(this.state.uuid),className:"dropdown"},w().createElement("span",{className:"placeholder user-select-none"},"left"===p&&f&&w().createElement("span",{className:"icon icon-left"},f),w().createElement("span",{className:"text dimmed"},d&&d),"right"===p&&f&&w().createElement("span",{className:"icon icon-right"},f))))}for(var y=[],v=0;v<=o.length-1&&!(v>=s);v++)y.push(o[v]);o=y}return o}},{key:"setArrowChild",value:function(e){this.arrowBehaviorActive=!0,this[this.currentSelectedChild]=e}},{key:"getArrowChild",value:function(){return this[this.currentSelectedChild]}},{key:"serArrowParent",value:function(e){this.arrowBehaviorActive=!0,this[this.currentOpenedParent]=e}},{key:"getArrowParent",value:function(){return this[this.currentOpenedParent]}},{key:"resetArrowBehavior",value:function(){this.arrowBehaviorActive=!1,C(this.currentOpenedParent)||(this.currentOpenedParent="current-opened-parent-".concat(S())),C(this.currentSelectedChild)||(this.currentSelectedChild="current-selected-child-".concat(S())),this[this.currentOpenedParent]=0,this[this.currentSelectedChild]=0}},{key:"render",value:function(){var e=this.state,t=e.addClass,r=e.defaultClass,n=e.id;return w().createElement("span",{id:n,className:"".concat(r," ").concat(t),ref:this.refNode},this.getFilterJsx())}}],[{key:"getDerivedStateFromProps",value:function(e,t){return x(["addClass","defaultClass","id","data","reset","disabled","callback","callbackProps","supportKeyDown","dummy"],e,t)?{addClass:C(e.addClass)?e.addClass:"",defaultClass:C(e.defaultClass)?e.defaultClass:"rr-filter",id:C(e.id)?e.id:"",data:b(e.data)?e.data:[],reset:!P(e.reset)||e.reset,disabled:!P(e.disabled)||e.disabled,callback:A(e.callback)?e.callback:void 0,callbackProps:e.callbackProps,supportKeyDown:!P(e.supportKeyDown)||e.supportKeyDown,dummy:O(e.dummy)?e.dummy:{}}:null}}]),r}(w().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},221:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t},323:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},22:(e,t,r)=>{var n=r(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},246:(e,t,r)=>{var n=r(924),a=r(491);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},596:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},924:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(737)})();