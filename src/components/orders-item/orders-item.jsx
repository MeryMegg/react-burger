import React from 'react';
import cn from 'classnames';
import PriceItem from '../../ui/price-item/price-item';
import styles from './orders-item.module.css';
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


function OrdersItem() {
	return (
		<div className={cn(styles['orders-item'], 'p-6')}>
			<div className={cn(styles['orders-info'])}>
				<span className="text text_type_digits-default">#034535</span>
				<span className={"text text_type_main-default text_color_inactive"}>Сегодня, 16:20 i-GMT+3</span>
			</div>
			<h2 className="text text_type_main-medium">Название бургера</h2>
			<div className={cn(styles['orders-info'])}>
				<ul className={cn(styles.list)}>
					<li className={styles['list-item']}
						style={{ zIndex: 5 }}>
						<div className={cn(styles.icon)}>
							<img src={bun01} alt='Вкусная булка' />
						</div>
					</li>
					<li className={styles['list-item']}
						style={{ zIndex: 4 }}>
						<div className={styles.icon}>
							<img src={meat03} alt='Вкусная булка' />
						</div>
					</li>
					<li className={styles['list-item']} style={{ zIndex: 3 }}>
						<div className={styles.icon}>
							<img src={core} alt='Вкусная булка' />
						</div>
					</li>
					<li className={styles['list-item']} style={{ zIndex: 2 }}>
						<div className={styles.icon}>
							<img src={mineralRings} alt='Вкусная булка' />
						</div>
					</li>
					<li className={styles['list-item']} style={{ zIndex: 1 }}>
						<div className={styles.icon}>
							<img src={sauce03} alt='Вкусная булка' />
						</div>
					</li>
					<li className={styles['list-item']} style={{}}>
						<div className={styles.icon}>
							<img src={cheese} alt='Вкусная булка' />
						</div>
						<div className={styles.overlay}>
							<span>+3</span>
						</div>
					</li>
				</ul>
				<PriceItem price={480} />
			</div>
		</div>
	)
}

export default OrdersItem;