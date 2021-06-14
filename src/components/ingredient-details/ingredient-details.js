import React, { memo, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './ingredient-details.module.css';
import { getProductsRequest } from '../../utils/api';
import { useParams } from "react-router-dom";

function IngredientDetails() {
  const [state, setCurrentBurger] = useState({
    image: '',
    name: '',
    calories: '',
    proteins: '',
    fat: '',
    carbohydrates: '',
  }
  )

  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    getProductsRequest().then(res => {
      console.log(res);
      const currentBurger = res.data.find((el) => el._id === id)
      setCurrentBurger({
        image: currentBurger.image,
        name: currentBurger.name,
        calories: currentBurger.calories,
        proteins: currentBurger.proteins,
        fat: currentBurger.fat,
        carbohydrates: currentBurger.carbohydrates,
      })
    })
  }, [id]);

  const { image, name, calories, proteins, fat, carbohydrates } = state;

  return (
    <div className={cn(styles.content)}>
      <h1
        className={cn(
          styles.content__title,
          'text',
          'text_type_main-large',
          'mb-5'
        )}
      >
        Детали ингредиента
      </h1>
      <div className={cn(styles.content__product, 'pr-15', 'pl-15')}>
        <img src={image} alt='иконка' className={cn(styles.content__image)} />
        <h2
          className={cn(
            styles.content__text,
            'text',
            'text_type_main-medium',
            'mt-4'
          )}
        >
          {' '}
          {name}
        </h2>
        <p
          className={cn(
            styles.content__text,
            'text',
            'text_type_main-default',
            'mt-8',
            'mb-8'
          )}
        >
          Здесь будет описание
        </p>
        <ul className={cn(styles.list)}>
          <li
            className={cn(
              styles.list__item,
              'text',
              'text_type_main-default',
              'text_color_inactive'
            )}
          >
            <p className={cn(styles['list__item-text'])}>Калории, ккал</p>
            <span className={cn('mt-2', 'text_type_digits-default')}>
              {calories}
            </span>
          </li>
          <li
            className={cn(
              styles.list__item,
              'text',
              'text_type_main-default',
              'text_color_inactive'
            )}
          >
            <p className={cn(styles['list__item-text'])}>Белки, г</p>
            <span className={cn('mt-2', 'text_type_digits-default')}>
              {proteins}
            </span>
          </li>
          <li
            className={cn(
              styles.list__item,
              'text',
              'text_type_main-default',
              'text_color_inactive'
            )}
          >
            <p className={cn(styles['list__item-text'])}>Жиры, г</p>
            <span className={cn('mt-2', 'text_type_digits-default')}>
              {fat}
            </span>
          </li>
          <li
            className={cn(
              styles.list__item,
              'text',
              'text_type_main-default',
              'text_color_inactive'
            )}
          >
            <p className={cn(styles['list__item-text'])}>Углеводы, г</p>
            <span className={cn('mt-2', 'text_type_digits-default')}>
              {carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(IngredientDetails);
