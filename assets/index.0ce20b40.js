(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=new Date;let u=i.getFullYear(),a=i.getMonth()+1,d=i.getDate();const f=document.getElementById("date-stamp"),m=document.getElementById("current-week");f.innerHTML=u+"-"+a+"-"+String(d).padStart(2,"0");async function p(){return fetch("http://worldtimeapi.org/api/ip/").then(r=>r.json()).then(r=>r).catch(r=>(console.error("Error fetching timezone",r),null))}const c=await p();m.innerHTML="| week: "+c.week_number;console.log(c);
