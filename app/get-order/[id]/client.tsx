'use client';

import React, {useState} from "react";
import "@/styles.css";
import { useRouter } from "next/navigation";

export default function Client({data}) {

    const [clients, setClients] = useState(data);
    const router = useRouter()
    
    const result = clients.map(({order_number,client,components,price,status,goods,month_pay,id}, index) => {
        return <tr  key={index}>
                <td>{order_number}</td>
                <td>{client.familia+" "+client.imya+" "+client.otchestvo}</td>
                <td>{client.email+" "+client.phone}</td>
                <td>{components}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td>{goods}</td>
                <td>{month_pay}</td>
                {/* <td>{oplacheno}</td> */}
                {/* <td><Link href={`/organisation/groups/${organisation_id}`}><a>Просмотр групп  </a></Link> <Link href={`/organisation/events/${organisation_id}`}><a>Просмотр мероприятий </a></Link></td> */}
                
            </tr>;
    });

    return <div>
            <h1>Компоненты</h1>
            <table className="iksweb">
                <thead>
                    <tr>
                        <th><b>Номер заказа</b></th>
                        <th><b>Ф.И.О. клиента</b></th>
                        <th><b>Номер телефона</b></th>
                        <th><b>Список компонентов</b></th>
                        <th><b>Расчетный день</b></th>
                        <th><b>Состояние</b></th>
                        <th><b>Список товаров</b></th>
                        <th><b>Ежемесячный платеж</b></th>
                        <th><b>Сколько оплачено</b></th>
    
                    </tr>
                </thead>
               <tbody>{result}</tbody> 
            </table>
        </div>;
    

} 