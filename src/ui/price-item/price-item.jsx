import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './price-item.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function PriceItem({ price, classMarg }) {
  return (
    <span className={cn(styles['element-price'], 'text', [classMarg])}>
      {price}
      <CurrencyIcon type='primary' />
    </span>
  );
}

PriceItem.propTypes = {
  price: PropTypes.number,
  classMarg: PropTypes.string,
};

export default PriceItem;
