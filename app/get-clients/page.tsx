import Client from "./client";
import db from '@/db';

export default async function Page() {
	const result = await db.query("SELECT client,array::group(order_number) as orders FROM order group by client FETCH client");
	console.log("test5 ", result[0].result);
	return <Client data={result[0].result}></Client>;
}


