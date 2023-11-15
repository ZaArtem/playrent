import Client from "./client";
import db from '../../../db';
async function submit(formData: FormData) {
  "use server"
  console.log("sas",formData);
  const familiya=formData.get("familiya");
  const imya=formData.get("imya");
  const otchestvo=formData.get("otchestvo");
  const id=formData.get("id");
  const email=formData.get("email");
  const phone=formData.get("phone");
  const actual_address_id=formData.get("actual_address_id");
  const registration_address_id=formData.get("registration_address_id");
  const result=await db.query(`UPDATE ${id}  SET familiya = "${familiya}", imya ="${imya}" , otchestvo = "${otchestvo}", email = "${email}", phone = "${phone}", actual_address = "${actual_address_id}", registration_address = "${registration_address_id}";`);
  console.log(result)
  // type = ${type},
}
export default async function Page({
    params
  }: {
    params: { id: string }
  })  {
    const result = await db.query(`SELECT * FROM client WHERE id=${params.id.replace("%3A",":")} FETCH actual_address,registration_address`);
    console.log("test ", result[0].result);
    return <Client data={result[0].result } submit={submit}></Client>;
}