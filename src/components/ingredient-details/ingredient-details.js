import React from 'react';
import cn from 'classnames';
import Modal from '../modal/modal';
import styles from './ingredient-details.module.css';

function IngredientDetails(props) {

	const img = "https://code.s3.yandex.net/react/code/meat-01-large.png"
	return (
		<Modal>
			<div className={cn(styles.content)}>
				<h1 className={cn(styles.content__title, 'text', 'text_type_main-large', 'mb-5')}>Детали ингредиента</h1>
				<div className={cn(styles.content__product, 'pr-15', 'pl-15')}>
					<img src={img} alt='иконка' className={cn(styles.content__image)} />
					<h2 className={cn(styles.content__text, 'text', 'text_type_main-medium', 'mt-4')} > Биокотлета из марсианской Магнолии</h2>
					<p className={cn(styles.content__text, 'text', 'text_type_main-default', 'mt-8', 'mb-8')} > Превосходные котлеты из марсианской Магнолии
для фирменных космических бургеров, набирающих популярность по всей вселенной.</p>
					<ul className={cn(styles.list)}>
						<li className={cn(styles.list__item, 'text', 'text_type_main-default', 'text_color_inactive')}>
							<p className={cn(styles['list__item-text'])}>Калории, ккал</p>
							<span className={cn('mt-2', 'text_type_digits-default')}>244,4</span>
						</li>
						<li className={cn(styles.list__item, 'text', 'text_type_main-default', 'text_color_inactive')}>
							<p className={cn(styles['list__item-text'])}>Белки, г</p>
							<span className={cn('mt-2', 'text_type_digits-default')}>12,2</span>
						</li>
						<li className={cn(styles.list__item, 'text', 'text_type_main-default', 'text_color_inactive')}>
							<p className={cn(styles['list__item-text'])}>Жиры, г</p>
							<span className={cn('mt-2', 'text_type_digits-default')}>17,2</span>
						</li>
						<li className={cn(styles.list__item, 'text', 'text_type_main-default', 'text_color_inactive')}>
							<p className={cn(styles['list__item-text'])}>Углеводы, г</p>
							<span className={cn('mt-2', 'text_type_digits-default')}>10,2</span>
						</li>
					</ul>
				</div>
			</div>
		</Modal>

	);
}

export default IngredientDetails;
