import{j as n}from"./chakra-BQCjpw4m.js";import{a as d}from"./react-CMFWkwMo.js";import{h as P,aW as I,u as S,m as he,S as p,aP as B,P as $}from"./index-BkeaDgRh.js";import{a as fe,c as N,b as xe,d as ge}from"./share-CtvGGFv1.js";import{S as se}from"./svg-wrapper-BcHbeKjr.js";import{i as ye}from"./param-selector-DPQNh1Bq.js";function _e(e){const{num:t,inStrip:a,...r}=e;return n.jsxs("g",{textAnchor:"middle",fill:a?P.black:"var(--rmg-theme-fg)",...r,children:[n.jsx("rect",{height:40,width:40,rx:4,x:-20,fill:a?"#fff":"var(--rmg-theme-colour)"}),n.jsx("text",{className:"rmg-name__en",fontSize:20,dy:12,children:t}),n.jsx("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"屏蔽门"}),n.jsx("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]})}const ie=e=>{const t=(s=>{switch(s){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}})(e.variant),a=d.useMemo(()=>{switch(e.variant){case"gz1":return n.jsx("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return n.jsx("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return n.jsx("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return n.jsx("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return n.jsx("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return n.jsx("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return n.jsx("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return n.jsx("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return n.jsx(n.Fragment,{})}},[e.variant]);return n.jsxs("g",{transform:"translate(0,".concat(e.variant==="gz4"?-20:0,")"),children:[n.jsx("rect",{id:"strip_gz",style:{"--height":"".concat(t,"px")}}),n.jsx("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:e.isShowLight&&a}),e.isShowPSD!==!1&&n.jsx(je,{...e})]})},je=d.memo(function(t){const a=["gz28","gz2otis","gz6","gzgf"].includes(t.variant),r=(s=>{switch(s){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}})(t.variant);return n.jsx(_e,{num:t.isShowPSD,inStrip:a,style:{"--psd-dy":r,transform:"translate(var(--translate-x), var(--translate-y))","--translate-x":"calc(var(--rmg-svg-width) / 2 + 80px)","--translate-y":"calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"}})},(e,t)=>e.variant===t.variant&&e.isShowPSD===t.isShowPSD);var oe=1.3,le=18.5;var L=45,O=L-3,ce=function(e,t){var a=[e,t].map(function(r){return r.match(/^(\w+).+$/)});if(a[0]&&a[1]&&a[0][1]===a[1][1])return a[0][1]},U=function(e){var t=e.match(/^(\d+)\D+$/);return t==null?void 0:t[1]},F=function(){return F=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},F.apply(this,arguments)},pe=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};function H(e){var t=e.customWidth,a=pe(e,["customWidth"]),r=(t!=null?t:L)-L;return n.jsx("rect",F({x:-22.5-r/2,height:24,width:t!=null?t:L,rx:4.5},a,{"data-testid":"intBox"}))}var ve=function(e,t){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var r=a.call(e),s,i=[],o;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(a=r.return)&&a.call(r)}finally{if(o)throw o.error}}return i},Ne=function(e,t){var a=U(e);if(a)return{isDigit:!0,spanningPart:a};var r=ce(e,t);return r?{isDigit:!1,spanningPart:r}:{isDigit:!1,spanningPart:""}};function q(e){var t=e.zhName,a=e.enName,r=e.foregroundColour,s=e.backgroundColour,i=e.zhClassName,o=e.enClassName,c=e.passed,m=Ne(t,a),l=m.isDigit,u=m.spanningPart,f=d.useRef(null),x=ve(d.useState({x:0,height:0,width:0}),2),y=x[0],h=x[1];d.useEffect(function(){f.current&&h(f.current.getBBox())},[t,a]);var g=O/Math.max(O,y.width),_=(-y.x-y.width/2)*g,j=y.height*(1-g)/2;return n.jsxs("g",{textAnchor:"middle",fill:c?P.white:r,children:[n.jsx(H,{fill:c?"#aaa":s}),n.jsx("g",{ref:f,transform:"translate(".concat(_,",").concat(j,")scale(").concat(g,")"),children:n.jsxs("text",{className:i,fontSize:21,x:-1,y:12,textAnchor:"end",dominantBaseline:"central",children:[u,n.jsx("tspan",{className:i,fontSize:10,x:0,dy:-4,textAnchor:"start",dominantBaseline:"central",children:t.slice(u.length).trim()}),n.jsx("tspan",{className:o,fontSize:6.5,letterSpacing:-.1,x:0,dy:10,textAnchor:"start",dominantBaseline:"middle",children:l?a:a.slice(u.length).trim()})]})})]})}var K=function(e,t){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var r=a.call(e),s,i=[],o;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(a=r.return)&&a.call(r)}finally{if(o)throw o.error}}return i};function Se(e){var t,a=e.zhName,r=e.enName,s=e.foregroundColour,i=e.backgroundColour,o=e.zhClassName,c=e.enClassName,m=e.passed,l=(t=U(a))!==null&&t!==void 0?t:"",u=d.useRef(null),f=d.useRef(null),x=K(d.useState({width:0}),2),y=x[0],h=x[1],g=K(d.useState({width:0}),2),_=g[0],j=g[1];d.useEffect(function(){u.current&&h(u.current.getBBox()),f.current&&j(f.current.getBBox())},[a,r]);var v=O/Math.max(O,y.width),b=O/Math.max(O,_.width),E={nameZh:{y:7.3+13.5*(1-v)*v/2},nameEn:{y:19.5-9*(1-b)*b/2}};return n.jsxs("g",{textAnchor:"middle",fill:m?P.white:s,children:[n.jsx(H,{fill:m?"#aaa":i}),n.jsxs("text",{ref:u,className:o,fontSize:12,transform:"translate(0,".concat(E.nameZh.y,")scale(").concat(v,")"),dominantBaseline:"central",children:[n.jsx("tspan",{fontSize:16,dy:.7,dominantBaseline:"central",children:l}),n.jsx("tspan",{dy:-.7,dominantBaseline:"central",children:a.slice(l.length)})]}),n.jsx("text",{ref:f,className:c,fontSize:8,transform:"translate(0,".concat(E.nameEn.y,")scale(").concat(b,")"),dominantBaseline:"middle",children:r})]})}var ze=function(e,t){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var r=a.call(e),s,i=[],o;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(a=r.return)&&a.call(r)}finally{if(o)throw o.error}}return i};function we(e){var t=e.zhName,a=e.enName,r=e.foregroundColour,s=e.backgroundColour,i=e.zhClassName,o=e.enClassName,c=e.passed,m=d.useRef(null),l=ze(d.useState({width:0}),2),u=l[0],f=l[1];d.useEffect(function(){m.current&&f(m.current.getBBox())},[t,a]);var x=Math.max(45,u.width+4);return n.jsxs("g",{textAnchor:"middle",fill:c?P.white:r,children:[n.jsx(H,{customWidth:x,fill:c?"#aaa":s}),n.jsxs("g",{ref:m,children:[n.jsx("text",{className:i,fontSize:8.5,y:8,dominantBaseline:"central",children:t}),n.jsx("text",{className:o,fontSize:5.5,y:18,dominantBaseline:"middle",children:a})]})]})}var Q=function(e,t){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var r=a.call(e),s,i=[],o;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(a=r.return)&&a.call(r)}finally{if(o)throw o.error}}return i};function Be(e){var t=e.zhName,a=e.enName,r=e.foregroundColour,s=e.backgroundColour,i=e.zhClassName,o=e.enClassName,c=e.passed,m=d.useRef(null),l=d.useRef(null),u=Q(d.useState({width:0}),2),f=u[0],x=u[1],y=Q(d.useState({width:0}),2),h=y[0],g=y[1];d.useEffect(function(){m.current&&x(m.current.getBBox()),l.current&&g(l.current.getBBox())},[t,a]);var _=O/Math.max(O,f.width),j=O/Math.max(O,h.width),v={nameZh:{y:7.3+13.5*(1-_)*_/2},nameEn:{y:19.5-9*(1-j)*j/2}};return n.jsxs("g",{textAnchor:"middle",fill:c?P.white:r,children:[n.jsx(H,{fill:c?"#aaa":s}),n.jsx("text",{ref:m,className:i,fontSize:12,transform:"translate(0,".concat(v.nameZh.y,")scale(").concat(_,")"),dominantBaseline:"central",children:t}),n.jsx("text",{ref:l,className:o,fontSize:8,transform:"translate(0,".concat(v.nameEn.y,")scale(").concat(j,")"),dominantBaseline:"middle",children:a})]})}var C=function(){return C=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},C.apply(this,arguments)};const me=d.memo(function(t){var a=t.zhName,r=t.enName,s=t.spanDigits,i=be(a,r);switch(i){case 1:return s?n.jsx(q,C({},t)):n.jsx(Se,C({},t));case 2:return n.jsx(q,C({},t));default:return a.length>=5?n.jsx(we,C({},t)):n.jsx(Be,C({},t))}});var be=function(e,t){var a=U(e);if(a!==void 0)return 1;var r=ce(e,t);return r!==void 0?2:3},G=function(){return G=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},G.apply(this,arguments)},Oe=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a},A=5,T=5.625,ee=le-A,te=le-2*T;d.memo(function(t){var a=t.stroke,r=t.filled,s=Oe(t,["stroke","filled"]),i="M0,9.25 V-9.25 H-".concat(ee," l-").concat(A,",").concat(T," v").concat(te," l").concat(A,",").concat(T," H").concat(ee," l").concat(A,",-").concat(T," v-").concat(te," l-").concat(A,",-").concat(T," H0");return n.jsx("path",G({d:i,fill:r?a:"#fff",strokeWidth:oe,stroke:a},s))});var X=function(){return X=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},X.apply(this,arguments)},$e=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Ee=d.memo(function(t){var a=t.stroke,r=t.filled,s=$e(t,["stroke","filled"]),i="M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return n.jsx("path",X({d:i,fill:r?a:"#fff",strokeWidth:oe,stroke:a},s))});var J=function(){return J=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},J.apply(this,arguments)},Ce=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a},ne=function(e,t){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var r=a.call(e),s,i=[],o;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(a=r.return)&&a.call(r)}finally{if(o)throw o.error}}return i},W=15;function Pe(e){var t=e.Icon,a=e.lineNum,r=e.stnNum,s=e.strokeColour,i=e.passed,o=e.size,c=e.textClassName,m=Ce(e,["Icon","lineNum","stnNum","strokeColour","passed","size","textClassName"]),l=d.useRef(null),u=d.useRef(null),f=ne(d.useState({width:0}),2),x=f[0],y=f[1],h=ne(d.useState({width:0}),2),g=h[0],_=h[1];d.useEffect(function(){l.current&&y(l.current.getBBox()),u.current&&_(u.current.getBBox())},[a,r]);var j=W/Math.max(W,x.width),v=(a==null?void 0:a.length)===2&&(r==null?void 0:r.length)===2?j:W/Math.max(W,g.width),b=o==="sm"?"0.7":o==="lg"?"1.4":1;return n.jsx("g",J({},m,{children:n.jsxs("g",{transform:"scale(".concat(b,")"),children:[n.jsx(t,{stroke:i?"#aaa":s,filled:!a&&!r}),(a||r)&&n.jsxs("g",{textAnchor:"middle",fontSize:13.5,fill:i?"#aaa":"#000",children:[n.jsx("g",{transform:"translate(-9.25,0)scale(".concat(j,")"),children:n.jsx("text",{ref:l,className:c,dominantBaseline:"central",x:.5,children:a})}),n.jsx("g",{transform:"translate(9.25,0)scale(".concat(v,")"),children:n.jsx("text",{ref:u,className:c,dominantBaseline:"central",children:r})})]})]})}))}var V=function(){return V=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},V.apply(this,arguments)};function de(e){return n.jsx(Pe,V({Icon:Ee},e))}const ke=d.memo(function(t){const{stnName:a,onUpdate:r}=t,{zh:s="",en:i=""}=a,o=d.useRef(null);return d.useEffect(()=>{o.current&&r&&r(o.current.getBBox())},[a.toString()]),n.jsxs("g",{ref:o,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:18,children:s}),n.jsx("g",{fontSize:10.5,children:i.split("\\").map((c,m)=>n.jsx("text",{className:"rmg-name__en",dy:16+m*11,children:c},m))})]})},(e,t)=>JSON.stringify(e.stnName)===JSON.stringify(t.stnName));function Re(e){const{stnName:t,onUpdate:a,passed:r,...s}=e,{zh:i="",en:o=""}=t,c=d.useRef(null),[m,l]=d.useState({x:0,width:0});return d.useEffect(()=>{if(c.current){const u=c.current.getBBox();l(u),a==null||a(u)}},[t.toString()]),!i&&!o?n.jsx(n.Fragment,{}):n.jsxs("g",{fill:r?"#aaa":"#000",...s,children:[n.jsxs("g",{transform:"translate(0,3)",fontSize:18,children:[n.jsx("text",{textAnchor:"end",x:m.x-3,className:"rmg-name__zh",children:"("}),n.jsx("text",{textAnchor:"start",x:m.width+m.x+3,className:"rmg-name__zh",children:")"})]}),n.jsxs("g",{ref:c,textAnchor:"middle",children:[n.jsx("text",{className:"rmg-name__zh",fontSize:13,children:i}),n.jsx("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:o})]})]})}function Ie(e){const{passed:t,...a}=e;return n.jsxs("g",{textAnchor:"middle",fill:t?"#aaa":"var(--rmg-theme-colour)",...a,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:13,children:"快车停靠站"}),n.jsx("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]})}function Ae(e){var y,h,g;const{primaryName:t,secondaryName:a,stationState:r,flipped:s,express:i}=e,[o,c]=d.useState({width:0}),[m,l]=d.useState({x:0,width:-20}),u=_=>{switch(_){case I.PASSED:return"#aaa";case I.CURRENT:return"#f00";case I.FUTURE:return"#000"}},f=(g=(h=(y=t.en)==null?void 0:y.split("\\"))==null?void 0:h.length)!=null?g:1,x={g:{x:0,y:s?17.5:-20-f*14*Math.cos(-45)},StationSecondaryName:{x:(o.width+m.width/2+10)*(s?-1:1),y:2+5*(f-1)},ExpressTag:{x:(o.width+m.width+20+35)*(s?-1:1),y:2+5*(f-1)}};return n.jsxs("g",{textAnchor:s?"end":"start",fill:u(r),transform:"translate(".concat(x.g.x,",").concat(x.g.y,")rotate(-45)"),children:[n.jsx(ke,{stnName:t,onUpdate:c}),a&&n.jsx(Re,{stnName:a,onUpdate:l,passed:r===I.PASSED,transform:"translate(".concat(x.StationSecondaryName.x,",").concat(x.StationSecondaryName.y,")")}),i&&n.jsx(Ie,{passed:r===I.PASSED,transform:"translate(".concat(x.ExpressTag.x,",").concat(x.ExpressTag.y,")")})]})}function Te(e){var h,g,_,j,v,b,E,k,R;const{stnId:t,stnState:a,stnY:r}=e,{theme:s,line_name:i,line_num:o,spanLineNum:c,stn_list:m}=S(M=>M.param),l=m[t],u=l.parents.length===2||l.children.length===2,f=r>0||l.parents.indexOf(((g=(h=l.branch)==null?void 0:h.left)==null?void 0:g[1])||"")===1||l.children.indexOf(((j=(_=l.branch)==null?void 0:_.right)==null?void 0:j[1])||"")===1?180:0,x=(E=(b=(v=l.localisedName.en)==null?void 0:v.split("\\"))==null?void 0:b.length)!=null?E:1,y=u?f===180?16+(x-1)*12*Math.cos(-45):-9:f===180?-6:(25+(x-1)*15)*Math.cos(-45);return n.jsxs(n.Fragment,{children:[n.jsx(De,{intInfos:u?[{theme:[s[0],s[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)"],name:i},...(k=l.transfer.groups[0].lines)!=null?k:[]]:(R=l.transfer.groups[0].lines)!=null?R:[],stnState:a,tickRotation:f,spanDigits:c}),n.jsx(de,{lineNum:o,stnNum:l.num,strokeColour:s[2],textClassName:"rmg-name__zh",passed:a===-1}),n.jsx("g",{transform:"translate(".concat(-y,",0)"),children:n.jsx(Ae,{primaryName:l.localisedName,secondaryName:l.localisedSecondaryName,stationState:a,flipped:f===180,express:l.services.includes(he.express)})})]})}const De=e=>n.jsxs(n.Fragment,{children:[n.jsx(We,{strokeWidth:4,...e}),n.jsx(Le,{transform:"translate(0,".concat(e.tickRotation===180?-47:23,")"),...e})]}),We=e=>{const{intInfos:t,stnState:a,tickRotation:r,spanDigits:s,...i}=e;return n.jsx("g",{...i,children:t.map((o,c)=>{var m;return n.jsx("use",{xlinkHref:"#inttick",stroke:a===-1?"#aaa":(m=o.theme)==null?void 0:m[2],transform:"translate(".concat(-2*(t.length-1)+4*c,",0)rotate(").concat(r===180?180:0,")")},c)})})},Le=e=>{const{intInfos:t,tickRotation:a,stnState:r,spanDigits:s,...i}=e;return n.jsx("g",{...i,children:t.map((o,c)=>{var m,l,u,f;return n.jsx("g",{transform:"translate(0,".concat(c*28*(a===180?-1:1),")"),children:n.jsx(me,{zhName:o.name[0],enName:o.name[1],foregroundColour:(l=(m=o.theme)==null?void 0:m[3])!=null?l:P.white,backgroundColour:(f=(u=o.theme)==null?void 0:u[2])!=null?f:"#aaaaaa",zhClassName:"rmg-name__zh",enClassName:"rmg-name__en",passed:r===-1,spanDigits:s})},c)})})},re=(e,t)=>e[t].parents.length===2||e[t].children.length===2?.25:0,He=(e,t,a)=>{const r=N("linestart","lineend",t);if(r.nodes.includes(e))return N(r.nodes[1],e,t).len;{const s=a.filter(l=>l.includes(e))[0];let i=e;for(;!r.nodes.includes(i);)i=s[s.indexOf(i)-1];let o=e;for(;!r.nodes.includes(o);)o=s[s.indexOf(o)+1];const c=i==="linestart",m=o==="lineend";if(s.toString()===a[0].toString()){const l=[];return!c&&!m?(l[0]=N(r.nodes[1],i,t).len,l[1]=N(i,o,t).len,l[2]=N(i,e,t).len,l[3]=N(e,o,t).len):c?(l[0]=0,l[1]=N(r.nodes[1],o,t).len,l[2]=N(s[1],e,t).len,l[3]=N(e,o,t).len):(l[0]=N(r.nodes[1],i,t).len,l[1]=N(i,r.nodes.slice(-2)[0],t).len,l[2]=N(i,e,t).len,l[3]=N(e,s.slice(-2)[0],t).len),l[0]+l[2]*l[1]/(l[2]+l[3])}else if(!c&&!m){const l=[];return l[0]=N(r.nodes[1],i,t).len,l[1]=N(i,o,t).len,l[2]=N(i,e,t).len,l[3]=N(e,o,t).len,l[0]+l[2]*l[1]/(l[2]+l[3])}else return c?N(r.nodes[1],o,t).len-N(e,o,t).len:N(r.nodes[1],i,t).len+N(i,e,t).len}},Me=()=>{const{branches:e,routes:t,depsStr:a}=S(z=>z.helper),{svgWidth:r,svg_height:s,y_pc:i,padding:o,branchSpacingPct:c,direction:m,line_name:l,spanLineNum:u,current_stn_idx:f,stn_list:x}=S(z=>z.param),y=fe(x,re,re),h=d.useMemo(()=>(console.log("computing x shares"),Object.keys(x).reduce((z,w)=>({...z,[w]:He(w,y,e)}),{})),[e.toString(),JSON.stringify(y)]),g=N("linestart","lineend",y),_=N(g.nodes[1],g.nodes.slice(-2)[0],y),j=m===p.right?[r[B.RailMap]*o/100+65,r[B.RailMap]*(1-o/100)-20]:[r[B.RailMap]*o/100,r[B.RailMap]*(1-o/100)-65],v=Object.keys(h).reduce((z,w)=>({...z,[w]:j[0]+h[w]/_.len*(j[1]-j[0])}),{}),b=d.useMemo(()=>(console.log("computing y shares"),Object.keys(x).reduce((z,w)=>{if(e[0].includes(w))return{...z,[w]:0};{const D=e.slice(1).filter(ue=>ue.includes(w))[0];return{...z,[w]:x[D[0]].children.indexOf(D[1])?-2:2}}},{})),[a]),E=Object.keys(b).reduce((z,w)=>({...z,[w]:-b[w]*c*s/200}),{}),k=d.useMemo(()=>xe(f,t,m),[f,m,t.toString()]),R=e.map(z=>ge(z,k)).reduce((z,w)=>(z.main.push(w.main),z.pass.push(w.pass),z),{main:[],pass:[]}),M=Object.keys(R).reduce((z,w)=>({...z,[w]:R[w].map(D=>Fe(D,v,E))}),{});return n.jsxs("g",{id:"main",style:{"--y-percentage":i,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[n.jsx(Ze,{paths:M}),n.jsx(Ge,{xs:v,ys:E,stnStates:k}),n.jsx("g",{id:"line_name",style:{"--translate-x":m===p.right?"".concat(j[0]-65,"px"):"".concat(j[1]+65,"px")},children:n.jsx(me,{zhName:l[0],enName:l[1],foregroundColour:"var(--rmg-theme-fg)",backgroundColour:"var(--rmg-theme-colour)",zhClassName:"rmg-name__zh",enClassName:"rmg-name__en",spanDigits:u})})]})},Ze=d.memo(function(t){return n.jsxs("g",{fill:"none",strokeWidth:4,children:[n.jsx("g",{stroke:"#aaa",strokeDasharray:4,children:t.paths.pass.map((a,r)=>n.jsx("path",{d:a},r))}),n.jsx("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((a,r)=>n.jsx("path",{d:a},r))})]})},(e,t)=>JSON.stringify(e.paths)===JSON.stringify(t.paths)),Fe=(e,t,a)=>{let r;const s=[];return e.forEach(i=>{const o=t[i],c=a[i];if(!r&&r!==0){r=c,s.push("M ".concat(o,",").concat(c));return}c===0?(c<r&&s.push("H ".concat(o-40),"a 40,40 0 0,0 40,-40","V ".concat(c)),c>r&&s.push("H ".concat(o-40),"a 40,40 0 0,1 40,40","V ".concat(c))):(c<r&&s.push("V ".concat(c+40),"a 40,40 0 0,1 40,-40","H ".concat(o)),c>r&&s.push("V ".concat(c-40),"a 40,40 0 0,0 40,40","H ".concat(o))),s.push("H ".concat(o)),r=c}),s.join(" ").replace(/( H ([\d.]+))+/g," H $2")},Ge=e=>{const{xs:t,ys:a,stnStates:r}=e,s=S(i=>i.param.stn_list);return n.jsx("g",{id:"stn_icons",children:Object.keys(s).filter(i=>!["linestart","lineend"].includes(i)).map(i=>n.jsx("g",{style:{transform:"translate(".concat(t[i],"px,").concat(a[i],"px)")},children:n.jsx(Te,{stnId:i,stnState:r[i],stnY:a[i]})},i))})};function Y(e){return n.jsx("path",{d:"M60,60 L0,0 L60,-60 H90 L40,-10 H150 V10 H40 L90,60z",fill:"black",...e})}function Xe(e){const{destIds:t,textAnchor:a,...r}=e,s=S(l=>l.param.direction),i=S(l=>l.param.stn_list),o=t.map(l=>{var u,f;return(f=(u=i[l].localisedName.zh)==null?void 0:u.length)!=null?f:0}),c=Math.min(...o),m=c>1&&o[0]!==o[1]?Math.abs(o[0]-o[1])/(c-1):0;return n.jsxs("g",{textAnchor:a,...r,children:[t.map((l,u)=>{var y;const f=o[u]>o[1-u],x=!ye()&&a==="end"&&!f;return n.jsxs(d.Fragment,{children:[n.jsx("text",{className:"rmg-name__zh",fontSize:25,x:s===p.left?0:-75,y:-21+42*u,letterSpacing:f?"0em":"".concat(m,"em"),dx:x?"".concat(m,"em"):"0em",children:i[l].localisedName.zh}),n.jsx("text",{className:"rmg-name__en",fontSize:11.5,x:s===p.left?0:-75,y:-1+42*u,children:"Towards "+((y=i[l].localisedName.en)==null?void 0:y.replace("\\"," "))})]},l)}),n.jsx("text",{className:"rmg-name__zh",fontSize:28,x:s===p.left?25*(Math.max(...o)+1):0,y:5,children:"方向"})]})}const ae=B.RailMap,Je=()=>{const{canvasScale:e}=S(x=>x.app),{svgWidth:t,svg_height:a,direction:r,psd_num:s,info_panel_type:i,notesGZMTR:o,current_stn_idx:c,stn_list:m,theme:l}=S(x=>x.param),u=t[ae],f=m[c];return n.jsxs(se,{type:ae,svgWidth:u,svgHeight:a,canvasScale:e,theme:l,children:[n.jsx(Ve,{}),n.jsx(ie,{variant:i,isShowLight:i===$.gz2otis,isShowPSD:i===$.gz2otis&&s}),r===p.left&&f.parents.includes("linestart")||r===p.right&&f.children.includes("lineend")?n.jsx(qe,{}):n.jsxs(n.Fragment,{children:[n.jsx(Me,{}),n.jsx(Ue,{}),o==null?void 0:o.map((x,y)=>n.jsx(Ke,{note:x},y))]}),i===$.gz2otis&&n.jsx("line",{x2:u,transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},Ve=d.memo(function(){return n.jsx("defs",{children:n.jsx("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"})})}),Ue=()=>{const{routes:e}=S(c=>c.helper),{direction:t,direction_gz_x:a,direction_gz_y:r,current_stn_idx:s}=S(c=>c.param),i=d.useMemo(()=>[...new Set(e.reduce((c,m)=>m.includes(s)?c.concat(m.filter(l=>!["linestart","lineend"].includes(l)).slice(t===p.left?0:-1)[0]):c,[]).filter(c=>c!==s))],[s,t,e.toString()]),o={textAnchor:t===p.left?"start":"end",transform:"translate(".concat(t===p.left?65:-65,",-5)"),destIds:i};return n.jsxs("g",{id:"direction_gz",style:{"--x-percentage":a,"--y-percentage":r},children:[n.jsx(Y,{transform:"scale(0.35)rotate(".concat(t===p.left?0:180,")")}),i.length!==2?n.jsx(Ye,{...o}):n.jsx(Xe,{...o})]})},Ye=e=>{const{destIds:t,...a}=e,r=S(s=>s.param.stn_list);return n.jsxs("g",{...a,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:28,children:t.map(s=>r[s].localisedName.zh).join("/")+"方向"}),n.jsx("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+t.map(s=>{var i;return(i=r[s].localisedName.en)==null?void 0:i.replace("\\"," ")}).join("/")})]})},qe=d.memo(function(){return n.jsxs("g",{id:"terminus_gz",textAnchor:"middle",children:[n.jsx("text",{className:"rmg-name__zh",fontSize:90,children:"终 点 站"}),n.jsx("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),n.jsxs("g",{strokeWidth:8,stroke:"#000",children:[n.jsx("path",{d:"M -160,68 h -160"}),n.jsx("path",{d:"M 160,68 h 160"})]})]})}),Ke=d.memo(function(t){const a=d.useRef(null),[r,s]=d.useState({width:0,height:0,y:0});return d.useEffect(()=>{a.current&&s(a.current.getBBox())},[t.note[0],t.note[1]]),n.jsxs("g",{className:"note-box",style:{"--x-percentage":t.note[2],"--y-percentage":t.note[3]},children:[t.note[4]&&n.jsx("rect",{height:r.height+4,width:r.width+4,x:-2,y:r.y-2,fill:"none",stroke:"black",strokeWidth:.5}),n.jsxs("g",{ref:a,children:[n.jsx("g",{fontSize:16,letterSpacing:1.2,children:t.note[0].split("\n").map((i,o)=>n.jsx("text",{className:"rmg-name__zh",y:o*18,children:i},o))}),n.jsx("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*t.note[0].split("\n").length,")"),children:t.note[1].split("\n").map((i,o)=>{var c;return n.jsx("text",{className:"rmg-name__en",y:o*11,textLength:o<(((c=t.note[1].match(/\n/g))==null?void 0:c.length)||0)?r.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:i},o)})})]})]})},(e,t)=>e.note.toString()===t.note.toString()),Qe=d.memo(function(t){var i,o;const{stnName:a,onUpdate:r}=t,s=d.useRef(null);return d.useEffect(()=>{s.current&&r&&r(s.current.getBBox())},[a.toString()]),n.jsxs("g",{ref:s,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:90,children:a.zh}),n.jsx("g",{fontSize:36,children:(o=(i=a.en)==null?void 0:i.split("\\"))==null?void 0:o.map((c,m)=>n.jsx("text",{className:"rmg-name__en",dy:70+m*36,children:c},m))})]})},(e,t)=>JSON.stringify(e.stnName)===JSON.stringify(t.stnName)),et=e=>{const{secondaryName:t,transform:a}=e,r=d.useRef(null),[s,i]=d.useState({x:0,width:0});return d.useEffect(()=>{r.current&&i(r.current.getBBox())},[t.toString()]),n.jsxs("g",{transform:a,children:[n.jsxs("g",{transform:"translate(0,4.5)",fontSize:36,children:[n.jsx("text",{textAnchor:"end",x:s.x-3,className:"rmg-name__zh",children:"("}),n.jsx("text",{textAnchor:"start",x:s.width+s.x+3,className:"rmg-name__zh",children:")"})]}),n.jsxs("g",{ref:r,textAnchor:"middle",children:[n.jsx("text",{className:"rmg-name__zh",fontSize:26,children:t.zh}),n.jsx("text",{dy:22,className:"rmg-name__en",fontSize:14,children:t.en})]})]})},tt=()=>{var g,_,j;const{svg_height:e,svgWidth:t,theme:a,direction:r,info_panel_type:s,line_num:i,current_stn_idx:o,stn_list:c}=S(v=>v.param),m=c[o],[l,u]=d.useState({width:0}),f=(j=(_=(g=m.localisedName.en)==null?void 0:g.split("\\"))==null?void 0:_.length)!=null?j:1,x=m[r===p.left?"parents":"children"],y={name:"translate(".concat((r===p.left?1:-1)*t[B.RunIn]/4,",45)"),next:"translate(".concat((r===p.left?1:-1)*t[B.RunIn]/10,",45)")},h={nameGroup:{x:t.runin/2,y:.5*e-50-(f-1)*18-(m.localisedSecondaryName?29:0)},secondaryName:{x:0,y:70+f*36}};return n.jsxs("g",{children:[n.jsxs("g",{transform:s===$.gz2otis?y.name:"",children:[n.jsxs("g",{textAnchor:"middle",transform:"translate(".concat(h.nameGroup.x,",").concat(h.nameGroup.y,")"),children:[n.jsx(Qe,{stnName:m.localisedName,onUpdate:u}),m.localisedSecondaryName&&n.jsx(et,{secondaryName:m.localisedSecondaryName,transform:"translate(".concat(h.secondaryName.x,",").concat(h.secondaryName.y,")")})]}),n.jsx(de,{lineNum:i,stnNum:m.num,strokeColour:a[2],textClassName:"rmg-name__zh",style:{"--translate-x":"".concat((t[B.RunIn]+l.width)/2+55,"px"),"--translate-y":"".concat(.5*e-30-(f-1)*18-(m.localisedSecondaryName?58/2:0),"px"),transform:"translate(var(--translate-x, 800px), var(--translate-y, 145px))"},size:"lg"})]}),n.jsx("g",{transform:s===$.gz2otis?y.next:"",children:!x||x.includes("linestart")||x.includes("lineend")?n.jsx(n.Fragment,{}):x.length===1?n.jsx(nt,{nextId:x[0],nameBBox:l}):n.jsx(at,{nextIds:x,nameBBox:l})})]})},nt=e=>{const{nextId:t,nameBBox:a}=e,r=S(g=>g.param.svgWidth),s=S(g=>g.param.direction),i=S(g=>g.param.stn_list[t]),{localisedName:o,localisedSecondaryName:c}=i,{zh:m="",en:l=""}=o,[u,f]=d.useState({width:0}),x=d.useRef(null);d.useEffect(()=>{x.current&&f(x.current.getBBox())},[m,l]);const y=m.length,h=(r[B.RunIn]-a.width)/2;return n.jsxs(n.Fragment,{children:[n.jsxs("g",{id:"big_next",children:[n.jsxs("g",{textAnchor:"middle",style:{"--translate-x":s===p.left?"80px":y<=2?"".concat(r[B.RunIn]-45-u.width-70,"px"):"".concat(r[B.RunIn]-45-u.width-35*1.5,"px")},children:[n.jsx("text",{className:"rmg-name__zh",fontSize:35,children:"下站"}),n.jsx("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),n.jsxs("g",{textAnchor:"start",ref:x,style:{"--translate-x":s===p.left?y<=2?"150px":"".concat(115+35/2,"px"):"".concat(r[B.RunIn]-45-u.width,"px")},children:[n.jsx("text",{className:"rmg-name__zh",fontSize:35,children:m}),n.jsx("g",{fontSize:17,children:l.split("\\").map((g,_)=>n.jsx("text",{className:"rmg-name__en",dy:30+_*17,children:g},_))})]}),c&&n.jsx("g",{textAnchor:"middle",style:{"--translate-x":s===p.left?y<=2?"150px":"".concat(115+35/2,"px"):"".concat(r[B.RunIn]-45-u.width,"px")},children:n.jsx(rt,{secName:c,transform:"translate(".concat(u.width/2,",").concat(30+l.split("\\").length*17+5,")")})})]}),n.jsx(Y,{id:"arrow",style:{"--translate-x":s===p.left?"".concat((115+35*((y<=2?1:.5)+y)+h)/2-20,"px"):"".concat((r[B.RunIn]-45-u.width-(y<=2?105:35*2.5)+h+e.nameBBox.width+55+18.5*1.4)/2+20,"px"),"--rotate":s===p.left?"0deg":"180deg"}})]})},rt=e=>{const{secName:t,...a}=e,{zh:r,en:s}=t,i=d.useRef(null),[o,c]=d.useState({x:0,width:0});return d.useEffect(()=>{i.current&&c(i.current.getBBox())},[r,s]),n.jsxs("g",{...a,children:[n.jsxs("g",{transform:"translate(0,2.5)",fontSize:25,children:[n.jsx("text",{textAnchor:"end",x:o.x-3,className:"rmg-name__zh",children:"("}),n.jsx("text",{textAnchor:"start",x:o.width+o.x+3,className:"rmg-name__zh",children:")"})]}),n.jsxs("g",{ref:i,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:18,children:r}),n.jsx("text",{className:"rmg-name__en",fontSize:10,dy:15,children:s})]})]})},at=e=>{const{nextIds:t,nameBBox:a}=e,{routes:r}=S(h=>h.helper),s=S(h=>h.param.svgWidth),i=S(h=>h.param.direction),o=S(h=>h.param.stn_list),c=t.map(h=>o[h].localisedName),[m,l]=d.useState({width:0}),u=d.useRef([]);d.useEffect(()=>{l(h=>({...h,width:0})),u.current.forEach(h=>{const g=h==null?void 0:h.getBBox();l(_=>g?_.width>g.width?_:g:_)})},[c.toString()]);const f=e.nextIds.map(h=>r.reduce((g,_)=>_.includes(h)?g.concat(_.filter(j=>!["linestart","lineend"].includes(j)).slice(i===p.left?0:-1)[0]):g,[])),x=Math.max(...c.map(h=>{var g,_;return(_=(g=h.zh)==null?void 0:g.length)!=null?_:0})),y=(s[B.RunIn]-a.width)/2;return n.jsxs(n.Fragment,{children:[n.jsx("g",{id:"big_next_2",children:c.map((h,g)=>{var _,j;return n.jsxs(d.Fragment,{children:[n.jsxs("g",{textAnchor:"middle",style:{"--translate-x":i===p.left?"72px":"".concat(s[B.RunIn]-45-m.width-41,"px")},children:[n.jsx("text",{className:"rmg-name__zh",children:"下站"}),n.jsx("text",{className:"rmg-name__en",y:22,children:"Next"})]}),n.jsxs("g",{ref:v=>u.current[g]=v,textAnchor:"start",style:{"--translate-x":i===p.left?"113px":"".concat(s[B.RunIn]-45-m.width,"px")},children:[n.jsx("text",{className:"rmg-name__zh",children:h.zh}),(j=(_=h.en)==null?void 0:_.split("\\"))==null?void 0:j.map((v,b)=>n.jsx("text",{className:"rmg-name__en",y:22+b*13,children:v},b)),n.jsx("text",{className:"rmg-name__zh",y:-35,children:f[g].map(v=>o[v].localisedName.zh).join("/")+"方向"}),n.jsx("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+f[g].map(v=>o[v].localisedName.en).join("/").replace("\\"," ")})]})]},g)})}),n.jsx(Y,{id:"arrow",style:{"--translate-x":i===p.left?"".concat((99+27*(1+x)+y)/2-20,"px"):"".concat((s[B.RunIn]-45-m.width-41-27+y+e.nameBBox.width+55+18.5*1.4)/2+20,"px"),"--rotate":i===p.left?"0deg":"180deg"}})]})};function st(e){const{num:t,...a}=e;return n.jsxs("g",{textAnchor:"middle",fill:"var(--rmg-theme-fg)",...a,children:[n.jsx("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),n.jsx("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:t}),n.jsx("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"站台"}),n.jsx("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]})}function it(e){const{canvasType:t}=e,{svgWidth:a,svg_height:r}=S(s=>s.param);return n.jsxs("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[n.jsx("line",{y2:r,transform:"translate(".concat(a[t]/2,",0)")}),n.jsx("line",{x2:a[t],transform:"translate(0,90)"})]})}const Z=B.RunIn;function ot(){const{canvasScale:e}=S(u=>u.app),{svgWidth:t,svg_height:a,direction:r,info_panel_type:s,platform_num:i,psd_num:o,theme:c}=S(u=>u.param),m=t[Z],l={platform:"translate(".concat(r===p.left?50:-50,",45)")};return n.jsxs(se,{type:Z,svgWidth:m,svgHeight:a,canvasScale:e,theme:c,children:[n.jsx(ie,{variant:s,isShowLight:s!==$.gz2otis,isShowPSD:s!==$.gz2otis&&o}),n.jsx("g",{transform:s===$.gz2otis?l.platform:"",children:n.jsx(st,{num:i,style:{"--translate-x":"".concat(r===p.left?m-100:100,"px"),"--translate-y":"calc(var(--rmg-svg-height) / 2 - 30px)",transform:"translate(var(--translate-x, 100px), var(--translate-y))"}})}),n.jsx(tt,{}),s===$.gz2otis&&n.jsx(it,{canvasType:Z})]})}const ft={runin:n.jsx(ot,{}),railmap:n.jsx(Je,{})};export{ft as default};
