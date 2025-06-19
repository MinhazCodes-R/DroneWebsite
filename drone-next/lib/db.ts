import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER || 'drone_user',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'drone_db',
  password: process.env.PGPASSWORD || 'drone_password',
  port: Number(process.env.PGPORT) || 5432,
});

export default pool;