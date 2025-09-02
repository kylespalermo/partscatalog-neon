export default defineEventHandler(async (event) => {
<<<<<<< HEAD
  const { databaseUrl } = useRuntimeConfig();
  const db = neon(databaseUrl);
   /*const { dbHost } = useRuntimeConfig();
   const { dbPort } = useRuntimeConfig();
   const { dbName } = useRuntimeConfig();
   const { dbUser } = useRuntimeConfig();
   const { dbPassword } = useRuntimeConfig();
 const client = new Client({
    host: dbHost,
    port: Number(dbPort),
    database: dbName,
    user: dbUser,
    password: dbPassword,
  })*/

=======
>>>>>>> 64e85023c20686fe477351718df548cd12e15020
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
    `
    return { products: result }
	
  } catch (error) {
    console.error('DB Error:', error)
    return { error: true, message: error.message }
  }
});
