import Client from "./client";
import db from '../../../db';
async function submit(formData: FormData) {
  "use server"
  console.log("sas",formData);
  const title=formData.get("title");
  const serial=formData.get("serial");
  const type=formData.get("type");
  const kinds=formData.get("kinds");
  const state=formData.get("state");
  const buy_price=formData.get("buy_price");
  const id=formData.get("id");
  const price=formData.get("price");
  const query = `UPDATE ${id}  SET buy_price = ${buy_price}, kinds =[${kinds}] , price = ${price}, title = "${title}", serial = "${serial}";`;
  console.log('query', query);
  // const result=await db.query(`UPDATE ${id}  SET buy_price = ${buy_price}, kinds =[${kinds}] , price = ${price}, title = "${title}", serial = "${serial}";`);
  // console.log(result)
  // type = ${type},
}
export default async function Page({
    params
  }: {
    params: { id: string }
  })  {
    const result = await db.query(`SELECT * FROM component WHERE id=${params.id.replace("%3A",":")} FETCH type,kinds`);
    console.log("test ", result[0].result);
    return <Client data={result[0].result} submit={submit}></Client>;
}