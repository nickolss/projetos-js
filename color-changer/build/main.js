(()=>{var e={15:()=>{function e(){const e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],t=[];for(let r=0;r<6;r++){const r=Math.floor(Math.random()*e.length);t.push(e[r])}return`#${t}`.replace(/,/g,"")}const t=document.querySelector("#colorName");document.querySelector("[btn-change]").addEventListener("click",(()=>{document.body.style.backgroundColor=e(),t.textContent=`Background Color: ${e()}`}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(15)})()})();