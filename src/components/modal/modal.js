import React from 'react';
import cn from 'classnames';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css'

function Modal({ children }) {
	return (
		<ModalOverlay>
			<div className={cn(styles.popup, 'pr-10', 'pl-10', 'pt-15', 'pb-15')}>
				<span className={cn(styles.popup__close)}>
					<CloseIcon type="primary" />
				</span>
				{children}
			</div>
		</ModalOverlay>
	)
}

export default Modal;