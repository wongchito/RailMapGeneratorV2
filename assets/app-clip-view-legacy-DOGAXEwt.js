System.register(["./chakra-legacy-Di7w1ZhB.js","./index-legacy-ZM3xwLJd.js","./react-legacy-wexXEtdT.js","./param-selector-legacy-D9Z_t8nT.js"],(function(e,t){"use strict";var a,s,r,n,o,c,i,l,d,p,u,m,j,x,g,v,P,h,C,f;return{setters:[e=>{a=e.j,s=e.U,r=e.V,n=e.c,o=e.D,c=e.ao,i=e.a2,l=e.t},e=>{d=e.r,p=e.E,u=e.aM,m=e.a2,j=e.aS},e=>{x=e.u,g=e.s,v=e.a},e=>{P=e.c,h=e.P,C=e.e,f=e.u}],execute:function(){e("default",(function(){const{t:e}=x(),[y]=g(),E=y.get("parentId"),S=y.get("parentComponent"),[_,M]=v.useState([]),[b,R]=v.useState(),[k,z]=v.useState(!1),L=v.useRef();return v.useEffect((()=>(L.current=new BroadcastChannel(t+E),d.event(p.APP_CLIP_VIEW_OPENED,{parentComponent:S}),M(P()),()=>{L.current?.close()})),[]),a.jsxs(u,{children:[k&&a.jsxs(s,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[a.jsx(r,{}),e("Project selected is invalid or corrupted.")]}),a.jsx(n.div,{sx:I,children:a.jsx(h,{paramRegistry:_,selectedParam:b,onParamSelect:R})}),a.jsx(o,{}),a.jsxs(c,{p:2,children:[a.jsx(i,{variant:"ghost",size:"sm","aria-label":e("Manage"),title:e("Manage"),icon:a.jsx(m,{}),onClick:()=>{d.openApp({appId:"rmg"})}}),a.jsx(i,{variant:"ghost",size:"sm","aria-label":e("Reload"),title:e("Reload"),icon:a.jsx(j,{}),onClick:()=>M(P())}),a.jsx(l,{size:"sm",onClick:()=>{L.current?.postMessage({event:"CLOSE"}),d.event(p.APP_CLIP_VIEW_CLOSED,{parentComponent:S}),R(void 0),z(!1)},ml:"auto",children:e("Close")}),a.jsx(l,{size:"sm",colorScheme:"primary",isDisabled:!b,onClick:()=>{if(!b)return;const{config:e,param:t}=C(b);try{L.current?.postMessage({event:"IMPORT",meta:e,data:t?f(t):t}),d.event(p.APP_CLIP_VIEW_IMPORT,{parentComponent:S}),R(void 0),z(!1)}catch(a){console.error("Unable to update param",a),z(!0)}},children:e("Import")})]})]})}));const t="rmg-bridge--",I={overflow:"hidden",flex:1,px:2,pb:2,"& > div":{m:0,h:"100%","& > div":{h:"100%"}}}}}}));
