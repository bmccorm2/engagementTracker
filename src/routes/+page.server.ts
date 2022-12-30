import type { PageServerLoad, Actions } from "./$types";
import { error, redirect } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export const load = (async () => {
	const { data: engagementData, error: engagementError } = await supabase
		.from("Engagement")
		.select(
			`
      created_at
      ,id
			,isDone
      ,Engagement_Type (
        description
      ),
      Security (
        ticker
        ,companyName
        ,gicsSector
      )
    `
		)
		.order("created_at", { ascending: false });

	const { data: engagementTypeData, error: engagementTypeError } = await supabase
		.from("Engagement_Type")
		.select();

	if (engagementError || engagementTypeError)
		throw error(404, `${engagementError?.message} - ${engagementTypeError?.message}`);

	return { engagementData, engagementTypeData };
}) satisfies PageServerLoad;

export const actions: Actions = {
	create: async ({ request }) => {
		const formData = await request.formData();

		const ticker = formData.get("security");
		const { data, error: error1 } = await supabase
			.from("Security")
			.select("bbUniqueId")
			.eq("ticker", ticker)
			.single();

		if (error1) throw error(505, error1.message);
		const { bbUniqueId } = data;

		const engagementType = formData.get("engagementType");
		const { data: data1, error: error2 } = await supabase
			.from("Engagement_Type")
			.select("id")
			.eq("description", engagementType)
			.single();

		if (error2) throw error(505, error2.message);
		const { id: engagementTypeId } = data1;

		const esgSummary = formData.get("esgSummary");

		const { error: error3, data: data2 } = await supabase
			.from("Engagement")
			.insert({ bbUniqueId, engagementTypeId, esgSummary })
			.select("id")
			.single();

		if (error3) throw error(505, error3.message);
		const { id: newId } = data2;

		throw redirect(303, `engagement/${newId}`);
	},
};
