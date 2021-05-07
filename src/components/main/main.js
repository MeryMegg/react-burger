import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import styles from './main.module.css';
import { ServerConfig } from '../../constants/config';


function Main() {
	const [state, setState] = useState({
		isLoading: false,
		hasError: false,
		data: [],
	});
	const [modal, setModal] = React.useState({
		visible: false,
		content: null
	});

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

	useEffect(() => {
		getIngredients()
	}, [])



	const filterArray = (arr) => {
		return arr.reduce((acc, curr) =>
		({
			...acc, [curr.type]: [...acc[curr.type] || [], curr]
		}), {})
	}

	const ingredientsObj = filterArray(state.data);
	const { visible, content } = modal;

	return (
		<main className={cn(styles.main, 'p-10')}>
			{state.isLoading && 'Загрузка...'}
			{state.hasError && 'Произошла ошибка'}
			{!state.isLoading &&
				!state.hasError &&
				!!state.data.length &&
				<div className={styles.columns}>
					<BurgerIngredients bread={ingredientsObj.bun} sauces={ingredientsObj.sauce} fillings={ingredientsObj.main} setModal={setModal} />
					<BurgerConstructor setModal={setModal} />
				</div>
			}
			{visible && <Modal setModal={setModal}>{content}</Modal>}
		</main>
	);
}


export default Main;
