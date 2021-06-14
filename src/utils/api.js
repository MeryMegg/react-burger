import { ServerConfig } from '../constants/config';
import { getCookie } from './functions';

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
  return fetch(`${ServerConfig.baseUrl}/auth/user`, {
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
  }).then((res) => requestHandler(res));
};

export const addOrdersRequest = (ingredients) => {
  return fetch(`${ServerConfig.baseUrl}/orders`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: ServerConfig.headers,
    body: JSON.stringify({ ingredients }),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((res) => requestHandler(res));
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

export const forgotPasswordRequest = (value) => {
  return fetch(`${ServerConfig.baseUrl}/password-reset`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: ServerConfig.headers,
    body: JSON.stringify({ email: value }),
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

export const updateUserRequest = (data) => {
  return fetch(`${ServerConfig.baseUrl}/auth/user`, {
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
  }).then((res) => requestHandler(res));
};

const requestHandler = (res) => {
  if (res.ok) return res.json();
  if (res.json) return res.json().then((err) => Promise.reject(err));
  return Promise.reject(res);
};
