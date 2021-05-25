import React from 'react';
//import PropTypes from 'prop-types';
//import cn from 'classnames';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-item.module.css';
//import { useSelector, useDispatch } from 'react-redux';
//import { useDrag } from "react-dnd";

function BurgerItem({ item, deleteIngredient }) {
	return (
		<li className={styles.item}>
			<DragIcon type="primary" />
			<ConstructorElement
				text={item.name}
				price={item.price}
				thumbnail={item.image}
				handleClose={deleteIngredient}
			/>
		</li>
	)
}

export default BurgerItem;

// BurgerItem.propTypes = {
// 	item: PropTypes.shape({
// 		_id: PropTypes.string.isRequired,
// 		name: PropTypes.string.isRequired,
// 		type: PropTypes.string.isRequired,
// 		proteins: PropTypes.number.isRequired,
// 		fat: PropTypes.number.isRequired,
// 		carbohydrates: PropTypes.number.isRequired,
// 		calories: PropTypes.number.isRequired,
// 		price: PropTypes.number.isRequired,
// 		image: PropTypes.string.isRequired,
// 		image_mobile: PropTypes.string.isRequired,
// 		image_large: PropTypes.string.isRequired,
// 		__v: PropTypes.number,
// 	}).isRequired,
// 	renderModal: PropTypes.func.isRequired
// }


