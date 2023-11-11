import Client from "./client";
import db from '../../../db';

export default async function Page({
    params
  }: {
    params: { id: string }
  })  {
    console.log("a",params.id.replace("%3A",":"))
    const result = await db.query(`SELECT * OMIT images FROM client WHERE id=${params.id.replace("%3A",":")} FETCH actual_address,registration_address`);
    console.log("test ", result[0].result);
    return <Client data={result[0].result}></Client>;
}