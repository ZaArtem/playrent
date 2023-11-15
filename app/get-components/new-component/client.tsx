'use client';

import React, {useMemo, useState} from "react";
import "@/styles.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import Select from 'react-select'

export default function Client({submit}) {

    const [Kinds, setKinds] = useState();

    console.log(Kinds)
    const options = [
        { value: 'instrument_kind:1', label: 'Сопрано-саксофон изогнутый' },
        { value: 'instrument_kind:2', label: 'Сопрано-саксофон прямой' },
        { value: 'instrument_kind:3', label: 'Альт-саксофон' },
        { value: 'instrument_kind:4', label: 'Классическая гитара шестиструнная 2/4' },
        { value: 'instrument_kind:5', label: 'Электрогитара 3/4' },
        { value: 'instrument_kind:6', label: 'Скрипка 2/4' },
        { value: 'instrument_kind:7', label: 'Скрипка 3/4' },
        { value: 'instrument_kind:mdzxwj6agx1aygf5hnm2', label: 'Скрипка 4/4' }];

    const handleChange = e => {
        setKinds(e.map(it => it.value));
    }

    return <div>
        <Link href="/get-components">Назад</Link>
            <div>
                <form action={submit} style={{display:"flex"}}>
                    <input type="text" name="title" />
                    <input type="text" name="serial"/>
                    <input type="text" name="type"/>
                    <Select options={options}  onChange={handleChange} isMulti  />
                    <input type="hidden" name="kinds" value={Kinds}/>
                    <input type="text" name="state" />
                    <input type="number" name="buy_price"/>
                    <input type="number" name="price"/>

                    <button type="submit">Сохранить</button>
                </form>
            </div>
     
        </div>;
    

} 