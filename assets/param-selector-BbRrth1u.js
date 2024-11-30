import{j as O,ag as T,aN as C,aO as A,af as D,e as v,a8 as R,aK as g,aP as N,r as f,h as E,aE as _,aQ as x,aR as P,l as k}from"./index-ByHbMz0C.js";import{u as W,j as d,c as F,g as M,aR as L,ay as B,$ as z,az as $,a1 as U,a2 as G,a3 as Y,a5 as J,O as V,B as Z,N as H,ah as p,a4 as K}from"./chakra-Blar0cOi.js";import{r as m,u as S}from"./react-BGwHOppr.js";var Q=function(e){var n=e.children,i=e.noWrap,o=W("RmgOutput",{noWrap:i});return d.jsx(F.output,{sx:o,children:n})};function X(e){var n=e.fields,i=e.noLabel,o=e.minW;return d.jsx(M,{wrap:"wrap",children:n.map(function(r,a){if(r.hidden)return d.jsx(m.Fragment,{},a);var l=r.minW||o,c=l==="full";return d.jsx(O,{className:c?"mw-full":"",label:r.label,flex:c?void 0:1,minW:c?void 0:l,noLabel:i,oneLine:r.oneLine,helper:r.helper,errorMessage:r.errorMessage,children:function(t){switch(t.type){case"input":return d.jsx(D,{placeholder:t.placeholder,defaultValue:t.value,type:t.variant,validator:t.validator,onDebouncedChange:t.onChange,delay:t.debouncedDelay,optionList:t.optionList,isDisabled:t.isDisabled});case"output":return d.jsx(Q,{noWrap:t.noWrap,children:t.value});case"textarea":return d.jsx(A,{placeholder:t.placeholder,defaultValue:t.value,onDebouncedChange:t.onChange,isDisabled:t.isDisabled});case"slider":return d.jsx(C,{defaultValue:t.value,min:t.min,max:t.max,step:t.step,onThrottledChange:t.onChange,leftIcon:t.leftIcon,rightIcon:t.rightIcon,isDisabled:t.isDisabled});case"select":return d.jsx(T,{defaultValue:t.value,onChange:function(s){var h,u=s.target.value;return(h=t.onChange)===null||h===void 0?void 0:h.call(t,typeof t.value=="number"?Number(u):u.toString())},options:t.options,disabledOptions:t.disabledOptions,isInvalid:t.isInvalid,isDisabled:t.isDisabled});case"switch":return d.jsx(L,{isChecked:t.isChecked,isDisabled:t.isDisabled,onChange:function(s){var h,u=s.target.checked;return(h=t.onChange)===null||h===void 0?void 0:h.call(t,u)}});case"custom":return t.component;default:return d.jsx("div",{})}}(r)},a)})})}const _e=(e,n,i)=>{const o=new Blob([i],{type:n});q(e,o)},q=(e,n)=>{const i=window.URL.createObjectURL(n),o=document.createElement("a");o.href=i,o.download=e,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(i)},ye=e=>new Promise(n=>{const i=new FileReader;i.onloadend=()=>n(i.result),i.readAsText(e)}),be=()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),ee=e=>{if(e){const n=new Date().getTime()-e;return n<60*1e3?["Just now"]:n<2*60*1e3?["1","minute ago"]:n<60*60*1e3?[Math.floor(n/1e3/60).toString(),"minutes ago"]:n<2*60*60*1e3?["1","hour ago"]:n<24*60*60*1e3?[Math.floor(n/1e3/60/60).toString(),"hours ago"]:n<48*60*60*1e3?["1","day ago"]:[Math.floor(n/1e3/60/60/24).toString(),"days ago"]}else return["Unknown"]},me=e=>new Promise(n=>{setTimeout(n,e)}),ve=e=>{var n,i,o,r,a,l,c;"line_name"in e||(e.line_name=["路線名","Name of Line"]),delete e.fontZH,delete e.fontEN,delete e.weightZH,delete e.weightEN;for(const[t,s]of Object.entries(e.stn_list))"branch"in s||(e.stn_list[t].branch={},s.children.length===2&&(e.stn_list[t].branch.right=["through",s.children[1]]),s.parents.length===2&&(e.stn_list[t].branch.left=["through",s.parents[1]]),Object.keys(e.stn_list[t].branch).length===0&&delete e.stn_list[t].branch);"psd_num"in e?e.psd_num=e.psd_num.toString():e.psd_num="1","line_num"in e||(e.line_num="1"),e.theme.length===3&&e.theme.push("#fff");for(const[t,s]of Object.entries(e.stn_list))"num"in s||(e.stn_list[t].num="00"),"interchange"in s&&s.interchange.map(h=>h.forEach(u=>{u.length===5&&u.splice(3,0,"#fff")}));for(const[t,s]of Object.entries(e.stn_list))s.change_type==="osi22_end_p"&&(e.stn_list[t].change_type="osi22_pr"),s.change_type==="osi22_end_u"&&(e.stn_list[t].change_type="osi22_ur");for(const[t,s]of Object.entries(e.stn_list))"interchange"in s||(e.stn_list[t].interchange=[[]]);"info_panel_type"in e?e.info_panel_type=(t=>{switch(t){case"gz_1":case"panasonic":return"gz28";case"gz_2":return"gz6";case"gz_3":return"gz3";default:return t}})(e.info_panel_type):e.info_panel_type="gz28","direction_gz_x"in e||(e.direction_gz_x=50),"direction_gz_y"in e||(e.direction_gz_y=70);for(const[t,s]of Object.entries(e.stn_list))"transfer"in s||(e.stn_list[t].transfer={tick_direc:s.change_type==="none"||s.change_type==="int2"?"r":(n=s.change_type)==null?void 0:n.split("_")[1].split("").slice().reverse()[0],paid_area:((i=s.change_type)==null?void 0:i.indexOf("osi"))!==-1?((o=s.change_type)==null?void 0:o.split("_")[1][0])==="p":!0,osi_names:((r=s.change_type)==null?void 0:r.indexOf("osi"))!==-1?[s.interchange[1][0]]:[],info:s.interchange.length===2?[s.interchange[0],s.interchange[1].slice(1)]:s.interchange}),delete e.stn_list[t].change_type,delete e.stn_list[t].interchange;for(const[t,s]of Object.entries(e.stn_list))"services"in s||(e.stn_list[t].services=["local"]),"facility"in s?s.facility===""&&(e.stn_list[t].facility=void 0):e.stn_list[t].facility=s.usage||void 0,delete e.stn_list[t].usage;"customiseMTRDest"in e||(e.customiseMTRDest={isLegacy:e.dest_legacy||!1,terminal:!1}),delete e.dest_legacy,"svgWidth"in e||(e.svgWidth={destination:e.svg_dest_width,runin:e.svg_dest_width,railmap:e.svg_width,indoor:e.svg_width}),"indoor"in e.svgWidth||(e.svgWidth.indoor=e.svgWidth.railmap),delete e.svg_width,delete e.svg_dest_width,e.notesGZMTR=(a=e.notesGZMTR)==null?void 0:a.map(t=>t.length===4?t.concat([!1]):t),delete e.char_form,delete e.show_outer,delete e.strip_pc,delete e.txt_bg_gap,"namePosMTR"in e||(e.namePosMTR={isStagger:!0,isFlip:e.txt_flip}),delete e.txt_flip,Object.keys(e.stn_list).forEach(t=>{"secondaryName"in e.stn_list[t]&&e.stn_list[t].secondaryName===!1&&delete e.stn_list[t].secondaryName,"type"in e.stn_list[t].transfer&&delete e.stn_list[t].transfer.type}),e.style=e.style===void 0||!Object.values(v).includes(e.style)?v.MTR:e.style,e.coline=(l=e.coline)!=null?l:[],e.loop=(c=e.loop)!=null?c:!1,e.loop_info=e.loop_info===void 0?{bank:!0,left_and_right_factor:0,bottom_factor:1}:{...e.loop_info,bottom_factor:Math.max(e.loop_info.bottom_factor,1)};for(const[t,s]of Object.entries(e.stn_list))"loop_pivot"in s||(e.stn_list[t].loop_pivot=!1);return Array.isArray(e.coline)&&(e.coline=e.coline.reduce((t,s)=>({...t,[R(4)]:s}),{})),e.platform_num===!1&&(e.platform_num=""),Object.values(e.stn_list).forEach(t=>{var h,u;const s=t;s.one_line=(h=s.one_line)!=null?h:!1,s.int_padding=(u=s.int_padding)!=null?u:e.loop?250:355}),e.branchSpacingPct===void 0&&(e.style===v.SHMetro?e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*300):e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*200),delete e.branch_spacing),te(e),ne(e),re(e),e},te=e=>{for(const[n,i]of Object.entries(e.stn_list)){const o=i.transfer.info;o&&(e.stn_list[n].transfer.groups=o.map((r,a)=>r.length?{name:i.transfer.osi_names[a-1],lines:r.map(l=>{const c=l;return{theme:c.slice(0,4),name:c.slice(4,6)}})}:{lines:[]})),delete e.stn_list[n].transfer.info,delete e.stn_list[n].transfer.osi_names}},ne=e=>{for(const[n,i]of Object.entries(e.stn_list)){const{name:o,secondaryName:r,localisedName:a,localisedSecondaryName:l}=i;!a&&o&&(e.stn_list[n].localisedName={zh:o[0],en:o[1]},delete e.stn_list[n].name),!l&&r&&(e.stn_list[n].localisedSecondaryName={zh:r[0],en:r[1]},delete e.stn_list[n].secondaryName)}},w=e=>e.length===4&&e.every(n=>typeof n=="string")&&!!e[2].match(/^#[0-9a-fA-F]{6}$/)&&Object.values(E).includes(e[3]),se=e=>{const n=[],i=(o,r)=>{if(Array.isArray(o)&&w(o)){n.push({path:r||"",value:o});return}for(const a in o){const l=o[a],c=r?"".concat(r,".").concat(a):a;Array.isArray(l)?w(l)?n.push({path:c,value:l}):l.forEach((t,s)=>i(t,"".concat(c,".").concat(s))):l&&typeof l=="object"&&i(l,c)}};return i(e),n},oe=(e,n)=>{const i={},o=(r,a,l)=>{let c=r;for(let s=0;s<l.length-1;s++){if(l[s]==="*"){Object.keys(c).forEach(h=>o(c,[...a,...l.slice(0,s)],[h,...l.slice(s+1)]));return}if(c=c==null?void 0:c[l[s]],c===void 0)return}(c==null?void 0:c[l[l.length-1]])!==void 0&&(i[[...a,...l].join(".")]=c==null?void 0:c[l[l.length-1]])};return o(e,[],n.split(".")),i},I=(e,n,i)=>{const o=n.split(".");let r=e;for(let a=0;a<o.length-1;a++)r=r[o[a]];r[o[o.length-1]]=i},je=async e=>{const n=new Date().getTime(),i=se(e);g.info("Found all themes pending for update",i);const o=JSON.parse(JSON.stringify(e)),r=5e3;let a,l=!1;const c=new Promise((t,s)=>{a=setTimeout(()=>{l=!0,s("Executing time exceeds ".concat(r,"ms"))},r),(async()=>{for(const{path:h,value:u}of i){if(l)throw new Error("Update aborted");const y=await N(u);I(o,h,y)}})().then(t).catch(s)});try{return await c,g.info("Themes update completed, elapsed time ".concat((new Date().getTime()-n)/1e3," sec")),o}catch(t){return g.warn("Error occurs when updating themes, elapsed time ".concat((new Date().getTime()-n)/1e3," sec"),t),o}finally{clearTimeout(a)}},ie={notesGZMTR:e=>!(e!=null&&e.length),"stn_list.*.branch.left":e=>!(e!=null&&e.length),"stn_list.*.branch.right":e=>!(e!=null&&e.length),"stn_list.*.branch":e=>!e||Object.keys(e).length===0,"stn_list.*.facility":e=>!e,"stn_list.*.transfer.groups.*.lines":e=>!(e!=null&&e.length)},re=e=>{const n=structuredClone(e);return Object.entries(ie).forEach(([i,o])=>{Object.entries(oe(n,i)).forEach(([r,a])=>{g.debug("Sanitising",r,a),o(a)&&I(n,r,void 0)})}),n.version=f.getAppVersion(),n},le=()=>{const e="".concat(f.getAppName(),"__").concat(_.PARAM_CONFIG_BY_ID),n=Object.entries(f.storage.getAll()).filter(([i])=>i.startsWith(e)).map(([i,o])=>{const r=i.slice(e.length);if(o)try{return{...JSON.parse(o),id:r}}catch(a){return{id:r}}else return{id:r}});return g.info("loadParamRegistry(), Found param config in localStorage",n.map(i=>i.id)),n},xe=()=>{const e=le(),n="".concat(f.getAppName(),"__").concat(_.PARAM_BY_ID),i=Object.keys(f.storage.getAll()).filter(o=>o.startsWith(n)).map(o=>{var a;const r=o.slice(n.length);return(a=e.find(l=>l.id===r))!=null?a:{id:r}});return g.info("getParamRegistry(), Actual param found in localStorage",i.map(o=>o.id)),e.filter(o=>i.every(r=>r.id!==o.id)).forEach(o=>f.storage.remove(_.PARAM_CONFIG_BY_ID+o.id)),i},ce=e=>{const n=f.storage.get(_.PARAM_CONFIG_BY_ID+e);return n&&JSON.parse(n)},pe=e=>{const n=f.storage.get(_.PARAM_BY_ID+e);return{param:n&&JSON.parse(n),config:ce(e)}},ae=(e,n)=>{const i=R();return f.storage.set(_.PARAM_BY_ID+i,e),f.storage.set(_.PARAM_CONFIG_BY_ID+i,JSON.stringify({name:n,lastModified:Date.now()})),i},we=async e=>{const n=e.split("/").at(-1);try{const i=await fetch(e);if(i.ok){const o=await i.text();return ae(o,n)}else return g.warn("Failed to download param"),null}catch(i){return g.warn("Failed to download param.",i),null}};function de(e){var s;const{config:n,onClose:i,onUpdate:o}=e,{t:r}=S(),[a,l]=m.useState((s=n==null?void 0:n.name)!=null?s:"");m.useEffect(()=>{var h;n&&l((h=n.name)!=null?h:"")},[n]);const c=[{type:"input",label:r("Project name"),value:a,onChange:l,debouncedDelay:0}],t=()=>{var h;n&&((h=n.name)!=null?h:"")!==a&&o({...n,name:a})};return d.jsxs(B,{isOpen:!!n,onClose:i,isCentered:!0,children:[d.jsx(z,{}),d.jsxs($,{children:[d.jsx(U,{children:r("Edit project info")}),d.jsx(G,{}),d.jsx(Y,{children:d.jsx(X,{fields:c})}),d.jsx(J,{children:d.jsx(V,{colorScheme:"primary",onClick:t,children:r("Confirm")})})]})]})}const ue={flex:"2 1 0%",overflow:"hidden",minW:{base:"unset",md:240},w:{base:"100%",md:"unset"},mr:{base:0,md:2},mb:{base:2,md:0},"& > div":{flexDirection:"column",h:200,overflowX:"hidden",overflowY:"auto",borderRadius:"md",borderWidth:2,"& >.chakra-button":{alignItems:"center"},"& .chakra-button__group":{"& button:not(:first-of-type)":{h:"100%"}}}};function Re(e){const{paramRegistry:n,downloading:i,selectedParam:o,onParamSelect:r,onParamRemove:a,onParamUpdate:l}=e,{t:c}=S(),[t,s]=m.useState(),h=u=>{l==null||l(u),s(void 0)};return d.jsxs(Z,{sx:ue,children:[d.jsxs(M,{children:[i&&d.jsx(x,{variant:"ghost",primaryText:c("Downloading")+"...",secondaryText:i,isDisabled:!0}),n.slice().sort((u,y)=>{var b,j;return((b=y.lastModified)!=null?b:0)-((j=u.lastModified)!=null?j:0)}).map(u=>{var y;return d.jsxs(H,{size:"sm",isAttached:!0,colorScheme:o===u.id?"primary":void 0,variant:o===u.id?"solid":"ghost",children:[d.jsx(x,{primaryText:(y=u.name)!=null?y:c("Project")+" "+u.id,secondaryText:c("Last modified")+": "+ee(u.lastModified).map(b=>c(b)).join(" "),"aria-pressed":o===u.id,onClick:()=>r(u.id)}),l&&d.jsx(p,{"aria-label":c("Edit project info"),title:c("Edit project info"),icon:d.jsx(P,{}),onClick:()=>s(u)}),a&&d.jsx(p,{"aria-label":c("Remove project"),title:c("Remove project"),icon:d.jsx(k,{}),onClick:()=>a(u.id)})]},u.id)})]}),n.length>=10&&d.jsx(K,{as:"em",fontSize:"xs",children:c("You have reached the maximum number of projects.")}),d.jsx(de,{config:t,onClose:()=>s(void 0),onUpdate:h})]})}export{Re as P,X as R,_e as a,ae as b,xe as c,q as d,pe as e,je as f,ce as g,we as h,be as i,ye as r,re as s,ve as u,me as w};
