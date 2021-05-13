import React, { useState, useEffect, useContext } from 'react';
import cn from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from '../ingredients/ingredients';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from './burger-ingredients.module.css'
import { ModalContext } from '../../services/modalContext';
import { IngredientsContext } from '../../services/ingredientsContext';

function BurgerIngredients() {
	const [current, setCurrent] = useState('bread')
	const { setModal } = useContext(ModalContext);
	const { state } = useContext(IngredientsContext);
	const { bun, sauce, main } = state.allIngredients;


	const renderModal = (item) => {
		setModal({
			visible: true,
			content: <IngredientDetails
				image={item.image}
				name={item.name}
				description={'Превосходные котлеты из марсианской Магнолии для фирменных космических бургеров, набирающих популярность по всей вселенной.'}
				calories={item.calories}
				proteins={item.proteins}
				fat={item.fat}
				carbohydrates={item.carbohydrates}
			/>
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