import{j as t}from"./chakra-DWsU6AdI.js";import{r as j}from"./react-BkzPY0ae.js";import{aU as $,u as y,S as R,D as h,aV as _,aW as P}from"./index-D-S8OyuV.js";import{S as V,a as q,c as F,g as K,b as Q}from"./share-arcd0ih7.js";import{g as tt,S as et,r as nt,l as st}from"./mtr-DDI7GAek.js";const Y=j.memo(function(){return t.jsx("rect",{fill:"var(--rmg-theme-colour)",height:20,style:{width:"var(--rmg-svg-width)",transform:"translateY(calc(var(--rmg-svg-height) - 20px))"}})}),X=["Vegur-Regular"],rt=j.memo(function(e){const{num:n}=e;return t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:0,cy:0,r:60,fill:"var(--rmg-theme-colour)"}),t.jsx("text",{fontFamily:X.join(", "),dominantBaseline:"central",dy:0,textAnchor:"middle",fontSize:100,fill:"#fff",children:n})]})},(s,e)=>s.num===e.num),G=$.Destination;function at(){const{canvasScale:s}=y(i=>i.app),{svgWidth:e,svg_height:n,theme:r}=y(i=>i.param),a=e[G];return t.jsxs(V,{type:G,svgWidth:a,svgHeight:n,canvasScale:s,theme:r,children:[t.jsx(it,{}),t.jsx(Y,{}),t.jsx(ot,{})]})}const it=j.memo(function(){return t.jsx("defs",{children:t.jsx("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"})})}),ot=()=>{const s=y(l=>l.helper.routes),e=y(l=>l.param.svgWidth),n=y(l=>l.param.direction),r=y(l=>l.param.customiseMTRDest),a=y(l=>l.param.platform_num),i=y(l=>l.param.line_name),o=y(l=>l.param.current_stn_idx),g=y(l=>l.param.stn_list),m=[...new Set(s.filter(l=>l.includes(o)).map(l=>l.filter(O=>!["linestart","lineend"].includes(O)).slice(n===R.left?0:-1)[0]).filter(l=>l!==o))],d=m.length===0,f=r.terminal!==!1?r.terminal:[m.map(l=>g[l].name[0]).join("/"),m.map(l=>g[l].name[1]).join("/").replace("\\"," ")],c=j.useRef(null),[x,u]=j.useState({width:0});j.useEffect(()=>{c.current&&u(c.current.getBBox())},[f.toString(),r.isLegacy]);const S=246+x.width+30+60,p=(e[$.Destination]-(n===R.left?1:-1)*S)/2,v=p+(n===R.left?1:-1)*246,w=e.destination/2,k=v+(n===R.left?1:-1)*90;return t.jsxs("g",{style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 5px))"},children:[!d&&t.jsx("use",{xlinkHref:"#arrow",transform:"translate(".concat(p,",0)scale(0.8)rotate(").concat(n===R.left?0:180,")"),"data-testid":"mtr-arrow"}),t.jsx("g",{transform:"translate(".concat(d?w:v,",0)"),"data-testid":"mtr-platform",children:t.jsx(rt,{num:a})}),!d&&t.jsxs("g",{ref:c,textAnchor:n===R.left?"start":"end",transform:"translate(".concat(k,",-25)"),fill:"var(--rmg-black)","data-testid":"mtr-destination",children:[t.jsx("text",{className:"rmg-name__zh",fontSize:72,letterSpacing:1.5,children:(r.isLegacy?i[0]:"")+"往"+f[0]}),t.jsx("text",{className:"rmg-name__en",fontSize:42,dy:66,children:(r.isLegacy?i[1]+" ":"")+"to "+f[1]})]})]})};function ct(s){const{interchangeInfo:{theme:e,name:n,facility:r},isPassed:a,position:i,repel:o,repelOffset:g}=s,m=n[0].split("\\"),d=n[1].split("\\"),f=10*(m.length-1)+7*(d.length-1),c=(o===h.left?-1:o===h.right?1:0)*(g!=null?g:3),x=i===_.LEFT||o===h.left?"end":i===_.RIGHT||o===h.right||r?"start":"middle",u={[_.LEFT]:{path:{rotate:90},use:{x:-32,y:-8},g:{x:(r?-42:-24)+c,y:6-(20+f-1)/2}},[_.RIGHT]:{path:{rotate:-90},use:{x:32,y:-8},g:{x:(r?42:24)+c,y:6-(20+f-1)/2}},[_.UP]:{path:{rotate:180},use:{x:0,y:-41},g:{x:(r?o===h.left?-14:o===h.right?14:10:0)+c,y:-36-f}},[_.DOWN]:{path:{rotate:0},use:{x:0,y:26},g:{x:(r?o===h.left?-14:o===h.right?14:10:0)+c,y:31}}}[i];return t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M0,0v17",strokeLinecap:"round",stroke:a?"var(--rmg-grey)":e==null?void 0:e[2],strokeWidth:8,transform:"rotate(".concat(u.path.rotate,")")}),r&&t.jsx("use",{xlinkHref:"#"+r,fill:a?"var(--rmg-grey)":"var(--rmg-black)",transform:"translate(".concat(u.use.x,",").concat(u.use.y,")scale(0.45)")}),t.jsxs("g",{textAnchor:x,transform:"translate(".concat(u.g.x,",").concat(u.g.y,")"),fill:a?"var(--rmg-grey)":"var(--rmg-black)",children:[m.map((S,p)=>t.jsx("text",{dy:10*p,className:"rmg-name__zh",fontSize:10,children:S},p)),d.map((S,p)=>t.jsx("text",{dy:m.length*10-1+6*p,className:"rmg-name__en",fontSize:6,children:S},m.length+p))]})]})}const A=j.memo(ct,(s,e)=>JSON.stringify(s.interchangeInfo)===JSON.stringify(e.interchangeInfo)&&s.isPassed===e.isPassed&&s.position===e.position&&s.repel===e.repel);function J(s){const{length:e,isPassed:n,isReversed:r}=s;return t.jsx("path",{d:"M-8,0 v".concat(e," a8,8 0 0,0 16,0 v-").concat(e," a8,8 0 0,0 -16,0Z"),className:"rmg-stn__mtr",stroke:n?"var(--rmg-grey)":"var(--rmg-black)",transform:"scale(1,".concat(r?-1:1,")")})}function lt(s){const{interchangeInfoList:e,direction:n,isPassed:r,isReversed:a,repel:i}=s,o=e.length<=1?0:18*e.length;return t.jsxs("g",{children:[e.length===1&&t.jsx(A,{interchangeInfo:e[0],isPassed:r,position:a?_.UP:_.DOWN,repel:i}),e.length>1&&e.map((g,m)=>t.jsx("g",{transform:"translate(0,".concat(a?-18*(m+1):18*(m+1),")"),children:t.jsx(A,{interchangeInfo:g,isPassed:r,position:n===h.right?_.RIGHT:_.LEFT})},m)),t.jsx(J,{length:o,isPassed:r,isReversed:a})]})}function ht(s){var f,c,x,u,S;const{interchangeGroup:{name:e,lines:n},direction:r,isPassed:a,isReversed:i,isTerminal:o}=s,g=(x=(c=(f=e==null?void 0:e[1])==null?void 0:f.split("\\"))==null?void 0:c.length)!=null?x:1,m=18*(((n==null?void 0:n.length)||0)-1),d={name:{x:o?0:(n==null?void 0:n.length)===1?r===h.left?-13:13:r===h.left?13:-13,y:o?i?19:-28:-4+(i?-9:9)*(((n==null?void 0:n.length)||0)-1)-5*(g-1)}};return t.jsxs("g",{children:[n==null?void 0:n.map((p,v,w)=>t.jsx("g",{transform:"translate(0,".concat(i?-18*v:18*v,")"),children:t.jsx(A,{interchangeInfo:p,isPassed:a,position:w.length===1?i?_.UP:_.DOWN:r===h.right?_.RIGHT:_.LEFT,repel:o?r:void 0,repelOffset:o&&w.length===1?-4:0})},v)),t.jsx(J,{length:m,isPassed:a,isReversed:i}),t.jsxs("g",{textAnchor:d.name.x===0?"middle":d.name.x>0?"start":"end",fill:a?"var(--rmg-grey)":"var(--rmg-black)",transform:"translate(".concat(d.name.x,",").concat(d.name.y,")"),children:[t.jsx("text",{className:"rmg-name__zh",fontSize:14,children:e==null?void 0:e[0]}),(S=(u=e==null?void 0:e[1])==null?void 0:u.split("\\"))==null?void 0:S.map((p,v)=>t.jsx("text",{className:"rmg-name__en",fontSize:8.5,dy:13+10*v,children:p},v))]})]})}const Z=["MyriadPro-Semibold","Vegur-Bold","GenYoMinTW-SB"],gt=j.memo(function(e){const{stnName:n,onUpdate:r,align:a}=e,i=j.useRef(null),o=()=>{i.current&&r&&r(i.current.getBBox())};j.useEffect(()=>{const d=new AbortController;return o(),document.fonts.load("12px "+Z.join(", "),n.join("")).then().finally(()=>{setTimeout(()=>{d.signal.aborted||o()},100)}),()=>{d.abort()}},[n.toString(),a]);const g=d=>{switch(d){case h.left:return"start";case h.right:return"end";default:return"middle"}},m=d=>16+10*d;return t.jsxs("g",{ref:i,textAnchor:g(a),children:[t.jsx("text",{className:"rmg-name__zh",fontSize:18,transform:"scale(1,0.97)",children:n[0]}),n[1].split("\\").map((d,f)=>t.jsx("text",{className:"rmg-name__en",fontSize:10,dy:m(f),children:d},f))]})},(s,e)=>s.stnName.toString()===e.stnName.toString()&&s.align===e.align),b=-10.8125,mt=-8,dt=13.21875,ft=16,T=-b+ft+dt+mt,C=14;function xt(s){const{stationName:e,stationState:n,lower:r,align:a,facility:i,...o}=s,[g,m]=j.useState({x:0,width:0}),d=x=>{switch(x){case P.PASSED:return"var(--rmg-grey)";case P.CURRENT:return"#fff";case P.FUTURE:return"var(--rmg-black)"}},f=e[1].split("\\").length,c={g:{x:a?a===h.right?-3:3:0,y:(r?C-b:-C-b-T-11*(f-1))+(a?r?10:-10:0)},rect:{x:g.x-3+(i?a?a===h.right?-3-T:0:(T+5)/2-3-T:0),y:b-1,width:g.width+6+(i?T+3:0),height:T+2+11*(f-1)},use:{x:a?a===h.right?-(T+2)/2-g.width-3:(T+2)/2-2:-(g.width+3)/2,y:b-1+5.5*(f-1)},StationName:{x:i?a?a===h.right?0:T+3:(T+5)/2:0,y:0}};return t.jsx("g",{...o,children:t.jsxs("g",{fill:d(n),transform:"translate(".concat(c.g.x,",").concat(c.g.y,")"),children:[n===P.CURRENT&&t.jsx("rect",{x:c.rect.x,y:c.rect.y,width:c.rect.width,height:c.rect.height,fill:"var(--rmg-black)"}),i&&t.jsx("use",{xlinkHref:"#".concat(i),fill:n===P.PASSED?"var(--rmg-grey)":"var(--rmg-black)",x:c.use.x,y:c.use.y}),t.jsx("g",{transform:"translate(".concat(c.StationName.x,",").concat(c.StationName.y,")"),children:t.jsx(gt,{stnName:e,onUpdate:m,align:a})})]})})}function ut(s){var p,v,w,k,l,O;const{stationId:e,stationState:n,isReversed:r}=s,{name:a,parents:i,children:o,transfer:{groups:g,tick_direc:m,paid_area:d},facility:f}=y(D=>D.param.stn_list[e]),c=(p=g[0].lines)!=null&&p.length?i.includes("linestart")?h.left:o.includes("lineend")?h.right:void 0:void 0,x=!!((w=(v=g[1])==null?void 0:v.lines)!=null&&w.length),u=x&&!c,S={link:{scaleX:c===h.left?-1:1,scaleY:r?-1:1},osi:{x:c?c===h.left?-41:41:0,y:c?0:r?-26:26}};return t.jsxs("g",{"data-testid":"station-icon-wrapper",children:[x&&t.jsx("path",{d:c&&((k=g[0].lines)!=null&&k.length)?"M0,0H41":"M0,0V26",strokeWidth:2.69,strokeDasharray:d?0:2.5,stroke:n===P.PASSED?"var(--rmg-grey)":"var(--rmg-black)",transform:"scale(".concat(S.link.scaleX,",").concat(S.link.scaleY,")")}),t.jsx(lt,{interchangeInfoList:(l=g[0].lines)!=null?l:[],direction:m===R.right?h.right:h.left,isPassed:n===P.PASSED,isReversed:u?!r:r,repel:u?m===R.right?h.right:h.left:void 0}),x&&t.jsx("g",{transform:"translate(".concat(S.osi.x,",").concat(S.osi.y,")"),children:t.jsx(ht,{interchangeGroup:g[1],direction:c||(m===R.right?h.right:h.left),isPassed:n===P.PASSED,isReversed:c?!r:r,isTerminal:!!c})}),t.jsx(xt,{stationName:a,stationState:n,facility:f,lower:r,align:(O=g[0].lines)!=null&&O.length&&u?m===R.left?h.left:h.right:void 0})]})}const pt=(s,e,{isStagger:n,isFlip:r})=>{if(!n)return r;let a;if(e[0].includes(s))a=e[0].indexOf(s)%2;else{const i=e.filter(o=>o.includes(s))[0];a=(e[0].indexOf(i[0])+i.indexOf(s)+1)%2}return a===0?r:!r},jt=()=>{const{branches:s,routes:e,depsStr:n}=y(N=>N.helper),{svgWidth:r,svg_height:a,y_pc:i,padding:o,branchSpacingPct:g,direction:m,namePosMTR:d,current_stn_idx:f,stn_list:c}=y(N=>N.param),x=q(c,st,nt),u=j.useMemo(()=>F("linestart","lineend",x),[JSON.stringify(x)]),S=j.useMemo(()=>F(u.nodes[1],u.nodes.slice(-2)[0],x),[JSON.stringify(x)]),p=j.useMemo(()=>(console.log("computing x shares"),Object.keys(c).reduce((N,M)=>({...N,[M]:K(M,x,s)}),{})),[s.toString(),JSON.stringify(x)]),v=[r[$.RailMap]*o/100,r[$.RailMap]*(1-o/100)],w=Object.keys(p).reduce((N,M)=>({...N,[M]:v[0]+p[M]/S.len*(v[1]-v[0])}),{}),k=j.useMemo(()=>Object.keys(c).reduce((N,M)=>({...N,[M]:tt(M,s,c)*g*a/200}),{}),[n,g,a]),l=j.useMemo(()=>Q(f,e,m),[f,m,e.toString()]),O=Object.keys(c).reduce((N,M)=>({...N,[M]:pt(M,s,d)}),{}),D=et.drawLine(s,l,c,v,w,k,g*a/200,u);return t.jsxs("g",{id:"main",style:{"--y-percentage":i,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[t.jsx(vt,{paths:D}),t.jsx(yt,{xs:w,ys:k,stnStates:l,namePoss:O})]})},vt=j.memo(function(e){return t.jsxs("g",{fill:"none",strokeWidth:9.68,children:[t.jsxs("g",{stroke:"var(--rmg-grey)",children:[e.paths.pass.map((n,r)=>t.jsx("path",{d:n},r)),e.paths.sidingPass.map((n,r)=>{var a;return t.jsx("path",{d:n,strokeDasharray:((a=n.match(/a/g))==null?void 0:a.length)===4?"10 4":void 0},r)})]}),t.jsxs("g",{stroke:"var(--rmg-theme-colour)",children:[e.paths.main.map((n,r)=>t.jsx("path",{d:n},r)),e.paths.sidingMain.map((n,r)=>{var a;return t.jsx("path",{d:n,strokeDasharray:((a=n.match(/a/g))==null?void 0:a.length)===4?"10 4":void 0},r)})]})]})},(s,e)=>JSON.stringify(s.paths)===JSON.stringify(e.paths)),yt=s=>{const{xs:e,ys:n,stnStates:r,namePoss:a}=s,i=y(o=>o.param.stn_list);return t.jsx("g",{id:"stn_icons",children:Object.keys(i).filter(o=>!["linestart","lineend"].includes(o)).map(o=>t.jsx("g",{style:{transform:"translate(".concat(e[o],"px,").concat(n[o],"px)")},children:t.jsx(ut,{stationId:o,stationState:r[o],isReversed:a[o]})},o))})};var L="#012639",H=function(){return H=Object.assign||function(s){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])}return s},H.apply(this,arguments)};function St(s){return t.jsxs("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"-29.339 0 58.678 58.678",width:50,height:50,fill:L},s,{children:[t.jsx("path",{d:"M-29.35 0h58.7v58.7h-58.7z"}),t.jsx("path",{fill:"#fff",d:"M.007 6.745c1.711.013 3.111 2.532 3.111 4.24v10.338s17.106 15.435 17.358 15.666a1.145 1.145 0 0 1 .488 1.152v2.833c0 .65-.45.61-.695.467-.334-.12-17.15-8.863-17.15-8.863-.005 1.458-.798 9.006-1.327 13.304 0 0 4.61 2.457 4.7 2.52.333.269.351.36.351.853v2c0 .478-.352.429-.51.325L.64 49.659a2.56 2.56 0 0 0-.633-.127 2.317 2.317 0 0 0-.666.127s-5.477 1.859-5.672 1.92c-.185.105-.523.154-.523-.323v-2.001c0-.493.03-.584.367-.852.086-.064 4.678-2.521 4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304 0 0-16.822 8.744-17.148 8.863-.217.143-.69.184-.69-.467V38.14a1.162 1.162 0 0 1 .473-1.152c.276-.231 17.365-15.666 17.365-15.666V10.986c0-1.71 1.403-4.228 3.141-4.241"})]}))}var I=function(){return I=Object.assign||function(s){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])}return s},I.apply(this,arguments)};function _t(s){return t.jsxs("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"-29.339 0 58.678 58.678",width:50,height:50,fill:L},s,{children:[t.jsx("path",{d:"M-29.35 0h58.7v58.7h-58.7z"}),t.jsx("path",{fill:"#fff",d:"M16.646 7.984a9.802 9.802 0 0 0-9.8 9.801 9.7 9.7 0 0 0 .342 2.582c.002.026.002.055.002.093a.318.318 0 0 1-.315.318.677.677 0 0 1-.128-.02 15.715 15.715 0 0 0-13.498 0 .61.61 0 0 1-.122.02.318.318 0 0 1-.322-.318v-.067a9.626 9.626 0 0 0 .357-2.608 9.803 9.803 0 1 0-9.797 9.8 10.104 10.104 0 0 0 2.308-.27h.054a.311.311 0 0 1 .315.317.324.324 0 0 1-.02.12 15.726 15.726 0 1 0 29.704 7.216 15.837 15.837 0 0 0-1.746-7.23.184.184 0 0 1-.028-.106.316.316 0 0 1 .32-.318h.058a10.16 10.16 0 0 0 2.316.271 9.8 9.8 0 0 0 0-19.6"})]}))}var W=function(){return W=Object.assign||function(s){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])}return s},W.apply(this,arguments)};function Nt(s){return t.jsxs("svg",W({xmlns:"http://www.w3.org/2000/svg",viewBox:"-29.339 0 58.678 58.678",width:50,height:50,fill:L},s,{children:[t.jsx("path",{d:"M-29.339 0h58.678v58.678h-58.678z"}),t.jsx("path",{fill:"#fff",d:"M-28.657 40.339 24.74 9.309l.493.847-53.398 31.03z"}),t.jsx("path",{fill:"#fff",d:"M-23.568 48.99c-2.174-3.894 2.57-10.526 4.85-13.725l.173-.248a83.008 83.008 0 0 1 7.393-9.285A97.384 97.384 0 0 1-.07 15.774C6.981 9.73 15.762 9.898 16.377 9.88l11.785-.957.276 17.42L16.911 36.93c-.36.394-5.553 5.863-18.102 11.035-6.752 2.783-11.877 4.146-15.66 4.146-3.301 0-5.561-1.049-6.717-3.12m51.682-19.377L3.087 58.31l3.156.199 22.002-28.076-.131-.819z"}),t.jsx("path",{d:"M19.708 11.63a.943.943 0 0 0-.175-.227c-.752-.937-2.988-1.259-5.933-.793a25.984 25.984 0 0 0-9.996 3.032 98.53 98.53 0 0 0-12.22 10.072c-3.176 3.487-4.646 6.388-3.623 7.584 1.84 2.166 13.753.716 22.007-6.066 9.035-7.42 10.718-11.577 9.94-13.602"}),t.jsx("path",{fill:"#fff",d:"M5.313 13.828c5.66-2.842 11.28-2.856 12.15-1.213.883 1.652-2.998 5.303-8.656 8.128-5.648 2.837-10.947 3.805-11.82 2.15-.873-1.64 2.668-6.237 8.326-9.065"}),t.jsx("path",{d:"M28.77 25.051C11.938 45.759-11.96 51.089-11.96 51.089c11-6.73 12.769-8.111 18.968-18.01 8.364-13.351 21.778-21.549 21.912-21.63 0 0-.068 13.5-.15 13.602"}),t.jsx("path",{fill:"#fff",d:"m-2.152 26.712 9.705-2.814a6.228 6.228 0 0 1-1.994 2.759 25.573 25.573 0 0 1-6.697 3.405 11.782 11.782 0 0 1-5.5.783Zm-7.598-.719a18.377 18.377 0 0 1 3.891-3.976 6.665 6.665 0 0 0-.309 2.213l-4.39 4.83a6.182 6.182 0 0 1 .808-3.067m3.567 32.318 34.307-31.565-.067-.889-35.814 32.75 1.574-.296zm37-45.935a68.678 68.678 0 0 0-12.602 9.542c-8.15 7.745-12.11 15.26-9.855 16.091 2.248.816 10.678-4.782 18.836-12.543a94.322 94.322 0 0 0 4.926-5.024Z"}),t.jsx("path",{d:"M33.737 11.843a40.87 40.87 0 0 0-10 7.096c-5.904 5.437-9.486 11.105-7.848 11.742 1.657.631 8.289-3.955 14.188-9.401a61.766 61.766 0 0 0 4.617-4.705ZM-16.66 42.956a9.87 9.87 0 0 0-5.754-1.895c-.113.22-.223.44-.33.662a9.45 9.45 0 0 1 5.695 1.75 6.279 6.279 0 0 1 2.61 6.304 10.165 10.165 0 0 1-.598 2.228c.238-.023.481-.053.725-.087.783-2.249 1.394-6.184-2.348-8.962"})]}))}var B=function(){return B=Object.assign||function(s){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])}return s},B.apply(this,arguments)};function Mt(s){return t.jsxs("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"270.1 270.4 58.678 58.678",width:50,height:50,fill:L},s,{children:[t.jsx("path",{d:"M270.1 270.4h58.7v58.7h-58.7z"}),t.jsx("path",{fill:"#FFF",d:"m277.2 274.7 20.2 5.4v-1.5l-20.2-5.4zm24.2 6.5 20.3 5.4v-1.5l-20.3-5.4z"}),t.jsx("path",{fill:"#FFF",d:"M312.4 326c0 .1-.2.2-.3.2H311c-.2 0-.3-.1-.3-.3v-.1l.8-2.4h-23.9l.8 2.4v.1c0 .2-.1.3-.3.3H287c-.1 0-.3-.1-.3-.2l-3.8-13.9c-1-3.6-.3-8.2.4-10.5l4.7-14.9c.2-.8.5-.9.8-.9h1.2l-.4 1.2h8.7v-10.2c0-.2.2-.4.4-.4h1.8c.2 0 .4.2.4.4V287h8.7l-.4-1.2h1.2c.3 0 .6.1.8.9l4.7 14.9c.7 2.3 1.4 6.8.4 10.5l-3.9 13.9z"}),t.jsx("path",{d:"M288.4 289.9v19c0 .3-.2.5-.5.5h-4c-.3-3.2.4-6 1-8.3l3.5-11.2zm22.1 0v19c0 .3.2.5.5.5h4c.3-3.2-.4-6-1-8.3l-3.5-11.2zm-20.1 0h7.7c.3 0 .5.2.5.5v18.5c0 .3-.2.5-.5.5h-7.7c-.3 0-.5-.2-.5-.5v-18.5c0-.2.3-.5.5-.5m10.3 0h7.8c.3 0 .5.2.5.5v18.5c0 .3-.2.5-.5.5h-7.8c-.3 0-.5-.2-.5-.5v-18.5c0-.2.2-.5.5-.5"})]}))}const U=$.RailMap;function wt(){const{canvasScale:s}=y(i=>i.app),{svgWidth:e,svg_height:n,theme:r}=y(i=>i.param),a=e[U];return t.jsxs(V,{type:U,svgWidth:a,svgHeight:n,canvasScale:s,theme:r,children:[t.jsx(Tt,{}),t.jsx(Y,{}),t.jsx(jt,{})]})}const z=34.03125,E={width:z,height:z,x:-z/2,fill:void 0},Tt=j.memo(function(){return t.jsxs("defs",{children:[t.jsx(St,{id:"airport",...E}),t.jsx(_t,{id:"disney",...E}),t.jsx(Nt,{id:"hsr",...E}),t.jsx(Mt,{id:"np360",...E}),t.jsx("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})}),$t={destination:t.jsx(at,{}),railmap:t.jsx(wt,{})},Et=[...Z,...X];export{$t as default,Et as mtrFonts};
