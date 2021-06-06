import React from 'react';
import cn from 'classnames';
import styles from './order.module.css';
import PriceItem from '../../ui/price-item/price-item';

import bun01 from '../../images/bun-01.png';
//import bun02 from '../../images/bun-02.png';
import cheese from '../../images/cheese.png';
import core from '../../images/core.png';
//import meat01 from '../../images/meat-01.png';
//import meat02 from '../../images/meat-02.png';
import meat03 from '../../images/meat-03.png';
//import meat04 from '../../images/meat-04.png';
//import salad from '../../images/salad.png';
// import sp01 from '../../images/sp-01.png';
// import sauce01 from '../../images/sauce-01.png';
// import sauce02 from '../../images/sauce-02.png';
import sauce03 from '../../images/sauce-03.png';
// import sauce04 from '../../images/sauce-04.png';
import mineralRings from '../../images/mineral-rings.png';

function Order() {
	return (
		<div className={styles.container}>
			<div>
				<span className={cn("text text_type_digits-default")}>#034533</span>
				<h1 className={cn("text text_type_main-medium", 'mb-3', 'mt-10', styles.title)}>Название бургера</h1>
				<p className={cn("text text_type_main-default", 'mb-15', styles.status)}>Выполнен</p>
				<p className={cn("text text_type_main-medium", 'mb-6', styles.title)}>Состав:</p>
				<ul className={cn(styles.list, 'mb-10')}>
					<li className={cn(styles['list-item'], 'mr-6')}>
						<div className={cn(styles.icon, 'mr-4')}>
							<img src={bun01} alt='Вкусная булка' />
						</div>
						<p className={cn(styles.ingredient, 'mr-4', "text text_type_main-default")}>Флюоресцентная булка R2-D3</p>
						<span className={cn('mr-1', 'text text_type_digits-default')}>2 x </span>
						<PriceItem price={20} />
					</li>
					<li className={cn(styles['list-item'], 'mr-6')}>
						<div className={cn(styles.icon, 'mr-4')}>
							<img src={core} alt='Вкусная булка' />
						</div>
						<p className={cn(styles.ingredient, 'mr-4', "text text_type_main-default")}>Флюоресцентная булка R2-D3</p>
						<span className={cn('mr-1', 'text text_type_digits-default')}>1 x </span>
						<PriceItem price={300} />
					</li>
					<li className={cn(styles['list-item'], 'mr-6')}>
						<div className={cn(styles.icon, 'mr-4')}>
							<img src={meat03} alt='Вкусная булка' />
						</div>
						<p className={cn(styles.ingredient, 'mr-4', "text text_type_main-default")}>Флюоресцентная булка R2-D3</p>
						<span className={cn('mr-1', 'text text_type_digits-default')}>1 x </span>
						<PriceItem price={80} />
					</li>
					<li className={cn(styles['list-item'], 'mr-6')}>
						<div className={cn(styles.icon, 'mr-4')}>
							<img src={sauce03} alt='Вкусная булка' />
						</div>
						<p className={cn(styles.ingredient, 'mr-4', "text text_type_main-default")}>Флюоресцентная булка R2-D3</p>
						<span className={cn('mr-1', 'text text_type_digits-default')}>3 x </span>
						<PriceItem price={70} />
					</li>
					<li className={cn(styles['list-item'], 'mr-6')}>
						<div className={cn(styles.icon, 'mr-4')}>
							<img src={cheese} alt='Вкусная булка' />
						</div>
						<p className={cn(styles.ingredient, 'mr-4', "text text_type_main-default")}>Флюоресцентная булка R2-D3</p>
						<span className={cn('mr-1', 'text text_type_digits-default')}>1 x </span>
						<PriceItem price={200} />
					</li>
					<li className={cn(styles['list-item'], 'mr-6')}>
						<div className={cn(styles.icon, 'mr-4')}>
							<img src={mineralRings} alt='Вкусная булка' />
						</div>
						<p className={cn(styles.ingredient, 'mr-4', "text text_type_main-default")}>Флюоресцентная булка R2-D3</p>
						<span className={cn('mr-1', 'text text_type_digits-default')}>1 x </span>
						<PriceItem price={200} />
					</li>
				</ul>
				<div className={styles.info}>
					<span className={cn("text text_type_main-default text_color_inactive")}>Вчера, 13:50 i-GMT+3</span>
					<PriceItem price={540} />
				</div>

			</div>
		</div >
	);
}

export default Order;
