import{u as f,aJ as E,o as r,r as c,j as e,aR as v,ai as j,q as y,s as u,aZ as M,a_ as A,B as P}from"./vendor-aceea9b8.js";import{P as w}from"./param-selector-27a871fd.js";import{E as m,am as h,an as C}from"./index-46dd6580.js";const O="rmg-bridge--",L={flexDirection:"column",h:"100%",p:2,"& > div:first-of-type":{m:0,"& > div":{h:"100%"}},"& > div:last-of-type":{mt:2,"& button:nth-of-type(2)":{mr:"auto"}}};function b(){const{t:a}=f(),[d]=E(),I=d.get("parentId"),l=d.get("parentComponent"),[R,p]=r.useState([]),[s,i]=r.useState(),o=r.useRef();r.useEffect(()=>{o.current=new BroadcastChannel(O+I),c.event(m.APP_CLIP_VIEW_OPENED,{parentComponent:l});const t=document.createElement("style");return t.textContent=".rmg-window__header{display: none;}",document.head.appendChild(t),p(h()),()=>{var n;(n=o.current)==null||n.close(),document.head.removeChild(t)}},[]);const S=()=>{var g;const t=window.localStorage.getItem(C.PARAM_CONFIG_BY_ID+s),n=window.localStorage.getItem(C.PARAM_BY_ID+s);(g=o.current)==null||g.postMessage({event:"IMPORT",meta:t?JSON.parse(t):null,data:n?JSON.parse(n):null}),c.event(m.APP_CLIP_VIEW_IMPORT,{parentComponent:l}),i(void 0)},_=()=>{var t;(t=o.current)==null||t.postMessage({event:"CLOSE"}),c.event(m.APP_CLIP_VIEW_CLOSED,{parentComponent:l}),i(void 0)},x=()=>{c.openApp("rmg")};return e.jsx(v,{children:e.jsxs(j,{sx:L,children:[e.jsx(w,{paramRegistry:R,selectedParam:s,onParamSelect:i}),e.jsxs(y,{children:[e.jsx(u,{variant:"ghost","aria-label":a("Manage"),title:a("Manage"),icon:e.jsx(M,{}),onClick:x}),e.jsx(u,{variant:"ghost","aria-label":a("Reload"),title:a("Reload"),icon:e.jsx(A,{}),onClick:()=>p(h())}),e.jsx(P,{onClick:_,children:a("Close")}),e.jsx(P,{colorScheme:"primary",isDisabled:!s,onClick:S,children:a("Import")})]})]})})}export{b as default};
