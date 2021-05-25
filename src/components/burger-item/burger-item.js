import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-item.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";


function BurgerItem({ item, renderModal }) {

	const [{ isDrag }, dragRef] = useDrag({
		type: "ingredient",
		item,
		collect: monitor => ({
			isDrag: monitor.isDragging()
		})
	});

	const { counts, bun } = useSelector(store => store.ingredients.burgerIngredients);
	const dispatch = useDispatch();
	const isBun = item.type === 'bun'
	//const type = isBun ? ADD_BUN : ADD_FILLINGS
	const count = isBun && bun && bun._id === item._id ? 2 : counts[item._id] && counts[item._id]


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
		renderModal(card)
	}

	const opacity = isDrag ? 0.3 : 1;

	return (
		<li className={cn(styles.card)} onClick={handleClick} ref={dragRef} style={{ opacity }}>
			<img className={cn(styles.image, 'mb-1')} src={item.image_large} alt={item.name} />
			{	count ?
				<Counter count={count} size='small' /> : null}
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