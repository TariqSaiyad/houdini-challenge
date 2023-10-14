var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const s="undefined"!=typeof window;let l=s?()=>window.performance.now():()=>Date.now(),u=s?t=>requestAnimationFrame(t):t;const a=new Set;function f(t){a.forEach((n=>{n.c(t)||(a.delete(n),n.f())})),0!==a.size&&u(f)}function d(t){let n;return 0===a.size&&u(f),{promise:new Promise((e=>{a.add(n={c:t,f:e})})),abort(){a.delete(n)}}}function m(t,n){t.appendChild(n)}function p(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function $(t){const n=y("style");return function(t,n){m(t.head||t,n),n.sheet}(p(t),n),n.sheet}function h(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function b(){return v(" ")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t,n){n=""+n,t.data!==n&&(t.data=n)}function E(t,n){t.value=null==n?"":n}function k(t,n,e,o){null==e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}const C=new Map;let A,S=0;function N(t,n,e,o,r,i,c,s=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*i(t);u+=100*t+`%{${c(o,1-o)}}\n`}const a=u+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${s}`,d=p(t),{stylesheet:m,rules:h}=C.get(d)||function(t,n){const e={stylesheet:$(n),rules:{}};return C.set(t,e),e}(d,t);h[f]||(h[f]=!0,m.insertRule(`@keyframes ${f} ${a}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${r}ms 1 both`,S+=1,f}function M(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),S-=r,S||u((()=>{S||(C.forEach((t=>{const{ownerNode:n}=t.stylesheet;n&&g(n)})),C.clear())})))}function O(t){A=t}const P=[],j=[];let R=[];const I=[],L=Promise.resolve();let D=!1;function T(t){R.push(t)}function W(t){I.push(t)}const q=new Set;let z,B=0;function F(){if(0!==B)return;const t=A;do{try{for(;B<P.length;){const t=P[B];B++,O(t),H(t.$$)}}catch(t){throw P.length=0,B=0,t}for(O(null),P.length=0,B=0;j.length;)j.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];q.has(n)||(q.add(n),n())}R.length=0}while(P.length);for(;I.length;)I.pop()();D=!1,q.clear(),O(t)}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}function G(){return z||(z=Promise.resolve(),z.then((()=>{z=null}))),z}function J(t,n,e){t.dispatchEvent(function(t,n,{bubbles:e=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,o,n),r}(`${n?"intro":"outro"}${e}`))}const K=new Set;let Q;function U(){Q={r:0,c:[],p:Q}}function V(){Q.r||r(Q.c),Q=Q.p}function X(t,n){t&&t.i&&(K.delete(t),t.i(n))}function Y(t,n,e,o){if(t&&t.o){if(K.has(t))return;K.add(t),Q.c.push((()=>{K.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}const Z={duration:0};function tt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function nt(t){t&&t.c()}function et(t,n,o,c){const{fragment:s,after_update:l}=t.$$;s&&s.m(n,o),c||T((()=>{const n=t.$$.on_mount.map(e).filter(i);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(T)}function ot(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];R.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),R=n}(e.after_update),r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){-1===t.$$.dirty[0]&&(P.push(t),D||(D=!0,L.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function it(n,e,i,c,s,l,u,a=[-1]){const f=A;O(n);const d=n.$$={fragment:null,ctx:[],props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};u&&u(d.root);let m=!1;if(d.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&rt(n,t)),e})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();e.intro&&X(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),F()}O(f)}class ct{$destroy(){ot(this,1),this.$destroy=t}$on(n,e){if(!i(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function st(t,{delay:e=0,duration:o=400,easing:r=n}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*i}}function lt(n){let e,o,i,c,s,l,u,a,f,d,p,$="Angle"===n[2]?"°":"";return{c(){e=y("label"),o=y("span"),i=v(n[2]),c=b(),s=y("span"),l=v(n[0]),u=v($),a=b(),f=y("input"),w(s,"class","value svelte-1ss4wv0"),w(f,"aria-labelledby",n[1]),w(f,"class","slider svelte-1ss4wv0"),w(f,"type","range"),w(f,"min",n[3]),w(f,"max",n[4]),w(f,"step",n[5]),w(e,"id",n[1]),w(e,"class","control svelte-1ss4wv0")},m(t,r){h(t,e,r),m(e,o),m(o,i),m(e,c),m(e,s),m(s,l),m(s,u),m(e,a),m(e,f),E(f,n[0]),d||(p=[x(f,"change",n[6]),x(f,"input",n[6])],d=!0)},p(t,[n]){4&n&&_(i,t[2]),1&n&&_(l,t[0]),4&n&&$!==($="Angle"===t[2]?"°":"")&&_(u,$),2&n&&w(f,"aria-labelledby",t[1]),8&n&&w(f,"min",t[3]),16&n&&w(f,"max",t[4]),32&n&&w(f,"step",t[5]),1&n&&E(f,t[0]),2&n&&w(e,"id",t[1])},i:t,o:t,d(t){t&&g(e),d=!1,r(p)}}}function ut(t,n,e){let{id:o,name:r,min:i,max:c,step:s,value:l}=n;return t.$$set=t=>{"id"in t&&e(1,o=t.id),"name"in t&&e(2,r=t.name),"min"in t&&e(3,i=t.min),"max"in t&&e(4,c=t.max),"step"in t&&e(5,s=t.step),"value"in t&&e(0,l=t.value)},[l,o,r,i,c,s,function(){l=function(t){return""===t?null:+t}(this.value),e(0,l)}]}class at extends ct{constructor(t){super(),it(this,t,ut,lt,c,{id:1,name:2,min:3,max:4,step:5,value:0})}}const ft=["😄","😃","😀","😊","☺","😉","😍","😘","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱","😠","😡","😤","😖","😆","😋","😷","😎","😴","😵","😲","😟","😦","😧","😈","👿","😮","😬","😐","😕","😯","😶","😇","😏","😑","👲","👳","👮","👷","💂","👶","👦","👧","👨","👩","👴","👵","👱","👼","👸","😺","😸","😻","😽","😼","🙀","😿","😹","😾","👹","👺","🙈","🙉","🙊","💀","👽","💩","🔥","✨","🌟","💫","💥","💢","💦","💧","💤","💨","👂","👀","👃","👅","👄","👍","👎","👌","👊","✊","✌","👋","✋","👐","👆","👇","👉","👈","🙌","🙏","☝","👏","💪","🚶","🏃","💃","👫","👪","👬","👭","💏","💑","👯","🙆","🙅","💁","🙋","💆","💇","💅","👰","🙎","🙍","🙇","🎩","👑","👒","👟","👞","👡","👠","👢","👕","👔","👚","👗","🎽","👖","👘","👙","💼","👜","👝","👛","👓","🎀","🌂","💄","💛","💙","💜","💚","❤","💔","💗","💓","💕","💖","💞","💘","💌","💋","💍","💎","👤","👥","💬","👣","💭","🐶","🐺","🐱","🐭","🐹","🐰","🐸","🐯","🐨","🐻","🐷","🐽","🐮","🐗","🐵","🐒","🐴","🐑","🐘","🐼","🐧","🐦","🐤","🐥","🐣","🐔","🐍","🐢","🐛","🐝","🐜","🐞","🐌","🐙","🐚","🐠","🐟","🐬","🐳","🐋","🐄","🐏","🐀","🐃","🐅","🐇","🐉","🐎","🐐","🐓","🐕","🐖","🐁","🐂","🐲","🐡","🐊","🐫","🐪","🐆","🐈","🐩","🐾","💐","🌸","🌷","🍀","🌹","🌻","🌺","🍁","🍃","🍂","🌿","🌾","🍄","🌵","🌴","🌲","🌳","🌰","🌱","🌼","🌐","🌞","🌝","🌚","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌜","🌛","🌙","🌍","🌎","🌏","🌋","🌌","🌠","⭐","☀","⛅","☁","⚡","☔","❄","⛄","🌀","🌁","🌈","🌊","🎍","💝","🎎","🎒","🎓","🎏","🎆","🎇","🎐","🎑","🎃","👻","🎅","🎄","🎁","🎋","🎉","🎊","🎈","🎌","🔮","🎥","📷","📹","📼","💿","📀","💽","💾","💻","📱","☎","📞","📟","📠","📡","📺","📻","🔊","🔉","🔈","🔇","🔔","🔕","📢","📣","⏳","⌛","⏰","⌚","🔓","🔒","🔏","🔐","🔑","🔎","💡","🔦","🔆","🔅","🔌","🔋","🔍","🛁","🛀","🚿","🚽","🔧","🔩","🔨","🚪","🚬","💣","🔫","🔪","💊","💉","💰","💴","💵","💷","💶","💳","💸","📲","📧","📥","📤","✉","📩","📨","📯","📫","📪","📬","📭","📮","📦","📝","📄","📃","📑","📊","📈","📉","📜","📋","📅","📆","📇","📁","📂","✂","📌","📎","✒","✏","📏","📐","📕","📗","📘","📙","📓","📔","📒","📚","📖","🔖","📛","🔬","🔭","📰","🎨","🎬","🎤","🎧","🎼","🎵","🎶","🎹","🎻","🎺","🎷","🎸","👾","🎮","🃏","🎴","🀄","🎲","🎯","🏈","🏀","⚽","⚾","🎾","🎱","🏉","🎳","⛳","🚵","🚴","🏁","🏇","🏆","🎿","🏂","🏊","🏄","🎣","☕","🍵","🍶","🍼","🍺","🍻","🍸","🍹","🍷","🍴","🍕","🍔","🍟","🍗","🍖","🍝","🍛","🍤","🍱","🍣","🍥","🍙","🍘","🍚","🍜","🍲","🍢","🍡","🍳","🍞","🍩","🍮","🍦","🍨","🍧","🎂","🍰","🍪","🍫","🍬","🍭","🍯","🍎","🍏","🍊","🍋","🍒","🍇","🍉","🍓","🍑","🍈","🍌","🍐","🍍","🍠","🍆","🍅","🌽","🏠","🏡","🏫","🏢","🏣","🏥","🏦","🏪","🏩","🏨","💒","⛪","🏬","🏤","🌇","🌆","🏯","🏰","⛺","🏭","🗼","🗾","🗻","🌄","🌅","🌃","🗽","🌉","🎠","🎡","⛲","🎢","🚢","⛵","🚤","🚣","⚓","🚀","✈","💺","🚁","🚂","🚊","🚉","🚞","🚆","🚄","🚅","🚈","🚇","🚝","🚋","🚃","🚎","🚌","🚍","🚙","🚘","🚗","🚕","🚖","🚛","🚚","🚨","🚓","🚔","🚒","🚑","🚐","🚲","🚡","🚟","🚠","🚜","💈","🚏","🎫","🚦","🚥","⚠","🚧","🔰","⛽","🏮","🎰","♨","🗿","🎪","🎭","📍","🚩","⬆","⬇","⬅","➡","🔠","🔡","🔤","↗","↖","↘","↙","↔","↕","🔄","◀","▶","🔼","🔽","↩","↪","ℹ","⏪","⏩","⏫","⏬","⤵","⤴","🆗","🔀","🔁","🔂","🆕","🆙","🆒","🆓","🆖","📶","🎦","🈁","🈯","🈳","🈵","🈴","🈲","🉐","🈹","🈺","🈶","🈚","🚻","🚹","🚺","🚼","🚾","🚰","🚮","🅿","♿","🚭","🈷","🈸","🈂","Ⓜ","🛂","🛄","🛅","🛃","🉑","㊙","㊗","🆑","🆘","🆔","🚫","🔞","📵","🚯","🚱","🚳","🚷","🚸","⛔","✳","❇","❎","✅","✴","💟","🆚","📳","📴","🅰","🅱","🆎","🅾","💠","➿","♻","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","⛎","🔯","🏧","💹","💲","💱","©","®","™","〽","〰","🔝","🔚","🔙","🔛","🔜","❌","⭕","❗","❓","❕","❔","🔃","🕛","🕧","🕐","🕜","🕑","🕝","🕒","🕞","🕓","🕟","🕔","🕠","🕕","🕖","🕗","🕘","🕙","🕚","🕡","🕢","🕣","🕤","🕥","🕦","✖","➕","➖","➗","♠","♥","♣","♦","💮","💯","✔","☑","🔘","🔗","➰","🔱","🔲","🔳","◼","◻","◾","◽","▪","▫","🔺","⬜","⬛","⚫","⚪","🔴","🔵","🔻","🔶","🔷","🔸","🔹"];function dt(t,n,e){const o=t.slice();return o[7]=n[e],o[9]=e,o}function mt(t){let n;return{c(){n=y("strong"),n.innerHTML="Layoutworklet not available. To enable, turn on the following:\n      <code>“Experimental Web Platform features” on chrome://flags.</code>"},m(t,e){h(t,n,e)},d(t){t&&g(n)}}}function pt(t){let n,e,o=Array(t[1]),r=[];for(let n=0;n<o.length;n+=1)r[n]=$t(dt(t,o,n));const i=t=>Y(r[t],1,1,(()=>{r[t]=null}));return{c(){n=y("section");for(let t=0;t<r.length;t+=1)r[t].c();w(n,"id","container"),w(n,"class","container svelte-1520i8e"),k(n,"--a",t[2]),k(n,"--rad",t[3])},m(t,o){h(t,n,o);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(n,null);e=!0},p(t,c){if(2&c){let e;for(o=Array(t[1]),e=0;e<o.length;e+=1){const i=dt(t,o,e);r[e]?(r[e].p(i,c),X(r[e],1)):(r[e]=$t(i),r[e].c(),X(r[e],1),r[e].m(n,null))}for(U(),e=o.length;e<r.length;e+=1)i(e);V()}(!e||4&c)&&k(n,"--a",t[2]),(!e||8&c)&&k(n,"--rad",t[3])},i(t){if(!e){for(let t=0;t<o.length;t+=1)X(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Y(r[t]);e=!1},d(t){t&&g(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function $t(e){let o,c,s,u;return{c(){o=y("a"),o.textContent=`${ft[Math.floor(Math.random()*ft.length)]}`,w(o,"href","/"),w(o,"class","item svelte-1520i8e"),k(o,"--col",10*e[9]+"deg"),k(o,"--index",e[9]+1)},m(t,n){h(t,o,n),u=!0},p:t,i(e){u||(T((()=>{u&&(s&&s.end(1),c=function(e,o,r){const c={direction:"in"};let s,u,a=o(e,r,c),f=!1,m=0;function p(){s&&M(e,s)}function $(){const{delay:o=0,duration:r=300,easing:i=n,tick:c=t,css:$}=a||Z;$&&(s=N(e,0,1,r,o,i,$,m++)),c(0,1);const h=l()+o,g=h+r;u&&u.abort(),f=!0,T((()=>J(e,!0,"start"))),u=d((t=>{if(f){if(t>=g)return c(1,0),J(e,!0,"end"),p(),f=!1;if(t>=h){const n=i((t-h)/r);c(n,1-n)}}return f}))}let h=!1;return{start(){h||(h=!0,M(e),i(a)?(a=a(c),G().then($)):$())},invalidate(){h=!1},end(){f&&(p(),f=!1)}}}(o,st,{duration:150}),c.start())})),u=!0)},o(e){c&&c.invalidate(),s=function(e,o,c){const s={direction:"out"};let u,a=o(e,c,s),f=!0;const m=Q;function p(){const{delay:o=0,duration:i=300,easing:c=n,tick:s=t,css:p}=a||Z;p&&(u=N(e,1,0,i,o,c,p));const $=l()+o,h=$+i;T((()=>J(e,!1,"start"))),d((t=>{if(f){if(t>=h)return s(0,1),J(e,!1,"end"),--m.r||r(m.c),!1;if(t>=$){const n=c((t-$)/i);s(1-n,n)}}return f}))}return m.r+=1,i(a)?G().then((()=>{a=a(s),p()})):p(),{end(t){t&&a.tick&&a.tick(1,0),f&&(u&&M(e,u),f=!1)}}}(o,st,{duration:150}),u=!1},d(t){t&&g(o),t&&s&&s.end()}}}function ht(t){let n,e,o,r,i,c,s,l,u,a,f,d,p,$,v;function x(n){t[4](n)}let _={id:"itemInput",name:"Items",min:"1",max:"36",step:"1"};function E(n){t[5](n)}void 0!==t[1]&&(_.value=t[1]),i=new at({props:_}),j.push((()=>tt(i,"value",x)));let k={id:"angleInput",name:"Angle",min:"0",max:"360",step:"1"};function C(n){t[6](n)}void 0!==t[2]&&(k.value=t[2]),l=new at({props:k}),j.push((()=>tt(l,"value",E)));let A={id:"radiusInput",name:"Radius Scale",min:"0.5",max:"2",step:"0.1"};void 0!==t[3]&&(A.value=t[3]),f=new at({props:A}),j.push((()=>tt(f,"value",C)));let S=!t[0]&&mt(),N=t[0]&&pt(t);return{c(){n=y("main"),e=y("h1"),e.textContent="CSS Circular",o=b(),r=y("form"),nt(i.$$.fragment),s=b(),nt(l.$$.fragment),a=b(),nt(f.$$.fragment),p=b(),S&&S.c(),$=b(),N&&N.c(),w(e,"class","svelte-1520i8e"),w(r,"class","controls svelte-1520i8e"),w(n,"class","svelte-1520i8e")},m(t,c){h(t,n,c),m(n,e),m(n,o),m(n,r),et(i,r,null),m(r,s),et(l,r,null),m(r,a),et(f,r,null),m(n,p),S&&S.m(n,null),m(n,$),N&&N.m(n,null),v=!0},p(t,[e]){const o={};!c&&2&e&&(c=!0,o.value=t[1],W((()=>c=!1))),i.$set(o);const r={};!u&&4&e&&(u=!0,r.value=t[2],W((()=>u=!1))),l.$set(r);const s={};!d&&8&e&&(d=!0,s.value=t[3],W((()=>d=!1))),f.$set(s),t[0]?S&&(S.d(1),S=null):S||(S=mt(),S.c(),S.m(n,$)),t[0]?N?(N.p(t,e),1&e&&X(N,1)):(N=pt(t),N.c(),X(N,1),N.m(n,null)):N&&(U(),Y(N,1,1,(()=>{N=null})),V())},i(t){v||(X(i.$$.fragment,t),X(l.$$.fragment,t),X(f.$$.fragment,t),X(N),v=!0)},o(t){Y(i.$$.fragment,t),Y(l.$$.fragment,t),Y(f.$$.fragment,t),Y(N),v=!1},d(t){t&&g(n),ot(i),ot(l),ot(f),S&&S.d(),N&&N.d()}}}function gt(t,n,e){let o=!1;if("layoutWorklet"in CSS){async function s(){await CSS.layoutWorklet.addModule("./build/circular.js"),e(0,o=!0)}s(),console.log("layout script installed!")}let r=36,i=0,c=1;return[o,r,i,c,function(t){r=t,e(1,r)},function(t){i=t,e(2,i)},function(t){c=t,e(3,c)}]}return new class extends ct{constructor(t){super(),it(this,t,gt,ht,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
