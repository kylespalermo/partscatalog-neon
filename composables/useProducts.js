// composables/useProducts.js
import { neon } from '@neondatabase/serverless';

export const useProducts = () => {
  const products = useState('products', () => null);
  const error = useState('products_error', () => null);

  const { data, pending, error: asyncError } = useAsyncData('products', async () => {
    const { databaseUrl } = useRuntimeConfig();
    const db = neon(databaseUrl);

    return await db`
      SELECT key, type, model, website, image_url, manufacturer, 
             country_of_origin, manufacturer_part_number, features, 
             application, source_table 
      FROM public.all_products`;
  });

  watchEffect(() => {
    if (data.value) products.value = data.value;
    if (asyncError.value) error.value = asyncError.value;
  });

  return {
    products,
    error,
    pending,
  };
};
