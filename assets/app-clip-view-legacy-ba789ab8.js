!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(s){u=!0,a=s}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./vendor-legacy-174365a5.js","./param-selector-legacy-33d5d484.js","./index-legacy-4018fcba.js"],(function(t,n){"use strict";var r,a,o,i,l,c,u,s,f,d,m,p,v,h,y,g;return{setters:[function(e){r=e.u,a=e.aJ,o=e.o,i=e.r,l=e.j,c=e.aR,u=e.ai,s=e.q,f=e.s,d=e.aZ,m=e.a_,p=e.B},function(e){v=e.P},function(e){h=e.E,y=e.am,g=e.an}],execute:function(){t("default",(function(){var t=r().t,j=e(a(),1)[0],I=j.get("parentId"),P=j.get("parentComponent"),_=e(o.useState([]),2),b=_[0],x=_[1],S=e(o.useState(),2),A=S[0],O=S[1],w=o.useRef();o.useEffect((function(){w.current=new BroadcastChannel(n+I),i.event(h.APP_CLIP_VIEW_OPENED,{parentComponent:P});var e=document.createElement("style");return e.textContent=".rmg-window__header{display: none;}",document.head.appendChild(e),x(y()),function(){var t;null===(t=w.current)||void 0===t||t.close(),document.head.removeChild(e)}}),[]);return l.jsx(c,{children:l.jsxs(u,{sx:C,children:[l.jsx(v,{paramRegistry:b,selectedParam:A,onParamSelect:O}),l.jsxs(s,{children:[l.jsx(f,{variant:"ghost","aria-label":t("Manage"),title:t("Manage"),icon:l.jsx(d,{}),onClick:function(){i.openApp("rmg")}}),l.jsx(f,{variant:"ghost","aria-label":t("Refresh"),title:t("Refresh"),icon:l.jsx(m,{}),onClick:function(){return x(y())}}),l.jsx(p,{onClick:function(){var e;null===(e=w.current)||void 0===e||e.postMessage({event:"CLOSE"}),i.event(h.APP_CLIP_VIEW_CLOSED,{parentComponent:P}),O(void 0)},children:t("Close")}),l.jsx(p,{colorScheme:"primary",isDisabled:!A,onClick:function(){var e,t=window.localStorage.getItem(g.PARAM_CONFIG_BY_ID+A),n=window.localStorage.getItem(g.PARAM_BY_ID+A);null===(e=w.current)||void 0===e||e.postMessage({event:"IMPORT",meta:t?JSON.parse(t):null,data:n?JSON.parse(n):null}),i.event(h.APP_CLIP_VIEW_IMPORT,{parentComponent:P}),O(void 0)},children:t("Import")})]})]})})}));var n="rmg-bridge--",C={flexDirection:"column",h:"100%",p:2,"& > div:first-of-type":{m:0,"& > div":{h:"100%"}},"& > div:last-of-type":{mt:2,"& button:nth-of-type(2)":{mr:"auto"}}}}}}))}();
