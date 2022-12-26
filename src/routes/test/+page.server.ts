import type { PageServerLoad, Actions } from "./$types";
import { supabase } from "$lib/supabase";

export const load = (async () => {
	const { data: engagements, error } = await getEngagements();
	return { engagements };
}) satisfies PageServerLoad;

async function getEngagements() {
	return await supabase.from("Engagement").select();
}

type engageR = Awaited<ReturnType<typeof getEngagements>>;
export type engageResSuc = engageR["data"];

// export async function getMovies() {
//   return await supabase.from('movies').select(`id, title`)
// }

// type MoviesResponse = Awaited<ReturnType<typeof getMovies>>
// export type MoviesResponseSuccess = MoviesResponse['data']
// export type MoviesResponseError = MoviesResponse['error']
