import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderDetails from '../order-details/order-details';
import styles from './main.module.css';
import { ServerConfig } from '../../constants/config';


function Main() {
	const [state, setState] = useState({
		isLoading: false,
		hasError: false,
		data: [],
	});

	useEffect(() => {
		getIngredients();
	}, [])

	const getIngredients = async () => {
		setState({ ...state, hasError: false, isLoading: true });
		try {
			const res = await fetch(ServerConfig.baseUrl)
			const data = await res.json()
			setState({ ...state, data: data.data, isLoading: false })
		}
		catch {
			setState({ ...state, hasError: true, isLoading: false });
		}
	}

	const filterArray = (arr) => {
		return arr.reduce((acc, curr) =>
		({
			...acc, [curr.type]: [...acc[curr.type] || [], curr]
		}), {})
	}

	const ingredientsObj = filterArray(state.data);

	return (
		<>
			<main className={cn(styles.main, 'p-10')}>
				{state.isLoading && 'Загрузка...'}
				{state.hasError && 'Произошла ошибка'}
				{!state.isLoading &&
					!state.hasError &&
					!!state.data.length &&
					<div className={styles.columns}>
						<BurgerIngredients bread={ingredientsObj.bun} sauces={ingredientsObj.sauce} fillings={ingredientsObj.main} />
						<BurgerConstructor />
					</div>
				}
			</main>
			<OrderDetails />
		</>
	);
}


export default Main;
