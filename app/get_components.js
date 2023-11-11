import db from '../../app/db';

export default async function handler(req, res) {
	const result = await db.query("SELECT * FROM order;");
	console.log(result);
	res.json(result);
};