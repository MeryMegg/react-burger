import React from 'react';
import cn from 'classnames';
import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-constructor.module.css';

function BurgerConstructor() {
	const img = "https://code.s3.yandex.net/react/code/bun-02.png"

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
				<PriceItem price={'610'} classMarg='mr-10' classText='text_type_digits-medium' />
				<Button type="primary" size="large">
					Оформить заказ
				</Button>
			</div>

		</section>
	)

}

export default BurgerConstructor;