import { e as error, r as redirect } from "../../chunks/env-private.js";
import { s as supabase } from "../../chunks/supabase.js";
const load = async () => {
  const { data: engagementData, error: engagementError } = await supabase.from("Engagement").select(
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
  ).order("created_at", { ascending: false });
  const { data: engagementTypeData, error: engagementTypeError } = await supabase.from("Engagement_Type").select();
  if (engagementError || engagementTypeError)
    throw error(404, `${engagementError?.message} - ${engagementTypeError?.message}`);
  return { engagementData, engagementTypeData };
};
const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const ticker = formData.get("security");
    const { data, error: error1 } = await supabase.from("Security").select("bbUniqueId").eq("ticker", ticker).single();
    if (error1)
      throw error(505, error1.message);
    const { bbUniqueId } = data;
    const engagementType = formData.get("engagementType");
    const { data: data1, error: error2 } = await supabase.from("Engagement_Type").select("id").eq("description", engagementType).single();
    if (error2)
      throw error(505, error2.message);
    const { id: engagementTypeId } = data1;
    const { error: error3, data: data2 } = await supabase.from("Engagement").insert({ bbUniqueId, engagementTypeId }).select("id").single();
    if (error3)
      throw error(505, error3.message);
    const { id: newId } = data2;
    throw redirect(303, `engagement/${newId}`);
  }
};
export {
  actions,
  load
};
