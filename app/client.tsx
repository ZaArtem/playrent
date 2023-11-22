'use client';

import '@/styles.css';
import Link from 'next/link';

export default function Client() {
	return <div>
		<nav>
			<ul>
				<li><a href="/get-order">Заказы</a></li>
				<li><a href="/get-clients">Клиенты</a></li>
				<li><a href="/get-components">Компоненты</a></li>
			</ul>
		</nav>
		<div>
			<h1>Ближайшие оплаты</h1>
			<table className="iksweb">
				<thead>
					<tr>
						<th><b>Ф.И.О. клиента</b></th>
						<th><b>Номер заказа</b></th>
						<th><b>Расчетный день</b></th>
						<th><b>Ежемесячный платеж</b></th>
					</tr>
				</thead>
				<tbody>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tbody>
			</table>
		</div>
	</div>;
}


