import { neon } from "@neondatabase/serverless";

export default defineEventHandler(async (event) => {
  const { databaseUrl } = useRuntimeConfig();
  const db = neon(databaseUrl);

  try {
    const result = await db`
      SELECT key, type, model, website, image_url, manufacturer, 
             country_of_origin, manufacturer_part_number, features, 
             application, source_table 
      FROM public.all_products`;

    return result;
  } catch (error) {
    return { error: error.message };
  }
});
