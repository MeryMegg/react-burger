import { ServerConfig } from '../constants/config';

export const getProducts = () => {
	return fetch(`${ServerConfig.baseUrl}/ingredients`, {
		method: 'GET',
		headers: ServerConfig.headers,
	})
		.then((res) => requestHandler(res))
}

export const createOrders = (ingredients) => {
	return fetch(`${ServerConfig.baseUrl}/orders`, {
		method: 'POST',
		headers: ServerConfig.headers,
		body: JSON.stringify(
			{ ingredients }
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