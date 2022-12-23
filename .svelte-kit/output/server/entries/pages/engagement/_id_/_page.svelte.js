import { c as create_ssr_component, f as add_attribute, e as escape, v as validate_component, h as each } from "../../../../chunks/index.js";
import "../../../../chunks/uneval.js";
const Security_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".read-only.svelte-14owdwz{background-color:lightgray}.sec-details-width.svelte-14owdwz{width:140px}",
  map: null
};
const Security = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ticker } = $$props;
  let { companyName } = $$props;
  let { gicsSector } = $$props;
  let { countryOfRisk } = $$props;
  if ($$props.ticker === void 0 && $$bindings.ticker && ticker !== void 0)
    $$bindings.ticker(ticker);
  if ($$props.companyName === void 0 && $$bindings.companyName && companyName !== void 0)
    $$bindings.companyName(companyName);
  if ($$props.gicsSector === void 0 && $$bindings.gicsSector && gicsSector !== void 0)
    $$bindings.gicsSector(gicsSector);
  if ($$props.countryOfRisk === void 0 && $$bindings.countryOfRisk && countryOfRisk !== void 0)
    $$bindings.countryOfRisk(countryOfRisk);
  $$result.css.add(css$1);
  return `<div class="${"card border-success"}"><div class="${"card-header text-center bg-success bg-gradient fs-4"}">Company Details</div>
	<div class="${"card-body"}"><div class="${"row mb-3"}"><div class="${"col d-grid"}"><div class="${"input-group"}"><span class="${"input-group-text sec-details-width svelte-14owdwz"}">Ticker</span>
					<input type="${"text"}" class="${"form-control read-only svelte-14owdwz"}" readonly${add_attribute("value", ticker, 0)}></div></div></div>
		<div class="${"row"}"><div class="${"col"}"><div class="${"input-group"}"><div class="${"input-group-prepend"}"><span class="${"input-group-text sec-details-width svelte-14owdwz"}">Company</span></div>
					<input type="${"text"}" class="${"form-control read-only svelte-14owdwz"}" readonly${add_attribute("value", companyName, 0)}></div></div></div>
		<div class="${"row mt-1"}"><div class="${"col"}"><div class="${"input-group"}"><div class="${"input-group-prepend"}"><span class="${"input-group-text sec-details-width svelte-14owdwz"}" id="${"basic-addon3"}">GICS Sector</span></div>
					<input type="${"text"}" class="${"form-control read-only svelte-14owdwz"}" readonly${add_attribute("value", gicsSector, 0)}></div></div></div>
		<div class="${"row mt-1"}"><div class="${"col"}"><div class="${"input-group"}"><div class="${"input-group-prepend"}"><span class="${"input-group-text sec-details-width svelte-14owdwz"}" id="${"basic-addon3"}">Country Of Risk</span></div>
					<input type="${"text"}" class="${"form-control read-only svelte-14owdwz"}" readonly${add_attribute("value", countryOfRisk, 0)}></div></div></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".objective-done.svelte-1vcw1d8{text-decoration:line-through}li.svelte-1vcw1d8{list-style-type:none}.hidden-button.svelte-1vcw1d8{border:0px;background-color:transparent}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let objectiveModal;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"row mt-2"}"><div class="${"col"}"><h1 class="${"text-center"}"><u>${escape(data.engagement.Security.companyName)}</u></h1></div></div>
<div class="${"row mt-4"}"><div class="${"col-4"}">${validate_component(Security, "Security").$$render($$result, Object.assign(data.engagement.Security), {}, {})}</div>
	<div class="${"col-6"}"><h4>Status: ${escape(data.engagement.isDone ? "Done" : "In Progress")}</h4>
		<h4>Engagement Type: ${escape(data.engagement.Engagement_Type.description)}</h4></div>
	<div class="${"col-2"}"><ul><li class="${"svelte-1vcw1d8"}"><a href="${"/engagement/timeline/" + escape(data.engagementId, true)}">View Timeline</a></li>
			<li class="${"svelte-1vcw1d8"}"><button data-bs-toggle="${"modal"}" data-bs-target="${"#addObjective"}" class="${"btn btn-link"}">Add Objective</button></li>
			<li class="${"svelte-1vcw1d8"}"><a href="${"/engagement/timeline/" + escape(data.engagementId, true)}">Add Activity</a></li></ul></div></div>
<div class="${"row mt-2"}"><div class="${"col"}"><div class="${"card border-primary"}"><div class="${"card-header text-center bg-primary bg-gradient fs-4"}">Objectives</div>
			<div class="${"card-body"}"><div class="${"row mb-3"}"><div class="${"col"}">${data.objectives.length === 0 ? `<p>No objectives defined.  
								<button data-bs-toggle="${"modal"}" data-bs-target="${"#addObjective"}" class="${"btn btn-link"}">Add one here.</button></p>` : `<ul>${each(data.objectives, (objective) => {
    return `<li class="${["svelte-1vcw1d8", objective.Objective.isDone ? "objective-done" : ""].join(" ").trim()}"><form action="${"?/completeObjective"}" method="${"post"}"><button class="${"hidden-button svelte-1vcw1d8"}"><input type="${"hidden"}"${add_attribute("value", objective.Objective.id, 0)} name="${"id"}">
												<input type="${"checkbox"}"${add_attribute("id", objective.objectiveId.id, 0)} ${objective.Objective.isDone ? "checked" : ""} name="${"isDone"}"></button>
											 
											<label${add_attribute("for", objective.objectiveId.id, 0)}>${escape(objective.Objective.description)}
											</label></form>
									</li>`;
  })}</ul>`}</div></div></div></div></div></div>
<div class="${"row mt-2"}"><div class="${"col"}"><div class="${"card border-primary"}"><div class="${"card-header text-center bg-primary bg-gradient fs-4"}">Activities</div>
			<div class="${"card-body"}"><div class="${"row mb-3"}"><div class="${"col"}">${data.activities.length === 0 ? `<p>No activities defined. You can add one.</p>` : `<ul>${each(data.activities, (activity) => {
    return `<li class="${"svelte-1vcw1d8"}">${escape(activity.type)}
									</li>`;
  })}</ul>`}</div></div></div></div></div></div>


<form action="${"?/createObjective"}" method="${"post"}"><div class="${"modal fade"}" id="${"addObjective"}" tabindex="${"-1"}" aria-labelledby="${"exampleModalLabel"}" aria-hidden="${"true"}"${add_attribute("this", objectiveModal, 0)}><div class="${"modal-dialog"}"><div class="${"modal-content"}"><div class="${"modal-header"}"><h5 class="${"modal-title"}" id="${"exampleModalLabel"}">Add Objective</h5>
					<button type="${"button"}" class="${"btn-close"}" data-bs-dismiss="${"modal"}" aria-label="${"Close"}"></button></div>
				<div class="${"modal-body"}"><div class="${"input-group mb-3"}"><span class="${"input-group-text"}" id="${"basic-addon1"}">Description</span>
						<input type="${"text"}" class="${"form-control"}" name="${"description"}"></div>
					<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"isDoneCheck"}" name="${"isDone"}">
						<label class="${"form-check-label"}" for="${"isDoneCheck"}">Completed </label></div></div>
				<div class="${"modal-footer"}"><button type="${"button"}" class="${"btn btn-secondary"}" data-bs-dismiss="${"modal"}">Cancel</button>
					<button type="${"submit"}" class="${"btn btn-primary"}" data-bs-dismiss="${"modal"}">Save</button></div></div></div></div>
</form>`;
});
export {
  Page as default
};
