import React, { useEffect, FC } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';
import { useHistory } from "react-router-dom";

const modalRoot: Element | null = document.querySelector('#react-modals');

const Modal: FC = ({ children }) => {
  const history = useHistory();

  const closeEsc = (evn: KeyboardEvent) => {
    if (evn.code === 'Escape') close();
  };

  const close = () => {
    history.goBack();
  };

  useEffect(() => {
    window.addEventListener('keydown', closeEsc);
    return () => {
      window.removeEventListener('keydown', closeEsc);
    };
  });

  return modalRoot && ReactDOM.createPortal(
    <>
      <div className={cn(styles.popup, 'pr-10', 'pl-10', 'pt-15', 'pb-15')}>
        <span className={cn(styles.popup__close)} onClick={close}>
          <CloseIcon type='primary' />
        </span>
        <div>{children}</div>
      </div>
      <ModalOverlay close={close} />
    </>,
    modalRoot,
  );
}

export default Modal;
