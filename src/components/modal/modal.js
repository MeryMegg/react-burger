import React from 'react';
import cn from 'classnames';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css'

function Modal() {
	return (
		<ModalOverlay>
			<div className={cn(styles.popup, 'p-10')}>
				<span className={cn(styles.popup__close, 'p-10')}>
					<CloseIcon type="primary" />
				</span>
				<h1>Я модальное окно</h1>
			</div>
		</ModalOverlay>
	)
}

export default Modal;