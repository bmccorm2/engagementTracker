import type { Actions, PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export const load = (async ({ params }) => {
	const engagementId = params.id;
	const { data: engagement, error: engagementError } = await supabase
		.from("Engagement")
		.select(
			`
	    created_at
      ,isDone
	    ,id
	    ,Engagement_Type (
	      description
	    )
	    ,Security (
	      ticker
	      ,companyName
	      ,gicsSector
        ,countryOfRisk
	    )
	  `
		)
		.eq("id", engagementId)
		.single();

	const { data: activities, error: activityError } = await supabase
		.from("Engagement_Activity")
		.select(
			`
	    created_at
	    ,activityId
	    ,Activity (
	      type
	      ,date
	      ,subject
	      ,jhiAttendees
	    )
	  `
		)
		.eq("id", engagementId)
		.order("created_at", { ascending: false });

	const { data: objectives, error: objectiveError } = await supabase
		.from("Engagement_Objective")
		.select(
			`
	    created_at
	    ,objectiveId
	    ,Objective (
	      description
	      ,isDone
        ,id
	    )
	  `
		)
		.eq("engagementId", engagementId)
		.order("created_at", { ascending: false });

	if (!engagement || !activities || !objectives)
		throw error(
			404,
			`${engagementError?.message} - ${activityError?.message} - ${objectiveError?.message}`
		);

	return { engagement, activities, objectives, engagementId };
}) satisfies PageServerLoad;

export const actions: Actions = {
	createObjective: async ({ request, params }) => {
		const engagementId = parseInt(params.id);
		const formData = await request.formData();
		const description = String(formData.get("description"));
		const isDone = formData.get("isDone");
		const { data, error: objectiveError } = await supabase
			.from("Objective")
			.insert({
				description,
				isDone: isDone === null ? false : true,
			})
			.select("id")
			.single();

		if (objectiveError) throw error(505, objectiveError.message);

		const { id } = data;

		const { error: associateError } = await supabase.from("Engagement_Objective").insert({
			engagementId,
			objectiveId: id,
		});

		if (associateError) throw error(505, associateError.message);
	},
	completeObjective: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get("id");
		const isDone = Boolean(formData.get("isDone"));

		const { error: sError } = await supabase
			.from("Objective")
			.update({
				isDone: isDone,
			})
			.eq("id", id);

		if (sError) throw error(505, sError.message);
	},
};
