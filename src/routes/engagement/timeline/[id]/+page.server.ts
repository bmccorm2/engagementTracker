import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabase";
import { error } from "@sveltejs/kit";

const removeTime = (dateString: string) => {
	if (dateString) return dateString.split("T")[0];
	return null;
};

export const load = (async ({ params }) => {
	const { id } = params;
	const { data: engagement, error: e1 } = await supabase
		.from("Engagement")
		.select("created_at, isDone, isDoneDate, esgSummary")
		.eq("id", id)
		.single();

	if (e1) throw error(505, e1.message);

	const { data: activities, error: e2 } = await supabase
		.from("Engagement_Activity")
		.select(
			`
	    activityId
	    ,Activity (
	      engagementType
	      ,date
	      ,subject
	    )
	  `
		)
		.eq("engagementId", id);

	if (e2) throw error(505, e2.message);

	const { data: objectives, error: e3 } = await supabase
		.from("Engagement_Objective")
		.select(
			`
        engagementId
        ,Objective (
          isDone
          ,isDoneDate
          ,description
        )
    `
		)
		.eq("engagementId", id)
		.eq("Objective.isDone", true);

	if (e3) throw error(505, e3.message);

	let events = [];

	//Add engagement start
	events.push({
		name: "Engagement Start",
		value: removeTime(engagement.created_at),
		summary: engagement.esgSummary,
	});

	//Add engagement End
	if (engagement.isDone) {
		events.push({
			name: "Engagement Complete",
			value: removeTime(engagement.isDoneDate),
			summary: "",
		});
	}

	//Add activities
	if (activities) {
		activities.forEach((e) => {
			events.push({
				name: "Activity",
				value: e.Activity.date,
				summary: e.Activity.subject,
			});
		});
	}

	//Add objectives
	if (objectives) {
		objectives.forEach((e) => {
			if (e.Objective) {
				events.push({
					name: "Objective",
					value: removeTime(e.Objective.isDoneDate),
					summary: e.Objective.description,
				});
			}
		});
	}

	events.sort((d1, d2) => new Date(d1.value) - new Date(d2.value));

	return { events };
}) satisfies PageServerLoad;
