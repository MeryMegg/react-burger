import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from '../ingredients/ingredients';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from './burger-ingredients.module.css'

function BurgerIngredients({ bread, fillings, sauces, setModal }) {
	const [current, setCurrent] = useState('bread')

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
				<Ingredients title='Булки' array={bread} id="bread" renderModal={renderModal} />
				<Ingredients title='Соусы' array={sauces} id='sauces' renderModal={renderModal} />
				<Ingredients title='Начинки' array={fillings} id='fillings' renderModal={renderModal} />
			</section>
		</section>
	)
}

BurgerIngredients.propTypes = {
	bread: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
		calories: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		image_mobile: PropTypes.string.isRequired,
		image_large: PropTypes.string.isRequired,
		__v: PropTypes.number,
	})).isRequired,

	fillings: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
		calories: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		image_mobile: PropTypes.string.isRequired,
		image_large: PropTypes.string.isRequired,
		__v: PropTypes.number,
	})).isRequired,

	sauces: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
		calories: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		image_mobile: PropTypes.string.isRequired,
		image_large: PropTypes.string.isRequired,
		__v: PropTypes.number,
	})).isRequired,
	setModal: PropTypes.func.isRequired
}

export default BurgerIngredients;