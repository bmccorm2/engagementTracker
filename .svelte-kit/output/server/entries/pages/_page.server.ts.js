import { e as error } from "../../chunks/env-private.js";
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
  if (!engagementData || !engagementTypeData)
    throw error(404, "Error retrieving data from database.");
  return { engagementData, engagementTypeData };
};
const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const ticker = formData.get("security");
    const { data } = await supabase.from("Security").select("bbUniqueId").eq("ticker", ticker).single();
    const { bbUniqueId } = data;
    const engagementType = formData.get("engagementType");
    const { data: data1 } = await supabase.from("Engagement_Type").select("id").eq("description", engagementType).single();
    const { id: engagementTypeId } = data1;
    console.log(engagementTypeId);
    await supabase.from("Engagement").insert({ bbUniqueId, engagementTypeId });
  }
};
export {
  actions,
  load
};
