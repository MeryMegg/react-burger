import React from 'react';
import cn from 'classnames';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-item.module.css';

function BurgerItem({ item }) {
	console.log(item)
	return (
		<li className={cn(styles.card, 'mb-4')}>
			<img className={cn(styles.image, 'mb-1')} src={item.image_large} alt={item.name} />
			<Counter count={1} size='small' />
			<PriceItem price={item.price} />
			<p className={cn('text text_type_main-default', styles.container__description)}>{item.name}</p>
		</li>
	)
}

export default BurgerItem;