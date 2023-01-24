import{S as Q,i as Z,s as x,e as W,a as U,t as O,c as B,b as g,M as Y,ae as fe,d as ne,Y as ae,f as I,g as k,m as M,l as v,z as ie,W as _e,D as oe,k as w,E as ue,j as y,h as re,n as z,o as P,A as me,at as de,au as he,aa as ge,K as A,I as be,B as ke,F as pe,x as ve,P as we,R as ye,T as Ce,U as Te,V as Ve}from"./index.0224e6d0.js";import{n as se}from"./utils.27234e1d.js";import{B as We}from"./BlockLabel.4c9cd4aa.js";import{M as Ne,P as je,a as Be,V as ce}from"./Video.f01b06f1.js";import{U as Me}from"./Undo.486dfef8.js";const{isNaN:Pe}=de;function Fe(n){let l,e;return l=new je({}),{c(){B(l.$$.fragment)},m(t,a){M(l,t,a),e=!0},i(t){e||(y(l.$$.fragment,t),e=!0)},o(t){w(l.$$.fragment,t),e=!1},d(t){P(l,t)}}}function Se(n){let l,e;return l=new Be({}),{c(){B(l.$$.fragment)},m(t,a){M(l,t,a),e=!0},i(t){e||(y(l.$$.fragment,t),e=!0)},o(t){w(l.$$.fragment,t),e=!1},d(t){P(l,t)}}}function Xe(n){let l,e;return l=new Me({}),{c(){B(l.$$.fragment)},m(t,a){M(l,t,a),e=!0},i(t){e||(y(l.$$.fragment,t),e=!0)},o(t){w(l.$$.fragment,t),e=!1},d(t){P(l,t)}}}function qe(n){let l,e,t,a,r,_=!1,o,u=!0,d,i,s,p,h,b,F,c,X=G(n[3])+"",D,K,q=G(n[4])+"",E,L,N,R,f,j,V,C,H,$;function ee(){cancelAnimationFrame(o),e.paused||(o=he(ee),_=!0),n[15].call(e)}const te=[Xe,Se,Fe],S=[];function le(m,T){return m[3]===m[4]?0:m[5]?1:2}return h=le(n),b=S[h]=te[h](n),V=new Ne({}),{c(){l=W("div"),e=W("video"),t=W("track"),d=U(),i=W("div"),s=W("div"),p=W("span"),b.c(),F=U(),c=W("span"),D=O(X),K=O(" / "),E=O(q),L=U(),N=W("progress"),f=U(),j=W("div"),B(V.$$.fragment),g(t,"kind","captions"),Y(t.src,a=n[1])||g(t,"src",a),g(t,"label","Subtitles"),t.default=!0,Y(e.src,r=n[0])||g(e,"src",r),g(e,"preload","auto"),g(e,"crossorigin","anonymous"),g(e,"class","w-full h-full object-contain bg-black svelte-1cgkd5k"),n[4]===void 0&&fe(()=>n[16].call(e)),ne(e,"mirror",n[2]),g(p,"class","w-6 cursor-pointer text-white flex justify-center svelte-1cgkd5k"),g(c,"class","font-mono shrink-0 text-xs mx-3 text-white svelte-1cgkd5k"),N.value=R=n[3]/n[4]||0,g(N,"class","rounded h-2 w-full mx-3 svelte-1cgkd5k"),g(j,"class","w-6 cursor-pointer text-white"),g(s,"class","flex w-full justify-space h-full items-center px-1.5 "),g(i,"class","wrap absolute bottom-0 transition duration-500 m-1.5 bg-slate-800 px-1 py-2.5 rounded-md svelte-1cgkd5k"),ae(i,"opacity",n[4]&&n[7]?1:0)},m(m,T){I(m,l,T),k(l,e),k(e,t),n[18](e),k(l,d),k(l,i),k(i,s),k(s,p),S[h].m(p,null),k(s,F),k(s,c),k(c,D),k(c,K),k(c,E),k(s,L),k(s,N),k(s,f),k(s,j),M(V,j,null),C=!0,H||($=[v(e,"mousemove",n[8]),v(e,"click",n[10]),v(e,"play",n[12]),v(e,"pause",n[13]),v(e,"ended",n[14]),v(e,"timeupdate",ee),v(e,"durationchange",n[16]),v(e,"play",n[17]),v(e,"pause",n[17]),v(p,"click",n[10]),v(N,"mousemove",n[9]),v(N,"touchmove",ie(n[9])),v(N,"click",_e(ie(n[11]))),v(j,"click",n[19]),v(i,"mousemove",n[8])],H=!0)},p(m,[T]){(!C||T&2&&!Y(t.src,a=m[1]))&&g(t,"src",a),(!C||T&1&&!Y(e.src,r=m[0]))&&g(e,"src",r),!_&&T&8&&!Pe(m[3])&&(e.currentTime=m[3]),_=!1,T&32&&u!==(u=m[5])&&e[u?"pause":"play"](),T&4&&ne(e,"mirror",m[2]);let J=h;h=le(m),h!==J&&(oe(),w(S[J],1,1,()=>{S[J]=null}),ue(),b=S[h],b||(b=S[h]=te[h](m),b.c()),y(b,1),b.m(p,null)),(!C||T&8)&&X!==(X=G(m[3])+"")&&re(D,X),(!C||T&16)&&q!==(q=G(m[4])+"")&&re(E,q),(!C||T&24&&R!==(R=m[3]/m[4]||0))&&(N.value=R),(!C||T&144)&&ae(i,"opacity",m[4]&&m[7]?1:0)},i(m){C||(y(b),y(V.$$.fragment,m),C=!0)},o(m){w(b),w(V.$$.fragment,m),C=!1},d(m){m&&z(l),n[18](null),S[h].d(),P(V),H=!1,me($)}}}function G(n){if(isNaN(n)||!isFinite(n))return"...";const l=Math.floor(n/60);let e=Math.floor(n%60);return n<10&&(e=`0${e}`),`${l}:${e}`}function Re(n,l,e){let{src:t}=l,{caption:a}=l,{mirror:r}=l,_=0,o,u=!0,d,i=!0,s;function p(){clearTimeout(s),s=setTimeout(()=>e(7,i=!1),2500),e(7,i=!0)}function h(f){if(!o)return;if(f.type==="click"){F(f);return}if(f.type!=="touchmove"&&!(f.buttons&1))return;const j=f.type==="touchmove"?f.touches[0].clientX:f.clientX,{left:V,right:C}=f.currentTarget.getBoundingClientRect();e(3,_=o*(j-V)/(C-V))}function b(){u?d.play():d.pause()}function F(f){const{left:j,right:V}=f.currentTarget.getBoundingClientRect();e(3,_=o*(f.clientX-j)/(V-j))}async function c(){await ge(),e(6,d.currentTime=9999,d),setTimeout(async()=>{e(6,d.currentTime=0,d)},50)}function X(f){A.call(this,n,f)}function D(f){A.call(this,n,f)}function K(f){A.call(this,n,f)}function q(){_=this.currentTime,e(3,_)}function E(){o=this.duration,e(4,o)}function L(){u=this.paused,e(5,u)}function N(f){be[f?"unshift":"push"](()=>{d=f,e(6,d)})}const R=()=>d.requestFullscreen();return n.$$set=f=>{"src"in f&&e(0,t=f.src),"caption"in f&&e(1,a=f.caption),"mirror"in f&&e(2,r=f.mirror)},n.$$.update=()=>{n.$$.dirty&1&&t&&c()},[t,a,r,_,o,u,d,i,p,h,b,F,X,D,K,q,E,L,N,R]}class Ue extends Q{constructor(l){super(),Z(this,l,Re,qe,x,{src:0,caption:1,mirror:2})}}function Ae(n){let l,e;return l=new Ue({props:{src:n[0].data,caption:n[1].data,mirror:!1}}),l.$on("play",n[4]),l.$on("pause",n[5]),l.$on("ended",n[6]),{c(){B(l.$$.fragment)},m(t,a){M(l,t,a),e=!0},p(t,a){const r={};a&1&&(r.src=t[0].data),a&2&&(r.caption=t[1].data),l.$set(r)},i(t){e||(y(l.$$.fragment,t),e=!0)},o(t){w(l.$$.fragment,t),e=!1},d(t){P(l,t)}}}function De(n){let l,e,t,a;return t=new ce({}),{c(){l=W("div"),e=W("div"),B(t.$$.fragment),g(e,"class","h-5 dark:text-white opacity-50"),g(l,"class","h-full min-h-[15rem] flex justify-center items-center")},m(r,_){I(r,l,_),k(l,e),M(t,e,null),a=!0},p:ve,i(r){a||(y(t.$$.fragment,r),a=!0)},o(r){w(t.$$.fragment,r),a=!1},d(r){r&&z(l),P(t)}}}function Ee(n){let l,e,t,a,r,_;l=new We({props:{show_label:n[3],Icon:ce,label:n[2]||"VideoWithCaption"}});const o=[De,Ae],u=[];function d(i,s){return i[0]===null||i[1]===null?0:1}return t=d(n),a=u[t]=o[t](n),{c(){B(l.$$.fragment),e=U(),a.c(),r=ke()},m(i,s){M(l,i,s),I(i,e,s),u[t].m(i,s),I(i,r,s),_=!0},p(i,[s]){const p={};s&8&&(p.show_label=i[3]),s&4&&(p.label=i[2]||"VideoWithCaption"),l.$set(p);let h=t;t=d(i),t===h?u[t].p(i,s):(oe(),w(u[h],1,1,()=>{u[h]=null}),ue(),a=u[t],a?a.p(i,s):(a=u[t]=o[t](i),a.c()),y(a,1),a.m(r.parentNode,r))},i(i){_||(y(l.$$.fragment,i),y(a),_=!0)},o(i){w(l.$$.fragment,i),w(a),_=!1},d(i){P(l,i),i&&z(e),u[t].d(i),i&&z(r)}}}function Ie(n,l,e){let{value:t=null}=l,{caption:a=null}=l,{label:r=void 0}=l,{show_label:_}=l;const o=pe();function u(s){A.call(this,n,s)}function d(s){A.call(this,n,s)}function i(s){A.call(this,n,s)}return n.$$set=s=>{"value"in s&&e(0,t=s.value),"caption"in s&&e(1,a=s.caption),"label"in s&&e(2,r=s.label),"show_label"in s&&e(3,_=s.show_label)},n.$$.update=()=>{n.$$.dirty&1&&t&&o("change",t)},[t,a,r,_,u,d,i]}class ze extends Q{constructor(l){super(),Z(this,l,Ie,Ee,x,{value:0,caption:1,label:2,show_label:3})}}function Ke(n){let l,e,t,a;const r=[n[6]];let _={};for(let o=0;o<r.length;o+=1)_=ye(_,r[o]);return l=new Ce({props:_}),t=new ze({props:{value:n[9],caption:n[10],label:n[3],show_label:n[5]}}),{c(){B(l.$$.fragment),e=U(),B(t.$$.fragment)},m(o,u){M(l,o,u),I(o,e,u),M(t,o,u),a=!0},p(o,u){const d=u&64?Te(r,[Ve(o[6])]):{};l.$set(d);const i={};u&512&&(i.value=o[9]),u&1024&&(i.caption=o[10]),u&8&&(i.label=o[3]),u&32&&(i.show_label=o[5]),t.$set(i)},i(o){a||(y(l.$$.fragment,o),y(t.$$.fragment,o),a=!0)},o(o){w(l.$$.fragment,o),w(t.$$.fragment,o),a=!1},d(o){P(l,o),o&&z(e),P(t,o)}}}function Le(n){let l,e;return l=new we({props:{visible:n[1],variant:n[8]==="dynamic"&&n[2]===null&&n[4]==="upload"?"dashed":"solid",color:"grey",padding:!1,elem_id:n[0],style:{height:n[7].height,width:n[7].width},$$slots:{default:[Ke]},$$scope:{ctx:n}}}),{c(){B(l.$$.fragment)},m(t,a){M(l,t,a),e=!0},p(t,[a]){const r={};a&2&&(r.visible=t[1]),a&276&&(r.variant=t[8]==="dynamic"&&t[2]===null&&t[4]==="upload"?"dashed":"solid"),a&1&&(r.elem_id=t[0]),a&128&&(r.style={height:t[7].height,width:t[7].width}),a&9832&&(r.$$scope={dirty:a,ctx:t}),l.$set(r)},i(t){e||(y(l.$$.fragment,t),e=!0)},o(t){w(l.$$.fragment,t),e=!1},d(t){P(l,t)}}}function Ye(n,l,e){let{elem_id:t=""}=l,{visible:a=!0}=l,{value:r}=l,{label:_}=l,{source:o}=l,{root:u}=l,{root_url:d}=l,{show_label:i}=l,{loading_status:s}=l,{style:p={}}=l,{mode:h}=l,b,F;return console.log(b,F),n.$$set=c=>{"elem_id"in c&&e(0,t=c.elem_id),"visible"in c&&e(1,a=c.visible),"value"in c&&e(2,r=c.value),"label"in c&&e(3,_=c.label),"source"in c&&e(4,o=c.source),"root"in c&&e(11,u=c.root),"root_url"in c&&e(12,d=c.root_url),"show_label"in c&&e(5,i=c.show_label),"loading_status"in c&&e(6,s=c.loading_status),"style"in c&&e(7,p=c.style),"mode"in c&&e(8,h=c.mode)},n.$$.update=()=>{n.$$.dirty&6148&&e(9,b=se(r[0],d??u)),n.$$.dirty&6148&&e(10,F=se(r[1],d??u))},[t,a,r,_,o,i,s,p,h,b,F,u,d]}class Ge extends Q{constructor(l){super(),Z(this,l,Ye,Le,x,{elem_id:0,visible:1,value:2,label:3,source:4,root:11,root_url:12,show_label:5,loading_status:6,style:7,mode:8})}}var xe=Ge;const $e=["static","dynamic"],et=n=>({type:"{ name: string; data: string }",description:"file name and base64 data of video file with caption"});export{xe as Component,et as document,$e as modes};
//# sourceMappingURL=index.e184de4f.js.map