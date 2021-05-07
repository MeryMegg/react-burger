import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css'

function Modal({ children, setModal }) {

	const closeEsc = (evn) => {
		if (evn.keyCode === 27)
			close();
	}

	const close = () => {
		setModal({
			isShow: false,
			content: null,
		})
	}

	React.useEffect(() => {
		window.addEventListener('keydown', closeEsc)
		return () => {
			window.removeEventListener('keydown', closeEsc)
		}
	})

	return ReactDOM.createPortal((
		<>
			<div className={cn(styles.popup, 'pr-10', 'pl-10', 'pt-15', 'pb-15')}>
				<span className={cn(styles.popup__close)} onClick={close}>
					<CloseIcon type="primary" />
				</span>
				<div>
					{children}
				</div>

			</div>
			<ModalOverlay close={close} />
		</>
	),
		document.querySelector('#react-modals')
	)
}

Modal.propTypes = {
	children: PropTypes.element
}

export default Modal;