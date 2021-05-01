import React from 'react';
import cn from 'classnames';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function PriceItem({ price, classMarg, classText }) {
	return (
		<span className={cn("constructor-element__price", 'text', [classText], [classMarg])}>
			{price}
			<CurrencyIcon type="primary" />
		</span>
	)
}

export default PriceItem;