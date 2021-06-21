import React, { useEffect, memo } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import styles from './main.module.css';
import { getIngredients } from '../../services/actions/ingredients';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  ADD_INGREDIENTS,
  INCREASE_INGREDIENT,
} from '../../services/actions/ingredients';
import Preloader from '../../components/preloader/preloader';

function Main() {
  //const { visible, content } = useSelector((store) => store.modal);

  const { isLoading, hasError, loaded } = useSelector(
    (store) => store.ingredients
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loaded) {
      dispatch(getIngredients());
    }
  }, [dispatch]);

  const handleDrop = (item) => {
    const newItem = { ...item, productId: uuidv4() };
    dispatch({
      type: ADD_INGREDIENTS,
      item: newItem
    });
    dispatch({
      type: INCREASE_INGREDIENT,
      key: item._id,
      typeItem: item.type,
    });
  };

  return (
    <main className={cn(styles.main, 'p-10')}>
      {isLoading && <Preloader />}
      {hasError && 'Произошла ошибка'}
      {!isLoading && !hasError && loaded && (
        <DndProvider backend={HTML5Backend}>
          <div className={styles.columns}>
            <BurgerIngredients />
            <BurgerConstructor onDropHandler={handleDrop} />
          </div>
        </DndProvider>
      )}
    </main>
  );
}

export default memo(Main);
