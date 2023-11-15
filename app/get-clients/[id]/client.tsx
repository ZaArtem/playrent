'use client';

import React, {useState} from "react";
import "@/styles.css";
import Link from "next/link";
import { useRouter } from 'next/navigation'
export default function Client({data,submit}) {


    const [client, setClient] = useState(data);
    const [hide, setHide] = useState(false);
    const [show, setShow] = useState(true);
    function Redact(){
        if (hide==false){
            setHide(true);
            setShow(false);
        }else{
            setHide(false);
            setShow(true);
        }

    }

    return <div>
        <Link href="/get-clients">Назад</Link>
        {hide&&(
            <div>
                <form action={submit} style={{display:"flex"}}>
                    <input type="text" name="familiya" placeholder={data[0].familiya} defaultValue={data[0].familiya} />
                    <input type="text" name="imya" placeholder={data[0].imya} defaultValue={data[0].imya} />
                    <input type="text" name="otchestvo" placeholder={data[0].otchestvo} defaultValue={data[0].otchestvo} />
                    <input type="hidden" name="id" value={data[0].id}/>
                    <input type="text" name="email" placeholder={data[0].email} defaultValue={data[0].email}  />
                    <input type="text" name="phone" placeholder={data[0].phone} defaultValue={data[0].phone} />
                    <input type="text" name="registration_address" placeholder={data[0].registration_address.address} defaultValue={data[0].registration_address.address}/>
                    <input type="hidden" name="registration_address_id" value={data[0].registration_address.id}/>
                    <input type="text" name="actual_address" placeholder={data[0].actual_address.address} defaultValue={data[0].actual_address.address}/>
                    <input type="hidden" name="actual_address_id" value={data[0].actual_address.id}/>
                    <button onClick={()=>Redact()}>Назад</button><br/>
                    <button type="submit">Сохранить</button>
                </form>
            </div>)
        }
        {show&&(
            <div>
                <p>{data[0].familiya} </p>
                <p>{data[0].imya}</p>
                <p>{data[0].otchestvo}</p>
                <p>{data[0].email}</p>
                <p>{data[0].phone}</p>
                <p>{data[0].price}</p>
                <p>{data[0].registration_address.address}</p>
                <p>{data[0].actual_address.address}</p>
                <button onClick={()=>Redact()}>Редактировать</button>
            </div>)
        }  
        </div>;
    

} 