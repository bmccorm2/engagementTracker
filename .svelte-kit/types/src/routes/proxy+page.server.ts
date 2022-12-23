// @ts-nocheck
import type { PageServerLoad, Actions } from "./$types";
import { error } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export const load = (async () => {
	const { data: engagementData, error: engagementError } = await supabase
		.from("Engagement")
		.select(
			`
      created_at
      ,id
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

	if (!engagementData || !engagementTypeData)
		throw error(404, "Error retrieving data from database.");

	return { engagementData, engagementTypeData };
}) satisfies PageServerLoad;

export const actions = {
	create: async ({ request }: import('./$types').RequestEvent) => {
		const formData = await request.formData();

		const ticker = formData.get("security");
		const { data } = await supabase
			.from("Security")
			.select("bbUniqueId")
			.eq("ticker", ticker)
			.single();
		const { bbUniqueId } = data;

		const engagementType = formData.get("engagementType");
		const { data: data1 } = await supabase
			.from("Engagement_Type")
			.select("id")
			.eq("description", engagementType)
			.single();
		const { id: engagementTypeId } = data1;
		console.log(engagementTypeId);

		const { error } = await supabase.from("Engagement").insert({ bbUniqueId, engagementTypeId });
	},
};
;null as any as Actions;