"use strict";(self.webpackChunkrmg=self.webpackChunkrmg||[]).push([[8506],{37656:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(1413),a=n(29439),s=n(45987),c=n(72791),i=n(80184),l=(0,c.memo)((function(t){var e=t.passed,n=t.large?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return(0,i.jsx)("path",{d:n,fill:"#fff",strokeWidth:2,stroke:e?"#aaa":"var(--rmg-theme-colour)"})}),(function(t,e){return t.passed===e.passed&&t.large===e.large})),o=["lineNum","stnNum","passed","large"];function m(t){var e=t.lineNum,n=t.stnNum,m=t.passed,u=t.large,x=(0,s.Z)(t,o),d=(0,c.useRef)(null),h=(0,c.useRef)(null),f=(0,c.useState)({width:0}),g=(0,a.Z)(f,2),p=g[0],j=g[1],y=(0,c.useState)({width:0}),_=(0,a.Z)(y,2),z=_[0],w=_[1];(0,c.useEffect)((function(){j(d.current.getBBox()),w(h.current.getBBox())}),[e,n]);var v=15/Math.max(15,p.width),N=2===e.length&&2===n.length?v:15/Math.max(15,z.width);return(0,i.jsxs)("g",(0,r.Z)((0,r.Z)({},x),{},{children:[(0,i.jsx)(l,{passed:m,large:u}),(0,i.jsxs)("g",{textAnchor:"middle",fontSize:13.5,transform:u?"scale(1.4)":"",fill:m?"#aaa":"#000",children:[(0,i.jsx)("g",{transform:"translate(-9.25,0)scale(".concat(v,")"),children:(0,i.jsx)("text",{ref:d,className:"rmg-name__zh",children:e})}),(0,i.jsx)("g",{transform:"translate(9.25,0)scale(".concat(N,")"),children:(0,i.jsx)("text",{ref:h,className:"rmg-name__zh",children:n})})]})]}))}},23061:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(4942),a=n(72791),s=n(26541),c=n(93433),i=n(1413),l=n(45987),o=n(29439),m=n(37656),u=n(20713),x=n(37732),d=n(80184),h=(0,a.memo)((function(t){var e=t.stnName,n=t.onUpdate,r=(0,a.useRef)(null);return(0,a.useEffect)((function(){null===n||void 0===n||n(r.current.getBBox())}),[e.toString()]),(0,d.jsxs)("g",{ref:r,children:[(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:e[0]}),(0,d.jsx)("g",{fontSize:36,children:e[1].split("\\").map((function(t,e){return(0,d.jsx)("text",{className:"rmg-name__en",dy:70+36*e,children:t},e)}))})]})}),(function(t,e){return t.stnName.toString()===e.stnName.toString()})),f=function(t){var e=t.secondaryName,n=t.transform,r=(0,a.useRef)(null),s=(0,a.useState)({x:0,width:0}),c=(0,o.Z)(s,2),i=c[0],l=c[1];return(0,a.useEffect)((function(){return l(r.current.getBBox())}),[e.toString()]),(0,d.jsxs)("g",{transform:n,children:[(0,d.jsxs)("g",{transform:"translate(0,4.5)",fontSize:36,children:[(0,d.jsx)("text",{textAnchor:"end",x:i.x-3,className:"rmg-name__zh",children:"("}),(0,d.jsx)("text",{textAnchor:"start",x:i.width+i.x+3,className:"rmg-name__zh",children:")"})]}),(0,d.jsxs)("g",{ref:r,textAnchor:"middle",children:[(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:26,children:e[0]}),(0,d.jsx)("text",{dy:22,className:"rmg-name__en",fontSize:14,children:e[1]})]})]})},g=["secName"],p=function(){var t,e=(0,x.Qy)((function(t){return t.param.svg_height})),n=(0,x.Qy)((function(t){return t.param.svgWidth})),s=(0,x.Qy)((function(t){return t.param.direction})),c=(0,x.Qy)((function(t){return t.param.info_panel_type})),i=(0,x.Qy)((function(t){return t.param.line_num})),l=(0,x.Qy)((function(t){return t.param.current_stn_idx})),g=(0,x.Qy)((function(t){return t.param.stn_list[l]})),p=(0,a.useState)({width:0}),y=(0,o.Z)(p,2),z=y[0],w=y[1],v=g[s===u.wA.left?"parents":"children"],N={name:"translate(".concat((s===u.wA.left?1:-1)*n[u.Ht.RunIn]/4,",45)"),next:"translate(".concat((s===u.wA.left?1:-1)*n[u.Ht.RunIn]/10,",45)")},S={nameGroup:{x:n.runin/2,y:.5*e-50-18*(g.name[1].split("\\").length-1)-(g.secondaryName?29:0)},secondaryName:{x:0,y:70+36*g.name[1].split("\\").length}};return(0,d.jsxs)("g",{children:[(0,d.jsxs)("g",{transform:c===u.p.gz2otis?N.name:"",children:[(0,d.jsxs)("g",{textAnchor:"middle",transform:"translate(".concat(S.nameGroup.x,",").concat(S.nameGroup.y,")"),children:[(0,d.jsx)(h,{stnName:g.name,onUpdate:w}),g.secondaryName&&(0,d.jsx)(f,{secondaryName:g.secondaryName,transform:"translate(".concat(S.secondaryName.x,",").concat(S.secondaryName.y,")")})]}),(0,d.jsx)(m.Z,{lineNum:i,stnNum:g.num,style:(t={},(0,r.Z)(t,"--translate-x","".concat((n[u.Ht.RunIn]+z.width)/2+55,"px")),(0,r.Z)(t,"--translate-y","".concat(.5*e-30-18*(g.name[1].split("\\").length-1)-(g.secondaryName?29:0),"px")),(0,r.Z)(t,"transform","translate(var(--translate-x, 800px), var(--translate-y, 145px))"),t),large:!0})]}),(0,d.jsx)("g",{transform:c===u.p.gz2otis?N.next:"",children:!v||v.includes("linestart")||v.includes("lineend")?(0,d.jsx)(d.Fragment,{}):1===v.length?(0,d.jsx)(j,{nextId:v[0],nameBBox:z}):(0,d.jsx)(_,{nextIds:v,nameBBox:z})})]})},j=function(t){var e,n=t.nextId,s=t.nameBBox,c=(0,x.Qy)((function(t){return t.param.svgWidth})),i=(0,x.Qy)((function(t){return t.param.direction})),l=(0,x.Qy)((function(t){return t.param.stn_list[n]})),m=l.name,h=l.secondaryName,f=(0,a.useState)({width:0}),g=(0,o.Z)(f,2),p=g[0],j=g[1],_=a.useRef(null);(0,a.useEffect)((function(){return j(_.current.getBBox())}),[m.toString()]);var z=m[0].length,w=(c[u.Ht.RunIn]-s.width)/2;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("g",{id:"big_next",children:[(0,d.jsxs)("g",{textAnchor:"middle",style:(0,r.Z)({},"--translate-x",i===u.wA.left?"80px":"".concat(z<=2?c[u.Ht.RunIn]-45-p.width-70:c[u.Ht.RunIn]-45-p.width-52.5,"px")),children:[(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:35,children:"\u4e0b\u7ad9"}),(0,d.jsx)("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),(0,d.jsxs)("g",{textAnchor:"start",ref:_,style:(0,r.Z)({},"--translate-x",i===u.wA.left?"".concat(z<=2?150:132.5,"px"):"".concat(c[u.Ht.RunIn]-45-p.width,"px")),children:[(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:35,children:m[0]}),(0,d.jsx)("g",{fontSize:17,children:m[1].split("\\").map((function(t,e){return(0,d.jsx)("text",{className:"rmg-name__en",dy:30+17*e,children:t},e)}))})]}),h&&(0,d.jsx)("g",{textAnchor:"middle",style:(0,r.Z)({},"--translate-x",i===u.wA.left?"".concat(z<=2?150:132.5,"px"):"".concat(c[u.Ht.RunIn]-45-p.width,"px")),children:(0,d.jsx)(y,{secName:h,transform:"translate(".concat(p.width/2,",").concat(30+17*m[1].split("\\").length+5,")")})})]}),(0,d.jsx)("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(e={},(0,r.Z)(e,"--translate-x",i===u.wA.left?"".concat((115+35*((z<=2?1:.5)+z)+w)/2-20,"px"):"".concat((c[u.Ht.RunIn]-45-p.width-(z<=2?105:87.5)+w+t.nameBBox.width+55+25.9)/2+20,"px")),(0,r.Z)(e,"--rotate",i===u.wA.left?"0deg":"180deg"),e)})]})},y=function(t){var e=t.secName,n=(0,l.Z)(t,g),r=(0,a.useRef)(null),s=(0,a.useState)({x:0,width:0}),c=(0,o.Z)(s,2),m=c[0],u=c[1];return(0,a.useEffect)((function(){return u(r.current.getBBox())}),[t.secName.toString()]),(0,d.jsxs)("g",(0,i.Z)((0,i.Z)({},n),{},{children:[(0,d.jsxs)("g",{transform:"translate(0,2.5)",fontSize:25,children:[(0,d.jsx)("text",{textAnchor:"end",x:m.x-3,className:"rmg-name__zh",children:"("}),(0,d.jsx)("text",{textAnchor:"start",x:m.width+m.x+3,className:"rmg-name__zh",children:")"})]}),(0,d.jsxs)("g",{ref:r,children:[(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:18,children:e[0]}),(0,d.jsx)("text",{className:"rmg-name__en",fontSize:10,dy:15,children:e[1]})]})]}))},_=function(t){var e,n=t.nextIds,s=t.nameBBox,l=(0,x.Qy)((function(t){return t.helper})).routes,m=(0,x.Qy)((function(t){return t.param.svgWidth})),h=(0,x.Qy)((function(t){return t.param.direction})),f=(0,x.Qy)((function(t){return t.param.stn_list})),g=n.map((function(t){return f[t].name})),p=(0,a.useState)({width:0}),j=(0,o.Z)(p,2),y=j[0],_=j[1],z=(0,a.useRef)([]);(0,a.useEffect)((function(){_((function(t){return(0,i.Z)((0,i.Z)({},t),{},{width:0})})),z.current.forEach((function(t){var e=null===t||void 0===t?void 0:t.getBBox();_((function(t){return e?t.width>e.width?t:e:t}))}))}),[g.toString()]);var w=t.nextIds.map((function(t){return l.reduce((function(e,n){return n.includes(t)?e.concat(n.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(h===u.wA.left?0:-1)[0]):e}),[])})),v=Math.max.apply(Math,(0,c.Z)(g.map((function(t){return t[0].length})))),N=(m[u.Ht.RunIn]-s.width)/2;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("g",{id:"big_next_2",children:g.map((function(t,e){return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsxs)("g",{textAnchor:"middle",style:(0,r.Z)({},"--translate-x",h===u.wA.left?"72px":"".concat(m[u.Ht.RunIn]-45-y.width-41,"px")),children:[(0,d.jsx)("text",{className:"rmg-name__zh",children:"\u4e0b\u7ad9"}),(0,d.jsx)("text",{className:"rmg-name__en",y:22,children:"Next"})]}),(0,d.jsxs)("g",{ref:function(t){return z.current[e]=t},textAnchor:"start",style:(0,r.Z)({},"--translate-x",h===u.wA.left?"113px":"".concat(m[u.Ht.RunIn]-45-y.width,"px")),children:[(0,d.jsx)("text",{className:"rmg-name__zh",children:t[0]}),t[1].split("\\").map((function(t,e){return(0,d.jsx)("text",{className:"rmg-name__en",y:22+13*e,children:t},e)})),(0,d.jsx)("text",{className:"rmg-name__zh",y:-35,children:w[e].map((function(t){return f[t].name[0]})).join("/")+"\u65b9\u5411"}),(0,d.jsx)("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+w[e].map((function(t){return f[t].name[1]})).join("/").replace("\\"," ")})]})]},e)}))}),(0,d.jsx)("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(e={},(0,r.Z)(e,"--translate-x",h===u.wA.left?"".concat((99+27*(1+v)+N)/2-20,"px"):"".concat((m[u.Ht.RunIn]-45-y.width-41-27+N+t.nameBBox.width+55+25.9)/2+20,"px")),(0,r.Z)(e,"--rotate",h===u.wA.left?"0deg":"180deg"),e)})]})},z=["num"];function w(t){var e=t.num,n=(0,l.Z)(t,z);return(0,d.jsxs)("g",(0,i.Z)((0,i.Z)({textAnchor:"middle",fill:"var(--rmg-theme-fg)"},n),{},{children:[(0,d.jsx)("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),(0,d.jsx)("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:e}),(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"\u7ad9\u53f0"}),(0,d.jsx)("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]}))}var v=function(){var t,e=(0,x.Qy)((function(t){return t.param.svgWidth})),n=(0,x.Qy)((function(t){return t.param.direction})),a=(0,x.Qy)((function(t){return t.param.info_panel_type})),c=(0,x.Qy)((function(t){return t.param.platform_num})),i=(0,x.Qy)((function(t){return t.param.psd_num})),l={platform:"translate(".concat(n===u.wA.left?50:-50,",45)")};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{variant:a,isShowLight:a!==u.p.gz2otis,isShowPSD:a!==u.p.gz2otis&&i}),(0,d.jsx)("g",{transform:a===u.p.gz2otis?l.platform:"",children:(0,d.jsx)(w,{num:c,style:(t={},(0,r.Z)(t,"--translate-x","".concat(n===u.wA.left?e[u.Ht.RunIn]-100:100,"px")),(0,r.Z)(t,"--translate-y","calc(var(--rmg-svg-height) / 2 - 30px)"),(0,r.Z)(t,"transform","translate(var(--translate-x, 100px), var(--translate-y))"),t)})}),(0,d.jsx)(p,{}),a===u.p.gz2otis&&(0,d.jsx)(N,{})]})},N=function(){var t=(0,x.Qy)((function(t){return t.param.svgWidth})),e=(0,x.Qy)((function(t){return t.param.svg_height}));return(0,d.jsxs)("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[(0,d.jsx)("line",{y2:e,transform:"translate(".concat(t[u.Ht.RunIn]/2,",0)")}),(0,d.jsx)("line",{x2:t[u.Ht.RunIn],transform:"translate(0,90)"})]})}},26541:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(1413),a=n(4942),s=n(72791),c=n(45987),i=n(20713),l=n(80184),o=["num","inStrip"];function m(t){var e=t.num,n=t.inStrip,a=(0,c.Z)(t,o);return(0,l.jsxs)("g",(0,r.Z)((0,r.Z)({textAnchor:"middle",fill:n?i.AJ.black:"var(--rmg-theme-fg)"},a),{},{children:[(0,l.jsx)("rect",{height:40,width:40,rx:4,x:-20,fill:n?"#fff":"var(--rmg-theme-colour)"}),(0,l.jsx)("text",{className:"rmg-name__en",fontSize:20,dy:12,children:e}),(0,l.jsx)("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"\u5c4f\u853d\u95e8"}),(0,l.jsx)("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]}))}var u=function(t){var e=function(t){switch(t){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(t.variant),n=s.useMemo((function(){switch(t.variant){case"gz1":return(0,l.jsx)("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return(0,l.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return(0,l.jsx)("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return(0,l.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return(0,l.jsx)("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return(0,l.jsx)("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return(0,l.jsx)("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return(0,l.jsx)("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return(0,l.jsx)(l.Fragment,{})}}),[t.variant]);return(0,l.jsxs)("g",{transform:"translate(0,".concat("gz4"===t.variant?-20:0,")"),children:[(0,l.jsx)("rect",{id:"strip_gz",style:(0,a.Z)({},"--height","".concat(e,"px"))}),(0,l.jsx)("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:t.isShowLight&&n}),!1!==t.isShowPSD&&(0,l.jsx)(x,(0,r.Z)({},t))]})},x=s.memo((function(t){var e,n=["gz28","gz2otis","gz6","gzgf"].includes(t.variant),r=function(t){switch(t){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(t.variant);return(0,l.jsx)(m,{num:t.isShowPSD,inStrip:n,style:(e={},(0,a.Z)(e,"--psd-dy",r),(0,a.Z)(e,"transform","translate(var(--translate-x), var(--translate-y))"),(0,a.Z)(e,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),(0,a.Z)(e,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),e)})}),(function(t,e){return t.variant===e.variant&&t.isShowPSD===e.isShowPSD}))}}]);
//# sourceMappingURL=runinGZMTR.2915e7a3.chunk.js.map