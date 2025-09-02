import { neon } from '@neondatabase/serverless'

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig()
  
  console.log('Database URL:', config.databaseUrl ? 'Present' : 'Missing')
  
  if (!config.databaseUrl) {
    console.error('NUXT_DATABASE_URL is not set!')
    return
  }
  
  // Create Neon connection
  const sql = neon(config.databaseUrl)
  
  globalThis.sql = sql
  console.log('Database connection initialized')
})
