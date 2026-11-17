const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Render-H3USS5FU-DzoKNfIo.js","assets/rolldown-runtime-C0FnF6B9.js","assets/react-eq8zrF0J.js","assets/jsx-runtime-BdxMnOeJ.js","assets/chunk-OT7NKYY4-B3lXTfzB.js","assets/dist-CjPHcooi.js","assets/chunk-ZOLLDKZQ-jSWU8Rer.js","assets/chunk-H635BA2V-BPvolWgK.js","assets/Editor-LJSLIQQP-CMiiss5h.js","assets/chunk-FWBFOZBF-CHeCfhh7.js","assets/index-1jWGqcP9.js","assets/createServerFn-3Q8pwDmE.js","assets/not-found-i5RsCZif.js","assets/link-DA12jADL.js","assets/useSelector-ddxOemjp.js","assets/with-selector-KizQ9DWZ.js","assets/matchContext-BZnn5Ntt.js","assets/lazyRouteComponent-8NaYVmqy.js","assets/content.functions-DkazP6T0.js","assets/preload-helper-Czpn1I53.js","assets/floating-ui.react-dom-C6Ye9LQ2.js","assets/medium-Ci9NM67K.js","assets/chunk-OGTX6PQW-CjARrFDb.js","assets/chunk-ZO7CHPM6-D5Uap_rX.js","assets/chunk-M6VGZJMS-9tKxfIoT.js","assets/chunk-5L3MP6BU-C7hIDvH3.js","assets/index.module-BPFBIcAU.js","assets/dist-Fh47-A_q.js"])))=>i.map(i=>d[i]);
import{i as e,o as t,t as n}from"./rolldown-runtime-C0FnF6B9.js";import{t as r}from"./react-eq8zrF0J.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{t as a}from"./preload-helper-Czpn1I53.js";import{a as o}from"./index-1jWGqcP9.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./chunk-OT7NKYY4-B3lXTfzB.js";import{t as p}from"./chunk-H635BA2V-BPvolWgK.js";import{$ as m,$t as h,At as g,B as _,Bt as v,C as y,Ct as b,Dt as x,Et as S,F as C,Ft as w,Gt as T,H as E,Ht as D,I as O,It as k,J as ee,Jt as A,K as te,Kt as j,L as M,Lt as N,Mt as P,Nt as ne,Ot as re,P as ie,Pt as F,Q as ae,Qt as oe,R as se,Rt as ce,S as le,St as I,Tt as ue,U as de,Ut as fe,V as pe,Vt as me,W as he,Wt as ge,Xt as _e,Y as ve,Yt as ye,Z as be,Zt as xe,_t as Se,b as Ce,bt as we,c as Te,ct as Ee,d as De,dt as Oe,en as ke,f as Ae,ft as je,g as Me,gt as Ne,h as Pe,ht as Fe,j as Ie,jt as Le,kt as Re,l as ze,lt as Be,mt as Ve,n as He,nt as Ue,ot as We,pt as Ge,q as Ke,qt as qe,rt as Je,st as Ye,u as Xe,v as Ze,vt as Qe,xt as $e,y as et,yt as tt,zt as nt}from"./chunk-FWBFOZBF-CHeCfhh7.js";import"./chunk-OGTX6PQW-CjARrFDb.js";import"./chunk-ZO7CHPM6-D5Uap_rX.js";import"./chunk-M6VGZJMS-9tKxfIoT.js";import{t as rt}from"./chunk-5L3MP6BU-C7hIDvH3.js";import{i as it,r as at,t as ot}from"./index.module-BPFBIcAU.js";var L=t(r(),1),R=i();u(),u(),u(),u(),u(),u();var st={zone:!0,allow:!0,disallow:!0,style:!0,minEmptyHeight:!0,className:!0,collisionAxis:!0,ref:!0,as:!0,content:!0,config:!0,metadata:!0,fieldTransforms:!0},ct={children:!0,dangerouslySetInnerHTML:!0},lt=new Set(Object.keys(st)),ut=new Set(Object.keys(ct)),dt=e=>{let t=Object.create(null),n=Object.create(null),r=Object.create(null);for(let i of Object.keys(e))ut.has(i)?(console.warn("The following prop is not supported by Puck DropZones or slots and will not be forwarded to the `as` element:",i),r[i]=e[i]):lt.has(i)?t[i]=e[i]:n[i]=e[i];return{props:t,forwardableProps:n,nonForwardableProps:r}};u(),u(),u();function ft(e,t,n){let r={};return Object.keys(e).forEach(i=>{let a=i;r[a]=r=>{var i=r,{parentId:o}=i,l=d(i,[`parentId`]);let u=l.propPath.replace(/\[\d+\]/g,`[*]`),f=t?.[l.propPath]||t?.[u]||n||!1,p=e[a];return p?.(c(s({},l),{field:l.field,isReadOnly:f,componentId:o}))}}),r}function pt(e,t,n,r,i){let a=(0,L.useMemo)(()=>ft(n,r,i),[n,r,i]),o=(0,L.useMemo)(()=>qe(t,a,e).props,[e,t,a]);return(0,L.useMemo)(()=>s(s({},t.props),o),[t.props,o])}u();var mt=(e,t=e)=>({slot:({value:n,propName:r,field:i,isReadOnly:a})=>{let o=a?t:e;return e=>o(c(s({allow:i?.type===`slot`?i.allow:[],disallow:i?.type===`slot`?i.disallow:[]},e),{zone:r,content:n}))}});u(),u();var ht=f(`RichTextEditor`,p);function gt({content:e}){return(0,R.jsx)(`div`,{className:ht(),children:(0,R.jsx)(`div`,{className:`rich-text`,dangerouslySetInnerHTML:{__html:e}})})}u();var _t=(e,t,n)=>{if(!e)return null;if(t.length===0)return n(e);let[r,...i]=t;return Array.isArray(e)?e.map(e=>_t(e,t,n)):c(s({},e),{[r]:_t(e[r],i,n)})},vt=(0,L.lazy)(()=>a(()=>import(`./Render-H3USS5FU-DzoKNfIo.js`).then(e=>({default:e.RichTextRender})),__vite__mapDeps([0,1,2,3,4,5,6,7])));function yt(e,t,n){let r=(e,t=[])=>{if(!e)return[];let i=[];for(let[a,o]of Object.entries(e)){if(n?.[o.type])continue;let e=[...t,a];o.type===`richtext`&&i.push({path:e,field:o}),o.type===`array`&&`arrayFields`in o&&i.push(...r(o.arrayFields,e)),o.type===`object`&&`objectFields`in o&&i.push(...r(o.objectFields,e))}return i},i=(0,L.useMemo)(()=>r(e),[e,n]);return(0,L.useMemo)(()=>{if(!i?.length)return{};let e=s({},t);for(let{path:t,field:n}of i)e=_t(e,t,e=>(0,R.jsx)(L.Suspense,{fallback:(0,R.jsx)(gt,{content:e}),children:(0,R.jsx)(vt,{content:e,field:n})},t.join(`.`)));return e},[i,t,e])}var bt={};function xt(e,t,n,r){let i=pt(e,t,s(s({},mt(n)),r),void 0,!0),a=yt(!(`type`in t)||t.type===`root`?e.root?.fields:e.components[t.type]?.fields||bt,i,r);return s(s({},i),a)}var St=xt;u();var Ct=e=>(0,R.jsx)(Tt,s({},e)),wt=({config:e,item:t,metadata:n,fieldTransforms:r})=>{let i=e.components[t.type],a=St(e,t,t=>(0,R.jsx)(Ct,c(s({},t),{config:e,metadata:n,fieldTransforms:r})),r);return(0,R.jsx)(i.render,c(s({},a),{puck:c(s({},a.puck),{metadata:n||{}})}))},Tt=(0,L.forwardRef)(function(e,t){let{props:{className:n,style:r,content:i,config:a,metadata:o,as:l,fieldTransforms:u},forwardableProps:d}=dt(e);return(0,R.jsx)(l??`div`,c(s({},d),{className:n,style:r,ref:t,children:i.map(e=>a.components[e.type]?(0,R.jsx)(wt,{config:a,item:e,metadata:o,fieldTransforms:u},e.props.id):null)}))}),Et=e=>Symbol.iterator in e,Dt=e=>`entries`in e,Ot=(e,t)=>{let n=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries());if(n.size!==r.size)return!1;for(let[e,t]of n)if(!r.has(e)||!Object.is(t,r.get(e)))return!1;return!0},kt=(e,t)=>{let n=e[Symbol.iterator](),r=t[Symbol.iterator](),i=n.next(),a=r.next();for(;!i.done&&!a.done;){if(!Object.is(i.value,a.value))return!1;i=n.next(),a=r.next()}return!!i.done&&!!a.done};function At(e,t){return Object.is(e,t)?!0:typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:Et(e)&&Et(t)?Dt(e)&&Dt(t)?Ot(e,t):kt(e,t):Ot({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function jt(e){let t=L.useRef(void 0);return n=>{let r=e(n);return At(t.current,r)?t.current:t.current=r}}var Mt=Symbol.for(`preact-signals`);function Nt(){if(It>1)It--;else{var e,t=!1;for((function(){var e=Bt;for(Bt=void 0;e!==void 0;){var t=e.S;if(t.v===e.v)for(var n=t.t;n!==void 0;n=n.x)n.i===e.i&&(n.i=t.i);e=e.o}})();Ft!==void 0;){var n=Ft;for(Ft=void 0,Lt++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&Gt(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(Lt=0,It--,t)throw e}}function z(e){if(It>0)return e();zt=++Rt,It++;try{return e()}finally{Nt()}}var Pt,B=void 0;function V(e){var t=B,n=Pt;B=void 0,Pt=void 0;try{return e()}finally{B=t,Pt=n}}var Ft=void 0,It=0,Lt=0,Rt=0,zt=0,Bt=void 0,Vt=0;function Ht(e){if(B!==void 0){var t=e.n;if(t===void 0||t.t!==B)return t={i:0,S:e,p:B.s,n:void 0,t:B,e:void 0,x:void 0,r:t},B.s!==void 0&&(B.s.n=t),B.s=t,e.n=t,32&B.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=B.s,t.n=void 0,B.s.n=t,B.s=t),t}}function Ut(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}Ut.prototype.brand=Mt,Ut.prototype.h=function(){return!0},Ut.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?V(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},Ut.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&V(function(){var e;(e=t.Z)==null||e.call(t)}))}},Ut.prototype.subscribe=function(e){var t=this;return en(function(){var n=t.value;V(function(){return e(n)})},{name:`sub`})},Ut.prototype.valueOf=function(){return this.value},Ut.prototype.toString=function(){return this.value+``},Ut.prototype.toJSON=function(){return this.value},Ut.prototype.peek=function(){var e=this;return V(function(){return e.value})},Object.defineProperty(Ut.prototype,"value",{get:function(){var e=Ht(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Lt>100)throw Error(`Cycle detected`);(function(e){It!==0&&Lt===0&&e.l!==zt&&(e.l=zt,Bt={S:e,v:e.v,i:e.i,o:Bt})})(this),this.v=e,this.i++,Vt++,It++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Nt()}}}});function Wt(e,t){return new Ut(e,t)}function Gt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Kt(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function qt(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function Jt(e,t){Ut.call(this,void 0,t),this.x=e,this.s=void 0,this.g=Vt-1,this.f=4}Jt.prototype=new Ut,Jt.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Vt))return!0;if(this.g=Vt,this.f|=1,this.i>0&&!Gt(this))return this.f&=-2,!0;var e=B;try{Kt(this),B=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return B=e,qt(this),this.f&=-2,!0},Jt.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Ut.prototype.S.call(this,e)},Jt.prototype.U=function(e){if(this.t!==void 0&&(Ut.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},Jt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(Jt.prototype,"value",{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=Ht(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Yt(e,t){return new Jt(e,t)}function Xt(e){var t=e.j;if(e.j=void 0,typeof t==`function`){It++;var n=B;B=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,Zt(e),t}finally{B=n,Nt()}}}function Zt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Xt(e)}function Qt(e){if(B!==this)throw Error(`Out-of-order effect`);qt(this),B=e,this.f&=-2;try{8&this.f&&Zt(this)}finally{Nt()}}function $t(e,t){this.x=e,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,Pt&&Pt.push(this)}$t.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.j=t)}finally{e()}},$t.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,Xt(this),Kt(this),It++;var e=B;return B=this,Qt.bind(this,e)},$t.prototype.N=function(){2&this.f||(this.f|=2,this.u=Ft,Ft=this)},$t.prototype.d=function(){this.f|=8,1&this.f||Zt(this)},$t.prototype.dispose=function(){this.d()};function en(e,t){var n=new $t(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}var tn=Object.create,nn=Object.defineProperty,rn=Object.defineProperties,an=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,sn=Object.getOwnPropertySymbols,cn=Object.prototype.hasOwnProperty,ln=Object.prototype.propertyIsEnumerable,un=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),dn=e=>{throw TypeError(e)},fn=(e,t,n)=>t in e?nn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pn=(e,t)=>{for(var n in t||={})cn.call(t,n)&&fn(e,n,t[n]);if(sn)for(var n of sn(t))ln.call(t,n)&&fn(e,n,t[n]);return e},mn=(e,t)=>rn(e,on(t)),hn=(e,t)=>nn(e,`name`,{value:t,configurable:!0}),gn=e=>[,,,tn(e?.[un(`metadata`)]??null)],_n=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],vn=e=>e!==void 0&&typeof e!=`function`?dn(`Function expected`):e,yn=(e,t,n,r,i)=>({kind:_n[e],name:t,metadata:r,addInitializer:e=>n._?dn(`Already initialized`):i.push(vn(e||null))}),bn=(e,t)=>fn(t,un(`metadata`),e[3]),xn=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},Sn=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=_n[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&an(d<4?i:{get[n](){return Tn(this,a)},set[n](e){return Dn(this,a,e)}},n));d?p&&d<4&&hn(a,(d>2?`set `:d>1?`get `:``)+n):hn(i,n);for(var y=r.length-1;y>=0;y--)l=yn(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>wn(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?Tn:On)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>Dn(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?vn(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?dn(`Object expected`):(vn(o=s.get)&&(v.get=o),vn(o=s.set)&&(v.set=o),vn(o=s.init)&&g.unshift(o));return d||bn(e,i),v&&nn(i,n,v),p?d^4?a:v:i},Cn=(e,t,n)=>t.has(e)||dn(`Cannot `+n),wn=(e,t)=>Object(t)===t?e.has(t):dn(`Cannot use the "in" operator on this value`),Tn=(e,t,n)=>(Cn(e,t,`read from private field`),n?n.call(e):t.get(e)),En=(e,t,n)=>t.has(e)?dn(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Dn=(e,t,n,r)=>(Cn(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),On=(e,t,n)=>(Cn(e,t,`access private method`),n);function kn(e,t){if(t){let n;return Yt(()=>{let r=e();return r&&n&&t(n,r)?n:(n=r,r)})}return Yt(e)}function An(e,t){if(Object.is(e,t))return!0;if(e===null||t===null)return!1;if(typeof e==`function`&&typeof t==`function`)return e===t;if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:!e.some((e,n)=>!An(e,t[n]));if(typeof e==`object`&&typeof t==`object`){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(n=>!An(e[n],t[n]))}return!1}function H({get:e},t){return{init(e){return Wt(e)},get(){return e.call(this).value},set(t){let n=e.call(this);n.peek()!==t&&(n.value=t)}}}function U(e,t){let n=new WeakMap;return function(){let t=n.get(this);return t||(t=kn(e.bind(this)),n.set(this,t)),t.value}}function jn(e=!0){return function(t,n){n.addInitializer(function(){let t=n.kind===`field`||n.static?this:Object.getPrototypeOf(this),r=Object.getOwnPropertyDescriptor(t,n.name);r&&Object.defineProperty(t,n.name,mn(pn({},r),{enumerable:e}))})}}function Mn(...e){let t=e.map(e=>en(e));return()=>t.forEach(e=>e())}var Nn,Pn,Fn,In,Ln,Rn=[H],zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn;Ln=[H],In=[H],Fn=[jn()],Pn=[jn()],Nn=[jn()];var $n=class{constructor(e,t=Object.is){this.defaultValue=e,this.equals=t,xn(zn,5,this),En(this,Wn),En(this,Bn,xn(zn,8,this)),xn(zn,11,this),En(this,Gn,xn(zn,12,this)),xn(zn,15,this),En(this,Yn,xn(zn,16,this)),xn(zn,19,this),this.reset=this.reset.bind(this),this.reset()}get current(){return Tn(this,Wn,Zn)}get initial(){return Tn(this,Wn,Hn)}get previous(){return Tn(this,Wn,qn)}set current(e){let t=V(()=>Tn(this,Wn,Zn));e&&t&&this.equals(t,e)||z(()=>{Tn(this,Wn,Hn)||Dn(this,Wn,e,Un),Dn(this,Wn,t,Jn),Dn(this,Wn,e,Qn)})}reset(e=this.defaultValue){z(()=>{Dn(this,Wn,void 0,Jn),Dn(this,Wn,e,Un),Dn(this,Wn,e,Qn)})}};zn=gn(null),Bn=new WeakMap,Wn=new WeakSet,Gn=new WeakMap,Yn=new WeakMap,Vn=Sn(zn,20,`#initial`,Rn,Wn,Bn),Hn=Vn.get,Un=Vn.set,Kn=Sn(zn,20,`#previous`,Ln,Wn,Gn),qn=Kn.get,Jn=Kn.set,Xn=Sn(zn,20,`#current`,In,Wn,Yn),Zn=Xn.get,Qn=Xn.set,Sn(zn,2,`current`,Fn,$n),Sn(zn,2,`initial`,Pn,$n),Sn(zn,2,`previous`,Nn,$n),bn(zn,$n);function er(e){return V(()=>{let t={};for(let n in e)t[n]=e[n];return t})}var tr,nr=class{constructor(){En(this,tr,new WeakMap)}get(e,t){return e?Tn(this,tr).get(e)?.get(t):void 0}set(e,t,n){if(e)return Tn(this,tr).has(e)||Tn(this,tr).set(e,new Map),Tn(this,tr).get(e)?.set(t,n)}clear(e){return e?Tn(this,tr).get(e)?.clear():void 0}};tr=new WeakMap;var rr=Object.create,ir=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,or=Object.getOwnPropertySymbols,sr=Object.prototype.hasOwnProperty,cr=Object.prototype.propertyIsEnumerable,lr=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),ur=e=>{throw TypeError(e)},dr=Math.pow,fr=(e,t,n)=>t in e?ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pr=(e,t)=>{for(var n in t||={})sr.call(t,n)&&fr(e,n,t[n]);if(or)for(var n of or(t))cr.call(t,n)&&fr(e,n,t[n]);return e},mr=(e,t)=>ir(e,`name`,{value:t,configurable:!0}),hr=e=>[,,,rr(e?.[lr(`metadata`)]??null)],gr=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],_r=e=>e!==void 0&&typeof e!=`function`?ur(`Function expected`):e,vr=(e,t,n,r,i)=>({kind:gr[e],name:t,metadata:r,addInitializer:e=>n._?ur(`Already initialized`):i.push(_r(e||null))}),yr=(e,t)=>fr(t,lr(`metadata`),e[3]),br=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},xr=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=gr[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&ar(d<4?i:{get[n](){return wr(this,a)},set[n](e){return Er(this,a,e)}},n));d?p&&d<4&&mr(a,(d>2?`set `:d>1?`get `:``)+n):mr(i,n);for(var y=r.length-1;y>=0;y--)l=vr(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>Cr(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?wr:Dr)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>Er(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?_r(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?ur(`Object expected`):(_r(o=s.get)&&(v.get=o),_r(o=s.set)&&(v.set=o),_r(o=s.init)&&g.unshift(o));return d||yr(e,i),v&&ir(i,n,v),p?d^4?a:v:i},Sr=(e,t,n)=>t.has(e)||ur(`Cannot `+n),Cr=(e,t)=>Object(t)===t?e.has(t):ur(`Cannot use the "in" operator on this value`),wr=(e,t,n)=>(Sr(e,t,`read from private field`),n?n.call(e):t.get(e)),Tr=(e,t,n)=>t.has(e)?ur(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Er=(e,t,n,r)=>(Sr(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Dr=(e,t,n)=>(Sr(e,t,`access private method`),n),Or=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,n){return new e(t.x-n.x,t.y-n.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:n}){return new e(t,n)}},kr=class e{constructor(e,t,n,r){this.left=e,this.top=t,this.width=n,this.height=r,this.scale={x:1,y:1}}get inverseScale(){return{x:1/this.scale.x,y:1/this.scale.y}}translate(t,n){let{top:r,left:i,width:a,height:o,scale:s}=this,c=new e(i+t,r+n,a,o);return c.scale=pr({},s),c}get boundingRectangle(){let{width:e,height:t,left:n,top:r,right:i,bottom:a}=this;return{width:e,height:t,left:n,top:r,right:i,bottom:a}}get center(){let{left:e,top:t,right:n,bottom:r}=this;return new Or((e+n)/2,(t+r)/2)}get area(){let{width:e,height:t}=this;return e*t}equals(t){if(!(t instanceof e))return!1;let{left:n,top:r,width:i,height:a}=this;return n===t.left&&r===t.top&&i===t.width&&a===t.height}containsPoint(e){let{top:t,left:n,bottom:r,right:i}=this;return t<=e.y&&e.y<=r&&n<=e.x&&e.x<=i}intersectionArea(t){return t instanceof e?Ar(this,t):0}intersectionRatio(e){let{area:t}=this,n=this.intersectionArea(e);return n/(e.area+t-n)}get bottom(){let{top:e,height:t}=this;return e+t}get right(){let{left:e,width:t}=this;return e+t}get aspectRatio(){let{width:e,height:t}=this;return e/t}get corners(){return[{x:this.left,y:this.top},{x:this.right,y:this.top},{x:this.left,y:this.bottom},{x:this.right,y:this.bottom}]}static from({top:t,left:n,width:r,height:i}){return new e(n,t,r,i)}static delta(e,t,n={x:`center`,y:`center`}){let r=(e,t)=>{let r=n[t],i=t===`x`?e.left:e.top,a=t===`x`?e.width:e.height;return r==`start`?i:r==`end`?i+a:i+a/2};return Or.delta({x:r(e,`x`),y:r(e,`y`)},{x:r(t,`x`),y:r(t,`y`)})}static intersectionRatio(t,n){return e.from(t).intersectionRatio(e.from(n))}};function Ar(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;return r<i&&n<a?o*s:0}var jr,Mr,Nr,Pr,Fr,Ir=class extends (Nr=$n,Mr=[U],jr=[U],Nr){constructor(e){let t=Or.from(e);super(t,(e,t)=>Or.equals(e,t)),br(Fr,5,this),Tr(this,Pr,0),this.velocity={x:0,y:0}}get delta(){return Or.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let n={x:e.x-t.x,y:e.y-t.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?`right`:`left`:n.y>0?`down`:`up`}get current(){return super.current}set current(e){let{current:t}=this,n=Or.from(e),r={x:n.x-t.x,y:n.y-t.y},i=Date.now(),a=i-wr(this,Pr),o=e=>Math.round(e/a*100);z(()=>{Er(this,Pr,i),this.velocity={x:o(r.x),y:o(r.y)},super.current=n})}reset(e=this.defaultValue){super.reset(Or.from(e)),this.velocity={x:0,y:0}}};Fr=hr(Nr),Pr=new WeakMap,xr(Fr,2,`delta`,Mr,Ir),xr(Fr,2,`direction`,jr,Ir),yr(Fr,Ir);function Lr({x:e,y:t},n){let r=Math.abs(e),i=Math.abs(t);return typeof n==`number`?Math.sqrt(dr(r,2)+dr(i,2))>n:`x`in n&&`y`in n?r>n.x&&i>n.y:`x`in n?r>n.x:`y`in n&&i>n.y}var Rr=(e=>(e.Horizontal=`x`,e.Vertical=`y`,e))(Rr||{}),zr=Object.values(Rr),Br=Object.create,Vr=Object.defineProperty,Hr=Object.defineProperties,Ur=Object.getOwnPropertyDescriptor,Wr=Object.getOwnPropertyDescriptors,Gr=Object.getOwnPropertySymbols,Kr=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable,Jr=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Yr=e=>{throw TypeError(e)},Xr=(e,t,n)=>t in e?Vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zr=(e,t)=>{for(var n in t||={})Kr.call(t,n)&&Xr(e,n,t[n]);if(Gr)for(var n of Gr(t))qr.call(t,n)&&Xr(e,n,t[n]);return e},Qr=(e,t)=>Hr(e,Wr(t)),$r=(e,t)=>Vr(e,`name`,{value:t,configurable:!0}),ei=(e,t)=>{var n={};for(var r in e)Kr.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Gr)for(var r of Gr(e))t.indexOf(r)<0&&qr.call(e,r)&&(n[r]=e[r]);return n},ti=e=>[,,,Br(e?.[Jr(`metadata`)]??null)],ni=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],ri=e=>e!==void 0&&typeof e!=`function`?Yr(`Function expected`):e,ii=(e,t,n,r,i)=>({kind:ni[e],name:t,metadata:r,addInitializer:e=>n._?Yr(`Already initialized`):i.push(ri(e||null))}),ai=(e,t)=>Xr(t,Jr(`metadata`),e[3]),W=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},G=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=ni[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&Ur(d<4?i:{get[n](){return K(this,a)},set[n](e){return ci(this,a,e)}},n));d?p&&d<4&&$r(a,(d>2?`set `:d>1?`get `:``)+n):$r(i,n);for(var y=r.length-1;y>=0;y--)l=ii(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>si(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?K:li)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>ci(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?ri(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?Yr(`Object expected`):(ri(o=s.get)&&(v.get=o),ri(o=s.set)&&(v.set=o),ri(o=s.init)&&g.unshift(o));return d||ai(e,i),v&&Vr(i,n,v),p?d^4?a:v:i},oi=(e,t,n)=>t.has(e)||Yr(`Cannot `+n),si=(e,t)=>Object(t)===t?e.has(t):Yr(`Cannot use the "in" operator on this value`),K=(e,t,n)=>(oi(e,t,`read from private field`),n?n.call(e):t.get(e)),q=(e,t,n)=>t.has(e)?Yr(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ci=(e,t,n,r)=>(oi(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),li=(e,t,n)=>(oi(e,t,`access private method`),n);function ui(e,t){return{plugin:e,options:t}}function di(e){return t=>ui(e,t)}function fi(e){return typeof e==`function`?{plugin:e,options:void 0}:e}var pi=[H],mi,hi,gi,_i=class{constructor(e,t){this.manager=e,this.options=t,q(this,hi,W(mi,8,this,!1)),W(mi,11,this),q(this,gi,new Set)}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return V(()=>this.disabled)}configure(e){this.options=e}registerEffect(e){let t=en(e.bind(this));return K(this,gi).add(t),t}destroy(){K(this,gi).forEach(e=>e())}static configure(e){return ui(this,e)}};mi=ti(null),hi=new WeakMap,gi=new WeakMap,G(mi,4,`disabled`,pi,_i,hi),ai(mi,_i);var vi=class extends _i{},yi,bi=class{constructor(e){this.manager=e,this.instances=new Map,q(this,yi,[])}get values(){return Array.from(this.instances.values())}set values(e){let t=e.map(fi).reduce((e,t)=>{let n=e.find(({plugin:e})=>e===t.plugin);return n?(n.options=t.options,e):[...e,t]},[]),n=t.map(({plugin:e})=>e);for(let e of K(this,yi))if(!n.includes(e)){if(e.prototype instanceof vi)continue;this.unregister(e)}for(let{plugin:e,options:n}of t)this.register(e,n);ci(this,yi,n)}get(e){return this.instances.get(e)}register(e,t){let n=this.instances.get(e);if(n)return n.options!==t&&(n.options=t),n;let r=new e(this.manager,t);return this.instances.set(e,r),r}unregister(e){let t=this.instances.get(e);t&&(t.destroy(),this.instances.delete(e))}destroy(){for(let e of this.instances.values())e.destroy();this.instances.clear()}};yi=new WeakMap;function xi(e,t){return e.priority===t.priority?e.type===t.type?t.value-e.value:t.type-e.type:t.priority-e.priority}var Si=[],Ci,wi,Ti=class extends _i{constructor(e){super(e),q(this,Ci),q(this,wi),this.computeCollisions=this.computeCollisions.bind(this),ci(this,wi,Wt(Si)),this.destroy=Mn(()=>{let e=this.computeCollisions(),t=V(()=>this.manager.dragOperation.position.current);if(e!==Si){let e=K(this,Ci);if(ci(this,Ci,t),e&&t.x==e.x&&t.y==e.y)return}else ci(this,Ci,void 0);K(this,wi).value=e},()=>{let{dragOperation:e}=this.manager;e.status.initialized&&this.forceUpdate()})}forceUpdate(e=!0){V(()=>{e?K(this,wi).value=this.computeCollisions():ci(this,Ci,void 0)})}computeCollisions(e,t){let{registry:n,dragOperation:r}=this.manager,{source:i,shape:a,status:o}=r;if(!o.initialized||!a)return Si;let s=[],c=[];for(let a of e??n.droppables){if(a.disabled||i&&!a.accepts(i))continue;let e=t??a.collisionDetector;if(!e)continue;c.push(a),a.shape;let n=V(()=>e({droppable:a,dragOperation:r}));n&&(a.collisionPriority!=null&&(n.priority=a.collisionPriority),s.push(n))}return c.length===0?Si:(s.sort(xi),s)}get collisions(){return K(this,wi).value}};Ci=new WeakMap,wi=new WeakMap;var Ei,Di,Oi=[H],ki,Ai,ji,Mi,Ni,Pi,Fi;Di=[H],Ei=[H];var Ii=class e{constructor(e,t){q(this,Mi,W(ji,8,this)),W(ji,11,this),q(this,Ni),q(this,Pi,W(ji,12,this)),W(ji,15,this),q(this,Fi,W(ji,16,this)),W(ji,19,this);let{effects:n,id:r,data:i={},disabled:a=!1,register:o=!0}=e,s=r;ci(this,Ni,Wt(r)),this.manager=t,this.data=i,this.disabled=a,this.effects=()=>[()=>{let{id:e,manager:t}=this;if(e!==s)return s=e,t?.registry.register(this),()=>t?.registry.unregister(this)},...n?.()??[]],this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.destroy=this.destroy.bind(this),t&&o&&queueMicrotask(this.register)}get id(){let t=K(this,Ni).value;return e.pendingIdChanges?.get(this)??t}set id(t){t!==(e.pendingIdChanges?.get(this)??K(this,Ni).peek())&&(e.pendingIdChanges||(e.pendingIdChanges=new Map,queueMicrotask(()=>{var t;return li(t=e,ki,Ai).call(t)})),e.pendingIdChanges.set(this,t))}register(){return this.manager?.registry.register(this)}unregister(){var e;(e=this.manager)==null||e.registry.unregister(this)}destroy(){var e;(e=this.manager)==null||e.registry.unregister(this)}};ji=ti(null),ki=new WeakSet,Ai=function(){let e=Ii.pendingIdChanges;Ii.pendingIdChanges=null,e&&z(()=>{for(let[t,n]of e)K(t,Ni).value=n})},Mi=new WeakMap,Ni=new WeakMap,Pi=new WeakMap,Fi=new WeakMap,G(ji,4,`manager`,Oi,Ii,Mi),G(ji,4,`data`,Di,Ii,Pi),G(ji,4,`disabled`,Ei,Ii,Fi),q(Ii,ki),ai(ji,Ii),Ii.pendingIdChanges=null;var Li=Ii,Ri=class{constructor(){this.map=Wt(new Map),this.cleanupFunctions=new WeakMap,this.register=(e,t)=>{let n=this.map.peek(),r=n.get(e),i=()=>this.unregister(e,t);if(r===t)return i;r&&r.id===e&&(this.cleanupFunctions.get(r)?.(),this.cleanupFunctions.delete(r));let a=new Map(n);for(let[r,i]of n)if(i===t&&r!==e){a.delete(r);break}a.set(e,t),this.map.value=a;let o=Mn(...t.effects());return this.cleanupFunctions.set(t,o),i},this.unregister=(e,t)=>{let n=this.map.peek();if(n.get(e)!==t)return;this.cleanupFunctions.get(t)?.(),this.cleanupFunctions.delete(t);let r=new Map(n);r.delete(e),this.map.value=r}}[Symbol.iterator](){return this.map.peek().values()}get value(){return this.map.value.values()}has(e){return this.map.value.has(e)}get(e){return this.map.value.get(e)}destroy(){for(let e of this)this.cleanupFunctions.get(e)?.(),e.destroy();this.map.value=new Map}},zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi=class extends (Gi=Li,Wi=[H],Ui=[H],Hi=[H],Vi=[U],Bi=[U],zi=[U],Gi){constructor(e,t){var n=e,{modifiers:r,type:i,sensors:a,plugins:o,effects:s}=n,c=ei(n,[`modifiers`,`type`,`sensors`,`plugins`,`effects`]);super(Qr(Zr({},c),{effects:()=>[...s?.()??[],()=>{let{manager:e,plugins:t}=this;if(!(!e||!t))for(let n of t){let{plugin:t}=fi(n);e.registry.plugins.register(t)}}]}),t),W(Ki,5,this),q(this,qi,W(Ki,8,this)),W(Ki,11,this),q(this,Ji,W(Ki,12,this)),W(Ki,15,this),q(this,Yi,W(Ki,16,this,this.isDragSource?`dragging`:`idle`)),W(Ki,19,this),this.type=i,this.sensors=a,this.modifiers=r,this.alignment=c.alignment,this.plugins=o}pluginConfig(e){if(this.plugins)for(let t of this.plugins){let n=fi(t);if(n.plugin===e)return n.options}}get isDropping(){return this.status===`dropping`&&this.isDragSource}get isDragging(){return this.status===`dragging`&&this.isDragSource}get isDragSource(){return this.manager?.dragOperation.source?.id===this.id}};Ki=ti(Gi),qi=new WeakMap,Ji=new WeakMap,Yi=new WeakMap,G(Ki,4,`type`,Wi,Xi,qi),G(Ki,4,`modifiers`,Ui,Xi,Ji),G(Ki,4,`status`,Hi,Xi,Yi),G(Ki,2,`isDropping`,Vi,Xi),G(Ki,2,`isDragging`,Bi,Xi),G(Ki,2,`isDragSource`,zi,Xi),ai(Ki,Xi);var Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua=class extends (ra=Li,na=[H],ta=[H],ea=[H],$i=[H],Qi=[H],Zi=[U],ra){constructor(e,t){var n=e,{accept:r,collisionDetector:i,collisionPriority:a,type:o}=n,s=ei(n,[`accept`,`collisionDetector`,`collisionPriority`,`type`]);super(s,t),W(ia,5,this),q(this,aa,W(ia,8,this)),W(ia,11,this),q(this,oa,W(ia,12,this)),W(ia,15,this),q(this,sa,W(ia,16,this)),W(ia,19,this),q(this,ca,W(ia,20,this)),W(ia,23,this),q(this,la,W(ia,24,this)),W(ia,27,this),this.accept=r,this.collisionDetector=i,this.collisionPriority=a,this.type=o}accepts(e){let{accept:t}=this;return t?typeof t==`function`?t(e):e.type?Array.isArray(t)?t.includes(e.type):e.type===t:!1:!0}get isDropTarget(){return this.manager?.dragOperation.target?.id===this.id}};ia=ti(ra),aa=new WeakMap,oa=new WeakMap,sa=new WeakMap,ca=new WeakMap,la=new WeakMap,G(ia,4,`accept`,na,ua,aa),G(ia,4,`type`,ta,ua,oa),G(ia,4,`collisionDetector`,ea,ua,sa),G(ia,4,`collisionPriority`,$i,ua,ca),G(ia,4,`shape`,Qi,ua,la),G(ia,2,`isDropTarget`,Zi,ua),ai(ia,ua);var da=class{constructor(){this.registry=new Map}addEventListener(e,t){let{registry:n}=this,r=new Set(n.get(e));return r.add(t),n.set(e,r),()=>this.removeEventListener(e,t)}removeEventListener(e,t){let{registry:n}=this,r=new Set(n.get(e));r.delete(t),n.set(e,r)}dispatch(e,...t){let{registry:n}=this,r=n.get(e);if(r)for(let e of r)e(...t)}},fa=class extends da{constructor(e){super(),this.manager=e}dispatch(e,t){let n=[t,this.manager];super.dispatch(e,...n)}};function pa(e,t=!0){let n=!1;return Qr(Zr({},e),{cancelable:t,get defaultPrevented(){return n},preventDefault(){t&&(n=!0)}})}var ma=class extends vi{constructor(e){super(e);let t=(e,t)=>e.map(({id:e})=>e).join(``)===t.map(({id:e})=>e).join(``),n=[];this.destroy=Mn(()=>{let{dragOperation:t,collisionObserver:r}=e;t.status.initializing&&(n=[],r.enable())},()=>{let{collisionObserver:r,monitor:i}=e,{collisions:a}=r;if(r.isDisabled()||Li.pendingIdChanges)return;let o=pa({collisions:a});if(i.dispatch(`collision`,o),o.defaultPrevented||t(a,n))return;n=a;let[s]=a;V(()=>{s?.id!==e.dragOperation.target?.id&&(r.disable(),e.actions.setDropTarget(s?.id).then(()=>{r.enable()}))})})}},ha=(e=>(e[e.Lowest=0]=`Lowest`,e[e.Low=1]=`Low`,e[e.Normal=2]=`Normal`,e[e.High=3]=`High`,e[e.Highest=4]=`Highest`,e))(ha||{}),ga=(e=>(e[e.Collision=0]=`Collision`,e[e.ShapeIntersection=1]=`ShapeIntersection`,e[e.PointerIntersection=2]=`PointerIntersection`,e))(ga||{}),_a,va,ya,ba,xa,Sa,Ca=[H],wa,Ta;Sa=[U],xa=[U],ba=[U],ya=[U],va=[U],_a=[U];var Ea=class{constructor(){W(wa,5,this),q(this,Ta,W(wa,8,this,`idle`)),W(wa,11,this)}get current(){return this.value}get idle(){return this.value===`idle`}get initializing(){return this.value===`initializing`}get initialized(){let{value:e}=this;return e!==`idle`&&e!==`initialization-pending`}get dragging(){return this.value===`dragging`}get dropped(){return this.value===`dropped`}set(e){this.value=e}};wa=ti(null),Ta=new WeakMap,G(wa,4,`value`,Ca,Ea,Ta),G(wa,2,`current`,Sa,Ea),G(wa,2,`idle`,xa,Ea),G(wa,2,`initializing`,ba,Ea),G(wa,2,`initialized`,ya,Ea),G(wa,2,`dragging`,va,Ea),G(wa,2,`dropped`,_a,Ea),ai(wa,Ea);var Da=class{constructor(e){this.manager=e}setDragSource(e){let{dragOperation:t}=this.manager;t.sourceIdentifier=typeof e==`string`||typeof e==`number`?e:e.id}setDropTarget(e){return V(()=>{let{dragOperation:t}=this.manager,n=e??null;if(t.targetIdentifier===n)return Promise.resolve(!1);t.targetIdentifier=n;let r=pa({operation:t.snapshot()});return t.status.dragging&&this.manager.monitor.dispatch(`dragover`,r),this.manager.renderer.rendering.then(()=>r.defaultPrevented)})}start(e){return V(()=>{let{dragOperation:t}=this.manager;if(e.source!=null&&this.setDragSource(e.source),!t.source)throw Error(`Cannot start a drag operation without a drag source`);if(!t.status.idle)throw Error(`Cannot start a drag operation while another is active`);let n=new AbortController,{event:r,coordinates:i}=e;z(()=>{t.status.set(`initialization-pending`),t.shape=null,t.canceled=!1,t.activatorEvent=r??null,t.position.reset(i)});let a=pa({operation:t.snapshot()});return this.manager.monitor.dispatch(`beforedragstart`,a),a.defaultPrevented?(t.reset(),n.abort(),n):(t.status.set(`initializing`),t.controller=n,this.manager.renderer.rendering.then(()=>{if(n.signal.aborted)return;let{status:e}=t;e.current===`initializing`&&z(()=>{t.status.set(`dragging`),this.manager.monitor.dispatch(`dragstart`,{nativeEvent:r,operation:t.snapshot(),cancelable:!1})})}),n)})}move(e){return V(()=>{let{dragOperation:t}=this.manager,{status:n,controller:r}=t;if(!n.dragging||!r||r.signal.aborted)return;let i=pa({nativeEvent:e.event,operation:t.snapshot(),by:e.by,to:e.to},e.cancelable??!0);(e.propagate??!0)&&this.manager.monitor.dispatch(`dragmove`,i),queueMicrotask(()=>{if(i.defaultPrevented)return;let n=e.to??{x:t.position.current.x+(e.by?.x??0),y:t.position.current.y+(e.by?.y??0)};t.position.current=n})})}stop(e={}){return V(()=>{let{dragOperation:t}=this.manager,{controller:n}=t;if(!n||n.signal.aborted)return;let r,i=()=>{let e={resume:()=>{},abort:()=>{}};return r=new Promise((t,n)=>{e.resume=t,e.abort=n}),e};n.abort();let a=()=>{this.manager.renderer.rendering.then(()=>{t.status.set(`dropped`);let e=V(()=>t.source?.status===`dropping`),r=()=>{t.controller===n&&(t.controller=void 0),t.reset()};if(e){let{source:e}=t,n=en(()=>{e?.status===`idle`&&(n(),r())})}else this.manager.renderer.rendering.then(r)})};t.canceled=e.canceled??!1,this.manager.monitor.dispatch(`dragend`,{nativeEvent:e.event,operation:t.snapshot(),canceled:e.canceled??!1,suspend:i}),r?r.then(a).catch(()=>t.reset()):a()})}},Oa=class extends _i{constructor(e,t){super(e,t),this.manager=e,this.options=t}},ka=class extends AbortController{constructor(e,t){super(),this.constraints=e,this.onActivate=t,this.activated=!1;for(let t of e??[])t.controller=this}onEvent(e){if(!this.activated)if(this.constraints?.length)for(let t of this.constraints)t.onEvent(e);else this.activate(e)}activate(e){this.activated||(this.activated=!0,this.onActivate(e))}abort(e){this.activated=!1,super.abort(e)}},Aa,ja=class{constructor(e){this.options=e,q(this,Aa)}set controller(e){ci(this,Aa,e),e.signal.addEventListener(`abort`,()=>this.abort())}activate(e){var t;(t=K(this,Aa))==null||t.activate(e)}};Aa=new WeakMap;var Ma=class extends _i{constructor(e,t){super(e,t),this.manager=e,this.options=t}apply(e){return e.transform}},Na=class{constructor(e){this.draggables=new Ri,this.droppables=new Ri,this.plugins=new bi(e),this.sensors=new bi(e),this.modifiers=new bi(e)}register(e,t){if(e instanceof Xi)return this.draggables.register(e.id,e);if(e instanceof ua)return this.droppables.register(e.id,e);if(e.prototype instanceof Ma)return this.modifiers.register(e,t);if(e.prototype instanceof Oa)return this.sensors.register(e,t);if(e.prototype instanceof _i)return this.plugins.register(e,t);throw Error(`Invalid instance type`)}unregister(e){if(e instanceof Li)return e instanceof Xi?this.draggables.unregister(e.id,e):e instanceof ua?this.droppables.unregister(e.id,e):()=>{};if(e.prototype instanceof Ma)return this.modifiers.unregister(e);if(e.prototype instanceof Oa)return this.sensors.unregister(e);if(e.prototype instanceof _i)return this.plugins.unregister(e);throw Error(`Invalid instance type`)}destroy(){this.draggables.destroy(),this.droppables.destroy(),this.plugins.destroy(),this.sensors.destroy(),this.modifiers.destroy()}},Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha=[U],Ua,Wa,Ga,J,Ka,qa,Ja,Ya,Xa,Za;Va=[H],Ba=[H],za=[H],Ra=[H],La=[H],Ia=[U],Fa=[U],Pa=[U];var Qa=class{constructor(e){W(J,5,this),q(this,Ua),q(this,Wa),q(this,Ga,new $n(void 0,(e,t)=>e&&t?e.equals(t):e===t)),this.status=new Ea,q(this,Ka,W(J,8,this,!1)),W(J,11,this),q(this,qa,W(J,12,this,null)),W(J,15,this),q(this,Ja,W(J,16,this,null)),W(J,19,this),q(this,Ya,W(J,20,this,null)),W(J,23,this),q(this,Xa,W(J,24,this,[])),W(J,27,this),this.position=new Ir({x:0,y:0}),q(this,Za,{x:0,y:0}),ci(this,Ua,e)}get shape(){let{current:e,initial:t,previous:n}=K(this,Ga);return!e||!t?null:{current:e,initial:t,previous:n}}set shape(e){e?K(this,Ga).current=e:K(this,Ga).reset()}get source(){let e=this.sourceIdentifier;if(e==null)return null;let t=K(this,Ua).registry.draggables.get(e);return t&&ci(this,Wa,t),t??K(this,Wa)??null}get target(){let e=this.targetIdentifier;return e==null?null:K(this,Ua).registry.droppables.get(e)??null}get transform(){let{x:e,y:t}=this.position.delta,n={x:e,y:t};for(let e of this.modifiers)n=e.apply(Qr(Zr({},this.snapshot()),{transform:n}));return ci(this,Za,n),n}snapshot(){return V(()=>({source:this.source,target:this.target,activatorEvent:this.activatorEvent,transform:K(this,Za),shape:this.shape?er(this.shape):null,position:er(this.position),status:er(this.status),canceled:this.canceled}))}reset(){z(()=>{this.status.set(`idle`),this.sourceIdentifier=null,this.targetIdentifier=null,K(this,Ga).reset(),this.position.reset({x:0,y:0}),ci(this,Za,{x:0,y:0}),this.modifiers=[]})}};J=ti(null),Ua=new WeakMap,Wa=new WeakMap,Ga=new WeakMap,Ka=new WeakMap,qa=new WeakMap,Ja=new WeakMap,Ya=new WeakMap,Xa=new WeakMap,Za=new WeakMap,G(J,2,`shape`,Ha,Qa),G(J,4,`canceled`,Va,Qa,Ka),G(J,4,`activatorEvent`,Ba,Qa,qa),G(J,4,`sourceIdentifier`,za,Qa,Ja),G(J,4,`targetIdentifier`,Ra,Qa,Ya),G(J,4,`modifiers`,La,Qa,Xa),G(J,2,`source`,Ia,Qa),G(J,2,`target`,Fa,Qa),G(J,2,`transform`,Pa,Qa),ai(J,Qa);var $a={get rendering(){return Promise.resolve()}};function eo(e,t){return typeof e==`function`?e(t):e??t}var to=class{constructor(e){this.destroy=()=>{this.dragOperation.status.idle||this.actions.stop({canceled:!0}),this.dragOperation.modifiers.forEach(e=>e.destroy()),this.registry.destroy(),this.collisionObserver.destroy()};let t=e??{},n=eo(t.plugins,[]),r=eo(t.sensors,[]),i=eo(t.modifiers,[]),a=t.renderer??$a,o=new fa(this),s=new Na(this);this.registry=s,this.monitor=o,this.renderer=a,this.actions=new Da(this),this.dragOperation=new Qa(this),this.collisionObserver=new Ti(this),this.plugins=[ma,...n],this.modifiers=i,this.sensors=r;let{destroy:c}=this,l=Mn(()=>{let e=V(()=>this.dragOperation.modifiers),t=this.modifiers;for(let n of e)t.includes(n)||n.destroy();this.dragOperation.modifiers=(this.dragOperation.source?.modifiers)?.map(e=>{let{plugin:t,options:n}=fi(e);return new t(this,n)})??t});this.destroy=()=>{l(),c()}}get plugins(){return this.registry.plugins.values}set plugins(e){this.registry.plugins.values=e}get modifiers(){return this.registry.modifiers.values}set modifiers(e){this.registry.modifiers.values=e}get sensors(){return this.registry.sensors.values}set sensors(e){this.registry.sensors.values=e}},no=e=>{throw TypeError(e)},ro=(e,t,n)=>t.has(e)||no(`Cannot `+n),Y=(e,t,n)=>(ro(e,t,`read from private field`),t.get(e)),io=(e,t,n)=>t.has(e)?no(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ao=(e,t,n,r)=>(ro(e,t,`write to private field`),t.set(e,n),n),oo=(e,t,n)=>(ro(e,t,`access private method`),n);function so(e){return e?e instanceof KeyframeEffect||`getKeyframes`in e&&typeof e.getKeyframes==`function`:!1}function co(e,t){let n=e.getAnimations(),r=null;for(let e of n){if(e.playState!==`running`)continue;let{effect:n}=e,i=(so(n)?n.getKeyframes():[]).filter(t);i.length>0&&(r=[i[i.length-1],e])}return r}function lo(e){let{width:t,height:n,top:r,left:i,bottom:a,right:o}=e.getBoundingClientRect();return{width:t,height:n,top:r,left:i,bottom:a,right:o}}function uo(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function fo(e){return`nodeType`in e}function po(e){return e?uo(e)?e:fo(e)?`defaultView`in e?e.defaultView??window:e.ownerDocument?.defaultView??window:window:window}function mo(e){let{Document:t}=po(e);return e instanceof t||`nodeType`in e&&e.nodeType===Node.DOCUMENT_NODE}function ho(e){return!e||uo(e)?!1:e instanceof po(e).HTMLElement||`namespaceURI`in e&&typeof e.namespaceURI==`string`&&e.namespaceURI.endsWith(`html`)}function go(e){return e instanceof po(e).SVGElement||`namespaceURI`in e&&typeof e.namespaceURI==`string`&&e.namespaceURI.endsWith(`svg`)}function _o(e){return e?uo(e)?e.document:fo(e)?mo(e)?e:ho(e)||go(e)?e.ownerDocument:document:document:document}function vo(e){let{documentElement:t}=_o(e),n=po(e).visualViewport,r=n?.width??t.clientWidth,i=n?.height??t.clientHeight,a=n?.offsetTop??0,o=n?.offsetLeft??0;return{top:a,left:o,right:o+r,bottom:a+i,width:r,height:i}}function yo(e,t){if(bo(e)&&e.open===!1)return!1;let{overflow:n,overflowX:r,overflowY:i}=getComputedStyle(e);return n===`visible`&&r===`visible`&&i===`visible`}function bo(e){return e.tagName===`DETAILS`}function xo(e,t=e.getBoundingClientRect(),n=0){let r=t,{ownerDocument:i}=e,a=i.defaultView??window,o=e.parentElement;for(;o&&o!==i.documentElement;){if(!yo(o)){let e=o.getBoundingClientRect(),t=n*(e.bottom-e.top),i=n*(e.right-e.left),a=n*(e.bottom-e.top),s=n*(e.right-e.left);r={top:Math.max(r.top,e.top-t),right:Math.min(r.right,e.right+i),bottom:Math.min(r.bottom,e.bottom+a),left:Math.max(r.left,e.left-s),width:0,height:0},r.width=r.right-r.left,r.height=r.bottom-r.top}o=o.parentElement}let s=a.visualViewport,c=s?.offsetTop??0,l=s?.offsetLeft??0,u=s?.width??a.innerWidth,d=s?.height??a.innerHeight,f=n*d,p=n*u;return r={top:Math.max(r.top,c-f),right:Math.min(r.right,l+u+p),bottom:Math.min(r.bottom,c+d+f),left:Math.max(r.left,l-p),width:0,height:0},r.width=r.right-r.left,r.height=r.bottom-r.top,r.width<0&&(r.width=0),r.height<0&&(r.height=0),r}function So(e){return{x:e.clientX,y:e.clientY}}var Co=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function wo(e=document,t=new Set){if(t.has(e))return[];t.add(e);let n=[e];for(let r of Array.from(e.querySelectorAll(`iframe, frame`)))try{let e=r.contentDocument;e&&!t.has(e)&&n.push(...wo(e,t))}catch{}try{let r=e.defaultView;if(r&&r!==window.top){let i=r.parent;i&&i.document&&i.document!==e&&n.push(...wo(i.document,t))}}catch{}return n}function To(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function Eo(){let e=To()?window.visualViewport:null;return{x:e?.offsetLeft??0,y:e?.offsetTop??0}}function Do(e){return!e||!fo(e)?!1:e instanceof po(e).ShadowRoot}function Oo(e){if(e&&fo(e)){let t=e.getRootNode();if(Do(t)||t instanceof Document)return t}return _o(e)}function ko(e){return e.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Ao(e){let t=`input, textarea, select, canvas, [contenteditable]`,n=e.cloneNode(!0),r=Array.from(e.querySelectorAll(t));return Array.from(n.querySelectorAll(t)).forEach((e,t)=>{let n=r[t];jo(e)&&jo(n)&&(e.type!==`file`&&(e.value=n.value),e.type===`radio`&&e.name&&(e.name=`Cloned__${e.name}`)),Mo(e)&&Mo(n)&&n.width>0&&n.height>0&&e.getContext(`2d`)?.drawImage(n,0,0)}),n}function jo(e){return`value`in e}function Mo(e){return e.tagName===`CANVAS`}function No(e,{x:t,y:n}){let r=e.elementFromPoint(t,n);if(Po(r)){let{contentDocument:e}=r;if(e){let{left:i,top:a}=r.getBoundingClientRect();return No(e,{x:t-i,y:n-a})}}return r}function Po(e){return e?.tagName===`IFRAME`}var Fo=new WeakMap;function Io(e){return!!e.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `)}var Lo=class{constructor(){this.entries=new Set,this.clear=()=>{for(let e of this.entries){let[t,{type:n,listener:r,options:i}]=e;t.removeEventListener(n,r,i)}this.entries.clear()}}bind(e,t){let n=Array.isArray(e)?e:[e],r=Array.isArray(t)?t:[t],i=[];for(let e of n)for(let t of r){let{type:n,listener:r,options:a}=t,o=[e,t];e.addEventListener(n,r,a),this.entries.add(o),i.push(o)}let a=this.entries;return function(){for(let e of i){let[t,{type:n,listener:r,options:i}]=e;t.removeEventListener(n,r,i),a.delete(e)}}}};function Ro(e){let t=e?.ownerDocument.defaultView;if(t&&t.self!==t.parent)return t.frameElement}function zo(e){let t=new Set,n=Ro(e);for(;n;)t.add(n),n=Ro(n);return t}function Bo(e,t){let n=setTimeout(e,t);return()=>clearTimeout(n)}function Vo(e,t){let n=()=>performance.now(),r,i;return function(...a){let o=this;i?(r?.(),r=Bo(()=>{e.apply(o,a),i=n()},t-(n()-i))):(e.apply(o,a),i=n())}}function Ho(e,t){return e===t?!0:!e||!t?!1:e.top==t.top&&e.left==t.left&&e.right==t.right&&e.bottom==t.bottom}function Uo(e,t=e.getBoundingClientRect()){let{width:n,height:r}=xo(e,t);return n>0&&r>0}var Wo=Co?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},Go,Ko=class extends Wo{constructor(e){super(t=>{if(!Y(this,Go)){ao(this,Go,!0);return}e(t,this)}),io(this,Go,!1)}};Go=new WeakMap;var qo=Array.from({length:100},(e,t)=>t/100),Jo=75,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os=class{constructor(e,t,n={debug:!1,skipInitial:!1}){this.element=e,this.callback=t,io(this,rs),this.disconnect=()=>{var e,t,n;ao(this,ts,!0),(e=Y(this,Zo))==null||e.disconnect(),(t=Y(this,Qo))==null||t.disconnect(),Y(this,$o).disconnect(),(n=Y(this,es))==null||n.remove()},io(this,Yo,!0),io(this,Xo),io(this,Zo),io(this,Qo),io(this,$o),io(this,es),io(this,ts,!1),io(this,ns,Vo(()=>{var e;let{element:t}=this;if((e=Y(this,Qo))==null||e.disconnect(),Y(this,ts)||!Y(this,Yo)||!t.isConnected)return;let n=t.ownerDocument??document,{innerHeight:r,innerWidth:i}=n.defaultView??window,a=t.getBoundingClientRect(),{top:o,left:s,bottom:c,right:l}=xo(t,a),u=-Math.floor(o),d=-Math.floor(s),f=`${u}px ${-Math.floor(i-l)}px ${-Math.floor(r-c)}px ${d}px`;this.boundingClientRect=a,ao(this,Qo,new IntersectionObserver(e=>{let[n]=e,{intersectionRect:r}=n;(n.intersectionRatio===1?kr.intersectionRatio(r,xo(t)):n.intersectionRatio)!==1&&Y(this,ns).call(this)},{threshold:qo,rootMargin:f,root:n})),Y(this,Qo).observe(t),oo(this,rs,is).call(this)},Jo)),this.boundingClientRect=e.getBoundingClientRect(),ao(this,Yo,Uo(e,this.boundingClientRect));let r=!0;this.callback=e=>{r&&(r=!1,n.skipInitial)||t(e)};let i=e.ownerDocument;n?.debug&&(ao(this,es,document.createElement(`div`)),Y(this,es).style.background=`rgba(0,0,0,0.15)`,Y(this,es).style.position=`fixed`,Y(this,es).style.pointerEvents=`none`,i.body.appendChild(Y(this,es))),ao(this,$o,new IntersectionObserver(t=>{var n,r;let{boundingClientRect:i,isIntersecting:a}=t[t.length-1],{width:o,height:s}=i,c=Y(this,Yo);ao(this,Yo,a),!(!o&&!s)&&(c&&!a?((n=Y(this,Qo))==null||n.disconnect(),this.callback(null),(r=Y(this,Zo))==null||r.disconnect(),ao(this,Zo,void 0),Y(this,es)&&(Y(this,es).style.visibility=`hidden`)):Y(this,ns).call(this),a&&!Y(this,Zo)&&(ao(this,Zo,new Ko(Y(this,ns))),Y(this,Zo).observe(e)))},{threshold:qo,root:i})),Y(this,Yo)&&!n.skipInitial&&this.callback(this.boundingClientRect),Y(this,$o).observe(e)}};Yo=new WeakMap,Xo=new WeakMap,Zo=new WeakMap,Qo=new WeakMap,$o=new WeakMap,es=new WeakMap,ts=new WeakMap,ns=new WeakMap,rs=new WeakSet,is=function(){Y(this,ts)||(oo(this,rs,as).call(this),!Ho(this.boundingClientRect,Y(this,Xo))&&(this.callback(this.boundingClientRect),ao(this,Xo,this.boundingClientRect)))},as=function(){if(Y(this,es)){let{top:e,left:t,width:n,height:r}=xo(this.element);Y(this,es).style.overflow=`hidden`,Y(this,es).style.visibility=`visible`,Y(this,es).style.top=`${Math.floor(e)}px`,Y(this,es).style.left=`${Math.floor(t)}px`,Y(this,es).style.width=`${Math.floor(n)}px`,Y(this,es).style.height=`${Math.floor(r)}px`}};var ss=new WeakMap,cs=new WeakMap;function ls(e,t){let n=ss.get(e);return n||={disconnect:new os(e,t=>{let n=ss.get(e);n&&n.callbacks.forEach(e=>e(t))},{skipInitial:!0}).disconnect,callbacks:new Set},n.callbacks.add(t),ss.set(e,n),()=>{n.callbacks.delete(t),n.callbacks.size===0&&(ss.delete(e),n.disconnect())}}function us(e,t){let n=new Set;for(let r of e){let e=ls(r,t);n.add(e)}return()=>n.forEach(e=>e())}function ds(e,t){let n=e.ownerDocument;if(!cs.has(n)){let e=new AbortController,t=new Set;document.addEventListener(`scroll`,e=>t.forEach(t=>t(e)),{capture:!0,passive:!0,signal:e.signal}),cs.set(n,{disconnect:()=>e.abort(),listeners:t})}let{listeners:r,disconnect:i}=cs.get(n)??{};return!r||!i?()=>{}:(r.add(t),()=>{r.delete(t),r.size===0&&(i(),cs.delete(n))})}var fs,ps,ms,hs,gs=class{constructor(e,t,n){this.callback=t,io(this,fs),io(this,ps,!1),io(this,ms),io(this,hs,Vo(e=>{if(!Y(this,ps)&&e.target&&`contains`in e.target&&typeof e.target.contains==`function`){for(let t of Y(this,ms))if(e.target.contains(t)){this.callback(Y(this,fs).boundingClientRect);break}}},Jo));let r=zo(e),i=us(r,t),a=ds(e,Y(this,hs));ao(this,ms,r),ao(this,fs,new os(e,t,n)),this.disconnect=()=>{Y(this,ps)||(ao(this,ps,!0),i(),a(),Y(this,fs).disconnect())}}};fs=new WeakMap,ps=new WeakMap,ms=new WeakMap,hs=new WeakMap;function _s(e){return`showPopover`in e&&`hidePopover`in e&&typeof e.showPopover==`function`&&typeof e.hidePopover==`function`}function vs(e){try{_s(e)&&e.isConnected&&e.hasAttribute(`popover`)&&!e.matches(`:popover-open`)&&e.showPopover()}catch{}}function ys(e){try{_s(e)&&e.isConnected&&e.hasAttribute(`popover`)&&e.matches(`:popover-open`)&&e.hidePopover()}catch{}}function bs(e){return!Co||!e?!1:e===_o(e).scrollingElement}function xs(e){let t=po(e),n=bs(e)?vo(e):lo(e),r=t.visualViewport,i=bs(e)?{height:r?.height??t.innerHeight,width:r?.width??t.innerWidth}:{height:e.clientHeight,width:e.clientWidth},a={current:{x:e.scrollLeft,y:e.scrollTop},max:{x:e.scrollWidth-i.width,y:e.scrollHeight-i.height}};return{rect:n,position:a,isTop:a.current.y<=0,isLeft:a.current.x<=0,isBottom:a.current.y>=a.max.y,isRight:a.current.x>=a.max.x}}function Ss(e,t){let{isTop:n,isBottom:r,isLeft:i,isRight:a,position:o}=xs(e),{x:s,y:c}=t??{x:0,y:0},l=!n&&o.current.y+c>0,u=!r&&o.current.y+c<o.max.y,d=!i&&o.current.x+s>0,f=!a&&o.current.x+s<o.max.x;return{top:l,bottom:u,left:d,right:f,x:d||f,y:l||u}}var Cs=class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(let t of e)t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}},ws=new Cs(e=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()}),Ts=new Cs(e=>setTimeout(e,50)),Es=new Map,Ds=Es.clear.bind(Es);function Os(e,t=!1){if(!t)return ks(e);let n=Es.get(e);return n||(n=ks(e),Es.set(e,n),Ts.schedule(Ds),n)}function ks(e){return po(e).getComputedStyle(e)}function As(e,t=Os(e,!0)){return t.position===`fixed`||t.position===`sticky`}function js(e,t=Os(e,!0)){let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`&&n.test(r)})}var Ms={excludeElement:!0,escapeShadowDOM:!0};function Ns(e,t=Ms){let{limit:n,excludeElement:r,escapeShadowDOM:i}=t,a=new Set;function o(t){if(n!=null&&a.size>=n||!t)return a;if(mo(t)&&t.scrollingElement!=null&&!a.has(t.scrollingElement))return a.add(t.scrollingElement),a;if(i&&Do(t))return o(t.host);if(!ho(t))return go(t)?o(t.parentElement):a;if(a.has(t))return a;let s=Os(t,!0);if(r&&t===e||js(t,s)&&a.add(t),As(t,s)){let{scrollingElement:e}=t.ownerDocument;return e&&a.add(e),a}return o(t.parentNode)}return e?o(e):a}function Ps(e,t=window.frameElement){let n={x:0,y:0,scaleX:1,scaleY:1};if(!e)return n;let r=Ro(e);for(;r;){if(r===t)return n;let e=lo(r),{x:i,y:a}=Fs(r,e);n.x+=e.left,n.y+=e.top,n.scaleX*=i,n.scaleY*=a,r=Ro(r)}return n}function Fs(e,t=lo(e)){let n=Math.round(t.width),r=Math.round(t.height);if(ho(e))return{x:n/e.offsetWidth,y:r/e.offsetHeight};let i=Os(e,!0);return{x:(parseFloat(i.width)||n)/n,y:(parseFloat(i.height)||r)/r}}function Is(e){if(e===`none`)return null;let t=e.split(` `),n=parseFloat(t[0]),r=parseFloat(t[1]);return isNaN(n)&&isNaN(r)?null:{x:isNaN(n)?r:n,y:isNaN(r)?n:r}}function Ls(e){if(e===`none`)return null;let[t,n,r=`0`]=e.split(` `),i={x:parseFloat(t),y:parseFloat(n),z:parseInt(r,10)};return isNaN(i.x)&&isNaN(i.y)?null:{x:isNaN(i.x)?0:i.x,y:isNaN(i.y)?0:i.y,z:isNaN(i.z)?0:i.z}}function Rs(e){let{scale:t,transform:n,translate:r}=e,i=Is(t),a=Ls(r),o=zs(n);if(!o&&!i&&!a)return null;let s={x:i?.x??1,y:i?.y??1},c={x:a?.x??0,y:a?.y??0},l={x:o?.x??0,y:o?.y??0,scaleX:o?.scaleX??1,scaleY:o?.scaleY??1};return{x:c.x+l.x,y:c.y+l.y,z:a?.z??0,scaleX:s.x*l.scaleX,scaleY:s.y*l.scaleY}}function zs(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}var Bs=(e=>(e[e.Idle=0]=`Idle`,e[e.Forward=1]=`Forward`,e[e.Reverse=-1]=`Reverse`,e))(Bs||{}),Vs={x:.2,y:.2},Hs={x:10,y:10};function Us(e,t,n,r=25,i=Vs,a=Hs){let{x:o,y:s}=t,{rect:c,isTop:l,isBottom:u,isLeft:d,isRight:f}=xs(e),p=Ps(e),m=Rs(Os(e,!0)),h=m!==null&&m?.scaleX<0,g=m!==null&&m?.scaleY<0,_=new kr(c.left*p.scaleX+p.x,c.top*p.scaleY+p.y,c.width*p.scaleX,c.height*p.scaleY),v={x:0,y:0},y={x:0,y:0},b={height:_.height*i.y,width:_.width*i.x};return b.height>0&&(!l||g&&!u)&&s<=_.top+b.height&&n?.y!==1&&o>=_.left-a.x&&o<=_.right+a.x?(v.y=g?1:-1,y.y=r*Math.abs((_.top+b.height-s)/b.height)):b.height>0&&(!u||g&&!l)&&s>=_.bottom-b.height&&n?.y!==-1&&o>=_.left-a.x&&o<=_.right+a.x&&(v.y=g?-1:1,y.y=r*Math.abs((_.bottom-b.height-s)/b.height)),b.width>0&&(!f||h&&!d)&&o>=_.right-b.width&&n?.x!==-1&&s>=_.top-a.y&&s<=_.bottom+a.y?(v.x=h?-1:1,y.x=r*Math.abs((_.right-b.width-o)/b.width)):b.width>0&&(!d||h&&!f)&&o<=_.left+b.width&&n?.x!==1&&s>=_.top-a.y&&s<=_.bottom+a.y&&(v.x=h?1:-1,y.x=r*Math.abs((_.left+b.width-o)/b.width)),{direction:v,speed:y}}function Ws(e,{block:t=`nearest`,inline:n=`nearest`}={}){if(!ho(e))return;let r=Ns(e),i=[];for(let a of r){if(!ho(a))continue;let{top:r,left:o}=Ks(e,a),s=r,c=o;for(let e of i)s-=e.scrollTop,c-=e.scrollLeft;if(t!==`none`){let n=s<a.scrollTop;n!==s+e.offsetHeight>a.scrollTop+a.clientHeight&&(a.scrollTop=t===`center`?s-a.clientHeight/2+e.offsetHeight/2:n?s:s+e.offsetHeight-a.clientHeight)}if(n!==`none`){let t=c<a.scrollLeft;t!==c+e.offsetWidth>a.scrollLeft+a.clientWidth&&(a.scrollLeft=n===`center`?c-a.clientWidth/2+e.offsetWidth/2:t?c:c+e.offsetWidth-a.clientWidth)}i.push(a)}}function Gs(e){let t=0,n=0,r=e;for(;r;){t+=r.offsetTop,n+=r.offsetLeft;let e=r.offsetParent;if(!ho(e))break;t+=e.clientTop,n+=e.clientLeft,r=e}return{top:t,left:n}}function Ks(e,t){let n=Gs(e),r=Gs(t);return{top:n.top-r.top-t.clientTop,left:n.left-r.left-t.clientLeft}}function qs(e,t,n){let{scaleX:r,scaleY:i,x:a,y:o}=t,s=e.left+a+(1-r)*parseFloat(n),c=e.top+o+(1-i)*parseFloat(n.slice(n.indexOf(` `)+1)),l=r?e.width*r:e.width,u=i?e.height*i:e.height;return{width:l,height:u,top:c,right:s+l,bottom:c+u,left:s}}function Js(e,t,n){let{scaleX:r,scaleY:i,x:a,y:o}=t,s=e.left-a-(1-r)*parseFloat(n),c=e.top-o-(1-i)*parseFloat(n.slice(n.indexOf(` `)+1)),l=r?e.width/r:e.width,u=i?e.height/i:e.height;return{width:l,height:u,top:c,right:s+l,bottom:c+u,left:s}}function Ys({element:e,keyframes:t,options:n}){return e.animate(t,n).finished}function Xs(e,t=Os(e).translate,n=!0){if(n){let t=co(e,e=>`translate`in e);if(t){let{translate:e=``}=t[0];if(typeof e==`string`){let t=Ls(e);if(t)return t}}}if(t){let e=Ls(t);if(e)return e}return{x:0,y:0,z:0}}var Zs=new Cs(e=>setTimeout(e,0)),Qs=new Map,$s=Qs.clear.bind(Qs);function ec(e){let t=e.ownerDocument,n=Qs.get(t);if(n)return n;n=t.getAnimations(),Qs.set(t,n),Zs.schedule($s);let r=n.filter(t=>so(t.effect)&&t.effect.target===e);return Qs.set(e,r),n}function tc(e,t){let n=ec(e).filter(e=>{if(so(e.effect)){let{target:n}=e.effect;if((n&&t.isValidTarget?.call(t,n))??!0)return e.effect.getKeyframes().some(e=>{for(let n of t.properties)if(e[n])return!0})}}).map(e=>{let{effect:t,currentTime:n}=e,r=t?.getComputedTiming().duration;if(!(e.pending||e.playState===`finished`)&&typeof r==`number`&&typeof n==`number`&&n<r)return e.currentTime=r,()=>{e.currentTime=n}});if(n.length>0)return()=>n.forEach(e=>e?.())}var nc=class extends kr{constructor(e,t={}){let{frameTransform:n=Ps(e),ignoreTransforms:r,getBoundingClientRect:i=lo}=t,a=tc(e,{properties:[`transform`,`translate`,`scale`,`width`,`height`],isValidTarget:t=>(t!==e||To())&&t.contains(e)}),o=i(e),{top:s,left:c,width:l,height:u}=o,d,f=Os(e),p=Rs(f),m={x:p?.scaleX??1,y:p?.scaleY??1},h=rc(e,f);a?.(),p&&(d=Js(o,p,f.transformOrigin),(r||h)&&(s=d.top,c=d.left,l=d.width,u=d.height));let g={width:d?.width??l,height:d?.height??u};if(h&&!r&&d){let e=qs(d,h,f.transformOrigin);s=e.top,c=e.left,l=e.width,u=e.height,m.x=h.scaleX,m.y=h.scaleY}n&&(r||(c*=n.scaleX,l*=n.scaleX,s*=n.scaleY,u*=n.scaleY),c+=n.x,s+=n.y),super(c,s,l,u),this.scale=m,this.intrinsicWidth=g.width,this.intrinsicHeight=g.height}};function rc(e,t){let n=e.getAnimations();if(!n.length)return null;let r,i,a,o=!1;for(let e of n){if(e.playState!==`running`)continue;let t=so(e.effect)?e.effect.getKeyframes():[],n=t[t.length-1];if(!n)continue;let{transform:s,translate:c,scale:l}=n;typeof s==`string`&&s&&(r=s,o=!0),typeof c==`string`&&c&&(i=c,o=!0),typeof l==`string`&&l&&(a=l,o=!0)}return o?Rs({transform:r??t.transform,translate:i??t.translate,scale:a??t.scale}):null}function ic(e){return`style`in e&&typeof e.style==`object`&&e.style!==null&&`setProperty`in e.style&&`removeProperty`in e.style&&typeof e.style.setProperty==`function`&&typeof e.style.removeProperty==`function`}var ac=class{constructor(e){this.element=e,this.initial=new Map}set(e,t=``){let{element:n}=this;if(ic(n))for(let[r,i]of Object.entries(e)){let e=`${t}${r}`;this.initial.has(e)||this.initial.set(e,n.style.getPropertyValue(e)),n.style.setProperty(e,typeof i==`string`?i:`${i}px`)}}remove(e,t=``){let{element:n}=this;if(ic(n))for(let r of e){let e=`${t}${r}`;n.style.removeProperty(e)}}reset(){let{element:e}=this;if(ic(e)){for(let[t,n]of this.initial)e.style.setProperty(t,n);e.getAttribute(`style`)===``&&e.removeAttribute(`style`)}}};function oc(e){return e?e instanceof po(e).Element||fo(e)&&e.nodeType===Node.ELEMENT_NODE:!1}function sc(e){if(!e)return!1;let{KeyboardEvent:t}=po(e.target);return e instanceof t}function cc(e){if(!e)return!1;let{PointerEvent:t}=po(e.target);return e instanceof t}function lc(e){if(!oc(e))return!1;let{tagName:t}=e;return t===`INPUT`||t===`TEXTAREA`||uc(e)}function uc(e){return e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`}var dc={};function fc(e){let t=dc[e]==null?0:dc[e]+1;return dc[e]=t,`${e}-${t}`}var pc=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/Or.distance(t.shape.center,n),type:ga.PointerIntersection,priority:ha.High}:null},mc=({dragOperation:e,droppable:t})=>{let{shape:n}=e;if(!t.shape||!n?.current)return null;let r=n.current.intersectionArea(t.shape);if(r){let{position:i}=e,a=Or.distance(t.shape.center,i.current),o=r/(n.current.area+t.shape.area-r)/a;return{id:t.id,value:o,type:ga.ShapeIntersection,priority:ha.Normal}}return null},hc=e=>pc(e)??mc(e),gc=e=>{let{dragOperation:t,droppable:n}=e,{shape:r,position:i}=t;if(!n.shape)return null;let a=r?kr.from(r.current.boundingRectangle).corners:void 0,o=kr.from(n.shape.boundingRectangle).corners.reduce((e,t,n)=>e+Or.distance(Or.from(t),a?.[n]??i.current),0)/4;return{id:n.id,value:1/o,type:ga.Collision,priority:ha.Normal}},_c=Object.create,vc=Object.defineProperty,yc=Object.defineProperties,bc=Object.getOwnPropertyDescriptor,xc=Object.getOwnPropertyDescriptors,Sc=Object.getOwnPropertySymbols,Cc=Object.prototype.hasOwnProperty,wc=Object.prototype.propertyIsEnumerable,Tc=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Ec=e=>{throw TypeError(e)},Dc=(e,t,n)=>t in e?vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oc=(e,t)=>{for(var n in t||={})Cc.call(t,n)&&Dc(e,n,t[n]);if(Sc)for(var n of Sc(t))wc.call(t,n)&&Dc(e,n,t[n]);return e},kc=(e,t)=>yc(e,xc(t)),Ac=(e,t)=>vc(e,`name`,{value:t,configurable:!0}),jc=(e,t)=>{var n={};for(var r in e)Cc.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Sc)for(var r of Sc(e))t.indexOf(r)<0&&wc.call(e,r)&&(n[r]=e[r]);return n},Mc=e=>[,,,_c(e?.[Tc(`metadata`)]??null)],Nc=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Pc=e=>e!==void 0&&typeof e!=`function`?Ec(`Function expected`):e,Fc=(e,t,n,r,i)=>({kind:Nc[e],name:t,metadata:r,addInitializer:e=>n._?Ec(`Already initialized`):i.push(Pc(e||null))}),Ic=(e,t)=>Dc(t,Tc(`metadata`),e[3]),Lc=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},Rc=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=Nc[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&bc(d<4?i:{get[n](){return X(this,a)},set[n](e){return Vc(this,a,e)}},n));d?p&&d<4&&Ac(a,(d>2?`set `:d>1?`get `:``)+n):Ac(i,n);for(var y=r.length-1;y>=0;y--)l=Fc(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>Bc(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?X:Hc)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>Vc(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?Pc(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?Ec(`Object expected`):(Pc(o=s.get)&&(v.get=o),Pc(o=s.set)&&(v.set=o),Pc(o=s.init)&&g.unshift(o));return d||Ic(e,i),v&&vc(i,n,v),p?d^4?a:v:i},zc=(e,t,n)=>t.has(e)||Ec(`Cannot `+n),Bc=(e,t)=>Object(t)===t?e.has(t):Ec(`Cannot use the "in" operator on this value`),X=(e,t,n)=>(zc(e,t,`read from private field`),n?n.call(e):t.get(e)),Z=(e,t,n)=>t.has(e)?Ec(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Vc=(e,t,n,r)=>(zc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Hc=(e,t,n)=>(zc(e,t,`access private method`),n),Uc={role:`button`,roleDescription:`draggable`},Wc=`dnd-kit-description`,Gc=`dnd-kit-announcement`,Kc={draggable:`To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel.`},qc={dragstart({operation:{source:e}}){if(e)return`Picked up draggable item ${e.id}.`},dragover({operation:{source:e,target:t}}){if(!(!e||e.id===t?.id))return t?`Draggable item ${e.id} was moved over droppable target ${t.id}.`:`Draggable item ${e.id} is no longer over a droppable target.`},dragend({operation:{source:e,target:t},canceled:n}){if(e)return n?`Dragging was cancelled. Draggable item ${e.id} was dropped.`:t?`Draggable item ${e.id} was dropped over droppable target ${t.id}`:`Draggable item ${e.id} was dropped.`}};function Jc(e){let t=e.tagName.toLowerCase();return[`input`,`select`,`textarea`,`a`,`button`].includes(t)}function Yc(e,t){let n=document.createElement(`div`);return n.id=e,n.style.setProperty(`display`,`none`),n.textContent=t,n}function Xc(e){let t=document.createElement(`div`);return t.id=e,t.setAttribute(`role`,`status`),t.setAttribute(`aria-live`,`polite`),t.setAttribute(`aria-atomic`,`true`),t.style.setProperty(`position`,`fixed`),t.style.setProperty(`width`,`1px`),t.style.setProperty(`height`,`1px`),t.style.setProperty(`margin`,`-1px`),t.style.setProperty(`border`,`0`),t.style.setProperty(`padding`,`0`),t.style.setProperty(`overflow`,`hidden`),t.style.setProperty(`clip`,`rect(0 0 0 0)`),t.style.setProperty(`clip-path`,`inset(100%)`),t.style.setProperty(`white-space`,`nowrap`),t}var Zc=[`dragover`,`dragmove`],Qc=class extends _i{constructor(e,t){super(e);let{id:n,idPrefix:{description:r=Wc,announcement:i=Gc}={},announcements:a=qc,screenReaderInstructions:o=Kc,debounce:s=500}=t??{},c=n?`${r}-${n}`:fc(r),l=n?`${i}-${n}`:fc(i),u,d,f,p,m=(e=p)=>{!f||!e||f?.nodeValue!==e&&(f.nodeValue=e)},h=()=>ws.schedule(m),g=$c(h,s),_=Object.entries(a).map(([e,t])=>this.manager.monitor.addEventListener(e,(n,r)=>{let i=f;if(!i)return;let a=t?.(n,r);a&&i.nodeValue!==a&&(p=a,Zc.includes(e)?g():(h(),g.cancel()))})),v=()=>{let e=[];u?.isConnected||(u=Yc(c,o.draggable),e.push(u)),d?.isConnected||(d=Xc(l),f=document.createTextNode(``),d.appendChild(f),e.push(d)),e.length>0&&document.body.append(...e)},y=new Set;function b(){for(let e of y)e()}this.registerEffect(()=>{y.clear();for(let e of this.manager.registry.draggables.value){let t=e.handle??e.element;if(t){(!u||!d)&&y.add(v),(!Jc(t)||To())&&!t.hasAttribute(`tabindex`)&&y.add(()=>t.setAttribute(`tabindex`,`0`)),!t.hasAttribute(`role`)&&t.tagName.toLowerCase()!==`button`&&y.add(()=>t.setAttribute(`role`,Uc.role)),t.hasAttribute(`aria-roledescription`)||y.add(()=>t.setAttribute(`aria-roledescription`,Uc.roleDescription)),t.hasAttribute(`aria-describedby`)||y.add(()=>t.setAttribute(`aria-describedby`,c));for(let n of[`aria-pressed`,`aria-grabbed`]){let r=String(e.isDragging);t.getAttribute(n)!==r&&y.add(()=>t.setAttribute(n,r))}let n=String(e.disabled);t.getAttribute(`aria-disabled`)!==n&&y.add(()=>t.setAttribute(`aria-disabled`,n))}}y.size>0&&ws.schedule(b)}),this.destroy=()=>{super.destroy(),u?.remove(),d?.remove(),_.forEach(e=>e())}}};function $c(e,t){let n,r=()=>{clearTimeout(n),n=setTimeout(e,t)};return r.cancel=()=>clearTimeout(n),r}var el=new Map,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml=class extends (al=vi,il=[H],rl=[U],nl=[U],tl=[U],al){constructor(e,t){super(e,t),Lc(sl,5,this),Z(this,ll),Z(this,ol,new Set),Z(this,cl,Lc(sl,8,this,new Set)),Lc(sl,11,this),this.registerEffect(Hc(this,ll,ul))}register(e){return X(this,ol).add(e),()=>{X(this,ol).delete(e)}}addRoot(e){return V(()=>{let t=new Set(this.additionalRoots);t.add(e),this.additionalRoots=t}),()=>{V(()=>{let t=new Set(this.additionalRoots);t.delete(e),this.additionalRoots=t})}}get sourceRoot(){let{source:e}=this.manager.dragOperation;return Oo(e?.element??null)}get targetRoot(){let{target:e}=this.manager.dragOperation;return Oo(e?.element??null)}get roots(){let{status:e}=this.manager.dragOperation;if(e.initializing||e.initialized){let e=[this.sourceRoot,this.targetRoot].filter(e=>e!=null);return new Set([...e,...this.additionalRoots])}return new Set}};sl=Mc(al),ol=new WeakMap,cl=new WeakMap,ll=new WeakSet,ul=function(){let{roots:e}=this,t=[];for(let n of e)for(let e of X(this,ol))t.push(Hc(this,ll,dl).call(this,n,e));return()=>{for(let e of t)e()}},dl=function(e,t){let n=el.get(e);n||(n=new Map,el.set(e,n));let r=n.get(t);if(!r){let i=mo(e)?Hc(this,ll,fl).call(this,e,n,t):Hc(this,ll,pl).call(this,e,n,t);if(!i)return()=>{};r=i,n.set(t,r)}r.refCount++;let i=!1;return()=>{i||(i=!0,r.refCount--,r.refCount===0&&r.cleanup())}},fl=function(e,t,n){let r=e.createElement(`style`),{nonce:i}=this.options??{};i&&r.setAttribute(`nonce`,i),r.textContent=n,e.head.prepend(r);let a=new MutationObserver(t=>{for(let n of t)for(let t of Array.from(n.removedNodes))if(t===r){e.head.prepend(r);return}});return a.observe(e.head,{childList:!0}),{refCount:0,cleanup:()=>{a.disconnect(),r.remove(),t.delete(n),t.size===0&&el.delete(e)}}},pl=function(e,t,n){`adoptedStyleSheets`in e&&Array.isArray(e.adoptedStyleSheets);let{CSSStyleSheet:r}=e.ownerDocument.defaultView??{};if(!r)return null;let i=new r;return i.replaceSync(n),e.adoptedStyleSheets.push(i),{refCount:0,cleanup:()=>{if(Do(e)&&e.host?.isConnected){let t=e.adoptedStyleSheets.indexOf(i);t!==-1&&e.adoptedStyleSheets.splice(t,1)}t.delete(n),t.size===0&&el.delete(e)}}},Rc(sl,4,`additionalRoots`,il,ml,cl),Rc(sl,2,`sourceRoot`,rl,ml),Rc(sl,2,`targetRoot`,nl,ml),Rc(sl,2,`roots`,tl,ml),Ic(sl,ml),ml.configure=di(ml);var hl=ml,gl=class extends _i{constructor(e,t){super(e,t),this.manager=e;let{cursor:n=`grabbing`}=t??{},r=e.registry.plugins.get(hl)?.register(`* { cursor: ${n} !important; }`);if(r){let e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}}},_l=`data-dnd-`,vl=`${_l}dropping`,yl=`--dnd-`,bl=`${_l}dragging`,xl=`${_l}placeholder`,Sl=[bl,xl,`popover`,`aria-pressed`,`aria-grabbing`],Cl=[`view-transition-name`],wl=`
  :is(:root,:host) [${bl}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${yl}top, 0px) !important;
    left: var(${yl}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${yl}width, auto);
    max-width: var(${yl}width, auto);
    height: var(${yl}height, auto);
    max-height: var(${yl}height, auto);
    transform: var(${yl}transform, none) !important;
    transition: var(${yl}transition) !important;
  }

  :is(:root,:host) [${xl}] {
    transition: none;
  }

  :is(:root,:host) [${xl}='hidden'] {
    visibility: hidden;
  }

  [${bl}] * {
    pointer-events: none !important;
  }

  [${bl}]:not([${vl}]) {
    translate: var(${yl}translate) !important;
  }

  [${bl}][style*='${yl}scale'] {
    scale: var(${yl}scale) !important;
    transform-origin: var(${yl}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${bl}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${bl}]::backdrop, [${_l}overlay]:not([${bl}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g,` `).replace(/\s+/g,` `).trim();function Tl(e,t=`hidden`){return V(()=>{let{element:n,manager:r}=e;if(!n||!r)return;let i=El(n,r.registry.droppables),a=[],o=Ao(n),{remove:s}=o;return Dl(i,o,a),Ol(o,t),o.remove=()=>{a.forEach(e=>e()),s.call(o)},o})}function El(e,t){let n=new Map;for(let r of t)if(r.element&&(e===r.element||e.contains(r.element))){let e=`${_l}${fc(`dom-id`)}`;r.element.setAttribute(e,``),n.set(r,e)}return n}function Dl(e,t,n){for(let[r,i]of e){if(!r.element)continue;let e=`[${i}]`,a=t.matches(e)?t:t.querySelector(e);if(r.element.removeAttribute(i),!a)continue;let o=r.element;r.proxy=a,a.removeAttribute(i),Fo.set(o,a),n.push(()=>{Fo.delete(o),r.proxy=void 0})}}function Ol(e,t=`hidden`){e.setAttribute(`inert`,`true`),e.setAttribute(`tab-index`,`-1`),e.setAttribute(`aria-hidden`,`true`),e.setAttribute(xl,t)}function kl(e,t){return e===t||Ro(e)===Ro(t)}function Al(e){let{target:t}=e;`newState`in e&&e.newState===`closed`&&oc(t)&&t.hasAttribute(`popover`)&&requestAnimationFrame(()=>vs(t))}function jl(e){return e.tagName===`TR`}function Ml(e,t,n){let r=new MutationObserver(r=>{let i=!1;for(let n of r){if(n.target!==e){i=!0;continue}if(n.type!==`attributes`)continue;let r=n.attributeName;if(r.startsWith(`aria-`)||Sl.includes(r))continue;let a=e.getAttribute(r);if(r===`style`){if(ic(e)&&ic(t)){let n=e.style;for(let e of Array.from(t.style))n.getPropertyValue(e)===``&&t.style.removeProperty(e);for(let e of Array.from(n)){if(Cl.includes(e)||e.startsWith(yl))continue;let r=n.getPropertyValue(e);t.style.setProperty(e,r)}}}else a===null?t.removeAttribute(r):t.setAttribute(r,a)}i&&n&&t.replaceChildren(...e.cloneNode(!0).childNodes)});return r.observe(e,{attributes:!0,subtree:!0,childList:!0}),r}function Nl(e,t,n){let r=new MutationObserver(r=>{for(let i of r)if(i.addedNodes.length!==0)for(let r of Array.from(i.addedNodes)){if(r.contains(e)&&e.nextElementSibling!==t){e.insertAdjacentElement(`afterend`,t),vs(n);return}if(r.contains(t)&&t.previousElementSibling!==e){t.insertAdjacentElement(`beforebegin`,e),vs(n);return}}e.isConnected&&t.isConnected&&e.nextElementSibling!==t&&(e.insertAdjacentElement(`afterend`,t),vs(n))});return r.observe(e.ownerDocument.body,{childList:!0,subtree:!0}),r}function Pl(e){return new ResizeObserver(()=>{var t;let n=new nc(e.placeholder,{frameTransform:e.frameTransform,ignoreTransforms:!0}),r=e.transformOrigin??{x:1,y:1},i=(e.width-n.width)*r.x+e.delta.x,a=(e.height-n.height)*r.y+e.delta.y,o=Eo();if(e.styles.set({width:n.width-e.widthOffset,height:n.height-e.heightOffset,top:e.top+a+o.y,left:e.left+i+o.x},yl),(t=e.getElementMutationObserver())==null||t.takeRecords(),jl(e.element)&&jl(e.placeholder)){let t=Array.from(e.element.cells),n=Array.from(e.placeholder.cells);e.getSavedCellWidths()||e.setSavedCellWidths(t.map(e=>e.style.width));for(let[e,r]of t.entries()){let t=n[e];r.style.width=`${t.getBoundingClientRect().width}px`}}let s=e.getTranslate()??{x:0,y:0},c=e.left+i+o.x+s.x,l=e.top+a+o.y+s.y,u=n.width-e.widthOffset,d=n.height-e.heightOffset,f=e.frameTransform;e.dragOperation.shape=new kr(c*f.scaleX+f.x,l*f.scaleY+f.y,u*f.scaleX,d*f.scaleY)})}var Fl=250,Il=`ease`;function Ll(e){var t;let{animation:n}=e;if(typeof n==`function`){let t=n({source:e.source,element:e.element,feedbackElement:e.feedbackElement,placeholder:e.placeholder,translate:e.translate,moved:e.moved});Promise.resolve(t).then(()=>{e.cleanup(),requestAnimationFrame(e.restoreFocus)});return}let{duration:r=Fl,easing:i=Il}=n??{};vs(e.feedbackElement);let[,a]=co(e.feedbackElement,e=>`translate`in e)??[];a?.pause();let o=e.placeholder??e.element,s={frameTransform:kl(e.feedbackElement,o)?null:void 0},c=new nc(e.feedbackElement,s),l=Ls(Os(e.feedbackElement).translate)??e.translate,u=new nc(o,s),d=kr.delta(c,u,e.alignment),f={x:l.x-d.x,y:l.y-d.y},p=Math.round(c.intrinsicHeight)===Math.round(u.intrinsicHeight)?{}:{minHeight:[`${c.intrinsicHeight}px`,`${u.intrinsicHeight}px`],maxHeight:[`${c.intrinsicHeight}px`,`${u.intrinsicHeight}px`]},m=Math.round(c.intrinsicWidth)===Math.round(u.intrinsicWidth)?{}:{minWidth:[`${c.intrinsicWidth}px`,`${u.intrinsicWidth}px`],maxWidth:[`${c.intrinsicWidth}px`,`${u.intrinsicWidth}px`]};e.styles.set({transition:e.transition},yl),e.feedbackElement.setAttribute(vl,``),(t=e.getElementMutationObserver())==null||t.takeRecords(),Ys({element:e.feedbackElement,keyframes:kc(Oc(Oc({},p),m),{translate:[`${l.x}px ${l.y}px 0`,`${f.x}px ${f.y}px 0`]}),options:{duration:ko(po(e.feedbackElement))?0:e.moved||e.feedbackElement!==e.element?r:0,easing:i}}).then(()=>{e.feedbackElement.removeAttribute(vl),a?.finish(),e.cleanup(),requestAnimationFrame(e.restoreFocus)})}var Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl=class extends (zl=_i,Rl=[H],zl){constructor(e,t){super(e,t),Z(this,Hl),Z(this,Vl,Lc(Bl,8,this)),Lc(Bl,11,this),this.state={initial:{},current:{}};let n=e.registry.plugins.get(hl),r=n?.register(wl);if(r){let e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}this.registerEffect(Hc(this,Hl,Ul).bind(this,n)),this.registerEffect(Hc(this,Hl,Wl))}};Bl=Mc(zl),Vl=new WeakMap,Hl=new WeakSet,Ul=function(e){let{overlay:t}=this;if(!t||!e)return;let n=Oo(t);if(n)return e.addRoot(n)},Wl=function(){let{state:e,manager:t,options:n}=this,{dragOperation:r}=t,{position:i,source:a,status:o}=r;if(o.idle){e.current={},e.initial={};return}if(!a)return;let{element:s}=a,c=a.pluginConfig(Gl),l=c?.feedback??n?.feedback??`default`,u=typeof l==`function`?l(a,t):l;if(!s||u===`none`||!o.initialized||o.initializing)return;let{initial:d}=e,f=this.overlay??s,p=Ps(f),m=Ps(s),h=!kl(s,f),g=new nc(s,{frameTransform:h?m:null,ignoreTransforms:!h}),_={x:m.scaleX/p.scaleX,y:m.scaleY/p.scaleY},{width:v,height:y,top:b,left:x}=g;h&&(v/=_.x,y/=_.y);let S=new ac(f),C=Os(s),{transition:w,translate:T,boxSizing:E,paddingBlockStart:D,paddingBlockEnd:O,paddingInlineStart:k,paddingInlineEnd:ee,borderInlineStartWidth:A,borderInlineEndWidth:te,borderBlockStartWidth:j,borderBlockEndWidth:M}=C,N=w.split(`,`).filter(e=>!/^\s*(transform|translate|scale)\b/.test(e)).join(`,`),P=Rs(C),ne=C.transform,re=u===`clone`,ie=E===`content-box`,F=ie?parseInt(k)+parseInt(ee)+parseInt(A)+parseInt(te):0,ae=ie?parseInt(D)+parseInt(O)+parseInt(j)+parseInt(M):0,oe=u!==`move`&&!this.overlay?Tl(a,re?`clone`:`hidden`):null,se=V(()=>sc(t.dragOperation.activatorEvent));if(!d.translate){if(this.overlay&&P)d.translate={x:P.x,y:P.y};else if(T!==`none`){let e=Ls(T);e&&(d.translate=e)}}if(!d.transformOrigin){let e=V(()=>i.current),t=x+(P?.x??0),n=b+(P?.y??0);d.transformOrigin={x:(e.x-t*p.scaleX-p.x)/(v*p.scaleX),y:(e.y-n*p.scaleY-p.y)/(y*p.scaleY)}}let{transformOrigin:ce}=d,le=b*p.scaleY+p.y,I=x*p.scaleX+p.x;if(!d.coordinates&&(d.coordinates={x:I,y:le},_.x!==1||_.y!==1)){let{scaleX:e,scaleY:t}=m,{x:n,y:r}=ce;d.coordinates.x+=(v*e-v)*n,d.coordinates.y+=(y*t-y)*r}d.dimensions||={width:v,height:y},d.frameTransform||=p;let ue={x:d.coordinates.x-I,y:d.coordinates.y-le},de={width:(d.dimensions.width*d.frameTransform.scaleX-v*p.scaleX)*ce.x,height:(d.dimensions.height*d.frameTransform.scaleY-y*p.scaleY)*ce.y},fe={x:ue.x/p.scaleX+de.width,y:ue.y/p.scaleY+de.height},pe={left:x+fe.x,top:b+fe.y};f.setAttribute(bl,`true`);let me=V(()=>r.transform),he=d.translate??{x:0,y:0},ge=me.x*p.scaleX+he.x,_e=me.y*p.scaleY+he.y,ve=Eo();S.set({width:v-F,height:y-ae,top:pe.top+ve.y,left:pe.left+ve.x,translate:`${ge}px ${_e}px 0`,transform:this.overlay?`none`:ne,transition:N?`${N}, translate 0ms linear`:`translate 0ms linear`,scale:h?`${_.x} ${_.y}`:``,"transform-origin":`${ce.x*100}% ${ce.y*100}%`},yl),oe&&(s.insertAdjacentElement(`afterend`,oe),n?.rootElement&&(typeof n.rootElement==`function`?n.rootElement(a):n.rootElement).appendChild(s)),_s(f)&&(f.hasAttribute(`popover`)||f.setAttribute(`popover`,`manual`),vs(f),f.addEventListener(`beforetoggle`,Al));let ye,be,xe,Se=Pl({placeholder:oe,element:s,feedbackElement:f,frameTransform:p,transformOrigin:ce,width:v,height:y,top:b,left:x,widthOffset:F,heightOffset:ae,delta:fe,styles:S,dragOperation:r,getTranslate:()=>e.current.translate,getElementMutationObserver:()=>ye,getSavedCellWidths:()=>xe,setSavedCellWidths:e=>{xe=e}}),Ce=new nc(f);V(()=>r.shape=Ce);let we=po(f),Te=e=>{this.manager.actions.stop({event:e})},Ee=ko(we);se&&we.addEventListener(`resize`,Te),V(()=>a.status)===`idle`&&requestAnimationFrame(()=>a.status=`dragging`),oe&&(Se.observe(oe),ye=Ml(s,oe,re),be=Nl(s,oe,f));let De=t.dragOperation.source?.id,Oe=()=>{if(!se||De==null)return;let e=t.registry.draggables.get(De),n=e?.handle??e?.element;ho(n)&&n.focus()},ke=()=>{if(ye?.disconnect(),be?.disconnect(),Se.disconnect(),we.removeEventListener(`resize`,Te),_s(f)&&(f.removeEventListener(`beforetoggle`,Al),f.removeAttribute(`popover`)),f.removeAttribute(bl),S.reset(),xe&&jl(s)){let e=Array.from(s.cells);for(let[t,n]of e.entries())n.style.width=xe[t]??``}a.status=`idle`;let t=e.current.translate!=null,n=r.status.dragging;oe&&(!n&&t||oe.parentElement!==f.parentElement)&&f.isConnected&&oe.replaceWith(f),oe?.remove()},Ae=n?.dropAnimation,je=this,Me=Mn(()=>{let{transform:t,status:i}=r;if(!(!t.x&&!t.y&&!e.current.translate)&&i.dragging){let i=d.translate??{x:0,y:0},a={x:t.x/p.scaleX+i.x,y:t.y/p.scaleY+i.y},o=e.current.translate,s=V(()=>r.modifiers),c=V(()=>r.shape?.current),l=n?.keyboardTransition,u=se&&!Ee&&l!==null?`${l?.duration??250}ms ${l?.easing??`cubic-bezier(0.25, 1, 0.5, 1)`}`:`0ms linear`;if(S.set({transition:N?`${N}, translate ${u}`:`translate ${u}`,translate:`${a.x}px ${a.y}px 0`},yl),ye?.takeRecords(),c&&c!==Ce&&o&&!s.length){let e=Or.delta(a,o);r.shape=kr.from(c.boundingRectangle).translate(e.x*p.scaleX,e.y*p.scaleY)}else r.shape=new nc(f);e.current.translate=a}},function(){if(r.status.dropped){this.dispose(),a.status=`dropping`;let n=c?.dropAnimation===void 0?je.dropAnimation===void 0?Ae:je.dropAnimation:c.dropAnimation,r=e.current.translate,i=r!=null;if(!r&&s!==f&&(r={x:0,y:0}),!r||n===null){ke();return}t.renderer.rendering.then(()=>{Ll({source:a,element:s,feedbackElement:f,placeholder:oe,translate:r,moved:i,transition:w,alignment:a.alignment,styles:S,animation:n??void 0,getElementMutationObserver:()=>ye,cleanup:ke,restoreFocus:Oe})})}});return()=>{ke(),Me()}},Rc(Bl,4,`overlay`,Rl,Gl,Vl),Ic(Bl,Gl),Gl.configure=di(Gl);var Kl=Gl,ql=!0,Jl=!1,Yl,Xl,Zl,Ql=(Zl=[H],Bs.Forward),$l,eu,tu;Xl=(Yl=[H],Bs.Reverse);var nu=class{constructor(){Z(this,eu,Lc($l,8,this,ql)),Lc($l,11,this),Z(this,tu,Lc($l,12,this,ql)),Lc($l,15,this)}isLocked(e){return e===Bs.Idle?!1:e==null?this[Bs.Forward]===ql&&this[Bs.Reverse]===ql:this[e]===ql}unlock(e){e!==Bs.Idle&&(this[e]=Jl)}};$l=Mc(null),eu=new WeakMap,tu=new WeakMap,Rc($l,4,Ql,Zl,nu,eu),Rc($l,4,Xl,Yl,nu,tu),Ic($l,nu);var ru=[Bs.Forward,Bs.Reverse],iu=class{constructor(){this.x=new nu,this.y=new nu}isLocked(){return this.x.isLocked()&&this.y.isLocked()}},au=class extends _i{constructor(e){super(e);let t=Wt(new iu),n=null;this.signal=t,en(()=>{let{status:r}=e.dragOperation;if(!r.initialized){n=null,t.value=new iu;return}let{delta:i}=e.dragOperation.position;if(n){let e={x:ou(i.x,n.x),y:ou(i.y,n.y)},r=t.peek();z(()=>{for(let t of zr)for(let n of ru)e[t]===n&&r[t].unlock(n);t.value=r})}n=i})}get current(){return this.signal.peek()}};function ou(e,t){return Math.sign(e-t)}var su,cu,lu,uu,du,fu,pu=class extends (cu=vi,su=[H],cu){constructor(e){super(e),Z(this,uu,Lc(lu,8,this,!1)),Lc(lu,11,this),Z(this,du),Z(this,fu,()=>{if(!X(this,du))return;let{element:e,by:t}=X(this,du);t.y&&(e.scrollTop+=t.y),t.x&&(e.scrollLeft+=t.x)}),this.scroll=(e,t)=>{if(this.disabled)return!1;let n=this.getScrollableElements();if(!n)return Vc(this,du,void 0),!1;let{position:r}=this.manager.dragOperation,i=r?.current;if(i){let{by:r}=e??{},a=r?{x:mu(r.x),y:mu(r.y)}:void 0,o=a?void 0:this.scrollIntentTracker.current;if(o?.isLocked())return!1;for(let e of n){let n=Ss(e,r);if(n.x||n.y){let{speed:n,direction:s}=Us(e,i,a,t?.acceleration,t?.threshold);if(o)for(let e of zr)o[e].isLocked(s[e])&&(n[e]=0,s[e]=0);if(s.x||s.y){let{x:t,y:i}=r??s,a=t*n.x,o=i*n.y;if(a||o){let t=X(this,du)?.by;if(this.autoScrolling&&t&&(t.x&&!a||t.y&&!o))continue;return Vc(this,du,{element:e,by:{x:a,y:o}}),ws.schedule(X(this,fu)),!0}}}}}return Vc(this,du,void 0),!1};let t=null,n=null,r=kn(()=>{let{position:n,source:r}=e.dragOperation;if(!n)return null;let i=No(Oo(r?.element),n.current);return i&&(t=i),i??t}),i=kn(()=>{let t=r.value,{documentElement:i}=_o(t);if(!t||t===i){let{target:t}=e.dragOperation,r=t?.element;if(r){let e=Ns(r,{excludeElement:!1});return n=e,e}}if(t){let e=Ns(t,{excludeElement:!1});return this.autoScrolling&&n&&e.size<n?.size?n:(n=e,e)}return n=null,null},An);this.getScrollableElements=()=>i.value,this.scrollIntentTracker=new au(e),this.destroy=e.monitor.addEventListener(`dragmove`,t=>{this.disabled||t.defaultPrevented||!sc(e.dragOperation.activatorEvent)||!t.by||this.scroll({by:t.by})&&t.preventDefault()})}};lu=Mc(cu),uu=new WeakMap,du=new WeakMap,fu=new WeakMap,Rc(lu,4,`autoScrolling`,su,pu,uu),Ic(lu,pu);function mu(e){return e>0?Bs.Forward:e<0?Bs.Reverse:Bs.Idle}var hu=new class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(let t of e)t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}}(e=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()}),gu=10,_u=class extends _i{constructor(e,t){super(e,t);let n=e.registry.plugins.get(pu);if(!n)throw Error(`AutoScroller plugin depends on Scroller plugin`);this.destroy=en(()=>{if(this.disabled)return;let{position:t,status:r}=e.dragOperation;if(r.dragging){let e={acceleration:this.options?.acceleration,threshold:typeof this.options?.threshold==`number`?{x:this.options.threshold,y:this.options.threshold}:this.options?.threshold};if(n.scroll(void 0,e)){n.autoScrolling=!0;let t=setInterval(()=>hu.schedule(()=>n.scroll(void 0,e)),gu);return()=>{clearInterval(t)}}n.autoScrolling=!1}})}};_u.configure=di(_u);var vu=_u,yu={capture:!0,passive:!0},bu,xu=class extends vi{constructor(e){super(e),Z(this,bu),this.handleScroll=()=>{X(this,bu)??Vc(this,bu,setTimeout(()=>{this.manager.collisionObserver.forceUpdate(!1),Vc(this,bu,void 0)},50))};let{dragOperation:t}=this.manager;this.destroy=en(()=>{if(t.status.dragging){let e=t.source?.element?.ownerDocument??document;return e.addEventListener(`scroll`,this.handleScroll,yu),()=>{e.removeEventListener(`scroll`,this.handleScroll,yu)}}})}};bu=new WeakMap;var Su=`* { user-select: none !important; -webkit-user-select: none !important; }`,Cu=class extends _i{constructor(e){super(e),this.manager=e;let t=e.registry.plugins.get(hl)?.register(Su);if(this.destroy=en(()=>{let{dragOperation:e}=this.manager;if(e.status.initialized)return wu(),document.addEventListener(`selectionchange`,wu,{capture:!0}),()=>{document.removeEventListener(`selectionchange`,wu,{capture:!0})}}),t){let e=this.destroy.bind(this);this.destroy=()=>{t(),e()}}}};function wu(){var e;(e=document.getSelection())==null||e.removeAllRanges()}var Tu=Object.freeze({offset:10,keyboardCodes:{start:[`Space`,`Enter`],cancel:[`Escape`],end:[`Space`,`Enter`,`Tab`],up:[`ArrowUp`],down:[`ArrowDown`],left:[`ArrowLeft`],right:[`ArrowRight`]},preventActivation(e,t){let n=t.handle??t.element;return e.target!==n}}),Eu,Du=class extends Oa{constructor(e,t){super(e),this.manager=e,this.options=t,Z(this,Eu,[]),this.listeners=new Lo,this.handleSourceKeyDown=(e,t,n)=>{if(this.disabled||e.defaultPrevented||!oc(e.target)||t.disabled)return;let{keyboardCodes:r=Tu.keyboardCodes,preventActivation:i=Tu.preventActivation}=n??{};r.start.includes(e.code)&&this.manager.dragOperation.status.idle&&(i?.(e,t)||this.handleStart(e,t,n))}}bind(e,t=this.options){return en(()=>{let n=e.handle??e.element,r=n=>{sc(n)&&this.handleSourceKeyDown(n,e,t)};if(n)return n.addEventListener(`keydown`,r),()=>{n.removeEventListener(`keydown`,r)}})}handleStart(e,t,n){let{element:r}=t;if(!r)throw Error(`Source draggable does not have an associated element`);e.preventDefault(),e.stopImmediatePropagation(),Ws(r);let{center:i}=new nc(r);if(this.manager.actions.start({event:e,coordinates:{x:i.x,y:i.y},source:t}).signal.aborted)return this.cleanup();this.sideEffects();let a=_o(r),o=[this.listeners.bind(a,[{type:`keydown`,listener:e=>this.handleKeyDown(e,t,n),options:{capture:!0}}])];X(this,Eu).push(...o)}handleKeyDown(e,t,n){let{keyboardCodes:r=Tu.keyboardCodes}=n??{};if(ku(e,[...r.end,...r.cancel])){e.preventDefault();let t=ku(e,r.cancel);this.handleEnd(e,t);return}ku(e,r.up)?this.handleMove(`up`,e):ku(e,r.down)&&this.handleMove(`down`,e),ku(e,r.left)?this.handleMove(`left`,e):ku(e,r.right)&&this.handleMove(`right`,e)}handleEnd(e,t){this.manager.actions.stop({event:e,canceled:t}),this.cleanup()}handleMove(e,t){let{shape:n}=this.manager.dragOperation,r=t.shiftKey?5:1,i={x:0,y:0},a=this.options?.offset??Tu.offset;if(typeof a==`number`&&(a={x:a,y:a}),n){switch(e){case`up`:i={x:0,y:-a.y*r};break;case`down`:i={x:0,y:a.y*r};break;case`left`:i={x:-a.x*r,y:0};break;case`right`:i={x:a.x*r,y:0}}(i.x||i.y)&&(t.preventDefault(),this.manager.actions.move({event:t,by:i}))}}sideEffects(){let e=this.manager.registry.plugins.get(vu);e?.disabled===!1&&(e.disable(),X(this,Eu).push(()=>{e.enable()}))}cleanup(){X(this,Eu).forEach(e=>e()),Vc(this,Eu,[])}destroy(){this.cleanup(),this.listeners.clear()}};Eu=new WeakMap,Du.configure=di(Du),Du.defaults=Tu;var Ou=Du;function ku(e,t){return t.includes(e.code)}var Au,ju=class extends ja{constructor(){super(...arguments),Z(this,Au)}onEvent(e){switch(e.type){case`pointerdown`:Vc(this,Au,So(e));break;case`pointermove`:if(!X(this,Au))return;let{x:t,y:n}=So(e),r={x:t-X(this,Au).x,y:n-X(this,Au).y},{tolerance:i}=this.options;if(i&&Lr(r,i)){this.abort();return}Lr(r,this.options.value)&&this.activate(e);break;case`pointerup`:this.abort()}}abort(){Vc(this,Au,void 0)}};Au=new WeakMap;var Mu,Nu,Pu=class extends ja{constructor(){super(...arguments),Z(this,Mu),Z(this,Nu)}onEvent(e){switch(e.type){case`pointerdown`:Vc(this,Nu,So(e)),Vc(this,Mu,setTimeout(()=>this.activate(e),this.options.value));break;case`pointermove`:if(!X(this,Nu))return;let{x:t,y:n}=So(e);Lr({x:t-X(this,Nu).x,y:n-X(this,Nu).y},this.options.tolerance)&&this.abort();break;case`pointerup`:this.abort()}}abort(){X(this,Mu)&&(clearTimeout(X(this,Mu)),Vc(this,Nu,void 0),Vc(this,Mu,void 0))}};Mu=new WeakMap,Nu=new WeakMap;var Fu=class{};Fu.Delay=Pu,Fu.Distance=ju;var Iu=Object.freeze({activationConstraints(e,t){let{pointerType:n,target:r}=e;if(!(n===`mouse`&&oc(r)&&(t.handle===r||t.handle?.contains(r))))return n===`touch`?[new Fu.Delay({value:250,tolerance:5})]:lc(r)&&!e.defaultPrevented?[new Fu.Delay({value:200,tolerance:0})]:[new Fu.Delay({value:200,tolerance:10}),new Fu.Distance({value:5})]},preventActivation(e,t){let{target:n}=e;return n===t.element||n===t.handle||!oc(n)||t.handle?.contains(n)?!1:Io(n)}}),Lu,Ru=class extends Oa{constructor(e,t){super(e),this.manager=e,this.options=t,Z(this,Lu,new Set),this.listeners=new Lo,this.latest={event:void 0,coordinates:void 0},this.handleMove=()=>{let{event:e,coordinates:t}=this.latest;!e||!t||this.manager.actions.move({event:e,to:t})},this.handleCancel=this.handleCancel.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activationConstraints(e,t,n=this.options){let{activationConstraints:r=Iu.activationConstraints}=n??{};return typeof r==`function`?r(e,t):r}bind(e,t=this.options){return en(()=>{let n=new AbortController,{signal:r}=n,i=n=>{cc(n)&&this.handlePointerDown(n,e,t)},a=[e.handle??e.element];t?.activatorElements&&(a=Array.isArray(t.activatorElements)?t.activatorElements:t.activatorElements(e));for(let e of a)e&&(Wu(e.ownerDocument.defaultView),e.addEventListener(`pointerdown`,i,{signal:r}));return()=>n.abort()})}handlePointerDown(e,t,n){if(this.disabled||!e.isPrimary||e.button!==0||!oc(e.target)||t.disabled||Bu(e)||!this.manager.dragOperation.status.idle)return;let{preventActivation:r=Iu.preventActivation}=n??{};if(r?.(e,t))return;let{target:i}=e,a=ho(i)&&i.draggable&&i.getAttribute(`draggable`)===`true`,o=Ps(t.element),{x:s,y:c}=So(e);this.initialCoordinates={x:s*o.scaleX+o.x,y:c*o.scaleY+o.y};let l=this.activationConstraints(e,t,n);e.sensor=this;let u=new ka(l,e=>this.handleStart(t,e));u.signal.onabort=()=>this.handleCancel(e),u.onEvent(e),this.controller=u;let d=wo(),f=this.listeners.bind(d,[{type:`pointermove`,listener:e=>this.handlePointerMove(e,t)},{type:`pointerup`,listener:this.handlePointerUp,options:{capture:!0}},{type:`pointercancel`,listener:this.handleCancel},{type:`dragstart`,listener:a?this.handleCancel:Vu,options:{capture:!0}}]);X(this,Lu).add(()=>{f(),this.initialCoordinates=void 0})}handlePointerMove(e,t){var n;if(this.controller?.activated===!1){(n=this.controller)==null||n.onEvent(e);return}if(this.manager.dragOperation.status.dragging){let n=So(e),r=Ps(t.element);n.x=n.x*r.scaleX+r.x,n.y=n.y*r.scaleY+r.y,e.preventDefault(),e.stopPropagation(),this.latest.event=e,this.latest.coordinates=n,ws.schedule(this.handleMove)}}handlePointerUp(e){let{status:t}=this.manager.dragOperation;if(!t.idle){e.preventDefault(),e.stopPropagation();let n=!t.initialized;this.manager.actions.stop({event:e,canceled:n})}this.cleanup()}handleKeyDown(e){e.key===`Escape`&&(e.preventDefault(),this.handleCancel(e))}handleStart(e,t){let{manager:n,initialCoordinates:r}=this;if(!r||!n.dragOperation.status.idle||t.defaultPrevented)return;if(n.actions.start({coordinates:r,event:t,source:e}).signal.aborted)return this.cleanup();t.preventDefault();let i=_o(t.target).body;try{i.setPointerCapture(t.pointerId)}catch{this.handleCancel(t);return}let a=oc(t.target)?[t.target,i]:i,o=this.listeners.bind(a,[{type:`touchmove`,listener:Vu,options:{passive:!1}},{type:`click`,listener:Vu},{type:`contextmenu`,listener:Vu},{type:`keydown`,listener:this.handleKeyDown}]);X(this,Lu).add(o)}handleCancel(e){let{dragOperation:t}=this.manager;t.status.initialized&&this.manager.actions.stop({event:e,canceled:!0}),this.cleanup()}cleanup(){let{controller:e}=this;this.controller=void 0,e&&!e.signal.aborted&&e.abort(),this.latest={event:void 0,coordinates:void 0},X(this,Lu).forEach(e=>e()),X(this,Lu).clear()}destroy(){this.cleanup(),this.listeners.clear()}};Lu=new WeakMap,Ru.configure=di(Ru),Ru.defaults=Iu;var zu=Ru;function Bu(e){return`sensor`in e}function Vu(e){e.preventDefault()}function Hu(){}var Uu=new WeakSet;function Wu(e){!e||Uu.has(e)||(e.addEventListener(`touchmove`,Hu,{capture:!1,passive:!1}),Uu.add(e))}var Gu={modifiers:[],plugins:[Qc,vu,gl,Kl,Cu],sensors:[zu,Ou]},Ku=class extends to{constructor(e={}){let t=eo(e.plugins,Gu.plugins),n=eo(e.sensors,Gu.sensors),r=eo(e.modifiers,Gu.modifiers);super(kc(Oc({},e),{plugins:[xu,pu,hl,...t],sensors:n,modifiers:r}))}},qu,Ju,Yu,Xu,Zu,Qu,$u=class extends (Yu=Xi,Ju=[H],qu=[H],Yu){constructor(e,t){var n=e,{element:r,effects:i=()=>[],handle:a}=n,o=jc(n,[`element`,`effects`,`handle`]);super(Oc({effects:()=>[...i(),()=>{let{manager:e}=this;if(!e)return;let t=(this.sensors?.map(fi)??[...e.sensors]).map(t=>{let n=t instanceof Oa?t:e.registry.register(t.plugin),r=t instanceof Oa?void 0:t.options;return n.bind(this,r)});return function(){t.forEach(e=>e())}}]},o),t),Z(this,Zu,Lc(Xu,8,this)),Lc(Xu,11,this),Z(this,Qu,Lc(Xu,12,this)),Lc(Xu,15,this),this.element=r,this.handle=a}};Xu=Mc(Yu),Zu=new WeakMap,Qu=new WeakMap,Rc(Xu,4,`handle`,Ju,$u,Zu),Rc(Xu,4,`element`,qu,$u,Qu),Ic(Xu,$u);var ed,td,nd,rd,id,ad,od,sd,cd,ld,ud=class extends (nd=ua,td=[H],ed=[H],nd){constructor(e,t){var n=e,{element:r,effects:i=()=>[]}=n,a=jc(n,[`element`,`effects`]);let{collisionDetector:o=hc}=a,s=e=>{let{manager:t,element:n}=this;if(!n||e===null){this.shape=void 0;return}if(!t)return;let r=new nc(n),i=V(()=>this.shape);return r&&i?.equals(r)?i:(this.shape=r,r)},c=Wt(!1);super(kc(Oc({},a),{collisionDetector:o,effects:()=>[...i(),()=>{let{element:e,manager:t}=this;if(!t)return;let{dragOperation:n}=t,{source:r}=n;c.value=!!(r&&n.status.initialized&&e&&!this.disabled&&this.accepts(r))},()=>{let{element:e}=this;if(c.value&&e){let t=new gs(e,s);return()=>{t.disconnect(),this.shape=void 0}}},()=>{if(this.manager?.dragOperation.status.initialized)return()=>{this.shape=void 0}}]}),t),Z(this,cd),Z(this,id,Lc(rd,8,this)),Lc(rd,11,this),Z(this,ld,Lc(rd,12,this)),Lc(rd,15,this),this.element=r,this.refreshShape=()=>s()}set element(e){Vc(this,cd,e,sd)}get element(){return this.proxy??X(this,cd,od)}};rd=Mc(nd),id=new WeakMap,cd=new WeakSet,ld=new WeakMap,ad=Rc(rd,20,`#element`,td,cd,id),od=ad.get,sd=ad.set,Rc(rd,4,`proxy`,ed,ud,ld),Ic(rd,ud);var dd=t(o(),1);function fd(e){return typeof e==`object`&&!!e&&`current`in e}function pd(e){if(e!=null)return fd(e)?e.current??void 0:e}var md=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0?L.useLayoutEffect:L.useEffect;function hd(){let e=(0,L.useState)(0)[1];return(0,L.useCallback)(()=>{e(e=>e+1)},[e])}function gd(e,t){let n=(0,L.useRef)(new Map),r=hd();return md(()=>{if(!e){n.current.clear();return}return en(()=>{let i=!1,a=!1;for(let r of n.current){let[o]=r,s=V(()=>r[1]),c=e[o];s!==c&&(i=!0,n.current.set(o,c),a=t?.(o,s,c)??!1)}i&&(a?queueMicrotask(()=>(0,dd.flushSync)(r)):r())})},[e]),(0,L.useMemo)(()=>e&&new Proxy(e,{get(e,t){let r=e[t];return n.current.set(t,r),r}}),[e])}function _d(e,t){e()}function vd(e){let t=(0,L.useRef)(e);return md(()=>{t.current=e},[e]),t}function Q(e,t,n=L.useEffect,r=Object.is){let i=(0,L.useRef)(e);n(()=>{let n=i.current;r(e,n)||(i.current=e,t(e,n))},[t,e])}function yd(e,t){let n=(0,L.useRef)(pd(e));md(()=>{let r=pd(e);r!==n.current&&(n.current=r,t(r))})}var bd=Object.defineProperty,xd=Object.defineProperties,Sd=Object.getOwnPropertyDescriptors,Cd=Object.getOwnPropertySymbols,wd=Object.prototype.hasOwnProperty,Td=Object.prototype.propertyIsEnumerable,Ed=(e,t,n)=>t in e?bd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dd=(e,t)=>{for(var n in t||={})wd.call(t,n)&&Ed(e,n,t[n]);if(Cd)for(var n of Cd(t))Td.call(t,n)&&Ed(e,n,t[n]);return e},Od=(e,t)=>xd(e,Sd(t)),kd=(e,t)=>{var n={};for(var r in e)wd.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Cd)for(var r of Cd(e))t.indexOf(r)<0&&Td.call(e,r)&&(n[r]=e[r]);return n},Ad=new Ku,jd=(0,L.createContext)(Ad),Md=(0,L.memo)((0,L.forwardRef)(({children:e},t)=>{let[n,r]=(0,L.useState)(0),i=(0,L.useRef)(null),a=(0,L.useRef)(null),o=(0,L.useMemo)(()=>({renderer:{get rendering(){return i.current??Promise.resolve()}},trackRendering(e){i.current||=new Promise(e=>{a.current=e}),(0,L.startTransition)(()=>{e(),r(e=>e+1)})}}),[]);return md(()=>{var e;(e=a.current)==null||e.call(a),i.current=null},[e,n]),(0,L.useImperativeHandle)(t,()=>o),null})),Nd=[void 0,An];function Pd(e){var t=e,{children:n,onCollision:r,onBeforeDragStart:i,onDragStart:a,onDragMove:o,onDragOver:s,onDragEnd:c}=t,l=kd(t,[`children`,`onCollision`,`onBeforeDragStart`,`onDragStart`,`onDragMove`,`onDragOver`,`onDragEnd`]);let u=(0,L.useRef)(null),{plugins:d,modifiers:f,sensors:p}=l,m=eo(d,Gu.plugins),h=eo(p,Gu.sensors),g=eo(f,Gu.modifiers),_=vd(i),v=vd(a),y=vd(s),b=vd(o),x=vd(c),S=vd(r),C=Fd(()=>l.manager??new Ku(l));return(0,L.useEffect)(()=>{if(!u.current)throw Error(`Renderer not found`);let{renderer:e,trackRendering:t}=u.current,{monitor:n}=C;C.renderer=e;let r=[n.addEventListener(`beforedragstart`,e=>{let n=_.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragstart`,e=>v.current?.call(v,e,C)),n.addEventListener(`dragover`,e=>{let n=y.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragmove`,e=>{let n=b.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragend`,e=>{let n=x.current;n&&t(()=>n(e,C))}),n.addEventListener(`collision`,e=>S.current?.call(S,e,C))];return()=>r.forEach(e=>e())},[C]),Q(m,()=>C&&(C.plugins=m),...Nd),Q(h,()=>C&&(C.sensors=h),...Nd),Q(g,()=>C&&(C.modifiers=g),...Nd),(0,R.jsxs)(jd.Provider,{value:C,children:[(0,R.jsx)(Md,{ref:u,children:n}),n]})}function Fd(e){let t=(0,L.useRef)(null);return t.current||=e(),(0,L.useInsertionEffect)(()=>()=>t.current?.destroy(),[]),t.current}function Id(){return(0,L.useContext)(jd)}function Ld(e){let t=Id()??void 0,[n]=(0,L.useState)(()=>e(t));return n.manager!==t&&(n.manager=t),md(n.register,[t,n]),n}function Rd(e){let{disabled:t,data:n,element:r,handle:i,id:a,modifiers:o,sensors:s,plugins:c}=e,l=Ld(t=>new $u(Od(Dd({},e),{register:!1,handle:pd(i),element:pd(r)}),t)),u=gd(l,zd);return Q(a,()=>l.id=a),yd(i,e=>l.handle=e),yd(r,e=>l.element=e),Q(n,()=>n&&(l.data=n)),Q(t,()=>l.disabled=t===!0),Q(s,()=>l.sensors=s),Q(o,()=>l.modifiers=o,void 0,An),Q(c,()=>l.plugins=c,void 0,An),Q(e.alignment,()=>l.alignment=e.alignment),{draggable:u,get isDragging(){return u.isDragging},get isDropping(){return u.isDropping},get isDragSource(){return u.isDragSource},handleRef:(0,L.useCallback)(e=>{l.handle=e??void 0},[l]),ref:(0,L.useCallback)(e=>{!e&&l.element?.isConnected&&!l.manager?.dragOperation.status.idle||(l.element=e??void 0)},[l])}}function zd(e,t,n){return!!(e===`isDragSource`&&!n&&t)}var Bd=Object.create,Vd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,Ud=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Wd=e=>{throw TypeError(e)},Gd=(e,t,n)=>t in e?Vd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kd=e=>[,,,Bd(e?.[Ud(`metadata`)]??null)],qd=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Jd=e=>e!==void 0&&typeof e!=`function`?Wd(`Function expected`):e,Yd=(e,t,n,r,i)=>({kind:qd[e],name:t,metadata:r,addInitializer:e=>n._?Wd(`Already initialized`):i.push(Jd(e||null))}),Xd=(e,t)=>Gd(t,Ud(`metadata`),e[3]),Zd=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)a[i].call(n);return r},Qd=(e,t,n,r,i,a)=>{for(var o,s,c,l,u=t&7,d=!1,f=!1,p=2,m=qd[u+5],h=e[p]||(e[p]=[]),g=(i=i.prototype,Hd(i,n)),_=r.length-1;_>=0;_--)c=Yd(u,n,s={},e[3],h),c.static=d,c.private=f,l=c.access={has:e=>n in e},l.get=e=>e[n],o=(0,r[_])(g[m],c),s._=1,Jd(o)&&(g[m]=o);return g&&Vd(i,n,g),i},$d=(e,t,n)=>t.has(e)||Wd(`Cannot `+n),ef=(e,t,n)=>($d(e,t,`read from private field`),t.get(e)),tf=(e,t,n)=>t.has(e)?Wd(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),nf=(e,t,n,r)=>($d(e,t,`write to private field`),t.set(e,n),n),rf=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,n){return new e(t.x-n.x,t.y-n.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:n}){return new e(t,n)}},af,of,sf,cf,lf,uf=class extends (sf=$n,of=[U],af=[U],sf){constructor(e){let t=rf.from(e);super(t,(e,t)=>rf.equals(e,t)),Zd(lf,5,this),tf(this,cf,0),this.velocity={x:0,y:0}}get delta(){return rf.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let n={x:e.x-t.x,y:e.y-t.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?`right`:`left`:n.y>0?`down`:`up`}get current(){return super.current}set current(e){let{current:t}=this,n=rf.from(e),r={x:n.x-t.x,y:n.y-t.y},i=Date.now(),a=i-ef(this,cf),o=e=>Math.round(e/a*100);z(()=>{nf(this,cf,i),this.velocity={x:o(r.x),y:o(r.y)},super.current=n})}reset(e=this.defaultValue){super.reset(rf.from(e)),this.velocity={x:0,y:0}}};lf=Kd(sf),cf=new WeakMap,Qd(lf,2,`delta`,of,uf),Qd(lf,2,`direction`,af,uf),Xd(lf,uf);var df=(e=>(e.Horizontal=`x`,e.Vertical=`y`,e))(df||{});Object.values(df);var ff=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/rf.distance(t.shape.center,n),type:ga.PointerIntersection,priority:ha.High}:null},pf=({dragOperation:e,droppable:t})=>{let{shape:n}=e;if(!t.shape||!n?.current)return null;let r=n.current.intersectionArea(t.shape);if(r){let{position:i}=e,a=rf.distance(t.shape.center,i.current),o=r/(n.current.area+t.shape.area-r)/a;return{id:t.id,value:o,type:ga.ShapeIntersection,priority:ha.Normal}}return null},mf=e=>ff(e)??pf(e);function hf(e){let{collisionDetector:t,data:n,disabled:r,element:i,id:a,accept:o,type:s}=e,c=Ld(t=>new ud(Od(Dd({},e),{register:!1,element:pd(i)}),t)),l=gd(c);return Q(a,()=>c.id=a),yd(i,e=>c.element=e),Q(o,()=>c.accept=o,void 0,An),Q(t,()=>c.collisionDetector=t??mf),Q(n,()=>n&&(c.data=n)),Q(r,()=>c.disabled=r===!0),Q(s,()=>c.type=s),{droppable:l,get isDropTarget(){return l.isDropTarget},ref:(0,L.useCallback)(e=>{!e&&c.element?.isConnected&&!c.manager?.dragOperation.status.idle||(c.element=e??void 0)},[c])}}var gf=Object.create,_f=Object.defineProperty,vf=Object.defineProperties,yf=Object.getOwnPropertyDescriptor,bf=Object.getOwnPropertyDescriptors,xf=Object.getOwnPropertySymbols,Sf=Object.prototype.hasOwnProperty,Cf=Object.prototype.propertyIsEnumerable,wf=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Tf=e=>{throw TypeError(e)},Ef=(e,t,n)=>t in e?_f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Df=(e,t)=>{for(var n in t||={})Sf.call(t,n)&&Ef(e,n,t[n]);if(xf)for(var n of xf(t))Cf.call(t,n)&&Ef(e,n,t[n]);return e},Of=(e,t)=>vf(e,bf(t)),kf=(e,t)=>{var n={};for(var r in e)Sf.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&xf)for(var r of xf(e))t.indexOf(r)<0&&Cf.call(e,r)&&(n[r]=e[r]);return n},Af=e=>[,,,gf(null)],jf=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Mf=e=>e!==void 0&&typeof e!=`function`?Tf(`Function expected`):e,Nf=(e,t,n,r,i)=>({kind:jf[e],name:t,metadata:r,addInitializer:e=>n._?Tf(`Already initialized`):i.push(Mf(e||null))}),Pf=(e,t)=>Ef(t,wf(`metadata`),e[3]),Ff=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},If=(e,t,n,r,i,a)=>{for(var o,s,c,l,u,d=t&7,f=!1,p=!1,m=e.length+1,h=jf[d+5],g=e[m-1]=[],_=e[m]||(e[m]=[]),v=(i=i.prototype,yf({get[n](){return Rf(this,a)},set[n](e){return Bf(this,a,e)}},n)),y=r.length-1;y>=0;y--)l=Nf(d,n,c={},e[3],_),l.static=f,l.private=p,u=l.access={has:e=>n in e},u.get=e=>e[n],u.set=(e,t)=>e[n]=t,s=(0,r[y])({get:v.get,set:v.set},l),c._=1,s===void 0?Mf(s)&&(v[h]=s):typeof s!=`object`||!s?Tf(`Object expected`):(Mf(o=s.get)&&(v.get=o),Mf(o=s.set)&&(v.set=o),Mf(o=s.init)&&g.unshift(o));return v&&_f(i,n,v),i},Lf=(e,t,n)=>t.has(e)||Tf(`Cannot `+n),Rf=(e,t,n)=>(Lf(e,t,`read from private field`),t.get(e)),zf=(e,t,n)=>t.has(e)?Tf(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Bf=(e,t,n,r)=>(Lf(e,t,`write to private field`),t.set(e,n),n);function Vf(e){return e instanceof Sp||e instanceof xp}var Hf=10,Uf=class extends _i{constructor(e){super(e);let t=en(()=>{let{dragOperation:t}=e;if(sc(t.activatorEvent)&&Vf(t.source)&&t.status.initialized){let t=e.registry.plugins.get(pu);if(t)return t.disable(),()=>t.enable()}}),n=e.monitor.addEventListener(`dragmove`,(e,t)=>{queueMicrotask(()=>{if(this.disabled||e.defaultPrevented||!e.nativeEvent)return;let{dragOperation:n}=t;if(!sc(e.nativeEvent)||!Vf(n.source)||!n.shape)return;let{actions:r,collisionObserver:i,registry:a}=t,{by:o}=e;if(!o)return;let s=Wf(o),{source:c,target:l}=n,{center:u}=n.shape.current,d=[],f=[];z(()=>{for(let e of a.droppables){let{id:t}=e;if(!e.accepts(c)||t===l?.id&&Vf(e)||!e.element)continue;let n=e.shape,r=new nc(e.element,{getBoundingClientRect:e=>xo(e,void 0,.2)});!r.height||!r.width||(s==`down`&&u.y+Hf<r.center.y||s==`up`&&u.y-Hf>r.center.y||s==`left`&&u.x-Hf>r.center.x||s==`right`&&u.x+Hf<r.center.x)&&(d.push(e),e.shape=r,f.push(()=>e.shape=n))}}),e.preventDefault(),i.disable();let p=i.computeCollisions(d,gc);z(()=>f.forEach(e=>e()));let[m]=p;if(!m)return;let{id:h}=m,{index:g,group:_}=c.sortable;r.setDropTarget(h).then(()=>{let{source:e,target:t,shape:a}=n;if(!e||!Vf(e)||!a)return;let{index:o,group:s,target:c}=e.sortable,l=g!==o||_!==s,u=l?c:t?.element;if(!u)return;Ws(u);let d=new nc(u);if(!d)return;let f=kr.delta(d,kr.from(a.current.boundingRectangle),e.alignment);r.move({by:f}),l?r.setDropTarget(e.id).then(()=>i.enable()):i.enable()})})});this.destroy=()=>{n(),t()}}};function Wf(e){let{x:t,y:n}=e;if(t>0)return`right`;if(t<0)return`left`;if(n>0)return`down`;if(n<0)return`up`}var Gf=Object.defineProperty,Kf=Object.defineProperties,qf=Object.getOwnPropertyDescriptors,Jf=Object.getOwnPropertySymbols,Yf=Object.prototype.hasOwnProperty,Xf=Object.prototype.propertyIsEnumerable,Zf=(e,t,n)=>t in e?Gf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qf=(e,t)=>{for(var n in t||={})Yf.call(t,n)&&Zf(e,n,t[n]);if(Jf)for(var n of Jf(t))Xf.call(t,n)&&Zf(e,n,t[n]);return e},$f=(e,t)=>Kf(e,qf(t));function ep(e,t,n){if(t===n)return e;let r=e.slice();return r.splice(n,0,r.splice(t,1)[0]),r}function tp(e){return`initialIndex`in e&&typeof e.initialIndex==`number`&&`index`in e&&typeof e.index==`number`}function np(e,t,n){let{source:r,target:i,canceled:a}=t.operation;if(!r||!i||a)return`preventDefault`in t&&t.preventDefault(),e;let o=(e,t)=>e===t||typeof e==`object`&&`id`in e&&e.id===t;if(Array.isArray(e)){let s=e.findIndex(e=>o(e,r.id)),c=e.findIndex(e=>o(e,i.id));if(s===-1||c===-1){if(tp(r)){let i=r.initialIndex,a=r.index;return i===a||i<0||i>=e.length?(`preventDefault`in t&&t.preventDefault(),e):n(e,i,a)}return e}if(!a&&`index`in r&&typeof r.index==`number`){let t=r.index;if(t!==s)return n(e,s,t)}return n(e,s,c)}let s=Object.entries(e),c=-1,l,u=-1,d;for(let[e,t]of s)if(c===-1&&(c=t.findIndex(e=>o(e,r.id)),c!==-1&&(l=e)),u===-1&&(u=t.findIndex(e=>o(e,i.id)),u!==-1&&(d=e)),c!==-1&&u!==-1)break;if(c===-1&&tp(r)){let i=r.initialGroup,a=r.initialIndex,o=r.group,s=r.index;if(i==null||o==null||!(i in e)||!(o in e)||i===o&&a===s)return`preventDefault`in t&&t.preventDefault(),e;if(i===o)return $f(Qf({},e),{[i]:n(e[i],a,s)});let c=e[i][a];return $f(Qf({},e),{[i]:[...e[i].slice(0,a),...e[i].slice(a+1)],[o]:[...e[o].slice(0,s),c,...e[o].slice(s)]})}if(!r.manager)return e;let{dragOperation:f}=r.manager,p=f.shape?.current.center??f.position.current;if(d==null&&i.id in e){let t=i.shape&&p.y>i.shape.center.y?e[i.id].length:0;d=i.id,u=t}if(l==null||d==null||l===d&&c===u){if(l!=null&&l===d&&c===u&&tp(r)){let t=r.group!=null&&r.group!==l,i=r.index!==c;if(t||i){let t=r.group??l;if(t in e){if(l===t)return $f(Qf({},e),{[l]:n(e[l],c,r.index)});let i=e[l][c];return $f(Qf({},e),{[l]:[...e[l].slice(0,c),...e[l].slice(c+1)],[t]:[...e[t].slice(0,r.index),i,...e[t].slice(r.index)]})}}}return`preventDefault`in t&&t.preventDefault(),e}if(l===d)return $f(Qf({},e),{[l]:n(e[l],c,u)});let m=i.shape&&Math.round(p.y)>Math.round(i.shape.center.y)?1:0,h=e[l][c];return $f(Qf({},e),{[l]:[...e[l].slice(0,c),...e[l].slice(c+1)],[d]:[...e[d].slice(0,u+m),h,...e[d].slice(u+m)]})}function rp(e,t){return np(e,t,ep)}var ip=`__default__`,ap=class extends _i{constructor(e){super(e);let t=()=>{let t=new Map;for(let n of e.registry.droppables)if(n instanceof Sp){let{sortable:e}=n,{group:r}=e,i=t.get(r);i||(i=new Set,t.set(r,i)),i.add(e)}for(let[e,n]of t)t.set(e,new Set(cp(n)));return t},n=[e.monitor.addEventListener(`dragover`,(e,n)=>{if(this.disabled)return;let{dragOperation:r}=n,{source:i,target:a}=r;if(!Vf(i)||!Vf(a)||i.sortable===a.sortable)return;let o=t(),s=i.sortable.group===a.sortable.group,c=o.get(i.sortable.group),l=s?c:o.get(a.sortable.group);!c||!l||queueMicrotask(()=>{e.defaultPrevented||n.renderer.rendering.then(()=>{let r=t();for(let[e,t]of o.entries()){let n=Array.from(t).entries();for(let[t,i]of n)if(i.index!==t||i.group!==e||!r.get(e)?.has(i))return}let u=i.sortable.element,d=a.sortable.element;if(!d||!u||!s&&a.id===i.sortable.group)return;let f=cp(c),p=s?f:cp(l),m=i.sortable.group??ip,h=a.sortable.group??ip,g={[m]:f,[h]:p},_=rp(g,e);if(g===_)return;let v=_[h].indexOf(i.sortable),y=_[h].indexOf(a.sortable);n.collisionObserver.disable(),op(u,v,d,y),z(()=>{for(let[e,t]of _[m].entries())t.index=e;if(!s)for(let[e,t]of _[h].entries())t.group=a.sortable.group,t.index=e}),n.actions.setDropTarget(i.id).then(()=>n.collisionObserver.enable())})})}),e.monitor.addEventListener(`dragend`,(e,n)=>{if(!e.canceled)return;let{dragOperation:r}=n,{source:i}=r;Vf(i)&&(i.sortable.initialIndex!==i.sortable.index||i.sortable.initialGroup!==i.sortable.group)&&queueMicrotask(()=>{let e=t(),r=e.get(i.sortable.initialGroup);r&&n.renderer.rendering.then(()=>{for(let[t,n]of e.entries()){let e=Array.from(n).entries();for(let[n,r]of e)if(r.index!==n||r.group!==t)return}let t=cp(r),n=i.sortable.element,a=t[i.sortable.initialIndex],o=a?.element;!a||!o||!n||(op(n,a.index,o,i.index),z(()=>{for(let[t,n]of e.entries()){let e=Array.from(n).values();for(let t of e)t.index=t.initialIndex,t.group=t.initialGroup}}))})})})];this.destroy=()=>{for(let e of n)e()}}};function op(e,t,n,r){let i=r<t?`afterend`:`beforebegin`;n.insertAdjacentElement(i,e)}function sp(e,t){return e.index-t.index}function cp(e){return Array.from(e).sort(sp)}var lp=[Uf,ap],up={duration:250,easing:`cubic-bezier(0.25, 1, 0.5, 1)`,idle:!1},dp=new nr,fp,pp=[H],mp,hp,gp,_p,vp,yp;fp=[H];var bp=class{constructor(e,t){zf(this,hp,Ff(mp,8,this)),Ff(mp,11,this),zf(this,gp),zf(this,_p),zf(this,vp,Ff(mp,12,this)),Ff(mp,15,this),zf(this,yp),this.register=()=>(z(()=>{var e,t;(e=this.manager)==null||e.registry.register(this.droppable),(t=this.manager)==null||t.registry.register(this.draggable)}),()=>this.unregister()),this.unregister=()=>{z(()=>{var e,t;(e=this.manager)==null||e.registry.unregister(this.droppable),(t=this.manager)==null||t.registry.unregister(this.draggable)})},this.destroy=()=>{z(()=>{this.droppable.destroy(),this.draggable.destroy()})};var n=e,{effects:r=()=>[],group:i,index:a,sensors:o,type:s,transition:c=up,plugins:l}=n,u=kf(n,[`effects`,`group`,`index`,`sensors`,`type`,`transition`,`plugins`]);let d=eo(l,lp);this.droppable=new Sp(u,t,this),this.draggable=new xp(Of(Df({},u),{plugins:d,effects:()=>[()=>{let e=this.manager?.dragOperation.status;e?.initializing&&this.id===this.manager?.dragOperation.source?.id&&dp.clear(this.manager),e?.dragging&&dp.set(this.manager,this.id,V(()=>({initialIndex:this.index,initialGroup:this.group})))},()=>{let{index:e,group:t,manager:n}=this,r=Rf(this,_p),i=Rf(this,gp);(e!==r||t!==i)&&(Bf(this,_p,e),Bf(this,gp,t),this.animate())},()=>{let{target:e}=this,{isDragSource:t}=this.draggable;(this.draggable.pluginConfig(Kl)?.feedback??`default`)===`move`&&t&&(this.droppable.disabled=!e)},...r()],type:s,sensors:o}),t,this),Bf(this,yp,u.element),this.manager=t,this.index=a,Bf(this,_p,a),this.group=i,Bf(this,gp,i),this.type=s,this.transition=c}get initialIndex(){return dp.get(this.manager,this.id)?.initialIndex??this.index}get initialGroup(){return dp.get(this.manager,this.id)?.initialGroup??this.group}animate(){V(()=>{let{manager:e,transition:t}=this,{shape:n}=this.droppable;if(!e)return;let{idle:r}=e.dragOperation.status;!n||!t||r&&!t.idle||e.renderer.rendering.then(()=>{let{element:r}=this;if(!r)return;for(let e of r.getAnimations())`transitionProperty`in e&&(e.transitionProperty===`transform`||e.transitionProperty===`translate`||e.transitionProperty===`scale`)&&e.cancel();let i=this.refreshShape();if(!i)return;let a={x:n.boundingRectangle.left-i.boundingRectangle.left,y:n.boundingRectangle.top-i.boundingRectangle.top},{translate:o}=Os(r),s=Xs(r,o,!1),c=Xs(r,o);if(a.x||a.y){let n=ko(po(r))?Of(Df({},t),{duration:0}):t;Ys({element:r,keyframes:{translate:[`${s.x+a.x}px ${s.y+a.y}px ${s.z}`,`${c.x}px ${c.y}px ${c.z}`]},options:n}).then(()=>{e.dragOperation.status.dragging||(this.droppable.shape=void 0)})}})})}get manager(){return this.draggable.manager}set manager(e){z(()=>{this.draggable.manager=e,this.droppable.manager=e})}set element(e){z(()=>{let t=Rf(this,yp),n=this.droppable.element,r=this.draggable.element;(!n||n===t)&&(this.droppable.element=e),(!r||r===t)&&(this.draggable.element=e),Bf(this,yp,e)})}get element(){let e=Rf(this,yp);if(e)return Fo.get(e)??e??this.droppable.element}set target(e){this.droppable.element=e}get target(){return this.droppable.element}set source(e){this.draggable.element=e}get source(){return this.draggable.element}get disabled(){return this.draggable.disabled&&this.droppable.disabled}set plugins(e){this.draggable.plugins=eo(e,lp)}set disabled(e){z(()=>{this.droppable.disabled=e,this.draggable.disabled=e})}set data(e){z(()=>{this.droppable.data=e,this.draggable.data=e})}set handle(e){this.draggable.handle=e}set id(e){this.droppable.id=e,this.draggable.id=e}get id(){return this.droppable.id}set sensors(e){this.draggable.sensors=e}set modifiers(e){this.draggable.modifiers=e}set collisionPriority(e){this.droppable.collisionPriority=e}set collisionDetector(e){this.droppable.collisionDetector=e??hc}set alignment(e){this.draggable.alignment=e}get alignment(){return this.draggable.alignment}set type(e){z(()=>{this.droppable.type=e,this.draggable.type=e})}get type(){return this.draggable.type}set accept(e){this.droppable.accept=e}get accept(){return this.droppable.accept}get isDropTarget(){return this.droppable.isDropTarget}get isDragSource(){return this.draggable.isDragSource}get isDragging(){return this.draggable.isDragging}get isDropping(){return this.draggable.isDropping}get status(){return this.draggable.status}refreshShape(){return this.droppable.refreshShape()}accepts(e){return this.droppable.accepts(e)}};mp=Af(),hp=new WeakMap,gp=new WeakMap,_p=new WeakMap,vp=new WeakMap,yp=new WeakMap,If(mp,4,`index`,pp,bp,hp),If(mp,4,`group`,fp,bp,vp),Pf(mp,bp);var xp=class extends $u{constructor(e,t,n){super(e,t),this.sortable=n}get index(){return this.sortable.index}get initialIndex(){return this.sortable.initialIndex}get group(){return this.sortable.group}get initialGroup(){return this.sortable.initialGroup}},Sp=class extends ud{constructor(e,t,n){super(e,t),this.sortable=n}get index(){return this.sortable.index}get group(){return this.sortable.group}},Cp=Object.defineProperty,wp=Object.defineProperties,Tp=Object.getOwnPropertyDescriptors,Ep=Object.getOwnPropertySymbols,Dp=Object.prototype.hasOwnProperty,Op=Object.prototype.propertyIsEnumerable,kp=(e,t,n)=>t in e?Cp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ap=(e,t)=>{for(var n in t||={})Dp.call(t,n)&&kp(e,n,t[n]);if(Ep)for(var n of Ep(t))Op.call(t,n)&&kp(e,n,t[n]);return e},jp=(e,t)=>wp(e,Tp(t));function Mp(e){let{accept:t,collisionDetector:n,collisionPriority:r,id:i,data:a,element:o,handle:s,index:c,group:l,disabled:u,modifiers:d,sensors:f,target:p,type:m,plugins:h}=e,g=Ap(Ap({},up),e.transition),_=Ld(t=>new bp(jp(Ap({},e),{transition:g,register:!1,handle:pd(s),element:pd(o),target:pd(p)}),t)),v=gd(_,Np);return Q(i,()=>_.id=i),md(()=>{z(()=>{_.group=l,_.index=c})},[_,l,c]),Q(m,()=>_.type=m),Q(t,()=>_.accept=t,void 0,An),Q(a,()=>a&&(_.data=a)),Q(c,()=>{_.manager?.dragOperation.status.idle&&g?.idle&&_.refreshShape()},_d),yd(s,e=>_.handle=e),yd(o,e=>_.element=e),yd(p,e=>_.target=e),Q(u,()=>_.disabled=u===!0),Q(f,()=>_.sensors=f),Q(n,()=>_.collisionDetector=n),Q(r,()=>_.collisionPriority=r),Q(h,()=>_.plugins=h,void 0,An),Q(g,()=>_.transition=g,void 0,An),Q(d,()=>_.modifiers=d,void 0,An),Q(e.alignment,()=>_.alignment=e.alignment),{sortable:v,get isDragging(){return v.isDragging},get isDropping(){return v.isDropping},get isDragSource(){return v.isDragSource},get isDropTarget(){return v.isDropTarget},handleRef:(0,L.useCallback)(e=>{_.handle=e??void 0},[_]),ref:(0,L.useCallback)(e=>{!e&&_.element?.isConnected&&!_.manager?.dragOperation.status.idle||(_.element=e??void 0)},[_]),sourceRef:(0,L.useCallback)(e=>{!e&&_.source?.isConnected&&!_.manager?.dragOperation.status.idle||(_.source=e??void 0)},[_]),targetRef:(0,L.useCallback)(e=>{!e&&_.target?.isConnected&&!_.manager?.dragOperation.status.idle||(_.target=e??void 0)},[_])}}function Np(e,t,n){return!!(e===`isDragSource`&&!n&&t)}function Pp(e){return typeof e==`object`?e.key:e}function Fp(e,t){let n=e.length;return new Proxy(e,{get(e,r,i){if(typeof r==`string`){let i=r.charCodeAt(0);if(i>=48&&i<=57){let i=+r;if(Number.isInteger(i)&&i>=0&&i<n){let n=e[i];if(typeof n!=`object`){let r=t[i*2];n=e[i]={index:i,key:n,start:r,size:t[i*2+1],end:r+t[i*2+1],lane:0}}return n}}if(r===`length`)return n}return Reflect.get(e,r,i)}})}function Ip(e,t,n){let r=n.initialDeps??[],i,a=!0;function o(){let o=e();return o.length!==r.length||o.some((e,t)=>r[t]!==e)?(r=o,i=t(...o),n?.onChange&&!(a&&n.skipInitialOnChange)&&n.onChange(i),a=!1,i):i}return o.updateDeps=e=>{r=e},o}function Lp(e,t){if(e===void 0)throw Error(`Unexpected undefined${t?`: ${t}`:``}`);return e}var Rp=(e,t)=>Math.abs(e-t)<1.01,zp=(e,t,n)=>{let r;return Object.assign(function(...i){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,i),n)},{cancel:()=>{e.clearTimeout(r)}})};function Bp({offset:e,isScrolling:t,elementMax:n,holdOffset:r,scrollOffset:i,pendingWrite:a,clampedMaxAtWrite:o}){return t&&a===null&&e===i?`spurious`:a!==null&&Math.abs(e-a.target)<1.5?`readBack`:a!==null&&!a.smooth&&n!==null&&a.target>n+r+.5&&Math.abs(e-(n+r))<1.5||a!==null&&!a.smooth&&a.lowMaxes?.some(t=>Math.abs(e-t)<1.5)?`clampedReadBack`:o!==null&&Math.abs(e-o)<1.5?`clampedEcho`:`external`}var Vp=e=>e===`smooth`||e===`smoothFinishing`;function Hp({kind:e,offset:t,command:n,target:r}){return e!==`spurious`&&e!==`readBack`&&e!==`clampedReadBack`&&n?.index!=null&&n.phase!==`queued`&&!Vp(n.phase)&&!Rp(t,n.lastTargetOffset)&&!Rp(t,r())&&e!==`clampedEcho`}var Up=40;function Wp(e){let t=e[e.length-1];if(t===void 0)return!1;let n=e.length-2;for(;n>=0&&t.t-e[n].t<Up;)n--;if(n<0)return!1;let r=e[n],i=n-1;for(;i>=0&&r.t-e[i].t<Up;)i--;if(i<0)return!1;let a=e[i],o=(t.offset-r.offset)/(t.t-r.t),s=(r.offset-a.offset)/(r.t-a.t);return o*s>=0&&Math.abs(o)>=2*Math.abs(s)&&Math.abs(o)-Math.abs(s)>=.8}function Gp(e){let t=e[e.length-1];if(t===void 0)return!1;let n=e.length-2;for(;n>=0&&t.t-e[n].t<Up;)n--;if(n<0)return!1;let r=e[n];return Math.abs(t.offset-r.offset)/(t.t-r.t)>=.05}var Kp,qp=()=>{if(Kp!==void 0)return Kp;if(typeof navigator>`u`)return Kp=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return Kp=!0;let e=navigator.maxTouchPoints;return Kp=navigator.platform===`MacIntel`&&e!==void 0&&e>0},Jp,Yp=()=>Jp===void 0?Jp=qp()&&typeof CSS<`u`&&typeof CSS.supports==`function`&&CSS.supports(`overflow-anchor: auto`):Jp,Xp=()=>!qp()||Yp(),Zp={capture:!0,passive:!0},Qp=class{constructor(e){this.host=e,this._touch=null,this.inMotion=()=>this._touch!==null&&this._touch.phase!==`lateFling`,this.dragging=()=>this._touch?.phase===`down`&&this._touch.moved,this.tail=()=>this._touch?.phase===`tail`?this._touch.moved?`fling`:`tap`:null,this.onScroll=({isScrolling:e,ownReadBack:t,moved:n,external:r})=>(e&&this._touch?.phase===`tail`?this._openTail(this._touch.moved||!t,!1):this._touch?.phase===`lateFling`&&(this.host.now()>this._touch.until?this._touch=null:r&&e&&n&&this._openTail(!0,!1)),!t&&e&&n&&this._touch?.phase===`down`?(this._touch.moved=!0,!0):!1),this.touchStart=()=>{this.end(),this._touch={phase:`down`,moved:!1}},this.touchEnd=()=>{let e=this._touch?.phase===`down`&&this._touch.moved;this.end(),this._openTail(e,e)},this.end=()=>{let e=this.host.getWindow();this._touch?.phase===`tail`&&e!=null&&e.clearTimeout(this._touch.timerId),this._touch=null},this.listen=e=>{let t=()=>this.touchStart(),n=()=>this.touchEnd();return e.addEventListener(`touchstart`,t,Zp),e.addEventListener(`touchend`,n,Zp),e.addEventListener(`touchcancel`,n,Zp),()=>{e.removeEventListener(`touchstart`,t,Zp),e.removeEventListener(`touchend`,n,Zp),e.removeEventListener(`touchcancel`,n,Zp),this.end()}},this._openTail=(e,t)=>{let n=this.host.getWindow();if(n==null)return;this.end();let r={phase:`tail`,moved:e,awaitingFling:t,timerId:n.setTimeout(()=>{if(this.host.tailStillMoving()){this._openTail(r.moved,r.awaitingFling);return}this._touch=r.awaitingFling?{phase:`lateFling`,until:this.host.now()+1e3}:null,this.host.onTailClosed()},150)};this._touch=r}}get touch(){return this._touch}},$p=e=>{let{clientWidth:t,clientHeight:n}=e;return{width:t,height:n}},em=e=>{let t=new Set;return{schedule:n=>{let r=e.requestAnimationFrame(()=>{t.delete(r),n()});t.add(r)},cancel:()=>{t.forEach(t=>e.cancelAnimationFrame(t)),t.clear()}}},tm=e=>e,nm=e=>{let t=e.overscan*Math.max(e.lanes??1,1),n=Math.max(e.startIndex-t,0),r=Math.min(e.endIndex+t,e.count-1)-n+1,i=Array(r);for(let e=0;e<r;e++)i[e]=n+e;return i},rm=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i($p(n)),!r.ResizeObserver)return()=>{};let a=em(r),o=new r.ResizeObserver(()=>{let t=()=>{i($p(n))};e.options.useAnimationFrameWithResizeObserver?a.schedule(t):t()});return o.observe(n,{box:`content-box`}),()=>{o.unobserve(n),a.cancel()}},im={passive:!0},am=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=()=>{t({width:n.innerWidth,height:n.innerHeight})};return r(),n.addEventListener(`resize`,r,im),()=>{n.removeEventListener(`resize`,r)}},om=typeof window>`u`||`onscrollend`in window,sm=(e,t,n)=>{let r=e.scrollElement;if(!r)return;let i=e.targetWindow;if(!i)return;let a=e.options.useScrollendEvent&&om,o=0,s=a?null:zp(i,()=>t(n(r),!1),e.options.isScrollingResetDelay),c=e=>()=>{o=n(r),s?.(),t(o,e)},l=c(!0),u=c(!1);return r.addEventListener(`scroll`,l,im),a&&r.addEventListener(`scrollend`,u,im),()=>{r.removeEventListener(`scroll`,l),a&&r.removeEventListener(`scrollend`,u),s?.cancel()}},cm=(e,t)=>sm(e,t,t=>{let{horizontal:n,isRtl:r}=e.options;return n?t.scrollLeft*(r&&-1||1):t.scrollTop}),lm=(e,t)=>sm(e,t,t=>e.options.horizontal?t.scrollX:t.scrollY),um=(e,t,n)=>{if(n.options.useCachedMeasurements){let t=n.indexFromElement(e),r=n.options.getItemKey(t);return n.itemSizeCache.get(r)??n.options.estimateSize(t)}if(t?.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?`inlineSize`:`blockSize`])}if(!t){let t=n.indexFromElement(e),r=n.options.getItemKey(t),i=n.itemSizeCache.get(r);if(i!==void 0)return i}return e[n.options.horizontal?`offsetWidth`:`offsetHeight`]},dm=(e,{adjustments:t=0,behavior:n},r)=>{var i;let{scrollElement:a,options:o}=r,s=e+t,c=o.horizontal&&o.isRtl&&a!==null&&`ownerDocument`in a;(i=a?.scrollTo)==null||i.call(a,{[o.horizontal?`left`:`top`]:c?-s:s,behavior:n})},fm=dm,pm=dm,mm=(e,t)=>e===`smooth`?t?`smoothLanded`:`smooth`:`instant`,hm=e=>e?.phase===`smooth`||e?.phase===`smoothLanded`;function gm(e,t,n,r){if(t===0)return!1;let i=r(0),a=new Set,o=0;for(;o<e;){let e=n(o);if(e===i)break;a.add(e),o++}let s=e-o;if(s===0||s>=t)return!1;for(let e=0;e<s;e++)if(r(e)!==n(o+e))return!1;for(let e=s;e<t;e++)if(a.has(r(e)))return!1;return!0}var _m=class{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this._holdOffset=0,this._reportedOverscroll=!1,this._iosGesture=new Qp({getWindow:()=>this.targetWindow,now:()=>this.now(),tailStillMoving:()=>{let e=this.scrollState;if(e?.phase!==`queued`||this.pendingWrite!==null)return!1;let t=this._readElementOffset();return t===null||this._lastElementOffset===null||Math.abs(t-this._lastElementOffset)<1?!1:(this._lastElementOffset=t,e.samples=[...e.samples??[],{t:this.now(),offset:t}],!0)},onTailClosed:()=>{let e=this.scrollState;e?.phase===`queued`&&Gp(e.samples??[])&&(this.scrollState=null),this._flushHoldIfReady(!0),this._writeAwaitingCommand(),this._retryClampedAdjustment()}}),this._lastElementOffset=null,this.pendingWrite=null,this._clampedAdjustment=null,this.elementsCache=new Map,this._resizeBatch=null,this.now=()=>{var e;return((e=this.targetWindow?.performance)?.now)?.call(e)??Date.now()},this.observer=(()=>{let e=null,t=null,n=!1,r=!1,i=new Set,a=()=>{if(e)return e;let r=this.targetWindow;if(!r||!r.ResizeObserver)return null;let i=t=em(r);return e=new r.ResizeObserver(e=>{let t=()=>{let t={sync:!1};this._resizeBatch=t;try{e.forEach(o)}finally{this._resizeBatch=null,t.notify&&(this.notify(t.sync),this._noteClampMax(),this._flushHoldIfReady(!0),this._retryClampedAdjustment(),this.measureElement(null))}};if(this.options.useAnimationFrameWithResizeObserver)i.schedule(t);else{n=!0;try{t()}finally{n=!1}}})},o=e=>{let t=e.target,n=this.indexFromElement(t);if(!t.isConnected){this.observer.unobserve(t);for(let[e,n]of this.elementsCache)if(n===t){this.elementsCache.delete(e);break}return}this.isIndexInRange(n)&&this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this))};return{disconnect:()=>{var n;(n=a())==null||n.disconnect(),t?.cancel(),i.clear(),r=!1,e=null,t=null},observe:o=>{let s=a();if(s){if(!n){s.observe(o,{box:`border-box`});return}i.add(o),r||(r=!0,t?.schedule(()=>{r=!1,i.forEach(t=>{t.isConnected&&e?.observe(t,{box:`border-box`})}),i.clear()}))}},unobserve:e=>{var t;i.delete(e),(t=a())==null||t.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{let t={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:tm,rangeExtractor:nm,onChange:()=>{},measureElement:um,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:`data-index`,initialMeasurementsCache:[],lanes:1,anchorTo:`start`,followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:`estimate`,useCachedMeasurements:!1};for(let n in e){let r=e[n];r!==void 0&&(t[n]=r)}let n=this.options,r=null,i=null,a=!1;if(n!==void 0&&n.enabled&&t.enabled&&t.anchorTo===`end`&&this.scrollElement!==null){let e=n.count,o=t.count,s=this.getMeasurements(),c=this._singleLaneMeasurements?.items??s,l=e=>Pp(c[e]),u=e>0?l(0):null,d=e>0?l(e-1):null;if(o!==e||e>0&&o>0&&(t.getItemKey(0)!==u||t.getItemKey(o-1)!==d)){a=!0;let c=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??s[0]:null;c&&(r=[c.key,this.getScrollOffset()-c.start]);let u=t.followOnAppend===!0?`auto`:t.followOnAppend||null;u&&o>0&&this.isAtEnd(n.scrollEndThreshold)&&(e===0||t.getItemKey(o-1)!==d)&&(o>e||gm(e,o,l,t.getItemKey))&&(i=u)}}this.options=t,a&&(this.pendingMin=0,this.itemSizeCacheVersion++);let o=null;if(r&&this.scrollOffset!==null&&!this._awaitingCommandReadBack()){let[e,t]=r,n=this.getMeasurements(),{count:a,getItemKey:s}=this.options,c=0;for(;c<a&&s(c)!==e;)c++;if(c<a){let e=n[c];if(e){let n=Math.max(0,e.start+t);!i&&n!==this.scrollOffset&&(o=n-this.scrollOffset,this.scrollOffset=n)}}}i?this.pendingScrollAnchor={kind:`follow`,behavior:i}:o!==null&&(this._canWriteScroll()?this.pendingScrollAnchor={kind:`anchor`,delta:o}:(this._holdOffset+=o,this._followOffsetTarget(o)))},this.notify=e=>{var t,n;(n=(t=this.options).onChange)==null||n.call(t,this,e)},this.maybeNotify=Ip(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{var e;this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,(e=this._momentumStop)==null||e.restore(),this._momentumStop=null,this.isScrolling=!1,this.scrollDirection=null,this._holdOffset=0,this._reportedOverscroll=!1,this._clampedAdjustment=null,this.pendingWrite=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{let e=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==e){if(this.cleanup(),!e){this.maybeNotify();return}this.scrollElement=e,this.targetWindow=this.scrollElement&&`ownerDocument`in this.scrollElement?this.scrollElement.ownerDocument.defaultView:this.scrollElement?.window??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{let n=t?this._elementMaxScrollOffset():null,r=this._reportedOverscroll;this._reportedOverscroll=e<0||n!==null&&e>n+1;let i=e;this._lastElementOffset=i,e=this._toLayoutOffset(e);let a=this._classifyScrollEvent(e,t,n);if(a===`spurious`)return;a===`readBack`?e=this.pendingWrite.target:a===`clampedReadBack`&&this.scrollState?.index!=null&&e<this.getMaxScrollOffset()-1.5?this.scrollState.lastTargetOffset=e:Hp({kind:a,offset:e,command:this.scrollState,target:()=>this.getScrollStateTarget(this.scrollState)})&&(this.scrollState=null),this.pendingWrite=null,this._clampedAdjustment!==null&&Math.abs(e-this._clampedAdjustment.maxAtWrite)>=1.5&&(this._clampedAdjustment=null);let o=this.getScrollOffset(),s=this.scrollDirection;this.scrollDirection=t?o===e?this.scrollDirection:o<e?`forward`:`backward`:null,this.scrollOffset=e,this.isScrolling=t;let c=this.scrollState;if(c?.phase===`queued`&&a===`external`&&t)if(r||this._reportedOverscroll)c.samples=[];else{let e=this.now();c.samples=[...(c.samples??[]).filter(t=>e-t.t<=200),{t:e,offset:i}],(s!==null&&this.scrollDirection!==s||Wp(c.samples))&&(this.scrollState=null)}this._iosGesture.onScroll({isScrolling:t,ownReadBack:a===`readBack`,moved:e!==o,external:a===`external`&&this.scrollState?.phase!==`smooth`&&this.scrollState?.phase!==`smoothFinishing`})&&this.scrollState?.phase===`queued`&&(this.scrollState=null),this._flushHoldIfReady(!0),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),`addEventListener`in this.scrollElement&&this.unsubs.push(this._iosGesture.listen(this.scrollElement)),this._scrollToOffset(this.getScrollOffset())}this._noteClampMax();let t=this.pendingScrollAnchor;this.pendingScrollAnchor=null,t&&this.scrollElement&&this.options.enabled&&(t.kind===`anchor`?this._canWriteScroll()?hm(this.scrollState)&&!Rp(this.getScrollOffset()-t.delta,this.scrollState.lastTargetOffset)||(this._followOffsetTarget(t.delta),this._scrollToOffset(this.getScrollOffset())):(this._holdOffset+=t.delta,this._followOffsetTarget(t.delta),this.notify(!1)):this.scrollToEnd({behavior:t.behavior})),this._flushHoldIfReady(!1),this._retryClampedAdjustment()},this._classifyScrollEvent=(e,t,n)=>Bp({offset:e,isScrolling:t,elementMax:n,holdOffset:this._holdOffset,scrollOffset:this.scrollOffset,pendingWrite:this.pendingWrite,clampedMaxAtWrite:this._clampedAdjustment?.maxAtWrite??null}),this._retryClampedAdjustment=()=>{if(this._clampedAdjustment===null||!this.scrollElement||!this.options.enabled||!this._canWriteScroll())return;let{target:e,maxAtWrite:t}=this._clampedAdjustment,n=this.getMaxScrollOffset();n>t+.5&&(this._clampedAdjustment=e>n+.5?{target:e,maxAtWrite:n}:null,this._scrollToOffset(e))},this._writeAwaitingCommand=()=>{let e=this.scrollState;if(e===null||e.phase!==`queued`)return;let{behavior:t}=e;this.getMeasurements();let n=this.getScrollStateTarget(e);e.lastTargetOffset=n,this._clampedAdjustment=null,e.phase=mm(t,e.index!=null&&Rp(n,this.getScrollOffset())),this._scrollToOffset(n,{behavior:t}),this.scheduleScrollReconcile()},this._readElementOffset=()=>{let e=this.scrollElement;if(e==null)return null;let{horizontal:t,isRtl:n}=this.options;return typeof e.scrollTop==`number`?t?e.scrollLeft*(n&&-1||1):e.scrollTop:typeof e.scrollY==`number`?t?e.scrollX:e.scrollY:null},this._canWriteScroll=()=>!(qp()&&this._iosGesture.inMotion())&&!this._reportedOverscroll,this._flushHoldIfReady=e=>{if(this._holdOffset===0||!this.scrollElement||!this.options.enabled||!this._canWriteScroll()||this.scrollState?.phase===`smooth`)return;this._holdOffset=0,this.scrollOffset!==null&&this.scrollOffset<0&&(this.scrollOffset=0),this.notify(e);let t=this.getCommandWrittenOffset()??this.getScrollOffset();this._clampedAdjustment=this._clampedBy(t),this._scrollToOffset(t)},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?`width`:`height`]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset==`function`?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=Ip(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(e,t,n,r,i,a,o,s)=>(this.prevLanes!==void 0&&this.prevLanes!==a&&(this.lanesChangedFlag=!0),this.prevLanes=a,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a,laneAssignmentMode:o,gap:s}),{key:!1}),this.isIndexInRange=e=>e>=0&&e<this.options.count,this.getMeasurements=Ip(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a,laneAssignmentMode:o,gap:s},c)=>{let l=this.itemSizeCache;if(!i)return this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let u=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),a===1){let i=e*2,a=this._singleLaneMeasurements?.flat;if(!a||a.length<i){let e=new Float64Array(i);a&&u>0&&e.set(a.subarray(0,u*2)),a=e}let o=u===0?Array(e):this._singleLaneMeasurements.items.slice(),c;if(u===0)c=t+n;else{let e=u-1;c=a[e*2]+a[e*2+1]+s}for(let t=u;t<e;t++){let e=r(t);o[t]=e;let n=l.get(e),i=typeof n==`number`?n:this.options.estimateSize(t);a[t*2]=c,a[t*2+1]=i,c+=i+s}this._singleLaneMeasurements={flat:a,items:o};let d=Fp(o,a);return this.measurementsCache=d,d}let d=this.measurementsCache.slice(0,u),f=Array(a).fill(void 0),p=new Float64Array(a),m=0;for(let e=0;e<u;e++){let t=d[e];t&&(f[t.lane]===void 0&&m++,f[t.lane]=e,p[t.lane]=t.end)}for(let i=u;i<e;i++){let e=r(i),c=this.laneAssignments.get(i),u,h,g=o===`estimate`||l.has(e);if(c!==void 0&&this.options.lanes>1){u=c;let e=f[u],r=e===void 0?void 0:d[e];h=r?r.end+s:t+n}else if(m===a){let e=0,t=p[0],n=f[0];for(let r=1;r<a;r++){let i=p[r];(i<t||i===t&&f[r]<n)&&(e=r,t=i,n=f[r])}u=e,h=t+s,g&&this.laneAssignments.set(i,u)}else u=i%this.options.lanes,h=t+n,g&&this.laneAssignments.set(i,u);let _=l.get(e),v=typeof _==`number`?_:this.options.estimateSize(i),y=h+v;d[i]={index:i,start:h,size:v,end:y,key:e,lane:u},f[u]===void 0&&m++,f[u]=i,p[u]=y}return this.measurementsCache=d,d},{key:!1,debug:()=>this.options.debug}),this.calculateRange=Ip(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes,this._getLayoutTotalSize()+this.options.scrollMargin],(e,t,n,r,i)=>{if(e.length===0||t===0)return this.range=null,null;let a=Math.max(i-t,0);return this.range=bm(e,t,Math.min(n,a),r,r===1&&this._singleLaneMeasurements!==null?this._singleLaneMeasurements.flat:null),this.range},{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=Ip(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t,this.options.lanes]},(e,t,n,r,i,a)=>r===null||i===null?[]:e({startIndex:r,endIndex:i,overscan:t,count:n,lanes:a}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{if(!hm(this.scrollState))return!0;let t=this.scrollState.index??this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;if(t!==void 0&&this.range){let n=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),r=Math.max(0,t-n),i=Math.min(this.options.count-1,t+n);return e>=r&&e<=i}return!0},this.measureElement=e=>{if(!e){this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});return}let t=this.indexFromElement(e);if(!this.isIndexInRange(t))return;let n=this.options.getItemKey(t),r=this.elementsCache.get(n);r!==e&&(r&&this.observer.unobserve(r),this.observer.observe(e),this.elementsCache.set(n,e)),e.isConnected&&(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var n;if(!this.isIndexInRange(e))return;this._resizeBatch?.sync&&this.getMeasurements();let r,i,a,o=this._singleLaneMeasurements?.flat;if(this.options.lanes===1&&o!=null)a=this.options.getItemKey(e),i=o[e*2],r=o[e*2+1];else{let t=this.measurementsCache[e];if(!t)return;a=t.key,i=t.start,r=t.size}let s=this.itemSizeCache.get(a)??r,c=t-s;if(c!==0){let o=this.options.anchorTo===`end`&&!hm(this.scrollState)&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,l=o?this._getLayoutTotalSize():0,u=this.getScrollOffset(),d=this.itemSizeCache.has(a)?i+s<=u&&this.scrollDirection!==`backward`:i<u,f=!hm(this.scrollState)&&(this.shouldAdjustScrollPositionOnItemSizeChange===void 0?d:this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:a,start:i,size:r,end:i+r,lane:0},c,this));(this.pendingMin===null||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(a,t),this.itemSizeCacheVersion++;let p=!1;if(this._awaitingCommandReadBack()||(o?p=this.applyScrollAdjustment(this._getLayoutTotalSize()-l):f&&(p=this.applyScrollAdjustment(c))),this._resizeBatch){this._resizeBatch.notify=!0,(n=this._resizeBatch).sync||(n.sync=p);return}this.notify(p),this._noteClampMax(),this._flushHoldIfReady(!0),this._retryClampedAdjustment()}},this.getVirtualItems=Ip(()=>[this.getVirtualIndexes(),this.getMeasurements(),this._holdOffset],(e,t,n)=>{let r=[];for(let i=0,a=e.length;i<a;i++){let a=t[e[i]];r.push(n===0?a:{...a,start:a.start-n,end:a.end-n})}return r},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(t.length===0)return;let n=this._singleLaneMeasurements?.flat,r=this.options.lanes===1&&n!=null;return Lp(t[vm(0,t.length-1,r?e=>n[e*2]:e=>Lp(t[e]).start,e)])},this._noteClampMax=()=>{if(!this._awaitingCommandReadBack())return;let e=this._elementMaxScrollOffset();if(e===null)return;let t=this.pendingWrite,n=Math.max(e,0)+this._holdOffset;if(n>=t.target)return;let r=t.lowMaxes??=[];r[r.length-1]!==n&&r.push(n)},this.getMaxScrollOffset=()=>(this._elementMaxScrollOffset()??0)+this._holdOffset,this._toLayoutOffset=e=>{let t=e+this._holdOffset;return this.pendingScrollAnchor?.kind===`anchor`&&(t+=this.pendingScrollAnchor.delta),t},this._elementMaxScrollOffset=()=>{let e=this.scrollElement;if(e===null)return null;if(`scrollHeight`in e)return this.options.horizontal?e.scrollWidth-e.clientWidth:e.scrollHeight-e.clientHeight;if(`document`in e){let t=e.document.documentElement;return this.options.horizontal?t.scrollWidth-e.innerWidth:t.scrollHeight-e.innerHeight}return null},this._momentumStop=null,this._stopMomentum=e=>{let t=this.scrollElement,n=this.targetWindow;if(t===null||n===null)return;let r=`document`in t?t.document.scrollingElement:t;if(!r?.style)return;if(this._momentumStop){this._momentumStop.done=e;return}let{style:i}=r,a=this.options.horizontal?`overflow-x`:`overflow-y`,o=i.getPropertyValue(a),s=i.getPropertyPriority(a),c=()=>this.options.horizontal?r.clientHeight:r.clientWidth,l=c();if(i.setProperty(a,`hidden`,`important`),c()!==l){i.setProperty(a,o,s);return}let u={restore:()=>i.getPropertyValue(a)!==`hidden`||i.getPropertyPriority(a)!==`important`?!1:(i.setProperty(a,o,s),!0),done:e};this._momentumStop=u,n.requestAnimationFrame(()=>n.requestAnimationFrame(()=>{this._momentumStop===u&&(this._momentumStop=null,u.restore()&&u.done())}))},this._clampedBy=e=>{let t=this._elementMaxScrollOffset();if(t===null)return null;let n=t+this._holdOffset;return e>n+.5?{target:e,maxAtWrite:n}:null},this.getVirtualDistanceFromEnd=()=>Math.max(this._getLayoutTotalSize()+this.options.scrollMargin-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let r=this.getSize(),i=this.getScrollOffset();t===`auto`&&(t=e>=i+r?`end`:`start`),t===`center`?e+=(n-r)/2:t===`end`&&(e-=r);let a=this.getMaxScrollOffset();return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t=`auto`)=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),r=this.getScrollOffset(),i=this.getMeasurements()[e];if(!i)return;if(t===`auto`)if(i.end>=r+n-this.options.scrollPaddingEnd)t=`end`;else if(i.start<=r+this.options.scrollPaddingStart)t=`start`;else return[r,t];if(t===`end`&&e===this.options.count-1){let e=this.getMaxScrollOffset(),n=e-this.options.paddingEnd+this.options.scrollPaddingEnd;return[Math.max(Math.min(n,e),0),t]}let a=t===`end`?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,i.size),t]},this.scrollToOffset=(e,{align:t=`start`,behavior:n=`auto`}={})=>{this._startScroll({index:null,align:t},this.getOffsetForAlignment(e,t),n,`absolute`)},this.scrollToIndex=(e,{align:t=`auto`,behavior:n=`auto`}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getOffsetForIndex(e,t);if(!r)return;let[i,a]=r;this._startScroll({index:e,align:a},i,n,`absolute`)},this.scrollBy=(e,{behavior:t=`auto`}={})=>{let n=this.getOffsetForAlignment((this.getCommandWrittenOffset()??this.getScrollOffset())+e,`start`);this._startScroll({index:null,align:`start`},n,t,`relative`)},this.scrollToEnd=({behavior:e=`auto`}={})=>{if(this.options.count>0){this._startScroll({index:this.options.count-1,align:`end`,toEnd:!0},Math.max(this.getMaxScrollOffset(),0),e,`absolute`);return}this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.cancelScroll=()=>{this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null},this.getTotalSize=()=>Math.max(this._getLayoutTotalSize()-this._holdOffset,0),this._getLayoutTotalSize=()=>{let e=this.getMeasurements(),t;if(e.length===0)t=this.options.paddingStart;else if(this.options.lanes===1){let n=e.length-1,r=this._singleLaneMeasurements?.flat;t=r==null?e[n]?.end??0:r[n*2]+r[n*2+1]}else{let n=Array(this.options.lanes).fill(null),r=e.length-1;for(;r>=0&&n.some(e=>e===null);){let t=e[r];n[t.lane]===null&&(n[t.lane]=t.end),r--}t=Math.max(...n.filter(e=>e!==null))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(this.itemSizeCache.size===0)return e;let t=this.getMeasurements();for(let n of t)n&&this.itemSizeCache.has(n.key)&&e.push({index:n.index,key:n.key,start:n.start,size:n.size,end:n.end,lane:n.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:n}={})=>{let r={target:e+(t??0),smooth:n===`smooth`};return this.pendingWrite=r,this.options.scrollToFn(e-this._holdOffset,{behavior:n,adjustments:t},this),r},this.getCommandWrittenOffset=()=>this.scrollState!==null&&this.pendingWrite!==null&&!this.pendingWrite.smooth?this.pendingWrite.target:null,this._awaitingCommandReadBack=()=>{let e=this.getCommandWrittenOffset();return!(qp()&&this._iosGesture.dragging())&&e!==null&&!Rp(e,this.getScrollOffset())},this._followOffsetTarget=e=>{this.scrollState!==null&&this.scrollState.index==null&&(this.scrollState.lastTargetOffset+=e)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}get scrollAdjustments(){return 0}applyScrollAdjustment(e,t){if(e===0)return!1;if(this._followOffsetTarget(e),this._canWriteScroll()){let n=this.getScrollOffset();this._clampedAdjustment=this._clampedBy(n+e);let r=this._scrollToOffset(n,{adjustments:e,behavior:t});return this.scrollOffset!==null&&(this.pendingWrite===r&&(this.scrollOffset+=e),this.scrollOffset<0&&(this.scrollOffset=0)),!0}return this._holdOffset+=e,this.scrollOffset!==null&&(this.scrollOffset+=e),!0}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}this.rafId??=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()})}getScrollStateTarget(e){let t=e.toEnd?[Math.max(this.getMaxScrollOffset(),0)]:e.index==null?void 0:this.getOffsetForIndex(e.index,e.align);return t?t[0]:e.lastTargetOffset}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}if(this.scrollState.phase===`queued`){this.scheduleScrollReconcile();return}this.getMeasurements();let e=this.getScrollStateTarget(this.scrollState),t=this.scrollState.index==null?1:this.options.useAnimationFrameWithResizeObserver?3:2,n=e!==this.scrollState.lastTargetOffset;if(!n&&Rp(e,this.getScrollOffset())){if(this.scrollState.phase===`smooth`?this.scrollState.phase=`smoothLanded`:this.scrollState.phase===`smoothFinishing`&&(this.scrollState.phase=`instant`),this.scrollState.stableFrames++,this.scrollState.stableFrames>=t){this.getScrollOffset()!==e&&this._scrollToOffset(e,{behavior:`auto`}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,n){let t=this.getSize()||600,n=Math.abs(e-this.getScrollOffset()),r=hm(this.scrollState)&&n>t;this.scrollState.lastTargetOffset=e,r?this.scrollState.phase=`smooth`:this.scrollState.phase===`smooth`?this.scrollState.phase=`smoothFinishing`:this.scrollState.phase===`smoothLanded`&&(this.scrollState.phase=`instant`),this._scrollToOffset(e,{behavior:r?`smooth`:`auto`})}this.scheduleScrollReconcile()}_startScroll(e,t,n,r){this.pendingScrollAnchor=null,this._clampedAdjustment=null;let i=this._iosGesture.tail();if(r===`absolute`&&i!==null){if(i===`fling`&&Xp()){this._stopMomentum(()=>{this.scrollState?.phase!==`queued`||this._iosGesture.tail()!==`fling`||this._reportedOverscroll||(this._iosGesture.end(),this._flushHoldIfReady(!0),this._writeAwaitingCommand())}),this.scrollState={...e,startedAt:this.now(),lastTargetOffset:t,stableFrames:0,phase:`queued`,behavior:n,samples:[]},this.scheduleScrollReconcile();return}this._iosGesture.end()}this.scrollState={...e,startedAt:this.now(),lastTargetOffset:t,stableFrames:0,behavior:n,phase:mm(n,e.index!=null&&Rp(t,this.getScrollOffset()))},this._scrollToOffset(t,{behavior:n}),this.scheduleScrollReconcile()}},vm=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,a=n(i);if(a<r)e=i+1;else if(a>r)t=i-1;else return i}return e>0?e-1:0};function ym(e,t,n){let r=0;for(;r<=t;){let i=(r+t)/2|0,a=e[i*2];if(a<n)r=i+1;else if(a>n)t=i-1;else return i}return r>0?r-1:0}function bm(e,t,n,r,i){let a=e.length-1;if(e.length<=r)return{startIndex:0,endIndex:a};if(r===1&&i!==null){let e=ym(i,a,n),r=e,o=n+t;for(;r<a&&i[r*2]+i[r*2+1]<o;)r++;return{startIndex:e,endIndex:r}}let o=vm(0,a,t=>e[t].start,n),s=o;if(r===1)for(;s<a&&e[s].end<n+t;)s++;else if(r>1){let i=Array(r).fill(0);for(;s<a&&i.some(e=>e<n+t);){let t=e[s];i[t.lane]=t.end,s++}let c=Array(r).fill(n+t);for(;o>=0&&c.some(e=>e>=n);){let t=e[o];c[t.lane]=t.start,o--}o=Math.max(0,o-o%r),s=Math.min(a,s+(r-1-s%r))}return{startIndex:o,endIndex:s}}var xm=typeof document<`u`?L.useLayoutEffect:L.useEffect;function Sm({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:n=`transform`,...r}){let i=L.useReducer(e=>e+1,0)[1],a=L.useRef({enabled:t,mode:n,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});a.current.enabled=t,a.current.mode=n;let o=L.useRef(!1),s=e=>{let t=a.current;if(!t.enabled||!t.container)return;let n=e.getTotalSize();if(n!==t.lastSize){t.lastSize=n;let r=e.options.horizontal?`width`:`height`;t.container.style[r]=`${n}px`}},c=(e,t,n)=>{let r=a.current,i=!!e.options.horizontal,o=t.start-e.options.scrollMargin;r.lastPositions.get(n)!==o&&(r.lastPositions.set(n,o),r.mode===`transform`?n.style.transform=i?`translate3d(${o}px, 0, 0)`:`translate3d(0, ${o}px, 0)`:n.style[i?`left`:`top`]=`${o}px`)},l=e=>{let t=a.current;if(!(!t.enabled||!t.container)){s(e);for(let t of e.getVirtualItems()){let n=e.elementsCache.get(t.key);n&&c(e,t,n)}}},u={...r,onChange:(t,n)=>{var s;let c=a.current,u=!0;if(c.enabled){l(t);let e=t.range,n=c.prevRange;u=!n||n.isScrolling!==t.isScrolling||n.startIndex!==e?.startIndex||n.endIndex!==e?.endIndex,u&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}u&&(e&&n&&!o.current?(0,dd.flushSync)(i):i()),(s=r.onChange)==null||s.call(r,t,n)}},[d]=L.useState(()=>{let e=new _m(u),t=e.measureElement;return e.measureElement=n=>{o.current=!0;try{t(n)}finally{o.current=!1}let r=a.current;if(n!==null&&r.enabled&&r.container){let t=e.measurementsCache[e.indexFromElement(n)];t&&c(e,t,n)}},Object.assign(e,{containerRef:t=>{let n=a.current;n.container=t,n.lastSize=null,t!==null&&l(e)}})});return d.setOptions(u),xm(()=>d._didMount(),[]),xm(()=>(s(d),d._willUpdate())),xm(()=>{l(d)}),d}function Cm(e){return Sm({observeElementRect:rm,observeElementOffset:cm,scrollToFn:pm,...e})}var wm=t(n(((t,n)=>{(function(e){var r;typeof t==`object`?n.exports=e():typeof define==`function`&&define.amd?define(e):(typeof window<`u`?r=window:typeof global<`u`?r=global:typeof self<`u`&&(r=self),r.objectHash=e())})(function(){return function t(n,r,i){function a(s,c){if(!r[s]){if(!n[s]){var l=typeof e==`function`&&e;if(!c&&l)return l(s,!0);if(o)return o(s,!0);throw Error(`Cannot find module '`+s+`'`)}c=r[s]={exports:{}},n[s][0].call(c.exports,function(e){var t=n[s][1][e];return a(t||e)},c,c.exports,t,n,r,i)}return r[s].exports}for(var o=typeof e==`function`&&e,s=0;s<i.length;s++)a(i[s]);return a}({1:[function(e,t,n){(function(r,i,a,o,s,c,l,u,d){var f=e(`crypto`);function p(e,t){t=g(e,t);var n;return(n=t.algorithm===`passthrough`?new y:f.createHash(t.algorithm)).write===void 0&&(n.write=n.update,n.end=n.update),v(t,n).dispatch(e),n.update||n.end(``),n.digest?n.digest(t.encoding===`buffer`?void 0:t.encoding):(e=n.read(),t.encoding===`buffer`?e:e.toString(t.encoding))}(n=t.exports=p).sha1=function(e){return p(e)},n.keys=function(e){return p(e,{excludeValues:!0,algorithm:`sha1`,encoding:`hex`})},n.MD5=function(e){return p(e,{algorithm:`md5`,encoding:`hex`})},n.keysMD5=function(e){return p(e,{algorithm:`md5`,encoding:`hex`,excludeValues:!0})};var m=f.getHashes?f.getHashes().slice():[`sha1`,`md5`],h=(m.push(`passthrough`),[`buffer`,`hex`,`binary`,`base64`]);function g(e,t){var n={};if(n.algorithm=(t||={}).algorithm||`sha1`,n.encoding=t.encoding||`hex`,n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=!0===t.ignoreUnknown,n.respectType=!1!==t.respectType,n.respectFunctionNames=!1!==t.respectFunctionNames,n.respectFunctionProperties=!1!==t.respectFunctionProperties,n.unorderedArrays=!0===t.unorderedArrays,n.unorderedSets=!1!==t.unorderedSets,n.unorderedObjects=!1!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,e===void 0)throw Error(`Object argument required.`);for(var r=0;r<m.length;++r)m[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=m[r]);if(m.indexOf(n.algorithm)===-1)throw Error(`Algorithm "`+n.algorithm+`"  not supported. supported values: `+m.join(`, `));if(h.indexOf(n.encoding)===-1&&n.algorithm!==`passthrough`)throw Error(`Encoding "`+n.encoding+`"  not supported. supported values: `+h.join(`, `));return n}function _(e){if(typeof e==`function`)return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))!=null}function v(e,t,n){n||=[];function r(e){return t.update?t.update(e,`utf8`):t.write(e,`utf8`)}return{dispatch:function(t){return this[`_`+((t=e.replacer?e.replacer(t):t)===null?`null`:typeof t)](t)},_object:function(t){var i,o=Object.prototype.toString.call(t),s=/\[object (.*)\]/i.exec(o);if(s=(s=s?s[1]:`unknown:[`+o+`]`).toLowerCase(),0<=(o=n.indexOf(t)))return this.dispatch(`[CIRCULAR:`+o+`]`);if(n.push(t),a!==void 0&&a.isBuffer&&a.isBuffer(t))return r(`buffer:`),r(t);if(s===`object`||s===`function`||s===`asyncfunction`)return o=Object.keys(t),e.unorderedObjects&&(o=o.sort()),!1===e.respectType||_(t)||o.splice(0,0,`prototype`,`__proto__`,`constructor`),e.excludeKeys&&(o=o.filter(function(t){return!e.excludeKeys(t)})),r(`object:`+o.length+`:`),i=this,o.forEach(function(n){i.dispatch(n),r(`:`),e.excludeValues||i.dispatch(t[n]),r(`,`)});if(!this[`_`+s]){if(e.ignoreUnknown)return r(`[`+s+`]`);throw Error(`Unknown object type "`+s+`"`)}this[`_`+s](t)},_array:function(t,i){i=i===void 0?!1!==e.unorderedArrays:i;var a=this;if(r(`array:`+t.length+`:`),!i||t.length<=1)return t.forEach(function(e){return a.dispatch(e)});var o=[],i=t.map(function(t){var r=new y,i=n.slice();return v(e,r,i).dispatch(t),o=o.concat(i.slice(n.length)),r.read().toString()});return n=n.concat(o),i.sort(),this._array(i,!1)},_date:function(e){return r(`date:`+e.toJSON())},_symbol:function(e){return r(`symbol:`+e.toString())},_error:function(e){return r(`error:`+e.toString())},_boolean:function(e){return r(`bool:`+e.toString())},_string:function(e){r(`string:`+e.length+`:`),r(e.toString())},_function:function(t){r(`fn:`),_(t)?this.dispatch(`[native]`):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch(`function-name:`+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return r(`number:`+e.toString())},_xml:function(e){return r(`xml:`+e.toString())},_null:function(){return r(`Null`)},_undefined:function(){return r(`Undefined`)},_regexp:function(e){return r(`regex:`+e.toString())},_uint8array:function(e){return r(`uint8array:`),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return r(`uint8clampedarray:`),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return r(`int8array:`),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return r(`uint16array:`),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return r(`int16array:`),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return r(`uint32array:`),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return r(`int32array:`),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return r(`float32array:`),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return r(`float64array:`),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return r(`arraybuffer:`),this.dispatch(new Uint8Array(e))},_url:function(e){return r(`url:`+e.toString())},_map:function(t){return r(`map:`),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_set:function(t){return r(`set:`),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_file:function(e){return r(`file:`),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(e.ignoreUnknown)return r(`[blob]`);throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return r(`domwindow`)},_bigint:function(e){return r(`bigint:`+e.toString())},_process:function(){return r(`process`)},_timer:function(){return r(`timer`)},_pipe:function(){return r(`pipe`)},_tcp:function(){return r(`tcp`)},_udp:function(){return r(`udp`)},_tty:function(){return r(`tty`)},_statwatcher:function(){return r(`statwatcher`)},_securecontext:function(){return r(`securecontext`)},_connection:function(){return r(`connection`)},_zlib:function(){return r(`zlib`)},_context:function(){return r(`context`)},_nodescript:function(){return r(`nodescript`)},_httpparser:function(){return r(`httpparser`)},_dataview:function(){return r(`dataview`)},_signal:function(){return r(`signal`)},_fsevent:function(){return r(`fsevent`)},_tlswrap:function(){return r(`tlswrap`)}}}function y(){return{buf:``,write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}n.writeToStream=function(e,t,n){return n===void 0&&(n=t,t={}),v(t=g(e,t),n).dispatch(e)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/fake_9a5aa49d.js`,`/`)},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,n){(function(e,t,r,i,a,o,s,c,l){(function(e){var t=typeof Uint8Array<`u`?Uint8Array:Array,n=43,r=47,i=48,a=97,o=65,s=45,c=95;function l(e){return e=e.charCodeAt(0),e===n||e===s?62:e===r||e===c?63:e<i?-1:e<i+10?e-i+26+26:e<o+26?e-o:e<a+26?e-a+26:void 0}e.toByteArray=function(e){var n,r;if(0<e.length%4)throw Error(`Invalid string. Length must be a multiple of 4`);var i=e.length,i=e.charAt(i-2)===`=`?2:+(e.charAt(i-1)===`=`),a=new t(3*e.length/4-i),o=0<i?e.length-4:e.length,s=0;function c(e){a[s++]=e}for(n=0;n<o;n+=4)c((16711680&(r=l(e.charAt(n))<<18|l(e.charAt(n+1))<<12|l(e.charAt(n+2))<<6|l(e.charAt(n+3))))>>16),c((65280&r)>>8),c(255&r);return i==2?c(255&(r=l(e.charAt(n))<<2|l(e.charAt(n+1))>>4)):i==1&&(c((r=l(e.charAt(n))<<10|l(e.charAt(n+1))<<4|l(e.charAt(n+2))>>2)>>8&255),c(255&r)),a},e.fromByteArray=function(e){var t,n,r,i,a=e.length%3,o=``;function s(e){return`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`.charAt(e)}for(t=0,r=e.length-a;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],o+=s((i=n)>>18&63)+s(i>>12&63)+s(i>>6&63)+s(63&i);switch(a){case 1:o=(o+=s((n=e[e.length-1])>>2))+s(n<<4&63)+`==`;break;case 2:o=(o=(o+=s((n=(e[e.length-2]<<8)+e[e.length-1])>>10))+s(n>>4&63))+s(n<<2&63)+`=`}return o}})(n===void 0?this.base64js={}:n)}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js`,`/node_modules/gulp-browserify/node_modules/base64-js/lib`)},{buffer:3,lYpoI2:11}],3:[function(e,t,n){(function(t,r,i,a,o,s,c,l,u){var d=e(`base64-js`),f=e(`ieee754`);function i(e,t,n){if(!(this instanceof i))return new i(e,t,n);var r,a,o,s,c=typeof e;if(t===`base64`&&c==`string`)for(e=(s=e).trim?s.trim():s.replace(/^\s+|\s+$/g,``);e.length%4!=0;)e+=`=`;if(c==`number`)r=ee(e);else if(c==`string`)r=i.byteLength(e,t);else{if(c!=`object`)throw Error(`First argument needs to be a number, array or string.`);r=ee(e.length)}if(i._useTypedArrays?a=i._augment(new Uint8Array(r)):((a=this).length=r,a._isBuffer=!0),i._useTypedArrays&&typeof e.byteLength==`number`)a._set(e);else if(A(s=e)||i.isBuffer(s)||s&&typeof s==`object`&&typeof s.length==`number`)for(o=0;o<r;o++)i.isBuffer(e)?a[o]=e.readUInt8(o):a[o]=e[o];else if(c==`string`)a.write(e,0,t);else if(c==`number`&&!i._useTypedArrays&&!n)for(o=0;o<r;o++)a[o]=0;return a}function p(e,t,n,r){return i._charsWritten=N(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n,r){return i._charsWritten=N(function(e){for(var t,n,r=[],i=0;i<e.length;i++)n=e.charCodeAt(i),t=n>>8,n%=256,r.push(n),r.push(t);return r}(t),e,n,r)}function h(e,t,n){var r=``;n=Math.min(e.length,n);for(var i=t;i<n;i++)r+=String.fromCharCode(e[i]);return r}function g(e,t,n,r){r||(F(typeof n==`boolean`,`missing or invalid endian`),F(t!=null,`missing offset`),F(t+1<e.length,`Trying to read beyond buffer length`));var i,r=e.length;if(!(r<=t))return n?(i=e[t],t+1<r&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<r&&(i|=e[t+1])),i}function _(e,t,n,r){r||(F(typeof n==`boolean`,`missing or invalid endian`),F(t!=null,`missing offset`),F(t+3<e.length,`Trying to read beyond buffer length`));var i,r=e.length;if(!(r<=t))return n?(t+2<r&&(i=e[t+2]<<16),t+1<r&&(i|=e[t+1]<<8),i|=e[t],t+3<r&&(i+=e[t+3]<<24>>>0)):(t+1<r&&(i=e[t+1]<<16),t+2<r&&(i|=e[t+2]<<8),t+3<r&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}function v(e,t,n,r){if(r||(F(typeof n==`boolean`,`missing or invalid endian`),F(t!=null,`missing offset`),F(t+1<e.length,`Trying to read beyond buffer length`)),!(e.length<=t))return r=g(e,t,n,!0),32768&r?-1*(65535-r+1):r}function y(e,t,n,r){if(r||(F(typeof n==`boolean`,`missing or invalid endian`),F(t!=null,`missing offset`),F(t+3<e.length,`Trying to read beyond buffer length`)),!(e.length<=t))return r=_(e,t,n,!0),2147483648&r?-1*(4294967295-r+1):r}function b(e,t,n,r){return r||(F(typeof n==`boolean`,`missing or invalid endian`),F(t+3<e.length,`Trying to read beyond buffer length`)),f.read(e,t,n,23,4)}function x(e,t,n,r){return r||(F(typeof n==`boolean`,`missing or invalid endian`),F(t+7<e.length,`Trying to read beyond buffer length`)),f.read(e,t,n,52,8)}function S(e,t,n,r,i){if(i||(F(t!=null,`missing value`),F(typeof r==`boolean`,`missing or invalid endian`),F(n!=null,`missing offset`),F(n+1<e.length,`trying to write beyond buffer length`),ne(t,65535)),i=e.length,!(i<=n))for(var a=0,o=Math.min(i-n,2);a<o;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function C(e,t,n,r,i){if(i||(F(t!=null,`missing value`),F(typeof r==`boolean`,`missing or invalid endian`),F(n!=null,`missing offset`),F(n+3<e.length,`trying to write beyond buffer length`),ne(t,4294967295)),i=e.length,!(i<=n))for(var a=0,o=Math.min(i-n,4);a<o;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function w(e,t,n,r,i){i||(F(t!=null,`missing value`),F(typeof r==`boolean`,`missing or invalid endian`),F(n!=null,`missing offset`),F(n+1<e.length,`Trying to write beyond buffer length`),re(t,32767,-32768)),e.length<=n||S(e,0<=t?t:65535+t+1,n,r,i)}function T(e,t,n,r,i){i||(F(t!=null,`missing value`),F(typeof r==`boolean`,`missing or invalid endian`),F(n!=null,`missing offset`),F(n+3<e.length,`Trying to write beyond buffer length`),re(t,2147483647,-2147483648)),e.length<=n||C(e,0<=t?t:4294967295+t+1,n,r,i)}function E(e,t,n,r,i){i||(F(t!=null,`missing value`),F(typeof r==`boolean`,`missing or invalid endian`),F(n!=null,`missing offset`),F(n+3<e.length,`Trying to write beyond buffer length`),ie(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||f.write(e,t,n,r,23,4)}function D(e,t,n,r,i){i||(F(t!=null,`missing value`),F(typeof r==`boolean`,`missing or invalid endian`),F(n!=null,`missing offset`),F(n+7<e.length,`Trying to write beyond buffer length`),ie(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||f.write(e,t,n,r,52,8)}n.Buffer=i,n.SlowBuffer=i,n.INSPECT_MAX_BYTES=50,i.poolSize=8192,i._useTypedArrays=function(){try{var e=new Uint8Array(new ArrayBuffer(0));return e.foo=function(){return 42},e.foo()===42&&typeof e.subarray==`function`}catch{return!1}}(),i.isEncoding=function(e){switch(String(e).toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`binary`:case`base64`:case`raw`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return!0;default:return!1}},i.isBuffer=function(e){return!(e==null||!e._isBuffer)},i.byteLength=function(e,t){var n;switch(e+=``,t||`utf8`){case`hex`:n=e.length/2;break;case`utf8`:case`utf-8`:n=j(e).length;break;case`ascii`:case`binary`:case`raw`:n=e.length;break;case`base64`:n=M(e).length;break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:n=2*e.length;break;default:throw Error(`Unknown encoding`)}return n},i.concat=function(e,t){if(F(A(e),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),e.length===0)return new i(0);if(e.length===1)return e[0];if(typeof t!=`number`)for(a=t=0;a<e.length;a++)t+=e[a].length;for(var n=new i(t),r=0,a=0;a<e.length;a++){var o=e[a];o.copy(n,r),r+=o.length}return n},i.prototype.write=function(e,t,n,r){isFinite(t)?isFinite(n)||(r=n,n=void 0):(l=r,r=t,t=n,n=l),t=Number(t)||0;var a,o,s,c,l=this.length-t;switch((!n||l<(n=Number(n)))&&(n=l),r=String(r||`utf8`).toLowerCase()){case`hex`:a=function(e,t,n,r){n=Number(n)||0;var a=e.length-n;(!r||a<(r=Number(r)))&&(r=a),F((a=t.length)%2==0,`Invalid hex string`),a/2<r&&(r=a/2);for(var o=0;o<r;o++){var s=parseInt(t.substr(2*o,2),16);F(!isNaN(s),`Invalid hex string`),e[n+o]=s}return i._charsWritten=2*o,o}(this,e,t,n);break;case`utf8`:case`utf-8`:o=this,s=t,c=n,a=i._charsWritten=N(j(e),o,s,c);break;case`ascii`:case`binary`:a=p(this,e,t,n);break;case`base64`:o=this,s=t,c=n,a=i._charsWritten=N(M(e),o,s,c);break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:a=m(this,e,t,n);break;default:throw Error(`Unknown encoding`)}return a},i.prototype.toString=function(e,t,n){var r,i,a,o,s=this;if(e=String(e||`utf8`).toLowerCase(),t=Number(t)||0,(n=n===void 0?s.length:Number(n))===t)return``;switch(e){case`hex`:r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||r<n)&&(n=r);for(var i=``,a=t;a<n;a++)i+=te(e[a]);return i}(s,t,n);break;case`utf8`:case`utf-8`:r=function(e,t,n){var r=``,i=``;n=Math.min(e.length,n);for(var a=t;a<n;a++)e[a]<=127?(r+=P(i)+String.fromCharCode(e[a]),i=``):i+=`%`+e[a].toString(16);return r+P(i)}(s,t,n);break;case`ascii`:case`binary`:r=h(s,t,n);break;case`base64`:i=s,o=n,r=(a=t)===0&&o===i.length?d.fromByteArray(i):d.fromByteArray(i.slice(a,o));break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:r=function(e,t,n){for(var r=e.slice(t,n),i=``,a=0;a<r.length;a+=2)i+=String.fromCharCode(r[a]+256*r[a+1]);return i}(s,t,n);break;default:throw Error(`Unknown encoding`)}return r},i.prototype.toJSON=function(){return{type:`Buffer`,data:Array.prototype.slice.call(this._arr||this,0)}},i.prototype.copy=function(e,t,n,r){if(t||=0,(r=r||r===0?r:this.length)!==(n||=0)&&e.length!==0&&this.length!==0){F(n<=r,`sourceEnd < sourceStart`),F(0<=t&&t<e.length,`targetStart out of bounds`),F(0<=n&&n<this.length,`sourceStart out of bounds`),F(0<=r&&r<=this.length,`sourceEnd out of bounds`),r>this.length&&(r=this.length);var a=(r=e.length-t<r-n?e.length-t+n:r)-n;if(a<100||!i._useTypedArrays)for(var o=0;o<a;o++)e[o+t]=this[o+n];else e._set(this.subarray(n,n+a),t)}},i.prototype.slice=function(e,t){var n=this.length;if(e=k(e,n,0),t=k(t,n,n),i._useTypedArrays)return i._augment(this.subarray(e,t));for(var r=t-e,a=new i(r,void 0,!0),o=0;o<r;o++)a[o]=this[o+e];return a},i.prototype.get=function(e){return console.log(`.get() is deprecated. Access using array indexes instead.`),this.readUInt8(e)},i.prototype.set=function(e,t){return console.log(`.set() is deprecated. Access using array indexes instead.`),this.writeUInt8(e,t)},i.prototype.readUInt8=function(e,t){if(t||(F(e!=null,`missing offset`),F(e<this.length,`Trying to read beyond buffer length`)),!(e>=this.length))return this[e]},i.prototype.readUInt16LE=function(e,t){return g(this,e,!0,t)},i.prototype.readUInt16BE=function(e,t){return g(this,e,!1,t)},i.prototype.readUInt32LE=function(e,t){return _(this,e,!0,t)},i.prototype.readUInt32BE=function(e,t){return _(this,e,!1,t)},i.prototype.readInt8=function(e,t){if(t||(F(e!=null,`missing offset`),F(e<this.length,`Trying to read beyond buffer length`)),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},i.prototype.readInt16LE=function(e,t){return v(this,e,!0,t)},i.prototype.readInt16BE=function(e,t){return v(this,e,!1,t)},i.prototype.readInt32LE=function(e,t){return y(this,e,!0,t)},i.prototype.readInt32BE=function(e,t){return y(this,e,!1,t)},i.prototype.readFloatLE=function(e,t){return b(this,e,!0,t)},i.prototype.readFloatBE=function(e,t){return b(this,e,!1,t)},i.prototype.readDoubleLE=function(e,t){return x(this,e,!0,t)},i.prototype.readDoubleBE=function(e,t){return x(this,e,!1,t)},i.prototype.writeUInt8=function(e,t,n){n||(F(e!=null,`missing value`),F(t!=null,`missing offset`),F(t<this.length,`trying to write beyond buffer length`),ne(e,255)),t>=this.length||(this[t]=e)},i.prototype.writeUInt16LE=function(e,t,n){S(this,e,t,!0,n)},i.prototype.writeUInt16BE=function(e,t,n){S(this,e,t,!1,n)},i.prototype.writeUInt32LE=function(e,t,n){C(this,e,t,!0,n)},i.prototype.writeUInt32BE=function(e,t,n){C(this,e,t,!1,n)},i.prototype.writeInt8=function(e,t,n){n||(F(e!=null,`missing value`),F(t!=null,`missing offset`),F(t<this.length,`Trying to write beyond buffer length`),re(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},i.prototype.writeInt16LE=function(e,t,n){w(this,e,t,!0,n)},i.prototype.writeInt16BE=function(e,t,n){w(this,e,t,!1,n)},i.prototype.writeInt32LE=function(e,t,n){T(this,e,t,!0,n)},i.prototype.writeInt32BE=function(e,t,n){T(this,e,t,!1,n)},i.prototype.writeFloatLE=function(e,t,n){E(this,e,t,!0,n)},i.prototype.writeFloatBE=function(e,t,n){E(this,e,t,!1,n)},i.prototype.writeDoubleLE=function(e,t,n){D(this,e,t,!0,n)},i.prototype.writeDoubleBE=function(e,t,n){D(this,e,t,!1,n)},i.prototype.fill=function(e,t,n){if(t||=0,n||=this.length,F(typeof(e=typeof(e||=0)==`string`?e.charCodeAt(0):e)==`number`&&!isNaN(e),`value is not a number`),F(t<=n,`end < start`),n!==t&&this.length!==0){F(0<=t&&t<this.length,`start out of bounds`),F(0<=n&&n<=this.length,`end out of bounds`);for(var r=t;r<n;r++)this[r]=e}},i.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=te(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]=`...`;break}return`<Buffer `+e.join(` `)+`>`},i.prototype.toArrayBuffer=function(){if(typeof Uint8Array>`u`)throw Error(`Buffer.toArrayBuffer not supported in this browser`);if(i._useTypedArrays)return new i(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var O=i.prototype;function k(e,t,n){return typeof e==`number`?t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0:n}function ee(e){return(e=~~Math.ceil(+e))<0?0:e}function A(e){return(Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`})(e)}function te(e){return e<16?`0`+e.toString(16):e.toString(16)}function j(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else for(var i=n,a=(55296<=r&&r<=57343&&n++,encodeURIComponent(e.slice(i,n+1)).substr(1).split(`%`)),o=0;o<a.length;o++)t.push(parseInt(a[o],16))}return t}function M(e){return d.toByteArray(e)}function N(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);i++)t[i+n]=e[i];return i}function P(e){try{return decodeURIComponent(e)}catch{return`�`}}function ne(e,t){F(typeof e==`number`,`cannot write a non-number as a number`),F(0<=e,`specified a negative value for writing an unsigned value`),F(e<=t,`value is larger than maximum value for type`),F(Math.floor(e)===e,`value has a fractional component`)}function re(e,t,n){F(typeof e==`number`,`cannot write a non-number as a number`),F(e<=t,`value larger than maximum allowed value`),F(n<=e,`value smaller than minimum allowed value`),F(Math.floor(e)===e,`value has a fractional component`)}function ie(e,t,n){F(typeof e==`number`,`cannot write a non-number as a number`),F(e<=t,`value larger than maximum allowed value`),F(n<=e,`value smaller than minimum allowed value`)}function F(e,t){if(!e)throw Error(t||`Failed assertion`)}i._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=O.get,e.set=O.set,e.write=O.write,e.toString=O.toString,e.toLocaleString=O.toString,e.toJSON=O.toJSON,e.copy=O.copy,e.slice=O.slice,e.readUInt8=O.readUInt8,e.readUInt16LE=O.readUInt16LE,e.readUInt16BE=O.readUInt16BE,e.readUInt32LE=O.readUInt32LE,e.readUInt32BE=O.readUInt32BE,e.readInt8=O.readInt8,e.readInt16LE=O.readInt16LE,e.readInt16BE=O.readInt16BE,e.readInt32LE=O.readInt32LE,e.readInt32BE=O.readInt32BE,e.readFloatLE=O.readFloatLE,e.readFloatBE=O.readFloatBE,e.readDoubleLE=O.readDoubleLE,e.readDoubleBE=O.readDoubleBE,e.writeUInt8=O.writeUInt8,e.writeUInt16LE=O.writeUInt16LE,e.writeUInt16BE=O.writeUInt16BE,e.writeUInt32LE=O.writeUInt32LE,e.writeUInt32BE=O.writeUInt32BE,e.writeInt8=O.writeInt8,e.writeInt16LE=O.writeInt16LE,e.writeInt16BE=O.writeInt16BE,e.writeInt32LE=O.writeInt32LE,e.writeInt32BE=O.writeInt32BE,e.writeFloatLE=O.writeFloatLE,e.writeFloatBE=O.writeFloatBE,e.writeDoubleLE=O.writeDoubleLE,e.writeDoubleBE=O.writeDoubleBE,e.fill=O.fill,e.inspect=O.inspect,e.toArrayBuffer=O.toArrayBuffer,e}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/buffer/index.js`,`/node_modules/gulp-browserify/node_modules/buffer`)},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var i=e(`buffer`).Buffer,d=4,f=new i(d);f.fill(0),t.exports={hash:function(e,t,n,r){for(var a=t(function(e,t){e.length%d!=0&&(n=e.length+(d-e.length%d),e=i.concat([e,f],n));for(var n,r=[],a=t?e.readInt32BE:e.readInt32LE,o=0;o<e.length;o+=d)r.push(a.call(e,o));return r}(e=i.isBuffer(e)?e:new i(e),r),8*e.length),t=r,o=new i(n),s=t?o.writeInt32BE:o.writeInt32LE,c=0;c<a.length;c++)s.call(o,a[c],4*c,!0);return o}}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{buffer:3,lYpoI2:11}],5:[function(e,t,n){(function(t,r,i,a,o,s,c,l,u){var i=e(`buffer`).Buffer,d=e(`./sha`),f=e(`./sha256`),p=e(`./rng`),m={sha1:d,sha256:f,md5:e(`./md5`)},h=64,g=new i(h);function _(e,t){var n=m[e||=`sha1`],r=[];return n||v(`algorithm:`,e,`is not yet supported`),{update:function(e){return i.isBuffer(e)||(e=new i(e)),r.push(e),e.length,this},digest:function(e){var a=i.concat(r),a=t?function(e,t,n){i.isBuffer(t)||(t=new i(t)),i.isBuffer(n)||(n=new i(n)),t.length>h?t=e(t):t.length<h&&(t=i.concat([t,g],h));for(var r=new i(h),a=new i(h),o=0;o<h;o++)r[o]=54^t[o],a[o]=92^t[o];return n=e(i.concat([r,n])),e(i.concat([a,n]))}(n,t,a):n(a);return r=null,e?a.toString(e):a}}}function v(){var e=[].slice.call(arguments).join(` `);throw Error([e,`we accept pull requests`,`http://github.com/dominictarr/crypto-browserify`].join(`
`))}g.fill(0),n.createHash=function(e){return _(e)},n.createHmac=_,n.randomBytes=function(e,t){if(!t||!t.call)return new i(p(e));try{t.call(this,void 0,new i(p(e)))}catch(e){t(e)}};var y,b=[`createCredentials`,`createCipher`,`createCipheriv`,`createDecipher`,`createDecipheriv`,`createSign`,`createVerify`,`createDiffieHellman`,`pbkdf2`],x=function(e){n[e]=function(){v(`sorry,`,e,`is not implemented yet`)}};for(y in b)x(b[y],y)}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var d=e(`./helpers`);function f(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,i=-1732584194,a=271733878,o=0;o<e.length;o+=16){var s=n,c=r,l=i,u=a,n=m(n,r,i,a,e[o+0],7,-680876936),a=m(a,n,r,i,e[o+1],12,-389564586),i=m(i,a,n,r,e[o+2],17,606105819),r=m(r,i,a,n,e[o+3],22,-1044525330);n=m(n,r,i,a,e[o+4],7,-176418897),a=m(a,n,r,i,e[o+5],12,1200080426),i=m(i,a,n,r,e[o+6],17,-1473231341),r=m(r,i,a,n,e[o+7],22,-45705983),n=m(n,r,i,a,e[o+8],7,1770035416),a=m(a,n,r,i,e[o+9],12,-1958414417),i=m(i,a,n,r,e[o+10],17,-42063),r=m(r,i,a,n,e[o+11],22,-1990404162),n=m(n,r,i,a,e[o+12],7,1804603682),a=m(a,n,r,i,e[o+13],12,-40341101),i=m(i,a,n,r,e[o+14],17,-1502002290),n=h(n,r=m(r,i,a,n,e[o+15],22,1236535329),i,a,e[o+1],5,-165796510),a=h(a,n,r,i,e[o+6],9,-1069501632),i=h(i,a,n,r,e[o+11],14,643717713),r=h(r,i,a,n,e[o+0],20,-373897302),n=h(n,r,i,a,e[o+5],5,-701558691),a=h(a,n,r,i,e[o+10],9,38016083),i=h(i,a,n,r,e[o+15],14,-660478335),r=h(r,i,a,n,e[o+4],20,-405537848),n=h(n,r,i,a,e[o+9],5,568446438),a=h(a,n,r,i,e[o+14],9,-1019803690),i=h(i,a,n,r,e[o+3],14,-187363961),r=h(r,i,a,n,e[o+8],20,1163531501),n=h(n,r,i,a,e[o+13],5,-1444681467),a=h(a,n,r,i,e[o+2],9,-51403784),i=h(i,a,n,r,e[o+7],14,1735328473),n=g(n,r=h(r,i,a,n,e[o+12],20,-1926607734),i,a,e[o+5],4,-378558),a=g(a,n,r,i,e[o+8],11,-2022574463),i=g(i,a,n,r,e[o+11],16,1839030562),r=g(r,i,a,n,e[o+14],23,-35309556),n=g(n,r,i,a,e[o+1],4,-1530992060),a=g(a,n,r,i,e[o+4],11,1272893353),i=g(i,a,n,r,e[o+7],16,-155497632),r=g(r,i,a,n,e[o+10],23,-1094730640),n=g(n,r,i,a,e[o+13],4,681279174),a=g(a,n,r,i,e[o+0],11,-358537222),i=g(i,a,n,r,e[o+3],16,-722521979),r=g(r,i,a,n,e[o+6],23,76029189),n=g(n,r,i,a,e[o+9],4,-640364487),a=g(a,n,r,i,e[o+12],11,-421815835),i=g(i,a,n,r,e[o+15],16,530742520),n=_(n,r=g(r,i,a,n,e[o+2],23,-995338651),i,a,e[o+0],6,-198630844),a=_(a,n,r,i,e[o+7],10,1126891415),i=_(i,a,n,r,e[o+14],15,-1416354905),r=_(r,i,a,n,e[o+5],21,-57434055),n=_(n,r,i,a,e[o+12],6,1700485571),a=_(a,n,r,i,e[o+3],10,-1894986606),i=_(i,a,n,r,e[o+10],15,-1051523),r=_(r,i,a,n,e[o+1],21,-2054922799),n=_(n,r,i,a,e[o+8],6,1873313359),a=_(a,n,r,i,e[o+15],10,-30611744),i=_(i,a,n,r,e[o+6],15,-1560198380),r=_(r,i,a,n,e[o+13],21,1309151649),n=_(n,r,i,a,e[o+4],6,-145523070),a=_(a,n,r,i,e[o+11],10,-1120210379),i=_(i,a,n,r,e[o+2],15,718787259),r=_(r,i,a,n,e[o+9],21,-343485551),n=v(n,s),r=v(r,c),i=v(i,l),a=v(a,u)}return[n,r,i,a]}function p(e,t,n,r,i,a){return v((t=v(v(t,e),v(r,a)))<<i|t>>>32-i,n)}function m(e,t,n,r,i,a,o){return p(t&n|~t&r,e,t,i,a,o)}function h(e,t,n,r,i,a,o){return p(t&r|n&~r,e,t,i,a,o)}function g(e,t,n,r,i,a,o){return p(t^n^r,e,t,i,a,o)}function _(e,t,n,r,i,a,o){return p(n^(t|~r),e,t,i,a,o)}function v(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}t.exports=function(e){return d.hash(e,f,16)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,t,n){(function(e,n,r,i,a,o,s,c,l){var u;t.exports=u||function(e){for(var t,n=Array(e),r=0;r<e;r++)!(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{buffer:3,lYpoI2:11}],8:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var d=e(`./helpers`);function f(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n,r,i,a=Array(80),o=1732584193,s=-271733879,c=-1732584194,l=271733878,u=-1009589776,d=0;d<e.length;d+=16){for(var f=o,h=s,g=c,_=l,v=u,y=0;y<80;y++){a[y]=y<16?e[d+y]:m(a[y-3]^a[y-8]^a[y-14]^a[y-16],1);var b=p(p(m(o,5),(b=s,r=c,i=l,(n=y)<20?b&r|~b&i:!(n<40)&&n<60?b&r|b&i|r&i:b^r^i)),p(p(u,a[y]),(n=y)<20?1518500249:n<40?1859775393:n<60?-1894007588:-899497514)),u=l,l=c,c=m(s,30),s=o,o=b}o=p(o,f),s=p(s,h),c=p(c,g),l=p(l,_),u=p(u,v)}return[o,s,c,l,u]}function p(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function m(e,t){return e<<t|e>>>32-t}t.exports=function(e){return d.hash(e,f,20,!0)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){function d(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function f(e,t){var n,r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],a=Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var o,s,c=0;c<e.length;c+=16){for(var l=i[0],u=i[1],f=i[2],p=i[3],g=i[4],_=i[5],v=i[6],y=i[7],b=0;b<64;b++)a[b]=b<16?e[b+c]:d(d(d((s=a[b-2],m(s,17)^m(s,19)^h(s,10)),a[b-7]),(s=a[b-15],m(s,7)^m(s,18)^h(s,3))),a[b-16]),n=d(d(d(d(y,m(s=g,6)^m(s,11)^m(s,25)),g&_^~g&v),r[b]),a[b]),o=d(m(o=l,2)^m(o,13)^m(o,22),l&u^l&f^u&f),y=v,v=_,_=g,g=d(p,n),p=f,f=u,u=l,l=d(n,o);i[0]=d(l,i[0]),i[1]=d(u,i[1]),i[2]=d(f,i[2]),i[3]=d(p,i[3]),i[4]=d(g,i[4]),i[5]=d(_,i[5]),i[6]=d(v,i[6]),i[7]=d(y,i[7])}return i}var p=e(`./helpers`),m=function(e,t){return e>>>t|e<<32-t},h=function(e,t){return e>>>t};t.exports=function(e){return p.hash(e,f,32,!0)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,n){(function(e,t,r,i,a,o,s,c,l){n.read=function(e,t,n,r,i){var a,o,s=8*i-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,i=e[t+d];for(d+=f,a=i&(1<<-u)-1,i>>=-u,u+=s;0<u;a=256*a+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;0<u;o=256*o+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else{if(a===c)return o?NaN:1/0*(i?-1:1);o+=2**r,a-=l}return(i?-1:1)*o*2**(a-r)},n.write=function(e,t,n,r,i,a){var o,s,c=8*a-i-1,l=(1<<c)-1,u=l>>1,d=i===23?2**-24-2**-77:0,f=r?0:a-1,p=r?1:-1,a=+(t<0||t===0&&1/t<0);for(t=Math.abs(t),isNaN(t)||t===1/0?(s=+!!isNaN(t),o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(r=2**-o)<1&&(o--,r*=2),2<=(t+=1<=o+u?d/r:d*2**(1-u))*r&&(o++,r/=2),l<=o+u?(s=0,o=l):1<=o+u?(s=(t*r-1)*2**i,o+=u):(s=t*2**(u-1)*2**i,o=0));8<=i;e[n+f]=255&s,f+=p,s/=256,i-=8);for(o=o<<i|s,c+=i;0<c;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*a}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/ieee754/index.js`,`/node_modules/gulp-browserify/node_modules/ieee754`)},{buffer:3,lYpoI2:11}],11:[function(e,t,n){(function(e,n,r,i,a,o,s,c,l){var u,d,f;function p(){}(e=t.exports={}).nextTick=(d=typeof window<`u`&&window.setImmediate,f=typeof window<`u`&&window.postMessage&&window.addEventListener,d?function(e){return window.setImmediate(e)}:f?(u=[],window.addEventListener(`message`,function(e){var t=e.source;t!==window&&t!==null||e.data!==`process-tick`||(e.stopPropagation(),0<u.length&&u.shift()())},!0),function(e){u.push(e),window.postMessage(`process-tick`,`*`)}):function(e){setTimeout(e,0)}),e.title=`browser`,e.browser=!0,e.env={},e.argv=[],e.on=p,e.addListener=p,e.once=p,e.off=p,e.removeListener=p,e.removeAllListeners=p,e.emit=p,e.binding=function(e){throw Error(`process.binding is not supported`)},e.cwd=function(){return`/`},e.chdir=function(e){throw Error(`process.chdir is not supported`)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/process/browser.js`,`/node_modules/gulp-browserify/node_modules/process`)},{buffer:3,lYpoI2:11}]},{},[1])(1)})}))(),1);u(),u(),u();var Tm=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},Em=e=>Array.isArray(e)?[...e]:Tm(e)?s({},e):{};function Dm(e,t,n){let r=t.split(`.`),i=s({},e),a=i;for(let e=0;e<r.length;e++){let[t,i]=r[e].replace(`]`,``).split(`[`),o=e===r.length-1;if(i!==void 0){a[t]=Array.isArray(a[t])?[...a[t]]:[];let e=Number(i);if(o){a[t][e]=n;continue}a[t][e]=Em(a[t][e]),a=a[t][e];continue}if(o){a[t]=n;continue}a[t]=Em(a[t]),a=a[t]}return i}u(),u();var Om={Button:`_Button_oe4qj_1`,"Button--medium":`_Button--medium_oe4qj_34`,"Button--large":`_Button--large_oe4qj_62`,"Button-icon":`_Button-icon_oe4qj_89`,"Button--primary":`_Button--primary_oe4qj_93`,"Button--disabled":`_Button--disabled_oe4qj_123`,"Button--secondary":`_Button--secondary_oe4qj_135`,"Button--flush":`_Button--flush_oe4qj_171`,"Button--fullWidth":`_Button--fullWidth_oe4qj_179`,"Button-spinner":`_Button-spinner_oe4qj_184`};u();var km=/^(data-.*)$/,Am=e=>{let t={};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&km.test(n)&&(t[n]=e[n]);return t},jm=f(`Button`,Om),Mm=e=>{var t=e,{children:n,href:r,onClick:i,variant:a=`primary`,type:o,disabled:l,tabIndex:u,newTab:f,fullWidth:p,icon:m,size:h=`medium`,loading:g=!1}=t,v=d(t,[`children`,`href`,`onClick`,`variant`,`type`,`disabled`,`tabIndex`,`newTab`,`fullWidth`,`icon`,`size`,`loading`]);let[y,b]=(0,L.useState)(g);(0,L.useEffect)(()=>b(g),[g]);let x=r?`a`:o?`button`:`span`,S=Am(v);return(0,R.jsxs)(x,c(s({className:jm({primary:a===`primary`,secondary:a===`secondary`,disabled:l,fullWidth:p,[h]:!0}),onClick:e=>{i&&(b(!0),Promise.resolve(i(e)).then(()=>{b(!1)}))},type:o,disabled:l||y,tabIndex:u,target:f?`_blank`:void 0,rel:f?`noreferrer`:void 0,href:r},S),{children:[m&&(0,R.jsx)(`div`,{className:jm(`icon`),children:m}),n,y&&(0,R.jsx)(`div`,{className:jm(`spinner`),children:(0,R.jsx)(_,{size:14})})]}))};u(),u();var Nm={InputWrapper:`_InputWrapper_1e4q5_2`,"Input-label":`_Input-label_1e4q5_21`,"Input-labelIcon":`_Input-labelIcon_1e4q5_33`,"Input-disabledIcon":`_Input-disabledIcon_1e4q5_40`,"Input-labelEndIcon":`_Input-labelEndIcon_1e4q5_45`,"Input-input":`_Input-input_1e4q5_56`,"Input-select":`_Input-select_1e4q5_88`,"Input-selectIcon":`_Input-selectIcon_1e4q5_98`,Input:`_Input_1e4q5_2`,"Input--readOnly":`_Input--readOnly_1e4q5_138`,"Input-radioGroupItems":`_Input-radioGroupItems_1e4q5_177`,"Input-radio":`_Input-radio_1e4q5_177`,"Input-radioInner":`_Input-radioInner_1e4q5_206`,"Input-radioInput":`_Input-radioInput_1e4q5_288`,"Input-checkboxGroupItems":`_Input-checkboxGroupItems_1e4q5_318`,"Input-checkbox":`_Input-checkbox_1e4q5_318`,"Input-checkboxInput":`_Input-checkboxInput_1e4q5_338`},Pm=f(`Input`,Nm),Fm=({children:e,icon:t,endIcon:n,label:r,el:i=`label`,readOnly:a,className:o})=>{let s=i,c=x(`field-readonly`);return(0,R.jsxs)(s,{className:o,children:[(0,R.jsxs)(`div`,{className:Pm(`label`),children:[t?(0,R.jsx)(`div`,{className:Pm(`labelIcon`),children:t}):(0,R.jsx)(R.Fragment,{}),r,a&&(0,R.jsx)(`div`,{className:Pm(`disabledIcon`),title:c,children:(0,R.jsx)(pe,{size:`12`})}),n?(0,R.jsx)(`div`,{className:Pm(`labelEndIcon`),children:n}):(0,R.jsx)(R.Fragment,{})]}),e]})},Im=({children:e,icon:t,endIcon:n,label:r,el:i=`label`,readOnly:a})=>{let o=I(e=>e.overrides),s=(0,L.useMemo)(()=>o.fieldLabel||Fm,[o]);return r?(0,R.jsx)(s,{label:r,icon:t,endIcon:n,className:Pm({readOnly:a}),readOnly:a,el:i,children:e}):(0,R.jsx)(R.Fragment,{children:e})};u(),u();var Lm=(...e)=>[...e].filter(Boolean).join(` `);u();var Rm=()=>{if(L.useId!==void 0)return L.useId();let[e]=(0,L.useState)(nt());return e};u();var zm={"FieldGroup-box":`_FieldGroup-box_gwfyv_1`,"FieldGroup-box--card":`_FieldGroup-box--card_gwfyv_9`,"FieldGroup-fieldset":`_FieldGroup-fieldset_gwfyv_16`,"FieldGroup-box--flush":`_FieldGroup-box--flush_gwfyv_42`,"FieldGroup--collapsed":`_FieldGroup--collapsed_gwfyv_85`,"FieldGroup--expanded":`_FieldGroup--expanded_gwfyv_90`,"FieldGroup-toggle":`_FieldGroup-toggle_gwfyv_94`,"FieldGroup--flush":`_FieldGroup--flush_gwfyv_119`,"FieldGroup-toggleIcon":`_FieldGroup-toggleIcon_gwfyv_138`};u();var Bm=({fieldGroupKey:e,defaultExpanded:t=!1})=>{let n=I(e=>e.dispatch),r=S(),i=I(t=>t.state.ui.expandedFieldGroups[e]),[a,o]=(0,L.useState)(t);return{expanded:r?i??t:a,toggleExpanded:(0,L.useCallback)(()=>{if(!r){o(e=>!e);return}n({type:`setUi`,ui:n=>({expandedFieldGroups:c(s({},n.expandedFieldGroups),{[e]:!(n.expandedFieldGroups[e]??t)})})})},[r,n,e,t]),unsetExpanded:(0,L.useCallback)(()=>{r&&n({type:`setUi`,ui:t=>{let n=s({},t.expandedFieldGroups);return delete n[e],{expandedFieldGroups:n}}})},[r,n,e])}},Vm=f(`FieldGroup`,zm),Hm=f(`FieldGroup-box`,zm),Um=({variant:e=`flush`,collapsible:t=!1,label:n,icon:r,children:i,Label:a=Im,readOnly:o,expanded:s=!1,onToggle:c})=>{let l=Rm();if(!L.Children.toArray(i).some(e=>typeof e!=`string`||e.trim()!==``))return null;let u=(0,R.jsx)(`div`,{id:l,className:Hm({flush:e===`flush`,card:e===`card`}),children:(0,R.jsx)(`fieldset`,{className:Vm(`fieldset`),children:i})});if(t){let t=(0,R.jsx)(`span`,{className:Vm(`toggleIcon`),children:(0,R.jsx)(Te,{size:16})});return(0,R.jsxs)(`div`,{className:Vm({collapsed:!s,expanded:s,flush:e===`flush`}),"data-puck-field-group-collapsible":!0,children:[(0,R.jsx)(`button`,{type:`button`,className:Vm(`toggle`),"aria-expanded":s,"aria-controls":s?l:void 0,onClick:()=>c?.(!s),children:n?(0,R.jsx)(Im,{label:n,icon:r,endIcon:t,el:`div`,readOnly:o}):(0,R.jsx)(Fm,{label:``,icon:r,endIcon:t,el:`div`,readOnly:o})}),s&&u]})}return(0,R.jsx)(`div`,{className:Vm({flush:e===`flush`}),children:(0,R.jsx)(a,{label:n,icon:r,el:`div`,readOnly:o,children:u})})},Wm=({children:e,className:t,collapsible:n=!1})=>(0,R.jsx)(`div`,{className:Lm(Vm(`item`),t),"data-puck-field-group-collapsible":n||void 0,children:e});u(),u(),u(),u(),u();var Gm={ArrayField:`_ArrayField_xob4n_5`,"ArrayField--isDraggingFrom":`_ArrayField--isDraggingFrom_xob4n_30`,"ArrayField-addButton":`_ArrayField-addButton_xob4n_38`,"ArrayField--hasItems":`_ArrayField--hasItems_xob4n_58`,"ArrayField-inner":`_ArrayField-inner_xob4n_93`,ArrayFieldItem:`_ArrayFieldItem_xob4n_101`,"ArrayFieldItem--isDragging":`_ArrayFieldItem--isDragging_xob4n_110`,"ArrayFieldItem--isExpanded":`_ArrayFieldItem--isExpanded_xob4n_114`,"ArrayFieldItem-summary":`_ArrayFieldItem-summary_xob4n_132`,"ArrayFieldItem--noFields":`_ArrayFieldItem--noFields_xob4n_167`,"ArrayField--addDisabled":`_ArrayField--addDisabled_xob4n_176`,"ArrayFieldItem-body":`_ArrayFieldItem-body_xob4n_228`,"ArrayFieldItem-fieldset":`_ArrayFieldItem-fieldset_xob4n_237`,"ArrayFieldItem-rhs":`_ArrayFieldItem-rhs_xob4n_253`,"ArrayFieldItem-actions":`_ArrayFieldItem-actions_xob4n_259`};u(),u();function Km(e,t){let n=(0,L.useContext)(e);if(!n)throw Error(`useContextStore must be used inside context`);return F(n,jt(t))}function qm(e){return({children:t,value:n})=>{let[r]=(0,L.useState)(()=>w(()=>n));return(0,R.jsx)(e.Provider,{value:r,children:t})}}function Jm(e){let t=(0,L.createContext)(w(ne(()=>e)));return{ctx:t,Provider:qm(t)}}var Ym=Jm({}),Xm=()=>(0,L.useContext)(Ym.ctx);function Zm(e){let t=(0,L.useContext)(Ym.ctx);if(!t)throw Error(`useContextStore must be used inside context`);return F(t,jt(e))}u(),u();var Qm=f(`DragIcon`,{DragIcon:`_DragIcon_5e515_1`,"DragIcon--disabled":`_DragIcon--disabled_5e515_10`}),$m=({isDragDisabled:e})=>(0,R.jsx)(`div`,{className:Qm({disabled:e}),children:(0,R.jsx)(`svg`,{viewBox:`0 0 20 20`,width:`12`,fill:`currentColor`,children:(0,R.jsx)(`path`,{d:`M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z`})})});u(),u(),u();var eh=e=>{let{event:t,source:n}=e,r=t?.target??null;return!!(n?.handle&&oc(r)&&n.handle.contains(r))},{Delay:th,Distance:nh}=Fu,rh=[new th({value:200,tolerance:10})],ih=[new th({value:200,tolerance:10}),new nh({value:5})],ah=({other:e=ih,mouse:t,touch:n=rh,activatorElements:r}={touch:rh,other:ih})=>{let[i]=(0,L.useState)(()=>[zu.configure({activatorElements:r,activationConstraints(r,i){let{pointerType:a}=r;return a===`mouse`&&eh({event:r,source:i})?typeof t==`function`?t(r,i):t:a===`touch`?typeof n==`function`?n(r,i):n:typeof e==`function`?e(r,i):e}})]);return i};u(),u(),u();var oh=`increasing`,sh=(e,t)=>{let{dragOperation:n,droppable:r}=e,{shape:i}=r,{position:a}=n,o=n.shape?.current;if(!o||!i)return null;let s=i.center,c=Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2),l=Math.sqrt((s.x-a.current.x)**2+(s.y-a.current.y)**2);return oh=l===c?oh:l<c?`decreasing`:`increasing`,o.center,r.id.toString(),oh===`decreasing`?{id:r.id,value:1,type:ga.Collision}:null};u();var ch=(e,t)=>e===`dynamic`?Math.abs(t.y)>Math.abs(t.x)?t.y===0?null:t.y>0?`down`:`up`:t.x===0?null:t.x>0?`right`:`left`:e===`x`?t.x===0?null:t.x>0?`right`:`left`:t.y===0?null:t.y>0?`down`:`up`;u();var lh=(e,t,n,r=0)=>{let i=e.boundingRectangle,a=t.center;if(n===`down`){let e=r*t.boundingRectangle.height;return i.bottom>=a.y+e}if(n===`up`){let e=r*t.boundingRectangle.height;return i.top<a.y-e}if(n===`left`){let e=r*t.boundingRectangle.width;return a.x-e>=i.left}let o=r*t.boundingRectangle.width;return i.right-o>=a.x};u();var uh=10,dh={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null},fh=(e,t=`dynamic`)=>(dh.current=e,dh.delta={x:e.x-dh.previous.x,y:e.y-dh.previous.y},dh.direction=ch(t,dh.delta)||dh.direction,(Math.abs(dh.delta.x)>uh||Math.abs(dh.delta.y)>uh)&&(dh.previous=Or.from(e)),dh);u();var ph=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/Or.distance(t.shape.center,n),type:ga.PointerIntersection,priority:ha.High}:null},mh=e=>{let{dragOperation:t,droppable:n}=e,{shape:r,position:i}=t;if(!n.shape)return null;let a=r?kr.from(r.current.boundingRectangle).corners:void 0,o=kr.from(n.shape.boundingRectangle).corners.reduce((e,t,n)=>e+Or.distance(Or.from(t),a?.[n]??i.current),0)/4;return{id:n.id,value:1/o,type:ga.Collision,priority:ha.Normal}};u();var hh=w(()=>({fallbackEnabled:!1})),gh=``,_h=(e,t=.05,n=()=>!1)=>r=>{let{dragOperation:i,droppable:a}=r,{position:o}=i,l=i.shape?.current,{shape:u}=a;if(!l||!u)return null;if(n()&&o?.current){let{x:e,y:t}=l.center,{left:n,top:r,width:i,height:a}=l.boundingRectangle;l=new kr(n+(o.current.x-e),r+(o.current.y-t),i,a)}let{center:d}=l,{fallbackEnabled:f}=hh.getState(),p=fh(o.current,e),m={direction:p.direction},{center:h}=u,g=lh(l,u,p.direction,t);if(i.source?.id===a.id){let e=sh(r,p.previous);if(a.id.toString(),e)return c(s({},e),{priority:ha.Highest,data:m})}let _=l.intersectionArea(u),v=_/u.area;if(_&&g){a.id.toString(),p.direction;let e={id:a.id,value:v,priority:ha.High,type:ga.Collision},t=gh===a.id;return gh=``,c(s({},e),{id:t?`flush`:e.id,data:m})}if(f&&i.source?.id!==a.id){let t=u.boundingRectangle.right>l.boundingRectangle.left&&u.boundingRectangle.left<l.boundingRectangle.right,n=u.boundingRectangle.bottom>l.boundingRectangle.top&&u.boundingRectangle.top<l.boundingRectangle.bottom;if(e===`y`&&t||n){let t=mh(r);if(t)return m.direction=ch(e,{x:l.center.x-(a.shape?.center.x||0),y:l.center.y-(a.shape?.center.y||0)}),_?(a.id.toString(),gh=a.id,c(s({},t),{priority:ha.Low,data:m})):(a.id.toString(),c(s({},t),{priority:ha.Lowest,data:m}))}}return a.id.toString(),null};u();var vh=(e,t=`ltr`)=>e===`up`||t===`ltr`&&e===`left`||t===`rtl`&&e===`right`?`before`:`after`,yh=({position:e,sourceIndex:t,targetIndex:n,isSameZone:r})=>{let i=n;return r&&i>=t&&--i,e===`after`&&(i+=1),i},bh=({children:e,onDragStart:t,onDragEnd:n,onMove:r})=>{let i=ah({mouse:[new Fu.Distance({value:5})]});return(0,R.jsx)(Pd,{sensors:i,onDragStart:e=>t(e.operation.source?.id.toString()??``),onDragOver:(e,t)=>{e.preventDefault();let{operation:n}=e,{source:i,target:a}=n;if(!i||!a)return;let o=i.data.index,s=a.data.index,c=t.collisionObserver.collisions[0]?.data;o!==s&&i.id!==a.id&&r({source:o,target:yh({position:vh(c?.direction),sourceIndex:o,targetIndex:s,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{n()},250)},children:e})},xh=({id:e,index:t,disabled:n,children:r,type:i=`item`})=>{let{ref:a,isDragging:o,isDropping:s,handleRef:c}=Mp({id:e,type:i,index:t,disabled:n,data:{index:t},collisionDetector:_h(`y`)});return r({isDragging:o,isDropping:s,ref:a,handleRef:c})};u();var Sh=(0,L.createContext)({}),Ch=()=>{let e=(0,L.useContext)(Sh);return c(s({},e),{readOnlyFields:e.readOnlyFields||{}})},wh=({children:e,name:t,subName:n,wildcardName:r=t,readOnlyFields:i})=>{let a=`${t}.${n}`,o=`${r}.${n}`,l=(0,L.useMemo)(()=>Object.keys(i).reduce((e,n)=>{if(n.indexOf(a)>-1||n.indexOf(o)>-1){let a=new RegExp(`^(${t}|${r}).`.replace(/\[/g,`\\[`).replace(/\]/g,`\\]`).replace(/\./g,`\\.`).replace(/\*/g,`\\*`)),o=n.replace(a,``);return c(s({},e),{[o]:i[n]})}return e},{}),[t,n,r,i]);return(0,R.jsx)(Sh.Provider,{value:{readOnlyFields:l,localName:n},children:e})};u();var Th=(e,t)=>t.split(`.`).reduce((e,t)=>{if(!e)return;let[n,r]=t.replace(`]`,``).split(`[`),i=e[n];return r&&i?i[parseInt(r)]:i},e);u(),u();var Eh=(e,t)=>t?e?.[t]===null:!1,Dh=(e,t)=>!t||t.type===`slot`||Eh(e,t.type)?!1:t.visible??!0;u();var Oh=(0,L.memo)(({field:e,id:t,index:n,name:r,subName:i,localName:a,onChange:o,forceReadOnly:l})=>{let u=n===void 0?r:`${r}[${n}]`,d=r?`${u}.${i}`:i,f=n===void 0?a??i:`${a}[${n}]`,p=n===void 0?a:`${a}[*]`,m=`${f}.${i}`,h=`${p}.${i}`,{readOnlyFields:g}=Ch(),_=l||(g[d]===void 0?g[h]:g[m]),v=e.label||i;return(0,R.jsx)(wh,{name:f,wildcardName:p,subName:i,readOnlyFields:g,children:(0,R.jsx)(fg,{name:d,label:v,id:t,readOnly:_,field:c(s({},e),{label:v}),onChange:(e,t)=>{o(e,t,i)}})})}),kh=f(`ArrayField`,Gm),Ah=f(`ArrayFieldItem`,Gm),jh=(0,L.memo)(({index:e,originalIndex:t,field:n,name:r})=>{let i=Zm(t=>Th(t,`${[r]}[${e}]`)),a=x(`field-arrayitem-summary`,{index:t});return(0,L.useMemo)(()=>i&&n.getItemSummary?n.getItemSummary(i,e):a,[i,n,t,e,a])}),Mh=(0,L.memo)(({id:e,arrayId:t,index:n,dragIndex:r,originalIndex:i,field:a,onChange:o,onToggleExpand:s,readOnly:c,actions:l,name:u,localName:d})=>{let f=I(e=>e.overrides.fieldTypes),p=I(n=>n.state.ui.arrayState[t]?.openId===e),m=I(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),h=(0,L.useMemo)(()=>a.arrayFields?Object.values(a.arrayFields).some(e=>Dh(f,e)):!1,[a.arrayFields,f]);return(0,R.jsx)(xh,{id:e,index:r,disabled:c,children:({isDragging:t,ref:r,handleRef:f})=>(0,R.jsxs)(`div`,{ref:r,className:Ah({isExpanded:p&&h,isDragging:t,noFields:!h}),children:[(0,R.jsxs)(`div`,{ref:f,onClick:n=>{t||(n.preventDefault(),n.stopPropagation(),h&&s(e,p))},className:Ah(`summary`),children:[(0,R.jsx)(jh,{index:n,originalIndex:i,field:a,name:u}),(0,R.jsxs)(`div`,{className:Ah(`rhs`),children:[!c&&(0,R.jsx)(`div`,{className:Ah(`actions`),children:l}),(0,R.jsx)(`div`,{children:(0,R.jsx)($m,{})})]})]}),(0,R.jsx)(`div`,{className:Ah(`body`),children:p&&h&&(0,R.jsx)(`fieldset`,{className:Ah(`fieldset`),children:Object.keys(a.arrayFields).map(t=>{let r=a.arrayFields[t];return(0,R.jsx)(Oh,{id:`${e}_${t}`,name:u,index:n,subName:t,localName:d,field:r,onChange:o,forceReadOnly:!m},`${e}_${t}_${n}`)})})})]})})}),Nh=({field:e,onChange:t,id:n,name:r=n,label:i,labelIcon:a,readOnly:o,Label:l=e=>(0,R.jsx)(`div`,s({},e))})=>{let u=I(e=>e.setUi),d=b(),f=Xm(),{localName:p=r}=Ch(),m=()=>Th(f.getState(),r)??[],h=(0,L.useCallback)(()=>{let{state:e}=d.getState(),t=e.ui.arrayState[n];if(t?.items?.length)return t;let r=m();return{items:Array.from(r||[]).map((e,t)=>({_originalIndex:t,_currentIndex:t,_arrayId:`${n}-${t}`})),openId:``}},[d,n,m,r]),g=Zm(()=>m().length),_=(0,L.useMemo)(h,[h]),v=I(e=>e.state.ui.arrayState[n]??_),y=b(),S=(0,L.useCallback)(e=>{let t=y.getState().state;return{arrayState:c(s({},t.ui.arrayState),{[n]:s(s({},h()),e)})}},[y]),C=(0,L.useCallback)(()=>h().items.reduce((e,t)=>t._originalIndex>e?t._originalIndex:e,-1),[]),w=(0,L.useCallback)(e=>{let t=C(),r=h(),i=Array.from(e||[]).map((e,i)=>{let a=r.items[i],o={_originalIndex:a?._originalIndex??t+1,_currentIndex:a?._currentIndex??i,_arrayId:r.items[i]?._arrayId||`${n}-${t+1}`};return o._originalIndex>t&&(t=o._originalIndex),o});return c(s({},r),{items:i})},[]),[E,D]=(0,L.useState)(``),O=!!E,k=(0,L.useRef)([]);(0,L.useEffect)(()=>{k.current=m()},[]);let ee=(0,L.useCallback)(t=>{if(e.type!==`array`||!e.arrayFields)return;let n=y.getState().config;return ke({value:t,fields:e.arrayFields,mappers:{slot:({value:e})=>e.map(e=>ge(e,n,!0))},config:n})},[y,e]),A=(0,L.useCallback)(()=>{let e=h(),t=e.items.map((e,t)=>c(s({},e),{_currentIndex:t})),r=y.getState().state,i={arrayState:c(s({},r.ui.arrayState),{[n]:c(s({},e),{items:t})})};u(i,!1)},[]),te=(0,L.useCallback)(e=>{let n=w(e);u(S(n),!1),t(e)},[w,u,S,t]);(0,L.useEffect)(()=>{let e=w(m());u(S(e),!1)},[g]);let j=x(`field-arrayitem-duplicate`),N=x(`field-arrayitem-delete`);if(e.type!==`array`||!e.arrayFields)return null;let P=e.max!==void 0&&v?.items.length>=e.max||o;return(0,R.jsx)(l,{label:i||r,icon:a||(0,R.jsx)(M,{size:16}),el:`div`,readOnly:o,children:(0,R.jsx)(bh,{onDragStart:e=>{k.current=m(),D(e),A()},onDragEnd:()=>{D(``),t(k.current);let e=f.getState();f.setState(Dm(e,r,k.current)),A()},onMove:e=>{let t=h();if(t.items[e.source]._arrayId!==E)return;let r=tt(k.current,e.source,e.target),i=tt(t.items,e.source,e.target),a=y.getState().state,o={arrayState:c(s({},a.ui.arrayState),{[n]:c(s({},t),{items:i})})};u(o,!1),k.current=r},children:(0,R.jsxs)(`div`,{className:kh({hasItems:g>0,addDisabled:P}),children:[v.items.length>0&&(0,R.jsx)(`div`,{className:kh(`inner`),"data-dnd-container":!0,children:v.items.map((i,a)=>{let{_arrayId:l=`${n}-${a}`,_originalIndex:d=a,_currentIndex:f=a}=i;return(0,R.jsx)(Mh,{index:f,dragIndex:a,originalIndex:d,arrayId:n,id:l,readOnly:o,field:e,name:r,localName:p,onChange:(e,n,r)=>{let i=m(),o=Array.from(i||[])[a]||{};t(we(i,a,c(s({},o),{[r]:e})),n)},onToggleExpand:(e,t)=>{u(S(t?{openId:``}:{openId:e}))},actions:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{className:Ah(`action`),children:(0,R.jsx)(Ie,{type:`button`,disabled:!!P,onClick:e=>{e.stopPropagation();let t=[...m()||[]],n=ee(t[a]);t.splice(a,0,n),te(t)},title:j,children:(0,R.jsx)(Pe,{size:16})})}),(0,R.jsx)(`div`,{className:Ah(`action`),children:(0,R.jsx)(Ie,{type:`button`,disabled:e.min!==void 0&&e.min>=v.items.length,onClick:e=>{e.stopPropagation();let t=[...m()||[]];t.splice(a,1),te(t)},title:N,children:(0,R.jsx)(Ee,{size:16})})})]})},l)})}),!P&&(0,R.jsx)(`button`,{type:`button`,className:kh(`addButton`),onClick:()=>{if(O)return;let t=m()||[],n=typeof e.defaultItemProps==`function`?e.defaultItemProps(t.length):e.defaultItemProps??{},r=T(ee(n),e.arrayFields),i=[...t,r];te(i)},children:(0,R.jsx)(ve,{size:21})})]})})})};u(),u();var Ph=(e,t=!0)=>Zm(n=>t?Th(n,e):void 0),Fh=f(`Input`,Nm),Ih=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let c=Ph(i);if(e.type!==`checkbox`||!e.options)return null;let l=Array.isArray(c)?c:[];return(0,R.jsx)(s,{icon:o||(0,R.jsx)(se,{size:16}),label:a||i,readOnly:n,el:`div`,children:(0,R.jsx)(`div`,{className:Fh(`checkboxGroupItems`),id:r,children:e.options.map(r=>(0,R.jsxs)(`label`,{className:Fh(`checkbox`),children:[(0,R.jsx)(`input`,{type:`checkbox`,className:Fh(`checkboxInput`),onChange:n=>{t(e.options.filter(e=>e.value===r.value?n.target.checked:l.includes(e.value)).map(e=>e.value))},disabled:n,checked:l.includes(r.value)}),(0,R.jsx)(`span`,{className:Fh(`checkboxLabel`),children:r.label||r.value?.toString()})]},r.label+JSON.stringify(r.value)))})})};u(),u(),u();var Lh=e=>I(t=>t.state.ui.field.focus===e),Rh=(e,t,{tracked:n=!0,fallback:r}={})=>{let i=Ph(e,n),a=Lh(e),[o,s]=(0,L.useState)(i),c=(0,L.useCallback)((e,...n)=>{s(e),t(e,...n)},[t]);return(0,L.useEffect)(()=>{n&&(a||s(i))},[n,a,i]),n?[r!==void 0&&o==null?r:o,c]:[void 0,t]},zh=f(`Input`,Nm),Bh=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let[c,l]=Rh(i,t,{fallback:``});return(0,R.jsx)(s,{label:a||i,icon:o||(0,R.jsxs)(R.Fragment,{children:[e.type===`text`&&(0,R.jsx)(Be,{size:16}),e.type===`number`&&(0,R.jsx)(y,{size:16})]}),readOnly:n,children:(0,R.jsx)(`input`,{className:zh(`input`),autoComplete:`off`,type:e.type,title:a||i,name:i,value:c,onChange:t=>{if(e.type===`number`){let n=Number(t.currentTarget.value);if(e.min!==void 0&&n<e.min||e.max!==void 0&&n>e.max)return;l(n)}else l(t.currentTarget.value)},readOnly:n,tabIndex:n?-1:void 0,id:r,min:e.type===`number`?e.min:void 0,max:e.type===`number`?e.max:void 0,placeholder:e.type===`text`||e.type===`number`?e.placeholder:void 0,step:e.type===`number`?e.step:void 0})})};u(),u(),u();var Vh={"ExternalInput-actions":`_ExternalInput-actions_143vl_1`,"ExternalInput-button":`_ExternalInput-button_143vl_5`,"ExternalInput--dataSelected":`_ExternalInput--dataSelected_143vl_34`,"ExternalInput--readOnly":`_ExternalInput--readOnly_143vl_41`,"ExternalInput-detachButton":`_ExternalInput-detachButton_143vl_48`,ExternalInput:`_ExternalInput_143vl_1`,ExternalInputModal:`_ExternalInputModal_143vl_118`,"ExternalInputModal-grid":`_ExternalInputModal-grid_143vl_128`,"ExternalInputModal--filtersToggled":`_ExternalInputModal--filtersToggled_143vl_139`,"ExternalInputModal-filters":`_ExternalInputModal-filters_143vl_144`,"ExternalInputModal-masthead":`_ExternalInputModal-masthead_143vl_164`,"ExternalInputModal-tableWrapper":`_ExternalInputModal-tableWrapper_143vl_173`,"ExternalInputModal-table":`_ExternalInputModal-table_143vl_173`,"ExternalInputModal-thead":`_ExternalInputModal-thead_143vl_189`,"ExternalInputModal-th":`_ExternalInputModal-th_143vl_189`,"ExternalInputModal-td":`_ExternalInputModal-td_143vl_204`,"ExternalInputModal-tr":`_ExternalInputModal-tr_143vl_210`,"ExternalInputModal-tbody":`_ExternalInputModal-tbody_143vl_217`,"ExternalInputModal--hasData":`_ExternalInputModal--hasData_143vl_244`,"ExternalInputModal-loadingBanner":`_ExternalInputModal-loadingBanner_143vl_248`,"ExternalInputModal--isLoading":`_ExternalInputModal--isLoading_143vl_265`,"ExternalInputModal-searchForm":`_ExternalInputModal-searchForm_143vl_269`,"ExternalInputModal-search":`_ExternalInputModal-search_143vl_269`,"ExternalInputModal-searchIcon":`_ExternalInputModal-searchIcon_143vl_306`,"ExternalInputModal-searchIconText":`_ExternalInputModal-searchIconText_143vl_333`,"ExternalInputModal-searchInput":`_ExternalInputModal-searchInput_143vl_343`,"ExternalInputModal-searchActions":`_ExternalInputModal-searchActions_143vl_358`,"ExternalInputModal-searchActionIcon":`_ExternalInputModal-searchActionIcon_143vl_371`,"ExternalInputModal-footerContainer":`_ExternalInputModal-footerContainer_143vl_375`,"ExternalInputModal-footer":`_ExternalInputModal-footer_143vl_375`,"ExternalInputModal-field":`_ExternalInputModal-field_143vl_388`};u(),u();var Hh=f(`Modal`,{Modal:`_Modal_g5xob_1`,"Modal--isOpen":`_Modal--isOpen_g5xob_15`,"Modal-inner":`_Modal-inner_g5xob_19`}),Uh=({children:e,onClose:t,isOpen:n})=>{let[r,i]=(0,L.useState)(null);return(0,L.useEffect)(()=>{i(document.getElementById(`puck-portal-root`))},[]),r?(0,dd.createPortal)((0,R.jsx)(`div`,{className:Hh({isOpen:n}),onClick:t,children:(0,R.jsx)(`div`,{className:Hh(`inner`),onClick:e=>e.stopPropagation(),children:e})}),r):(0,R.jsx)(`div`,{})};u(),u();var Wh=f(`Heading`,{Heading:`_Heading_97eh4_1`,"Heading--xxxxl":`_Heading--xxxxl_97eh4_12`,"Heading--xxxl":`_Heading--xxxl_97eh4_18`,"Heading--xxl":`_Heading--xxl_97eh4_22`,"Heading--xl":`_Heading--xl_97eh4_26`,"Heading--l":`_Heading--l_97eh4_30`,"Heading--m":`_Heading--m_97eh4_34`,"Heading--s":`_Heading--s_97eh4_38`,"Heading--xs":`_Heading--xs_97eh4_42`}),Gh=({children:e,rank:t,size:n=`m`})=>{let r=t?`h${t}`:`span`;return(0,R.jsx)(r,{className:Wh({[n]:!0}),children:e})};u();var Kh=f(`ExternalInput`,Vh),$=f(`ExternalInputModal`,Vh),qh=({count:e})=>{let t=x(`field-external-result-singular`,{count:e}),n=x(`field-external-result-plural`,{count:e});return(0,R.jsx)(`span`,{className:$(`footer`),children:e===1?t:n})},Jh={},Yh=({field:e,onChange:t,value:n=null,name:r,id:i,readOnly:a})=>{let{mapProp:o=e=>e,mapRow:u=e=>e,filterFields:d}=e||{},{enabled:f}=e.cache??{enabled:!0},[p,h]=(0,L.useState)([]),[g,v]=(0,L.useState)(!1),[y,b]=(0,L.useState)(!0),S=!!d,[C,w]=(0,L.useState)(e.initialFilters||{}),[T,D]=(0,L.useState)(S),k=(0,L.useMemo)(()=>p.map(u),[p]),ee=(0,L.useMemo)(()=>{let e=new Set;for(let t of k)for(let n of Object.keys(t))(typeof t[n]==`string`||typeof t[n]==`number`||(0,L.isValidElement)(t[n]))&&e.add(n);return Array.from(e)},[k]),[A,te]=(0,L.useState)(e.initialQuery||``),j=(0,L.useCallback)((t,n)=>l(null,null,function*(){b(!0);let r=`${i}-${t}-${JSON.stringify(n)}`,a;a=f&&Jh[r]?Jh[r]:yield e.fetchList({query:t,filters:n}),a&&(h(a),b(!1),f&&(Jh[r]=a))}),[i,e]),M=(0,L.useCallback)(t=>e.renderFooter?e.renderFooter(t):(0,R.jsx)(qh,{count:t.items.length}),[e.renderFooter]);(0,L.useEffect)(()=>{j(A,C)},[]);let N=x(`field-external-item`),P=x(`field-external-search`),ne=x(`field-external-togglefilters`),re=x(`field-external-selectdata`);return(0,R.jsxs)(`div`,{className:Kh({dataSelected:!!n,modalVisible:g,readOnly:a}),id:i,children:[(0,R.jsxs)(`div`,{className:Kh(`actions`),children:[(0,R.jsx)(`button`,{type:`button`,onClick:()=>v(!0),className:Kh(`button`),disabled:a,children:n?e.getItemSummary?e.getItemSummary(n):N:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(O,{size:`16`}),(0,R.jsx)(`span`,{children:e.placeholder})]})}),n&&(0,R.jsx)(`button`,{type:`button`,className:Kh(`detachButton`),onClick:()=>{t(null)},disabled:a,children:(0,R.jsx)(E,{size:16})})]}),(0,R.jsx)(Uh,{onClose:()=>v(!1),isOpen:g,children:(0,R.jsxs)(`form`,{className:$({isLoading:y,loaded:!y,hasData:k.length>0,filtersToggled:T}),onSubmit:e=>{e.preventDefault(),e.stopPropagation(),j(A,C)},children:[(0,R.jsx)(`div`,{className:$(`masthead`),children:e.showSearch?(0,R.jsxs)(`div`,{className:$(`searchForm`),children:[(0,R.jsxs)(`label`,{className:$(`search`),children:[(0,R.jsx)(`span`,{className:$(`searchIconText`),children:P}),(0,R.jsx)(`div`,{className:$(`searchIcon`),children:(0,R.jsx)(m,{size:`18`})}),(0,R.jsx)(`input`,{className:$(`searchInput`),name:`q`,type:`search`,placeholder:e.placeholder,onChange:e=>{te(e.currentTarget.value)},autoComplete:`off`,value:A})]}),(0,R.jsxs)(`div`,{className:$(`searchActions`),children:[(0,R.jsx)(Mm,{type:`submit`,loading:y,fullWidth:!0,children:P}),S&&(0,R.jsx)(`div`,{className:$(`searchActionIcon`),children:(0,R.jsx)(Ie,{type:`button`,title:ne,onClick:e=>{e.preventDefault(),e.stopPropagation(),D(!T)},children:(0,R.jsx)(Ue,{size:20})})})]})]}):(0,R.jsx)(Gh,{rank:`2`,size:`xs`,children:e.placeholder||re})}),(0,R.jsxs)(`div`,{className:$(`grid`),children:[S&&(0,R.jsx)(`div`,{className:$(`filters`),children:S&&Object.keys(d).map(e=>{let t=d[e];return(0,R.jsx)(`div`,{className:$(`field`),children:(0,R.jsx)(Fm,{label:t.label||e,children:(0,R.jsx)(mg,{field:t,id:`external_field_${e}_filter`,value:C[e],onChange:t=>{w(n=>{let r=c(s({},n),{[e]:t});return j(A,r),r})}})})},e)})}),(0,R.jsxs)(`div`,{className:$(`tableWrapper`),children:[(0,R.jsxs)(`table`,{className:$(`table`),children:[(0,R.jsx)(`thead`,{className:$(`thead`),children:(0,R.jsx)(`tr`,{className:$(`tr`),children:ee.map(e=>(0,R.jsx)(`th`,{className:$(`th`),style:{textAlign:`left`},children:e},e))})}),(0,R.jsx)(`tbody`,{className:$(`tbody`),children:k.map((e,n)=>(0,R.jsx)(`tr`,{style:{whiteSpace:`nowrap`},className:$(`tr`),onClick:()=>{t(o(p[n])),v(!1)},children:ee.map(t=>(0,R.jsx)(`td`,{className:$(`td`),children:e[t]},t))},n))})]}),(0,R.jsx)(`div`,{className:$(`loadingBanner`),children:(0,R.jsx)(_,{size:24})})]})]}),(0,R.jsx)(`div`,{className:$(`footerContainer`),children:(0,R.jsx)(M,{items:k})})]})})]})},Xh=({field:e,onChange:t,id:n,name:r=n,label:i,labelIcon:a,Label:o,readOnly:u})=>{let d=Ph(r),f=e,p=e,m=x(`field-external-selectdata`);return(0,L.useEffect)(()=>{p.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),e.type===`external`?(0,R.jsx)(o,{label:i||r,icon:a||(0,R.jsx)(O,{size:16}),el:`div`,children:(0,R.jsx)(Yh,{name:r,field:c(s({},f),{placeholder:p.adaptor?.name?`Select from ${p.adaptor.name}`:f.placeholder||m,mapProp:p.adaptor?.mapProp||f.mapProp,mapRow:f.mapRow,fetchList:p.adaptor?.fetchList?()=>l(null,null,function*(){return yield p.adaptor.fetchList(p.adaptorParams)}):f.fetchList}),onChange:t,value:d,id:n,readOnly:u})}):null};u();var Zh=f(`Input`,Nm),Qh=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let c=Ph(i);return e.type!==`radio`||!e.options?null:(0,R.jsx)(s,{icon:o||(0,R.jsx)(Ae,{size:16}),label:a||i,readOnly:n,el:`div`,children:(0,R.jsx)(`div`,{className:Zh(`radioGroupItems`),id:r,children:e.options.map(e=>(0,R.jsxs)(`label`,{className:Zh(`radio`),children:[(0,R.jsx)(`input`,{type:`radio`,className:Zh(`radioInput`),value:JSON.stringify({value:e.value}),name:i,onChange:e=>{t(JSON.parse(e.target.value).value)},disabled:n,checked:c===e.value}),(0,R.jsx)(`div`,{className:Zh(`radioInner`),children:e.label||e.value?.toString()})]},e.label+e.value))})})};u();var $h=f(`Input`,Nm),eg=({field:e,onChange:t,label:n,labelIcon:r,Label:i,id:a,name:o=a,readOnly:s})=>{let c=Ph(o);return e.type!==`select`||!e.options?null:(0,R.jsx)(i,{label:n||o,icon:r||(0,R.jsx)(Te,{size:16}),readOnly:s,children:(0,R.jsxs)(`div`,{className:$h(`select`),children:[(0,R.jsx)(`select`,{id:a,title:n||o,className:$h(`input`),disabled:s,onChange:e=>{t(JSON.parse(e.target.value).value)},value:JSON.stringify({value:c}),children:e.options.map(e=>(0,R.jsx)(`option`,{label:e.label,value:JSON.stringify({value:e.value})},e.label+JSON.stringify(e.value)))}),(0,R.jsx)(Te,{size:18,className:$h(`selectIcon`)})]})})};u();var tg=f(`Input`,Nm),ng=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let[c,l]=Rh(i,t,{fallback:``});return(0,R.jsx)(s,{label:a||i,icon:o||(0,R.jsx)(Be,{size:16}),readOnly:n,children:(0,R.jsx)(`textarea`,{id:r,className:tg(`input`),autoComplete:`off`,name:i,value:c,onChange:e=>l(e.currentTarget.value),readOnly:n,tabIndex:n?-1:void 0,rows:5,placeholder:e.type===`textarea`?e.placeholder:void 0})})};u(),u();var rg=(0,L.memo)(e=>(0,R.jsx)(at,c(s({},e),{editor:null,menu:(0,R.jsx)(rt,{field:e.field,editor:null,editorState:null,readOnly:e.readOnly??!1}),children:(0,R.jsx)(`div`,{className:`rich-text`,dangerouslySetInnerHTML:{__html:e.content},contentEditable:!0})})));rg.displayName=`EditorFallback`;var ig=(0,L.lazy)(()=>a(()=>import(`./Editor-LJSLIQQP-CMiiss5h.js`).then(e=>({default:e.Editor})),__vite__mapDeps([8,1,2,3,4,6,5,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]))),ag=({onChange:e,readOnly:t=!1,id:n,name:r=n,label:i,labelIcon:a,Label:o,field:c})=>{let l={onChange:e,content:Ph(r),readOnly:t,field:c,id:n,name:r};return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(o,{label:i||r,icon:a||(0,R.jsx)(Be,{size:16}),readOnly:t,el:`div`,children:(0,R.jsx)(L.Suspense,{fallback:(0,R.jsx)(rg,s({},l)),children:(0,R.jsx)(ig,s({},l))})})})};u(),u();var og=(e,t)=>e.type===`object`&&!!e.collapsible&&!t?.object&&Object.values(e.objectFields??{}).some(e=>Dh(t,e)),sg=({field:e,onChange:t,id:n,name:r,label:i,labelIcon:a,Label:o,readOnly:l,expanded:u,onToggle:d})=>{let f=r??n,{localName:p=f}=Ch(),m=Xm(),h=I(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),g=I(e=>e.overrides.fieldTypes),_=()=>Th(m.getState(),f)??{};if(e.type!==`object`||!e.objectFields)return null;let v=Object.keys(e.objectFields).filter(t=>Dh(g,e.objectFields[t])),y={label:i||r,icon:a||(0,R.jsx)(Ze,{size:16}),readOnly:l};return v.length===0?(0,R.jsx)(o,c(s({},y),{el:`div`})):(0,R.jsx)(Um,c(s({},y),{Label:o,variant:e.variant??`card`,collapsible:e.collapsible,expanded:u,onToggle:d,children:v.map(r=>{let i=e.objectFields[r],a=`${p}.${r}`;return(0,R.jsx)(Wm,{collapsible:og(i,g),children:(0,R.jsx)(Oh,{id:`${n}_${r}`,name:f,subName:r,localName:p,field:i,forceReadOnly:!h,onChange:(e,n,r)=>{let i=_();i[r]!==e&&t(c(s({},i),{[r]:e}),n)}})},a)})}))},cg=f(`Input`,Nm),lg=f(`InputWrapper`,Nm),ug={array:Nh,external:Xh,object:sg,select:eg,textarea:ng,radio:Qh,checkbox:Ih,text:Bh,number:Bh,richtext:ag};function dg(e){let t=I(e=>e.dispatch),n=I(e=>e.overrides),r=I(jt(e=>e.selectedItem?.readOnly)),i=(0,L.useContext)(Sh),{id:a,Label:o=Im}=e,l=e.field,u=l.label,d=l.labelIcon,f=Rm(),p=a||f,m=(0,L.useMemo)(()=>c(s({},n.fieldTypes),{custom:n.fieldTypes?.custom,array:n.fieldTypes?.array||ug.array,external:n.fieldTypes?.external||ug.external,object:n.fieldTypes?.object||ug.object,select:n.fieldTypes?.select||ug.select,textarea:n.fieldTypes?.textarea||ug.textarea,radio:n.fieldTypes?.radio||ug.radio,checkbox:n.fieldTypes?.checkbox||ug.checkbox,text:n.fieldTypes?.text||ug.text,number:n.fieldTypes?.number||ug.number,richtext:n.fieldTypes?.richtext||ug.richtext}),[n]),h=l.type===`custom`||!!n.fieldTypes?.[l.type],g=e.name??p,_=Xm(),[v,y]=Rh(g,(0,L.useMemo)(()=>h?(t,n)=>{var r;(r=e.onChange)==null||r.call(e,t,n),_.setState(Dm(_.getState(),g,t))}:e.onChange,[h,e.onChange,g,_]),{tracked:h}),b=(0,L.useMemo)(()=>c(s({},e),{field:l,label:u,labelIcon:d,Label:o,id:p,value:v,onChange:y}),[e,l,u,d,o,p,v,y]),x=(0,L.useCallback)(e=>{b.name&&(e.target.nodeName===`INPUT`||e.target.nodeName===`TEXTAREA`)&&(e.stopPropagation(),t({type:`setUi`,ui:{field:{focus:b.name}}}))},[b.name]),S=(0,L.useCallback)(e=>{`name`in e.target&&t({type:`setUi`,ui:{field:{focus:null}}})},[]),C=(0,L.useMemo)(()=>l.type!==`custom`&&l.type!==`slot`?ug[l.type]:e=>null,[l.type]),w=l.type===`custom`?l.key:void 0,T=(0,L.useMemo)(()=>{if(l.type===`custom`&&!m[l.type])return l.render?l.render:null;if(l.type!==`slot`)return m[l.type]},[l.type,w,m]);if(!Dh(n.fieldTypes,l))return null;if(!T)throw Error(`Field type for ${l.type} did not exist.`);return(0,R.jsx)(Sh.Provider,{value:{readOnlyFields:i.readOnlyFields||r||{},localName:i.localName??b.name},children:(0,R.jsx)(`div`,{className:lg(),"data-puck-field-group-collapsible":og(l,n.fieldTypes)||void 0,onFocus:x,onBlur:S,onClick:e=>{e.stopPropagation()},children:(0,R.jsx)(T,c(s({},b),{children:(0,R.jsx)(C,s({},b))}))})})}function fg(e){let t=I(t=>`${t.selectedItem?.type||`root`}.${e.name}`),n=e.field,{expanded:r,toggleExpanded:i}=Bm({fieldGroupKey:t,defaultExpanded:n.type===`object`?n.defaultExpanded:void 0}),a=s({},e);return n.type===`object`&&(a.expanded=r,a.onToggle=i),(0,R.jsx)(dg,s({},a))}function pg(e){var t=e,{value:n}=t,r=d(t,[`value`]);let i=(0,L.useMemo)(()=>e=>(0,R.jsx)(`div`,c(s({},e),{className:cg({readOnly:r.readOnly})})),[r.readOnly]),a=Xm(),o=r.field,{expanded:l,toggleExpanded:u,unsetExpanded:f}=Bm({fieldGroupKey:r.id,defaultExpanded:o.type===`object`?o.defaultExpanded:void 0});(0,L.useEffect)(()=>()=>f(),[f,r.id]);let p=(0,L.useCallback)(e=>{r.id&&(a.setState({[r.id]:e}),r.onChange(e))},[a,r.onChange,r.id]);(0,L.useEffect)(()=>{r.id&&a.setState({[r.id]:n})},[r.id,n,a]);let m=c(s({},r),{onChange:p,Label:i});return r.field.type===`object`&&(m.expanded=l,m.onToggle=u),(0,R.jsx)(dg,s({},m))}function mg(e){let t=Rm();return e.field.type===`slot`?null:(0,R.jsx)(Ym.Provider,{value:{[t]:e.value},children:(0,R.jsx)(pg,c(s({},e),{id:t}))})}u(),u();var hg=(e,t)=>!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING),gg=(e,t)=>e.every((n,r)=>r===0||hg(t(e[r-1]),t(n)))?e:[...e].sort((e,n)=>hg(t(e),t(n))?-1:1);u();var _g=(e,t)=>e instanceof(e.ownerDocument?.defaultView?.Element??Element)&&(e.matches(`[${t}]`)||!!e.querySelector(`[${t}]`));u();var vg={"Tabs-list":`_Tabs-list_x7mqh_1`,"Tabs-tab":`_Tabs-tab_x7mqh_14`,"Tabs-tab--selected":`_Tabs-tab--selected_x7mqh_32`},yg=f(`Tabs`,vg),bg=f(`Tabs-tab`,vg),xg=(0,L.createContext)(null),Sg=({value:e,onChange:t,children:n})=>{let r=Rm(),[i,a]=(0,L.useState)([]),o=(0,L.useRef)([]),s=(0,L.useRef)(null),c=(0,L.useCallback)(e=>(o.current=[...o.current,e],a(t=>gg([...t,e],e=>e.marker)),()=>{o.current=o.current.filter(t=>t!==e),a(t=>t.filter(t=>t!==e))}),[]),l=i.length>1;(0,L.useLayoutEffect)(()=>{if(!l||!s.current)return;let e=new MutationObserver(e=>{e.some(e=>Array.from(e.addedNodes).some(e=>_g(e,`data-puck-tab-marker`)))&&(0,dd.flushSync)(()=>a(e=>gg(e,e=>e.marker)))});return e.observe(s.current,{childList:!0,subtree:!0}),()=>e.disconnect()},[l]);let u=i.findIndex(t=>t.value===e),d=Math.max(u,0),f=i[d]?.value;(0,L.useLayoutEffect)(()=>{let n=o.current;if(n.length===0||n.some(t=>t.value===e))return;let r=gg(n,e=>e.marker)[0];t(r.value,{reason:`missing`})},[i,e,t]),(0,L.useEffect)(()=>{let e=i.map(e=>e.value);new Set(e).size!==e.length&&console.warn("Each `FieldTab` needs a unique `value`, which defaults to its `label`")},[i]);let p=e=>t(e,{reason:`selected`}),m=e=>{var t;let n=i.length,r={ArrowRight:(d+1)%n,ArrowLeft:(d-1+n)%n,Home:0,End:n-1}[e.key];r!==void 0&&(e.preventDefault(),p(i[r].value),(t=e.currentTarget.querySelectorAll(`[role="tab"]`)[r])==null||t.focus())},h=(0,L.useMemo)(()=>({selected:f,register:c}),[f,c]),g=i.length>0,_=`${r}-panel`,v=e=>`${r}-tab-${e}`;return(0,R.jsxs)(xg.Provider,{value:h,children:[g&&(0,R.jsx)(`div`,{role:`tablist`,"data-puck-tablist":!0,className:yg(`list`),onKeyDown:m,children:i.map((e,t)=>{let n=t===d;return(0,R.jsx)(`button`,{id:v(t),type:`button`,role:`tab`,"aria-selected":n,"aria-controls":_,tabIndex:n?0:-1,className:bg({selected:n}),onClick:()=>p(e.value),children:e.label},e.value)})}),(0,R.jsx)(`div`,{ref:s,id:_,role:g?`tabpanel`:void 0,"aria-labelledby":g?v(d):void 0,"data-puck-tabpanel":!0,children:n})]})};u(),u(),u(),u();function Cg(e){let t={x:0,y:0},n=e;for(;n&&n!==document.documentElement;){let e=n.parentElement;e&&(t.x+=e.scrollLeft,t.y+=e.scrollTop),n=e}return t}u();var wg=(e,t=[])=>{let n=b();return(0,L.useCallback)(()=>{let t=()=>{},r=n=>{n?e(!1):(setTimeout(()=>{e(!0)},0),t&&t())},i=n.getState().state.ui.isDragging;return r(i),i&&(t=n.subscribe(e=>e.state.ui.isDragging,e=>{r(e)})),t},[n,...t])};u();var Tg=e=>{let t=e;for(;t&&t!==document.documentElement;){if(getComputedStyle(t).position===`fixed`)return!0;t=t.parentElement}return!1};u();function Eg(e,t){typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t)}function Dg(e,t){e.forEach(e=>{Eg(e,t)})}u();var Og=(0,L.createContext)(null),kg=(0,L.createContext)(w(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,draggingFromHandle:!1,staticDrag:!1,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),Ag=({children:e,store:t})=>(0,R.jsx)(kg.Provider,{value:t,children:e}),jg=({children:e,value:t})=>{let n=I(e=>e.dispatch),r=(0,L.useCallback)(e=>{n({type:`registerZone`,zone:e})},[n]),i=(0,L.useMemo)(()=>s({registerZone:r},t),[t]);return(0,R.jsx)(R.Fragment,{children:i&&(0,R.jsx)(Og.Provider,{value:i,children:e})})};u(),u(),u();var Mg=()=>{if(typeof window>`u`)return;let e=document.querySelector(`#preview-frame`);return e?.tagName===`IFRAME`?e.contentDocument||document:e?.ownerDocument||document};u(),u();var Ng=e=>typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e,Pg=e=>`[data-puck-component="${Ng(e)}"]`,Fg=e=>`[data-puck-dropzone="${Ng(e)}"]`,Ig=`data-puck-drag-handle`,Lg=`[${Ig}]`,Rg={duration:250,easing:`ease`},zg=10,Bg=e=>e.defaultView?.matchMedia(`(prefers-reduced-motion: reduce)`).matches??!1,Vg=(e,{zones:t,itemId:n,targetZone:r,getExpectedOrder:i,initialExpectedOrder:a=[]},o)=>{let s=new Set(a),c=0,l=()=>{let a=e.querySelector(Fg(r)),u=i(),d=n??u.find(e=>!s.has(e)),f=d?a?.querySelector(`:scope > ${Pg(d)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`)??null:null,p=a?Array.from(a.querySelectorAll(`:scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`)).map(e=>e.getAttribute(`data-puck-component`)):[],m=new Set(p),h=u.filter(e=>m.has(e)),g=p.length===h.length&&p.every((e,t)=>e===h[t]),_=t.every(t=>t===r||!d||!e.querySelector(`${Fg(t)} > ${Pg(d)}`));if((!f||!g||!_)&&c<zg){c++,requestAnimationFrame(l);return}o(f)};requestAnimationFrame(l)},Hg=(e,t)=>{let n={x:0,y:0,scaleX:1,scaleY:1},r=e.ownerDocument.defaultView?.frameElement;for(;r&&r!==t;){let e=r.getBoundingClientRect(),t=r.offsetWidth?e.width/r.offsetWidth:1,i=r.offsetHeight?e.height/r.offsetHeight:1;n.x+=e.left,n.y+=e.top,n.scaleX*=t,n.scaleY*=i,r=r.ownerDocument.defaultView?.frameElement}return n},Ug=(e,t)=>{let n=e.getBoundingClientRect();if(e.ownerDocument===t)return n;let r=Hg(e,t.defaultView?.frameElement??null);return{left:n.left*r.scaleX+r.x,top:n.top*r.scaleY+r.y,width:n.width*r.scaleX,height:n.height*r.scaleY}},Wg=({element:e,feedbackElement:t,placeholder:n,translate:r})=>{if(Bg(t.ownerDocument))return;let i=n??e,a={frameTransform:t.ownerDocument===i.ownerDocument?null:void 0},o=new nc(t,a),s=new nc(i,a),c=Ls(Os(t).translate)??r,l={x:c.x-(o.center.x-s.center.x),y:c.y-(o.center.y-s.center.y)};return t.setAttribute(`data-dnd-dropping`,``),t.animate({translate:[`${c.x}px ${c.y}px 0`,`${l.x}px ${l.y}px 0`]},Rg).finished.catch(()=>void 0).then(()=>{t.removeAttribute(`data-dnd-dropping`)})},Gg=({feedbackElement:e,itemId:t,targetZone:n,getExpectedOrder:r})=>{let i=e.ownerDocument,a=Mg()??i;if(Bg(i))return;let o=e.getBoundingClientRect(),l=r(),u=e.cloneNode(!0);u.removeAttribute(`id`),u.removeAttribute(`popover`),u.removeAttribute(`data-puck-component`),u.removeAttribute(`data-puck-dnd`),u.removeAttribute(`data-dnd-dragging`),u.setAttribute(`inert`,`true`),Object.assign(u.style,{position:`fixed`,left:`${o.left}px`,top:`${o.top}px`,width:`${o.width}px`,height:`${o.height}px`,margin:`0`,overflow:`hidden`,pointerEvents:`none`,transform:`none`,transition:`none`,translate:`none`,zIndex:`2147483647`});let d=a.createElement(`style`);d.textContent=`
    ${t?`${Pg(t)} { visibility: hidden !important; }`:``}
    [data-puck-overlay] { opacity: 0 !important; }
  `,a.head.appendChild(d),i.body.appendChild(u);let f=()=>{u.remove(),d.remove()};Vg(a,{zones:[n],itemId:t,targetZone:n,getExpectedOrder:r,initialExpectedOrder:l},e=>{if(!e){f();return}let n=e.getAttribute(`data-puck-component`);!t&&n&&(d.textContent+=`
          ${Pg(n)} { visibility: hidden !important; }
        `);let r=Ug(e,i);u.animate({left:[`${o.left}px`,`${r.left}px`],top:[`${o.top}px`,`${r.top}px`],width:[`${o.width}px`,`${r.width}px`],height:[`${o.height}px`,`${r.height}px`]},c(s({},Rg),{fill:`forwards`})).finished.catch(()=>void 0).then(f)})},Kg=(e,t)=>{let n=e.source.manager?.dragOperation;if(!((n?.canceled??!1)||n?.target?.type===`void`)&&t){Gg(c(s({},t),{feedbackElement:e.feedbackElement}));return}return Wg(e)};u();var qg=(e,t)=>e.indexes.zones[t]?.contentIds??[],Jg=(e,t)=>{let n=b();return(0,L.useCallback)(r=>{let i=Object.values(e.getState().previewIndex??{}),a=t?i.find(e=>e?.props.id===t&&!e.ghost):i.find(e=>e?.type===`insert`),o=t?a?.linePlaceholder||a?.type===`insert`:!!a;return Kg(r,a&&o?{itemId:a.type===`move`?t:void 0,targetZone:a.zone,getExpectedOrder:()=>qg(n.getState().state,a.zone)}:void 0)},[n,e,t])};u(),u();var Yg=({componentRef:e,getComponentStyle:t,draggingFromHandle:n})=>{let r=(0,L.useRef)(null),i=(0,L.useRef)(null),a=(0,L.useCallback)(e=>{var t;(t=i.current)==null||t.removeAttribute(Ig),i.current=e,e?.setAttribute(Ig,``)},[]);return(0,L.useEffect)(()=>{if(!n)return;let i=e?.current,a=i?.ownerDocument.defaultView;if(!i||!a)return;let o=()=>{let e=r.current;if(i.hasAttribute(`data-dnd-dragging`)&&e){let t=i.getBoundingClientRect();Object.assign(e.style,{left:`${t.left}px`,top:`${t.top}px`,height:`${t.height}px`,width:`${t.width}px`,position:`fixed`}),_s(e)&&(e.setAttribute(`popover`,`manual`),vs(e))}},s=new a.MutationObserver(()=>{o()});return s.observe(i,{attributes:!0,attributeFilter:[`style`,`data-dnd-dropping`]}),o(),()=>{s.disconnect();let e=r.current,n=t();e&&(ys(e),e.removeAttribute(`popover`)),e&&n&&(Object.assign(e.style,n),e.style.position=n.position??``)}},[t,n,e.current]),{handleRef:i,assignHandleRef:a,overlayRef:r}};u();var Xg=()=>{let e=I(e=>e.status),t=(0,L.useRef)(!1);return(0,L.useEffect)(()=>{let e=Mg();if(!e)return;let n=e=>{let n=e.target;t.current=!!(n?.closest)?.call(n,Lg)},r=()=>{t.current=!1},i={capture:!0};return e.addEventListener(`pointerdown`,n,i),e.addEventListener(`pointerup`,r,i),e.addEventListener(`pointercancel`,r,i),()=>{e.removeEventListener(`pointerdown`,n,i),e.removeEventListener(`pointerup`,r,i),e.removeEventListener(`pointercancel`,r,i)}},[e]),{getIsDraggingFromHandle:(0,L.useCallback)(()=>t.current,[])}};u();var Zg=f(`DraggableComponent`,{DraggableComponent:`_DraggableComponent_ckmoo_1`,"DraggableComponent-overlayWrapper":`_DraggableComponent-overlayWrapper_ckmoo_19`,"DraggableComponent-overlay":`_DraggableComponent-overlay_ckmoo_19`,"DraggableComponent-loadingOverlay":`_DraggableComponent-loadingOverlay_ckmoo_51`,"DraggableComponent--hover":`_DraggableComponent--hover_ckmoo_67`,"DraggableComponent--isSelected":`_DraggableComponent--isSelected_ckmoo_85`,"DraggableComponent-actionsOverlay":`_DraggableComponent-actionsOverlay_ckmoo_102`,"DraggableComponent-actions":`_DraggableComponent-actions_ckmoo_102`,"DraggableComponent-actionsAction":`_DraggableComponent-actionsAction_ckmoo_124`}),Qg=100,$g=8,e_=$g*6.5,t_=-(e_-8),n_=$g,r_=({label:e,children:t,parentAction:n,dragHandle:r})=>(0,R.jsxs)(He,{children:[(0,R.jsxs)(He.Group,{children:[n,e&&(0,R.jsx)(He.Label,{label:e})]}),(0,R.jsx)(He.Group,{children:t}),r&&(0,R.jsx)(He.Group,{children:r})]}),i_=({children:e})=>(0,R.jsx)(R.Fragment,{children:e}),a_=({children:e,depth:t,componentType:n,id:r,index:i,zoneCompound:a,isLoading:o=!1,isSelected:l=!1,debug:u,label:d,autoDragAxis:f,userDragAxis:p,inDroppableZone:m=!0,itemRef:h})=>{let g=I(e=>e.selectedItem?.props.id===r?e.zoomConfig.zoom:1),y=I(e=>e._experimentalFullScreenCanvas),S=I(e=>e.overrides),C=I(e=>e.dnd?.enableDragHandle??!1),w=I(e=>e.dispatch),T=I(e=>e.iframe),E=(0,L.useRef)(0),D=(0,L.useContext)(Og),[O,k]=(0,L.useState)({}),ee=(0,L.useCallback)((e,t)=>{var n;(n=D?.registerLocalZone)==null||n.call(D,e,t),k(n=>c(s({},n),{[e]:t}))},[k]),A=(0,L.useCallback)(e=>{var t;(t=D?.unregisterLocalZone)==null||t.call(D,e),k(t=>{let n=s({},t);return delete n[e],n})},[k]),te=Object.values(O).filter(Boolean).length>0,j=I(jt(e=>e.state.indexes.nodes[r]?.path)),M=I(jt(e=>{let t=v({index:i,zone:a},e.state);return e.permissions.getPermissions({item:t})})),N=(0,L.useContext)(kg),P=b(),[ne,re]=(0,L.useState)(p||f),ie=(0,L.useMemo)(()=>_h(ne,.05,()=>N.getState().staticDrag||N.getState().draggingFromHandle),[ne,N]),F=(0,L.useRef)(null),ae=(0,L.useCallback)(()=>{if(!F.current)return;let e=F.current,t=e.getBoundingClientRect(),n=T.enabled?null:e.closest(`[data-puck-preview]`),r=Tg(e),i=n?.getBoundingClientRect(),a=n?Cg(n):{x:0,y:0},o=r?{x:0,y:0}:Cg(e),s=r?{x:0,y:0}:{x:o.x-a.x-(i?.left??0),y:o.y-a.y-(i?.top??0)};return{left:`${t.left+s.x}px`,top:`${t.top+s.y}px`,height:`${t.height}px`,width:`${t.width}px`,position:r?`fixed`:void 0}},[T.enabled]),oe=Jg(N,r),se=Km(kg,e=>e.draggingFromHandle&&e.draggedItem?.id===r),{handleRef:ce,assignHandleRef:le,overlayRef:ue}=Yg({componentRef:F,getComponentStyle:ae,draggingFromHandle:se}),{ref:de,isDragging:fe,sortable:pe}=Mp({id:r,index:i,handle:ce,group:a,type:`component`,data:{areaId:D?.areaId,zone:a,index:i,componentType:n,containsActiveZone:te,depth:t,path:j||[],inDroppableZone:m},collisionPriority:t,collisionDetector:ie,transition:{duration:200,easing:`cubic-bezier(0.2, 0, 0, 1)`},plugins:e=>[...e,Kl.configure({feedback:`clone`,dropAnimation:oe})]}),me=(0,L.useCallback)(e=>{de(e),F.current!==e&&(F.current=e,he(e=>e+1),h&&Dg([h],e))},[h,de]);(0,L.useEffect)(()=>{let e=N.getState().enabledIndex[a];pe.droppable.disabled=!e,pe.draggable.disabled=!M.drag;let t=N.subscribe(e=>{pe.droppable.disabled=!e.enabledIndex[a]});return F.current&&!M.drag?(F.current.setAttribute(`data-puck-disabled`,``),()=>{var e;(e=F.current)==null||e.removeAttribute(`data-puck-disabled`),t()}):t},[M.drag,a]);let[,he]=(0,L.useState)(0),[ge,_e]=(0,L.useState)();(0,L.useEffect)(()=>{_e(T.enabled?F.current?.ownerDocument.body:F.current?.closest(`[data-puck-preview]`)??document.body)},[T.enabled]);let[ve,ye]=(0,L.useState)(),be=(0,L.useRef)(null),xe=(0,L.useRef)(null),Se=(0,L.useCallback)(()=>{ye(ae()),h&&Dg([h],F.current)},[ae,h]),Ce=(0,L.useCallback)(()=>{xe.current??=requestAnimationFrame(()=>{xe.current=null,Se()})},[Se]);(0,L.useEffect)(()=>()=>{xe.current!=null&&(cancelAnimationFrame(xe.current),xe.current=null)},[]),(0,L.useEffect)(()=>{if(F.current){let e=new ResizeObserver(()=>{Ce()});return e.observe(F.current),()=>{e.disconnect()}}},[Ce,h]);let we=I(e=>e.nodes.registerNode),Te=I(e=>e.nodes.unregisterNode),De=(0,L.useCallback)(()=>{Ue(!1)},[]),Oe=(0,L.useCallback)(()=>{Ue(!0)},[]),ke=(0,L.useRef)({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});(0,L.useLayoutEffect)(()=>{ke.current.sync=Se,ke.current.hideOverlay=De,ke.current.showOverlay=Oe},[De,Oe,Se]),(0,L.useEffect)(()=>(we(r,ke.current),()=>{Te(r)}),[r,we,Te]);let Ae=(0,L.useMemo)(()=>S.actionBar||r_,[S.actionBar]),je=(0,L.useMemo)(()=>S.componentOverlay||i_,[S.componentOverlay]),Ne=(0,L.useCallback)(e=>{N.getState().draggedItem||(e.target.closest(`[data-puck-overlay-portal]`)||e.stopPropagation(),w(y?{type:`setUi`,ui:{itemSelector:l?null:{index:i,zone:a}}}:{type:`setUi`,ui:{itemSelector:{index:i,zone:a}}}))},[i,a,r,l,y]),Fe=(0,L.useCallback)(()=>{let{nodes:e,zones:t}=P.getState().state.indexes,n=e[r],i=n?.parentId?e[n?.parentId]:null;if(!i||!n.parentId)return;let a=`${i.parentId}:${i.zone}`,o=t[a].contentIds.indexOf(n.parentId);w({type:`setUi`,ui:{itemSelector:{zone:a,index:o}}})},[D,j]),Ie=(0,L.useCallback)(()=>{w({type:`duplicate`,sourceIndex:i,sourceZone:a})},[i,a]),Le=(0,L.useCallback)(()=>{w({type:`remove`,index:i,zone:a})},[i,a]),[Re,ze]=(0,L.useState)(!1),Be=Km(kg,e=>e.hoveringComponent===r);(0,L.useEffect)(()=>{if(!F.current)return;let e=F.current,t=e=>{N.getState().draggedItem?ze(!!fe):ze(!0),e.stopPropagation()},n=e=>{e.stopPropagation(),ze(!1)};return e.setAttribute(`data-puck-component`,r),e.setAttribute(`data-puck-dnd`,r),e.style.position=`relative`,e.addEventListener(`click`,Ne),e.addEventListener(`mouseover`,t),e.addEventListener(`mouseout`,n),()=>{e.removeAttribute(`data-puck-component`),e.removeAttribute(`data-puck-dnd`),e.removeEventListener(`click`,Ne),e.removeEventListener(`mouseover`,t),e.removeEventListener(`mouseout`,n)}},[F.current,Ne,te,a,r,fe,m]);let[Ve,Ue]=(0,L.useState)(!1),[We,Ge]=(0,L.useState)(!0),[Ke,qe]=(0,L.useTransition)();(0,L.useEffect)(()=>{qe(()=>{Re||Be||l?(Ce(),Ue(!0),Ye(!1)):Ue(!1)})},[Re,Be,l,T]);let[Je,Ye]=(0,L.useState)(!1),Xe=wg(e=>{e?qe(()=>{Se(),Ge(!0)}):Ge(!1)});(0,L.useEffect)(()=>{fe&&Ye(!0)},[fe]),(0,L.useEffect)(()=>{if(Je)return Xe()},[Je,Xe]),(0,L.useEffect)(()=>{if(!We||!(l||fe))return;let e=F.current;if(!e)return;let t=e.ownerDocument,n=t.defaultView;if(!n)return;E.current=0,Ce();let r=()=>Ce(),i=()=>Ce();t.addEventListener(`scroll`,r,!0),n.addEventListener(`resize`,i);let a=0,o=e=>{if(e-E.current>=Qg){E.current=e;let t=F.current;if(t){let e=t.getBoundingClientRect(),n=be.current;(!n||Math.abs(e.x-n.x)>.5||Math.abs(e.y-n.y)>.5||Math.abs(e.width-n.width)>.5||Math.abs(e.height-n.height)>.5)&&(be.current=e,Ce())}}a=requestAnimationFrame(o)};return a=requestAnimationFrame(o),()=>{t.removeEventListener(`scroll`,r,!0),n.removeEventListener(`resize`,i),cancelAnimationFrame(a)}},[We,l,fe,Ce]);let Ze=(0,L.useCallback)(e=>{if(e&&e.ownerDocument.defaultView){let t=e.getBoundingClientRect(),n=t.x<0,r=t.y<0;n&&(e.style.transformOrigin=`left top`,e.style.left=`0px`),r&&(e.style.top=`12px`,n||(e.style.transformOrigin=`right top`))}},[g]),Qe=(0,L.useRef)(null);(0,L.useEffect)(()=>{Ze(Qe.current)},[Qe.current,Ze]),(0,L.useEffect)(()=>{if(p){re(p);return}if(F.current){let e=window.getComputedStyle(F.current);if(e.display===`inline`||e.display===`inline-block`){re(`x`);return}}re(f)},[F,p,f]);let $e=x(`action-selectparent`),et=x(`action-drag`),tt=x(`action-duplicate`),nt=x(`action-delete`),rt=(0,L.useMemo)(()=>D?.areaId&&D?.areaId!==`root`&&(0,R.jsx)(He.Action,{onClick:Fe,label:$e,children:(0,R.jsx)(Me,{size:16})}),[D?.areaId,$e]),at=(0,L.useMemo)(()=>C&&M.drag?(0,R.jsx)(He.DragHandle,{ref:le,label:et}):void 0,[C,M.drag,le,et]),ot=(0,L.useMemo)(()=>C&&M.drag?le:void 0,[C,M.drag,le]),st=(0,L.useMemo)(()=>c(s({},D),{areaId:r,zoneCompound:a,index:i,depth:t+1,registerLocalZone:ee,unregisterLocalZone:A}),[D,r,a,i,t,ee,A]),ct=I(e=>e.currentRichText?.inlineComponentId===r?e.currentRichText:null),lt=M.duplicate||M.delete;return(0,R.jsxs)(jg,{value:st,children:[(We&&Ve||se)&&(0,dd.createPortal)((0,R.jsxs)(`div`,{className:`${Zg({isSelected:l||se,hover:Re||Be})} notranslate`,style:s({},ve),"data-puck-overlay":!0,translate:`no`,ref:ue,children:[!se&&(0,R.jsxs)(R.Fragment,{children:[u,o&&(0,R.jsx)(`div`,{className:Zg(`loadingOverlay`),children:(0,R.jsx)(_,{})})]}),(0,R.jsx)(`div`,{className:Zg(`actionsOverlay`),style:{top:e_/g,pointerEvents:se?`none`:void 0},children:(0,R.jsx)(`div`,{className:Zg(`actions`),style:{transform:`scale(${1/g}`,top:t_/g,right:0,paddingLeft:n_,paddingRight:n_},ref:Qe,children:(0,R.jsxs)(Ae,{parentAction:rt,label:d,dragHandle:at,dragHandleRef:ot,children:[ct&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(it,{editor:ct.editor,field:ct.field,inline:!0,readOnly:!1}),lt&&(0,R.jsx)(He.Separator,{})]}),M.duplicate&&(0,R.jsx)(He.Action,{onClick:Ie,label:tt,children:(0,R.jsx)(Pe,{className:Zg(`actionsAction`)})}),M.delete&&(0,R.jsx)(He.Action,{onClick:Le,label:nt,children:(0,R.jsx)(Ee,{className:Zg(`actionsAction`)})})]})})}),!se&&(0,R.jsx)(`div`,{className:Zg(`overlayWrapper`),children:(0,R.jsx)(je,{componentId:r,componentType:n,hover:Re,isSelected:l,children:(0,R.jsx)(`div`,{className:Zg(`overlay`)})})})]}),ge||document.body),e(me)]})};u();var o_={DropZone:`_DropZone_wc2ks_1`,"DropZone--hasChildren":`_DropZone--hasChildren_wc2ks_11`,"DropZone--isAreaSelected":`_DropZone--isAreaSelected_wc2ks_24`,"DropZone--hoveringOverArea":`_DropZone--hoveringOverArea_wc2ks_25`,"DropZone--isRootZone":`_DropZone--isRootZone_wc2ks_25`,"DropZone-item":`_DropZone-item_wc2ks_39`,"DropZone-linePlaceholder":`_DropZone-linePlaceholder_wc2ks_43`,"DropZone-hitbox":`_DropZone-hitbox_wc2ks_55`,"DropZone--isEnabled":`_DropZone--isEnabled_wc2ks_63`,"DropZone--isAnimating":`_DropZone--isAnimating_wc2ks_74`};u();var s_=(e,{allow:t,disallow:n})=>{if(!e)return!0;let r=new Set(t),i=new Set(n);return n?(i.has(e)&&r.has(e)&&i.delete(e),!i.has(e)):!t||r.has(e)};u(),u();var c_={Drawer:`_Drawer_1n90m_1`,"Drawer-draggable":`_Drawer-draggable_1n90m_8`,"Drawer-draggableBg":`_Drawer-draggableBg_1n90m_12`,"DrawerItem-draggable":`_DrawerItem-draggable_1n90m_22`,"DrawerItem--disabled":`_DrawerItem--disabled_1n90m_38`,DrawerItem:`_DrawerItem_1n90m_22`,"Drawer--isDraggingFrom":`_Drawer--isDraggingFrom_1n90m_48`,"DrawerItem-name":`_DrawerItem-name_1n90m_72`};u(),u(),u();function l_(e,t){let n=setTimeout(e,t);return()=>clearTimeout(n)}function u_(e,t){let n=()=>performance.now(),r,i=0;return function(...a){let o=n(),s=this;o-i>=t?(e.apply(s,a),i=o):(r?.(),r=l_(()=>{e.apply(s,a),i=n()},t-(o-i)))}}u();var d_=class{constructor(e,t){this.scaleFactor=1,this.frameEl=null,this.frameRect=null,this.target=e,this.original=t,this.frameEl=document.querySelector(`iframe#preview-frame`),this.frameEl&&(this.frameRect=this.frameEl.getBoundingClientRect(),this.scaleFactor=this.frameRect.width/(this.frameEl.contentWindow?.innerWidth||1))}get x(){return this.original.x}get y(){return this.original.y}get global(){return document!==this.target.ownerDocument&&this.frameRect?{x:this.x*this.scaleFactor+this.frameRect.left,y:this.y*this.scaleFactor+this.frameRect.top}:this.original}get frame(){return document===this.target.ownerDocument&&this.frameRect?{x:(this.x-this.frameRect.left)/this.scaleFactor,y:(this.y-this.frameRect.top)/this.scaleFactor}:this.original}};u();var f_=typeof PointerEvent<`u`?PointerEvent:Event,p_=class extends f_{constructor(e,t){super(e,t),this._originalTarget=null,this.originalTarget=t.originalTarget}set originalTarget(e){this._originalTarget=e}get originalTarget(){return this._originalTarget}},m_=e=>e.sort((e,t)=>{let n=e.data,r=t.data;return n.depth>r.depth?1:r.depth>n.depth?-1:0}),h_=e=>{let t=e?.id;if(!e)return null;if(e.type===`component`){let n=e.data;t=n.containsActiveZone?null:n.zone}else if(e.type===`void`)return`void`;return t},g_=6,__=(e,t)=>{let n=[],r=e.target.ownerDocument.elementsFromPoint(e.x,e.y),i=r.find(e=>e.getAttribute(`data-puck-preview`)),a=r.find(e=>e.getAttribute(`data-puck-drawer`));if(a&&(r=[a]),i){let t=Mg();t&&(r=t.elementsFromPoint(e.frame.x,e.frame.y))}if(r)for(let i=0;i<r.length;i++){let a=r[i],o=a.getAttribute(`data-puck-dropzone`),s=a.getAttribute(`data-puck-dnd`),c=a.hasAttribute(`data-puck-dnd-void`);if(g_&&(o||s)&&!c){let t=a.getBoundingClientRect(),n={left:t.left+g_,right:t.right-g_,top:t.top+g_,bottom:t.bottom-g_};if(e.frame.x<n.left||e.frame.x>n.right||e.frame.y>n.bottom||e.frame.y<n.top)continue}if(o){let e=t.registry.droppables.get(o);e&&n.push(e)}if(s){let e=t.registry.droppables.get(s);e&&n.push(e)}}return n},v_=(e,t)=>{let n=__(e,t);if(n.length>0){let e=m_(n),r=t.dragOperation.source,i=e.findIndex(e=>e.id===r?.id),a=r?.id,o=[...e];a&&i>-1&&o.splice(i,1),o=o.filter(e=>{let t=e.data;if(a&&i>-1&&t.path.indexOf(a)>-1)return!1;if(e.type===`dropzone`){let t=e.data;if(!t.isDroppableTarget||t.areaId===a)return!1}else if(e.type===`component`&&!e.data.inDroppableZone)return!1;return!0}),o.reverse();let s=o[0];if(!s)return{zone:null,area:null};let c=s.data,l=`containsActiveZone`in c;return{zone:h_(s),area:l&&c.containsActiveZone?o[0].id:o[0]?.data.areaId}}return{zone:ye,area:A}},y_=({onChange:e},t)=>class extends _i{constructor(n,r){super(n),!(typeof window>`u`)&&this.registerEffect(()=>{let r=u_(r=>{let i=new d_(r instanceof p_&&r.originalTarget||r.target,{x:r.clientX,y:r.clientY});document.elementsFromPoint(i.global.x,i.global.y).some(e=>e.id===t)&&e(v_(i,n),n)},50),i=e=>{r(e)};return document.body.addEventListener(`pointermove`,i,{capture:!0}),()=>{document.body.removeEventListener(`pointermove`,i,{capture:!0})}})}};u();var b_=({zones:e,itemId:t,targetZone:n,getExpectedOrder:r})=>{let i=Mg();if(!i||Bg(i))return()=>{};let a=Array.from(new Set(e)).map(e=>`${Fg(e)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(`, `),o=()=>{let e=new Map;return i.querySelectorAll(a).forEach(n=>{let r=n.getAttribute(`data-puck-component`);r&&r!==t&&e.set(r,{el:n,rect:n.getBoundingClientRect()})}),e},s=o(),c=r();return()=>{Vg(i,{zones:e,itemId:t,targetZone:n,getExpectedOrder:r,initialExpectedOrder:c},()=>{o().forEach(({el:e,rect:t},n)=>{let r=s.get(n)?.rect;if(!r)return;let i=r.x-t.x,a=r.y-t.y;Math.abs(i)<1&&Math.abs(a)<1||e.animate({translate:[`${i}px ${a}px 0`,`0px 0px 0`]},Rg)})})}};u();var x_=(e,{isDraggingBetweenSlots:t=!1,isNewComponent:n=!1,isDraggingFromHandle:r=!1}={})=>e===`auto`?t||n||r?`static`:`fluid`:e;u(),u(),u();var S_=(e,t)=>{let n=e.indexes.nodes[t];if(!n||n.data.type===`root`||t===`root`)return;let r=`${n.parentId}:${n.zone}`;return{zone:r,index:e.indexes.zones[r].contentIds.indexOf(t)}};function C_(e,t,n=`force`,r=!1,i){return l(this,null,function*(){let a=yield t().resolveComponentData(e,n);if(!a.didChange&&!r)return;if(a.node.type===`root`||a.node.props.id===`root`){t().dispatch({type:`replaceRoot`,root:$e(a.node),ui:i});return}let o=S_(t().state,a.node.props.id);if(!o){console.warn(`Warning: Could not find component with id "${e.props.id}" to resolve its data. Component may have been removed or the id is invalid.`);return}t().dispatch({type:`replace`,data:oe(a.node),destinationIndex:o.index,destinationZone:o.zone,ui:i})})}var w_=(e,t,n,r)=>l(null,null,function*(){let{getState:i}=r,a={type:`insert`,componentType:e,destinationIndex:n,destinationZone:t,id:nt(e)},o=i().state,l=D(o,a,i()),u=i().dispatch;u(c(s({},a),{recordHistory:!0}));let d={index:n,zone:t};u({type:`setUi`,ui:{itemSelector:d}});let f=v(d,l);f&&(yield C_(f,i,`insert`))});u();var T_=(e,t,n,r)=>l(null,null,function*(){let i=r.getState().dispatch;i({type:`move`,sourceIndex:t.index,sourceZone:t.zone??ye,destinationIndex:n.index,destinationZone:n.zone??ye,recordHistory:!1});let a=r.getState().state.indexes.nodes[e]?.data;a&&(yield C_(a,r.getState,`move`))});u();function E_(e){function t(e){return e?e.getAttribute(`dir`)||t(e.parentElement):`ltr`}return e?t(e):`ltr`}u(),u(),u();var D_=(e,t,n)=>Math.max(t,Math.min(n,e)),O_=(e,t)=>{let n=D_(e.x,Math.min(t.x1,t.x2),Math.max(t.x1,t.x2)),r=D_(e.y,Math.min(t.y1,t.y2),Math.max(t.y1,t.y2));return Math.hypot(e.x-n,e.y-r)};u();var k_=e=>{let t=e.replace(/\[[^\]]*\]/g,` `).trim();return t&&t!==`none`?t.split(/\s+/).length:0},A_=(e,t,n=t.getComputedStyle(e))=>{let r=n.display,i=E_(e)===`rtl`;if(r===`flex`||r===`inline-flex`){let e=n.flexDirection;if(e.startsWith(`row`)){let t=e===`row-reverse`;return{axis:`x`,reversed:i?!t:t}}return{axis:`y`,reversed:e===`column-reverse`}}return(r===`grid`||r===`inline-grid`)&&(n.gridAutoFlow.startsWith(`column`)||k_(n.gridTemplateColumns)>1)?{axis:`x`,reversed:i}:{axis:`y`,reversed:!1}},j_=({axis:e,reversed:t})=>{let n=e===`x`,r=t?-1:1;return{horizontal:n,reversed:t,forward:r,start:e=>n?t?e.right:e.left:t?e.bottom:e.top,end:e=>n?t?e.left:e.right:t?e.top:e.bottom,isBefore:(e,t)=>r>0?e<=t:e>=t}},M_=(e,t,n)=>{let r=e.ownerDocument.defaultView;if(!r)return null;let i=new Map(n.map((e,t)=>[e,t])),a=Array.from(e.querySelectorAll(`:scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`)).map(e=>({index:i.get(e.getAttribute(`data-puck-component`)??``)??-1,el:e})).filter(e=>e.index!==-1).sort((e,t)=>e.index-t.index).map(({index:e,el:t})=>({index:e,rect:t.getBoundingClientRect()}));if(a.length===0)return 0;let{horizontal:o,reversed:s,start:c,end:l}=j_(A_(e,r)),u=(e,t,n,r=[n])=>{let i=1/0,a=-1/0;for(let e of r)i=Math.min(i,o?e.top:e.left),a=Math.max(a,o?e.bottom:e.right);return o?{index:e,x1:t,x2:t,y1:n.top,y2:n.bottom,laneStart:i,laneEnd:a}:{index:e,x1:n.left,x2:n.right,y1:t,y2:t,laneStart:i,laneEnd:a}},d=[],f=(e,t,n)=>{let r=n===`before`?c(t):l(t);return u(e,r,t)};for(let e=0;e<=a.length;e++){let t=a[e-1],n=a[e];if(!n)d.push(f(t.index+1,t.rect,`after`));else if(!t)d.push(f(n.index,n.rect,`before`));else if(n.index-t.index>1)d.push(f(t.index+1,t.rect,`after`)),d.push(f(n.index,n.rect,`before`));else if(s?l(t.rect)<c(n.rect):l(t.rect)>c(n.rect))d.push(f(n.index,n.rect,`before`)),d.push(f(n.index,t.rect,`after`));else{let e=(l(t.rect)+c(n.rect))/2;d.push(u(n.index,e,n.rect,[t.rect,n.rect]))}}let p=o?t.y:t.x,m=null,h=1/0,g=null,_=1/0;for(let e of d){let n=O_(t,e);n<h&&(h=n,m=e),p>=e.laneStart&&p<=e.laneEnd&&n<_&&(_=n,g=e)}return(g??m)?.index??null};u();var N_=(e,t)=>{let n=document.querySelector(`iframe#preview-frame`);if(!n||e.ownerDocument!==n.contentDocument)return t;let r=n.getBoundingClientRect(),i=r.width/(n.contentWindow?.innerWidth||1);return i>0?{x:(t.x-r.left)/i,y:(t.y-r.top)/i}:t},P_=e=>{let t=b(),n=(0,L.useRef)(null),r=(0,L.useCallback)(t=>{let n=Mg()?.querySelector(`[data-puck-entry]`);t?n?.setAttribute(`data-puck-line-drag`,`true`):n?.removeAttribute(`data-puck-line-drag`),e.setState({staticDrag:t})},[e]),i=(0,L.useCallback)((e,n)=>{let r=Mg()?.querySelector(Fg(e));return r?M_(r,N_(r,n.dragOperation.position.current),qg(t.getState().state,e)):null},[t]),a=(0,L.useCallback)(n=>{let{previewIndex:r={}}=e.getState(),i=Object.values(r).find(e=>e?.linePlaceholder);if(!i)return;let a=Mg()?.querySelector(Fg(i.zone));if(!a)return;let o=N_(a,n.dragOperation.position.current),l=a.getBoundingClientRect();if(!(o.x>=l.left&&o.x<=l.right&&o.y>=l.top&&o.y<=l.bottom))return;let u=M_(a,o,qg(t.getState().state,i.zone));u!==null&&u!==i.index&&e.setState({previewIndex:c(s({},r),{[i.zone]:c(s({},i),{index:u})})})},[t,e]),o=(0,L.useCallback)(()=>{var e;(e=n.current)==null||e.call(n),n.current=null},[]),l=(0,L.useCallback)(e=>{o();let t=Mg();if(!t)return;let r=null,i=()=>{r===null&&(r=requestAnimationFrame(()=>{r=null,a(e)}))};t.addEventListener(`scroll`,i,{capture:!0,passive:!0}),n.current=()=>{r!==null&&cancelAnimationFrame(r),t.removeEventListener(`scroll`,i,{capture:!0})}},[o,a]);return(0,L.useEffect)(()=>o,[o]),{getTargetIndex:i,setActive:r,startScrollTracking:l,stopScrollTracking:o,update:a}},F_=(0,L.createContext)({dragListeners:{}});function I_(e,t,n=[]){let{setDragListeners:r}=(0,L.useContext)(F_);(0,L.useEffect)(()=>{r&&r(n=>c(s({},n),{[e]:[...n[e]||[],t]}))},n)}var L_=100,R_=e=>{let t=(0,L.useRef)(null);return(0,L.useCallback)(n=>{hh.setState({fallbackEnabled:!1});let r=nt();t.current=r,setTimeout(()=>{t.current===r&&(hh.setState({fallbackEnabled:!0}),n.collisionObserver.forceUpdate(!0))},e)},[])},z_=({children:e,disableAutoScroll:t,behavior:n=`auto`})=>{let r=I(e=>e.dispatch),i=I(e=>e.instanceId),a=b(),o=(0,L.useRef)(null),l=R_(100),{getIsDraggingFromHandle:u}=Xg(),[d]=(0,L.useState)(()=>{let e=new Map;return w(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,draggingFromHandle:!1,staticDrag:!1,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(t,n)=>{e.set(t,n)},unregisterRootVirtualizer:t=>{e.delete(t)},scrollToComponent:t=>{let n=Array.from(e.values());if(n.length>0)for(let e of n){let n=e.resolveIndex(t);n<0||e.virtualizer.scrollToIndex(n,{behavior:`auto`,align:`auto`})}else(Mg()?.querySelector(Pg(t)))?.scrollIntoView({behavior:`smooth`})}}))}),f=(0,L.useCallback)(e=>{let{zoneDepthIndex:t={},areaDepthIndex:n={}}=d.getState()||{},r=Object.keys(t).length>0,i=Object.keys(n).length>0,a=!1,o=!1;return(e.zone&&!t[e.zone]||!e.zone&&r)&&(a=!0),(e.area&&!n[e.area]||!e.area&&i)&&(o=!0),{zoneChanged:a,areaChanged:o}},[d]),p=(0,L.useCallback)((e,t)=>{let{zoneChanged:n,areaChanged:r}=f(e);!n&&!r||(d.setState({zoneDepthIndex:e.zone?{[e.zone]:!0}:{},areaDepthIndex:e.area?{[e.area]:!0}:{}}),l(t),setTimeout(()=>{t.collisionObserver.forceUpdate(!0)},50),o.current=null)},[d]),m=ot(p,L_),h=()=>{m.cancel(),o.current=null};(0,L.useEffect)(()=>{},[]);let[g]=(0,L.useState)(()=>[...t?Gu.plugins.filter(e=>e!==vu):Gu.plugins,y_({onChange:(e,t)=>{let n=d.getState(),{zoneChanged:r,areaChanged:i}=f(e),a=t.dragOperation.status.dragging;if(i||r){let t={},n={};e.zone&&(t={[e.zone]:!0}),e.area&&(n={[e.area]:!0}),d.setState({nextZoneDepthIndex:t,nextAreaDepthIndex:n})}if(e.zone!==`void`&&n?.zoneDepthIndex.void){p(e,t);return}if(i){if(a){let n=o.current;n&&n.area===e.area&&n.zone===e.zone||(h(),m(e,t),o.current=e)}else h(),p(e,t);return}r&&p(e,t),h()}},i)]),_=ah({activatorElements:e=>e.handle&&e.handle!==e.element?[e.element,e.handle]:[e.element],mouse:(e,t)=>eh({event:e,source:t})?[new Fu.Distance({value:5})]:void 0}),[y,x]=(0,L.useState)({}),S=(0,L.useRef)(null),C=(0,L.useRef)(void 0),{getTargetIndex:T,setActive:E,startScrollTracking:D,stopScrollTracking:O,update:k}=P_(d),ee=(0,L.useMemo)(()=>({mode:`edit`,areaId:`root`,depth:0}),[]);return(0,R.jsx)(F_.Provider,{value:{dragListeners:y,setDragListeners:x},children:(0,R.jsx)(Pd,{plugins:g,sensors:_,onDragEnd:(e,t)=>{O(),(Mg()?.querySelector(`[data-puck-entry]`))?.removeAttribute(`data-puck-dragging`);let{source:n,target:i}=e.operation;if(!n){E(!1),d.setState({draggedItem:null,draggingFromHandle:!1});return}let{zone:o,index:l}=n.data,{previewIndex:u={}}=d.getState()||{},f=Object.values(u).find(e=>e?.props.id===n.id&&!e.ghost)??null,p=!e.canceled&&i?.type!==`void`&&f?.linePlaceholder?b_({zones:C.current?[C.current.zone,f.zone]:[f.zone],itemId:f.type===`move`?f.props.id:void 0,targetZone:f.zone,getExpectedOrder:()=>qg(a.getState().state,f.zone)}):null,m=()=>{var n,u;if(E(!1),d.setState({draggedItem:null,draggingFromHandle:!1}),e.canceled||i?.type===`void`){d.setState({previewIndex:{}}),(n=y.dragend)==null||n.forEach(n=>{n(e,t)}),r({type:`setUi`,ui:{itemSelector:null,isDragging:!1}});return}let m=f&&f.linePlaceholder&&C.current&&f.zone===C.current.zone&&f.index>C.current.index?f.index-1:f?.index??l;f&&(d.setState({previewIndex:{}}),f.type===`insert`?w_(f.componentType,f.zone,f.index,a):C.current&&T_(f.props.id,C.current,c(s({},f),{index:m}),a),p?.());let h=C.current?.zone!==f?.zone||C.current?.index!==m;r({type:`setUi`,ui:{itemSelector:f?{index:m,zone:f.zone}:{index:l,zone:o},isDragging:!1},recordHistory:h}),(u=y.dragend)==null||u.forEach(n=>{n(e,t)})},h;h=en(()=>{n.status===`idle`&&(m(),h?.())})},onDragMove:(e,t)=>{var n;k(t),(n=y.dragmove)==null||n.forEach(n=>{n(e,t)})},onDragOver:(e,t)=>{var r;if(e.preventDefault(),!d.getState()?.draggedItem)return;h();let{source:i,target:o}=e.operation;if(!o||!i||o.type===`void`)return;let[s]=i.id.split(`:`),[c]=o.id.split(`:`),l=i.data,u=l.zone,f=l.index,p=``,m=0;if(o.type===`component`){let e=o.data;p=e.zone;let n=t.collisionObserver.collisions[0]?.data;m=yh({position:vh(n?.direction,E_(o.element)),sourceIndex:f,targetIndex:e.index,isSameZone:u===p})}else p=o.id.toString(),m=0;let g=a.getState().state.indexes.nodes[o.id]?.path||[];if(!(c===s||g.find(e=>{let[t]=e.split(`:`);return t===s}))){if(S.current===`new`){let e=x_(n,{isNewComponent:!0})===`static`;e&&(m=T(p,t)??m),E(e),d.setState({previewIndex:{[p]:{componentType:l.componentType,type:`insert`,index:m,zone:p,element:i.element,props:{id:i.id.toString()},linePlaceholder:e}}})}else{C.current||={zone:l.zone,index:l.index};let e=v(C.current,a.getState().state);if(e){let r=C.current.zone,a=r!==p,o=x_(n,{isDraggingBetweenSlots:a,isDraggingFromHandle:d.getState().draggingFromHandle})===`static`;o&&(m=T(p,t)??m),E(o);let s={[p]:{componentType:l.componentType,type:`move`,index:m,zone:p,props:e.props,element:i.element,linePlaceholder:o}};if(o&&a){let t=d.getState().previewIndex[r],n=C.current.index;t&&!t.linePlaceholder&&(n=t.index),s[r]={componentType:l.componentType,type:`move`,index:n,zone:r,props:e.props,element:i.element,ghost:!0}}d.setState({previewIndex:s})}}(r=y.dragover)==null||r.forEach(n=>{n(e,t)})}},onDragStart:(e,t)=>{var r;n!==`fluid`&&D(t);let{source:i}=e.operation;if(i?.type===`component`){let e=i.data,t={zone:e.zone,index:e.index};C.current=t;let r=v(t,a.getState().state);if(r){let t=x_(n,{isDraggingFromHandle:d.getState().draggingFromHandle})===`static`;E(t),d.setState({previewIndex:{[e.zone]:{componentType:e.componentType,type:`move`,index:e.index,zone:e.zone,props:r.props,element:i.element,linePlaceholder:t}}})}}(r=y.dragstart)==null||r.forEach(n=>{n(e,t)})},onBeforeDragStart:e=>{let t=e.operation.source?.type===`drawer`;S.current=t?`new`:`existing`,C.current=void 0,d.setState({draggedItem:e.operation.source,draggingFromHandle:u()}),a.getState().selectedItem?.props.id===e.operation.source?.id?r({type:`setUi`,ui:{isDragging:!0},recordHistory:!1}):r({type:`setUi`,ui:{itemSelector:null,isDragging:!0},recordHistory:!1}),(Mg()?.querySelector(`[data-puck-entry]`))?.setAttribute(`data-puck-dragging`,`true`),E(!1)},children:(0,R.jsx)(Ag,{store:d,children:(0,R.jsx)(jg,{value:ee,children:e})})})})},B_=({children:e,disableAutoScroll:t,behavior:n})=>I(e=>e.status)===`LOADING`?e:(0,R.jsx)(z_,{disableAutoScroll:t,behavior:n,children:e}),V_=f(`Drawer`,c_),H_=f(`DrawerItem`,c_),U_=({children:e,name:t,label:n,dragRef:r,isDragDisabled:i})=>{let a=(0,L.useMemo)(()=>e||(({children:e})=>(0,R.jsx)(`div`,{className:H_(`default`),children:e})),[e]);return(0,R.jsx)(`div`,{className:H_({disabled:i}),ref:r,onMouseDown:e=>e.preventDefault(),"data-testid":r?`drawer-item:${t}`:``,"data-puck-drawer-item":!0,children:(0,R.jsx)(a,{name:t,children:(0,R.jsx)(`div`,{className:H_(`draggableWrapper`),children:(0,R.jsxs)(`div`,{className:H_(`draggable`),children:[(0,R.jsx)(`div`,{className:H_(`name`),children:n??t}),(0,R.jsx)(`div`,{className:H_(`icon`),children:(0,R.jsx)($m,{})})]})})})})},W_=({children:e,name:t,label:n,id:r,isDragDisabled:i})=>{let a=Jg((0,L.useContext)(kg)),{ref:o}=Rd({id:r,data:{componentType:t},disabled:i,type:`drawer`,plugins:[Kl.configure({dropAnimation:a})]});return(0,R.jsxs)(`div`,{className:V_(`draggable`),children:[(0,R.jsx)(`div`,{className:V_(`draggableBg`),children:(0,R.jsx)(U_,{name:t,label:n,children:e})}),(0,R.jsx)(`div`,{className:V_(`draggableFg`),children:(0,R.jsx)(U_,{name:t,label:n,dragRef:o,isDragDisabled:i,children:e})})]})},G_=({name:e,children:t,id:n,label:r,index:i,isDragDisabled:a})=>{let o=n||e,[s,c]=(0,L.useState)(nt(o));return i!==void 0&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),I_(`dragend`,()=>{c(nt(o))},[o]),(0,R.jsx)(`div`,{children:(0,R.jsx)(W_,{name:e,label:r,id:s,isDragDisabled:a,children:t})},s)},K_=({children:e,droppableId:t,direction:n})=>{t&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),n&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");let r=Rm(),{ref:i}=hf({id:r,type:`void`,collisionPriority:0});return(0,R.jsx)(`div`,{className:V_(),ref:i,"data-puck-dnd":r,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:e})};K_.Item=G_,u();var q_=(e,t)=>e.getState().state.indexes.zones[t].contentIds.length,J_=({zoneCompound:e,userMinEmptyHeight:t,ref:n})=>{let r=b(),[i,a]=(0,L.useState)(0),[o,s]=(0,L.useState)(!1),{draggedItem:c,isZone:l}=Km(kg,t=>({draggedItem:t.draggedItem?.data.zone===e?t.draggedItem:null,isZone:t.draggedItem?.data.zone===e})),u=(0,L.useRef)(0),d=wg(t=>{if(t){let t=q_(r,e);if(a(0),t||u.current===0){s(!1);return}let n=r.getState().selectedItem,i=r.getState().state.indexes.zones,o=r.getState().nodes;o.setOverlayVisible(n?.props.id,!1),setTimeout(()=>{let t=i[e]?.contentIds||[];o.syncNodes(t),n&&setTimeout(()=>{o.syncNode(n.props.id),o.setOverlayVisible(n.props.id,!0)},200),s(!1)},100)}},[r,i,e]);(0,L.useEffect)(()=>{if(c&&n.current&&l){let t=n.current.getBoundingClientRect();return u.current=q_(r,e),a(t.height),s(!0),d()}},[n.current,c,d]);let f=isNaN(Number(t))?t:`${t}px`;return[i?`${i}px`:f,o]};u(),u();function Y_(e,t){let n=Id();return(0,L.useCallback)((...t)=>l(null,null,function*(){return yield n?.renderer.rendering,e(...t)}),[...t,n])}var X_=(e,t)=>{let n=(0,L.useContext)(kg),r=Km(kg,e=>e.previewIndex[t]),i=I(e=>e.state.ui.isDragging),[a,o]=(0,L.useState)(e),[s,c]=(0,L.useState)(r),l=Y_((e,t,n,r,i,a)=>{n&&!i||(t&&!t.linePlaceholder?o(me(e.filter(e=>e!==t.props.id),t.index,t.props.id)):o(i&&!a?e.filter(e=>e!==r):e),c(t))},[]);return(0,L.useEffect)(()=>{let t=n.getState(),a=t.draggedItem?.id,o=Object.values(t.previewIndex||{}),s=o.length>0,c=o.some(e=>e?.linePlaceholder);l(e,r,i,a,s,c)},[e,r,i]),[a,s]};u();var Z_=`dynamic`,Q_=`x`,$_=`y`,ev=(e,t)=>{let n=I(e=>e.status),[r,i]=(0,L.useState)(t||$_),a=(0,L.useCallback)(()=>{if(e.current){let t=window.getComputedStyle(e.current);t.display===`grid`?i(Z_):t.display===`flex`&&t.flexDirection===`row`?i(Q_):i($_)}},[e.current]);return(0,L.useEffect)(()=>{let e=()=>{a()};return window.addEventListener(`viewportchange`,e),()=>{window.removeEventListener(`viewportchange`,e)}},[]),(0,L.useEffect)(a,[n,t]),[r,a]};u();var tv=({componentId:e,zone:t})=>{let n=I(e=>e.config),r=I(e=>e.metadata),i=I(jt(n=>{let r=n.state.indexes;return(r.zones[`${e}:${t}`]?.contentIds??[]).map(e=>r.nodes[e].flatData)}));return(0,R.jsx)(Ct,{content:i,zone:t,config:n,metadata:r})};u(),u();function nv(e,t,n,r,i){let a=(0,L.useRef)(null),o=(0,L.useRef)(null),c=(0,L.useRef)(t.props),l=(0,L.useMemo)(()=>ft(n,r,i),[n,r,i]),u=(0,L.useMemo)(()=>{let n=(t.type===`root`?e.root:e.components?.[t.type])?.fields??{},r=a.current!==l,i,u=!1;if(!o.current||r)for(let e in t.props)n[e]?.type===`slot`&&(u=!0);else{i=[`id`];let e=new Set([...Object.keys(t.props),...Object.keys(o.current)]);for(let r of e)t.props[r]!==o.current[r]&&(i.push(r),n[r]?.type===`slot`&&(u=!0))}let d=qe(t,l,e,!1,u,i).props;return o.current=t.props,a.current=l,c.current=i?s(s({},c.current),d):d,c.current},[e,t,l]);return(0,L.useMemo)(()=>s(s({},t.props),u),[t.props,u])}u(),u(),u();var rv=(e,t={})=>{if(!e)return;let{disableDrag:n=!1,disableDragOnFocus:r=!0}=t,i=e=>{e.stopPropagation()};e.addEventListener(`mouseover`,i,{capture:!0});let a=()=>{setTimeout(()=>{e.addEventListener(`pointerdown`,i,{capture:!0})},200)},o=()=>{e.removeEventListener(`pointerdown`,i,{capture:!0})};return n?e.addEventListener(`pointerdown`,i,{capture:!0}):r&&(e.addEventListener(`focus`,a,{capture:!0}),e.addEventListener(`blur`,o,{capture:!0})),e.setAttribute(`data-puck-overlay-portal`,`true`),()=>{e.removeEventListener(`mouseover`,i,{capture:!0}),n?e.removeEventListener(`pointerdown`,i,{capture:!0}):r&&(e.removeEventListener(`focus`,a,{capture:!0}),e.removeEventListener(`blur`,o,{capture:!0})),e.removeAttribute(`data-puck-overlay-portal`)}};u();var iv=f(`InlineTextField`,{InlineTextField:`_InlineTextField_blawx_1`}),av=(0,L.memo)(({placeholder:e,propPath:t,componentId:n,value:r,isReadOnly:i,opts:a={}})=>{let o=(0,L.useRef)(null),u=b(),d=a.disableLineBreaks??!1;(0,L.useEffect)(()=>{let e=u.getState(),i=e.state.indexes.nodes[n].data;if(!e.getComponentConfig(i.type))throw Error(`InlineTextField Error: No config defined for ${i.type}`);if(o.current){let e=r??``;(!e||e!==o.current.innerText)&&o.current.replaceChildren(e);let i=rv(o.current),a=e=>l(null,null,function*(){let r=u.getState().state.indexes.nodes[n],i=e.target.innerText;d&&(i=i.replaceAll(/\n/gm,``));let a=Dm(r.data.props,t,i);yield C_(c(s({},r.data),{props:a}),u.getState,`replace`,!0)});return o.current.addEventListener(`input`,a),()=>{var e;(e=o.current)==null||e.removeEventListener(`input`,a),i?.()}}},[u,o.current,r,d]);let[f,p]=(0,L.useState)(!1),[m,h]=(0,L.useState)(!1);return(0,R.jsx)(`span`,{className:iv(),"data-placeholder":e,ref:o,contentEditable:f||m?`plaintext-only`:`false`,onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let t=S_(u.getState().state,n);u.getState().setUi({itemSelector:t})},onKeyDown:e=>{e.stopPropagation(),(d&&e.key===`Enter`||i)&&e.preventDefault()},onKeyUp:e=>{e.stopPropagation(),e.preventDefault()},onMouseOverCapture:()=>p(!0),onMouseOutCapture:()=>p(!1),onFocus:()=>h(!0),onBlur:()=>h(!1)})}),ov=()=>({text:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable?(0,R.jsx)(av,{propPath:r,componentId:t,value:e,opts:{disableLineBreaks:!0},isReadOnly:i,placeholder:n.placeholder}):e,textarea:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable?(0,R.jsx)(av,{propPath:r,componentId:t,value:e,isReadOnly:i,placeholder:n.placeholder}):e,custom:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable&&typeof e==`string`?(0,R.jsx)(av,{propPath:r,componentId:t,value:e,isReadOnly:i}):e});u();var sv=(0,L.lazy)(()=>a(()=>import(`./Editor-LJSLIQQP-CMiiss5h.js`).then(e=>({default:e.Editor})),__vite__mapDeps([8,1,2,3,4,6,5,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]))),cv=(0,L.lazy)(()=>a(()=>import(`./Render-H3USS5FU-DzoKNfIo.js`).then(e=>({default:e.RichTextRender})),__vite__mapDeps([0,1,2,3,4,5,6,7]))),lv=(0,L.memo)(({value:e,componentId:t,propPath:n,field:r,id:i})=>{let a=(0,L.useRef)(null),o=b(),u=e=>{e.preventDefault(),e.stopPropagation()},d=e=>{e.preventDefault(),e.stopPropagation();let n=S_(o.getState().state,t);o.getState().setUi({itemSelector:n})};(0,L.useEffect)(()=>{if(!a.current)return;let e=rv(a.current,{disableDragOnFocus:!0});return()=>e?.()},[a.current]);let f=(0,L.useCallback)((e,r)=>l(null,null,function*(){let i=o.getState().state.indexes.nodes[t],a=Dm(i.data.props,n,e);yield C_(c(s({},i.data),{props:a}),o.getState,`replace`,!0,r)}),[o,t,n]),p=(0,L.useCallback)(e=>{o.setState({currentRichText:{inlineComponentId:t,inline:!0,field:r,editor:e,id:i}})},[r,t]);if(!r.contentEditable)return(0,R.jsx)(L.Suspense,{fallback:(0,R.jsx)(gt,{content:e}),children:(0,R.jsx)(cv,{content:e,field:r})});let m={content:e,onChange:f,field:r,inline:!0,onFocus:p,id:i,name:n};return(0,R.jsx)(`div`,{ref:a,onClick:u,onClickCapture:d,children:(0,R.jsx)(L.Suspense,{fallback:(0,R.jsx)(rg,s({},m)),children:(0,R.jsx)(sv,s({},m))})})});lv.displayName=`InlineEditorWrapper`;var uv=()=>({richtext:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>{let{contentEditable:a=!0,tiptap:o}=n;if(a===!1||i)return(0,R.jsx)(cv,{content:e,field:n});let s=`${t}_${n.type}_${r}`;return(0,R.jsx)(lv,{value:e,componentId:t,propPath:r,field:n,id:s},s)}}),dv=({component:e})=>{let t=I(e=>e.config),n=I(e=>e.plugins),r=I(e=>e.fieldTransforms),i=e.props.id,a=I(e=>e.componentState[i]?.loadingCount>0),o=I(jt(e=>e.state.indexes.nodes[i]?.data.readOnly));return nv(t,e,(0,L.useMemo)(()=>s(s(s(s(s({},mt(Tv,e=>(0,R.jsx)(tv,{componentId:i,zone:e.zone}))),ov()),uv()),n.reduce((e,t)=>(t.fieldTransforms&&Object.keys(t.fieldTransforms).forEach(n=>{e[n]=t.fieldTransforms[n]}),e),{})),r),[n,r,i]),o,a)};u(),u();function fv(e,t,n=[]){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;let r=new Set(n),i=Object.keys(e).filter(e=>!r.has(e)),a=Object.keys(t).filter(e=>!r.has(e));if(i.length!==a.length)return!1;for(let n=0;n<i.length;n++){let r=i[n];if(!Object.prototype.hasOwnProperty.call(t,r))return!1;let a=e[r],o=t[r];if(!Object.is(a,o))return!1}return!0}var pv=(0,L.memo)(({Component:e,componentProps:t})=>(0,R.jsx)(e,s({},t)),(e,t)=>{let n=!0;return`puck`in e.componentProps&&`puck`in t.componentProps&&(n=ce(e.componentProps.puck,t.componentProps.puck)),e.Component===t.Component&&fv(e.componentProps,t.componentProps,[`puck`])&&n});u();var mv=5,hv=320,gv=new Map,_v=e=>gv.get(e)??hv,vv=(e,t)=>{t<=0||gv.set(e,t)},yv=({contentIds:e,zoneCompound:t,renderItem:n})=>{let r=I(e=>e.selectedItem?.props.id??null),i=Mg(),a=(0,L.useContext)(kg),o=Km(kg,e=>{let t=e.draggedItem?.id;return t?String(t):null}),s=Km(kg,e=>{if(e.draggedItem?.id){let[t]=Object.entries(e.previewIndex??{}).find(([,e])=>!e?.ghost)??[];return t?.split(`:`)[0]}return null}),c=i?.defaultView,l=(0,L.useRef)(new Map),u=b(),d=(0,L.useCallback)(t=>{if(!t||t===`root`)return-1;let n=e.indexOf(t);if(n>-1)return n;let r=u.getState().state.indexes.nodes?.[t]?.path??[];for(let t=r.length-1;t>=0;--t){let n=r[t]?.split(`:`)[0];if(!n||n===`root`)continue;let i=e.indexOf(n);if(i>-1)return i}return-1},[u,e]),f=(0,L.useMemo)(()=>{let e=new Set;return[r,o,s].forEach(t=>{let n=d(t);n>-1&&e.add(n)}),Array.from(e).sort((e,t)=>e-t)},[s,o,d,r]),p=(0,L.useCallback)(e=>{let t=nm(e);return f.forEach(e=>{t.includes(e)||t.push(e)}),t.sort((e,t)=>e-t),t},[f]),m=Cm({count:e.length,getItemKey:t=>e[t],estimateSize:t=>_v(e[t]),getScrollElement:()=>c??null,overscan:mv,observeElementRect:(e,t)=>c?am(e,t):rm(e,t),observeElementOffset:(e,t)=>c?lm(e,t):cm(e,t),scrollToFn:(e,t,n)=>c?fm(e,t,n):pm(e,t,n),rangeExtractor:p,initialOffset:()=>c?c.scrollY:0});(0,L.useEffect)(()=>(a.getState().registerRootVirtualizer(t,{resolveIndex:e=>d(e),virtualizer:m}),()=>{a.getState().unregisterRootVirtualizer(t)}),[d,m,t,a]);let h=(0,L.useCallback)(e=>{let t=l.current.get(e);if(t)return t;let n=t=>{if(!t)return;let n=Math.ceil(t.getBoundingClientRect().height)||hv;typeof n==`number`&&n>0&&vv(e,n)};return l.current.set(e,n),n},[]);(0,L.useEffect)(()=>{let t=new Set(e);Array.from(l.current.keys()).forEach(e=>{t.has(e)||l.current.delete(e)})},[e]);let g=m.getVirtualItems(),_=m.getTotalSize(),v=(0,L.useMemo)(()=>{let t=[],r=0,i=-1;g.forEach(a=>{if(!a)return;let o=e[a.index],s=Math.max(a.start-r,0);s>0&&t.push((0,R.jsx)(`div`,{style:{height:`${s}px`}},`gap:${i}:${a.index}`)),t.push(n({componentId:o,index:a.index,measureRef:h(o)})),r=a.end,i=a.index});let a=Math.max(_-r,0);return a>0&&t.push((0,R.jsx)(`div`,{style:{height:`${a}px`}},`gap:${i}:end`)),t},[_,g,h]);return(0,R.jsx)(R.Fragment,{children:v})};u();var bv=f(`DropZone`,o_),xv=`var(--puck-line-placeholder-width, 2px)`,Sv=({zoneRef:e,contentIds:t,index:n})=>{let[r,i]=(0,L.useState)();return(0,L.useLayoutEffect)(()=>{let r=e.current,a=r?.ownerDocument.defaultView;if(!r||!a)return;let o=e=>e?a.getComputedStyle(e):void 0,s=e=>parseFloat(e??``)||0,c=e=>{let n=t[e];if(n===void 0)return;let i=r.querySelector(`:scope > ${Pg(n)}:not([data-dnd-dragging])`);if(i)return{el:i,rect:i.getBoundingClientRect()}},l=r.getBoundingClientRect(),u=a.getComputedStyle(r),d=c(n-1),f=c(n),p=f??d,{horizontal:m,reversed:h,forward:g,start:_,end:v,isBefore:y}=j_(A_(r,a,u)),b=s(m?u.columnGap:u.rowGap),x=(e,t)=>{let n=t===`start`==!h?m?`marginLeft`:`marginTop`:m?`marginRight`:`marginBottom`;return s(o(e)?.[n])},S=s(u.borderLeftWidth),C=s(u.borderTopWidth),w=s(u.borderRightWidth),T=s(u.borderBottomWidth),E;E=f?d&&y(v(d.rect),_(f.rect))?(v(d.rect)+_(f.rect))/2:_(f.rect)-g*(Math.max(x(f.el,`start`),b)/2):d?v(d.rect)+g*(Math.max(x(d.el,`end`),b)/2):m?h?l.right-w-s(u.paddingRight):l.left+S+s(u.paddingLeft):h?l.bottom-T-s(u.paddingBottom):l.top+C+s(u.paddingTop),i(m?{top:(p?.rect.top??l.top+C+s(u.paddingTop))-l.top+r.scrollTop-C,height:p?.rect.height??l.height-C-T-s(u.paddingTop)-s(u.paddingBottom),left:D_(E-l.left+r.scrollLeft-S,0,r.scrollWidth),width:xv,transform:`translateX(-50%)`}:{left:(p?.rect.left??l.left+S+s(u.paddingLeft))-l.left+r.scrollLeft-S,width:p?.rect.width??l.width-S-w-s(u.paddingLeft)-s(u.paddingRight),top:D_(E-l.top+r.scrollTop-C,0,r.scrollHeight),height:xv,transform:`translateY(-50%)`})},[e,t,n]),r?(0,R.jsx)(`div`,{className:bv(`linePlaceholder`),style:r,"data-puck-line-placeholder":!0}):null},Cv=f(`DropZone`,o_),wv=({element:e,label:t,override:n})=>e?(0,R.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e.outerHTML}}):(0,R.jsx)(U_,{name:t,children:n}),Tv=e=>(0,R.jsx)(Dv,s({},e)),Ev=(0,L.memo)(({zoneCompound:e,componentId:t,index:n,dragAxis:r,collisionAxis:i,inDroppableZone:a,itemRef:o})=>{let l=I(e=>e.metadata),{depth:u=1}=(0,L.useContext)(Og)??{},d=(0,L.useContext)(kg),f=I(jt(e=>e.state.indexes.nodes[t]?.flatData.props)),p=I(e=>e.state.indexes.nodes[t]?.data.type),m=b(),h=(0,L.useMemo)(()=>{if(f)return j({type:p,props:f});let n=d.getState().previewIndex[e];return t===n?.props.id?{type:n.componentType,props:n.props,previewType:n.type,element:n.element}:null},[m,t,e,p,f]),g=I(e=>h?.type?e.config.components[h.type]:null),_=(0,L.useMemo)(()=>({renderDropZone:Tv,isEditing:!0,dragRef:null,metadata:s(s({},l),g?.metadata)}),[l,g?.metadata]),v=I(e=>e.overrides),y=I(e=>e.componentState[t]?.loadingCount>0),S=I(e=>e.selectedItem?.props.id===t||!1),C=x(`label-component`),w=x(`canvas-noconfig`,{type:(h?.type)?.toString()??``}),T=g?.label??h?.type.toString()??C,E=(0,L.useMemo)(()=>c(s(s({},g?.defaultProps),h?.props),{puck:_,editMode:!0}),[g?.defaultProps,h?.props,_]),D=dv({component:(0,L.useMemo)(()=>({type:h?.type??p,props:E}),[h?.type,p,E])});if(!h)return;let O=g?g.render:()=>(0,R.jsx)(`div`,{style:{padding:48,textAlign:`center`},children:w}),k=h.type,ee=`previewType`in h&&h.previewType===`insert`;return(0,R.jsx)(a_,{id:t,componentType:k,zoneCompound:e,depth:u+1,index:n,isLoading:y,isSelected:S,label:T,autoDragAxis:r,userDragAxis:i,inDroppableZone:a,itemRef:o,children:e=>g?.inline&&!ee?(0,R.jsx)(pv,{Component:O,componentProps:c(s({},D),{puck:c(s({},D.puck),{dragRef:e})})}):(0,R.jsx)(`div`,{ref:e,children:ee?(0,R.jsx)(wv,{label:T,override:v.componentItem??v.drawerItem,element:`element`in h&&h.element?h.element:void 0}):(0,R.jsx)(pv,{Component:O,componentProps:D})})})}),Dv=(0,L.forwardRef)(function(e,t){let{props:{zone:n,allow:r,disallow:i,style:a,className:o,minEmptyHeight:l=`128px`,collisionAxis:u,as:d},forwardableProps:f}=dt(e),p=(0,L.useContext)(Og),m=b(),{areaId:h,depth:g=0,registerLocalZone:_,unregisterLocalZone:v}=p??{},y=I(jt(e=>h?e.state.indexes.nodes[h]?.path:null)),x=ye;h&&n!==ye&&(x=`${h}:${n}`);let S=x===ye||n===ye||h===`root`,C=Km(kg,e=>e.nextAreaDepthIndex[h||``]),w=I(jt(e=>e.state.indexes.zones[x]?.contentIds)),T=I(jt(e=>e.state.indexes.zones[x]?.type));(0,L.useEffect)(()=>{(!T||T===`dropzone`)&&p?.registerZone&&p?.registerZone(x)},[T,m]),(0,L.useEffect)(()=>{T===`dropzone`&&x!==ye&&console.warn(`DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots`)},[T]);let E=(0,L.useMemo)(()=>w||[],[w]),D=(0,L.useRef)(null),O=(0,L.useCallback)(e=>s_(e,{allow:r,disallow:i}),[r,i]),k=Km(kg,e=>{let t=e.draggedItem?.data.componentType;return O(t)}),ee=C||S,A=Km(kg,e=>{let t=!0;return t=e.zoneDepthIndex[x]??!1,t&&=k,t});(0,L.useEffect)(()=>(_&&_(x,k||A),()=>{v&&v(x)}),[k,A,x]);let[te,j]=X_(E,x),M=j&&!j.linePlaceholder?1:0,N=te.length===M,P=A&&N,ne=(0,L.useContext)(kg);(0,L.useEffect)(()=>{let{enabledIndex:e}=ne.getState();ne.setState({enabledIndex:c(s({},e),{[x]:A})})},[A,ne,x]);let{ref:re}=hf({id:x,collisionPriority:A?g:0,disabled:!P,collisionDetector:ph,type:`dropzone`,data:{areaId:h,depth:g,isDroppableTarget:k,path:y||[]}}),ie=I(e=>e?.selectedItem&&h===e?.selectedItem.props.id),[F]=ev(D,u),[ae,oe]=J_({zoneCompound:x,userMinEmptyHeight:l,ref:D}),se=(0,L.useCallback)(e=>{Dg([D,re,t],e)},[re]),ce=I(e=>e._experimentalVirtualization),le=d??`div`,ue=ce&&(h??`root`)===`root`&&g===0;return(0,R.jsxs)(le,c(s({},f),{className:`${Cv({isRootZone:S,hoveringOverArea:ee,isEnabled:A,isAreaSelected:ie,hasChildren:E.length>0,isAnimating:oe})}${o?` ${o}`:``}`,ref:se,"data-testid":`dropzone:${x}`,"data-puck-dropzone":x,style:c(s({},a),{"--puck-slot-min-empty-height":ae,backgroundColor:a?.backgroundColor}),children:[ue?(0,R.jsx)(yv,{contentIds:te,zoneCompound:x,renderItem:e=>(0,R.jsx)(Ev,{zoneCompound:x,componentId:e.componentId,dragAxis:F,index:e.index,collisionAxis:u,inDroppableZone:k,itemRef:e.measureRef},e.componentId)}):te.map((e,t)=>(0,R.jsx)(Ev,{zoneCompound:x,componentId:e,dragAxis:F,index:t,collisionAxis:u,inDroppableZone:k},e)),j?.linePlaceholder&&(0,R.jsx)(Sv,{zoneRef:D,contentIds:E,index:j.index})]}))}),Ov=({config:e,item:t,metadata:n,fieldTransforms:r})=>{let i=e.components[t.type],a=St(e,t,t=>(0,R.jsx)(Ct,c(s({},t),{config:e,metadata:n,fieldTransforms:r})),r),o=(0,L.useMemo)(()=>({areaId:a.id,depth:1}),[a.id]);return(0,R.jsx)(jg,{value:o,children:(0,R.jsx)(i.render,c(s({},a),{puck:c(s({},a.puck),{renderDropZone:kv,metadata:s(s({},n),i.metadata)})}))},a.id)},kv=e=>(0,R.jsx)(Av,s({},e)),Av=(0,L.forwardRef)(function(e,t){let{props:{className:n,style:r,zone:i,as:a},forwardableProps:o}=dt(e),l=(0,L.useContext)(Og),{areaId:u=`root`}=l||{},{config:d,data:f,metadata:p,fieldTransforms:m}=(0,L.useContext)(Nv),h=`${u}:${i}`,g=f?.content||[];(0,L.useEffect)(()=>{g||l?.registerZone&&l?.registerZone(h)},[g]);let _=a??`div`;return!f||!d?null:(h!==ye&&(g=xe(f,h).zones[h]),(0,R.jsx)(_,c(s({},o),{className:n,style:r,ref:t,children:g.map(e=>d.components[e.type]?(0,R.jsx)(Ov,{config:d,item:e,metadata:p,fieldTransforms:m},e.props.id):null)})))}),jv=e=>(0,R.jsx)(Mv,s({},e)),Mv=(0,L.forwardRef)(function(e,t){return(0,L.useContext)(Og)?.mode===`edit`?(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(Dv,c(s({},e),{ref:t}))}):(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(Av,c(s({},e),{ref:t}))})}),Nv=L.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function Pv({config:e,data:t,metadata:n={},fieldTransforms:r}){let i=r,a=c(s({},t),{root:t.root||{},content:t.content||[]}),o=`props`in a.root?a.root.props:a.root,l=o?.title||``,u=St(e,{type:`root`,props:c(s({},o),{puck:{renderDropZone:jv,isEditing:!1,dragRef:null,metadata:n},title:l,editMode:!1,id:`puck-root`})},t=>(0,R.jsx)(Tt,c(s({},t),{config:e,metadata:n,fieldTransforms:i})),i),d=(0,L.useMemo)(()=>({mode:`render`,depth:0}),[]);return e.root?.render?(0,R.jsx)(Nv.Provider,{value:{config:e,data:a,metadata:n,fieldTransforms:i},children:(0,R.jsx)(jg,{value:d,children:(0,R.jsx)(e.root.render,c(s({},u),{children:(0,R.jsx)(kv,{zone:_e})}))})}):(0,R.jsx)(Nv.Provider,{value:{config:e,data:a,metadata:n,fieldTransforms:i},children:(0,R.jsx)(jg,{value:d,children:(0,R.jsx)(kv,{zone:_e})})})}u(),u();function Fv(e,t,n){return l(this,null,function*(){let r=t().state.indexes.nodes[e];if(!r){console.warn(`Warning: Could not find component with id "${e}" to resolve its data. Component may have been removed or the id is invalid.`);return}yield C_(r.data,t,n)})}u();function Iv(e,t,n){return l(this,null,function*(){let r=v(e,t().state);if(!r){console.warn(`Warning: Could not find component for selector "${JSON.stringify(e)}" to resolve its data. Component may have been removed or the selector is invalid.`);return}yield C_(oe(r),t,n)})}var Lv=(e,t)=>{let n={back:e.history.back,forward:e.history.forward,setHistories:e.history.setHistories,setHistoryIndex:e.history.setHistoryIndex,hasPast:e.history.hasPast(),hasFuture:e.history.hasFuture(),histories:e.history.histories,index:e.history.index},r={appState:fe(e.state),config:e.config,dispatch:e.dispatch,getPermissions:e.permissions.getPermissions,refreshPermissions:e.permissions.refreshPermissions,resolveDataById:(e,n)=>Fv(e,t,n),resolveDataBySelector:(e,n)=>Iv(e,t,n),history:n,selectedItem:e.selectedItem||null,getItemBySelector:t=>v(t,e.state),getItemById:t=>e.state.indexes.nodes[t].data,getSelectorForId:t=>S_(e.state,t),getParentById:t=>{let n=e.state.indexes.nodes[t].parentId;if(n===null)return;let r=e.state.indexes.nodes[n];if(r)return r.data},dictionary:e.dictionary};return r.__private={appState:e.state},r},Rv=(0,L.createContext)(null),zv=e=>({state:e.state,config:e.config,dispatch:e.dispatch,permissions:e.permissions,history:e.history,selectedItem:e.selectedItem,dictionary:e.dictionary}),Bv=e=>{let[t]=(0,L.useState)(()=>w(()=>Lv(zv(e.getState()),e.getState)));return(0,L.useEffect)(()=>e.subscribe(e=>zv(e),n=>{t.setState(Lv(n,e.getState))}),[]),t};u(),u(),u(),u(),u();var Vv=f(`ComponentList`,{ComponentList:`_ComponentList_htktj_1`,"ComponentList--isExpanded":`_ComponentList--isExpanded_htktj_5`,"ComponentList-content":`_ComponentList-content_htktj_9`,"ComponentList-title":`_ComponentList-title_htktj_17`,"ComponentList-titleIcon":`_ComponentList-titleIcon_htktj_63`}),Hv=({name:e,label:t})=>{let n=I(e=>e.overrides),r=I(t=>t.permissions.getPermissions({type:e}).insert);return(0,L.useEffect)(()=>{n.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[n]),(0,R.jsx)(K_.Item,{label:t,name:e,isDragDisabled:!r,children:n.componentItem??n.drawerItem})},Uv=({children:e,title:t,id:n})=>{let r=I(e=>e.config),i=I(e=>e.setUi),a=I(e=>e.state.ui.componentList),{expanded:o=!0}=a[n]||{},l=`puck-drawer-category-${n}`,u=x(`drawer-category-collapse`,{title:t??``}),d=x(`drawer-category-expand`,{title:t??``});return(0,R.jsxs)(`div`,{className:Vv({isExpanded:o}),children:[t&&(0,R.jsxs)(`button`,{type:`button`,className:Vv(`title`),"aria-expanded":o,"aria-controls":l,onClick:()=>i({componentList:c(s({},a),{[n]:c(s({},a[n]),{expanded:!o})})}),title:o?u:d,children:[(0,R.jsx)(`div`,{children:t}),(0,R.jsx)(`div`,{className:Vv(`titleIcon`),children:o?(0,R.jsx)(Xe,{size:12}):(0,R.jsx)(Te,{size:12})})]}),(0,R.jsx)(`div`,{className:Vv(`content`),id:l,children:(0,R.jsx)(K_,{children:e||Object.keys(r.components).map(e=>(0,R.jsx)(Hv,{label:r.components[e].label??e,name:e},e))})})]})};Uv.Item=Hv;var Wv=()=>{let[e,t]=(0,L.useState)(),n=I(e=>e.config),r=I(e=>e.state.ui.componentList),i=x(`drawer-category-other`);return(0,L.useEffect)(()=>{if(Object.keys(r).length>0){let e=[],a;a=Object.entries(r).map(([t,r])=>!r.components||(r.components.forEach(t=>{e.push(t)}),r.visible===!1)?null:(0,R.jsx)(Uv,{id:t,title:n.categories?.[t]?.title||r.title||t,children:r.components.map((e,t)=>{let r=n.components[e]||{};return(0,R.jsx)(Uv.Item,{label:r.label??e,name:e,index:t},e)})},t));let o=Object.keys(n.components).filter(t=>e.indexOf(t)===-1);o.length>0&&!r.other?.components&&r.other?.visible!==!1&&a.push((0,R.jsx)(Uv,{id:`other`,title:r.other?.title||i,children:o.map((e,t)=>{let r=n.components[e]||{};return(0,R.jsx)(Uv.Item,{name:e,label:r.label??e,index:t},e)})},`other`)),t(a)}},[n.categories,n.components,r,i]),e},Gv=()=>{let e=I(e=>e.overrides),t=Wv(),n=(0,L.useMemo)(()=>(e.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),e.components||e.drawer||`div`),[e]);return(0,R.jsx)(n,{children:t||(0,R.jsx)(Uv,{id:`all`})})};u();var Kv=f(`BlocksPlugin`,{BlocksPlugin:`_BlocksPlugin_9af19_1`}),qv=(e={})=>({name:`blocks`,label:e.label??`Blocks`,render:()=>(0,R.jsx)(`div`,{className:Kv(),children:(0,R.jsx)(Gv,{})}),icon:e.icon??(0,R.jsx)(le,{})});u(),u(),u();var Jv=(e,t)=>Object.keys(e.indexes.zones).filter(e=>e.split(`:`)[0]===t);u(),u(),u(),u(),u(),u(),u();function Yv(e,t){if(typeof e!=`string`)throw Error(`Can't get field definition for path (${e}): Path should be a string`);if(!t||typeof t!=`object`)return;let n=e.split(/\.|\[\d+\]/).filter(Boolean),r=t,i;for(let e=0;e<n.length;e++){let t=n[e];if(i=r[t],e===n.length-1)return i;if(!i||(i.type!==`object`||!i.objectFields)&&(i.type!==`array`||!i.arrayFields))return;i.type===`object`&&(r=i.objectFields),i.type===`array`&&(r=i.arrayFields)}}var Xv=(e,t,n)=>{let[r,i]=e.split(`:`);if(!i)return;let a=n[r]?.data.type;return Yv(i,(a&&a!==`root`?t.components[a]:t.root)?.fields)},Zv={},Qv=(e,t,n)=>{if(n.zones[e]?.type!==`slot`)return Zv;let r=Xv(e,t,n.nodes);return r?.type===`slot`?{allow:r.allow,disallow:r.disallow}:Zv},$v=`outline-item`,ey=`outline-zone`,ty=(e,t,n)=>{let r=e.get(t);if(r!==void 0)return r;let i=n();return e.set(t,i),i},ny=(e,t,n,r,i)=>ty(e,`zone:${t}`,()=>s_(n,Qv(t,r,i))),ry=(e,t,n,r,i)=>ty(e,`childZones:${t}`,()=>Object.keys(i.zones).some(a=>a.startsWith(`${t}:`)&&ny(e,a,n,r,i))),iy=(e,t,n,r)=>ty(e,`subtree:${t}`,()=>t===n||(r[t]?.path||[]).some(e=>e.split(`:`)[0]===n)),ay=(e,t)=>n=>{if(n.type!==$v)return!1;let r=n.data,i=e.outlineStore.getState().acceptCache,{config:a,state:o}=e.appStore.getState(),s=o.indexes;return iy(i,t.kind===`row`?t.itemId:t.zoneCompound.split(`:`)[0],r.itemId,s.nodes)?!1:t.kind===`zone`?ny(i,t.zoneCompound,r.componentType,a,s):ny(i,t.zoneCompound,r.componentType,a,s)||ry(i,t.itemId,r.componentType,a,s)};u();var oy=600,sy=()=>{let e=null,t=null,n=()=>{e!==null&&(clearTimeout(e),e=null),t=null};return w((r,i)=>({status:`idle`,draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:e=>r({status:`dragging`,draggedRow:e,acceptCache:new Map}),setTarget:(e,t)=>{let n=i();(n.indicator?.targetId!==e.targetId||n.indicator?.position!==e.position||n.drop?.zone!==t.zone||n.drop?.index!==t.index)&&r({indicator:e,drop:t})},clearTarget:()=>{(i().indicator!==null||i().drop!==null)&&r({indicator:null,drop:null})},scheduleExpand:(a,o)=>{t===a||i().tempExpandedIds.has(a)||(n(),t=a,r({expandCandidateId:a}),e=setTimeout(()=>{e=null,t=null,r(e=>({tempExpandedIds:new Set(e.tempExpandedIds).add(a),expandCandidateId:null})),o()},oy))},cancelPendingExpand:()=>{n(),i().expandCandidateId!==null&&r({expandCandidateId:null})},endDrag:()=>{n(),r({status:`dropping`,indicator:null,drop:null,expandCandidateId:null})},reset:()=>{n(),r({status:`idle`,draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},cy=(0,L.createContext)(sy()),ly=()=>(0,L.useContext)(cy),uy=e=>Km(cy,e),dy=({kind:e,zoneCompound:t})=>{let n=b(),r=ly(),i=`${e}:${t}`,{ref:a}=hf({id:i,type:ey,accept:(0,L.useMemo)(()=>ay({appStore:n,outlineStore:r},{kind:`zone`,zoneCompound:t}),[n,r,t]),collisionDetector:ph,data:{kind:`zone`,zoneCompound:t}}),o=uy(e=>e.indicator?.targetId===i);return(0,L.useMemo)(()=>({isDropTarget:o,ref:a}),[o,a])};u(),u();var fy=f(`DropLine`,{DropLine:`_DropLine_eyz3q_2`,"DropLine--top":`_DropLine--top_eyz3q_12`,"DropLine--bottom":`_DropLine--bottom_eyz3q_16`,"DropLine--outset":`_DropLine--outset_eyz3q_20`}),py=({edge:e,outset:t})=>(0,R.jsx)(`div`,{className:fy({top:e===`top`,bottom:e===`bottom`,outset:!!t})});u(),u(),u(),u();var my=f(`LayerTree`,{"LayerTree-helper":`_LayerTree-helper_1m7e4_2`,"LayerTree-helperRoot":`_LayerTree-helperRoot_1m7e4_11`}),hy=({zoneCompound:e})=>{let{ref:t,isDropTarget:n}=dy({kind:`empty`,zoneCompound:e}),r=x(`outline-empty`),[i]=e.split(`:`),a=i===A;return(0,R.jsxs)(`li`,{className:Lm(my(`helper`),a?my(`helperRoot`):void 0),"data-puck-drop-target":n||void 0,ref:t,children:[r,n&&(0,R.jsx)(py,{edge:`top`})]})};u(),u();var gy=({componentType:e,index:t,itemId:n,zoneCompound:r})=>{let i=b(),a=ly(),o=(0,L.useMemo)(()=>ay({appStore:i,outlineStore:a},{kind:`row`,itemId:n,zoneCompound:r}),[i,a,n,r]),s=(0,L.useMemo)(()=>_h(`y`),[]),{handleRef:c,ref:l,isDragSource:u}=Mp({id:n,index:t,group:r,type:$v,accept:o,data:{kind:`row`,itemId:n,zoneCompound:r,index:t,componentType:e},collisionPriority:1,collisionDetector:s,transition:{duration:0},plugins:e=>[...e,Kl.configure({feedback:`clone`,dropAnimation:null})]}),{indicatorPosition:d,isExpandCandidate:f,isTempExpanded:p}=uy(e=>({indicatorPosition:e.indicator?.targetId===n?e.indicator.position:null,isExpandCandidate:e.expandCandidateId===n,isTempExpanded:e.tempExpandedIds.has(n)}));return{rowRef:(0,L.useCallback)(e=>{l(e),c(e)},[l,c]),isDragSource:u,indicatorPosition:d,isExpandCandidate:f,isTempExpanded:p}};u();var _y={Layer:`_Layer_onfgu_1`,"Layer-inner":`_Layer-inner_onfgu_8`,"Layer--isSortable":`_Layer--isSortable_onfgu_18`,"Layer-content":`_Layer-content_onfgu_22`,"Layer-clickable":`_Layer-clickable_onfgu_29`,"Layer-caret":`_Layer-caret_onfgu_57`,"Layer--containsZone":`_Layer--containsZone_onfgu_68`,"Layer-title":`_Layer-title_onfgu_76`,"Layer-name":`_Layer-name_onfgu_85`,"Layer-icon":`_Layer-icon_onfgu_91`,"Layer-zones":`_Layer-zones_onfgu_101`,"Layer--isExpanded":`_Layer--isExpanded_onfgu_106`,"Layer--isSelected":`_Layer--isSelected_onfgu_115`,"Layer--isExpandCandidate":`_Layer--isExpandCandidate_onfgu_138`,"Layer--isDragSource":`_Layer--isDragSource_onfgu_143`};u(),u();var vy=f(`LayerActions`,{LayerActions:`_LayerActions_d90t9_2`,"LayerActions--visible":`_LayerActions--visible_d90t9_18`}),yy=({node:e,visible:t})=>{let n=I(e=>e.dispatch),r=ly(),i=I(jt(t=>{let n=v({index:e.index,zone:e.zoneCompound},t.state),r=t.permissions.getPermissions({item:n});return{delete:r.delete,duplicate:r.duplicate}})),a=x(`outline-item-duplicate`),o=x(`outline-item-delete`),s=(0,L.useCallback)(t=>{t.stopPropagation(),r.getState().status===`idle`&&n({type:`remove`,index:e.index,zone:e.zoneCompound})},[n,r,e]),c=(0,L.useCallback)(t=>{t.stopPropagation(),r.getState().status===`idle`&&n({type:`duplicate`,sourceIndex:e.index,sourceZone:e.zoneCompound})},[n,r,e.index,e.zoneCompound]);return!i.delete&&!i.duplicate?null:(0,R.jsxs)(`div`,{className:vy({visible:t}),children:[i.duplicate&&(0,R.jsx)(Ie,{onClick:c,title:a,type:`button`,children:(0,R.jsx)(Pe,{})}),i.delete&&(0,R.jsx)(Ie,{onClick:s,title:o,type:`button`,children:(0,R.jsx)(Ee,{})})]})},by=f(`Layer`,_y),xy=(0,L.forwardRef)(function({dataIndex:e,depth:t,isSelected:n,node:r,selectedId:i},a){let o=I(e=>e.dispatch),l=I(e=>e.state.ui.itemExpanded?.[r.itemId]??!1),u=Km(kg,e=>e.hoveringComponent===r.itemId),d=I(e=>{let t=v({index:r.index,zone:r.zoneCompound},e.state);return e.permissions.getPermissions({item:t})?.drag}),{indicatorPosition:f,isDragSource:p,isExpandCandidate:m,isTempExpanded:h,rowRef:g}=gy({componentType:r.componentType,index:r.index,itemId:r.itemId,zoneCompound:r.zoneCompound}),_=(0,L.useContext)(kg),y=ly(),b=x(`outline-item-collapse`),S=x(`outline-item-expand`),w=r.childZones.length>0,T=(0,L.useCallback)(e=>{o({type:`setUi`,ui:{itemSelector:e}})},[o]),E=l||h,D=f!==null,O=r.childZones.length!==1;return(0,R.jsxs)(`li`,{ref:a,className:by({containsZone:w,isDragSource:p,isExpandCandidate:m,isExpanded:E,isHovering:u,isSelected:n,isSortable:d}),"data-index":e,"data-puck-layer-tree-id":r.itemId,children:[D&&(0,R.jsx)(py,{edge:f===`before`?`top`:`bottom`,outset:!0}),(0,R.jsxs)(`div`,{className:by(`inner`),ref:g,onMouseEnter:e=>{e.stopPropagation(),y.getState().status===`idle`&&_.setState({hoveringComponent:r.itemId})},onMouseLeave:e=>{e.stopPropagation(),_.setState({hoveringComponent:null})},children:[(0,R.jsx)(`div`,{className:by(`caret`),children:(0,R.jsx)(Ie,{onClick:e=>{e.stopPropagation(),y.getState().status===`idle`&&o({type:`setUi`,ui:e=>{let t=s({},e.itemExpanded);return e.itemExpanded?.[r.itemId]?delete t[r.itemId]:t[r.itemId]=!0,{itemExpanded:t}},recordHistory:!1})},title:l?b:S,type:`button`,children:(0,R.jsx)(ze,{})})}),(0,R.jsxs)(`div`,{className:by(`content`),children:[(0,R.jsx)(`button`,{type:`button`,className:by(`clickable`),onClick:()=>{y.getState().status===`idle`&&(T({index:r.index,zone:r.zoneCompound}),_.getState().scrollToComponent(r.itemId))},children:(0,R.jsxs)(`div`,{className:by(`title`),children:[(0,R.jsx)(`div`,{className:by(`icon`),children:r.componentType===`Text`||r.componentType===`Heading`?(0,R.jsx)(Be,{}):(0,R.jsx)(C,{})}),(0,R.jsx)(`div`,{className:by(`name`),children:r.label})]})}),(0,R.jsx)(yy,{node:r,visible:u&&!p})]})]}),w&&E&&r.childZones.map(e=>(0,R.jsx)(`div`,{className:by(`zones`),children:(0,R.jsx)(Iy,{depth:O?t+1:t,selectedId:i,tree:O?e:c(s({},e),{label:void 0})})},e.zoneCompound))]})});u();var Sy={LayerTree:`_LayerTree_o5tyt_1`,"LayerTree--nested":`_LayerTree--nested_o5tyt_12`},Cy=f(`LayerTree`,Sy),wy=({depth:e,selectedId:t,tree:n})=>(0,R.jsxs)(`ul`,{className:Cy({nested:e>0}),children:[n.items.length===0&&(0,R.jsx)(hy,{zoneCompound:n.zoneCompound}),n.items.map(n=>(0,R.jsx)(xy,{depth:e,isSelected:t===n.itemId,node:n,selectedId:t},n.itemId))]});u();var Ty=f(`LayerTree`,Sy),Ey=32,Dy=8,Oy=new Map,ky=e=>Oy.get(e)??Ey,Ay=(e,t)=>{t<=0||Oy.set(e,t)},jy=e=>{let t=e?.parentElement??null;for(;t;){let{overflow:e,overflowY:n}=getComputedStyle(t);if([e,n].some(e=>/auto|scroll/.test(e)))return t;t=t.parentElement}return null},My=({depth:e,selectedId:t,tree:n})=>{let r=(0,L.useRef)(null),i=uy(e=>e.draggedRow?.zoneCompound===n.zoneCompound?e.draggedRow.index:null),a=(0,L.useCallback)(e=>{let t=nm(e);return i!==null&&!t.includes(i)&&(t.push(i),t.sort((e,t)=>e-t)),t},[i]),o=Cm({count:n.items.length,estimateSize:e=>ky(n.items[e].itemId),getItemKey:e=>n.items[e].itemId,getScrollElement:()=>jy(r.current),overscan:Dy,rangeExtractor:a,measureElement:e=>{let t=Math.ceil(e.getBoundingClientRect().height),n=e.dataset.puckLayerTreeId;return n&&Ay(n,t),t||Ey}}),s=o.getVirtualItems(),c=o.getTotalSize(),l=[],u=0,d=-1;s.forEach(r=>{let i=n.items[r.index],a=Math.max(r.start-u,0);a>0&&l.push((0,R.jsx)(`li`,{"aria-hidden":`true`,style:{height:`${a}px`}},`gap:${n.zoneCompound}:${d}:${r.index}`)),l.push((0,R.jsx)(xy,{dataIndex:r.index,depth:e,isSelected:t===i.itemId,node:i,ref:o.measureElement,selectedId:t},i.itemId)),u=r.end,d=r.index});let f=Math.max(c-u,0);return f>0&&l.push((0,R.jsx)(`li`,{"aria-hidden":`true`,style:{height:`${f}px`}},`gap:${n.zoneCompound}:${d}:end`)),(0,R.jsxs)(`ul`,{className:Ty({nested:e>0}),ref:r,children:[n.items.length===0&&(0,R.jsx)(hy,{zoneCompound:n.zoneCompound}),l]})};u();var Ny=f(`LayerTree`,{"LayerTree-zoneTitle":`_LayerTree-zoneTitle_fvhlh_2`,"LayerTree-zoneIcon":`_LayerTree-zoneIcon_fvhlh_19`}),Py=25,Fy=({label:e,zoneCompound:t})=>{let{ref:n,isDropTarget:r}=dy({kind:`label`,zoneCompound:t});return(0,R.jsxs)(`div`,{className:Ny(`zoneTitle`),"data-puck-drop-target":r||void 0,ref:n,children:[(0,R.jsx)(`div`,{className:Ny(`zoneIcon`),children:(0,R.jsx)(ie,{})}),e,r&&(0,R.jsx)(py,{edge:`bottom`})]})},Iy=({depth:e,selectedId:t,tree:n})=>{let r=e===0&&n.items.length>=Py;return(0,R.jsxs)(R.Fragment,{children:[n.label&&(0,R.jsx)(Fy,{label:n.label,zoneCompound:n.zoneCompound}),r?(0,R.jsx)(My,{depth:e,selectedId:t,tree:n}):(0,R.jsx)(wy,{depth:e,selectedId:t,tree:n})]})};u(),u(),u();function Ly(e,t){return Object.keys(t).some(t=>t.startsWith(`${e}:`))}var Ry=2,zy=60,By=(e,t)=>{let n,r=0,i=0,a=()=>{let o=Mg()?.querySelector(`[data-puck-component="${e}"]`),s=o?o.getBoundingClientRect().top:null;if(r=s===n?r+1:0,n=s,i+=1,r>=Ry||i>=zy){t(e);return}requestAnimationFrame(a)};requestAnimationFrame(a)},Vy=e=>{if(typeof document>`u`)return;let t=document.getElementById(`preview-frame`);e?t?.setAttribute(`data-puck-outline-dragging`,`true`):t?.removeAttribute(`data-puck-outline-dragging`)},Hy=(e,t)=>{let n=e.operation.source,r=n?.data;if(!n||!r)return;let i=t.appStore.getState(),a=v({zone:r.zoneCompound,index:r.index},i.state);if(!a||!i.permissions.getPermissions({item:a}).drag){e.preventDefault();return}t.outlineDndStore.getState().startDrag({itemId:r.itemId,zoneCompound:r.zoneCompound,index:r.index,componentType:r.componentType}),Vy(!0),i.dispatch({type:`setUi`,ui:{isDragging:!0},recordHistory:!1})},Uy=(e,t,n)=>{let r=n.outlineDndStore.getState(),i=r.draggedRow;if(!i)return;let a=e.operation.target;if(!a){r.cancelPendingExpand(),r.clearTarget();return}let o=a.data;if(o.kind===`zone`){r.cancelPendingExpand(),r.setTarget({targetId:a.id.toString(),position:`inside`},{zone:o.zoneCompound,index:0});return}let{config:s,state:c}=n.appStore.getState(),l=c.indexes,u=r.acceptCache;if(ny(u,o.zoneCompound,i.componentType,s,l)){let e=t.collisionObserver.collisions[0]?.data,n=vh(e?.direction);r.setTarget({targetId:a.id.toString(),position:n},{zone:o.zoneCompound,index:yh({position:n,sourceIndex:i.index,targetIndex:o.index,isSameZone:o.zoneCompound===i.zoneCompound})})}else r.clearTarget();let d=!!c.ui.itemExpanded?.[o.itemId]||r.tempExpandedIds.has(o.itemId),f=Ly(o.itemId,l.zones);!d&&f?r.scheduleExpand(o.itemId,()=>{requestAnimationFrame(()=>t.collisionObserver.forceUpdate(!0))}):r.cancelPendingExpand()},Wy=(e,t)=>{let{source:n}=e.operation,r=t.outlineDndStore.getState(),i=r.draggedRow,a=e.canceled?null:r.drop,o=t.appStore.getState().dispatch;if(Vy(!1),i&&a){T_(i.itemId,{zone:i.zoneCompound,index:i.index},{zone:a.zone,index:a.index},t.appStore);let e=a.zone!==i.zoneCompound||a.index!==i.index;o({type:`setUi`,ui:{itemSelector:{zone:a.zone,index:a.index},isDragging:!1},recordHistory:e}),By(i.itemId,t.scrollToComponent)}else o({type:`setUi`,ui:{isDragging:!1},recordHistory:!1});r.endDrag();let s=()=>t.outlineDndStore.getState().reset();if(!n||n.status===`idle`)s();else{let e=en(()=>{n.status===`idle`&&(s(),e?.())})}},Gy=[],Ky=({children:e})=>{let t=b(),n=(0,L.useContext)(kg),[r]=(0,L.useState)(()=>sy()),i=I(e=>e.dnd?.disableOutlineDrag??!1),a=ah({mouse:[new Fu.Distance({value:5})]}),o=(0,L.useMemo)(()=>({outlineDndStore:r,appStore:t,scrollToComponent:e=>n.getState().scrollToComponent(e)}),[r,t,n]);return(0,R.jsx)(cy.Provider,{value:r,children:(0,R.jsx)(Pd,{sensors:i?Gy:a,onBeforeDragStart:e=>{Hy(e,o)},onDragOver:(e,t)=>{e.preventDefault(),Uy(e,t,o)},onDragMove:(e,t)=>{Uy(e,t,o)},onDragEnd:e=>{Wy(e,o)},children:e})})};u();var qy={LayerTreeRoot:`_LayerTreeRoot_1qowl_1`};u();var Jy=e=>{let t={};return Object.keys(e).forEach(e=>{let[n]=e.split(`:`);n&&(t[n]||(t[n]=[]),t[n].push(e))}),t},Yy=(e,t,n,r)=>{if(r!==void 0)return r;let[,i]=e.split(`:`);if(i)return Xv(e,n,t)?.label??i},Xy=({config:e,itemId:t,index:n,nodes:r,zoneCompound:i,zones:a,zonesByParent:o,componentFallbackLabel:s})=>{let c=(r[t]?.data.type)?.toString()??s,l=e.components[c]?.label??c;return{childZones:(o[t]||[]).map(t=>Zy({config:e,nodes:r,zoneCompound:t,zones:a,zonesByParent:o})),componentType:c,index:n,itemId:t,label:l,zoneCompound:i}},Zy=({config:e,label:t,nodes:n,zoneCompound:r,zones:i,zonesByParent:a=Jy(i),componentFallbackLabel:o})=>({items:(i[r]?.contentIds??[]).map((t,o)=>Xy({config:e,itemId:t,index:o,nodes:n,zoneCompound:r,zones:i,zonesByParent:a})),label:Yy(r,n,e,t),zoneCompound:r}),Qy=f(`LayerTreeRoot`,qy),$y=({selectedId:e,trees:t})=>{let n=I(e=>e.dnd?.disableOutlineDrag??!1);return(0,R.jsx)(Ky,{children:(0,R.jsx)(`div`,{className:Qy(),"data-puck-dnd-disabled":n||void 0,children:t.map(t=>(0,R.jsx)(Iy,{depth:0,selectedId:e,tree:t},t.zoneCompound))})})};u(),u();var eb=f(`CollapseAll`,{CollapseAll:`_CollapseAll_1r4cy_1`,"CollapseAll-icon":`_CollapseAll-icon_1r4cy_5`,"CollapseAll--visible":`_CollapseAll--visible_1r4cy_10`});function tb({className:e}){let t=I(e=>Object.keys(e.state.ui.itemExpanded??{}).length>0),n=I(e=>e.dispatch),r=x(`outline-header-collapseall`);return(0,R.jsx)(`div`,{className:Lm(eb({visible:t}),e),children:(0,R.jsx)(Ie,{title:r,onClick:()=>{n({type:`setUi`,ui:{itemExpanded:{}}})},children:(0,R.jsx)(De,{className:eb(`icon`)})})})}var nb=tb;u(),u();var rb=f(`OutlineHeader`,{OutlineHeader:`_OutlineHeader_ntv8r_1`}),ib=({children:e,title:t})=>{let n=x(`outline-header-title`);return(0,R.jsxs)(`div`,{className:rb(),children:[(0,R.jsx)(Gh,{rank:`2`,size:`xs`,children:n??t}),e]})};u();var ab=f(`OutlineWrapper`,{OutlineWrapper:`_OutlineWrapper_b9ln0_1`,"OutlineWrapper-collapseAll":`_OutlineWrapper-collapseAll_b9ln0_9`,"OutlineWrapper-layers":`_OutlineWrapper-layers_b9ln0_15`}),ob=({children:e})=>(0,R.jsx)(`div`,{className:ab(),children:e}),sb=()=>{let e=I(e=>e.overrides.outline),t=I(e=>e.config),n=I(e=>e.state.indexes.nodes),r=I(e=>e.state.indexes.zones),i=I(e=>e.selectedItem?.props.id||null),a=x(`label-component`),o=I(jt(e=>Jv(e.state,`root`))),s=(0,L.useMemo)(()=>o.map(e=>Zy({config:t,label:o.length===1?``:e.split(`:`)[1],nodes:n,zoneCompound:e,zones:r,componentFallbackLabel:a})),[t,n,o,r,a]),c=(0,L.useMemo)(()=>e||ob,[e]);return(0,R.jsxs)(c,{children:[(0,R.jsx)(ib,{children:(0,R.jsx)(nb,{className:ab(`collapseAll`)})}),(0,R.jsx)(`div`,{className:ab(`layers`),children:(0,R.jsx)($y,{selectedId:i,trees:s})})]})};u();var cb=f(`OutlinePlugin`,{OutlinePlugin:`_OutlinePlugin_1ylsc_1`}),lb=(e={})=>({name:`outline`,label:e.label??`Outline`,render:()=>(0,R.jsx)(`div`,{className:cb(),children:(0,R.jsx)(sb,{})}),icon:e.icon??(0,R.jsx)(ie,{})});u(),u(),u();var ub={Breadcrumbs:`_Breadcrumbs_8c6w5_1`,"Breadcrumbs-breadcrumbLabel":`_Breadcrumbs-breadcrumbLabel_8c6w5_7`,"Breadcrumbs-breadcrumb":`_Breadcrumbs-breadcrumb_8c6w5_7`};u();var db=e=>{let t=I(e=>e.selectedItem?.props.id),n=I(e=>e.config),r=I(e=>e.state.indexes.nodes[t]?.path),i=b(),a=x(`label-page`),o=x(`label-component`);return(0,L.useMemo)(()=>{let t=r?.map(e=>{let[t]=e.split(`:`);if(t===`root`)return{label:n?.root?.label||a,selector:null};let r=i.getState().state.indexes.nodes[t],s=r.path[r.path.length-1],c=(i.getState().state.indexes.zones[s]?.contentIds||[]).indexOf(t);return{label:r?n.components[r.data.type]?.label??r.data.type:o,selector:r?{index:c,zone:r.path[r.path.length-1]}:null}})||[];return e?t.slice(t.length-e):t},[r,e,a,o])},fb=f(`Breadcrumbs`,ub),pb=({children:e,numParents:t=1})=>{let n=I(e=>e.setUi),r=db(t);return r.length===0?null:(0,R.jsxs)(`div`,{className:fb(),children:[r.map((e,t)=>(0,R.jsxs)(`div`,{className:fb(`breadcrumb`),children:[(0,R.jsx)(`button`,{type:`button`,className:fb(`breadcrumbLabel`),onClick:()=>n({itemSelector:e.selector}),children:e.label}),(0,R.jsx)(ze,{size:16})]},t)),e]})};u(),u();var mb=f(`PuckFields`,{PuckFields:`_PuckFields_1tz2l_1`,"PuckFields--isLoading":`_PuckFields--isLoading_1tz2l_6`,"PuckFields-loadingOverlay":`_PuckFields-loadingOverlay_1tz2l_10`,"PuckFields-loadingOverlayInner":`_PuckFields-loadingOverlayInner_1tz2l_25`,"PuckFields-field":`_PuckFields-field_1tz2l_32`,"PuckFields-rows":`_PuckFields-rows_1tz2l_37`,"PuckFields--wrapFields":`_PuckFields--wrapFields_1tz2l_41`}),hb=e=>e.fields.id===(e.selectedItem?.props.id||`root`),gb=(e,t)=>(n,r)=>l(null,null,function*(){let{dispatch:i,state:a,selectedItem:o,resolveComponentData:l}=t.getState(),{data:u,ui:d}=a,{itemSelector:f}=d,p=u.root.props||u.root,m=o?o.props:p,h=c(s({},m),{[e]:n});if(o&&f){let e=yield l(c(s({},o),{props:h}),`replace`),n=S_(t.getState().state,o.props.id);if(!n)return;i({type:`replace`,destinationIndex:n.index,destinationZone:n.zone||ye,data:e.node,ui:r});return}if(u.root.props){i({type:`replaceRoot`,root:(yield l(c(s({},u.root),{props:h}),`replace`)).node,ui:s(s({},d),r),recordHistory:!0});return}i({type:`setData`,data:{root:h}})}),_b=({fieldName:e})=>{let t=I(e=>e.overrides.fieldTypes),n=I(t=>t.fields.fields[e]),r=I(t=>((t.selectedItem?t.selectedItem.readOnly:t.state.data.root.readOnly)||{})[e]),i=I(t=>n?t.selectedItem?`${t.selectedItem.props.id}_${n.type}_${e}`:`root_${n.type}_${e}`:null),a=I(jt(e=>{let{selectedItem:t,permissions:n}=e;return t?n.getPermissions({item:t}):n.getPermissions({root:!0})})),o=b(),s=(0,L.useCallback)(gb(e,o),[e]),c=(0,L.useContext)(Ym.ctx);return(0,L.useEffect)(()=>o.subscribe(t=>t.getCurrentData().props?.[e],t=>{c.setState({[e]:t})}),[o,c]),!i||!Dh(t,n)?null:(0,R.jsx)(Wm,{className:mb(`field`),collapsible:og(n,t),children:(0,R.jsx)(fg,{field:n,name:e,id:i,readOnly:!a.edit||r,onChange:s})},i)},vb=(0,L.memo)(({fieldName:e})=>{let t=b(),n=(0,L.useMemo)(()=>{let n=t.getState().getCurrentData().props?.[e];return{[e]:n}},[]);return(0,R.jsx)(Ym.Provider,{value:n,children:(0,R.jsx)(_b,{fieldName:e})})}),yb=({children:e})=>(0,R.jsx)(R.Fragment,{children:e}),bb=({fields:e})=>(0,R.jsx)(R.Fragment,{children:Object.values(e)}),xb=({fields:e})=>{let t=I(hb),n=I(e=>e.getComponentConfig(e.selectedItem?.type)?.renderFields)??bb;return(0,R.jsx)(`div`,{className:mb(`rows`),children:t&&(0,R.jsx)(n,{fields:e})})},Sb=({children:e})=>{let t=b(),n=I(e=>e.state.ui.fieldTab),r=(0,L.useCallback)((e,{reason:n})=>{let r=t.getState();n===`missing`&&!hb(r)||r.state.ui.fieldTab!==e&&r.dispatch({type:`setUi`,ui:{fieldTab:e}})},[t]);return(0,R.jsx)(Sg,{value:n,onChange:r,children:e})},Cb=(0,L.memo)(({wrapFields:e=!0})=>{let t=I(e=>e.overrides),n=I(e=>((e.selectedItem?e.componentState[e.selectedItem.props.id]?.loadingCount:e.componentState.root?.loadingCount)??0)>0),r=I(jt(e=>e.state.ui.itemSelector)),i=I(e=>e.selectedItem?.props.id),a=b();Re(a,i);let o=I(hb),s=I(e=>e.fields.loading),c=I(jt(e=>{let{fields:t}=e.fields;return Object.keys(t).filter(n=>Dh(e.overrides.fieldTypes,t[n]))})),l=(0,L.useMemo)(()=>{let e={};return o&&c.forEach(t=>{e[t]=(0,R.jsx)(vb,{fieldName:t},t)}),e},[o,c]),u=s||n,d=(0,L.useMemo)(()=>t.fields||yb,[t]);return(0,R.jsxs)(`form`,{className:mb({wrapFields:e}),onSubmit:e=>{e.preventDefault()},children:[(0,R.jsx)(Sb,{children:(0,R.jsx)(d,{isLoading:u,itemSelector:r,fields:l,children:(0,R.jsx)(xb,{fields:l})})}),u&&(0,R.jsx)(`div`,{className:mb(`loadingOverlay`),children:(0,R.jsx)(`div`,{className:mb(`loadingOverlayInner`),children:(0,R.jsx)(_,{size:16})})})]})});u();var wb=f(`FieldsPlugin`,{FieldsPlugin:`_FieldsPlugin_1q574_1`,"FieldsPlugin-header":`_FieldsPlugin-header_1q574_7`}),Tb=()=>{let e=x(`label-page`);return I(e=>{let t=e.selectedItem;return t?e.config.components[t.type]?.label??t.type:null})??e},Eb=({desktopSideBar:e=`right`,label:t,icon:n}={})=>({name:`fields`,label:t??`Fields`,render:()=>(0,R.jsxs)(`div`,{className:wb(),children:[(0,R.jsx)(`div`,{className:wb(`header`),children:(0,R.jsx)(pb,{numParents:2,children:(0,R.jsx)(Tb,{})})}),(0,R.jsx)(Cb,{})]}),icon:n??(0,R.jsx)(be,{}),mobileOnly:e===`right`});u(),u(),u(),u(),u();var Db=`@import "https://rsms.me/inter/inter.css";

/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_gr1cb_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_gr1cb_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_gr1cb_30 + ._ActionBar-label_gr1cb_17 {
  padding-inline-start: 0;
}
._ActionBar-label_gr1cb_17 + ._ActionBarAction_gr1cb_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_gr1cb_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_gr1cb_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_gr1cb_38:empty {
  display: none;
}
._ActionBarAction_gr1cb_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_gr1cb_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction--grab_gr1cb_83 {
  cursor: grab;
  touch-action: none;
}
._ActionBarAction-icon_gr1cb_88 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._ActionBarAction_gr1cb_30 svg {
  max-width: none !important;
}
._ActionBarAction_gr1cb_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_gr1cb_30:hover:not(._ActionBarAction--disabled_gr1cb_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_gr1cb_30:active:not(._ActionBarAction--disabled_gr1cb_74),
._ActionBarAction--active_gr1cb_114 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_gr1cb_38 * {
  margin: 0;
}
._ActionBar-separator_gr1cb_127 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_1e4q5_2:not([data-puck-field-group-collapsible]) + ._InputWrapper_1e4q5_2:not([data-puck-field-group-collapsible]) {
  margin-top: var(--puck-space-3);
}
._InputWrapper_1e4q5_2[data-puck-field-group-collapsible]:has(+ ._InputWrapper_1e4q5_2) {
  --_puck-field-group-inset-bottom: var(--puck-space-3);
  --_puck-field-group-collapsed-flush-inset-bottom: calc( var(--puck-space-3) + var(--puck-space-2) );
}
._InputWrapper_1e4q5_2:not([data-puck-field-group-collapsible]) + ._InputWrapper_1e4q5_2[data-puck-field-group-collapsible] {
  --_puck-field-group-inset-top: var(--puck-space-3);
}
._Input-label_1e4q5_21 {
  align-items: center;
  color: var(--puck-field-label-color-text, var(--puck-color-text-secondary));
  display: flex;
  padding-bottom: var(--puck-field-label-space-y, var(--puck-space-3));
  font-size: var(--puck-field-label-font-size, var(--puck-font-size-xxs));
  font-weight: var( --puck-field-label-font-weight, var(--puck-font-weight-semibold) );
}
._Input-labelIcon_1e4q5_33 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-end: var(--puck-space-1);
  padding-inline-start: var(--puck-space-1);
}
._Input-disabledIcon_1e4q5_40 {
  color: var(--puck-color-text-muted);
  margin-inline-start: auto;
}
._Input-labelEndIcon_1e4q5_45 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-start: auto;
}
._Input-disabledIcon_1e4q5_40 + ._Input-labelEndIcon_1e4q5_45 {
  margin-inline-start: var(--puck-space-1);
}
._Input-input_1e4q5_56 {
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: var(--puck-field-color-text, var(--puck-color-text));
  font-family: inherit;
  font-size: var(--puck-font-size-xs);
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_1e4q5_56 {
    font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  }
}
._Input-select_1e4q5_88 {
  position: relative;
  width: 100%;
}
select._Input-input_1e4q5_56 {
  appearance: none;
  cursor: pointer;
}
._Input-selectIcon_1e4q5_98 {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  fill: var(--puck-field-color-border, var(--puck-color-border));
  stroke-width: 0;
}
._Input-selectIcon_1e4q5_98:dir(rtl) {
  right: auto;
  left: 12px;
}
@media (hover: hover) and (pointer: fine) {
  ._Input_1e4q5_2:has(> input):hover ._Input-input_1e4q5_56:not([readonly]),
  ._Input_1e4q5_2:has(> textarea):hover ._Input-input_1e4q5_56:not([readonly]) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_1e4q5_2:has(> ._Input-select_1e4q5_88):hover ._Input-input_1e4q5_56:not([disabled]) {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_1e4q5_2:not(._Input--readOnly_1e4q5_138):has(> ._Input-select_1e4q5_88):hover ._Input-selectIcon_1e4q5_98 {
    fill: var(--puck-field-color-border-hover, var(--puck-color-border-hover));
  }
}
._Input-input_1e4q5_56:focus {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
._Input--readOnly_1e4q5_138 > ._Input-input_1e4q5_56,
._Input--readOnly_1e4q5_138 > ._Input-select_1e4q5_88 > select._Input-input_1e4q5_56 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input--readOnly_1e4q5_138 > ._Input-select_1e4q5_88 > select._Input-input_1e4q5_56 ~ ._Input-selectIcon_1e4q5_98 {
  fill: var(--puck-field-color-text-disabled, var(--puck-color-text-secondary));
}
._Input-radioGroupItems_1e4q5_177 {
  --_puck-field-radio-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-radio-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-radio-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  display: flex;
  border: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  border-radius: var(--_puck-field-radio-radius);
  flex-wrap: wrap;
}
._Input-radio_1e4q5_177 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  flex-grow: 1;
}
._Input-radio_1e4q5_177:first-of-type {
  border-bottom-left-radius: var(--_puck-field-radio-radius);
  border-top-left-radius: var(--_puck-field-radio-radius);
}
._Input-radio_1e4q5_177:first-of-type ._Input-radioInner_1e4q5_206 {
  border-bottom-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radio_1e4q5_177:last-of-type {
  border-bottom-right-radius: var(--_puck-field-radio-radius);
  border-inline-end: 0;
  border-top-right-radius: var(--_puck-field-radio-radius);
}
._Input-radio_1e4q5_177:last-of-type ._Input-radioInner_1e4q5_206 {
  border-bottom-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radioInner_1e4q5_206 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-radio-border-width)) );
  text-align: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Input-radio_1e4q5_177:has(:focus-visible) {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_1e4q5_206:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._Input--readOnly_1e4q5_138 ._Input-radioGroupItems_1e4q5_177 {
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_1e4q5_138 ._Input-radioInner_1e4q5_206 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text-secondary));
  cursor: default;
}
._Input--readOnly_1e4q5_138 ._Input-radio_1e4q5_177 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--puck-field-color-border-disabled, var(--puck-color-border));
}
._Input--readOnly_1e4q5_138 ._Input-radio_1e4q5_177:last-of-type {
  border-inline-end: 0;
}
._Input-radio_1e4q5_177 ._Input-radioInput_1e4q5_288:checked ~ ._Input-radioInner_1e4q5_206 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-medium);
}
._Input--readOnly_1e4q5_138 ._Input-radioInput_1e4q5_288:checked ~ ._Input-radioInner_1e4q5_206 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input-radio_1e4q5_177 ._Input-radioInput_1e4q5_288 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._Input-checkboxGroupItems_1e4q5_318 {
  display: flex;
  flex-direction: column;
  gap: var(--puck-space-2);
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-style: solid;
  border-width: var(--puck-field-border-width, 1px);
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-space-3);
}
._Input-checkbox_1e4q5_318 {
  align-items: center;
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  gap: var(--puck-space-2);
}
._Input-checkboxInput_1e4q5_338 {
  --_puck-field-checkbox-color-bg: var( --puck-field-checkbox-color-bg, var(--puck-color-interactive) );
  --_puck-field-checkbox-color-check: var( --puck-field-checkbox-color-check, var(--puck-color-text-inverse) );
  appearance: none;
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  cursor: inherit;
  display: grid;
  flex-shrink: 0;
  height: 16px;
  margin: 0;
  place-content: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 16px;
}
._Input-checkboxInput_1e4q5_338::after {
  border: solid var(--_puck-field-checkbox-color-check);
  border-width: 0 2px 2px 0;
  content: "";
  height: 8px;
  margin-top: -2px;
  transform: rotate(45deg);
  visibility: hidden;
  width: 4px;
}
._Input-checkboxInput_1e4q5_338:checked {
  background-color: var(--_puck-field-checkbox-color-bg);
  border-color: var(--_puck-field-checkbox-color-bg);
}
._Input-checkboxInput_1e4q5_338:checked::after {
  visibility: visible;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-checkbox_1e4q5_318:hover ._Input-checkboxInput_1e4q5_338:not(:checked, :disabled) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._Input-checkboxInput_1e4q5_338:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
}
._Input--readOnly_1e4q5_138 ._Input-checkboxInput_1e4q5_338 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_1e4q5_138 ._Input-checkboxInput_1e4q5_338:checked {
  background-color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  border-color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input--readOnly_1e4q5_138 ._Input-checkbox_1e4q5_318 {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
}
textarea._Input-input_1e4q5_56 {
  margin-bottom: calc(var(--puck-space-1) * -1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_xob4n_5 {
  --_puck-field-array-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  --_puck-field-array-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-array-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-array-radius-inner: calc( var(--_puck-field-array-radius) - var(--_puck-field-array-border-width) );
  display: flex;
  flex-direction: column;
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  border: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-radius: var(--_puck-field-array-radius);
}
._ArrayField--isDraggingFrom_xob4n_30 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  overflow: hidden;
}
._ArrayField-addButton_xob4n_38 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: none;
  border-radius: var(--_puck-field-array-radius-inner);
  display: flex;
  color: var(--puck-field-array-add-color-icon, var(--puck-color-interactive));
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: calc(var(--puck-field-space-y, var(--puck-space-3)) + 2px) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  text-align: left;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayField--hasItems_xob4n_58 > ._ArrayField-addButton_xob4n_38 {
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_xob4n_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_xob4n_5:not(._ArrayField--isDraggingFrom_xob4n_30) > ._ArrayField-addButton_xob4n_38:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayField_xob4n_5:not(._ArrayField--isDraggingFrom_xob4n_30) > ._ArrayField-addButton_xob4n_38:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayField-inner_xob4n_93 {
  margin-top: -1px;
}
._ArrayFieldItem_xob4n_101 {
  display: block;
  position: relative;
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
}
._ArrayFieldItem--isDragging_xob4n_110 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_xob4n_114::before {
  display: none;
}
._ArrayFieldItem--isExpanded_xob4n_114 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: var(--_puck-field-array-border-width) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring)) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_xob4n_110 {
  outline: var(--puck-border-width-focus) var(--puck-field-color-border-dragging, var(--puck-color-selection-border)) solid !important;
}
._ArrayFieldItem--isDragging_xob4n_110 ._ArrayFieldItem-summary_xob4n_132:active {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
}
._ArrayFieldItem_xob4n_101 + ._ArrayFieldItem_xob4n_101 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_xob4n_132 {
  --_puck-drag-icon-color: var(--puck-field-color-text, var(--puck-color-text));
  --_puck-drag-icon-color-hover: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  list-style: none;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  position: relative;
  overflow: hidden;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayFieldItem--noFields_xob4n_167 > ._ArrayFieldItem-summary_xob4n_132 {
  cursor: grab;
}
._ArrayFieldItem_xob4n_101:first-of-type > ._ArrayFieldItem-summary_xob4n_132 {
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_xob4n_176 > ._ArrayField-inner_xob4n_93 > ._ArrayFieldItem_xob4n_101:last-of-type:not(._ArrayFieldItem--isExpanded_xob4n_114) > ._ArrayFieldItem-summary_xob4n_132 {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_xob4n_176 > ._ArrayField-inner_xob4n_93 > ._ArrayFieldItem--isExpanded_xob4n_114:last-of-type {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayFieldItem-summary_xob4n_132:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_xob4n_132:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayFieldItem-summary_xob4n_132:active {
  background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayFieldItem--isExpanded_xob4n_114 > ._ArrayFieldItem-summary_xob4n_132 {
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-semibold);
  transition: none;
}
._ArrayFieldItem-body_xob4n_228 {
  background: var(--puck-field-color-surface, var(--puck-color-surface));
  display: none;
}
._ArrayFieldItem--isExpanded_xob4n_114 > ._ArrayFieldItem-body_xob4n_228 {
  display: block;
}
._ArrayFieldItem-fieldset_xob4n_237 {
  border: none;
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  --_puck-field-group-guide-width: 0px;
  --_puck-field-group-guide-space: 0px;
}
._ArrayFieldItem-rhs_xob4n_253 {
  display: flex;
  gap: var(--puck-space-1);
  align-items: center;
}
._ArrayFieldItem-actions_xob4n_259 {
  color: var(--puck-color-text-secondary);
  display: flex;
  gap: var(--puck-space-1);
  opacity: 0;
}
._ArrayFieldItem-summary_xob4n_132:focus-within > ._ArrayFieldItem-rhs_xob4n_253 > ._ArrayFieldItem-actions_xob4n_259,
._ArrayFieldItem-summary_xob4n_132:hover > ._ArrayFieldItem-rhs_xob4n_253 > ._ArrayFieldItem-actions_xob4n_259 {
  opacity: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_1pxxt_1 {
  align-items: center;
  background: var(--puck-iconbutton-color-bg, transparent);
  border: none;
  border-radius: var(--puck-iconbutton-radius, var(--puck-radius-m));
  color: var(--puck-iconbutton-color-icon, currentColor);
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: var(--puck-iconbutton-space, var(--puck-space-1));
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._IconButton--active_1pxxt_15 {
  color: var( --puck-iconbutton-color-icon-active, var(--puck-color-interactive) );
}
._IconButton_1pxxt_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_1pxxt_1:hover:not(._IconButton--disabled_1pxxt_28) {
    background: var( --_puck-iconbutton-color-bg-hover, var( --puck-iconbutton-color-bg-hover, var(--puck-color-interactive-neutral-hover) ) );
    color: var( --puck-iconbutton-color-icon-hover, var(--puck-color-interactive) );
    cursor: pointer;
    transition: none;
  }
}
._IconButton_1pxxt_1:active {
  background: var( --puck-iconbutton-color-bg-active, var(--puck-color-interactive-soft) );
  transition: none;
}
._IconButton--disabled_1pxxt_28 {
  color: var( --puck-iconbutton-color-icon-disabled, var(--puck-color-text-subtle) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_5e515_1 {
  color: var(--_puck-drag-icon-color, var(--puck-color-text-muted));
  cursor: grab;
  padding: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
}
._DragIcon--disabled_5e515_10 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_5e515_1:not(._DragIcon--disabled_5e515_10):hover {
    color: var(--_puck-drag-icon-color-hover, var(--puck-color-focus-ring));
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder]:not([data-puck-line-drag] *) * {
  opacity: 0 !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --_puck-field-array-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_143vl_1 {
  display: flex;
}
._ExternalInput-button_143vl_5 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  font-weight: var(--puck-font-weight-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;
}
._ExternalInput--dataSelected_143vl_34 ._ExternalInput-button_143vl_5 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_143vl_41 ._ExternalInput-button_143vl_5 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
}
._ExternalInput-detachButton_143vl_48 {
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-bottom-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  background-color: var( --puck-field-external-detach-color-bg, var(--puck-color-surface-subtle) );
  color: var( --puck-field-external-detach-color-text, var(--puck-color-text-muted) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  padding: var(--puck-space-2) var(--puck-space-3);
  position: relative;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  margin-inline-start: -1px;
  cursor: pointer;
}
._ExternalInput-button_143vl_5:focus-visible,
._ExternalInput-detachButton_143vl_48:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover,
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    transition: none;
  }
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-external-detach-color-text, var(--puck-color-text-muted)) );
  }
  ._ExternalInput--dataSelected_143vl_34:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  }
}
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:active,
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ExternalInputModal_143vl_118 {
  color: var(--puck-color-text);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_143vl_128 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_143vl_128 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-grid_143vl_128 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_143vl_144 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_143vl_144 {
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
    display: block;
  }
}
._ExternalInputModal-masthead_143vl_164 {
  background-color: var(--puck-color-surface-subtle);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-5);
  padding: var(--puck-space-5);
}
._ExternalInputModal-tableWrapper_143vl_173 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_143vl_173 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-text);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_143vl_189 {
  background-color: var(--puck-color-surface);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_143vl_189 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-td_143vl_204 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-tr_143vl_210 ._ExternalInputModal-td_143vl_204:first-of-type {
  font-weight: var(--puck-font-weight-medium);
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover {
    background: var(--puck-color-interactive-soft-hover);
    color: var(--puck-color-interactive);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover ._ExternalInputModal-td_143vl_204:first-of-type {
    border-inline-start: var(--puck-border-width-strong) solid var(--puck-color-interactive);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:last-of-type ._ExternalInputModal-td_143vl_204 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_143vl_173 {
  display: none;
}
._ExternalInputModal--hasData_143vl_244 ._ExternalInputModal-tableWrapper_143vl_173 {
  display: block;
}
._ExternalInputModal-loadingBanner_143vl_248 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-surface) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_143vl_265 ._ExternalInputModal-loadingBanner_143vl_248 {
  display: flex;
}
._ExternalInputModal-searchForm_143vl_269 {
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-3);
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_143vl_269 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_143vl_269 {
  display: flex;
  background: var(--puck-color-surface);
  border-width: var(--puck-border-width-regular);
  border-style: solid;
  border-color: var(--puck-color-border);
  border-radius: var(--puck-radius-m);
  flex-grow: 1;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within {
  border-color: var(--puck-color-border-hover);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover {
    border-color: var(--puck-color-border-hover);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_143vl_306 {
  align-items: center;
  background: var(--puck-color-surface-subtle);
  border-bottom-left-radius: var(--puck-radius-m);
  border-top-left-radius: var(--puck-radius-m);
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-subtle);
  display: flex;
  justify-content: center;
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within ._ExternalInputModal-searchIcon_143vl_306 {
  color: var(--puck-color-text-secondary);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover ._ExternalInputModal-searchIcon_143vl_306 {
    color: var(--puck-color-text-secondary);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_143vl_333 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_143vl_343 {
  border: none;
  border-radius: var(--puck-radius-m);
  background: var(--puck-color-surface);
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  width: 100%;
}
._ExternalInputModal-searchInput_143vl_343:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_143vl_358 {
  display: flex;
  gap: var(--puck-space-2);
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_143vl_358 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_143vl_371 {
  align-self: center;
}
._ExternalInputModal-footerContainer_143vl_375 {
  background-color: var(--puck-color-surface-subtle);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._ExternalInputModal-footer_143vl_375 {
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  text-align: right;
}
._ExternalInputModal-field_143vl_388 {
  color: var(--puck-color-text-secondary);
  margin: var(--puck-space-4);
  margin-bottom: var(--puck-space-3);
  display: block;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Modal/styles.module.css/#css-module-data */
._Modal_g5xob_1 {
  background: var(--puck-color-overlay-backdrop);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_g5xob_15 {
  display: flex;
}
._Modal-inner_g5xob_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: var(--puck-radius-l);
  overflow: hidden;
  background: var(--puck-color-surface);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Heading/styles.module.css/#css-module-data */
._Heading_97eh4_1 {
  display: block;
  color: var(--_puck-heading-color, var(--puck-color-text));
  font-weight: var(--puck-font-weight-bold);
  margin: 0;
}
._Heading_97eh4_1 b {
  font-weight: var(--puck-font-weight-bold);
}
._Heading--xxxxl_97eh4_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: var(--puck-letter-spacing-heading);
  font-weight: var(--puck-font-weight-heavy);
}
._Heading--xxxl_97eh4_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_97eh4_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_97eh4_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_97eh4_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_97eh4_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_97eh4_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_97eh4_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Button/Button.module.css/#css-module-data */
._Button_oe4qj_1 {
  --_puck-button-default-space-x: 20px;
  --_puck-button-default-font-size: var(--puck-font-size-xxs);
  --_puck-button-default-font-weight: var(--puck-font-weight-regular);
  --_puck-button-default-color-bg-disabled: var(--puck-color-bg-disabled);
  --_puck-button-default-color-text-disabled: var(--puck-color-text-disabled);
  appearance: none;
  background: none;
  border: var(--puck-border-width-regular) solid transparent;
  border-radius: var(--puck-button-radius, var(--puck-radius-m));
  color: var(--puck-color-text-inverse);
  display: inline-flex;
  align-items: center;
  gap: var(--puck-space-2);
  letter-spacing: var(--puck-letter-spacing-ui);
  font-family: var(--puck-font-family);
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_oe4qj_1:hover,
._Button_oe4qj_1:active {
  transition: none;
}
._Button--medium_oe4qj_34 {
  min-height: 34px;
  padding-bottom: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-medium-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-medium-font-size, var(--_puck-button-default-font-size) );
}
._Button--large_oe4qj_62 {
  padding-bottom: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-large-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-large-font-size, var(--_puck-button-default-font-size) );
}
._Button-icon_oe4qj_89 {
  margin-top: 2px;
}
._Button--primary_oe4qj_93 {
  background: var( --puck-button-primary-color-bg, var(--puck-color-interactive) );
  border-color: var(--puck-button-primary-color-border, transparent);
  color: var(--puck-button-primary-color-text, var(--puck-color-text-inverse));
}
._Button_oe4qj_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_oe4qj_93:hover {
    background-color: var( --puck-button-primary-color-bg-hover, var(--puck-color-interactive-hover) );
  }
}
._Button--primary_oe4qj_93:active {
  background-color: var( --puck-button-primary-color-bg-active, var(--puck-color-interactive-active) );
}
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123,
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-primary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-primary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--secondary_oe4qj_135 {
  background: var(--puck-button-secondary-color-bg, transparent);
  border-color: var(--puck-button-secondary-color-border, currentColor);
  color: var(--puck-button-secondary-color-text, currentColor);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_oe4qj_135:hover {
    background-color: var( --puck-button-secondary-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var(--puck-button-secondary-color-text, var(--puck-color-text));
  }
}
._Button--secondary_oe4qj_135:active {
  background-color: var( --puck-button-secondary-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-button-secondary-color-text, var(--puck-color-text));
}
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123,
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-secondary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-secondary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--flush_oe4qj_171 {
  border-radius: var(--puck-radius-none);
}
._Button--disabled_oe4qj_123:hover {
  cursor: not-allowed;
}
._Button--fullWidth_oe4qj_179 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_oe4qj_184 {
  padding-inline-start: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Select/styles.module.css/#css-module-data */
._Select_1n4iv_1 {
  position: relative;
  z-index: 1;
}
._Select-buttonInner_1n4iv_6 {
  align-items: center;
  display: flex;
}
._Select-buttonIcon_1n4iv_11 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_1n4iv_17 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Select--actionBar_1n4iv_22 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._Select-items_1n4iv_27 {
  background: var(--puck-color-surface);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-l);
  margin: 10px 8px;
  margin-left: 0;
  padding: var(--puck-space-1);
  z-index: 2;
  list-style: none;
}
._SelectItem_1n4iv_38 {
  background: transparent;
  border-radius: var(--puck-radius-m);
  border: none;
  color: var(--puck-color-text-secondary);
  cursor: pointer;
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: var(--puck-space-2) var(--puck-space-3);
  width: 100%;
}
._SelectItem--isSelected_1n4iv_53 {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
  font-weight: var(--puck-font-weight-medium);
}
._SelectItem--isSelected_1n4iv_53 ._SelectItem-icon_1n4iv_59 {
  color: var(--puck-color-interactive);
}
._SelectItem_1n4iv_38:hover {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_5wzos_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_5wzos_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_5wzos_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: var(--puck-border-width-strong) solid var(--puck-color-border);
}
._RichTextEditor_5wzos_1 .rich-text code {
  background-color: var(--puck-color-surface-muted);
  padding: var(--puck-space-1) var(--puck-space-2);
  border-radius: var(--puck-radius-m);
}
._RichTextEditor_5wzos_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_5wzos_1 .rich-text pre code {
  display: block;
  padding: var(--puck-space-2) var(--puck-space-3);
}
._RichTextEditor_5wzos_1 .rich-text > *:first-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:first-child,
._RichTextEditor_5wzos_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_5wzos_1 .rich-text > *:last-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:last-child,
._RichTextEditor_5wzos_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_5wzos_50 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  resize: vertical;
  text-align: initial;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_5wzos_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_5wzos_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50 .rich-text .ProseMirror {
  height: 100%;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._RichTextEditor--editor_5wzos_50 .rich-text ul,
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  padding-left: var(--puck-space-5);
}
._RichTextEditor--editor_5wzos_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_5wzos_50 .rich-text p {
  margin-block: var(--puck-space-3);
}
._RichTextEditor--editor_5wzos_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_5wzos_50:focus-within {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._RichTextEditor--editor_5wzos_50:hover:not(._RichTextEditor--disabled_5wzos_123) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 {
  background: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text .ProseMirror {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .ProseMirror[contenteditable=false] {
  cursor: default;
}
._RichTextEditor_5wzos_1:not(:focus-within):not(._RichTextEditor--isActive_5wzos_159) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_5wzos_123 ._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/FieldGroup/styles.module.css/#css-module-data */
._FieldGroup-box_gwfyv_1 {
  display: flex;
  flex-direction: column;
  margin: 0 var(--_puck-field-group-inset-x, 0px) var(--_puck-field-group-inset-bottom, 0px);
}
._FieldGroup-box--card_gwfyv_9 {
  background-color: var(--puck-field-color-surface, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
}
._FieldGroup-fieldset_gwfyv_16 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: 0;
  --_puck-field-group-inset-x: 0px;
  --_puck-field-group-inset-top: 0px;
  --_puck-field-group-inset-bottom: 0px;
  --_puck-field-group-collapsed-flush-inset-bottom: 0px;
  --_puck-field-group-guide-width: 0px;
  --_puck-field-group-guide-space: 0px;
}
._FieldGroup-box--card_gwfyv_9 > ._FieldGroup-fieldset_gwfyv_16 {
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._FieldGroup-box--flush_gwfyv_42:not(:first-child) {
  margin-top: var(--puck-space-2);
}
._FieldGroup-box--flush_gwfyv_42 > ._FieldGroup-fieldset_gwfyv_16 {
  --_puck-field-group-guide-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-group-guide-space: var(--puck-space-3);
}
._FieldGroup-box--flush_gwfyv_42 {
  border-inline-start: var(--_puck-field-group-guide-width, 0px) solid var(--puck-color-border-muted);
  padding-inline-start: var(--_puck-field-group-guide-space, 0px);
}
._FieldGroup-fieldset_gwfyv_16 > :not([data-puck-field-group-collapsible]) + :not([data-puck-field-group-collapsible]) {
  margin-top: var(--puck-space-3);
}
._FieldGroup-fieldset_gwfyv_16 > [data-puck-field-group-collapsible]:not(:last-child) {
  --_puck-field-group-inset-bottom: var(--puck-space-3);
  --_puck-field-group-collapsed-flush-inset-bottom: calc( var(--puck-space-3) + var(--puck-space-2) );
}
._FieldGroup-fieldset_gwfyv_16 > :not([data-puck-field-group-collapsible]) + [data-puck-field-group-collapsible] {
  --_puck-field-group-inset-top: var(--puck-space-3);
}
._FieldGroup--collapsed_gwfyv_85 {
  --puck-field-label-space-y: 0;
}
._FieldGroup--expanded_gwfyv_90 {
  display: flow-root;
}
._FieldGroup-toggle_gwfyv_94 {
  appearance: none;
  background: none;
  border: none;
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  display: block;
  font: inherit;
  margin: 0;
  padding: var(--_puck-field-group-inset-top, 0px) var(--_puck-field-group-inset-x, 0px) var(--_puck-field-group-inset-bottom, 0px);
  text-align: start;
  width: 100%;
}
._FieldGroup--expanded_gwfyv_90 > ._FieldGroup-toggle_gwfyv_94 {
  padding-bottom: 0;
}
._FieldGroup--flush_gwfyv_119._FieldGroup--collapsed_gwfyv_85 > ._FieldGroup-toggle_gwfyv_94 {
  padding-bottom: var( --_puck-field-group-collapsed-flush-inset-bottom, var(--_puck-field-group-inset-bottom, 0px) );
}
._FieldGroup-toggle_gwfyv_94:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._FieldGroup-toggle_gwfyv_94:hover {
    --puck-field-label-color-text: var(--puck-color-text);
    --puck-field-label-color-icon: var(--puck-color-text);
  }
}
._FieldGroup-toggleIcon_gwfyv_138 {
  display: flex;
}
._FieldGroup--expanded_gwfyv_90 > ._FieldGroup-toggle_gwfyv_94 ._FieldGroup-toggleIcon_gwfyv_138 {
  transform: rotate(180deg);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Tabs/styles.module.css/#css-module-data */
._Tabs-list_x7mqh_1,
._Tabs-list_x7mqh_1 * {
  box-sizing: border-box;
}
._Tabs-list_x7mqh_1 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  overflow-x: auto;
  padding: var(--puck-space-2);
  gap: var(--puck-space-1);
}
._Tabs-tab_x7mqh_14 {
  appearance: none;
  background: var(--puck-fieldtabs-color-bg, none);
  border: none;
  border-radius: var(--puck-fieldtabs-radius, var(--puck-radius-m));
  color: var(--puck-fieldtabs-color-text, var(--puck-color-text-secondary));
  cursor: pointer;
  flex-shrink: 0;
  font: inherit;
  font-size: var(--puck-fieldtabs-font-size, var(--puck-font-size-xxxs));
  font-weight: var( --puck-fieldtabs-font-weight, var(--puck-font-weight-medium) );
  padding: var(--puck-fieldtabs-space, var(--puck-space-2));
  white-space: nowrap;
}
._Tabs-tab--selected_x7mqh_32 {
  background: var( --puck-fieldtabs-color-bg-selected, var(--puck-color-interactive-soft) );
  color: var( --puck-fieldtabs-color-text-selected, var(--puck-color-interactive) );
}
._Tabs-tab_x7mqh_14:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Tabs-tab_x7mqh_14:not(._Tabs-tab--selected_x7mqh_32):hover {
    background: var( --puck-fieldtabs-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-fieldtabs-color-text-hover, var(--puck-color-text-secondary) );
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_ckmoo_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent_ckmoo_1[popover] {
  opacity: 0.75 !important;
  background: transparent;
  border: 0;
  bottom: auto;
  color: inherit;
  margin: 0;
  overflow: visible;
  padding: 0;
  right: auto;
}
._DraggableComponent-overlayWrapper_ckmoo_19 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_ckmoo_19 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_ckmoo_1:focus-visible > ._DraggableComponent-overlayWrapper_ckmoo_19 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_ckmoo_51 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_ckmoo_67 > ._DraggableComponent-overlayWrapper_ckmoo_19 > ._DraggableComponent-overlay_ckmoo_19 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_ckmoo_85 > ._DraggableComponent-overlayWrapper_ckmoo_19 > ._DraggableComponent-overlay_ckmoo_19 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_ckmoo_1:has(._DraggableComponent--hover_ckmoo_67 > ._DraggableComponent-overlayWrapper_ckmoo_19) > ._DraggableComponent-overlayWrapper_ckmoo_19 {
  display: none;
}
._DraggableComponent-actionsOverlay_ckmoo_102 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_ckmoo_85 ._DraggableComponent-actionsOverlay_ckmoo_102 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_ckmoo_102 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_ckmoo_124 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_blawx_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
  overflow-wrap: inherit;
}
[data-dnd-dragging] ._InlineTextField_blawx_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_blawx_1::selection {
  display: none;
}
._InlineTextField_blawx_1:empty::before {
  content: attr(data-placeholder);
  opacity: 0.5;
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_1tz2l_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_1tz2l_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_1tz2l_10 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_1tz2l_25 {
  display: flex;
  padding: var(--puck-space-4);
  position: sticky;
  top: 0;
}
._PuckFields-field_1tz2l_32 * {
  box-sizing: border-box;
}
._PuckFields-rows_1tz2l_37 {
  display: contents;
}
._PuckFields--wrapFields_1tz2l_41 ._PuckFields-rows_1tz2l_37 > * {
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._PuckFields--wrapFields_1tz2l_41 ._PuckFields-rows_1tz2l_37 > :not([data-puck-tab-marker]) ~ :not([data-puck-tab-marker]) {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._PuckFields--wrapFields_1tz2l_41 ._PuckFields-rows_1tz2l_37 > [data-puck-field-group-collapsible] {
  padding: 0;
  --_puck-field-group-inset-x: var(--puck-space-4);
  --_puck-field-group-inset-top: var(--puck-space-4);
  --_puck-field-group-inset-bottom: var(--puck-space-4);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_htktj_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_htktj_5 + ._ComponentList_htktj_1 {
  margin-top: var(--puck-space-3);
}
._ComponentList-content_htktj_9 {
  display: none;
}
._ComponentList--isExpanded_htktj_5 > ._ComponentList-content_htktj_9 {
  display: block;
}
._ComponentList-title_htktj_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-drawer-category-color-text, var(--puck-color-text-muted));
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-drawer-category-font-size, var(--puck-font-size-xxxs));
  list-style: none;
  margin-bottom: 6px;
  padding: var(--puck-drawer-category-space, var(--puck-space-2));
  text-transform: uppercase;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  gap: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  width: 100%;
}
._ComponentList-title_htktj_17:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_htktj_17:hover {
    background-color: var( --puck-drawer-category-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-drawer-category-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._ComponentList-title_htktj_17:active {
  background-color: var( --puck-drawer-category-color-bg-active, var(--puck-color-interactive-subtle) );
  transition: none;
}
._ComponentList-titleIcon_htktj_63 {
  margin-inline-start: auto;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_zbic3_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_zbic3_6 {
  border: none;
  height: 100%;
  width: 100%;
}
._PuckPreview-frame_zbic3_6[data-puck-outline-dragging] {
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/drop-line/styles.module.css/#css-module-data */
._DropLine_eyz3q_2 {
  background: var(--_puck-outline-color-drop-indicator);
  border-radius: calc(var(--_puck-outline-drop-indicator-size) / 2);
  height: var(--_puck-outline-drop-indicator-size);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropLine--top_eyz3q_12 {
  top: 0;
}
._DropLine--bottom_eyz3q_16 {
  bottom: 0;
}
._DropLine--top_eyz3q_12._DropLine--outset_eyz3q_20 {
  top: calc(-1 * var(--_puck-outline-drop-indicator-size));
}
._DropLine--bottom_eyz3q_16._DropLine--outset_eyz3q_20 {
  bottom: calc(-1 * var(--_puck-outline-drop-indicator-size));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/empty-zone-placeholder/styles.module.css/#css-module-data */
._LayerTree-helper_1m7e4_2 {
  color: var(--puck-outline-color-text-helper, var(--puck-color-text-subtle));
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-helperRoot_1m7e4_11 {
  padding-inline-start: var(--puck-space-3);
}
._LayerTree-helper_1m7e4_2[data-puck-drop-target] {
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer/styles.module.css/#css-module-data */
._Layer_onfgu_1 {
  position: relative;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
}
._Layer-inner_onfgu_8 {
  align-items: center;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Layer--isSortable_onfgu_18 > ._Layer-inner_onfgu_8 {
  cursor: grab;
}
._Layer-content_onfgu_22 {
  display: flex;
  gap: var(--puck-space-4);
  flex: 1 1 auto;
  min-width: 0;
}
._Layer-clickable_onfgu_29 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: var(--_puck-outline-radius);
  color: inherit;
  cursor: inherit;
  display: flex;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 0;
}
[data-puck-dnd-disabled] ._Layer-inner_onfgu_8,
[data-puck-dnd-disabled] ._Layer-clickable_onfgu_29 {
  cursor: pointer;
}
._Layer-clickable_onfgu_29:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
  z-index: 1;
}
._Layer-caret_onfgu_57 {
  visibility: hidden;
  display: flex;
  flex-shrink: 0;
}
._Layer-caret_onfgu_57 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-content_onfgu_22 {
  font-weight: var(--puck-font-weight-bold);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 {
  visibility: visible;
}
._Layer-title_onfgu_76 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  margin: var(--puck-space-1);
  cursor: pointer;
}
._Layer-name_onfgu_85 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_onfgu_91 {
  color: var(--puck-outline-color-icon, var(--puck-color-text-subtle));
  margin-top: var(--puck-space-1);
}
._Layer-icon_onfgu_91 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._Layer-zones_onfgu_101 {
  display: none;
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-4));
}
._Layer--isExpanded_onfgu_106 > ._Layer-zones_onfgu_101 {
  display: block;
}
._Layer--isExpanded_onfgu_106 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 svg {
  transform: rotate(90deg);
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_onfgu_1:not(._Layer--isSelected_onfgu_115) > ._Layer-inner_onfgu_8:hover {
    --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-hover);
    border-color: var(--_puck-outline-color-border-hover);
    background: var(--_puck-outline-color-bg-hover);
    transition: none;
  }
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  border-color: var( --puck-outline-color-border-selected, var(--puck-color-selection-border) );
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-selected);
  background: var(--_puck-outline-color-bg-selected);
}
._Layer--isExpandCandidate_onfgu_138 > ._Layer-inner_onfgu_8 {
  border-color: var(--_puck-outline-color-border-hover);
  background: var(--_puck-outline-color-bg-hover);
}
._Layer--isDragSource_onfgu_143 > ._Layer-inner_onfgu_8 {
  color: var(--puck-color-text-muted);
  background: transparent;
}
._Layer--isDragSource_onfgu_143 > ._Layer-zones_onfgu_101 {
  opacity: 0.5;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-actions/styles.module.css/#css-module-data */
._LayerActions_d90t9_2 {
  position: sticky;
  inset-inline-end: calc(var(--puck-space-1) * -1);
  padding-inline: var(--puck-space-1);
  display: flex;
  visibility: hidden;
  flex-shrink: 0;
  color: var(--_puck-outline-color-text);
  background: var(--_puck-outline-actions-color-bg);
  border-top-right-radius: var(--_puck-outline-radius);
  border-bottom-right-radius: var(--_puck-outline-radius);
}
._LayerActions--visible_d90t9_18 {
  visibility: visible;
}
._LayerActions_d90t9_2 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-items/styles.module.css/#css-module-data */
._LayerTree_o5tyt_1 {
  color: var(--_puck-outline-color-text);
  font-family: var(--puck-outline-font-family, var(--puck-font-family));
  font-size: var(--puck-outline-font-size, var(--puck-font-size-xxxs));
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree--nested_o5tyt_12 {
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-3));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-zone/styles.module.css/#css-module-data */
._LayerTree-zoneTitle_fvhlh_2 {
  color: var(--_puck-outline-zone-color-text);
  font-size: var( --puck-outline-zone-font-size, calc(var(--puck-font-size-xxxs) * 0.9) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-zoneIcon_fvhlh_19 {
  margin-top: var(--puck-space-1);
}
._LayerTree-zoneIcon_fvhlh_19 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._LayerTree-zoneTitle_fvhlh_2[data-puck-drop-target] {
  color: var(--_puck-outline-color-text-hover);
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/styles.module.css/#css-module-data */
._LayerTreeRoot_1qowl_1 {
  min-width: max-content;
  --_puck-iconbutton-color-bg-hover: transparent;
  --_puck-outline-color-text: var( --puck-outline-color-text, var(--puck-color-text-primary) );
  --_puck-outline-border-width: var( --puck-outline-border-width, var(--puck-border-width-regular) );
  --_puck-outline-radius: var(--puck-outline-radius, var(--puck-radius-m));
  --_puck-outline-caret-size: var( --puck-outline-action-size, var(--puck-icon-size-s) );
  --_puck-outline-icon-size: var( --puck-outline-icon-size, var(--puck-icon-size-xs) );
  --_puck-outline-color-bg-selected: var( --puck-outline-color-bg-selected, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-bg-hover: var( --puck-outline-color-bg-hover, var(--puck-color-interactive-soft) );
  --_puck-outline-color-border-hover: var( --puck-outline-color-border-hover, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-text-hover: var( --puck-outline-color-text-hover, var(--puck-color-interactive) );
  --_puck-outline-color-drop-indicator: var( --puck-outline-color-drop-indicator, var(--puck-color-line-placeholder) );
  --_puck-outline-drop-indicator-size: var(--puck-line-placeholder-width);
  --_puck-outline-zone-color-text: var( --puck-outline-zone-color-text, var(--puck-color-text-muted) );
  --_puck-outline-actions-color-bg: transparent;
  --_puck-outline-caret-slot: calc( var(--_puck-outline-caret-size) + var(--puck-iconbutton-space, var(--puck-space-1)) * 2 );
  --_puck-outline-label-indent: calc( var(--_puck-outline-caret-slot) + var(--puck-space-2) + var(--_puck-outline-border-width) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/collapse-all/styles.module.css/#css-module-data */
._CollapseAll_1r4cy_1 {
  visibility: hidden;
}
._CollapseAll-icon_1r4cy_5 {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._CollapseAll--visible_1r4cy_10 {
  visibility: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/outline-header/styles.module.css/#css-module-data */
._OutlineHeader_ntv8r_1 {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--puck-space-2);
  padding-block: var(--puck-space-3);
  padding-inline: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/styles.module.css/#css-module-data */
._OutlineWrapper_b9ln0_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
}
._OutlineWrapper-collapseAll_b9ln0_9 {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
._OutlineWrapper-layers_b9ln0_15 {
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding: var(--puck-space-1);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_tzaxg_19 {
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_tzaxg_19 {
    overflow-x: auto;
  }
}
._Puck-portal_tzaxg_31 {
  position: relative;
  z-index: 2;
}
._PuckLayout_tzaxg_36 {
  height: 100dvh;
}
._PuckLayout-inner_tzaxg_40 {
  --puck-frame-width: auto;
  --puck-pluginbar-width: min-content;
  --puck-sidebar-width: 0px;
  --puck-sidebar-left-width: var( --puck-user-sidebar-left-width, var(--puck-sidebar-width) );
  --puck-sidebar-right-width: var( --puck-user-sidebar-right-width, var(--puck-sidebar-width) );
  background-color: var(--puck-color-surface-subtle);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-pluginbar-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-exit);
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_tzaxg_73 ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 0;
  }
}
._PuckLayout--mounted_tzaxg_78 ._PuckLayout-inner_tzaxg_40 {
  --puck-sidebar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 30% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 55% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto min-content 0 var(--puck-pluginbar-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_tzaxg_156 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 320px;
  }
}
._PuckLayout-nav_tzaxg_197 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  background-color: var( --puck-pluginbar-color-bg, var(--puck-color-surface-subtle) );
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_tzaxg_197 {
    border-top: 0;
    border-right: var(--puck-border-width-regular) solid var(--puck-color-border);
    box-sizing: border-box;
  }
}
._PuckLayout-header_tzaxg_217 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
    overflow: auto;
  }
}
._PuckPluginTab_tzaxg_231 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_tzaxg_237 {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
._PuckPluginTab-body_tzaxg_243 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_1hxnj_1 {
  background-color: var(--_puck-menu-bar-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: var(--puck-space-2) var(--puck-space-4);
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_1hxnj_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_1hxnj_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_1hxnj_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-2) var(--puck-space-4);
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_1hxnj_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_1hxnj_45 {
  display: flex;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_c2nei_1 {
  --_puck-menu-bar-color-bg: var( --puck-header-color-bg, var(--puck-color-surface) );
  background: var(--puck-header-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-header-color-text, var(--puck-color-text));
  --_puck-heading-color: var(--puck-header-color-text, var(--puck-color-text));
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_c2nei_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_c2nei_21 {
    padding-left: 0;
  }
}
._PuckHeader-inner_c2nei_26 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-chrome-gutter);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-chrome-gutter);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_c2nei_26 {
    border-left: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
  ._PuckHeader--hidePlugins_c2nei_21 ._PuckHeader-inner_c2nei_26 {
    border-left: none;
  }
}
._PuckHeader-toggle_c2nei_46 {
  display: flex;
  margin-inline-start: calc(var(--puck-space-1) * -1);
  padding-top: 2px;
}
._PuckHeader-rightSideBarToggle_c2nei_52,
._PuckHeader-leftSideBarToggle_c2nei_53 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_c2nei_52,
  ._PuckHeader-leftSideBarToggle_c2nei_53 {
    display: block;
  }
}
._PuckHeader-title_c2nei_64 {
  align-self: center;
}
._PuckHeader-path_c2nei_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_c2nei_75 {
  display: flex;
  gap: var(--puck-space-4);
  justify-content: flex-end;
}
._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text-muted);
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._PuckHeader--menuOpen_c2nei_86 ._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_c2nei_81 {
    display: none;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_1fbnz_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-text);
}
._SidebarSection_1fbnz_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_1fbnz_12 {
  background: var(--_puck-sidebar-section-color-bg, var(--puck-color-surface));
  padding: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  overflow-x: auto;
}
._SidebarSection-title_1fbnz_12:has(+ * [data-puck-tablist]) {
  border-bottom: none;
  padding-bottom: var(--puck-space-2);
}
._SidebarSection--noBorderTop_1fbnz_25 > ._SidebarSection-title_1fbnz_12 {
  border-top: 0px;
}
._SidebarSection-content_1fbnz_29:last-child {
  padding-bottom: var(--puck-space-1);
}
._SidebarSection_1fbnz_1:last-of-type ._SidebarSection-content_1fbnz_29 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_1fbnz_38 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._SidebarSection-breadcrumbLabel_1fbnz_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_1fbnz_38:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_1fbnz_38:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._SidebarSection-breadcrumbs_1fbnz_67 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-breadcrumb_1fbnz_38 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-heading_1fbnz_79 {
  padding-inline-end: var(--puck-space-4);
}
._SidebarSection-loadingOverlay_1fbnz_83 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_8c6w5_1 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_8c6w5_7:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._Breadcrumbs-breadcrumb_8c6w5_7 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_v26yb_1 {
  position: relative;
}
._ViewportControls--fullScreen_v26yb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: var(--puck-space-3);
  right: var(--puck-space-3);
  overflow: hidden;
}
._ViewportControls-toggleButton_v26yb_14 {
  display: none;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14 {
  align-items: center;
  background-color: var(--puck-color-surface-inverse);
  border: var(--puck-border-width-regular) solid var(--puck-color-border-inverse);
  border-radius: var(--puck-radius-pill);
  cursor: pointer;
  color: var(--puck-color-text-inverse);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14:hover {
  color: var(--puck-color-interactive-inverse-hover);
  border: var(--puck-border-width-regular) solid var(--puck-color-interactive-inverse-hover);
}
._ViewportControls-actions_v26yb_39 {
  display: flex;
}
._ViewportControls-actionsInner_v26yb_43 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  background: var(--puck-color-surface-muted);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-pill);
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(100%);
  transition: transform var(--puck-duration-medium) var(--puck-ease-emphasized);
}
._ViewportControls--fullScreen_v26yb_5._ViewportControls--isExpanded_v26yb_67 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(42px);
}
._ViewportControls-divider_v26yb_72 {
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-bottom: var(--puck-space-2);
  margin-top: var(--puck-space-2);
}
._ViewportControls-zoomSelect_v26yb_79 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  color: currentColor;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: var(--puck-space-2);
  width: 96px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_v26yb_79,
  ._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_v26yb_79:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_v26yb_110 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_v26yb_118 ._ViewportButton-inner_v26yb_110 {
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_zw9iy_1 {
  color: var(--puck-canvas-color-text, var(--puck-color-text));
  background: var(--puck-canvas-color-bg, var(--puck-color-surface-muted));
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-chrome-gutter);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_zw9iy_1 {
    padding: calc(var(--puck-space-chrome-gutter) * 1.5);
    padding-top: calc(var(--puck-space-chrome-gutter) * 0.5);
  }
  ._PuckCanvas_zw9iy_1:not(._PuckCanvas_zw9iy_1:has(._PuckCanvas-controls_zw9iy_18)) {
    padding-top: calc(var(--puck-space-chrome-gutter) * 1.5);
  }
}
._PuckCanvas--fullScreen_zw9iy_23 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_zw9iy_23 {
    padding: 0;
  }
}
._PuckCanvas-inner_zw9iy_34 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_zw9iy_43 {
  background: var(--puck-canvas-preview-color-bg, var(--puck-color-surface));
  outline: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_zw9iy_43 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_zw9iy_43 {
    transition: none !important;
  }
}
._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-root_zw9iy_43 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_zw9iy_73 {
  align-items: center;
  color: var(--puck-color-text-subtle);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity var(--puck-duration-slow) var(--puck-ease-entrance);
  opacity: 0;
  pointer-events: none;
}
._PuckCanvas--showLoader_zw9iy_84 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 1;
}
._PuckCanvas--showLoader_zw9iy_84._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: calc(var(--puck-space-chrome-gutter) * 0.5);
}
._PuckCanvas--fullScreen_zw9iy_23 ._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_16oed_1 {
  border-block-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_16oed_10 {
  display: flex;
}
._Sidebar--left_16oed_14 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-left-color-bg, var(--puck-color-surface) );
  background: var( --puck-sidebar-left-color-bg, var(--puck-color-surface-subtle) );
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_16oed_14 {
    border-block-start: 0;
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar--right_16oed_34 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-right-color-bg, var(--puck-color-surface) );
  background: var(--puck-sidebar-right-color-bg, var(--puck-color-surface));
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_16oed_34 {
    border-block-start: 0;
    border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar-resizeHandle_16oed_51 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_16oed_14 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_16oed_34 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_vll2r_1 {
  display: flex;
}
._Nav-list_vll2r_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._Nav-list_vll2r_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: var(--puck-space-4);
    width: 100%;
  }
}
._Nav-mobileActions_vll2r_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: var(--puck-space-1) var(--puck-space-4);
  border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_vll2r_23 {
    display: none;
  }
}
._NavItem-link_vll2r_39 {
  text-align: center;
  align-items: center;
  color: var(--puck-pluginbar-color-text, var(--puck-color-text-secondary));
  display: flex;
  gap: var(--puck-space-2);
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--puck-radius-m);
  padding: var(--puck-space-2) var(--puck-space-1);
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    width: auto;
  }
}
._NavItem_vll2r_39:first-of-type {
  padding-left: var(--puck-space-4);
}
._NavItem_vll2r_39:last-of-type {
  padding-right: var(--puck-space-4);
}
@media (min-width: 638px) {
  ._NavItem_vll2r_39:first-of-type,
  ._NavItem_vll2r_39:last-of-type {
    padding: 0;
  }
}
._NavItem-link_vll2r_39 {
  border-top: var(--puck-border-width-strong) solid transparent;
  border-bottom: var(--puck-border-width-strong) solid transparent;
  border-radius: var(--puck-radius-none);
  flex-direction: column;
  font-size: var(--puck-pluginbar-font-size, var(--puck-font-size-xxxs));
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    border: 0;
    border-left: var(--puck-border-width-strong) solid transparent;
    border-right: var(--puck-border-width-strong) solid transparent;
  }
}
._NavItem-linkIcon_vll2r_90 {
  height: 2em;
  width: 2em;
}
._NavItem-linkIcon_vll2r_90 svg {
  height: 100%;
  width: 100%;
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: var(--puck-color-interactive-subtle);
  color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  font-weight: var(--puck-font-weight-semibold);
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: transparent;
  border-top-color: var(--puck-color-interactive);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: var(--puck-font-weight-semibold);
}
@media (min-width: 638px) {
  ._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
    border-top-color: transparent;
    border-right-color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  }
}
._NavItem_vll2r_39:not(._NavItem--active_vll2r_100) > ._NavItem-link_vll2r_39:hover {
  background-color: var( --puck-pluginbar-color-bg-hover, var(--puck-color-interactive-soft) );
  color: var(--puck-pluginbar-color-text-hover, var(--puck-color-interactive));
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_vll2r_136 {
    display: none;
  }
}
._NavItem--desktopOnly_vll2r_141 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_vll2r_141 {
    display: block;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_9af19_1 {
  padding: var(--puck-drawer-space, var(--puck-space-4));
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_1ylsc_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_1q574_1 {
  background: var(--puck-color-surface);
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_1q574_7 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  font-weight: var(--puck-font-weight-semibold);
  padding-bottom: var(--puck-space-2);
  padding-left: var(--puck-space-4);
  padding-right: var(--puck-space-4);
  padding-top: var(--puck-space-2);
}
._FieldsPlugin-header_1q574_7:has(+ * [data-puck-tablist]) {
  border-bottom: none;
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_1q574_7 {
    padding: var(--puck-space-4);
  }
}`,Ob=`/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_gr1cb_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_gr1cb_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_gr1cb_30 + ._ActionBar-label_gr1cb_17 {
  padding-inline-start: 0;
}
._ActionBar-label_gr1cb_17 + ._ActionBarAction_gr1cb_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_gr1cb_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_gr1cb_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_gr1cb_38:empty {
  display: none;
}
._ActionBarAction_gr1cb_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_gr1cb_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction--grab_gr1cb_83 {
  cursor: grab;
  touch-action: none;
}
._ActionBarAction-icon_gr1cb_88 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._ActionBarAction_gr1cb_30 svg {
  max-width: none !important;
}
._ActionBarAction_gr1cb_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_gr1cb_30:hover:not(._ActionBarAction--disabled_gr1cb_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_gr1cb_30:active:not(._ActionBarAction--disabled_gr1cb_74),
._ActionBarAction--active_gr1cb_114 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_gr1cb_38 * {
  margin: 0;
}
._ActionBar-separator_gr1cb_127 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_ckmoo_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent_ckmoo_1[popover] {
  opacity: 0.75 !important;
  background: transparent;
  border: 0;
  bottom: auto;
  color: inherit;
  margin: 0;
  overflow: visible;
  padding: 0;
  right: auto;
}
._DraggableComponent-overlayWrapper_ckmoo_19 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_ckmoo_19 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_ckmoo_1:focus-visible > ._DraggableComponent-overlayWrapper_ckmoo_19 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_ckmoo_51 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_ckmoo_67 > ._DraggableComponent-overlayWrapper_ckmoo_19 > ._DraggableComponent-overlay_ckmoo_19 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_ckmoo_85 > ._DraggableComponent-overlayWrapper_ckmoo_19 > ._DraggableComponent-overlay_ckmoo_19 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_ckmoo_1:has(._DraggableComponent--hover_ckmoo_67 > ._DraggableComponent-overlayWrapper_ckmoo_19) > ._DraggableComponent-overlayWrapper_ckmoo_19 {
  display: none;
}
._DraggableComponent-actionsOverlay_ckmoo_102 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_ckmoo_85 ._DraggableComponent-actionsOverlay_ckmoo_102 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_ckmoo_102 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_ckmoo_124 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_blawx_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
  overflow-wrap: inherit;
}
[data-dnd-dragging] ._InlineTextField_blawx_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_blawx_1::selection {
  display: none;
}
._InlineTextField_blawx_1:empty::before {
  content: attr(data-placeholder);
  opacity: 0.5;
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}`,kb=`data-puck-style-source`,Ab=`puck`,jb=`data-puck-style-id`,Mb={uiDefault:`ui-default`,iframeInteractions:`iframe-styles`},Nb=new WeakMap,Pb=e=>{if(e)return e;if(!(typeof document>`u`))return document},Fb=e=>{let t=Nb.get(e);if(t)return t;let n=new Map;return Nb.set(e,n),n},Ib=(e,t,n=!1)=>{let r=e.head;if(r){if(t.parentElement!==r){n?r.prepend(t):r.append(t);return}n&&r.firstChild!==t&&r.prepend(t),!n&&r.lastChild!==t&&r.append(t)}},Lb=(e,t,n,r=!1)=>{let i=e.createElement(`style`);return i.setAttribute(kb,Ab),i.setAttribute(jb,t),i.textContent=n,Ib(e,i,r),i},Rb=e=>e?.getAttribute(kb)===Ab,zb=e=>{let t=Pb(e?.document);(0,L.useInsertionEffect)(()=>{if(!e||!t)return;let n=Fb(t),r=n.get(e.id);if(r)r.count+=1,r.el.textContent!==e.cssText&&(r.el.textContent=e.cssText),Ib(t,r.el,e.prepend);else{let r=Lb(t,e.id,e.cssText,e.prepend);n.set(e.id,{count:1,el:r})}return()=>{let t=n.get(e.id);t&&(--t.count,t.count<=0&&(t.el.remove(),n.delete(e.id)))}},[e?.cssText,e?.id,e?.prepend,e?.document,t])},Bb=null,Vb=()=>Bb===null?typeof document>`u`?!1:(Bb=getComputedStyle(document.documentElement).getPropertyValue(`--_puck-styles-loaded`).trim()!==``,Bb):Bb,Hb=()=>{zb(Vb()?null:{cssText:Db,id:Mb.uiDefault,prepend:!0}),(0,L.useEffect)(()=>{},[])},Ub=e=>{zb(e?{cssText:Ob,document:e,id:Mb.iframeInteractions}:null)},Wb=`style, link[rel="stylesheet"]`,Gb=`data-puck-style-mirror`,Kb=e=>!e.matches(Wb)||Rb(e)?!1:e.tagName!==`STYLE`||!!e.innerHTML.trim(),qb=e=>{let t=[];return e.querySelectorAll(Wb).forEach(e=>{Kb(e)&&t.push(e)}),t},Jb=e=>Array.from(document.styleSheets).find(t=>t.ownerNode.href===e.href),Yb=e=>{if(e)try{return Array.from(e.cssRules).map(e=>e.cssText).join(``)}catch{console.warn(`Access to stylesheet %s is denied. Ignoring…`,e.href)}return``},Xb=(e,t)=>{let n=e.attributes;n?.length>0&&Array.from(n).forEach(e=>{t.setAttribute(e.name,e.value)})},Zb=e=>setTimeout(e,0),Qb=({children:e,debug:t=!1,onStylesLoaded:n=()=>null,syncHostStyles:r=!0})=>{let{document:i,window:a}=ex();return Ub(i),(0,L.useEffect)(()=>{if(!a||!i)return()=>{};let e=[],o={},s=()=>{e.forEach(({mirror:e})=>{e.remove()}),e=[],Array.from(i.head.querySelectorAll(`[${Gb}="true"]`)).forEach(e=>{e.remove()}),Object.keys(o).forEach(e=>{delete o[e]})},c=t=>e.findIndex(e=>e.original===t),u=(e,n=!1)=>l(null,null,function*(){let r;if(e.nodeName===`LINK`&&n){r=document.createElement(`style`),r.type=`text/css`;let n=Jb(e);n||=(yield new Promise(t=>{let n=()=>{t(),e.removeEventListener(`load`,n)};e.addEventListener(`load`,n)}),Jb(e));let i=Yb(n);if(!i){t&&console.warn(`Tried to load styles for link element, but couldn't find them. Skipping...`);return}r.innerHTML=i,r.setAttribute(`data-href`,e.getAttribute(`href`))}else r=e.cloneNode(!0);return r.setAttribute(Gb,`true`),r}),d=n=>l(null,null,function*(){let r=c(n);if(r>-1){t&&console.log(`Tried to add an element that was already mirrored. Updating instead...`),e[r].mirror.innerText=n.innerText;return}let a=yield u(n);if(!a)return;let s=(0,wm.default)(a.outerHTML);if(o[s]){t&&console.log(`iframe already contains element that is being mirrored. Skipping...`);return}o[s]=!0,i.head.append(a),e.push({original:n,mirror:a}),t&&console.log(`Added style node ${n.outerHTML}`)}),f=n=>{var r;let i=c(n);if(i===-1){t&&console.log(`Tried to remove an element that did not exist. Skipping...`);return}let a=(0,wm.default)(n.outerHTML);(r=e[i]?.mirror)==null||r.remove(),delete o[a],t&&console.log(`Removed style node ${n.outerHTML}`)},p=new MutationObserver(e=>{e.forEach(e=>{e.type===`childList`&&(e.addedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let t=e.nodeType===Node.TEXT_NODE?e.parentElement:e;t&&Kb(t)&&Zb(()=>d(t))}}),e.removedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let t=e.nodeType===Node.TEXT_NODE?e.parentElement:e;t&&t.matches(Wb)&&!Rb(t)&&Zb(()=>f(t))}}))})});if(!r)return n(),()=>{p.disconnect(),s()};let m=a.parent.document,h=qb(m),g=[],_=0,v=m.getElementsByTagName(`html`)[0];Xb(v,i.documentElement);let y=m.getElementsByTagName(`body`)[0];return Xb(y,i.body),Promise.all(h.map((t,n)=>l(null,null,function*(){if(t.nodeName===`LINK`){let e=t.href;if(g.indexOf(e)>-1)return;g.push(e)}let n=yield u(t);if(n)return e.push({original:t,mirror:n}),n}))).then(e=>{let t=e.filter(e=>e!==void 0);t.forEach(e=>{e.onload=()=>{_+=1,_>=t.length&&n()},e.onerror=()=>{let r=e instanceof HTMLLinkElement?e.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${r?`: ${r}`:``}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),_+=1,_>=t.length&&n()}}),i.head.querySelectorAll(`[${Gb}="true"]`).forEach(e=>{e.remove()}),i.head.append(...t),t.forEach(e=>{e.nodeName===`STYLE`&&(_+=1)}),_>=t.length&&n(),p.observe(m.head,{childList:!0,subtree:!0}),t.forEach(e=>{let t=(0,wm.default)(e.outerHTML);o[t]=!0})}),()=>{p.disconnect(),s()}},[r]),(0,R.jsx)(R.Fragment,{children:e})},$b=(0,L.createContext)({}),ex=()=>(0,L.useContext)($b);function tx(e){var t=e,{children:n,className:r,debug:i,id:a,onReady:o=()=>{},onNotReady:l=()=>{},frameRef:u,syncHostStyles:f=!0}=t,p=d(t,[`children`,`className`,`debug`,`id`,`onReady`,`onNotReady`,`frameRef`,`syncHostStyles`]);let[m,h]=(0,L.useState)(!1),[g,_]=(0,L.useState)({}),[v,y]=(0,L.useState)(),[b,x]=(0,L.useState)(!1);return(0,L.useEffect)(()=>{m&&x(!f)},[m,f]),(0,L.useEffect)(()=>{if(u.current){let e=u.current.contentDocument,t=u.current.contentWindow;_({document:e||void 0,window:t||void 0}),y(u.current.contentDocument?.getElementById(`frame-root`)),e&&t&&b?o():l()}},[u,m,b]),(0,R.jsx)(`iframe`,c(s({},p),{className:r,id:a,srcDoc:`<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry translate="no" class="notranslate"></div></body></html>`,ref:u,onLoad:()=>{h(!0)},children:(0,R.jsx)($b.Provider,{value:g,children:m&&v&&(0,R.jsx)(Qb,{debug:i,onStylesLoaded:()=>x(!0),syncHostStyles:f,children:(0,dd.createPortal)(n,v)})})}))}tx.displayName=`AutoFrame`;var nx=tx;u();var rx=()=>{let e=I(e=>e.config),t=I(e=>e.metadata),n=I(e=>e.state.data),r=I(e=>e.fieldTransforms);return(0,R.jsx)(Pv,{data:n,config:e,metadata:t,fieldTransforms:r})};u();var ix=()=>{let e=I(jt(e=>e.state.indexes.nodes.root?.flatData.props)),t=I(e=>e.config),n=I(e=>e.metadata),r=dv({component:(0,L.useMemo)(()=>{let t=oe({props:e??{}});return j(t)},[e])}),i=(0,L.useMemo)(()=>c(s({},r),{children:(0,R.jsx)(jv,{zone:ye}),puck:{renderDropZone:jv,isEditing:!0,dragRef:null,metadata:n},editMode:!0}),[r,n]);return t.root?.render?t.root?.render(c(s({},i),{id:`puck-root`})):(0,R.jsx)(R.Fragment,{children:i.children})};u();var ax=f(`PuckPreview`,{PuckPreview:`_PuckPreview_zbic3_1`,"PuckPreview-frame":`_PuckPreview-frame_zbic3_6`}),ox=e=>{let t=I(e=>e.status);(0,L.useEffect)(()=>{if(e.current&&t===`READY`){let t=e.current,n=e=>{let n=new p_(`pointermove`,c(s({},e),{bubbles:!0,cancelable:!1,clientX:e.clientX,clientY:e.clientY,pointerId:e.pointerId,pointerType:e.pointerType,isPrimary:e.isPrimary,originalTarget:e.target}));t.dispatchEvent(n)},r=()=>{var e;i(),(e=t.contentDocument)==null||e.addEventListener(`pointermove`,n,{capture:!0})},i=()=>{var e;(e=t.contentDocument)==null||e.removeEventListener(`pointermove`,n)};return r(),()=>{i()}}},[t])},sx=e=>{let t=I(e=>e.state.ui.previewMode),n=I(e=>e.status),r=I(e=>e.iframe.enabled);(0,L.useEffect)(()=>{(r?(e.current?.contentDocument)?.querySelector(`[data-puck-entry]`):e.current)?.setAttribute(`data-puck-preview-mode`,t)},[t,n,r])},cx=({id:e=`puck-preview`})=>{let t=I(e=>e.dispatch),n=I(e=>e.setStatus),r=I(e=>e.iframe),i=I(e=>e.overrides),a=I(e=>e.state.ui.previewMode===`edit`),o=(0,L.useMemo)(()=>i.iframe,[i]),s=(0,L.useRef)(null);ox(s),sx(s);let c=a?(0,R.jsx)(ix,{}):(0,R.jsx)(rx,{});return(0,L.useEffect)(()=>{r.enabled||n(`READY`)},[r.enabled]),(0,R.jsx)(`div`,{className:ax(),id:e,"data-puck-preview":!0,onClick:e=>{let n=e.target;!n.hasAttribute(`data-puck-component`)&&!n.hasAttribute(`data-puck-dropzone`)&&t({type:`setUi`,ui:{itemSelector:null}})},children:r.enabled?(0,R.jsx)(nx,{id:`preview-frame`,className:ax(`frame`),"data-rfd-iframe":!0,syncHostStyles:r.syncHostStyles,onReady:()=>{n(`READY`)},onNotReady:()=>{n(`MOUNTED`)},frameRef:s,children:(0,R.jsx)($b.Consumer,{children:({document:e})=>o?(0,R.jsx)(o,{document:e,children:c}):c})}):(0,R.jsx)(`div`,{id:`preview-frame`,className:`${ax(`frame`)} notranslate`,ref:s,"data-puck-entry":!0,translate:`no`,children:c})})};u(),u();var lx=(e,t)=>n=>{let r=t?t(n):n.children;return e?e(c(s({},n),{children:r})):r},ux=({overrides:e,plugins:t})=>{let n=s({},e);e?.fieldTypes&&(n.fieldTypes=s({},e.fieldTypes));let r=s({},e?.fieldTypes);return t?.forEach(e=>{e.overrides&&Object.keys(e.overrides).forEach(t=>{let i=t;if(!e.overrides?.[i])return;if(i===`fieldTypes`){let t=e.overrides.fieldTypes;Object.keys(t).forEach(e=>{if(n.fieldTypes=n.fieldTypes||{},Eh(t,e)){n.fieldTypes[e]=null;return}let i=r[e],a=t[e],o=lx(a,i);n.fieldTypes[e]=o,r[e]=o});return}let a=n[i],o=lx(e.overrides[i],a);n[i]=o})}),n},dx=({overrides:e,plugins:t})=>(0,L.useMemo)(()=>ux({overrides:e,plugins:t}),[t,e]);u(),u();var fx={Puck:`_Puck_tzaxg_19`,"Puck-portal":`_Puck-portal_tzaxg_31`,PuckLayout:`_PuckLayout_tzaxg_36`,"PuckLayout-inner":`_PuckLayout-inner_tzaxg_40`,"Puck--hidePlugins":`_Puck--hidePlugins_tzaxg_73`,"PuckLayout--mounted":`_PuckLayout--mounted_tzaxg_78`,"PuckLayout--mobilePanelHeightToggle":`_PuckLayout--mobilePanelHeightToggle_tzaxg_82`,"PuckLayout--leftSideBarVisible":`_PuckLayout--leftSideBarVisible_tzaxg_82`,"PuckLayout--isExpanded":`_PuckLayout--isExpanded_tzaxg_90`,"PuckLayout--mobilePanelHeightMinContent":`_PuckLayout--mobilePanelHeightMinContent_tzaxg_110`,"PuckLayout--rightSideBarVisible":`_PuckLayout--rightSideBarVisible_tzaxg_137`,"PuckLayout-mounted":`_PuckLayout-mounted_tzaxg_156`,"PuckLayout-nav":`_PuckLayout-nav_tzaxg_197`,"PuckLayout-header":`_PuckLayout-header_tzaxg_217`,PuckPluginTab:`_PuckPluginTab_tzaxg_231`,"PuckPluginTab--visible":`_PuckPluginTab--visible_tzaxg_237`,"PuckPluginTab-body":`_PuckPluginTab-body_tzaxg_243`};u();var px=({children:e})=>(0,R.jsx)(R.Fragment,{children:e});u();var mx=()=>{let e=b(),t=(0,L.useCallback)(()=>{let t=e.getState().dispatch;t({type:`setUi`,ui:e=>({previewMode:e.previewMode===`edit`?`interactive`:`edit`})})},[e]);ue({meta:!0,i:!0},t),ue({ctrl:!0,i:!0},t)};u(),u(),u();var hx=f(`MenuBar`,{MenuBar:`_MenuBar_1hxnj_1`,"MenuBar--menuOpen":`_MenuBar--menuOpen_1hxnj_14`,"MenuBar-inner":`_MenuBar-inner_1hxnj_29`,"MenuBar-history":`_MenuBar-history_1hxnj_45`});function gx({menuOpen:e=!1,renderHeaderActions:t,setMenuOpen:n}){let r=I(e=>e.history.back),i=I(e=>e.history.forward),a=I(e=>e.history.hasFuture()),o=I(e=>e.history.hasPast()),s=x(`header-undo`),c=x(`header-redo`);return(0,R.jsx)(`div`,{className:hx({menuOpen:e}),onClick:e=>{let t=e.target;window.matchMedia(`(min-width: 638px)`).matches||t.tagName===`A`&&t.getAttribute(`href`)?.startsWith(`#`)&&n(!1)},children:(0,R.jsxs)(`div`,{className:hx(`inner`),children:[(0,R.jsxs)(`div`,{className:hx(`history`),children:[(0,R.jsx)(Ie,{type:`button`,title:s,disabled:!o,onClick:r,children:(0,R.jsx)(Oe,{size:21})}),(0,R.jsx)(Ie,{type:`button`,title:c,disabled:!a,onClick:i,children:(0,R.jsx)(ae,{size:21})})]}),(0,R.jsx)(R.Fragment,{children:t&&t()})]})})}u();var _x=f(`PuckHeader`,{PuckHeader:`_PuckHeader_c2nei_1`,"PuckHeader--hidePlugins":`_PuckHeader--hidePlugins_c2nei_21`,"PuckHeader-inner":`_PuckHeader-inner_c2nei_26`,"PuckHeader-toggle":`_PuckHeader-toggle_c2nei_46`,"PuckHeader-rightSideBarToggle":`_PuckHeader-rightSideBarToggle_c2nei_52`,"PuckHeader-leftSideBarToggle":`_PuckHeader-leftSideBarToggle_c2nei_53`,"PuckHeader-title":`_PuckHeader-title_c2nei_64`,"PuckHeader-path":`_PuckHeader-path_c2nei_68`,"PuckHeader-tools":`_PuckHeader-tools_c2nei_75`,"PuckHeader-menuButton":`_PuckHeader-menuButton_c2nei_81`,"PuckHeader--menuOpen":`_PuckHeader--menuOpen_c2nei_86`}),vx=(0,L.memo)(({hidePlugins:e})=>{let{onPublish:t,renderHeader:n,renderHeaderActions:r,headerTitle:i,headerPath:a,iframe:o}=sS(),l=I(e=>e.dispatch),u=b(),f=(0,L.useMemo)(()=>n?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),e=>{var t=e,{actions:r}=t,i=d(t,[`actions`]);let a=n,o=I(e=>e.state);return(0,R.jsx)(a,c(s({},i),{dispatch:l,state:o,children:r}))}):px,[n]),p=(0,L.useMemo)(()=>r?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),e=>{let t=r,n=I(e=>e.state);return(0,R.jsx)(t,c(s({},e),{dispatch:l,state:n}))}):px,[r]),m=I(e=>e.overrides.header||f),h=I(e=>e.overrides.headerActions||p),[g,_]=(0,L.useState)(!1),v=I(e=>(e.state.indexes.nodes.root?.data).props.title??``),y=I(e=>e.state.ui.leftSideBarVisible),S=I(e=>e.state.ui.rightSideBarVisible),C=(0,L.useCallback)(e=>{let t=window.matchMedia(`(min-width: 638px)`).matches,n=e===`left`?y:S,r=e===`left`?`rightSideBarVisible`:`leftSideBarVisible`;l({type:`setUi`,ui:s({[`${e}SideBarVisible`]:!n},t?{}:{[r]:!1})})},[l,y,S]),w=x(`header-publish`),T=x(`label-page`),E=x(`header-toggle-leftsidebar`),D=x(`header-toggle-rightsidebar`),O=x(`header-toggle-menubar`);return(0,R.jsx)(m,{actions:(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(h,{children:(0,R.jsx)(Mm,{onClick:()=>{let e=u.getState().state.data;t&&t(e)},icon:(0,R.jsx)(Ce,{size:`14px`}),children:w})})}),children:(0,R.jsx)(`header`,{className:_x({leftSideBarVisible:y,rightSideBarVisible:S,hidePlugins:e}),children:(0,R.jsxs)(`div`,{className:_x(`inner`),children:[(0,R.jsxs)(`div`,{className:_x(`toggle`),children:[(0,R.jsx)(`div`,{className:_x(`leftSideBarToggle`),children:(0,R.jsx)(Ie,{type:`button`,onClick:()=>{C(`left`)},title:E,children:(0,R.jsx)(Ke,{focusable:`false`})})}),(0,R.jsx)(`div`,{className:_x(`rightSideBarToggle`),children:(0,R.jsx)(Ie,{type:`button`,onClick:()=>{C(`right`)},title:D,children:(0,R.jsx)(ee,{focusable:`false`})})})]}),(0,R.jsx)(`div`,{className:_x(`title`),children:(0,R.jsxs)(Gh,{rank:`2`,size:`xs`,children:[i||v||T,a&&(0,R.jsxs)(R.Fragment,{children:[` `,(0,R.jsx)(`code`,{className:_x(`path`),children:a})]})]})}),(0,R.jsxs)(`div`,{className:_x(`tools`),children:[(0,R.jsx)(`div`,{className:_x(`menuButton`),children:(0,R.jsx)(Ie,{type:`button`,onClick:()=>_(!g),title:O,children:g?(0,R.jsx)(Xe,{focusable:`false`}):(0,R.jsx)(Te,{focusable:`false`})})}),(0,R.jsx)(gx,{dispatch:l,onPublish:t,menuOpen:g,renderHeaderActions:()=>(0,R.jsx)(h,{children:(0,R.jsx)(Mm,{onClick:()=>{let e=u.getState().state.data;t&&t(e)},icon:(0,R.jsx)(Ce,{size:`14px`}),children:w})}),setMenuOpen:_})]})]})})})});u(),u();var yx=f(`SidebarSection`,{SidebarSection:`_SidebarSection_1fbnz_1`,"SidebarSection-title":`_SidebarSection-title_1fbnz_12`,"SidebarSection--noBorderTop":`_SidebarSection--noBorderTop_1fbnz_25`,"SidebarSection-content":`_SidebarSection-content_1fbnz_29`,"SidebarSection-breadcrumbLabel":`_SidebarSection-breadcrumbLabel_1fbnz_38`,"SidebarSection-breadcrumbs":`_SidebarSection-breadcrumbs_1fbnz_67`,"SidebarSection-breadcrumb":`_SidebarSection-breadcrumb_1fbnz_38`,"SidebarSection-heading":`_SidebarSection-heading_1fbnz_79`,"SidebarSection-loadingOverlay":`_SidebarSection-loadingOverlay_1fbnz_83`}),bx=({children:e,title:t,background:n,showBreadcrumbs:r,noBorderTop:i,isLoading:a})=>(0,R.jsxs)(`div`,{className:yx({noBorderTop:i}),style:{background:n},children:[(0,R.jsx)(`div`,{className:yx(`title`),children:(0,R.jsxs)(`div`,{className:yx(`breadcrumbs`),children:[r&&(0,R.jsx)(pb,{}),(0,R.jsx)(`div`,{className:yx(`heading`),children:(0,R.jsx)(Gh,{rank:`2`,size:`xs`,children:t})})]})}),(0,R.jsx)(`div`,{className:yx(`content`),children:e}),a&&(0,R.jsx)(`div`,{className:yx(`loadingOverlay`),children:(0,R.jsx)(_,{size:32})})]});u(),u(),u();var xx={ViewportControls:`_ViewportControls_v26yb_1`,"ViewportControls--fullScreen":`_ViewportControls--fullScreen_v26yb_5`,"ViewportControls-toggleButton":`_ViewportControls-toggleButton_v26yb_14`,"ViewportControls-actions":`_ViewportControls-actions_v26yb_39`,"ViewportControls-actionsInner":`_ViewportControls-actionsInner_v26yb_43`,"ViewportControls--isExpanded":`_ViewportControls--isExpanded_v26yb_67`,"ViewportControls-divider":`_ViewportControls-divider_v26yb_72`,"ViewportControls-zoomSelect":`_ViewportControls-zoomSelect_v26yb_79`,"ViewportControls-zoom":`_ViewportControls-zoom_v26yb_79`,"ViewportButton-inner":`_ViewportButton-inner_v26yb_110`,"ViewportButton--isActive":`_ViewportButton--isActive_v26yb_118`},Sx={Smartphone:(0,R.jsx)(Je,{size:16}),Tablet:(0,R.jsx)(We,{size:16}),Monitor:(0,R.jsx)(te,{size:16}),FullWidth:(0,R.jsx)(et,{size:16})},Cx=f(`ViewportControls`,xx),wx=f(`ViewportButton`,xx),Tx=({children:e,title:t,onClick:n,isActive:r,disabled:i})=>(0,R.jsx)(`span`,{className:wx({isActive:r}),suppressHydrationWarning:!0,children:(0,R.jsx)(Ie,{type:`button`,title:t,disabled:i||r,onClick:n,suppressHydrationWarning:!0,children:(0,R.jsx)(`span`,{className:wx(`inner`),children:e})})}),Ex=[{label:`25%`,value:.25},{label:`50%`,value:.5},{label:`75%`,value:.75},{label:`100%`,value:1},{label:`125%`,value:1.25},{label:`150%`,value:1.5},{label:`200%`,value:2}],Dx=({viewport:e,isActive:t,onClick:n})=>{let r=x(`viewport-switch`,{label:e.label??``}),i=x(`viewport-switch-default`);return(0,R.jsx)(Tx,{title:e.label?r:i,onClick:n,isActive:t,children:typeof e.icon==`string`?Sx[e.icon]||e.icon:e.icon||Sx.Smartphone})},Ox=({autoZoom:e,zoom:t,onViewportChange:n,onZoom:r,fullScreen:i})=>{let a=I(e=>e.viewports),o=I(e=>e.state.ui.viewports),s=Ex.find(t=>t.value===e),c=x(`viewport-zoom-auto`,{zoom:(e*100).toFixed(0)}),l=(0,L.useMemo)(()=>[...Ex,...s?[]:[{value:e,label:c}]].filter(t=>t.value<=e).sort((e,t)=>e.value>t.value?1:-1),[e,c]),[u,d]=(0,L.useState)(o.current.width);(0,L.useEffect)(()=>{d(o.current.width)},[o.current]);let[f,p]=(0,L.useState)(!1),m=x(`viewport-zoom-out`),h=x(`viewport-zoom-in`),g=x(`viewport-toggle-menu`);return(0,R.jsxs)(`div`,{className:Cx({isExpanded:f,fullScreen:i}),suppressHydrationWarning:!0,children:[(0,R.jsx)(`div`,{className:Cx(`actions`),children:(0,R.jsxs)(`div`,{className:Cx(`actionsInner`),children:[a.map((e,t)=>(0,R.jsx)(Dx,{viewport:e,onClick:()=>{d(e.width),n(e)},isActive:u===e.width},t)),(0,R.jsx)(`div`,{className:Cx(`divider`)}),(0,R.jsx)(Tx,{title:m,disabled:t<=l[0]?.value,onClick:e=>{e.stopPropagation(),r(l[Math.max(l.findIndex(e=>e.value===t)-1,0)].value)},children:(0,R.jsx)(Ve,{size:16})}),(0,R.jsx)(Tx,{title:h,disabled:t>=l[l.length-1]?.value,onClick:e=>{e.stopPropagation(),r(l[Math.min(l.findIndex(e=>e.value===t)+1,l.length-1)].value)},children:(0,R.jsx)(Ge,{size:16})}),(0,R.jsxs)(`div`,{className:Cx(`zoom`),children:[(0,R.jsx)(`div`,{className:Cx(`divider`)}),(0,R.jsx)(`select`,{className:Cx(`zoomSelect`),value:t.toString(),onClick:e=>{e.stopPropagation()},onChange:e=>{r(parseFloat(e.currentTarget.value))},children:l.map(e=>(0,R.jsx)(`option`,{value:e.value,label:e.label},e.label))})]})]})}),(0,R.jsx)(`button`,{className:Cx(`toggleButton`),title:g,onClick:()=>p(e=>!e),children:f?(0,R.jsx)(je,{size:16}):(0,R.jsx)(te,{size:16})})]})};u();var kx={PuckCanvas:`_PuckCanvas_zw9iy_1`,"PuckCanvas-controls":`_PuckCanvas-controls_zw9iy_18`,"PuckCanvas--fullScreen":`_PuckCanvas--fullScreen_zw9iy_23`,"PuckCanvas-inner":`_PuckCanvas-inner_zw9iy_34`,"PuckCanvas-root":`_PuckCanvas-root_zw9iy_43`,"PuckCanvas--ready":`_PuckCanvas--ready_zw9iy_68`,"PuckCanvas-loader":`_PuckCanvas-loader_zw9iy_73`,"PuckCanvas--showLoader":`_PuckCanvas--showLoader_zw9iy_84`};u();var Ax=(0,L.createContext)(null),jx=({children:e})=>{let t=(0,L.useRef)(null),n=(0,L.useMemo)(()=>({frameRef:t}),[]);return(0,R.jsx)(Ax.Provider,{value:n,children:e})},Mx=()=>{let e=(0,L.useContext)(Ax);if(e===null)throw Error(`useCanvasFrame must be used within a FrameProvider`);return e},Nx=f(`PuckCanvas`,kx),Px=!0,Fx=150,Ix=()=>{let{frameRef:e}=Mx(),t=P(e),{viewports:n=N,ui:r}=sS(),{dispatch:i,overrides:a,setUi:o,zoomConfig:l,setZoomConfig:u,status:d,iframe:f,_experimentalFullScreenCanvas:p}=I(jt(e=>({dispatch:e.dispatch,overrides:e.overrides,setUi:e.setUi,zoomConfig:e.zoomConfig,setZoomConfig:e.setZoomConfig,status:e.status,iframe:e.iframe,_experimentalFullScreenCanvas:e._experimentalFullScreenCanvas}))),{leftSideBarVisible:m,rightSideBarVisible:h,leftSideBarWidth:g,rightSideBarWidth:v,viewports:y}=I(jt(e=>({leftSideBarVisible:e.state.ui.leftSideBarVisible,rightSideBarVisible:e.state.ui.rightSideBarVisible,leftSideBarWidth:e.state.ui.leftSideBarWidth,rightSideBarWidth:e.state.ui.rightSideBarWidth,viewports:e.state.ui.viewports}))),[x,S]=(0,L.useState)(!1),C=(0,L.useRef)(!1),w=(0,L.useMemo)(()=>({children:e})=>(0,R.jsx)(R.Fragment,{children:e}),[]),T=(0,L.useMemo)(()=>a.preview||w,[a]),E=(0,L.useCallback)(()=>{if(e.current){let t=e.current,n=Se(t);return{width:n.contentBox.width,height:n.contentBox.height}}return{width:0,height:0}},[e]);(0,L.useEffect)(()=>{t()},[e,m,h,g,v,y]),(0,L.useEffect)(()=>{let{height:e}=E();y.current.height===`auto`&&u(c(s({},l),{rootHeight:e/l.zoom}))},[l.zoom,E,u]),(0,L.useEffect)(()=>{Px&&t()},[y.current.width,y]),(0,L.useEffect)(()=>{if(!e.current)return;let n=new ResizeObserver(()=>{C.current||t()});return n.observe(e.current),()=>{n.disconnect()}},[e.current]);let[D,O]=(0,L.useState)(!1);(0,L.useEffect)(()=>{setTimeout(()=>{O(!0)},500)},[]);let k=b();return(0,L.useEffect)(()=>{if(typeof window>`u`||r?.viewports?.current)return;let t=window.innerWidth,i=e.current?.getBoundingClientRect().width;if(!t||!i||n.length===0)return;let a=Object.values(n).find(e=>e.width===`100%`),o=!!a,l=Object.entries(n).filter(([e,t])=>t.width!==`100%`).map(([e,n])=>({key:e,diff:Math.abs(t-(typeof n.width==`string`?t:n.width)),value:n})).sort((e,t)=>e.diff>t.diff?1:-1)[0].value;if(l.width<i&&o&&(l=a),f.enabled){let e=k.getState(),t={state:c(s({},e.state),{ui:c(s({},e.state.ui),{viewports:c(s({},e.state.ui.viewports),{current:c(s({},e.state.ui.viewports.current),{height:l?.height||`auto`,width:l?.width})})})})},n=e.history;e.history.histories.length===1&&(n=c(s({},n),{histories:[t]})),k.setState(c(s({},t),{history:n}))}},[n,e.current,f,k,r?.viewports?.current]),(0,R.jsxs)(`div`,{className:Nx({ready:d===`READY`||!f.enabled||!f.waitForStyles,showLoader:D,fullScreen:p}),onClick:e=>{let t=e.target;!t.hasAttribute(`data-puck-component`)&&!t.hasAttribute(`data-puck-dropzone`)&&i({type:`setUi`,ui:{itemSelector:null},recordHistory:!1})},children:[y.controlsVisible&&f.enabled&&(0,R.jsx)(`div`,{className:Nx(`controls`),children:(0,R.jsx)(Ox,{fullScreen:p,autoZoom:l.autoZoom,zoom:l.zoom,onViewportChange:e=>{S(!0),C.current=!0;let n=c(s({},e),{height:e.height||`auto`,zoom:l.zoom}),r={viewports:c(s({},y),{current:n})};o(r),Px&&t({viewports:c(s({},y),{current:n})})},onZoom:e=>{S(!0),C.current=!0,u(c(s({},l),{zoom:e}))}})}),(0,R.jsxs)(`div`,{className:Nx(`inner`),ref:e,children:[(0,R.jsx)(`div`,{className:Nx(`root`),style:{width:f.enabled?y.current.width:`100%`,height:l.rootHeight,transform:f.enabled?`scale(${l.zoom})`:void 0,transition:x?`width ${Fx}ms ease-out, height ${Fx}ms ease-out, transform ${Fx}ms ease-out`:``,overflow:f.enabled?void 0:`auto`},suppressHydrationWarning:!0,id:`puck-canvas-root`,onTransitionEnd:()=>{S(!1),C.current=!1},children:(0,R.jsx)(T,{children:(0,R.jsx)(cx,{})})}),(0,R.jsx)(`div`,{className:Nx(`loader`),children:(0,R.jsx)(_,{size:24})})]})]})};u();function Lx(e,t){let[n,r]=(0,L.useState)(null),i=(0,L.useRef)(null),a=I(t=>e===`left`?t.state.ui.leftSideBarWidth:t.state.ui.rightSideBarWidth);return(0,L.useEffect)(()=>{if(typeof window<`u`&&!a)try{let n=localStorage.getItem(`puck-sidebar-widths`);if(n){let r=JSON.parse(n)[e];r&&t({type:`setUi`,ui:{[e===`left`?`leftSideBarWidth`:`rightSideBarWidth`]:r}})}}catch(t){console.error(`Failed to load ${e} sidebar width from localStorage`,t)}},[t,e,a]),(0,L.useEffect)(()=>{a!==void 0&&r(a)},[a]),{width:n,setWidth:r,sidebarRef:i,handleResizeEnd:(0,L.useCallback)(n=>{t({type:`setUi`,ui:{[e===`left`?`leftSideBarWidth`:`rightSideBarWidth`]:n}});let r={};try{let e=localStorage.getItem(`puck-sidebar-widths`);r=e?JSON.parse(e):{}}catch(t){console.error(`Failed to save ${e} sidebar width to localStorage`,t)}finally{localStorage.setItem(`puck-sidebar-widths`,JSON.stringify(c(s({},r),{[e]:n})))}window.dispatchEvent(new CustomEvent(`viewportchange`,{bubbles:!0,cancelable:!1}))},[t,e])}}u(),u(),u();var Rx=f(`ResizeHandle`,{ResizeHandle:`_ResizeHandle_144bf_2`,"ResizeHandle--left":`_ResizeHandle--left_144bf_16`,"ResizeHandle--right":`_ResizeHandle--right_144bf_20`}),zx=({position:e,sidebarRef:t,onResize:n,onResizeEnd:r})=>{let{frameRef:i}=Mx(),a=P(i),o=(0,L.useRef)(null),s=(0,L.useRef)(!1),c=(0,L.useRef)(0),l=(0,L.useRef)(0),u=(0,L.useCallback)(t=>{if(!s.current)return;let r=t.clientX-c.current,i=e===`left`?l.current+r:l.current-r;n(Math.max(192,i)),t.preventDefault()},[n,e]),d=(0,L.useCallback)(()=>{if(!s.current)return;s.current=!1,document.body.style.cursor=``,document.body.style.userSelect=``;let e=document.getElementById(`resize-overlay`);e&&document.body.removeChild(e),document.removeEventListener(`mousemove`,u),document.removeEventListener(`mouseup`,d),r(t.current?.getBoundingClientRect().width||0),a()},[r]),f=(0,L.useCallback)(e=>{s.current=!0,c.current=e.clientX,l.current=t.current?.getBoundingClientRect().width||0,document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`;let n=document.createElement(`div`);n.id=`resize-overlay`,n.setAttribute(`data-resize-overlay`,``),document.body.appendChild(n),document.addEventListener(`mousemove`,u),document.addEventListener(`mouseup`,d),e.preventDefault()},[e,u,d]);return(0,R.jsx)(`div`,{ref:o,className:Rx({[e]:!0}),onMouseDown:f})};u();var Bx=f(`Sidebar`,{Sidebar:`_Sidebar_16oed_1`,"Sidebar--isVisible":`_Sidebar--isVisible_16oed_10`,"Sidebar--left":`_Sidebar--left_16oed_14`,"Sidebar--right":`_Sidebar--right_16oed_34`,"Sidebar-resizeHandle":`_Sidebar-resizeHandle_16oed_51`}),Vx=({position:e,sidebarRef:t,isVisible:n,onResize:r,onResizeEnd:i,children:a})=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{ref:t,className:Bx({[e]:!0,isVisible:n}),children:a}),(0,R.jsx)(`div`,{className:`${Bx(`resizeHandle`)}`,children:(0,R.jsx)(zx,{position:e,sidebarRef:t,onResize:r,onResizeEnd:i})})]});u();var Hx=e=>{let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t);if(e.display===`none`||e.visibility===`hidden`||e.opacity===`0`||t.getAttribute(`aria-hidden`)===`true`||t.hasAttribute(`hidden`))return!1;t=t.parentElement}return!0},Ux=e=>{if(e instanceof HTMLElement)return!0;let t=e?.ownerDocument?.defaultView;return!!t&&e instanceof t.HTMLElement},Wx=e=>{if(e?.defaultPrevented)return!0;let t=(e?.composedPath)?.call(e)[0]||e?.target||document.activeElement;if(Ux(t)){let e=t.tagName.toLowerCase();if(e===`input`||e===`textarea`||e===`select`||t.isContentEditable)return!0;let n=t.getAttribute(`role`);if(n===`textbox`||n===`combobox`||n===`searchbox`||n===`listbox`||n===`grid`)return!0}let n=document.querySelector(`dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]`);return!!(n&&Hx(n))},Gx=()=>{let e=b(),t=(0,L.useCallback)(t=>{if(Wx(t))return!1;let{state:n,dispatch:r,permissions:i,selectedItem:a}=e.getState(),o=n.ui?.itemSelector;return!o?.zone||!a||!i.getPermissions({item:a}).delete||r({type:`remove`,index:o.index,zone:o.zone}),!0},[e]);ue({delete:!0},t),ue({backspace:!0},t)};u(),u();var Kx={Nav:`_Nav_vll2r_1`,"Nav-list":`_Nav-list_vll2r_5`,"Nav-mobileActions":`_Nav-mobileActions_vll2r_23`,"NavItem-link":`_NavItem-link_vll2r_39`,NavItem:`_NavItem_vll2r_39`,"NavItem-linkIcon":`_NavItem-linkIcon_vll2r_90`,"NavItem--active":`_NavItem--active_vll2r_100`,"NavItem--mobileOnly":`_NavItem--mobileOnly_vll2r_136`,"NavItem--desktopOnly":`_NavItem--desktopOnly_vll2r_141`},qx=f(`Nav`,Kx),Jx=f(`NavItem`,Kx),Yx=({label:e,icon:t,onClick:n,isActive:r,mobileOnly:i,desktopOnly:a})=>(0,R.jsx)(`li`,{className:Jx({active:r,mobileOnly:i,desktopOnly:a}),children:n&&(0,R.jsxs)(`div`,{className:Jx(`link`),onClick:n,children:[t&&(0,R.jsx)(`span`,{className:Jx(`linkIcon`),children:t}),(0,R.jsx)(`span`,{className:Jx(`linkLabel`),children:e})]})}),Xx=({items:e,mobileActions:t})=>(0,R.jsxs)(`nav`,{className:qx(),children:[(0,R.jsx)(`ul`,{className:qx(`list`),children:Object.entries(e).map(([e,t])=>(0,R.jsx)(Yx,s({},t),e))}),t&&(0,R.jsx)(`div`,{className:qx(`mobileActions`),children:t})]});u();var Zx=e=>s({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),Qx=f(`Puck`,fx),$x=f(`PuckLayout`,fx),eS=f(`PuckPluginTab`,fx),tS=typeof window>`u`?L.useEffect:L.useLayoutEffect,nS=()=>{let e=x(`label-page`),t=I(e=>e.selectedItem?e.config.components[e.selectedItem.type]?.label??e.selectedItem.type.toString():e.config.root?.label);return(0,R.jsx)(bx,{noBorderTop:!0,showBreadcrumbs:!0,title:t||e,children:(0,R.jsx)(Cb,{})})},rS=({children:e,visible:t,mobileOnly:n})=>(0,R.jsx)(`div`,{className:eS({visible:t,mobileOnly:n}),children:(0,R.jsx)(`div`,{className:eS(`body`),children:e})}),iS=({children:e})=>{let{iframe:t,initialHistory:n,plugins:r,height:i}=sS(),a=I(e=>e.dnd),o=(0,L.useMemo)(()=>Zx(t),[t]);Hb();let c=I(e=>e.dispatch),l=I(e=>e.state.ui.leftSideBarVisible),u=I(e=>e.state.ui.rightSideBarVisible),d=I(e=>e.instanceId),{width:f,setWidth:p,sidebarRef:m,handleResizeEnd:h}=Lx(`left`,c),{width:g,setWidth:_,sidebarRef:v,handleResizeEnd:y}=Lx(`right`,c);(0,L.useEffect)(()=>{window.matchMedia(`(min-width: 638px)`).matches||c({type:`setUi`,ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});let e=()=>{window.matchMedia(`(min-width: 638px)`).matches||c({type:`setUi`,ui:e=>s(s({},e),e.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let S=I(e=>e.overrides),C=(0,L.useMemo)(()=>S.puck||px,[S]),[w,T]=(0,L.useState)(!1);tS(()=>{T(!0)},[]);let E=I(e=>e.status===`READY`);re(),(0,L.useEffect)(()=>{if(E&&o.enabled){let e=Mg();if(e)return Qe(e)}},[E,o.enabled]),mx(),Gx();let D={};f&&(D[`--puck-user-sidebar-left-width`]=`${f}px`),g&&(D[`--puck-user-sidebar-right-width`]=`${g}px`);let O=I(e=>e.setUi),k=I(e=>e.state.ui.plugin?.current),ee=b(),A=(0,L.useMemo)(()=>!!r?.find(e=>e.name===`legacy-side-bar`),[r]),te=x(`plugin-blocks`),j=x(`plugin-outline`),M=x(`plugin-fields`),N=(0,L.useMemo)(()=>{let e={},t=[qv({label:te}),lb({label:j})],n=e=>e.name===`legacy-side-bar`?-1:0,i=[...t,...r??[]].sort((e,t)=>n(e)-n(t));return r?.some(e=>e.name===`fields`)||i.push(Eb({label:M})),i?.forEach(t=>{t.name&&t.render&&(e[t.name]&&delete e[t.name],e[t.name]={label:t.label??t.name,icon:t.icon??(0,R.jsx)(Ye,{}),onClick:()=>{t.name===k?O(l?{leftSideBarVisible:!1}:{leftSideBarVisible:!0}):t.name&&O({plugin:{current:t.name},leftSideBarVisible:!0})},isActive:l&&k===t.name,render:t.render,mobilePanelHeight:t.mobilePanelHeight??`toggle`,mobileOnly:A||t.mobileOnly,desktopOnly:t.name===`legacy-side-bar`||t.desktopOnly})}),e},[r,k,ee,l,te,j,M]),P=N[k??Object.keys(N)[0]]?.mobilePanelHeight??`toggle`;(0,L.useEffect)(()=>{if(!k){let e=Object.keys(N);O({plugin:{current:e[0]}})}},[N,k]);let ne=N.fields&&N.fields.mobileOnly===!1,ie=I(e=>e.state.ui.mobilePanelExpanded??!1),F=x(`layout-maximize`),ae=x(`layout-minimize`);return(0,R.jsxs)(`div`,{className:`Puck notranslate ${Qx({hidePlugins:A})}`,id:d,translate:`no`,style:{height:i,visibility:`hidden`},children:[(0,R.jsx)(B_,{disableAutoScroll:a?.disableAutoScroll,behavior:a?.behavior,children:(0,R.jsx)(C,{children:e||(0,R.jsx)(jx,{children:(0,R.jsx)(`div`,{className:$x({leftSideBarVisible:l,mounted:w,rightSideBarVisible:!ne&&u,isExpanded:ie,mobilePanelHeightToggle:P===`toggle`,mobilePanelHeightMinContent:P===`min-content`}),style:{height:i},children:(0,R.jsxs)(`div`,{className:$x(`inner`),style:D,children:[(0,R.jsx)(`div`,{className:$x(`header`),children:(0,R.jsx)(vx,{hidePlugins:A})}),(0,R.jsx)(`div`,{className:$x(`nav`),children:(0,R.jsx)(Xx,{items:N,mobileActions:l&&P===`toggle`&&(0,R.jsx)(Ie,{type:`button`,title:ie?ae:F,onClick:()=>{O({mobilePanelExpanded:!ie})},children:ie?(0,R.jsx)(he,{size:21}):(0,R.jsx)(de,{size:21})})})}),(0,R.jsx)(Vx,{position:`left`,sidebarRef:m,isVisible:l,onResize:p,onResizeEnd:h,children:Object.entries(N).map(([e,{mobileOnly:t,render:n,label:r}])=>(0,R.jsx)(rS,{visible:k===e,mobileOnly:t,children:(0,R.jsx)(n,{})},e))}),(0,R.jsx)(Ix,{}),!ne&&(0,R.jsx)(Vx,{position:`right`,sidebarRef:v,isVisible:u,onResize:_,onResizeEnd:y,children:(0,R.jsx)(nS,{})})]})})})})}),(0,R.jsx)(`div`,{id:`puck-portal-root`,className:Qx(`portal`)})]})},aS=(0,L.createContext)({});function oS(e){return(0,R.jsx)(aS.Provider,{value:e,children:e.children})}var sS=()=>(0,L.useContext)(aS);function cS({children:e}){let{config:t,data:n,ui:r,onChange:i,permissions:a={},plugins:o,overrides:l,viewports:u=N,iframe:d,dnd:f,initialHistory:p,metadata:m,dictionary:_,onAction:v,fieldTransforms:y,_experimentalFullScreenCanvas:b,_experimentalVirtualization:x}=sS(),S=(0,L.useMemo)(()=>Zx(d),[d]),[C]=(0,L.useState)(()=>{let e=s(s({},k.ui),r),i={};Object.keys(n?.root||{}).length>0&&!n?.root?.props&&console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");let a=n?.root?.props||n?.root||{},o=s(s({},t.root?.defaultProps),a),l=ge(oe(c(s({},n?.root),{props:o})),t),u=c(s({},k),{data:c(s({},n),{root:c(s({},n?.root),{props:l.props}),content:n.content||[]}),ui:c(s(s({},e),i),{componentList:t.categories?Object.entries(t.categories).reduce((e,[t,n])=>c(s({},e),{[t]:{title:n.title,components:n.components,expanded:n.defaultExpanded,visible:n.visible}}),{}):{}})});return h(u,t)}),{appendData:w=!0}=p||{},[T]=(0,L.useState)([...p?.histories||[],...w?[{state:C}]:[]].map(e=>{let n=s(s({},C),e.state);return e.state.indexes||(n=h(n,t)),c(s({},e),{state:n})})),E=(0,L.useMemo)(()=>p?.index!==void 0&&p?.index>=0&&p?.index<T.length?p?.index:T.length-1,[]),D=T[E].state,O=dx({overrides:l,plugins:o}),ee=(0,L.useMemo)(()=>{let e=(o||[]).reduce((e,t)=>s(s({},e),t.fieldTransforms),{});return s(s({},e),y)},[y,o]),A=Rm(),te=(0,L.useCallback)(e=>({instanceId:A,state:e,config:t,plugins:o||[],overrides:O,viewports:u,iframe:S,_experimentalFullScreenCanvas:!!b,_experimentalVirtualization:!!x,onAction:v,metadata:m,dictionary:_||{},dnd:f,fieldTransforms:ee}),[A,D,t,o,O,u,S,b,x,v,m,_,f,ee]),[j]=(0,L.useState)(()=>Ne(te(D)));(0,L.useEffect)(()=>{},[j]),(0,L.useEffect)(()=>{let e=j.getState().state;j.setState(s({},te(e)))},[te]),g(j,{histories:T,index:E,initialAppState:D});let M=(0,L.useRef)(null);(0,L.useEffect)(()=>j.subscribe(e=>e.state.data,e=>{if(i){if(ce(e,M.current))return;i(e),M.current=e}}),[i]),Le(j,a);let P=Bv(j);return(0,L.useEffect)(()=>{let{resolveAndCommitData:e}=j.getState();setTimeout(()=>{e()},0)},[]),(0,R.jsx)(Fe.Provider,{value:j,children:(0,R.jsx)(Rv.Provider,{value:P,children:e})})}function lS(e){return(0,R.jsx)(oS,c(s({},e),{children:(0,R.jsx)(cS,c(s({},e),{children:(0,R.jsx)(iS,{children:e.children})}))}))}lS.Components=Gv,lS.Fields=Cb,lS.Layout=iS,lS.Outline=sb,lS.Preview=cx,u(),u(),u(),u(),u(),u(),u(),u(),u(),u(),u(),u(),u(),u();export{Pv as Render,lS as t};