import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/supabase";

export const GET = (async ({ url }) => {
	const keyword = url.searchParams.get("keyword") ?? "";
	if (keyword === "") {
		throw error(400, "Please input a search term.");
	}

	const { data, error: sError } = await supabase
		.from("Security")
		.select(
			`
      bbUniqueId
      ,ticker
    `
		)
		.ilike("ticker", `${keyword}%`)
		.limit(15)
		.order("ticker");

	if (!data) throw error(404, sError?.message);

	return json(data);
}) satisfies RequestHandler;
