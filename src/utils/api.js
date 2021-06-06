import { ServerConfig } from '../constants/config';

export const getProducts = () => {
	return fetch(`${ServerConfig.baseUrl}/ingredients`, {
		method: 'GET',
		headers: ServerConfig.headers,
	})
		.then((res) => requestHandler(res))
}

export const addOrders = (ingredients) => {
	return fetch(`${ServerConfig.baseUrl}/orders`, {
		method: 'POST',
		headers: ServerConfig.headers,
		body: JSON.stringify(
			{ ingredients }
		),
	})
		.then((res) => requestHandler(res))
}

export const signUp = ({ email, password, name }) => {
	return fetch(`${ServerConfig.baseUrl}/auth/register`, {
		method: 'POST',
		headers: ServerConfig.headers,
		body: JSON.stringify(
			{ email, password, name }
		),
	})
		.then((res) => requestHandler(res))
}

export const signIn = ({ login, password }) => {
	return fetch(`${ServerConfig.baseUrl}/auth`, {
		method: 'POST',
		headers: ServerConfig.headers,
		body: JSON.stringify(
			{ login, password }
		),
	})
		.then((res) => requestHandler(res))
}

export const forgotPassword = (value) => {
	return fetch(`${ServerConfig.baseUrl}/password-reset`, {
		method: 'POST',
		headers: ServerConfig.headers,
		body: JSON.stringify(
			{ email: value }
		),
	})
		.then((res) => requestHandler(res))
}

export const resetPassword = ({ password, token }) => {
	return fetch(`${ServerConfig.baseUrl}/password-reset/reset`, {
		method: 'POST',
		headers: ServerConfig.headers,
		body: JSON.stringify(
			{ password, token }
		),
	})
		.then((res) => requestHandler(res))
}

const requestHandler = (res) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(res.status)
}