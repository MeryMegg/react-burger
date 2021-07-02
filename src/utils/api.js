import { ServerConfig } from '../constants/config';
import { getCookie, setCookie, deleteCookie } from './functions';

export const getProductsRequest = () => {
  return fetch(`${ServerConfig.baseUrl}/ingredients`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: ServerConfig.headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((res) => requestHandler(res));
};

export const getUserRequest = () => {
  return fetchWithRefreshToken(`${ServerConfig.baseUrl}/auth/user`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      ...ServerConfig.headers,
      Authorization: 'Bearer ' + getCookie('token'),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
};

// export const addOrdersRequest = (ingredients) => {
//   return fetch(`${ServerConfig.baseUrl}/orders`, {
//     method: 'POST',
//     mode: 'cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//       ...ServerConfig.headers,
//       Authorization: 'Bearer ' + getCookie('token'),
//     },
//     body: JSON.stringify({ ingredients }),
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//   }).then((res) => requestHandler(res));
// };

export const addOrdersRequest = (ingredients) => {
  return fetchWithRefreshToken(`${ServerConfig.baseUrl}/orders`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      ...ServerConfig.headers,
      Authorization: 'Bearer ' + getCookie('token'),
    },
    body: JSON.stringify({ ingredients }),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
};

export const signUpRequest = ({ email, password, name }) => {
  return fetch(`${ServerConfig.baseUrl}/auth/register`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: ServerConfig.headers,
    body: JSON.stringify({ email, password, name }),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((res) => requestHandler(res));
};

export const signInRequest = ({ login, password }) => {
  return fetch(`${ServerConfig.baseUrl}/auth/login`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: ServerConfig.headers,
    body: JSON.stringify({ email: login, password }),
  }).then((res) => requestHandler(res));
};

export const forgotPasswordRequest = (email) => {
  return fetch(`${ServerConfig.baseUrl}/password-reset`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: ServerConfig.headers,
    body: JSON.stringify({ email }),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((res) => requestHandler(res));
};

export const resetPasswordRequest = ({ password, token }) => {
  return fetch(`${ServerConfig.baseUrl}/password-reset/reset`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: ServerConfig.headers,
    body: JSON.stringify({ password, token }),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((res) => requestHandler(res));
};

export const signOutRequest = () => {
  return fetch(`${ServerConfig.baseUrl}/auth/logout`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: ServerConfig.headers,
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((res) => requestHandler(res));
};

export const updateUserRequest = (data) => {
  return fetchWithRefreshToken(`${ServerConfig.baseUrl}/auth/user`, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      ...ServerConfig.headers,
      Authorization: 'Bearer ' + getCookie('token'),
    },
    body: JSON.stringify(data),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
};

export const refreshTokenRequest = () => {
  return fetch(`${ServerConfig.baseUrl}/auth/token`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: ServerConfig.headers,
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  }).then((res) => requestHandler(res));
};

const fetchWithRefreshToken = (url, options) => {
  return fetch(url, options).then((res) => requestHandler(res))
    .catch((res) => {
      return res.json()
        .then(err => {
          if (err.message === 'jwt expired') {
            return refreshTokenRequest()
              .then(res => {
                localStorage.setItem('refreshToken', res.refreshToken)
                const authToken = res.accessToken.split('Bearer ')[1];
                setCookie('token', authToken);
                options.headers.Authorization = res.accessToken
                return fetch(url, options).then((res) => requestHandler(res))
              })
          } else {
            deleteCookie('token');
            localStorage.removeItem('refreshToken');
            // eslint-disable-next-line
            location.reload()
            return Promise.reject(err)
          }
        })
    })
}

const requestHandler = (res) => {
  return res.ok ? res.json() : Promise.reject(res)
};
