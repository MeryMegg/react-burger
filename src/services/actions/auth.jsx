import { signInRequest, signUpRequest, signOutRequest, getUserRequest, refreshTokenRequest, updateUserRequest, forgotPasswordRequest, resetPasswordRequest } from '../../utils/api';
import { deleteCookie, setCookie } from '../../utils/functions';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

//Регистрация
export const register = (state) => {
	return function (dispatch) {
		dispatch({
			type: REGISTER_REQUEST
		})
		signUpRequest(state).then((res) => {
			if (res && res.success) {
				const authToken = res.accessToken.split('Bearer ')[1];
				const refreshToken = res.refreshToken;
				setCookie('token', authToken);
				localStorage.setItem('refreshToken', refreshToken);
				dispatch({
					type: REGISTER_SUCCESS,
					user: res.user
				});
			} else {
				dispatch({
					type: REGISTER_FAILED
				});
			}
		}).catch(err => {
			console.log(err)
			dispatch({
				type: REGISTER_FAILED
			})
		})
	};
}

//Вход в систему
export const login = (state) => {
	return function (dispatch) {
		dispatch({
			type: LOGIN_REQUEST
		})
		signInRequest(state)
			.then((res) => {
				if (res && res.success) {
					const authToken = res.accessToken.split('Bearer ')[1];
					const refreshToken = res.refreshToken;
					setCookie('token', authToken);
					localStorage.setItem('refreshToken', refreshToken);
					dispatch({
						type: LOGIN_SUCCESS,
						user: res.user
					});
				} else {
					dispatch({
						type: LOGIN_FAILED
					});
				}
			}).catch(err => {
				console.log(err)
				dispatch({
					type: LOGIN_FAILED
				})
			})
	};
}

//Запрос данных пользователя
export const getUser = () => {
	return function (dispatch) {
		dispatch({
			type: GET_USER_REQUEST
		})
		getUserRequest().then((res) => {
			if (res && res.success) {
				dispatch({
					type: GET_USER_SUCCESS,
					user: res.user
				});
			} else {
				throw res;
			}
		}).catch(res => {
			if (res.message === 'jwt expired') {
				dispatch(refreshToken(getUser()))
			} else {
				dispatch({
					type: UPDATE_USER_FAILED
				})
			}
		})
	};
}

//Обновление данных пользователя
export const updateUser = (data) => {
	return function (dispatch) {
		dispatch({
			type: UPDATE_USER_REQUEST
		})
		updateUserRequest(data).then((res) => {
			if (res && res.success) {
				dispatch({
					type: UPDATE_USER_SUCCESS,
					user: res.user
				});
			} else {
				throw res;
			}
		}).catch(res => {
			if (res.message === 'jwt expired') {
				dispatch(refreshToken(getUser()))
			} else {
				dispatch({
					type: UPDATE_USER_FAILED
				})
			}
		})
	};
}

//Запрос на смену пароля
export const forgotPassword = (email) => {
	return function (dispatch) {
		dispatch({
			type: FORGOT_PASSWORD_REQUEST
		})
		forgotPasswordRequest(email)
			.then((res) => {
				console.log(res)
			}).catch(err => {
				console.log(err)
				dispatch({
					type: FORGOT_PASSWORD_FAILED
				})
			})
	};
}

//Изменение пароля
export const resetPassword = ({ password, token }) => {
	return function (dispatch) {
		dispatch({
			type: RESET_PASSWORD_REQUEST
		})
		resetPasswordRequest({ password, token })
			.then((res) => {
				if (res && res.success) {
					console.log('Смена пароля прошла успешно');
					// dispatch({
					// 	type: RESET_PASSWORD_SUCCESS,						
					// });
				} else {
					dispatch({
						type: RESET_PASSWORD_FAILED
					});
				}
			}).catch(err => {
				console.log(err)
				dispatch({
					type: RESET_PASSWORD_FAILED
				})
			})
	};
}

//Выход из системы
export const logout = () => {
	return function (dispatch) {
		dispatch({
			type: LOGOUT_REQUEST
		})
		signOutRequest()
			.then((res) => {
				if (res && res.success) {
					deleteCookie('token');
					localStorage.removeItem('refreshToken')
					dispatch({
						type: LOGOUT_SUCCESS
					});
				} else {
					dispatch({
						type: LOGOUT_FAILED
					});
				}
			}).catch(err => {
				dispatch({
					type: LOGOUT_FAILED
				})
			})
	};
}

//Обновление токена
const refreshToken = (afterRefressh) => (dispatch) => {
	refreshTokenRequest()
		.then((res) => {
			localStorage.setItem('refreshToken', res.refreshToken);
			const authToken = res.accessToken.split('Bearer ')[1];
			setCookie('token', authToken);
			dispatch(afterRefressh);
		})
}