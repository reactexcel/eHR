(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{572:function(t,e){var n=Array.isArray;t.exports=n},573:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},575:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.hasNextTick=e.hasSetImmediate=void 0,e.fallback=c,e.wrap=l;var o,r=n(576),a=(o=r)&&o.__esModule?o:{default:o};var s,u=e.hasSetImmediate="function"===typeof t&&t,h=e.hasNextTick="object"===typeof i&&"function"===typeof i.nextTick;function c(t){setTimeout(t,0)}function l(t){return function(e){var n=(0,a.default)(arguments,1);t(function(){e.apply(null,n)})}}s=u?t:h?i.nextTick:c,e.default=l(s)}).call(this,n(266).setImmediate,n(59))},576:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){e|=0;for(var n=Math.max(t.length-e,0),i=Array(n),o=0;o<n;o++)i[o]=t[e+o];return i},t.exports=e.default},577:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isAsync=void 0;var i,o=n(594),r=(i=o)&&i.__esModule?i:{default:i};var a="function"===typeof Symbol;function s(t){return a&&"AsyncFunction"===t[Symbol.toStringTag]}e.default=function(t){return s(t)?(0,r.default)(t):t},e.isAsync=s},582:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=(0,o.default)(t);return(0,i.default)(function(t,e){n(t[0],e)},e,1)};var i=r(n(586)),o=r(n(577));function r(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},586:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){if(null==e)e=1;else if(0===e)throw new Error("Concurrency must not be zero");var c=(0,h.default)(t),l=0,d=[],f=!1;function v(t,e,n){if(null!=n&&"function"!==typeof n)throw new Error("task callback must be a function");if(_.started=!0,(0,o.default)(t)||(t=[t]),0===t.length&&_.idle())return(0,s.default)(function(){_.drain()});for(var i=0,a=t.length;i<a;i++){var u={data:t[i],callback:n||r.default};e?_._tasks.unshift(u):_._tasks.push(u)}f||(f=!0,(0,s.default)(function(){f=!1,_.process()}))}function p(t){return function(e){l-=1;for(var n=0,o=t.length;n<o;n++){var r=t[n],a=(0,i.default)(d,r,0);0===a?d.shift():a>0&&d.splice(a,1),r.callback.apply(r,arguments),null!=e&&_.error(e,r.data)}l<=_.concurrency-_.buffer&&_.unsaturated(),_.idle()&&_.drain(),_.process()}}var y=!1,_={_tasks:new u.default,concurrency:e,payload:n,saturated:r.default,unsaturated:r.default,buffer:e/4,empty:r.default,drain:r.default,error:r.default,started:!1,paused:!1,push:function(t,e){v(t,!1,e)},kill:function(){_.drain=r.default,_._tasks.empty()},unshift:function(t,e){v(t,!0,e)},remove:function(t){_._tasks.remove(t)},process:function(){if(!y){for(y=!0;!_.paused&&l<_.concurrency&&_._tasks.length;){var t=[],e=[],n=_._tasks.length;_.payload&&(n=Math.min(n,_.payload));for(var i=0;i<n;i++){var o=_._tasks.shift();t.push(o),d.push(o),e.push(o.data)}l+=1,0===_._tasks.length&&_.empty(),l===_.concurrency&&_.saturated();var r=(0,a.default)(p(t));c(e,r)}y=!1}},length:function(){return _._tasks.length},running:function(){return l},workersList:function(){return d},idle:function(){return _._tasks.length+l===0},pause:function(){_.paused=!0},resume:function(){!1!==_.paused&&(_.paused=!1,(0,s.default)(_.process))}};return _};var i=c(n(587)),o=c(n(572)),r=c(n(591)),a=c(n(592)),s=c(n(575)),u=c(n(593)),h=c(n(577));function c(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},587:function(t,e,n){var i=n(588),o=n(589),r=n(590);t.exports=function(t,e,n){return e===e?r(t,e,n):i(t,o,n)}},588:function(t,e){t.exports=function(t,e,n,i){for(var o=t.length,r=n+(i?1:-1);i?r--:++r<o;)if(e(t[r],r,t))return r;return-1}},589:function(t,e){t.exports=function(t){return t!==t}},590:function(t,e){t.exports=function(t,e,n){for(var i=n-1,o=t.length;++i<o;)if(t[i]===e)return i;return-1}},591:function(t,e){t.exports=function(){}},592:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){if(null===t)throw new Error("Callback was already called.");var e=t;t=null,e.apply(this,arguments)}},t.exports=e.default},593:function(t,e,n){"use strict";function i(){this.head=this.tail=null,this.length=0}function o(t,e){t.length=1,t.head=t.tail=e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,i.prototype.removeLink=function(t){return t.prev?t.prev.next=t.next:this.head=t.next,t.next?t.next.prev=t.prev:this.tail=t.prev,t.prev=t.next=null,this.length-=1,t},i.prototype.empty=function(){for(;this.head;)this.shift();return this},i.prototype.insertAfter=function(t,e){e.prev=t,e.next=t.next,t.next?t.next.prev=e:this.tail=e,t.next=e,this.length+=1},i.prototype.insertBefore=function(t,e){e.prev=t.prev,e.next=t,t.prev?t.prev.next=e:this.head=e,t.prev=e,this.length+=1},i.prototype.unshift=function(t){this.head?this.insertBefore(this.head,t):o(this,t)},i.prototype.push=function(t){this.tail?this.insertAfter(this.tail,t):o(this,t)},i.prototype.shift=function(){return this.head&&this.removeLink(this.head)},i.prototype.pop=function(){return this.tail&&this.removeLink(this.tail)},i.prototype.toArray=function(){for(var t=Array(this.length),e=this.head,n=0;n<this.length;n++)t[n]=e.data,e=e.next;return t},i.prototype.remove=function(t){for(var e=this.head;e;){var n=e.next;t(e)&&this.removeLink(e),e=n}return this},t.exports=e.default},594:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,o.default)(function(e,n){var o;try{o=t.apply(this,e)}catch(r){return n(r)}(0,i.default)(o)&&"function"===typeof o.then?o.then(function(t){s(n,null,t)},function(t){s(n,t.message?t:new Error(t))}):n(null,o)})};var i=a(n(573)),o=a(n(595)),r=a(n(575));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n){try{t(e,n)}catch(i){(0,r.default)(u,i)}}function u(t){throw t}t.exports=e.default},595:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=(0,r.default)(arguments),n=e.pop();t.call(this,e,n)}};var i,o=n(576),r=(i=o)&&i.__esModule?i:{default:i};t.exports=e.default},788:function(t,e,n){"use strict";var i=n(26),o=n(27),r=function(){function t(e,n,o){Object(i.a)(this,t),this.x=e,this.y=n,this.time=o||Date.now()}return Object(o.a)(t,[{key:"distanceTo",value:function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}},{key:"velocityFrom",value:function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}]),t}(),a=function(){function t(e,n,o,r,a,s){Object(i.a)(this,t),this.startPoint=e,this.control2=n,this.control1=o,this.endPoint=r,this.startWidth=a,this.endWidth=s}return Object(o.a)(t,[{key:"length",value:function(){for(var t,e,n=0,i=0;i<=10;i+=1){var o=i/10,r=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var s=r-t,u=a-e;n+=Math.sqrt(s*s+u*u)}t=r,e=a}return n}},{key:"point",value:function(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t}}],[{key:"fromPoints",value:function(e,n){var i=this.calculateControlPoints(e[0],e[1],e[2]).c2,o=this.calculateControlPoints(e[1],e[2],e[3]).c1;return new t(e[1],i,o,e[2],n.start,n.end)}},{key:"calculateControlPoints",value:function(t,e,n){var i=t.x-e.x,o=t.y-e.y,a=e.x-n.x,s=e.y-n.y,u=(t.x+e.x)/2,h=(t.y+e.y)/2,c=(e.x+n.x)/2,l=(e.y+n.y)/2,d=Math.sqrt(i*i+o*o),f=Math.sqrt(a*a+s*s),v=f/(d+f),p=c+(u-c)*v,y=l+(h-l)*v,_=e.x-p,m=e.y-y;return{c1:new r(u+_,h+m),c2:new r(c+_,l+m)}}}]),t}();var s=function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(i.a)(this,t),this.canvas=e,this.options=o,this._handleMouseDown=function(t){1===t.which&&(n._mouseButtonDown=!0,n._strokeBegin(t))},this._handleMouseMove=function(t){n._mouseButtonDown&&n._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(t))},this._handleTouchStart=function(t){if(t.preventDefault(),1===t.targetTouches.length){var e=t.changedTouches[0];n._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];n._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){if(t.target===n.canvas){t.preventDefault();var e=t.changedTouches[0];n._strokeEnd(e)}},this.velocityFilterWeight=o.velocityFilterWeight||.7,this.minWidth=o.minWidth||.5,this.maxWidth=o.maxWidth||2.5,this.throttle="throttle"in o?o.throttle:16,this.minDistance="minDistance"in o?o.minDistance:5,this.throttle?this._strokeMoveUpdate=function(t){var e,n,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=0,a=null,s=function(){r=Date.now(),a=null,e=t.apply(n,i),a||(n=null,i=[])};return function(){var u=Date.now(),h=o-(u-r);n=this;for(var c=arguments.length,l=new Array(c),d=0;d<c;d++)l[d]=arguments[d];return i=l,h<=0||h>o?(a&&(clearTimeout(a),a=null),r=u,e=t.apply(n,i),a||(n=null,i=[])):a||(a=window.setTimeout(s,h)),e}}(t.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=t.prototype._strokeUpdate,this.dotSize=o.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=o.penColor||"black",this.backgroundColor=o.backgroundColor||"rgba(0,0,0,0)",this.onBegin=o.onBegin,this.onEnd=o.onEnd,this._ctx=e.getContext("2d"),this.clear(),this.on()}return Object(o.a)(t,[{key:"clear",value:function(){var t=this._ctx,e=this.canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}},{key:"fromDataURL",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,o=new Image,r=n.ratio||window.devicePixelRatio||1,a=n.width||this.canvas.width/r,s=n.height||this.canvas.height/r;this._reset(),o.onload=function(){e._ctx.drawImage(o,0,0,a,s),i&&i()},o.onerror=function(t){i&&i(t)},o.src=t,this._isEmpty=!1}},{key:"toDataURL",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"image/png",e=arguments.length>1?arguments[1]:void 0;switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}},{key:"on",value:function(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}},{key:"off",value:function(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}},{key:"isEmpty",value:function(){return this._isEmpty}},{key:"fromData",value:function(t){var e=this;this.clear(),this._fromData(t,function(t){var n=t.color,i=t.curve;return e._drawCurve({color:n,curve:i})},function(t){var n=t.color,i=t.point;return e._drawDot({color:n,point:i})}),this._data=t}},{key:"toData",value:function(){return this._data}},{key:"_strokeBegin",value:function(t){var e={color:this.penColor,points:[]};this._data.push(e),this._reset(),this._strokeUpdate(t),"function"===typeof this.onBegin&&this.onBegin(t)}},{key:"_strokeUpdate",value:function(t){var e=t.clientX,n=t.clientY,i=this._createPoint(e,n),o=this._data[this._data.length-1],r=o.points,a=r.length>0&&r[r.length-1],s=!!a&&i.distanceTo(a)<=this.minDistance,u=o.color;if(!a||!a||!s){var h=this._addPoint(i);a?h&&this._drawCurve({color:u,curve:h}):this._drawDot({color:u,point:i}),r.push({time:i.time,x:i.x,y:i.y})}}},{key:"_strokeEnd",value:function(t){this._strokeUpdate(t),"function"===typeof this.onEnd&&this.onEnd(t)}},{key:"_handlePointerEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}},{key:"_handleMouseEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}},{key:"_handleTouchEvents",value:function(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}},{key:"_reset",value:function(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}},{key:"_createPoint",value:function(t,e){var n=this.canvas.getBoundingClientRect();return new r(t-n.left,e-n.top,(new Date).getTime())}},{key:"_addPoint",value:function(t){var e=this._lastPoints;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var n=this._calculateCurveWidths(e[1],e[2]),i=a.fromPoints(e,n);return e.shift(),i}return null}},{key:"_calculateCurveWidths",value:function(t,e){var n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(n),o={end:i,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=i,o}},{key:"_strokeWidth",value:function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}},{key:"_drawCurveSegment",value:function(t,e,n){var i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}},{key:"_drawCurve",value:function(t){var e=t.color,n=t.curve,i=this._ctx,o=n.endWidth-n.startWidth,r=2*Math.floor(n.length());i.beginPath(),i.fillStyle=e;for(var a=0;a<r;a+=1){var s=a/r,u=s*s,h=u*s,c=1-s,l=c*c,d=l*c,f=d*n.startPoint.x;f+=3*l*s*n.control1.x,f+=3*c*u*n.control2.x,f+=h*n.endPoint.x;var v=d*n.startPoint.y;v+=3*l*s*n.control1.y,v+=3*c*u*n.control2.y,v+=h*n.endPoint.y;var p=n.startWidth+h*o;this._drawCurveSegment(f,v,p)}i.closePath(),i.fill()}},{key:"_drawDot",value:function(t){var e=t.color,n=t.point,i=this._ctx,o="function"===typeof this.dotSize?this.dotSize():this.dotSize;i.beginPath(),this._drawCurveSegment(n.x,n.y,o),i.closePath(),i.fillStyle=e,i.fill()}},{key:"_fromData",value:function(t,e,n){var i=!0,o=!1,a=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var h=s.value,c=h.color,l=h.points;if(l.length>1)for(var d=0;d<l.length;d+=1){var f=l[d],v=new r(f.x,f.y,f.time);this.penColor=c,0===d&&this._reset();var p=this._addPoint(v);p&&e({color:c,curve:p})}else this._reset(),n({color:c,point:l[0]})}}catch(y){o=!0,a=y}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}}},{key:"_toSVG",value:function(){var t=this,e=this._data,n=Math.max(window.devicePixelRatio||1,1),i=this.canvas.width/n,o=this.canvas.height/n,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width",this.canvas.width.toString()),r.setAttribute("height",this.canvas.height.toString()),this._fromData(e,function(t){var e=t.color,n=t.curve,i=document.createElement("path");if(!isNaN(n.control1.x)&&!isNaN(n.control1.y)&&!isNaN(n.control2.x)&&!isNaN(n.control2.y)){var o="M ".concat(n.startPoint.x.toFixed(3),",").concat(n.startPoint.y.toFixed(3)," ")+"C ".concat(n.control1.x.toFixed(3),",").concat(n.control1.y.toFixed(3)," ")+"".concat(n.control2.x.toFixed(3),",").concat(n.control2.y.toFixed(3)," ")+"".concat(n.endPoint.x.toFixed(3),",").concat(n.endPoint.y.toFixed(3));i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*n.endWidth).toFixed(3)),i.setAttribute("stroke",e),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),r.appendChild(i)}},function(e){var n=e.color,i=e.point,o=document.createElement("circle"),a="function"===typeof t.dotSize?t.dotSize():t.dotSize;o.setAttribute("r",a.toString()),o.setAttribute("cx",i.x.toString()),o.setAttribute("cy",i.y.toString()),o.setAttribute("fill",n),r.appendChild(o)});var a='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+' viewBox="'.concat(0," ").concat(0," ").concat(i," ").concat(o,'"')+' width="'.concat(i,'"')+' height="'.concat(o,'"')+">",s=r.innerHTML;if(void 0===s){var u=document.createElement("dummy"),h=r.childNodes;u.innerHTML="";for(var c=0;c<h.length;c+=1)u.appendChild(h[c].cloneNode(!0));s=u.innerHTML}return"data:image/svg+xml;base64,"+btoa(a+s+"</svg>")}}]),t}();e.a=s}}]);
//# sourceMappingURL=6.1bb44242.chunk.js.map