//получаем объект с разбитием по ингредиентам
export const filterArray = (arr) => {
  return arr.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.type]: [...(acc[curr.type] || []), curr],
    }),
    {}
  );
};

//вычисляем стоимость заказа для главной страницы
export const calculationCost = (bun, arrOtherIngredients) => {
  const bunPrice = bun ? bun.price : 0;
  return (
    bunPrice * 2 +
    arrOtherIngredients.reduce((acc, curr) => (acc += curr.price), 0)
  );
};

//получить куки
export const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
      name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
      '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

//установить куки
export const setCookie = (name, value, props) => {
  props = {
    path: '/',
    ...props,
  };
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
};

//удалить куки
export const deleteCookie = (name) => {
  setCookie(name, null, { expires: -1 });
};

//получить дату создания заказа
const getDaysForCard = (days) => (
  days === 0 ? 'Сегодня'
    : days === 1 ? 'Вчера'
      : days > 1 ? `${days} дня(-ей) назад`
        : 'Что-то пошло не так:(');

//сформировать тату создания заказа для карточки
export const conversionDateForCard = (date) => {
  const dayCreated = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = Math.ceil((today - dayCreated) / (60 * 60 * 24 * 1000));
  const hours = dayCreated.getHours() > 9 ? dayCreated.getHours() : `0${dayCreated.getHours()}`
  const min = dayCreated.getMinutes() > 9 ? dayCreated.getMinutes() : `0${dayCreated.getMinutes()}`

  return `${getDaysForCard(diffTime)}, ${hours}:${min} i-GMT+${dayCreated.getTimezoneOffset() * (-1) / 60}`;
};

//сортировка заказов по статусу
export const filterOrdersByStatus = (arr) => {
  return arr?.reduce((acc, curr) => {
    curr.status === 'done' ? acc['done'] = [...acc['done'], curr] : acc['pending'] = [...acc['pending'], curr]
    return acc;
  }, { done: [], pending: [] })
}

//сформировать статус заказа
export const getStatus = status =>
  status === 'done'
    ? { text: 'Выполнен', textColor: 'green' }
    : status === 'pending'
      ? { text: 'Отменен', textColor: 'yellow' }
      : { text: 'Готовится', textColor: 'white' };

//найти текущий заказ
export const filterOrders = (arr, id) => {
  return arr?.filter((el) => el.number === Number(id))[0]
}

//получить стоимость бургера
export const getPrice = (arr) => arr?.reduce((acc, curr) => acc += curr.price, 0)

//получить ингредиенты бургера
export const getBurgerIngredients = (arr1, arr2) => (arr1?.map(el => el = (arr2.filter(item => item._id === el))))?.flat()

//получить объект со ингредиентами и их количеством
export const getBurgerIngredientsObjWithCount = (arr) => arr?.reduce((acc, curr) => {
  const id = curr._id
  acc.item[id] = curr;
  acc.count[id] = (acc.count[id] || 0) + 1
  return acc
}
  , { item: {}, count: {} })

