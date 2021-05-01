import React from 'react';
import cn from 'classnames';
import BurgerItem from '../burger-item/burger-item';
import styles from './ingredients.module.css';

function Ingredients({ title, array }) {
	return (
		<section className={'mb-5'}>
			<h2 className={cn(styles.ingredients__title, 'text', 'text_type_main-medium', 'mb-3')}>{title}</h2>
			<ul className={styles.list}>
				{array.map((el) => <BurgerItem item={el} key={el._id} />)}
			</ul>

		</section>
	)
}

export default Ingredients;