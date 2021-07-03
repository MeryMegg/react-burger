import React, { FC } from 'react';
import cn from 'classnames';
import styles from './price-item.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TProps } from './types';


const PriceItem: FC<TProps> = ({ price, classMarg }) => {
  return (
    <span className={cn(styles['element-price'], 'text', [classMarg])}>
      {price}
      <CurrencyIcon type='primary' />
    </span>
  );
}

export default PriceItem;
