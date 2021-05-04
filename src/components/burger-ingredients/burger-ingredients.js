import React, { useState } from 'react';
import cn from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from '../ingredients/ingredients';
import styles from './burger-ingredients.module.css'

function BurgerIngredients({ bread, fillings, sauces }) {
	const [current, setCurrent] = useState('Булки')
	return (
		<section>
			<h1 className={cn('text', 'text_type_main-large', 'mb-5')}>Соберите бургер</h1>
			<div className={cn('text', 'text_type_main-default', 'mb-10', styles.menu)}>
				<Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
					Булки
        </Tab>
				<Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
					Соусы
          </Tab>
				<Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
					Начинки
          </Tab>
			</div>

			<section className={cn(styles.container)}>
				<Ingredients title='Булки' array={bread} />
				<Ingredients title='Соусы' array={sauces} />
				<Ingredients title='Начинки' array={fillings} />
			</section>
		</section>
	)
}

export default BurgerIngredients;