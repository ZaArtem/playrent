import React, {useEffect, useState} from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
// import axios from "axios";
// import Link from 'next/link';

export async function getServerSideProps() {
    
    const res = await fetch("http://localhost:3000/api/events");
    const data = await res.json()

   

   console.log(data);

    return {
        props: { data }
    };


}

export default function Components({ data }) {
    const [components, setComponents] = useState(data);

    
    const result = components.map(({buy_price,id,kinds,instrument_kind,price,quantity,sell,title,type}, index) => {
        return <tbody>
            <tr key={index}>
                <td>{buy_price}</td>
                <td>{id}</td>
                <td>{kinds}</td>
                <td>{instrument_kind}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{sell}</td>
                <td>{title}</td>
                <td>{type}</td>
                {/* <td><Link href={`/organisation/groups/${organisation_id}`}><a>Просмотр групп  </a></Link> <Link href={`/organisation/events/${organisation_id}`}><a>Просмотр мероприятий </a></Link></td> */}
                
            </tr>
        </tbody>;
    });





    return <div>
        <h1>Компоненты</h1>
        <table className="iksweb">
            <thead>
                <tr>
                    <th><b>Цена</b></th>
                    <th><b>ИД</b></th>
                    <th><b>Типы</b></th>
                    <th><b>Тип ИДнструмента</b></th>
                    <th><b>Цена</b></th>
                    <th><b>Количество</b></th>
                    <th><b>Продажа</b></th>
                    <th><b>Название</b></th>
                    <th><b>Тип</b></th>

                </tr>
            </thead>
            {result}
        </table>
    </div>;

}

