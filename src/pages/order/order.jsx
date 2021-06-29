import React, { memo, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './order.module.css';
import { useParams, Redirect } from 'react-router-dom';
import PriceItem from '../../ui/price-item/price-item';
import { useSelector } from 'react-redux';
import bun01 from '../../images/bun-01.png';
import cheese from '../../images/cheese.png';
import core from '../../images/core.png';
import meat03 from '../../images/meat-03.png';
import sauce03 from '../../images/sauce-03.png';
import mineralRings from '../../images/mineral-rings.png';
import { useDispatch } from 'react-redux';
import { WS_CONNECTION_START } from '../../services/actions/ws-actions';
import Preloader from '../../components/preloader/preloader';

function Order() {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch({ type: WS_CONNECTION_START });
    },
    [dispatch]
  );

  const { id } = useParams();
  const { orders } = useSelector(store => store.ws.messages)
  //const { wsConnected } = useSelector(store => store.ws)
  const filterOrders = (arr, id) => {
    return arr?.filter((el) => el.number === Number(id))[0]
  }
  let order = {}
  order = filterOrders(orders, id) || null;

  console.log(order)
  const name = order?.name
  // if (wsConnected && !order) return <Redirect to='/' />;
  const status =
    order?.status === 'done'
      ? { text: 'Выполнен', textColor: 'green' }
      : order?.status === 'pending'
        ? { text: 'Отменен', textColor: 'yellow' }
        : { text: 'Готовится', textColor: 'white' };

  if (!order) {
    return <Preloader />;
  }

  return (

    <div className={styles.container}>
      <span className={cn('text text_type_digits-default')}>#{id}</span>
      <h1
        className={cn(
          'text text_type_main-medium',
          'mb-3',
          'mt-10',
          styles.title
        )}
      >
        {name || ''}
      </h1>
      <p
        className={cn(
          'text text_type_main-default',
          'mb-15',
          styles.status,
          styles[`status_color_${status.textColor}`]
        )}
      >
        {status.text}
      </p>
      <p className={cn('text text_type_main-medium', 'mb-6', styles.title)}>
        Состав:
      </p>
      <ul className={cn(styles.list, 'mb-10')}>
        <li className={cn(styles['list-item'], 'mr-6')}>
          <div className={cn(styles.icon, 'mr-4')}>
            <img src={bun01} alt='Вкусная булка' />
          </div>
          <p
            className={cn(
              styles.ingredient,
              'mr-4',
              'text text_type_main-default'
            )}
          >
            Флюоресцентная булка R2-D3
          </p>
          <span className={cn('mr-1', 'text text_type_digits-default')}>
            2 x{' '}
          </span>
          <PriceItem price={20} />
        </li>
        <li className={cn(styles['list-item'], 'mr-6')}>
          <div className={cn(styles.icon, 'mr-4')}>
            <img src={core} alt='Вкусная булка' />
          </div>
          <p
            className={cn(
              styles.ingredient,
              'mr-4',
              'text text_type_main-default'
            )}
          >
            Флюоресцентная булка R2-D3
          </p>
          <span className={cn('mr-1', 'text text_type_digits-default')}>
            1 x{' '}
          </span>
          <PriceItem price={300} />
        </li>
        <li className={cn(styles['list-item'], 'mr-6')}>
          <div className={cn(styles.icon, 'mr-4')}>
            <img src={meat03} alt='Вкусная булка' />
          </div>
          <p
            className={cn(
              styles.ingredient,
              'mr-4',
              'text text_type_main-default'
            )}
          >
            Флюоресцентная булка R2-D3
          </p>
          <span className={cn('mr-1', 'text text_type_digits-default')}>
            1 x{' '}
          </span>
          <PriceItem price={80} />
        </li>
        <li className={cn(styles['list-item'], 'mr-6')}>
          <div className={cn(styles.icon, 'mr-4')}>
            <img src={sauce03} alt='Вкусная булка' />
          </div>
          <p
            className={cn(
              styles.ingredient,
              'mr-4',
              'text text_type_main-default'
            )}
          >
            Флюоресцентная булка R2-D3
          </p>
          <span className={cn('mr-1', 'text text_type_digits-default')}>
            3 x{' '}
          </span>
          <PriceItem price={70} />
        </li>
        <li className={cn(styles['list-item'], 'mr-6')}>
          <div className={cn(styles.icon, 'mr-4')}>
            <img src={cheese} alt='Вкусная булка' />
          </div>
          <p
            className={cn(
              styles.ingredient,
              'mr-4',
              'text text_type_main-default'
            )}
          >
            Флюоресцентная булка R2-D3
          </p>
          <span className={cn('mr-1', 'text text_type_digits-default')}>
            1 x{' '}
          </span>
          <PriceItem price={200} />
        </li>
        <li className={cn(styles['list-item'], 'mr-6')}>
          <div className={cn(styles.icon, 'mr-4')}>
            <img src={mineralRings} alt='Вкусная булка' />
          </div>
          <p
            className={cn(
              styles.ingredient,
              'mr-4',
              'text text_type_main-default'
            )}
          >
            Флюоресцентная булка R2-D3
          </p>
          <span className={cn('mr-1', 'text text_type_digits-default')}>
            1 x{' '}
          </span>
          <PriceItem price={200} />
        </li>
      </ul>
      <div className={styles.info}>
        <span
          className={cn('text text_type_main-default text_color_inactive')}
        >
          Вчера, 13:50 i-GMT+3
        </span>
        <PriceItem price={540} />
      </div>
    </div>
  );
}

export default memo(Order);
