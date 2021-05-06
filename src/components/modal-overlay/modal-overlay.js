import React from 'react';
import cn from 'classnames';
import styles from './modal-overlay.module.css'

function ModalOverlay({ children }) {
	return (
		<div className={cn(styles.overlay, 'pr-10', 'pl-10')}>
			{children}
		</div>
	)
}

export default ModalOverlay;