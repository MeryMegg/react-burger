import React, { useEffect } from 'react';
import cn from 'classnames';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import styles from './main.module.css';
//import { getProducts } from '../../utils/api';
import { getIngredients } from '../../services/actions/ingredients'
//import { ModalContext } from '../../services/modalContext';
//import { filterArray } from '../../utils/functions';
import { useSelector, useDispatch } from 'react-redux';


function Main() {
	const { visible, content } = useSelector(store => store.modal)

	const { burgerIngredients, isLoading, hasError, loaded } = useSelector(store => store.ingredients);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getIngredients())
	}, [dispatch])




	return (
		<main className={cn(styles.main, 'p-10')}>
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
		</main >
	);
}

export default Main;
