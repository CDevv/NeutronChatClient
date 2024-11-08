(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();let H=F;const y=1,m=2,I={owned:null,cleanups:null,context:null,owner:null};var u=null;let N=null,V=null,h=null,a=null,g=null,E=0;function q(e,t){const n=h,i=u,l=e.length===0,s=t===void 0?i:t,r=l?I:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=l?e:()=>e(()=>O(()=>x(r)));u=r,h=null;try{return v(o,!0)}finally{h=n,u=i}}function b(e,t,n){const i=Q(e,t,!1,y);M(i)}function O(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function J(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&v(()=>{for(let l=0;l<e.observers.length;l+=1){const s=e.observers[l],r=N&&N.running;r&&N.disposed.has(s),(r?!s.tState:!s.state)&&(s.pure?a.push(s):g.push(s),s.observers&&R(s)),r||(s.state=y)}if(a.length>1e6)throw a=[],new Error},!1)),t}function M(e){if(!e.fn)return;x(e);const t=E;K(e,e.value,t)}function K(e,t,n){let i;const l=u,s=h;h=u=e;try{i=e.fn(t)}catch(r){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(x),e.owned=null),e.updatedAt=n+1,j(r)}finally{h=s,u=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?J(e,i):e.value=i,e.updatedAt=n)}function Q(e,t,n,i=y,l){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:u?u.context:null,pure:n};return u===null||u!==I&&(u.owned?u.owned.push(s):u.owned=[s]),s}function D(e){if(e.state===0)return;if(e.state===m)return T(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<E);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===y)M(e);else if(e.state===m){const i=a;a=null,v(()=>T(e,t[0]),!1),a=i}}function v(e,t){if(a)return e();let n=!1;t||(a=[]),g?n=!0:g=[],E++;try{const i=e();return W(n),i}catch(i){n||(g=null),a=null,j(i)}}function W(e){if(a&&(F(a),a=null),e)return;const t=g;g=null,t.length&&v(()=>H(t),!1)}function F(e){for(let t=0;t<e.length;t++)D(e[t])}function T(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const l=i.state;l===y?i!==t&&(!i.updatedAt||i.updatedAt<E)&&D(i):l===m&&T(i,t)}}}function R(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=m,n.pure?a.push(n):g.push(n),n.observers&&R(n))}}function x(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const s=l.pop(),r=n.observerSlots.pop();i<l.length&&(s.sourceSlots[r]=i,l[i]=s,n.observerSlots[i]=r)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)x(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)x(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function X(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function j(e,t=u){throw X(e)}function C(e,t){return O(()=>e(t||{}))}function Y(e,t,n){let i=n.length,l=t.length,s=i,r=0,o=0,f=t[l-1].nextSibling,p=null;for(;r<l||o<s;){if(t[r]===n[o]){r++,o++;continue}for(;t[l-1]===n[s-1];)l--,s--;if(l===r){const c=s<i?o?n[o-1].nextSibling:n[s-o]:f;for(;o<s;)e.insertBefore(n[o++],c)}else if(s===o)for(;r<l;)(!p||!p.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[s-1]&&n[o]===t[l-1]){const c=t[--l].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--s],c),t[l]=n[s]}else{if(!p){p=new Map;let d=o;for(;d<s;)p.set(n[d],d++)}const c=p.get(t[r]);if(c!=null)if(o<c&&c<s){let d=r,$=1,L;for(;++d<l&&d<s&&!((L=p.get(t[d]))==null||L!==c+$);)$++;if($>c-o){const G=t[r];for(;o<c;)e.insertBefore(n[o++],G)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}function Z(e,t,n,i={}){let l;return q(s=>{l=s,t===document?e():A(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{l(),t.textContent=""}}function B(e,t,n){let i;const l=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},s=()=>(i||(i=l())).cloneNode(!0);return s.cloneNode=s,s}function z(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function A(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return S(e,t,i,n);b(l=>S(e,t(),l,n),i)}function S(e,t,n,i,l){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(r){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=w(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=w(e,n,i);else{if(s==="function")return b(()=>{let o=t();for(;typeof o=="function";)o=o();n=S(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(_(o,t,n,l))return b(()=>n=S(e,o,n,i,!0)),()=>n;if(o.length===0){if(n=w(e,n,i),r)return n}else f?n.length===0?P(e,o,i):Y(e,n,o):(n&&w(e),P(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(r)return n=w(e,n,i,t);w(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function _(e,t,n,i){let l=!1;for(let s=0,r=t.length;s<r;s++){let o=t[s],f=n&&n[e.length],p;if(!(o==null||o===!0||o===!1))if((p=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))l=_(e,o,f)||l;else if(p==="function")if(i){for(;typeof o=="function";)o=o();l=_(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||l}else e.push(o),l=!0;else{const c=String(o);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return l}function P(e,t,n=null){for(let i=0,l=t.length;i<l;i++)e.insertBefore(t[i],n)}function w(e,t,n,i){if(n===void 0)return e.textContent="";const l=i||document.createTextNode("");if(t.length){let s=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(l!==o){const f=o.parentNode===e;!s&&!r?f?e.replaceChild(l,o):e.insertBefore(l,n):f&&o.remove()}else s=!0}}else e.insertBefore(l,n);return[l]}var k=B('<a><button class="bg-slate-700 rounded-lg p-4 text-lg">');function U(e){return(()=>{var t=k(),n=t.firstChild;return A(n,()=>e.text),b(()=>z(t,"href",e.href)),t})()}var ee=B('<div class="bg-slate-900 size-full"><h1 class=text-gray-50><br><p class="text-3xl font-bold">Chat Server and Client</p><br><span class="flex flex-row gap-5 justify-center">');function te(){return(()=>{var e=ee(),t=e.firstChild,n=t.firstChild,i=n.nextSibling,l=i.nextSibling,s=l.nextSibling;return A(s,C(U,{href:"#",text:"Join"}),null),A(s,C(U,{href:"#",text:"Host"}),null),e})()}var ne=B('<div class="m-0 w-screen h-screen min-h-full min-w-full top-0 left-0 fixed">');function le(){return(()=>{var e=ne();return A(e,C(te,{})),e})()}const se=document.getElementById("root");Z(()=>C(le,{}),se);
