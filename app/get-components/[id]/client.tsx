'use client';

import React, { useMemo, useState } from 'react';
import '@/styles.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Select from 'react-select'

export default function Client({ component, all_kinds, all_types, submit }) {
	const [hide, setHide] = useState(false);
	const [show, setShow] = useState(true);
	const [component_kinds, setKinds] = useState(component.kinds.map(it => it.id));
	const [component_types, setTypes] = useState(component.type.id);
	const router = useRouter();
	const kinds = component.kinds.map(({ id, title }) => ({value: id, label: title}));
	const all_kind = all_kinds.map(({ id, title }, index) => {

		return { value: id, label: title }

	});
	const options = useMemo(
		() => all_kind,
		[]

	);
	const selectedOptions = useMemo(
		() => kinds,
		[]

	);
	console.log("type",component.type.id)
	// const types = component.type.map(({ id, title }) => ({value: id, label: title}));
	const all_type = all_types.map(({ id, title }, index) => {

		return { value: id, label: title }

	});
	const type_options = useMemo(
		() => all_type,
		[]

	);
	const type_selectedOptions = [
		{ value:component.type.id, label:component.type.title }
	];

	function redact() {
		if (hide == false) {
			setHide(true);
			setShow(false);
		} else {
			setHide(false);
			setShow(true);
		}

	}
	const handleChange = e => {
		setKinds(e.map(it => it.value));
	}
	const handleChangeType = e => {
		setTypes(e.value);
	}

	return <div>
		{hide && (
			<div>
				<form action={submit} style={{ display: 'flex', flexDirection: 'column'}}>
					<b><label>Название</label></b>
					<input type="text" name="title" placeholder={component.title} defaultValue={component.title} />
					<b><label htmlFor="familiya">Серийный номер</label></b>
					<input type="text" name="serial" placeholder={component.serial} defaultValue={component.serial} />
					<b><label htmlFor="familiya">Тип инструмента</label></b>
					<Select options={options} defaultValue={selectedOptions} onChange={handleChange} isMulti />
					<input type="hidden" name="kinds" value={component_kinds} />
					<b><label htmlFor="familiya">Тип компонента</label></b>
					<Select options={type_options} defaultValue={type_selectedOptions} onChange={handleChangeType}/>
					<input type="hidden" name="type" value={component_types} />
					<input type="hidden" name="id" value={component.id} />
					<b><label htmlFor="familiya">Состояние</label></b>
					<input type="text" name="state" placeholder={component.state} defaultValue={component.state} />
					<b><label htmlFor="familiya">Цена покупки</label></b>
					<input type="number" name="buy_price" placeholder={component.buy_price} defaultValue={component.buy_price} />
					<b><label htmlFor="familiya">Цена аренды</label></b>
					<input type="number" name="price" placeholder={component.price} defaultValue={component.price} />
					<button onClick={() => redact()}>Назад</button><br />
					<button type="submit">Сохранить</button>
				</form>
			</div>)
		}
		{show && (
			<div>
				<Link href="/get-components">Назад</Link>
				<p><b>Название: </b>{component.title} </p>
				<p><b>Серийный номер: </b>{component.serial}</p>
				<b><label htmlFor="familiya">Тип инструмента</label></b>
				<Select options={options} defaultValue={selectedOptions} isMulti isDisabled />
				<b><label htmlFor="familiya">Тип компонента</label></b>
				<Select options={type_options} defaultValue={type_selectedOptions} isDisabled />
				<p><b>Состояние: </b>{component.state}</p>
				<p><b>Цена покупки: </b>{component.buy_price}</p>
				<p><b>Цена аренды: </b>{component.price}</p>
				<button onClick={() => redact()}>Редактировать</button>
			</div>)
		}
	</div>;


} 