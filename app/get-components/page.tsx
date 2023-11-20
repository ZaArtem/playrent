import Client from "./client";
import db from '@/db';

export default async function Page() {
	const result = await db.query("SELECT * FROM component FETCH type,kinds");
	console.log("test2 ", result[0].result);
	return <Client data={result[0].result}></Client>;
}


