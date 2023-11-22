import { revalidatePath } from "next/cache";
import Client from "./client";
import db from '@/db';
import {  redirect } from "next/navigation";
async function submit(formData: FormData) {
	"use server"
	const title = formData.get("title");
	const serial = formData.get("serial");
	const type = formData.get("type");
	const kinds = formData.get("kinds");
	const state = formData.get("state");
	const buy_price = formData.get("buy_price");
	const id = formData.get("id");
	const price = formData.get("price");
	const result = await db.query(`UPDATE ${id}  SET buy_price = ${buy_price}, kinds =[${kinds}], type = ${type}, price = ${price}, title = "${title}", serial = "${serial}";`);
	console.log(result)
	redirect(`/get-components/`)
}
export default async function Page({
	params
}: {
	params: { id: string }
}) {
	const result = await db.query(`SELECT * FROM ONLY component WHERE id=${params.id.replace("%3A", ":")} FETCH type, kinds`);
	const all_kind = await db.query(`SELECT * FROM instrument_kind FETCH component_types`);
	const all_type = await db.query(`SELECT * FROM component_type`);
	console.log("a",result[0].result)
	return <Client component={result[0].result} all_kinds={all_kind[0].result} all_types={all_type[0].result} submit={submit}></Client>;
}