import connection from '../../lib/db';

export default async function handler(req, res) {
	const result = await connection.query("SELECT * FROM organisations");
	console.log(result[0]);
	res.json(result[0]);
};