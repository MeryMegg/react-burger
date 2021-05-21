import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from '../ingredients/ingredients';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from './burger-ingredients.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CURRENT_BURGER, INCREASE_INGREDIENT, DECREASE_INGREDIENT } from '../../services/actions/ingredients';
import { OPEN_MODAL } from '../../services/actions/modal';

function BurgerIngredients() {
	const [current, setCurrent] = useState('bread');
	const dispatch = useDispatch();
	const { bun, sauce, main } = useSelector(store => store.ingredients.allIngredients);

	const renderModal = (item) => {
		dispatch({
			type: CURRENT_BURGER,
			item
		})
		dispatch({
			type: OPEN_MODAL,
			content: <IngredientDetails />
		})
	}

	useEffect(() => {
		document.querySelector(`#${current}`).scrollIntoView();
	}, [current])

	return (
		<section>
			<h1 className={cn('text', 'text_type_main-large', 'mb-5')}>Соберите бургер</h1>
			<div className={cn('text', 'text_type_main-default', 'mb-10', styles.menu)}>
				<Tab value='bread' active={current === 'bread'} onClick={setCurrent}>
					Булки
        </Tab>
				<Tab value='sauces' active={current === 'sauces'} onClick={setCurrent}>
					Соусы
          </Tab>
				<Tab value='fillings' active={current === 'fillings'} onClick={setCurrent}>
					Начинки
          </Tab>
			</div>

			<section className={cn(styles.container)}>
				<Ingredients title='Булки' array={bun} id="bread" renderModal={renderModal} />
				<Ingredients title='Соусы' array={sauce} id='sauces' renderModal={renderModal} />
				<Ingredients title='Начинки' array={main} id='fillings' renderModal={renderModal} />
			</section>
		</section>
	)
}

export default BurgerIngredients;