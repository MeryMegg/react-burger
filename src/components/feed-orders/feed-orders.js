import React from 'react';
import cn from 'classnames';
import OrdersItem from '../orders-item/orders-item';
import styles from './feed-orders.module.css';

function FeedOrders() {
	return (
		<section>
			<h1 className={cn('text', 'text_type_main-large', 'mb-5')}>Лента заказов</h1>
			<ul className={cn(styles.list)} >
				<li className={cn(styles['list-item'], 'mb-4')}><OrdersItem /></li>
				<li className={cn(styles['list-item'], 'mb-4')}><OrdersItem /></li>
				<li className={cn(styles['list-item'], 'mb-4')}><OrdersItem /></li>
				<li className={cn(styles['list-item'], 'mb-4')}><OrdersItem /></li>
				<li className={cn(styles['list-item'], 'mb-4')}><OrdersItem /></li>
			</ul>
		</section>
	)
}

export default FeedOrders;