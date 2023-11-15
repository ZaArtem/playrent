'use client';

import React, {useState} from "react";
import "@/styles.css";
import Link from "next/link";
export default function Client({submit}) {





    return <div>
        <Link href="/get-clients">Назад</Link>
            <div>
                <form action={submit} style={{display:"flex"}}>
                    <input type="text" name="familiya" />
                    <input type="text" name="imya"/>
                    <input type="text" name="otchestvo"/>
                    <input type="hidden" name="id"/>
                    <input type="text" name="email"  />
                    <input type="text" name="phone" />
                    <input type="text" name="registration_address" />
                    <input type="hidden" name="registration_address_id" />
                    <input type="text" name="actual_address" />
                    <input type="hidden" name="actual_address_id"/>
                    <button type="submit">Сохранить</button>
                </form>
            </div>
        </div>;
    

} 