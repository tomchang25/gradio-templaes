import{S as K,i as R,s as z,G as v,e as q,H,C as o,g as k,E as B,m as E,ae as C,J as w,al as I,p as M,t as T,q as j,n as D,a0 as F,r as L,I as N,K as O,x as P,$ as Q,b as U,a as V,h as W,j as X,k as Y,y as J}from"./index-1bfae066.js";/* empty css                                                  */import{B as Z}from"./Button-f85c92e7.js";/* empty css                                                    */import{B as y}from"./BlockTitle-37c9001d.js";import"./Info-28444944.js";function p(e){let l;return{c(){l=N(e[5])},m(n,a){k(n,l,a)},p(n,a){a&32&&O(l,n[5])},d(n){n&&j(l)}}}function x(e){let l,n,a,_,b,u,h,f,d,i,g;return _=new y({props:{show_label:e[7],info:e[6],$$slots:{default:[p]},$$scope:{ctx:e}}}),{c(){l=v("div"),n=v("div"),a=v("label"),q(_.$$.fragment),b=H(),u=v("input"),h=H(),f=v("input"),o(a,"for",e[8]),o(u,"data-testid","number-input"),o(u,"type","number"),o(u,"min",e[1]),o(u,"max",e[2]),o(u,"step",e[3]),u.disabled=e[4],o(u,"class","svelte-jigama"),o(n,"class","head svelte-jigama"),o(l,"class","wrap svelte-jigama"),o(f,"type","range"),o(f,"id",e[8]),o(f,"name","cowbell"),o(f,"min",e[1]),o(f,"max",e[2]),o(f,"step",e[3]),f.disabled=e[4],o(f,"class","svelte-jigama")},m(s,t){k(s,l,t),B(l,n),B(n,a),E(_,a,null),B(n,b),B(n,u),C(u,e[0]),k(s,h,t),k(s,f,t),C(f,e[0]),d=!0,i||(g=[w(u,"input",e[11]),w(u,"blur",e[10]),w(u,"mouseup",e[9]),w(f,"change",e[12]),w(f,"input",e[12]),w(f,"mouseup",e[9])],i=!0)},p(s,[t]){const c={};t&128&&(c.show_label=s[7]),t&64&&(c.info=s[6]),t&16416&&(c.$$scope={dirty:t,ctx:s}),_.$set(c),(!d||t&2)&&o(u,"min",s[1]),(!d||t&4)&&o(u,"max",s[2]),(!d||t&8)&&o(u,"step",s[3]),(!d||t&16)&&(u.disabled=s[4]),t&1&&I(u.value)!==s[0]&&C(u,s[0]),(!d||t&2)&&o(f,"min",s[1]),(!d||t&4)&&o(f,"max",s[2]),(!d||t&8)&&o(f,"step",s[3]),(!d||t&16)&&(f.disabled=s[4]),t&1&&C(f,s[0])},i(s){d||(M(_.$$.fragment,s),d=!0)},o(s){T(_.$$.fragment,s),d=!1},d(s){s&&j(l),D(_),s&&j(h),s&&j(f),i=!1,F(g)}}}let $=0;function ee(e,l,n){let{value:a=0}=l,{minimum:_=0}=l,{maximum:b=100}=l,{step:u=1}=l,{disabled:h=!1}=l,{label:f}=l,{info:d=void 0}=l,{show_label:i}=l;const g=`range_id_${$++}`,s=L();function t(r){s("release",a)}const c=()=>{s("release",a),n(0,a=Math.min(Math.max(a,_),b))};function S(){a=I(this.value),n(0,a)}function G(){a=I(this.value),n(0,a)}return e.$$set=r=>{"value"in r&&n(0,a=r.value),"minimum"in r&&n(1,_=r.minimum),"maximum"in r&&n(2,b=r.maximum),"step"in r&&n(3,u=r.step),"disabled"in r&&n(4,h=r.disabled),"label"in r&&n(5,f=r.label),"info"in r&&n(6,d=r.info),"show_label"in r&&n(7,i=r.show_label)},e.$$.update=()=>{e.$$.dirty&1&&s("change",a)},[a,_,b,u,h,f,d,i,g,t,c,S,G]}class le extends K{constructor(l){super(),R(this,l,ee,x,z,{value:0,minimum:1,maximum:2,step:3,disabled:4,label:5,info:6,show_label:7})}}function ae(e){let l,n,a,_,b;const u=[e[12]];let h={};for(let i=0;i<u.length;i+=1)h=P(h,u[i]);l=new Q({props:h});function f(i){e[13](i)}let d={label:e[4],info:e[5],show_label:e[11],minimum:e[7],maximum:e[8],step:e[9],disabled:e[10]==="static"};return e[0]!==void 0&&(d.value=e[0]),a=new le({props:d}),U.push(()=>V(a,"value",f)),a.$on("change",e[14]),a.$on("release",e[15]),{c(){q(l.$$.fragment),n=H(),q(a.$$.fragment)},m(i,g){E(l,i,g),k(i,n,g),E(a,i,g),b=!0},p(i,g){const s=g&4096?W(u,[X(i[12])]):{};l.$set(s);const t={};g&16&&(t.label=i[4]),g&32&&(t.info=i[5]),g&2048&&(t.show_label=i[11]),g&128&&(t.minimum=i[7]),g&256&&(t.maximum=i[8]),g&512&&(t.step=i[9]),g&1024&&(t.disabled=i[10]==="static"),!_&&g&1&&(_=!0,t.value=i[0],Y(()=>_=!1)),a.$set(t)},i(i){b||(M(l.$$.fragment,i),M(a.$$.fragment,i),b=!0)},o(i){T(l.$$.fragment,i),T(a.$$.fragment,i),b=!1},d(i){D(l,i),i&&j(n),D(a,i)}}}function ne(e){let l,n;return l=new Z({props:{visible:e[3],elem_id:e[1],elem_classes:e[2],disable:typeof e[6].container=="boolean"&&!e[6].container,$$slots:{default:[ae]},$$scope:{ctx:e}}}),{c(){q(l.$$.fragment)},m(a,_){E(l,a,_),n=!0},p(a,[_]){const b={};_&8&&(b.visible=a[3]),_&2&&(b.elem_id=a[1]),_&4&&(b.elem_classes=a[2]),_&64&&(b.disable=typeof a[6].container=="boolean"&&!a[6].container),_&73649&&(b.$$scope={dirty:_,ctx:a}),l.$set(b)},i(a){n||(M(l.$$.fragment,a),n=!0)},o(a){T(l.$$.fragment,a),n=!1},d(a){D(l,a)}}}function ie(e,l,n){let{elem_id:a=""}=l,{elem_classes:_=[]}=l,{visible:b=!0}=l,{value:u=0}=l,{label:h="Slider"}=l,{info:f=void 0}=l,{style:d={}}=l,{minimum:i}=l,{maximum:g}=l,{step:s}=l,{mode:t}=l,{show_label:c}=l,{loading_status:S}=l;function G(m){u=m,n(0,u)}function r(m){J.call(this,e,m)}function A(m){J.call(this,e,m)}return e.$$set=m=>{"elem_id"in m&&n(1,a=m.elem_id),"elem_classes"in m&&n(2,_=m.elem_classes),"visible"in m&&n(3,b=m.visible),"value"in m&&n(0,u=m.value),"label"in m&&n(4,h=m.label),"info"in m&&n(5,f=m.info),"style"in m&&n(6,d=m.style),"minimum"in m&&n(7,i=m.minimum),"maximum"in m&&n(8,g=m.maximum),"step"in m&&n(9,s=m.step),"mode"in m&&n(10,t=m.mode),"show_label"in m&&n(11,c=m.show_label),"loading_status"in m&&n(12,S=m.loading_status)},[u,a,_,b,h,f,d,i,g,s,t,c,S,G,r,A]}class se extends K{constructor(l){super(),R(this,l,ie,ne,z,{elem_id:1,elem_classes:2,visible:3,value:0,label:4,info:5,style:6,minimum:7,maximum:8,step:9,mode:10,show_label:11,loading_status:12})}}const be=se,de=["static","dynamic"],ge=e=>({type:{payload:"number"},description:{payload:"selected value"},example_data:e.value??e.minimum});export{be as Component,ge as document,de as modes};
//# sourceMappingURL=index-098ab311.js.map
