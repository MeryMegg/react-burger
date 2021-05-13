import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import styles from './main.module.css';
import { getProducts } from '../../utils/api';
import { IngredientsContext } from '../../services/ingredientsContext';
import { ModalContext } from '../../services/modalContext';
import { filterArray } from '../../utils/functions';


function Main() {
	const [state, setState] = useState({
		isLoading: false,
		hasError: false,
		loaded: false,
		allIngredients: {},
		burgerIngredients: {}
	});
	const [modal, setModal] = useState({
		visible: false,
		content: null
	});

	const getIngredients = () => {
		setState({ ...state, hasError: false, isLoading: true });
		getProducts()
			.then((data) => {
				const ingredientsObj = filterArray(data.data);
				const burgerIngredients = {
					bun: ingredientsObj.bun[0],
					otherIngredients: [ingredientsObj.sauce[1],
					ingredientsObj.main[0],
					ingredientsObj.sauce[2],
					ingredientsObj.main[1],
					ingredientsObj.sauce[3],
					ingredientsObj.main[2],
					ingredientsObj.sauce[1]
					]
				}
				setState({ ...state, allIngredients: ingredientsObj, burgerIngredients: burgerIngredients, isLoading: false, loaded: true })
			})
			.catch((err) => {
				setState({ ...state, hasError: true, isLoading: false });
			})
	}

	useEffect(() => {
		getIngredients()
	}, [])


	const { visible, content } = modal;

	return (
		<main className={cn(styles.main, 'p-10')}>
			<ModalContext.Provider value={{ modal, setModal }}>
				<IngredientsContext.Provider value={{ state, setState }}>
					{state.isLoading && 'Загрузка...'}
					{state.hasError && 'Произошла ошибка'}
					{!state.isLoading &&
						!state.hasError &&
						!!state.loaded &&
						<div className={styles.columns}>
							<BurgerIngredients />
							<BurgerConstructor />
						</div>
					}
					{visible && <Modal >{content}</Modal>}
				</IngredientsContext.Provider>
			</ModalContext.Provider >
		</main >
	);
}

export default Main;
