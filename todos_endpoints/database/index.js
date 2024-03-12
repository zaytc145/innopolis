import PG from 'pg';
const Pool = PG.Pool;

export const pool = new Pool({
	user: 'postgres',
	password: 'postgres',
	database: 'task_manager',
	host: 'localhost',
	port: '5432',
});
