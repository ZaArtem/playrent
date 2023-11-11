'use client';

import React, {useState} from "react";
import "@/styles.css";
import { useRouter } from "next/navigation";

export default function Client({data}) {

    const [component, setComponents] = useState(data);
    const router = useRouter()
    
    const result = component.map(({buy_price,serial,kinds,state,price,quantity,sell,title,type,id}, index) => {
        return <tr key={index}>
                <td>{title}</td>
                <td>{serial}</td>
                <td>{type.title}</td>
                <td>{kinds.map(({ title}) => ( title ))}</td>
                <td>{state}</td>
                {/* Кнопка сменить состояние */}
                <td>{buy_price}</td>
                <td>{price}</td>
                {/* <td>{quantity}</td> */}
                {/* <td><Link href={`/organisation/groups/${organisation_id}`}><a>Просмотр групп  </a></Link> <Link href={`/organisation/events/${organisation_id}`}><a>Просмотр мероприятий </a></Link></td> */}
                
            </tr>;
    });

    return <div>
            <h1>Компонент</h1>
            <table className="iksweb">
                <thead>
                    <tr>
                        <th><b>Название</b></th>
                        <th><b>Серийный номер</b></th>
                        <th><b>Тип компонента</b></th>
                        <th><b>Типы инструментов</b></th>
                        <th><b>Состояние</b></th>
                        {/* Кнопка */}
                        <th><b>Цена продажи</b></th>
                        <th><b>Цена аренды</b></th>
                        {/* <th><b>Количество</b></th> */}
                    </tr>
                </thead>
               <tbody>{result}</tbody> 
            </table>
        </div>;
    

} 