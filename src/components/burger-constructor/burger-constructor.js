import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import PriceItem from '../price-item/price-item';
import styles from './burger-constructor.module.css';
import { ModalContext } from '../../services/modalContext';


function BurgerConstructor({ bread, fillings, sauces }) {
	const img = "https://code.s3.yandex.net/react/code/bun-02.png"
	const { setModal } = useContext(ModalContext);

	const handleClick = () => {
		setModal({
			visible: true,
			content: <OrderDetails />
		})
	}

	return (
		<section className={cn(styles.container, 'pl-4')}>
			<div className={'mr-8'}>
				<ConstructorElement
					type="top"
					isLocked={true}
					text="Краторная булка N-200i (верх)"
					price={200}
					thumbnail={img}
				/>
			</div>

			<ul className={cn(styles.list, 'pr-4')}>
				<li className={styles.item}>
					<DragIcon type="primary" />
					<ConstructorElement
						text="Краторная булка N-200i (верх)"
						price={50}
						thumbnail={img}
					/>
				</li>
				<li className={styles.item}>
					<DragIcon type="primary" />
					<ConstructorElement
						text="Краторная булка N-200i (верх)"
						price={50}
						thumbnail={img}
					/>
				</li>
				<li className={styles.item}>
					<DragIcon type="primary" />
					<ConstructorElement
						text="Краторная булка N-200i (верх)"
						price={50}
						thumbnail={img}
					/>
				</li>
				<li className={styles.item}>
					<DragIcon type="primary" />
					<ConstructorElement
						text="Краторная булка N-200i (верх)"
						price={50}
						thumbnail={img}
					/>
				</li>
				<li className={styles.item}>
					<DragIcon type="primary" />
					<ConstructorElement
						text="Краторная булка N-200i (верх)"
						price={50}
						thumbnail={img}
					/>
				</li>
				<li className={styles.item}>
					<DragIcon type="primary" />
					<ConstructorElement
						text="Краторная булка N-200i (верх)"
						price={50}
						thumbnail={img}
					/>
				</li>
				<li className={styles.item}>
					<DragIcon type="primary" />
					<ConstructorElement
						text="Краторная булка N-200i (верх)"
						price={50}
						thumbnail={img}
					/>
				</li>
			</ul>
			<div className={'mr-8'}>
				<ConstructorElement
					type="bottom"
					isLocked={true}
					text="Краторная булка N-200i (низ)"
					price={200}
					thumbnail={img}
				/>
			</div>

			<div className={cn(styles.order, 'mt-10')}>
				<PriceItem price={610} classMarg='mr-10' classText='text_type_digits-medium' />
				<Button type="primary" size="large" onClick={handleClick}>
					Оформить заказ
				</Button>
			</div>

		</section>
	)

}

BurgerConstructor.propTypes = {
	setModal: PropTypes.func.isRequired
}

export default BurgerConstructor;