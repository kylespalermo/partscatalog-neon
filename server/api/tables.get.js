export default defineEventHandler(async (event) => {
  try {
    const result = await globalThis.sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'all_products' 
      AND table_schema = 'public'
    `;
    return { columns: result }
  } catch (error) {
    console.error('DB Error:', error)
    return { error: true, message: error.message }
  }
});