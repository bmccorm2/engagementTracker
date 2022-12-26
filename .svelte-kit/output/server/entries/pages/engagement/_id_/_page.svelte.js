import { c as create_ssr_component, f as add_attribute, h as each, v as validate_component, e as escape } from "../../../../chunks/index.js";
import "../../../../chunks/uneval.js";
const AddActivity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"row"}"><div class="${"col input-group"}"><span class="${"input-group-text text-danger"}">Engagement Type</span>
		<select class="${"form-select"}" name="${"engagementType"}"><option${add_attribute("value", void 0, 0)} hidden selected></option><option value="${"Meeting"}">Meeting</option><option value="${"Call"}">Call</option><option value="${"Email"}">Email</option></select></div>
	<div class="${"col input-group"}"><span class="${"text-danger input-group-text"}">Date</span>
		<input type="${"date"}" class="${"form-control"}" name="${"date"}"></div></div>
<div class="${"row mt-3"}"><div class="${"col"}"><div class="${"input-group"}"><span class="${"input-group-text w-25"}" id="${"basic-addon1"}">Subject</span>
			<input type="${"text"}" class="${"form-control"}" name="${"subject"}"></div></div></div>
<div class="${"row mt-3"}"><div class="${"col"}"><div class="${"input-group"}"><span class="${"input-group-text w-25"}" id="${"basic-addon1"}">Company Attendees</span>
			<input type="${"text"}" class="${"form-control"}" name="${"companyAttendees"}"></div></div></div>
<div class="${"row mt-1"}"><div class="${"col"}"><div class="${"input-group"}"><span class="${"input-group-text w-25"}" id="${"basic-addon1"}">JHI Attendees</span>
			<input type="${"text"}" class="${"form-control"}" name="${"jhiAttendees"}"></div></div></div>`;
});
const Activities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activities = [] } = $$props;
  let addModal;
  if ($$props.activities === void 0 && $$bindings.activities && activities !== void 0)
    $$bindings.activities(activities);
  return `<div class="${"card border-primary"}"><div class="${"card-header text-center bg-primary bg-gradient fs-4"}">Activities</div>
	<div class="${"card-body"}"><div class="${"row mb-3"}"><div class="${"col-10"}">${activities.length === 0 ? `<div class="${"d-flex text-danger"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-exclamation-circle"}" viewBox="${"0 0 16 16"}"><path d="${"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}"></path><path d="${"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"}"></path></svg>
						   
						<p>No Activities defined.</p></div>` : `<ul>${each(activities, (activity) => {
    return `<li>${escape(activity.engagementType)}
							</li>`;
  })}</ul>`}</div>
			<div class="${"col"}"><button class="${"btn btn-primary col-12"}" data-bs-toggle="${"modal"}" data-bs-target="${"#addActivity"}">Add activity</button></div></div></div></div>


