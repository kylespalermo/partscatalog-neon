import { neon } from '@neondatabase/serverless';
export default defineCachedEventHandler(
  async (event) => {
    const { databaseUrl } = useRuntimeConfig();
    const db = neon(databaseUrl);
    const results = await db
    `
    SELECT 
      'google_drive.gyroscopes' AS category,
      row_to_json(google_drive.gyroscopes.*) AS data
    FROM google_drive.gyroscopes
    UNION ALL
    SELECT 
      'google_drive.accelerometers' AS category,
      row_to_json(google_drive.accelerometers.*) AS data
    FROM google_drive.accelerometers
    `;
    return results;
  },
  {
    maxAge: 60 * 60 * 24, // cache it for a day
  }
);

