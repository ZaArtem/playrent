'use client';

import React, {useState} from "react";
import "@/styles.css";
import Link from "next/link";
import { useRouter } from 'next/navigation'
export default function Client({data}) {


    const [client, setClient] = useState(data);
    console.log("client",client)

    
    const result = client.map(({familiya,imya,otchestvo,email,phone,registration_address,actual_address}, index) => {
        return <tr  key={index}>
                <td >{familiya+" "+imya+" "+otchestvo}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{registration_address.address}</td>
                <td>{actual_address.address}</td>
                {/* <td><Link href={`/organisation/groups/${organisation_id}`}><a>Просмотр групп  </a></Link> <Link href={`/organisation/events/${organisation_id}`}><a>Просмотр мероприятий </a></Link></td> */}
                
            </tr>;
    });

    return <div>
            <h1>Компоненты</h1>
            <table className="iksweb">
                <thead>
                    <tr>
                        <th><b>Ф.И.О</b></th>
                        <th><b>E-mail</b></th>
                        <th><b>Телефон</b></th>
                        <th><b>Адрес регистрации</b></th>
                        <th><b>Адрес проживания</b></th>
    
                    </tr>
                </thead>
               <tbody>{result}</tbody> 
            </table>
        </div>;
    

} 