import{u as x,aJ as E,o,r as c,j as e,aR as v,ai as j,q as y,s as u,aZ as M,a_ as A,B as h}from"./vendor-85db9aa2.js";import{P as w}from"./param-selector-c6d4a284.js";import{E as m,am as P,an as C}from"./index-8b6c5005.js";const O="rmg-bridge--",L={flexDirection:"column",h:"100%",p:2,"& > div:first-of-type":{m:0,"& > div":{h:"100%"}},"& > div:last-of-type":{mt:2,"& button:nth-of-type(2)":{mr:"auto"}}};function b(){const{t:a}=x(),[d]=E(),I=d.get("parentId"),l=d.get("parentComponent"),[f,p]=o.useState([]),[n,i]=o.useState(),r=o.useRef();o.useEffect(()=>{r.current=new BroadcastChannel(O+I),c.event(m.APP_CLIP_VIEW_OPENED,{parentComponent:l});const t=document.createElement("style");return t.textContent=".rmg-window__header{display: none;}",document.head.appendChild(t),p(P()),()=>{var s;(s=r.current)==null||s.close(),document.head.removeChild(t)}},[]);const R=()=>{var g;const t=window.localStorage.getItem(C.PARAM_CONFIG_BY_ID+n),s=window.localStorage.getItem(C.PARAM_BY_ID+n);(g=r.current)==null||g.postMessage({event:"IMPORT",meta:t?JSON.parse(t):null,data:s?JSON.parse(s):null}),c.event(m.APP_CLIP_VIEW_IMPORT,{parentComponent:l}),i(void 0)},S=()=>{var t;(t=r.current)==null||t.postMessage({event:"CLOSE"}),c.event(m.APP_CLIP_VIEW_CLOSED,{parentComponent:l}),i(void 0)},_=()=>{c.openApp("rmg")};return e.jsx(v,{children:e.jsxs(j,{sx:L,children:[e.jsx(w,{paramRegistry:f,selectedParam:n,onParamSelect:i}),e.jsxs(y,{children:[e.jsx(u,{variant:"ghost","aria-label":a("Manage"),title:a("Manage"),icon:e.jsx(M,{}),onClick:_}),e.jsx(u,{variant:"ghost","aria-label":a("Refresh"),title:a("Refresh"),icon:e.jsx(A,{}),onClick:()=>p(P())}),e.jsx(h,{onClick:S,children:a("Close")}),e.jsx(h,{colorScheme:"primary",isDisabled:!n,onClick:R,children:a("Import")})]})]})})}export{b as default};
