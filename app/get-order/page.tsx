import Client from "./client";
import db from '@/db';

export default async function Page() {
	const result = await db.query("SELECT * FROM order  FETCH client");
	return <Client data={result[0].result}></Client>;
}