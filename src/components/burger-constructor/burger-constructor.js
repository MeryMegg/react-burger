import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames';
import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import PriceItem from '../price-item/price-item';
import styles from './burger-constructor.module.css';
import { calculationCost } from '../../utils/functions';
import { createOrder } from '../../services/actions/ingredients';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_INGREDIENT } from '../../services/actions/ingredients'
import { OPEN_MODAL } from '../../services/actions/modal';




function BurgerConstructor() {
	const { bun, otherIngredients } = useSelector(store => store.ingredients.burgerIngredients);
	const dispatch = useDispatch();

	const handleClick = () => {
		const ingredientsId = otherIngredients.map(el => el._id)
		dispatch(createOrder([bun._id, ...ingredientsId]));
		dispatch({
			type: OPEN_MODAL,
			content: <OrderDetails />
		})
	}

	const deleteIngredient = (item) => {
		dispatch({
			type: DELETE_INGREDIENT,
			id: item._id
		})
	}

	return (
		<section className={cn(styles.container, 'pl-4')}>
			<div className={'mr-8'}>
				<ConstructorElement
					type="top"
					isLocked={true}
					text={`${bun.name} (верх)`}
					price={bun.price}
					thumbnail={bun.image}
				/>
			</div>

			<ul className={cn(styles.list, 'pr-4')}>
				{otherIngredients.map(el => (
					<li className={styles.item} key={uuidv4()} >
						<DragIcon type="primary" />
						<ConstructorElement
							text={el.name}
							price={el.price}
							thumbnail={el.image}
							handleClose={deleteIngredient}
						/>
					</li>
				))}
			</ul>
			<div className={'mr-8'}>
				<ConstructorElement
					type="bottom"
					isLocked={true}
					text={`${bun.name} (низ)`}
					price={bun.price}
					thumbnail={bun.image}
				/>
			</div>

			<div className={cn(styles.order, 'mt-10')}>
				<PriceItem price={calculationCost(bun, otherIngredients)} classMarg='mr-10' classText='text_type_digits-medium' />
				<Button type="primary" size="large" onClick={handleClick}>
					Оформить заказ
				</Button>
			</div>

		</section >
	)

}

export default BurgerConstructor;