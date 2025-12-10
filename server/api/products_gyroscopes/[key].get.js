export default defineEventHandler(async (event) => {
  const productKey = getRouterParam(event, "key");
  
  try {
    const result = await globalThis.sql`
  SELECT * FROM products_gyroscopes WHERE key = ${productKey}
`;

    return { products: result[0] };
  } catch (error) {
    return { error: true, message: error.message };
  }
});
