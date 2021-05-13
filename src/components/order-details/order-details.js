import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './order-details.module.css';
import checkIcon from '../../images/check.svg'

function OrderDetails({ number }) {
	return (
		<div className={cn(styles.order, 'p-15')}>
			<h1 className={cn(styles.order__title, 'text', 'text_type_digits-large', 'mb-8')}>{number}</h1>
			<p className={cn(styles.order__text, 'text', 'text_type_main-medium')} > идентификатор заказа</p>
			<img src={checkIcon} alt='иконка' className={cn(styles.order__image, 'mt-15', 'mb-15')} />
			<p className={cn(styles.order__text, 'text', 'text_type_main-default', 'mb-2')} > Ваш заказ начали готовить</p>
			<p className={cn(styles.order__text, 'text', 'text_type_main-default', 'text_color_inactive')} > Дождитесь готовности на орбитальной станции</p>
		</div>
	);
}

OrderDetails.propTypes = {
	number: PropTypes.string.isRequired
}

export default OrderDetails;
