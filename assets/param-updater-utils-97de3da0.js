import{j as l,e as w,an as T,a3 as M,M as C,a4 as R,q as p,r as S,s as D,v as O,d as I,Q as E,B as k,G as v,t as P}from"./chakra-6a4814c6.js";import{r as _}from"./react-5f18deab.js";import{k as L,ay as A,b5 as z,b6 as N,ax as W,b as m,b7 as x,b8 as F,m as B,e as b,ap as U,b9 as $,i as G}from"./index-29d487e9.js";function Z(e){var s=e.fields,o=e.noLabel,i=e.minW;return l.jsx(w,{wrap:"wrap",children:s.map(function(c,u){if(c.hidden)return l.jsx(_.Fragment,{},u);var a=c.minW||i,r=a==="full";return l.jsx(L,{className:r?"mw-full":"",label:c.label,flex:r?void 0:1,minW:r?void 0:a,noLabel:o,oneLine:c.oneLine,children:function(t){switch(t.type){case"input":return l.jsx(W,{placeholder:t.placeholder,defaultValue:t.value,type:t.variant,validator:t.validator,onDebouncedChange:t.onChange,delay:t.debouncedDelay,optionList:t.optionList,isDisabled:t.isDisabled});case"textarea":return l.jsx(N,{placeholder:t.placeholder,defaultValue:t.value,onDebouncedChange:t.onChange,isDisabled:t.isDisabled});case"slider":return l.jsx(z,{defaultValue:t.value,min:t.min,max:t.max,step:t.step,onThrottledChange:t.onChange,leftIcon:t.leftIcon,rightIcon:t.rightIcon,isDisabled:t.isDisabled});case"select":return l.jsx(A,{defaultValue:t.value,onChange:function(n){var h,d=n.target.value;return(h=t.onChange)===null||h===void 0?void 0:h.call(t,typeof t.value=="number"?Number(d):d.toString())},options:t.options,disabledOptions:t.disabledOptions,isInvalid:t.isInvalid,isDisabled:t.isDisabled});case"switch":return l.jsx(T,{isChecked:t.isChecked,isDisabled:t.isDisabled,onChange:function(n){var h,d=n.target.checked;return(h=t.onChange)===null||h===void 0?void 0:h.call(t,d)}});case"custom":return t.component;default:return l.jsx("div",{})}}(c)},u)})})}const ne=(e,s,o)=>{const i=new Blob([o],{type:s});H(e,i)},H=(e,s)=>{const o=window.URL.createObjectURL(s),i=document.createElement("a");i.href=o,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(o)},se=e=>new Promise(s=>{const o=new FileReader;o.onloadend=()=>s(o.result),o.readAsText(e)}),ie=()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),V=e=>{if(e){const s=new Date().getTime()-e;return s<60*1e3?["Just now"]:s<2*60*1e3?["1","minute ago"]:s<60*60*1e3?[Math.floor(s/1e3/60).toString(),"minutes ago"]:s<2*60*60*1e3?["1","hour ago"]:s<24*60*60*1e3?[Math.floor(s/1e3/60/60).toString(),"hours ago"]:s<48*60*60*1e3?["1","day ago"]:[Math.floor(s/1e3/60/60/24).toString(),"days ago"]}else return["Unknown"]},oe=e=>new Promise(s=>{setTimeout(s,e)});function J(e){var n;const{config:s,onClose:o,onUpdate:i}=e,{t:c}=m(),[u,a]=_.useState((n=s==null?void 0:s.name)!=null?n:"");_.useEffect(()=>{var h;s&&a((h=s.name)!=null?h:"")},[s]);const r=[{type:"input",label:c("Project name"),value:u,onChange:a,debouncedDelay:0}],t=()=>{var h;s&&((h=s.name)!=null?h:"")!==u&&i({...s,name:u})};return l.jsxs(M,{isOpen:!!s,onClose:o,isCentered:!0,children:[l.jsx(C,{}),l.jsxs(R,{children:[l.jsx(p,{children:c("Edit project info")}),l.jsx(S,{}),l.jsx(D,{children:l.jsx(Z,{fields:r})}),l.jsx(O,{children:l.jsx(I,{colorScheme:"primary",onClick:t,children:c("Confirm")})})]})]})}const Y={flex:"2 1 0%",overflow:"hidden",minW:{base:"unset",md:240},w:{base:"100%",md:"unset"},mr:{base:0,md:2},mb:{base:2,md:0},"& > div":{flexDirection:"column",h:200,overflowX:"hidden",overflowY:"auto",borderRadius:"md",borderWidth:2,"& >.chakra-button":{alignItems:"center"},"& .chakra-button__group":{"& button:not(:first-of-type)":{h:"100%"}}}};function le(e){const{paramRegistry:s,downloading:o,selectedParam:i,onParamSelect:c,onParamRemove:u,onParamUpdate:a}=e,{t:r}=m(),[t,n]=_.useState(),h=d=>{a==null||a(d),n(void 0)};return l.jsxs(E,{sx:Y,children:[l.jsxs(w,{children:[o&&l.jsx(x,{variant:"ghost",primaryText:r("Downloading")+"...",secondaryText:o,isDisabled:!0}),s.slice().sort((d,f)=>{var g,y;return((g=f.lastModified)!=null?g:0)-((y=d.lastModified)!=null?y:0)}).map(d=>{var f;return l.jsxs(k,{size:"sm",isAttached:!0,colorScheme:i===d.id?"primary":void 0,variant:i===d.id?"solid":"ghost",children:[l.jsx(x,{primaryText:(f=d.name)!=null?f:r("Project")+" "+d.id,secondaryText:r("Last modified")+": "+V(d.lastModified).map(g=>r(g)).join(" "),"aria-pressed":i===d.id,onClick:()=>c(d.id)}),a&&l.jsx(v,{"aria-label":r("Edit project info"),title:r("Edit project info"),icon:l.jsx(F,{}),onClick:()=>n(d)}),u&&l.jsx(v,{"aria-label":r("Remove project"),title:r("Remove project"),icon:l.jsx(B,{}),onClick:()=>u(d.id)})]},d.id)})]}),s.length>=10&&l.jsx(P,{as:"em",fontSize:"xs",children:r("You have reached the maximum number of projects.")}),l.jsx(J,{config:t,onClose:()=>n(void 0),onUpdate:h})]})}const ce=e=>{var s,o,i,c,u,a,r;"line_name"in e||(e.line_name=["路線名","Name of Line"]),"dest_legacy"in e||(e.dest_legacy=!1),delete e.fontZH,delete e.fontEN,delete e.weightZH,delete e.weightEN;for(const[t,n]of Object.entries(e.stn_list))"branch"in n||(e.stn_list[t].branch={left:[],right:[]},n.children.length===2?e.stn_list[t].branch.right=["through",n.children[1]]:e.stn_list[t].branch.right=[],n.parents.length===2?e.stn_list[t].branch.left=["through",n.parents[1]]:e.stn_list[t].branch.left=[]);"psd_num"in e?e.psd_num=e.psd_num.toString():e.psd_num="1","line_num"in e||(e.line_num="1"),e.theme.length===3&&e.theme.push("#fff");for(const[t,n]of Object.entries(e.stn_list))"num"in n||(e.stn_list[t].num="00"),"interchange"in n&&n.interchange.map(h=>h.forEach(d=>{d.length===5&&d.splice(3,0,"#fff")}));for(const[t,n]of Object.entries(e.stn_list))n.change_type==="osi22_end_p"&&(e.stn_list[t].change_type="osi22_pr"),n.change_type==="osi22_end_u"&&(e.stn_list[t].change_type="osi22_ur");for(const[t,n]of Object.entries(e.stn_list))"interchange"in n||(e.stn_list[t].interchange=[[]]);"info_panel_type"in e?e.info_panel_type=(t=>{switch(t){case"gz_1":case"panasonic":return"gz28";case"gz_2":return"gz6";case"gz_3":return"gz3";default:return t}})(e.info_panel_type):e.info_panel_type="gz28","direction_gz_x"in e||(e.direction_gz_x=50),"direction_gz_y"in e||(e.direction_gz_y=70);for(const[t,n]of Object.entries(e.stn_list))"transfer"in n||(e.stn_list[t].transfer={tick_direc:n.change_type==="none"||n.change_type==="int2"?"r":(s=n.change_type)==null?void 0:s.split("_")[1].split("").slice().reverse()[0],paid_area:((o=n.change_type)==null?void 0:o.indexOf("osi"))!==-1?((i=n.change_type)==null?void 0:i.split("_")[1][0])==="p":!0,osi_names:((c=n.change_type)==null?void 0:c.indexOf("osi"))!==-1?[n.interchange[1][0]]:[],info:n.interchange.length===2?[n.interchange[0],n.interchange[1].slice(1)]:n.interchange}),delete e.stn_list[t].change_type,delete e.stn_list[t].interchange;for(const[t,n]of Object.entries(e.stn_list))"services"in n||(e.stn_list[t].services=["local"]),"facility"in n||("usage"in n?e.stn_list[t].facility=n.usage:e.stn_list[t].facility=""),delete e.stn_list[t].usage;"customiseMTRDest"in e||(e.customiseMTRDest={isLegacy:e.dest_legacy||!1,terminal:!1}),delete e.dest_legacy,"svgWidth"in e||(e.svgWidth={destination:e.svg_dest_width,runin:e.svg_dest_width,railmap:e.svg_width,indoor:e.svg_width}),"indoor"in e.svgWidth||(e.svgWidth.indoor=e.svgWidth.railmap),delete e.svg_width,delete e.svg_dest_width,"notesGZMTR"in e||(e.notesGZMTR=[]),e.notesGZMTR=(u=e.notesGZMTR)==null?void 0:u.map(t=>t.length===4?t.concat([!1]):t),delete e.char_form,delete e.show_outer,delete e.strip_pc,delete e.txt_bg_gap,"namePosMTR"in e||(e.namePosMTR={isStagger:!0,isFlip:e.txt_flip}),delete e.txt_flip,Object.keys(e.stn_list).forEach(t=>{"secondaryName"in e.stn_list[t]?e.stn_list[t].secondaryName!==!1&&e.stn_list[t].secondaryName.join()===","&&(e.stn_list[t].secondaryName=!1):e.stn_list[t].secondaryName=!1,"type"in e.stn_list[t].transfer&&delete e.stn_list[t].transfer.type}),e.style=e.style===void 0||!Object.values(b).includes(e.style)?b.MTR:e.style,e.coline=(a=e.coline)!=null?a:[],e.loop=(r=e.loop)!=null?r:!1,e.loop_info=e.loop_info===void 0?{bank:!0,left_and_right_factor:0,bottom_factor:1}:{...e.loop_info,bottom_factor:Math.max(e.loop_info.bottom_factor,1)};for(const[t,n]of Object.entries(e.stn_list))"loop_pivot"in n||(e.stn_list[t].loop_pivot=!1);return Array.isArray(e.coline)&&(e.coline=e.coline.reduce((t,n)=>({...t,[U(4)]:n}),{})),e.platform_num===!1&&(e.platform_num=""),Object.values(e.stn_list).forEach(t=>{var h,d;const n=t;n.one_line=(h=n.one_line)!=null?h:!1,n.int_padding=(d=n.int_padding)!=null?d:e.loop?250:355}),e.branchSpacingPct===void 0&&(e.style===b.SHMetro?e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*300):e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*200),delete e.branch_spacing),q(e),e},q=e=>{for(const[s,o]of Object.entries(e.stn_list)){const i=o.transfer.info;i&&(e.stn_list[s].transfer.groups=i.map((c,u)=>c.length?{name:o.transfer.osi_names[u-1],lines:c.map(a=>{const r=a;return{theme:r.slice(0,4),name:r.slice(4,6)}})}:{lines:[]})),delete e.stn_list[s].transfer.info,delete e.stn_list[s].transfer.osi_names}},j=e=>e.length===4&&e.every(s=>typeof s=="string")&&!!e[2].match(/^#[0-9a-fA-F]{6}$/)&&Object.values(G).includes(e[3]),Q=e=>{const s=[],o=(i,c)=>{if(Array.isArray(i)&&j(i)){s.push({path:c||"",value:i});return}for(const u in i){const a=i[u],r=c?"".concat(c,".").concat(u):u;Array.isArray(a)?j(a)?s.push({path:r,value:a}):a.forEach((t,n)=>o(t,"".concat(r,".").concat(n))):a&&typeof a=="object"&&o(a,r)}};return o(e),s},X=(e,s,o)=>{const i=s.split(".");let c=e;for(let u=0;u<i.length-1;u++)c=c[i[u]];c[i[i.length-1]]=o},re=async e=>{const s=new Date().getTime(),o=Q(e);console.log("[rmg] Found all themes pending for update",o);const i=JSON.parse(JSON.stringify(e)),c=5e3;let u,a=!1;const r=new Promise((t,n)=>{u=setTimeout(()=>{a=!0,n("Executing time exceeds ".concat(c,"ms"))},c),(async()=>{for(const{path:h,value:d}of o){if(a)throw new Error("Update aborted");const f=await $(d);X(i,h,f)}})().then(t).catch(n)});try{return await r,console.log("[rmg] Themes update completed, elapsed time ".concat((new Date().getTime()-s)/1e3," sec")),i}catch(t){return console.warn("[rmg] Error occurs when updating themes, elapsed time ".concat((new Date().getTime()-s)/1e3," sec"),t),i}finally{clearTimeout(u)}};export{le as P,Z as R,ne as a,re as b,H as d,ie as i,se as r,ce as u,oe as w};
