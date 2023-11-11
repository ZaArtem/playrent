import Client from "./client";
import db from '../../../db';

export default async function Page({
    params
  }: {
    params: { id: string }
  })  {
    const result = await db.query(`SELECT * FROM component WHERE id=${params.id.replace("%3A",":")} FETCH type,kinds`);
    console.log("test ", result[0].result);
    return <Client data={result[0].result}></Client>;
}