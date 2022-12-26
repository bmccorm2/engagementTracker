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
	      engagementType
	      ,date
	      ,subject
	      ,jhiAttendees
				,companyAttendees
	    )
	  `
		)
		.eq("engagementId", engagementId)
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
		let description = formData.get("description");
		if (description === "") description = null;
		const { data, error: objectiveError } = await supabase
			.from("Objective")
			.insert({
				description,
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
	createActivity: async ({ request, params }) => {
		const engagementId = params.id;
		const formData = await request.formData();
		const engagementType = formData.get("engagementType");
		const date = formData.get("date");
		const subject = formData.get("subject");
		const companyAttendees = formData.get("companyAttendees");
		const jhiAttendees = formData.get("jhiAttendees");
		const { data, error: error1 } = await supabase
			.from("Activity")
			.insert({
				engagementType,
				date,
				subject,
				companyAttendees,
				jhiAttendees,
			})
			.select("id")
			.single();

		if (error1) throw error(505, error1.message);
		const { id: activityId } = data;

		const { error: error2 } = await supabase.from("Engagement_Activity").insert({
			engagementId,
			activityId,
		});

		if (error2) throw error(505, error2.message);
	},
	completeObjective: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get("id");
		const isDone = formData.get("isDone") === "true";
		const isDoneDate = isDone ? null : new Date().toISOString();

		const { error: sError } = await supabase
			.from("Objective")
			.update({
				isDone: !isDone,
				isDoneDate,
			})
			.eq("id", id);

		if (sError) throw error(505, sError.message);
	},
	completeEngagement: async ({ request, params }) => {
		const { id } = params;
		const formData = await request.formData();
		const isDone = formData.get("isDone") === "true";
		const isDoneDate = isDone ? null : new Date().toISOString();

		const { error: error1 } = await supabase
			.from("Engagement")
			.update({
				isDone: !isDone,
				isDoneDate,
			})
			.eq("id", id);

		if (error1) throw error(505, error1.message);
	},
};
