import Client from "./client";
import db from '@/db';
async function submit(formData: FormData) {
	"use server"
	const title = formData.get("title");
	const serial = formData.get("serial");
	const type = formData.get("type");
	const kinds = formData.get("kinds");
	const state = formData.get("state");
	const buy_price = formData.get("buy_price");
	const price = formData.get("price");
	const result = await db.query(`INSERT INTO component {buy_price:${buy_price}, kinds:[${kinds}] , price:${price}, title:"${title}", type:"component_type:3", serial:"${serial}"};`);
	// type = ${type},
}
export default async function Page() {
	const all_kind = await db.query(`SELECT * FROM instrument_kind FETCH component_types`);
	const all_type = await db.query(`SELECT * FROM component_type`);
	return <Client all_kinds={all_kind[0].result} all_types={all_type[0].result} submit={submit}></Client>;
}