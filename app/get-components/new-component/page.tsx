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
  const price=formData.get("price");
  const result=await db.query(`INSERT INTO component {buy_price:${buy_price}, kinds:[${kinds}] , price:${price}, title:"${title}", type:"component_type:3", serial:"${serial}"};`);
  console.log(result)
  // type = ${type},
}
export default async function Page()  {

    return <Client submit={submit}></Client>;
}