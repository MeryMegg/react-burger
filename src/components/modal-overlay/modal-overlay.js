import React from 'react';
import cn from 'classnames';
import styles from './modal-overlay.module.css'

function ModalOverlay({ children }) {
	return (
		<div className={cn(styles.overlay)}>
			{children}
		</div>
	)
}

export default ModalOverlay;