<form action="${"?/createActivity"}" method="${"post"}"><div class="${"modal fade"}" id="${"addActivity"}" tabindex="${"-1"}"${add_attribute("this", addModal, 0)}><div class="${"modal-dialog modal-lg"}"><div class="${"modal-content"}"><div class="${"modal-header"}"><h4 class="${"modal-title"}" id="${"exampleModalLabel"}">New Activity</h4>
					<button type="${"button"}" class="${"btn-close"}" data-bs-dismiss="${"modal"}" aria-label="${"Close"}"></button></div>
				<div class="${"modal-body"}">${validate_component(AddActivity, "AddActivity").$$render($$result, {}, {}, {})}</div>
				<div class="${"modal-footer"}"><button type="${"reset"}" class="${"btn btn-danger col-4"}" data-bs-dismiss="${"modal"}">Cancel</button>
					<button type="${"submit"}" data-bs-dismiss="${"modal"}" class="${"btn btn-primary col-4"}">Save</button></div></div></div></div></form>`;
});
const Objectives_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".isDone.svelte-68je76{text-decoration:line-through;opacity:0.4}li.svelte-68je76{list-style-type:none}.hidden-button.svelte-68je76{border:0px;background-color:transparent}.v-divide.svelte-68je76{border-right:2px solid grey}",
  map: null
};
const Objectives = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { objectives = [] } = $$props;
  if ($$props.objectives === void 0 && $$bindings.objectives && objectives !== void 0)
    $$bindings.objectives(objectives);
  $$result.css.add(css$2);
  return `<div class="${"card border-primary"}"><div class="${"card-header text-center bg-primary bg-gradient fs-4"}">Objectives</div>
	<div class="${"card-body"}"><div class="${"row mb-3"}"><div class="${"col v-divide svelte-68je76"}">${objectives.length === 0 ? `<div class="${"d-flex text-danger"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-exclamation-circle"}" viewBox="${"0 0 16 16"}"><path d="${"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}"></path><path d="${"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"}"></path></svg>
						   
						<p>No objectives defined.</p></div>` : `<ul>${each(objectives, (objective) => {
    let isDone = objective.Objective.isDone;
    return `
							<li class="${"svelte-68je76"}"><form action="${"?/completeObjective"}" method="${"post"}">${isDone ? `<button class="${"hidden-button text-success svelte-68je76"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-check-square"}" viewBox="${"0 0 16 16"}"><path d="${"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}"></path><path d="${"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"}"></path></svg>
										</button>` : `<button class="${"hidden-button svelte-68je76"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-app"}" viewBox="${"0 0 16 16"}"><path d="${"M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"}"></path></svg>
										</button>`}
									<input type="${"hidden"}"${add_attribute("value", objective.Objective.id, 0)} name="${"id"}">
									<input type="${"hidden"}"${add_attribute("value", isDone, 0)} name="${"isDone"}">
									<button class="${["hidden-button svelte-68je76", isDone ? "isDone" : ""].join(" ").trim()}">${escape(objective.Objective.description)}
									</button></form>
							</li>`;
  })}</ul>`}</div>
			<div class="${"col-4"}"><form action="${"?/createObjective"}" method="${"post"}"><div class="${"row"}"><div class="${"col"}"><input type="${"text"}" name="${"description"}" placeholder="${"Add New Objective"}" class="${"form-control"}" required></div></div>
					<div class="${"row mt-2"}"><div class="${"col text-center"}"><button class="${"btn btn-primary col-6"}">Add</button></div></div></form></div></div></div>
</div>`;
});
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
  return `<div class="${"card border-primary"}"><div class="${"card-header text-center bg-primary bg-gradient fs-4"}">Company Details</div>
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
  code: "li.svelte-1de8c32{list-style-type:none}.v-divide.svelte-1de8c32{border-right:2px solid grey}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"row mt-2"}"><div class="${"col"}"><h1 class="${"text-center"}"><u>${escape(data.engagement.Security.companyName)}</u></h1></div></div>
<hr>
<div class="${"row mt-4"}"><div class="${"col-5 v-divide svelte-1de8c32"}">${validate_component(Security, "Security").$$render($$result, Object.assign(data.engagement.Security), {}, {})}</div>
	<div class="${"col-5 v-divide svelte-1de8c32"}"><h4>Status: ${escape(data.engagement.isDone ? "Done" : "In Progress")}</h4>
		<h4>Engagement Type: ${escape(data.engagement.Engagement_Type.description)}</h4>
		<button class="${"btn btn-warning col-12 mt-5"}">Mark Complete</button></div>
	<div class="${"col-2 text-end"}"><ul><li class="${"svelte-1de8c32"}"><a href="${"/engagement/timeline/" + escape(data.engagementId, true)}">View Timeline</a></li></ul></div></div>
<hr>
<div class="${"row mt-2"}"><div class="${"col"}">${validate_component(Objectives, "Objectives").$$render($$result, { objectives: data.objectives }, {}, {})}</div></div>
<hr>
<div class="${"row mt-2"}"><div class="${"col"}">${validate_component(Activities, "Activities").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
