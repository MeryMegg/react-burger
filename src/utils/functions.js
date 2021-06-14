export const filterArray = (arr) => {
  return arr.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.type]: [...(acc[curr.type] || []), curr],
    }),
    {}
  );
};

export const calculationCost = (bun, arrOtherIngredients) => {
  const bunPrice = bun ? bun.price : 0;
  return (
    bunPrice * 2 +
    arrOtherIngredients.reduce((acc, curr) => (acc += curr.price), 0)
  );
};

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

export const setCookie = (name, value, props) => {
  props = props || {};
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

export const deleteCookie = (name) => {
  setCookie(name, null, { expires: -1 });
};
