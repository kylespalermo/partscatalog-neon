export default defineEventHandler(async (event) => {
  try {
    const result = await globalThis.sql`
      SELECT 
        key,
        type,
        model,
        website,
        image_url,
        manufacturer,
        country_of_origin,
        manufacturer_part_number,
        features,
        application,
        source_table
      FROM all_products 
    `;
    return { products: result }
	
  } catch (error) {
   console.error(' DB Error:', error)
    return { error: true, message: error.message }
  }
});
