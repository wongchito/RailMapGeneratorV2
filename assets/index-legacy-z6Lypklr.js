System.register(["./chakra-legacy-qw-Agdlg.js","./react-legacy-WhMi1wIo.js","./index-legacy-BsO7MqN0.js","./svg-wrapper-legacy-CRTXCxOG.js"],(function(e,t){"use strict";var n,r,s,a,i;return{setters:[e=>{n=e.j},e=>{r=e.a},e=>{s=e.aP,a=e.u},e=>{i=e.S}],execute:function(){const t=s.Destination;function l(){const{canvasScale:e}=a((e=>e.app)),{svgWidth:r,svg_height:s,theme:l}=a((e=>e.param)),o=r[t];return n.jsxs(i,{type:t,svgWidth:o,svgHeight:s,canvasScale:e,theme:l,children:[n.jsx(c,{}),n.jsx(m,{})]})}const c=r.memo((function(){return n.jsx("defs",{children:n.jsx("marker",{id:"slope",viewBox:"-1.5 0 3 1.5",refY:.5,children:n.jsx("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})})})})),m=()=>{const{routes:e}=a((e=>e.helper)),{current_stn_idx:t,direction:r,stn_list:s}=a((e=>e.param));var i,l;const c=(i=r,l=t,[...new Set(e.filter((e=>e.includes(l))).map((e=>{const t=e.filter((e=>!["linestart","lineend"].includes(e)));return"l"===i?t[0]:t.reverse()[0]})))]).map((e=>[s[e].localisedName.zh,s[e].localisedName.en].filter((e=>void 0!==e)).map((e=>e.replace("\\",""))))).at(0)??["",""];return n.jsx(o,{dest_name:c})},o=e=>{const{dest_name:t}=e,{direction:r,svgWidth:s,svg_height:i,theme:l}=a((e=>e.param));return n.jsxs("g",{transform:`translate(0,${i-300})`,children:[n.jsx("path",{stroke:l[2],strokeWidth:12,d:"l"===r?`M${s.destination-24},16 H 36`:"M24,16 H "+(s.destination-36),transform:"translate(0,220)",markerEnd:"url(#slope)"}),n.jsx(d,{dest_name:t})]})},d=e=>{const{dest_name:t}=e,{direction:s,svgWidth:i}=a((e=>e.param)),l=r.useRef(null),c=r.useRef(null),[m,o]=r.useState(0);r.useEffect((()=>{if(l.current&&c.current){const e=Math.max(l.current.getBBox().width,c.current.getBBox().width);o(e)}}),[...t]);const d=m+24+20+128;return n.jsxs("g",{transform:"translate(0,145)",children:[n.jsx("g",{transform:`translate(${"l"===s?i.destination-d:d},20)`,children:n.jsx("path",{d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"black",transform:`rotate(${"l"===s?0:180})scale(0.8)`})}),n.jsx("g",{ref:l,transform:`translate(${"l"===s?i.destination-24:24},25)`,textAnchor:"l"===s?"end":"start",children:n.jsx("text",{className:"rmg-name__zh rmg-outline",fontSize:70,dy:7,children:"往"+t[0]})}),n.jsx("g",{ref:c,transform:`translate(${"l"===s?i.destination-24:24},25)`,children:n.jsx("text",{className:"rmg-name__en rmg-outline",fontSize:25,dx:"l"===s?-m:0,dy:40,children:"To "+t[1]})})]})},h=s.Platform,g=()=>{const{canvasScale:e}=a((e=>e.app)),{svgWidth:t,svg_height:r,theme:s}=a((e=>e.param)),l=t[h];return n.jsx(i,{type:h,svgWidth:l,svgHeight:r,canvasScale:e,theme:s,children:n.jsx(x,{})})},x=()=>{const{svgWidth:e,svg_height:t,platform_num:r}=a((e=>e.param)),s=e.platform/2;return n.jsxs("g",{transform:`translate(${s},${t-140})`,children:[n.jsx("text",{className:"rmg-name__en rmg-outline",dominantBaseline:"central",fontSize:120,textAnchor:"end",children:r}),n.jsx("text",{className:"rmg-name__zh rmg-outline",fontSize:50,x:10,dy:10,children:"站台"}),n.jsx("text",{className:"rmg-name__zh rmg-outline",fontSize:30,x:10,dy:50,children:"Platform"})]})},u=s.RunIn,f=()=>{const{canvasScale:e}=a((e=>e.app)),{svgWidth:t,svg_height:r,theme:s}=a((e=>e.param)),l=t[u],c=r-300;return n.jsxs(i,{type:u,svgWidth:l,svgHeight:r,canvasScale:e,theme:s,children:[n.jsx(j,{}),n.jsx("g",{transform:`translate(0,${c})`,children:n.jsx(p,{})})]})},j=r.memo((function(){return n.jsx("defs",{children:n.jsx("marker",{id:"slope",viewBox:"-1.5 0 3 1.5",refY:.5,children:n.jsx("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})})})})),p=()=>{const{svgWidth:e,stn_list:t,current_stn_idx:r}=a((e=>e.param)),{localisedName:s,character_spacing:i}=t[r],{zh:l="",en:c=""}=s,m=e.runin/2;return n.jsxs("g",{transform:`translate(${m},160)`,textAnchor:"middle",children:[n.jsx("text",{className:"rmg-name__zh rmg-outline",fontSize:112,dx:i/2,letterSpacing:i,children:l.replace("\\","")}),n.jsx("text",{className:"rmg-name__en rmg-outline",fontSize:36,dy:75,children:c.replace("\\","")})]})};e("default",{destination:n.jsx(l,{}),runin:n.jsx(f,{}),platform:n.jsx(g,{})})}}}));
