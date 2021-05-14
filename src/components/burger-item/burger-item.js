import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-item.module.css';
import { IngredientsContext } from '../../services/ingredientsContext';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function BurgerItem({ item, renderModal }) {

	const { state, setState } = useContext(IngredientsContext);

	const card = {
		image: item.image_large,
		name: item.name,
		calories: item.calories,
		fat: item.fat,
		carbohydrates: item.carbohydrates,
		proteins: item.proteins,
		price: item.price,
		_id: item._id,
	}

	const handleClick = () => {
		item.type === 'bun' ?
			setState({
				...state,
				burgerIngredients: {
					...state.burgerIngredients,
					bun: item
				}
			}) :
			setState({
				...state,
				burgerIngredients: {
					...state.burgerIngredients,
					otherIngredients: [...state.burgerIngredients.otherIngredients, item]
				}
			})
		renderModal(card)
	}

	return (
		<li className={cn(styles.card)} onClick={handleClick}>
			<img className={cn(styles.image, 'mb-1')} src={item.image_large} alt={item.name} />
			<Counter count={1} size='small' />
			<PriceItem price={item.price} classMarg='mr-1' />
			<p className={cn('text text_type_main-default', styles.container__description)}>{item.name}</p>
		</li>
	)
}

BurgerItem.propTypes = {
	item: PropTypes.shape({
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
	}).isRequired,
	renderModal: PropTypes.func.isRequired
}

export default BurgerItem;