import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from '../ingredients/ingredients';
import styles from './burger-ingredients.module.css'

function BurgerIngredients({ bread, fillings, sauces }) {
	const [current, setCurrent] = useState('bread')

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
				<Ingredients title='Булки' array={bread} id="bread" />
				<Ingredients title='Соусы' array={sauces} id='sauces' />
				<Ingredients title='Начинки' array={fillings} id='fillings' />
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
}

export default BurgerIngredients;