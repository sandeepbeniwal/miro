!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.emailsEditor=t():e.emailsEditor=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));const r={onChange:()=>{}},i=/ *, *| +/,o=/(\d+)\b/,a=/\S+@\S+\.\S+/,s=a.test.bind(a),u=e=>e.split(i),l=(e,t,n,r)=>{const i=document.createElement(t);return n&&(i.className=n),r&&r(i),e&&e.appendChild(i),i};function p(e){const{container:t=document.body,emails:n,onChange:i}={...r,...e};let a,p,d=!1;return this.renderAll=(e=[])=>{a=new Map;const n=p;p=this.createWrap(),u(e.join(" ")).forEach(e=>{e&&!a.get(e)&&a.set(e,this.createChip(p,e))}),p.appendChild(this.inputWrap),d?t.replaceChild(p,n):(t.appendChild(p),d=!0)},this.createWrap=()=>l("","span","emails-editor",e=>{l(e,"span","emails-editor__background",e=>{e.onmousedown=e=>{e.preventDefault(),this.inputElem.focus()}})}),this.createChip=(e,t)=>{const n=s(t),r=l(e,"span","emails-editor__chip"+(n?"":" emails-editor__chip--invalid"),e=>{e.textContent=t,l(e,"i","",e=>{e.addEventListener("click",this.onClickDelete),e.dataset.email=t})});return r.isValid=n,r},this.createInput=()=>{this.inputWrap=l("","span","emails-editor__input-wrap");const e=l(this.inputWrap,"i"),t=l(this.inputWrap,"input"),n=n=>t.value=e.textContent=n,r=e=>{e&&"add more people…"!==e&&(this.append(e),n(""))};n("add more people…"),t.onfocus=()=>n(""),t.onpaste=()=>setTimeout(()=>r(t.value),5),t.onblur=({target:e})=>{r(e.value),n("add more people…")},t.onkeydown=t=>{const{key:n,target:i}=t;"Enter"===n||","===n?(t.preventDefault(),r(i.value)):e.innerText=i.value},this.inputElem=t},this.getEmails=()=>{if(d)return Array.from(a.keys())},this.getCount=()=>{if(d)return Array.from(a.keys()).reduce((e,t)=>s(t)?e+1:e,0)},this.append=e=>{if(!d)return;if(!e)return;const t=u(e);if(!t[0])return;const n=document.createDocumentFragment();t.forEach(e=>{e&&!a.get(e)&&a.set(e,this.createChip(n,e))}),p.insertBefore(n,this.inputWrap),i(this.getEmails())},this.appendRandom=()=>{if(!d)return;const e=(e=>{let t,n,r=0;if(e.forEach(e=>{if(!s(e))return;const[i,a]=e.split("@"),[u,l]=i.split(o),p=Number(l||1);p>r&&(r=p,t=u,n=a)}),!t)return"blank@blank.ru";return`${`${t}${r+1}`}@${n}`})(this.getEmails()),t=document.createDocumentFragment(),n=this.createChip(t,e);a.set(e,n),p.insertBefore(n,this.inputWrap),i(this.getEmails())},this.deleteEmail=e=>{if(!d)return;const t=a.get(e);t&&(p.removeChild(t),a.delete(e),i(this.getEmails()))},this.onClickDelete=({target:e})=>this.deleteEmail(e.dataset.email),this.destroy=()=>{d&&(a=void 0,t.removeChild(p),d=!1)},this.createInput(),this.renderAll(n),this}function d(e){const t=new p(e);return Object.defineProperty(this,"emails",{get:t.getEmails,set:t.renderAll}),this.getCount=t.getCount,this.append=t.append,this.appendRandom=t.appendRandom,this.deleteEmail=t.deleteEmail,this.destroy=t.destroy,this}}])}));