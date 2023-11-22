'use client';

import React, { useState } from 'react';
import '@/styles.css';
import Link from 'next/link';
export default function Client({ client, submit }) {
	const [hide, setHide] = useState(false);
	const [show, setShow] = useState(true);
	function redact() {
		if (hide == false) {
			setHide(true);
			setShow(false);
		} else {
			setHide(false);
			setShow(true);
		}

	}
	return <div>
		{hide && (
			<div className='container'>
				<form action={submit} style={{ display: 'flex', flexDirection: 'column' }}>
					<b><label htmlFor="familiya">Фамилия</label></b>
					<input type="text" name="familiya" placeholder={client.familiya} defaultValue={client.familiya} />
					<b><label htmlFor="imya">Имя</label></b>
					<input type="text" name="imya" placeholder={client.imya} defaultValue={client.imya} />
					<b><label htmlFor="otchestvo">Отчество</label></b>
					<input type="text" name="otchestvo" placeholder={client.otchestvo} defaultValue={client.otchestvo} />
					<input type="hidden" name="id" value={client.id} />
					<b><label htmlFor="email">Почта</label></b>
					<input type="text" name="email" placeholder={client.email} defaultValue={client.email} />
					<b><label htmlFor="phone">Телефон:</label></b>
					<input type="text" name="phone" placeholder={client.phone} defaultValue={client.phone} />
					<b><label htmlFor="registration_address">Адрес регистрации</label></b>
					<input type="text" name="registration_address" placeholder={client.registration_address.address} defaultValue={client.registration_address.address} />
					<input type="hidden" name="registration_address_id" value={client.registration_address.id} />
					<b><label htmlFor="actual_address">Адрес проживания</label></b>
					<input type="text" name="actual_address" placeholder={client.actual_address.address} defaultValue={client.actual_address.address} />
					<input type="hidden" name="actual_address_id" value={client.actual_address.id} />
					<b><button onClick={() => redact()}>Назад</button><br /></b>
					<b><button type="submit">Сохранить</button></b>
				</form>
			</div>)
		}
		{show && (
			<div>
				<nav>
					<ul>
						<li><a href="/get-clients">Назад</a></li>
						<li><a href="/get-order">Заказы</a></li>
						<li><a href="/get-components">Компоненты</a></li>
					</ul>
				</nav>
				<p><b>Фамилия: </b>{client.familiya} </p>
				<p><b>Имя: </b>{client.imya}</p>
				<p><b>Отчество: </b>{client.otchestvo}</p>
				<p><b>Почта: </b>{client.email}</p>
				<p><b>Телефон: </b>{client.phone}</p>
				<p><b>Адрес регистрации: </b>{client.registration_address.address}</p>
				<p><b>Адрес проживания: </b>{client.actual_address.address}</p><br/>
				<b><button onClick={() => redact()}>Редактировать</button></b>
			</div>)
		}
	</div>;
} 