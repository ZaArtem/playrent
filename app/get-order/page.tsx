import React, { useState } from "react";
import Client from "./client";
import db from '../../db';

export default async function Page() {
    const result = await db.query("SELECT * FROM order  FETCH client");
    console.log("test2 ", result[0].result);
    return <Client data={result[0].result}></Client>;
}
 
   
