import db from '../../db';

export default async function handler(req, res) {
	const result = await db.query("SELECT * FROM component");
	console.log(result);
	res.json(result);
};