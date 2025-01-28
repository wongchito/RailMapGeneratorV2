System.register(["./chakra-legacy-CKMkCx0v.js","./index-legacy-B3-XoZiK.js","./react-legacy-wexXEtdT.js","./app-router-legacy-BHEyHpgU.js","./ag-grid-react-legacy-D8O6kZY8.js","./ag-grid-community-legacy-CFNcmYm4.js","./param-selector-legacy-11h6N_bv.js"],(function(e,a){"use strict";var n,r,t,l,s,o,i,c,d,u,g,h,m,p,x,f,S,b,R,j,w,y,N;return{setters:[e=>{n=e.ag,r=e.u,t=e.j,l=e.B,s=e.h,o=e.ao},e=>{i=e.d,c=e.u,d=e.e,u=e.aZ,g=e.h,h=e.a5,m=e.a4,p=e.ab,x=e.a_},e=>{f=e.u,S=e.a},e=>{b=e.g,R=e.R},e=>{j=e.A},e=>{w=e.M,y=e.v,N=e.w},null],execute:function(){e("default",(function(e){const{branchIndex:n}=e,{t:r,i18n:l}=f(),s=i(),w=c((e=>e.app.sidePanelMode)),{style:y,theme:N,stn_list:M,line_num:A,coline:G}=c((e=>e.param)),k=c((e=>e.helper.branches)),[T,I]=S.useState([]);S.useEffect((()=>{const e=k[n].reduce(((e,a)=>["linestart","lineend"].includes(a)?e:[...e,{...M[a],id:a,rowSpan:s(b(a,n))}]),[]);I(e)}),[k,n,M]);const z=S.useMemo((()=>[{headerName:r("StationAgGrid.num"),field:"num",cellRenderer:({value:e})=>t.jsx(C,{lineNumber:A,stationNumber:e,lineColour:N[2]}),pinned:"left",minWidth:110,hide:![d.GZMTR].includes(y)},{headerName:r("Chinese name"),field:"localisedName",valueFormatter:({value:e,data:a})=>e.zh+(y===d.GZMTR&&a?.localisedSecondaryName?.zh?` (${a.localisedSecondaryName.zh})`:"")},{headerName:r("English name"),cellRenderer:({data:e})=>t.jsx(R,{text:e.localisedName.en+(y===d.GZMTR&&e.localisedSecondaryName?.en?` (${e.localisedSecondaryName.en})`:"")}),minWidth:300},{headerName:r("StationAgGrid.interchange"),cellRenderer:({data:e})=>t.jsx(o,{children:e.transfer.groups.map((e=>e.lines??[])).flat().map(((e,a)=>t.jsx(u,{name:e.name,bg:e.theme?.[2]??"#aaaaaa",fg:e.theme?.[3]??g.white,showShortName:!0},a)))})},{headerName:r("StationAgGrid.coline"),rowSpan:({data:e})=>e?.rowSpan[0]??0,cellClassRules:{"rmg-ag-grid--spanned-cell":({data:e})=>!!e&&e.rowSpan[0]>0},cellRenderer:({data:e})=>t.jsx(o,{children:G[e.rowSpan[1]]?.colors?.map(((e,a)=>t.jsx(u,{name:[e[4],e[5]],bg:e[2],fg:e[3],showShortName:!0},a)))}),hide:![d.SHMetro].includes(y)}]),[y,N.toString(),l.language,A]),Z=S.useRef(null),D=S.useRef(!1);S.useEffect((()=>{D.current&&Z.current&&1===Z.current.api.getSelectedRows().length&&w!==h.STATION&&Z.current.api.deselectAll()}),[D.current,w]);const[E]=S.useState({resizable:!0}),H=S.useCallback((()=>{D.current=!0}),[D.current]),W=S.useCallback((({api:e})=>{const a=e.getSelectedRows()?.map((e=>e.id));console.log("StationAgGrid.handleSelectionChanged():: Row selection changed",a),a?.length&&(s(m(h.STATION)),s(p(a[0])),s(x(void 0)))}),[]),_=S.useCallback((({data:e})=>e.id),[]);return t.jsx(a,{children:t.jsx(j,{ref:Z,rowData:T,defaultColDef:E,columnDefs:z,getRowId:_,headerHeight:36,rowHeight:36,suppressCellFocus:!0,suppressMovableColumns:!0,suppressRowTransform:!0,rowSelection:v,onSelectionChanged:W,onGridReady:H,debug:!1})})}));var a=function(e){var a=e.children,s=n().colorMode,o=r("RmgAgGrid");return t.jsx(l,{className:"light"===s?"ag-theme-alpine":"ag-theme-alpine-dark",sx:o,children:a})};function C(e){const{lineNumber:a,stationNumber:n,lineColour:r}=e,l={h:"24px",position:"relative",color:"black","&::before":{content:"''",w:"calc(100% + 2px)",h:"26px",position:"absolute",top:"-1px",left:"-1px",bg:"white",borderRadius:"13px"},span:{display:"flex",justifyContent:"center",alignItems:"center",padding:"3px",minWidth:"24px",border:"2px solid",borderColor:r,zIndex:1,"&:first-of-type":{borderRadius:"12px 0 0 12px"},"&:last-of-type":{borderRadius:"0 12px 12px 0",marginLeft:"-2px"}}};return t.jsxs(s,{sx:l,children:[t.jsx("span",{children:a}),t.jsx("span",{children:n})]})}w.registerModules([y]),N({theme:"legacy"});const v={mode:"singleRow",checkboxes:!1,enableClickSelection:!0}}}}));
