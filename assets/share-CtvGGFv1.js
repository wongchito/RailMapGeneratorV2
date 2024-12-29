import{S as P}from"./index-BkeaDgRh.js";const E=(i,t,s)=>Object.keys(i).reduce((e,n)=>({...e,[n]:i[n].children.reduce((r,l)=>({...r,[l]:1+t(i,l)+s(i,n)}),{})}),{}),c=(i,t,s)=>{if(i===t)return{len:0,nodes:[i]};const e=[],n=[];Object.keys(s[i]).forEach(l=>{const o=c(l,t,s);o.len<0||(e.push(s[i][l]+o.len),o.nodes.unshift(i),n.push(o.nodes))});const r=Math.max(...e);return{len:r,nodes:n[e.indexOf(r)]}},L=(i,t,s)=>{const e=c("linestart","lineend",t);if(e.nodes.includes(i))return c(e.nodes[1],i,t).len;{const n=s.filter($=>$.includes(i))[0];let r=i;for(;!e.nodes.includes(r);)r=n[n.indexOf(r)-1];let l=i;for(;!e.nodes.includes(l);)l=n[n.indexOf(l)+1];const o=r==="linestart",S=l==="lineend",h=[];return!o&&!S?(h[0]=c(e.nodes[1],r,t).len,h[1]=c(r,l,t).len,h[2]=c(r,i,t).len,h[3]=c(i,l,t).len):o?(h[0]=0,h[1]=c(e.nodes[1],l,t).len,h[2]=c(n[1],i,t).len,h[3]=c(i,l,t).len):(h[0]=c(e.nodes[1],r,t).len,h[1]=c(r,e.nodes.slice(-2)[0],t).len,h[2]=c(r,i,t).len,h[3]=c(i,n.slice(-2)[0],t).len),h[0]+h[2]*h[1]/(h[2]+h[3])}},m=(i,t,s)=>{for(const e of s){const n=e.indexOf(i),r=e.indexOf(t);if(r!==-1&&r<n)return!0}return!1},w=(i,t,s)=>{for(const e of s){const n=e.indexOf(i),r=e.indexOf(t);if(n!==-1&&n<r)return!0}return!1},F=(i,t,s)=>(console.log("computing stations' states"),[...new Set([].concat(...t))].reduce((e,n)=>({...e,[n]:n===i?0:(s===P.right?w(i,n,t):m(i,n,t))?1:-1}),{}));class W{constructor(t){this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=s=>0,this.rightWideFactor=s=>0,this.pathTurnParams=s=>{const r=35-17.5*Math.sqrt(3),l=s-2*r,o=l*Math.sqrt(3);return{tr:35,dx_a:17.5,dy_a:r,dx_l:o,dy_l:l}},this.pathTurnSE=s=>{const{tr:e,dx_a:n,dy_a:r,dx_l:l,dy_l:o}=this.pathTurnParams(s);return"a ".concat(e,",").concat(e," 0 0,1 ").concat(n,",").concat(r," l ").concat(l,",").concat(o," a ").concat(e,",").concat(e," 0 0,0 ").concat(n,",").concat(r)},this.pathTurnNE=s=>{const{tr:e,dx_a:n,dy_a:r,dx_l:l,dy_l:o}=this.pathTurnParams(s);return"a ".concat(e,",").concat(e," 0 0,0 ").concat(n,",").concat(-r," l ").concat(l,",").concat(-o," a ").concat(e,",").concat(e," 0 0,1 ").concat(n,",").concat(-r)},this.stnList=t.stnList,this.criticalPath=t.criticalPath}getYShare(t){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;const s=this.stnList[t].parents[0];if(s)if(this.stnList[s].children.length===1){const e=this.getYShare(s);return this.yShares[t]=e,e}else{const e=this.stnList[s].children.indexOf(t)===0?1:-1;return this.yShares[t]=e,e}else return this.yShares[t]=0,0}static getYShares(t){console.log("computing y shares");const s=new this({stnList:t});return Object.keys(t).forEach(e=>{["linestart","lineend"].includes(e)||e in s.yShares||s.getYShare(e)}),s.yShares}_linePath(t,s,e,n,r,l,o,S){let[h,$,g]=[];const a=[],{dx_a:_,dx_l:O}=this.pathTurnParams(l),y=_+O/2,d=(s[1]-s[0])/o.len*2,x=((s[1]-s[0])/o.len-2*y)/2;return x+d<0&&console.warn("SVG width too small! ".concat(x+d)),t.forEach(p=>{const f=n[p],u=r[p];if(!$&&$!==0){[h,g,$]=[p,f,u],t.length===1?a.push("M ".concat(f,",").concat(u)):e[0].includes(p)?e[0].includes(t[1])?a.push("M ".concat(f,",").concat(u)):(n[t[1]]>0&&a.push("M ".concat(f,",").concat(u+S)),r[t[1]]<0&&a.push("M ".concat(f,",").concat(u-S))):a.push("M ".concat(f,",").concat(u));return}u>$?(a.push(u===0?"h ".concat(f-g-d*this.leftWideFactor(p)-x-y*2):"h ".concat(d*this.rightWideFactor(h)+x)),a.push(this.pathTurnSE(l))):u<$&&(a.push(u===0?"h ".concat(f-g-d*this.leftWideFactor(p)-x-y*2):"h ".concat(d*this.rightWideFactor(h)+x)),a.push(this.pathTurnNE(l))),a.push("H ".concat(f)),[h,g,$]=[p,f,u]}),a.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}const H=(i,t)=>{i=i.filter(n=>!["linestart","lineend"].includes(n));let s=i.filter(n=>t[n]>=0),e=i.filter(n=>t[n]<=0);return s.length===1&&(e=i),s.filter(n=>e.indexOf(n)!==-1).length===0&&s.length&&(e[0]===i[0]?e.push(s[0]):s[0]===i[0]&&s[s.length-1]===i[i.length-1]&&e.length?(e=i,s=[]):e.unshift(s[s.length-1])),{main:s,pass:e}};export{W as S,E as a,F as b,c,H as d,L as g};
