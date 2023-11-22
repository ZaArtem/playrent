'use client';

import React, { useMemo, useState } from 'react';
import '@/styles.css';
import Link from 'next/link';
import Select from 'react-select'

export default function Client({ all_kinds, all_types, submit }) {
	const [kinds, setKinds] = useState();
	const [component_types, setTypes] = useState();
	const all_kind = all_kinds.map(({ id, title }, index) => {

		return { value: id, label: title }

	});
	const options = useMemo(
		() => all_kind,
		[]

	);
	const all_type = all_types.map(({ id, title }, index) => {

		return { value: id, label: title }

	});
	const type_options = useMemo(
		() => all_type,
		[]

	);
	const handleChange = e => {
		setKinds(e.map(it => it.value));
		console.log("kinds",kinds)
	}
	const handleChangeType = e => {
		setTypes(e.value);
		console.log("type",component_types)
	}

	return <div>
		<nav>
			<ul>
				<li><a href="/get-components">Назад</a></li>
				<li><a href="/get-order">Заказы</a></li>
				<li><a href="/get-clients">Клиенты</a></li>
			</ul>
		</nav>
		<div className='container'>
			<form action={submit} style={{ display: 'flex', flexDirection: 'column' }}>
				<b><label>Название</label></b>
				<input type="text" name="title" />
				<b><label>Серийный номер</label></b>
				<input type="text" name="serial" />
				<b><label>Тип инструмента</label></b>
				<Select options={options} onChange={handleChange} isMulti />
				<input type="hidden" name="kinds" value={kinds} />
				<b><label>Тип компонента</label></b>
				<Select options={type_options} onChange={handleChangeType}/>
				<input type="hidden" name="type" value={component_types} />
				<b><label>Состояние</label></b>
				<input type="text" name="state" />
				<b><label>Цена покупки</label></b>
				<input type="number" name="buy_price" />
				<b><label>Цена аренды</label></b>
				<input type="number" name="price" />
				<button type="submit">Сохранить</button>
			</form>
		</div>
	</div>;


} 