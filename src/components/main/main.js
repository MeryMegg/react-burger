import React from 'react';
import cn from 'classnames';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './main.module.css';
import { data } from '../../utils/data'

function Main() {

	const filterArray = (arr) => {
		return arr.reduce((acc, curr) =>
		({
			...acc, [curr.type]: [...acc[curr.type] || [], curr]
		}), {})
	}

	const ingredientsObj = filterArray(data);

	return (
		<main className={cn(styles.main, 'p-10')}>
			<div className={styles.columns}>
				<BurgerIngredients bread={ingredientsObj.bun} sauces={ingredientsObj.sauce} fillings={ingredientsObj.main} />
				<BurgerConstructor />
			</div>

		</main>
	);
}


export default Main;
