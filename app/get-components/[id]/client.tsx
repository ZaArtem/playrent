'use client';

import React, {useMemo, useState} from "react";
import "@/styles.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import Select from 'react-select'

export default function Client({data,submit}) {

    const [component, setComponents] = useState(data);
    const [hide, setHide] = useState(false);
    const [show, setShow] = useState(true);
    console.log("a",data[0].kinds)
    const [Kinds, setKinds] = useState(data[0].kinds.map(it=>it.id));
    const router = useRouter()
    const kinds= data[0].kinds.map(({id,title},index) =>{
       
        return { value: id, label: title }

    });
    console.log(Kinds)
    const options = [
        { value: 'instrument_kind:1', label: 'Сопрано-саксофон изогнутый' },
        { value: 'instrument_kind:2', label: 'SСопрано-саксофон прямой' },
        { value: 'instrument_kind:3', label: 'Альт-саксофон' },
        { value: 'instrument_kind:4', label: 'Классическая гитара шестиструнная 2/4' },
        { value: 'instrument_kind:5', label: 'Электрогитара 3/4' },
        { value: 'instrument_kind:6', label: 'Скрипка 2/4' },
        { value: 'instrument_kind:7', label: 'Скрипка 3/4' },
        { value: 'instrument_kind:mdzxwj6agx1aygf5hnm2', label: 'Скрипка 4/4' }];
    const selectedOptions = useMemo(
            () => kinds,
            []
    
          );
    
    function Redact(){
        if (hide==false){
            setHide(true);
            setShow(false);
        }else{
            setHide(false);
            setShow(true);
        }
        console.log("hide",hide)

    }
    const handleChange = e => {
        setKinds(e.map(it => it.value));
    }

    return <div>
        <Link href="/get-components">Назад</Link>
        {hide&&(
            <div>
                <form action={submit} style={{display:"flex"}}>
                    <input type="text" name="title" placeholder={data[0].title} defaultValue={data[0].title} />
                    <input type="text" name="serial" placeholder={data[0].serial} defaultValue={data[0].serial} />
                    <input type="text" name="type" placeholder={data[0].type.title} defaultValue={data[0].type.title} />
                    <Select options={options} defaultValue={selectedOptions} onChange={handleChange} isMulti  />
                    <input type="hidden" name="kinds" value={Kinds}/>
                    <input type="hidden" name="id" value={data[0].id}/>
                    <input type="text" name="state" placeholder={data[0].state} defaultValue={data[0].state}  />
                    <input type="number" name="buy_price" placeholder={data[0].buy_price} defaultValue={data[0].buy_price} />
                    <input type="number" name="price" placeholder={data[0].price} defaultValue={data[0].price}/>
                    <button onClick={()=>Redact()}>Назад</button><br/>
                    <button type="submit">Сохранить</button>
                </form>
            </div>)
        }
        {show&&(
            <div>
                <p>{data[0].title} </p>
                <p>{data[0].serial}</p>
                <p>{data[0].type.title}</p>
                <Select options={options} defaultValue={selectedOptions} isMulti isDisabled  />
                <p>{data[0].state}</p>
                <p>{data[0].buy_price}</p>
                <p>{data[0].price}</p>
                <button onClick={()=>Redact()}>Редактировать</button>
            </div>)
        }       
        </div>;
    

} 