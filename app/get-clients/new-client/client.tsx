'use client';

import '@/styles.css';
import Link from 'next/link';
export default function Client({ submit }) {
	return <div>
		<Link href="/get-clients">Назад</Link>
		<div>
			<form action={submit} style={{ display: "flex", flexDirection: 'column' }}>
				<b><label htmlFor="familiya">Фамилия</label></b>
				<input type="text" name="familiya" />
				<b><label htmlFor="imya">Имя</label></b>
				<input type="text" name="imya" />
				<b><label htmlFor="otchestvo">Отчество</label></b>
				<input type="text" name="otchestvo" />
				<b><label htmlFor="email">Почта</label></b>
				<input type="text" name="email" />
				<b><label htmlFor="phone">Телефон:</label></b>
				<input type="text" name="phone" />
				<b><label htmlFor="registration_address">Адрес регистрации</label></b>
				<input type="text" name="registration_address" />
				<input type="hidden" name="registration_address_id" />
				<b><label htmlFor="actual_address">Адрес проживания</label></b>
				<input type="text" name="actual_address" />
				<input type="hidden" name="actual_address_id" />
				<button type="submit">Сохранить</button>
			</form>
		</div>
	</div>;
} 