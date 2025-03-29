import { neon } from '@neondatabase/serverless';

export const fetchProducts = async () => {
    const { databaseUrl } = useRuntimeConfig();
    const db = neon(databaseUrl);
    return await db`SELECT key, meta_type, meta_model, meta_website, meta_manufacturer, meta_country_of_origin, features, application, source_table FROM all_products`;
};