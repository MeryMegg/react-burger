import React from 'react';
import cn from 'classnames';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './price-item.module.css';

function PriceItem({ price }) {
	console.log(price)
	return (
		<span className={cn("constructor-element__price", 'text', 'text_type_main-small', 'mb-1')}>
			{price}
			<CurrencyIcon type="primary" />
		</span>
	)
}

export default PriceItem;