System.register(["./chakra-legacy-BHw8fK6i.js","./react-legacy-BKCxzMII.js","./index-legacy-REAZmiPy.js","./share-legacy-C_QcU02f.js","./mtr-legacy-DBUQppU0.js"],(function(t,e){"use strict";var s,r,n,a,i,l,c,h,o,g,d,m,f,x,p,u,j;return{setters:[t=>{s=t.j},t=>{r=t.r},t=>{n=t.aU,a=t.u,i=t.S,l=t.D,c=t.aV,h=t.aW},t=>{o=t.S,g=t.a,d=t.c,m=t.g,f=t.b},t=>{x=t.g,p=t.S,u=t.r,j=t.l}],execute:function(){const e=r.memo((function(){return s.jsx("rect",{fill:"var(--rmg-theme-colour)",height:20,style:{width:"var(--rmg-svg-width)",transform:"translateY(calc(var(--rmg-svg-height) - 20px))"}})})),v=["Vegur-Regular"],y=r.memo((function(t){const{num:e}=t;return s.jsxs(s.Fragment,{children:[s.jsx("circle",{cx:0,cy:0,r:60,fill:"var(--rmg-theme-colour)"}),s.jsx("text",{fontFamily:v.join(", "),dominantBaseline:"central",dy:0,textAnchor:"middle",fontSize:100,fill:"#fff",children:e})]})}),((t,e)=>t.num===e.num)),S=n.Destination;function w(){const{canvasScale:t}=a((t=>t.app)),{svgWidth:r,svg_height:n,theme:i}=a((t=>t.param)),l=r[S];return s.jsxs(o,{type:S,svgWidth:l,svgHeight:n,canvasScale:t,theme:i,children:[s.jsx(_,{}),s.jsx(e,{}),s.jsx(k,{})]})}const _=r.memo((function(){return s.jsx("defs",{children:s.jsx("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"})})})),k=()=>{const t=a((t=>t.helper.routes)),e=a((t=>t.param.svgWidth)),l=a((t=>t.param.direction)),c=a((t=>t.param.customiseMTRDest)),h=a((t=>t.param.platform_num)),o=a((t=>t.param.line_name)),g=a((t=>t.param.current_stn_idx)),d=a((t=>t.param.stn_list)),m=[...new Set(t.filter((t=>t.includes(g))).map((t=>t.filter((t=>!["linestart","lineend"].includes(t))).slice(l===i.left?0:-1)[0])).filter((t=>t!==g)))],f=0===m.length,x=!1!==c.terminal?c.terminal:[m.map((t=>d[t].name[0])).join("/"),m.map((t=>d[t].name[1])).join("/").replace("\\"," ")],p=r.useRef(null),[u,j]=r.useState({width:0});r.useEffect((()=>{p.current&&j(p.current.getBBox())}),[x.toString(),c.isLegacy]);const v=246+u.width+30+60,S=(e[n.Destination]-(l===i.left?1:-1)*v)/2,w=S+246*(l===i.left?1:-1),_=w+90*(l===i.left?1:-1);return s.jsxs("g",{style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 5px))"},children:[!f&&s.jsx("use",{xlinkHref:"#arrow",transform:`translate(${S},0)scale(0.8)rotate(${l===i.left?0:180})`,"data-testid":"mtr-arrow"}),s.jsx("g",{style:{transform:`translate(${f?"calc(var(--rmg-svg-width) / 2)":w},0)`},"data-testid":"mtr-platform",children:s.jsx(y,{num:h})}),!f&&s.jsxs("g",{ref:p,textAnchor:l===i.left?"start":"end",transform:`translate(${_},-25)`,fill:"var(--rmg-black)","data-testid":"mtr-destination",children:[s.jsx("text",{className:"rmg-name__zh",fontSize:72,letterSpacing:1.5,children:(c.isLegacy?o[0]:"")+"往"+x[0]}),s.jsx("text",{className:"rmg-name__en",fontSize:42,dy:66,children:(c.isLegacy?o[1]+" ":"")+"to "+x[1]})]})]})},M=r.memo((function(t){const{interchangeInfo:{theme:e,name:r,facility:n},isPassed:a,position:i,repel:h,repelOffset:o}=t,g=r[0].split("\\"),d=r[1].split("\\"),m=10*(g.length-1)+7*(d.length-1),f=(h===l.left?-1:h===l.right?1:0)*(o??3),x=i===c.LEFT||h===l.left?"end":i===c.RIGHT||h===l.right||n?"start":"middle",p={[c.LEFT]:{path:{rotate:90},use:{x:-32,y:-8},g:{x:(n?-42:-24)+f,y:6-(20+m-1)/2}},[c.RIGHT]:{path:{rotate:-90},use:{x:32,y:-8},g:{x:(n?42:24)+f,y:6-(20+m-1)/2}},[c.UP]:{path:{rotate:180},use:{x:0,y:-41},g:{x:(n?h===l.left?-14:h===l.right?14:10:0)+f,y:-36-m}},[c.DOWN]:{path:{rotate:0},use:{x:0,y:26},g:{x:(n?h===l.left?-14:h===l.right?14:10:0)+f,y:31}}}[i];return s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M0,0v17",strokeLinecap:"round",stroke:a?"var(--rmg-grey)":e?.[2],strokeWidth:8,transform:`rotate(${p.path.rotate})`}),n&&s.jsx("use",{xlinkHref:"#"+n,fill:a?"var(--rmg-grey)":"var(--rmg-black)",transform:`translate(${p.use.x},${p.use.y})scale(0.45)`}),s.jsxs("g",{textAnchor:x,transform:`translate(${p.g.x},${p.g.y})`,fill:a?"var(--rmg-grey)":"var(--rmg-black)",children:[g.map(((t,e)=>s.jsx("text",{dy:10*e,className:"rmg-name__zh",fontSize:10,children:t},e))),d.map(((t,e)=>s.jsx("text",{dy:10*g.length-1+6*e,className:"rmg-name__en",fontSize:6,children:t},g.length+e)))]})]})}),((t,e)=>JSON.stringify(t.interchangeInfo)===JSON.stringify(e.interchangeInfo)&&t.isPassed===e.isPassed&&t.position===e.position&&t.repel===e.repel));function O(t){const{length:e,isPassed:r,isReversed:n}=t;return s.jsx("path",{d:`M-8,0 v${e} a8,8 0 0,0 16,0 v-${e} a8,8 0 0,0 -16,0Z`,className:"rmg-stn__mtr",stroke:r?"var(--rmg-grey)":"var(--rmg-black)",transform:`scale(1,${n?-1:1})`})}function P(t){const{interchangeInfoList:e,direction:r,isPassed:n,isReversed:a,repel:i}=t,h=e.length<=1?0:18*e.length;return s.jsxs("g",{children:[1===e.length&&s.jsx(M,{interchangeInfo:e[0],isPassed:n,position:a?c.UP:c.DOWN,repel:i}),e.length>1&&e.map(((t,e)=>s.jsx("g",{transform:`translate(0,${a?-18*(e+1):18*(e+1)})`,children:s.jsx(M,{interchangeInfo:t,isPassed:n,position:r===l.right?c.RIGHT:c.LEFT})},e))),s.jsx(O,{length:h,isPassed:n,isReversed:a})]})}function b(t){const{interchangeGroup:{name:e,lines:r},direction:n,isPassed:a,isReversed:i,isTerminal:h}=t,o=e?.[1]?.split("\\")?.length??1,g=18*((r?.length||0)-1),d={x:h?0:1===r?.length?n===l.left?-13:13:n===l.left?13:-13,y:h?i?19:-28:(i?-9:9)*((r?.length||0)-1)-4-5*(o-1)};return s.jsxs("g",{children:[r?.map(((t,e,r)=>s.jsx("g",{transform:`translate(0,${i?-18*e:18*e})`,children:s.jsx(M,{interchangeInfo:t,isPassed:a,position:1===r.length?i?c.UP:c.DOWN:n===l.right?c.RIGHT:c.LEFT,repel:h?n:void 0,repelOffset:h&&1===r.length?-4:0})},e))),s.jsx(O,{length:g,isPassed:a,isReversed:i}),s.jsxs("g",{textAnchor:0===d.x?"middle":d.x>0?"start":"end",fill:a?"var(--rmg-grey)":"var(--rmg-black)",transform:`translate(${d.x},${d.y})`,children:[s.jsx("text",{className:"rmg-name__zh",fontSize:14,children:e?.[0]}),e?.[1]?.split("\\")?.map(((t,e)=>s.jsx("text",{className:"rmg-name__en",fontSize:8.5,dy:13+10*e,children:t},e)))]})]})}const N=["MyriadPro-Semibold","Vegur-Bold","GenYoMinTW-SB"],$=r.memo((function(t){const{stnName:e,onUpdate:n,align:a}=t,i=r.useRef(null),c=()=>{i.current&&n&&n(i.current.getBBox())};return r.useEffect((()=>{const t=new AbortController;return c(),document.fonts.load("12px "+N.join(", "),e.join("")).then().finally((()=>{setTimeout((()=>{t.signal.aborted||c()}),100)})),()=>{t.abort()}}),[e.toString(),a]),s.jsxs("g",{ref:i,textAnchor:(t=>{switch(t){case l.left:return"start";case l.right:return"end";default:return"middle"}})(a),children:[s.jsx("text",{className:"rmg-name__zh",fontSize:18,transform:"scale(1,0.97)",children:e[0]}),e[1].split("\\").map(((t,e)=>{return s.jsx("text",{className:"rmg-name__en",fontSize:10,dy:(r=e,16+10*r),children:t},e);var r}))]})}),((t,e)=>t.stnName.toString()===e.stnName.toString()&&t.align===e.align)),z=-10.8125,R=16-z+13.21875-8,L=14;function T(t){const{stationName:e,stationState:n,lower:a,align:i,facility:c,...o}=t,[g,d]=r.useState({x:0,width:0}),m=e[1].split("\\").length,f={g:{x:i?i===l.right?-3:3:0,y:(a?L-z:-L-z-R-11*(m-1))+(i?a?10:-10:0)},rect:{x:g.x-3+(c?i?i===l.right?-3-R:0:(R+5)/2-3-R:0),y:z-1,width:g.width+6+(c?R+3:0),height:R+2+11*(m-1)},use:{x:i?i===l.right?-(R+2)/2-g.width-3:(R+2)/2-2:-(g.width+3)/2,y:z-1+5.5*(m-1)},StationName:{x:c?i?i===l.right?0:R+3:(R+5)/2:0,y:0}};return s.jsx("g",{...o,children:s.jsxs("g",{fill:(t=>{switch(t){case h.PASSED:return"var(--rmg-grey)";case h.CURRENT:return"#fff";case h.FUTURE:return"var(--rmg-black)"}})(n),transform:`translate(${f.g.x},${f.g.y})`,children:[n===h.CURRENT&&s.jsx("rect",{x:f.rect.x,y:f.rect.y,width:f.rect.width,height:f.rect.height,fill:"var(--rmg-black)"}),c&&s.jsx("use",{xlinkHref:`#${c}`,fill:n===h.PASSED?"var(--rmg-grey)":"var(--rmg-black)",x:f.use.x,y:f.use.y}),s.jsx("g",{transform:`translate(${f.StationName.x},${f.StationName.y})`,children:s.jsx($,{stnName:e,onUpdate:d,align:i})})]})})}function F(t){const{stationId:e,stationState:r,isReversed:n}=t,{name:c,parents:o,children:g,transfer:{groups:d,tick_direc:m,paid_area:f},facility:x}=a((t=>t.param.stn_list[e])),p=d[0].lines?.length?o.includes("linestart")?l.left:g.includes("lineend")?l.right:void 0:void 0,u=!!d[1]?.lines?.length,j=u&&!p,v={scaleX:p===l.left?-1:1,scaleY:n?-1:1},y={x:p?p===l.left?-41:41:0,y:p?0:n?-26:26};return s.jsxs("g",{"data-testid":"station-icon-wrapper",children:[u&&s.jsx("path",{d:p&&d[0].lines?.length?"M0,0H41":"M0,0V26",strokeWidth:2.69,strokeDasharray:f?0:2.5,stroke:r===h.PASSED?"var(--rmg-grey)":"var(--rmg-black)",transform:`scale(${v.scaleX},${v.scaleY})`}),s.jsx(P,{interchangeInfoList:d[0].lines??[],direction:m===i.right?l.right:l.left,isPassed:r===h.PASSED,isReversed:j?!n:n,repel:j?m===i.right?l.right:l.left:void 0}),u&&s.jsx("g",{transform:`translate(${y.x},${y.y})`,children:s.jsx(b,{interchangeGroup:d[1],direction:p||(m===i.right?l.right:l.left),isPassed:r===h.PASSED,isReversed:p?!n:n,isTerminal:Boolean(p)})}),s.jsx(T,{stationName:c,stationState:r,facility:x,lower:n,align:d[0].lines?.length&&j?m===i.left?l.left:l.right:void 0})]})}const D=(t,e,{isStagger:s,isFlip:r})=>{if(!s)return r;let n;if(e[0].includes(t))n=e[0].indexOf(t)%2;else{const s=e.filter((e=>e.includes(t)))[0];n=(e[0].indexOf(s[0])+s.indexOf(t)+1)%2}return 0===n?r:!r},H=()=>{const{branches:t,routes:e,depsStr:i}=a((t=>t.helper)),{svgWidth:l,svg_height:c,y_pc:h,padding:o,branchSpacingPct:v,direction:y,namePosMTR:S,current_stn_idx:w,stn_list:_}=a((t=>t.param)),k=g(_,j,u),M=r.useMemo((()=>d("linestart","lineend",k)),[JSON.stringify(k)]),O=r.useMemo((()=>d(M.nodes[1],M.nodes.slice(-2)[0],k)),[JSON.stringify(k)]),P=r.useMemo((()=>(console.log("computing x shares"),Object.keys(_).reduce(((e,s)=>({...e,[s]:m(s,k,t)})),{}))),[t.toString(),JSON.stringify(k)]),b=[l[n.RailMap]*o/100,l[n.RailMap]*(1-o/100)],N=Object.keys(P).reduce(((t,e)=>({...t,[e]:b[0]+P[e]/O.len*(b[1]-b[0])})),{}),$=r.useMemo((()=>Object.keys(_).reduce(((e,s)=>({...e,[s]:x(s,t,_)*v*c/200})),{})),[i,v,c]),z=r.useMemo((()=>f(w,e,y)),[w,y,e.toString()]),R=Object.keys(_).reduce(((e,s)=>({...e,[s]:D(s,t,S)})),{}),L=p.drawLine(t,z,_,b,N,$,v*c/200,M);return s.jsxs("g",{id:"main",style:{"--y-percentage":h,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[s.jsx(E,{paths:L}),s.jsx(I,{xs:N,ys:$,stnStates:z,namePoss:R})]})},E=r.memo((function(t){return s.jsxs("g",{fill:"none",strokeWidth:9.68,children:[s.jsxs("g",{stroke:"var(--rmg-grey)",children:[t.paths.pass.map(((t,e)=>s.jsx("path",{d:t},e))),t.paths.sidingPass.map(((t,e)=>s.jsx("path",{d:t,strokeDasharray:4===t.match(/a/g)?.length?"10 4":void 0},e)))]}),s.jsxs("g",{stroke:"var(--rmg-theme-colour)",children:[t.paths.main.map(((t,e)=>s.jsx("path",{d:t},e))),t.paths.sidingMain.map(((t,e)=>s.jsx("path",{d:t,strokeDasharray:4===t.match(/a/g)?.length?"10 4":void 0},e)))]})]})}),((t,e)=>JSON.stringify(t.paths)===JSON.stringify(e.paths))),I=t=>{const{xs:e,ys:r,stnStates:n,namePoss:i}=t,l=a((t=>t.param.stn_list));return s.jsx("g",{id:"stn_icons",children:Object.keys(l).filter((t=>!["linestart","lineend"].includes(t))).map((t=>s.jsx("g",{style:{transform:`translate(${e[t]}px,${r[t]}px)`},children:s.jsx(F,{stationId:t,stationState:n[t],isReversed:i[t]})},t)))})};var W="#012639",A=function(){return A=Object.assign||function(t){for(var e,s=1,r=arguments.length;s<r;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},A.apply(this,arguments)};function B(t){return s.jsxs("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"-29.339 0 58.678 58.678",width:50,height:50,fill:W},t,{children:[s.jsx("path",{d:"M-29.35 0h58.7v58.7h-58.7z"}),s.jsx("path",{fill:"#fff",d:"M.007 6.745c1.711.013 3.111 2.532 3.111 4.24v10.338s17.106 15.435 17.358 15.666a1.145 1.145 0 0 1 .488 1.152v2.833c0 .65-.45.61-.695.467-.334-.12-17.15-8.863-17.15-8.863-.005 1.458-.798 9.006-1.327 13.304 0 0 4.61 2.457 4.7 2.52.333.269.351.36.351.853v2c0 .478-.352.429-.51.325L.64 49.659a2.56 2.56 0 0 0-.633-.127 2.317 2.317 0 0 0-.666.127s-5.477 1.859-5.672 1.92c-.185.105-.523.154-.523-.323v-2.001c0-.493.03-.584.367-.852.086-.064 4.678-2.521 4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304 0 0-16.822 8.744-17.148 8.863-.217.143-.69.184-.69-.467V38.14a1.162 1.162 0 0 1 .473-1.152c.276-.231 17.365-15.666 17.365-15.666V10.986c0-1.71 1.403-4.228 3.141-4.241"})]}))}var U=function(){return U=Object.assign||function(t){for(var e,s=1,r=arguments.length;s<r;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},U.apply(this,arguments)};function V(t){return s.jsxs("svg",U({xmlns:"http://www.w3.org/2000/svg",viewBox:"-29.339 0 58.678 58.678",width:50,height:50,fill:W},t,{children:[s.jsx("path",{d:"M-29.35 0h58.7v58.7h-58.7z"}),s.jsx("path",{fill:"#fff",d:"M16.646 7.984a9.802 9.802 0 0 0-9.8 9.801 9.7 9.7 0 0 0 .342 2.582c.002.026.002.055.002.093a.318.318 0 0 1-.315.318.677.677 0 0 1-.128-.02 15.715 15.715 0 0 0-13.498 0 .61.61 0 0 1-.122.02.318.318 0 0 1-.322-.318v-.067a9.626 9.626 0 0 0 .357-2.608 9.803 9.803 0 1 0-9.797 9.8 10.104 10.104 0 0 0 2.308-.27h.054a.311.311 0 0 1 .315.317.324.324 0 0 1-.02.12 15.726 15.726 0 1 0 29.704 7.216 15.837 15.837 0 0 0-1.746-7.23.184.184 0 0 1-.028-.106.316.316 0 0 1 .32-.318h.058a10.16 10.16 0 0 0 2.316.271 9.8 9.8 0 0 0 0-19.6"})]}))}var G=function(){return G=Object.assign||function(t){for(var e,s=1,r=arguments.length;s<r;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},G.apply(this,arguments)};function J(t){return s.jsxs("svg",G({xmlns:"http://www.w3.org/2000/svg",viewBox:"-29.339 0 58.678 58.678",width:50,height:50,fill:W},t,{children:[s.jsx("path",{d:"M-29.339 0h58.678v58.678h-58.678z"}),s.jsx("path",{fill:"#fff",d:"M-28.657 40.339 24.74 9.309l.493.847-53.398 31.03z"}),s.jsx("path",{fill:"#fff",d:"M-23.568 48.99c-2.174-3.894 2.57-10.526 4.85-13.725l.173-.248a83.008 83.008 0 0 1 7.393-9.285A97.384 97.384 0 0 1-.07 15.774C6.981 9.73 15.762 9.898 16.377 9.88l11.785-.957.276 17.42L16.911 36.93c-.36.394-5.553 5.863-18.102 11.035-6.752 2.783-11.877 4.146-15.66 4.146-3.301 0-5.561-1.049-6.717-3.12m51.682-19.377L3.087 58.31l3.156.199 22.002-28.076-.131-.819z"}),s.jsx("path",{d:"M19.708 11.63a.943.943 0 0 0-.175-.227c-.752-.937-2.988-1.259-5.933-.793a25.984 25.984 0 0 0-9.996 3.032 98.53 98.53 0 0 0-12.22 10.072c-3.176 3.487-4.646 6.388-3.623 7.584 1.84 2.166 13.753.716 22.007-6.066 9.035-7.42 10.718-11.577 9.94-13.602"}),s.jsx("path",{fill:"#fff",d:"M5.313 13.828c5.66-2.842 11.28-2.856 12.15-1.213.883 1.652-2.998 5.303-8.656 8.128-5.648 2.837-10.947 3.805-11.82 2.15-.873-1.64 2.668-6.237 8.326-9.065"}),s.jsx("path",{d:"M28.77 25.051C11.938 45.759-11.96 51.089-11.96 51.089c11-6.73 12.769-8.111 18.968-18.01 8.364-13.351 21.778-21.549 21.912-21.63 0 0-.068 13.5-.15 13.602"}),s.jsx("path",{fill:"#fff",d:"m-2.152 26.712 9.705-2.814a6.228 6.228 0 0 1-1.994 2.759 25.573 25.573 0 0 1-6.697 3.405 11.782 11.782 0 0 1-5.5.783Zm-7.598-.719a18.377 18.377 0 0 1 3.891-3.976 6.665 6.665 0 0 0-.309 2.213l-4.39 4.83a6.182 6.182 0 0 1 .808-3.067m3.567 32.318 34.307-31.565-.067-.889-35.814 32.75 1.574-.296zm37-45.935a68.678 68.678 0 0 0-12.602 9.542c-8.15 7.745-12.11 15.26-9.855 16.091 2.248.816 10.678-4.782 18.836-12.543a94.322 94.322 0 0 0 4.926-5.024Z"}),s.jsx("path",{d:"M33.737 11.843a40.87 40.87 0 0 0-10 7.096c-5.904 5.437-9.486 11.105-7.848 11.742 1.657.631 8.289-3.955 14.188-9.401a61.766 61.766 0 0 0 4.617-4.705ZM-16.66 42.956a9.87 9.87 0 0 0-5.754-1.895c-.113.22-.223.44-.33.662a9.45 9.45 0 0 1 5.695 1.75 6.279 6.279 0 0 1 2.61 6.304 10.165 10.165 0 0 1-.598 2.228c.238-.023.481-.053.725-.087.783-2.249 1.394-6.184-2.348-8.962"})]}))}var Y=function(){return Y=Object.assign||function(t){for(var e,s=1,r=arguments.length;s<r;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},Y.apply(this,arguments)};function C(t){return s.jsxs("svg",Y({xmlns:"http://www.w3.org/2000/svg",viewBox:"270.1 270.4 58.678 58.678",width:50,height:50,fill:W},t,{children:[s.jsx("path",{d:"M270.1 270.4h58.7v58.7h-58.7z"}),s.jsx("path",{fill:"#FFF",d:"m277.2 274.7 20.2 5.4v-1.5l-20.2-5.4zm24.2 6.5 20.3 5.4v-1.5l-20.3-5.4z"}),s.jsx("path",{fill:"#FFF",d:"M312.4 326c0 .1-.2.2-.3.2H311c-.2 0-.3-.1-.3-.3v-.1l.8-2.4h-23.9l.8 2.4v.1c0 .2-.1.3-.3.3H287c-.1 0-.3-.1-.3-.2l-3.8-13.9c-1-3.6-.3-8.2.4-10.5l4.7-14.9c.2-.8.5-.9.8-.9h1.2l-.4 1.2h8.7v-10.2c0-.2.2-.4.4-.4h1.8c.2 0 .4.2.4.4V287h8.7l-.4-1.2h1.2c.3 0 .6.1.8.9l4.7 14.9c.7 2.3 1.4 6.8.4 10.5l-3.9 13.9z"}),s.jsx("path",{d:"M288.4 289.9v19c0 .3-.2.5-.5.5h-4c-.3-3.2.4-6 1-8.3l3.5-11.2zm22.1 0v19c0 .3.2.5.5.5h4c.3-3.2-.4-6-1-8.3l-3.5-11.2zm-20.1 0h7.7c.3 0 .5.2.5.5v18.5c0 .3-.2.5-.5.5h-7.7c-.3 0-.5-.2-.5-.5v-18.5c0-.2.3-.5.5-.5m10.3 0h7.8c.3 0 .5.2.5.5v18.5c0 .3-.2.5-.5.5h-7.8c-.3 0-.5-.2-.5-.5v-18.5c0-.2.2-.5.5-.5"})]}))}const Z=n.RailMap;function X(){const{canvasScale:t}=a((t=>t.app)),{svgWidth:r,svg_height:n,theme:i}=a((t=>t.param)),l=r[Z];return s.jsxs(o,{type:Z,svgWidth:l,svgHeight:n,canvasScale:t,theme:i,children:[s.jsx(Q,{}),s.jsx(e,{}),s.jsx(H,{})]})}const q=34.03125,K={width:q,height:q,x:-17.015625,fill:void 0},Q=r.memo((function(){return s.jsxs("defs",{children:[s.jsx(B,{id:"airport",...K}),s.jsx(V,{id:"disney",...K}),s.jsx(J,{id:"hsr",...K}),s.jsx(C,{id:"np360",...K}),s.jsx("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})}));t("default",{destination:s.jsx(w,{}),railmap:s.jsx(X,{})}),t("mtrFonts",[...N,...v])}}}));
