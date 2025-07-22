import {Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

(async () => {
    try{
        const client = await pool.connect();
        console.log('✅ Connected to the database');
        client.release();
    }catch(err) {
        console.error('❌ Database connection error:', err);
    }
})();
export default pool;