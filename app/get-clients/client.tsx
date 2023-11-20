'use client';

import React, { useState } from 'react';
import '@/styles.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Client({ data }) {
	const router = useRouter()
	const [clients, setClients] = useState(data);
	const result = clients.map(({ orders, client }, index) => {
		orders = orders.map((item) => <><b>{item}</b><br /></>)
		console.log("ord", orders);
		return <tr onClick={() => router.push(`/get-clients/${client.id}`)} key={index}>
			<td >{client.familiya + " " + client.imya + " " + client.otchestvo}</td>
			<td>{client.email}</td>
			<td>{client.phone}</td>
			<td>{orders}</td>
			{/* <td><Link href={`/organisation/groups/${organisation_id}`}><a>Просмотр групп  </a></Link> <Link href={`/organisation/events/${organisation_id}`}><a>Просмотр мероприятий </a></Link></td> */}
		</tr>;
	});

	return <div>
		<h1>Клиенты</h1>
		<Link href="/get-clients/new-client">Создать нового клиента</Link>
		<table className="iksweb">
			<thead>
				<tr>
					<th><b>Ф.И.О</b></th>
					<th><b>E-mail</b></th>
					<th><b>Телефон</b></th>
					<th><b>Заказы</b></th>
				</tr>
			</thead>
			<tbody>{result}</tbody>
		</table>
	</div>;


} 