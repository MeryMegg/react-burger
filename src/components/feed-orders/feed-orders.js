import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import OrdersItem from '../orders-item/orders-item';
import styles from './feed-orders.module.css';

function FeedOrders() {
	const orders = [1, 2, 3, 4, 5, 6]
	return (
		<section>
			<h1 className={cn('text', 'text_type_main-large', 'mb-5')}>Лента заказов</h1>
			<ul className={cn(styles.list)} >
				{orders.map((el, i) => (
					<li className={cn(styles['list-item'], 'mb-4')} key={i}>
						<Link to={`/feed/${i}`} className={styles.link}>
							<OrdersItem />
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}

export default FeedOrders;