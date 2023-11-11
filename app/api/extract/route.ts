import db from '@/db';
import { NextResponse } from 'next/server';


export async function GET(req) {

    const result = await db.query('SELECT * FROM component');
    console.log("test ", result);
    return NextResponse.json(result);

}