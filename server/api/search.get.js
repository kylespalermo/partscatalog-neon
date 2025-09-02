export default defineEventHandler(async (event) => {
  try {
    const result = await globalThis.sql`
      SELECT 
        data ->> 'key' AS key,
        data ->> 'type' AS type,
        data ->> 'model' AS model,
        data ->> 'website' AS website,
        data ->> 'image_url' AS image_url,
        data ->> 'manufacturer' AS manufacturer,
        data ->> 'country_of_origin' AS country_of_origin,
        data ->> 'manufacturer_part_number' AS manufacturer_part_number,
        data ->> 'features' AS features,
        data ->> 'application' AS application,
        data ->> 'source_table' AS source_table
      FROM all_products 
    `;
    return { products: result }
	
  } catch (error) {
   console.error(' DB Error:', error)
    return { error: true, message: error.message }
  }
});
