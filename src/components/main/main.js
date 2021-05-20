import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import styles from './main.module.css';
//import { getProducts } from '../../utils/api';
import { getIngredients } from '../../services/actions/ingredients'
import { ModalContext } from '../../services/modalContext';
//import { filterArray } from '../../utils/functions';
import { useSelector, useDispatch } from 'react-redux';


function Main() {
	// const [state, setState] = useState({
	// 	isLoading: false,
	// 	hasError: false,
	// 	loaded: false,
	// 	allIngredients: {},
	// 	burgerIngredients: {
	// 		bun: null,
	// 		otherIngredients: []
	// 	}
	// });
	const [modal, setModal] = useState({
		visible: false,
		content: null
	});

	const { burgerIngredients, isLoading, hasError, loaded } = useSelector(store => store.ingredients);

	const dispatch = useDispatch();

	// const getIngredients = () => {
	// 	setState({ ...state, hasError: false, isLoading: true });
	// 	getProducts()
	// 		.then((data) => {
	// 			const ingredientsObj = filterArray(data.data);
	// 			setState({ ...state, allIngredients: ingredientsObj, isLoading: false, loaded: true })
	// 		})
	// 		.catch((err) => {
	// 			setState({ ...state, hasError: true, isLoading: false });
	// 		})
	// }

	useEffect(() => {
		dispatch(getIngredients())
	}, [dispatch])


	const { visible, content } = modal;

	return (
		<main className={cn(styles.main, 'p-10')}>
			<ModalContext.Provider value={{ modal, setModal }}>
				{isLoading && 'Загрузка...'}
				{hasError && 'Произошла ошибка'}
				{!isLoading &&
					!hasError &&
					loaded &&
					<div className={styles.columns}>
						<BurgerIngredients />
						{burgerIngredients.bun && <BurgerConstructor />}
					</div>
				}
				{visible && <Modal >{content}</Modal>}
			</ModalContext.Provider >
		</main >
	);
}

export default Main;
