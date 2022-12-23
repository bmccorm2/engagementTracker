import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-ij8gtn{height:32px;width:32px}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"row navbar navbar-expand bg-dark px-2"}"><div class="${"col-1"}"><a class="${"navbar-brand"}" href="${"/"}"><img src="${"/svelte.png"}" alt="${"svelte"}" class="${"svelte-ij8gtn"}"></a></div>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"container"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
