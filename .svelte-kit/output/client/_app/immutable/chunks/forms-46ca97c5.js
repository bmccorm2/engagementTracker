import{p as h}from"./parse-f0c618df.js";import{j as n}from"./singletons-6bdc4654.js";n.disable_scroll_handling;n.goto;n.invalidate;const g=n.invalidateAll;n.preload_data;n.preload_code;n.before_navigate;n.after_navigate;const _=n.apply_action;function A(e){const o=JSON.parse(e);return o.data&&(o.data=h(o.data)),o}function L(e,o=()=>{}){const l=async({action:r,result:a,reset:i})=>{a.type==="success"&&(i!==!1&&HTMLFormElement.prototype.reset.call(e),await g()),(location.origin+location.pathname===r.origin+r.pathname||a.type==="redirect"||a.type==="error")&&_(a)};async function s(r){var u,b,f;r.preventDefault();const a=new URL((u=r.submitter)!=null&&u.hasAttribute("formaction")?r.submitter.formAction:HTMLFormElement.prototype.cloneNode.call(e).action),i=new FormData(e),p=(b=r.submitter)==null?void 0:b.getAttribute("name");p&&i.append(p,((f=r.submitter)==null?void 0:f.getAttribute("value"))??"");const d=new AbortController;let m=!1;const y=await o({action:a,cancel:()=>m=!0,controller:d,data:i,form:e})??l;if(m)return;let c;try{const t=await fetch(a,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:i,signal:d.signal});c=A(await t.text()),c.type==="error"&&(c.status=t.status)}catch(t){if((t==null?void 0:t.name)==="AbortError")return;c={type:"error",error:t}}y({action:a,data:i,form:e,update:t=>l({action:a,result:c,reset:t==null?void 0:t.reset}),result:c})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",s),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",s)}}}export{L as e};
