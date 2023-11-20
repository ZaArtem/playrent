import Client from "./client";
import db from '@/db';
async function submit(formData: FormData) {
	"use server"
	console.log("sas", formData);
	const familiya = formData.get("familiya");
	const imya = formData.get("imya");
	const otchestvo = formData.get("otchestvo");
	const id = formData.get("id");
	const email = formData.get("email");
	const phone = formData.get("phone");
	const actual_address_id = formData.get("actual_address_id");
	const registration_address_id = formData.get("registration_address_id");
	const result = await db.query(`INSERT INTO client {familiya:"${familiya}", imya:"${imya}" , otchestvo:"${otchestvo}", email:"${email}", phone:"${phone}", actual_address:"address:xo2m7fmy6qeh1hmzs9hh", registration_address:"address:xo2m7fmy6qeh1hmzs9hh"};`);
	console.log(result)
	//  actual_address:"${actual_address_id}", registration_address:"${registration_address_id},
}
export default async function Page() {

	return <Client submit={submit}></Client>;
}