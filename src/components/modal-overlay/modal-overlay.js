import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './modal-overlay.module.css'

function ModalOverlay({ children, close }) {
	return (
		<div className={cn(styles.overlay)} onClick={close}>
			{children}
		</div>
	)
}

ModalOverlay.propTypes = {
	children: PropTypes.element
}

export default ModalOverlay;