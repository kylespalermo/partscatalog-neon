export default defineEventHandler(async (event) => {
  const productkey = getRouterParam(event, 'key')

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
      FROM all_products where key = ${productkey}
    `

    return { products: result[0] }
	
  } catch (error) {
  
    return { error: true, message: error.message }
  }
}); 
