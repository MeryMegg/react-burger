import React from 'react';
import cn from 'classnames';
import BurgerItem from '../burger-item/burger-item';
import styles from './ingredients.module.css';

function Ingredients({ title, array, id }) {
	return (
		<section className={'mb-10'}>
			<h2 id={id} className={cn(styles.ingredients__title, 'text', 'text_type_main-medium', 'mb-6')}>{title}</h2>
			<ul className={cn(styles.list, 'ml-4')}>
				{array.map((el) => <BurgerItem item={el} key={el._id} />)}
			</ul>

		</section>
	)
}

export default Ingredients;