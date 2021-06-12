import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILED,

	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,

	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAILED,

	UPDATE_USER_REQUEST,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAILED,

	FORGOT_PASSWORD_REQUEST,
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_FAILED,

	RESET_PASSWORD_REQUEST,
	RESET_PASSWORD_SUCCESS,
	RESET_PASSWORD_FAILED,

	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_FAILED,
} from '../actions/auth';

const initialState = {
	name: '',
	email: '',
	password: '',

	registerRequest: false,
	registerFailed: false,

	loginRequest: false,
	loginFailed: false,

	logoutRequest: false,
	logoutFailed: false,

	getUserRequest: false,
	getUserFailed: false,

	isUserLoaded: true,
	isSaccess: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		//Регистрация
		case REGISTER_REQUEST: {
			return {
				...state,
				registerRequest: true,
				registerFailed: false,
			};
		}
		case REGISTER_SUCCESS: {
			return { ...state, registerFailed: false, name: action.user.name, email: action.user.email, registerRequest: false };
		}
		case REGISTER_FAILED: {
			return { ...state, registerFailed: true, registerRequest: false };
		}
		//Вход в систему
		case LOGIN_REQUEST: {
			return {
				...state,
				loginRequest: true,
				loginFailed: false,
			};
		}
		case LOGIN_SUCCESS: {
			return { ...state, loginFailed: false, name: action.user.name, email: action.user.email, loginRequest: false };
		}
		case LOGIN_FAILED: {
			return { ...state, loginFailed: true, loginRequest: false };
		}
		//Получение данных пользователя
		case GET_USER_REQUEST: {
			return {
				...state,
				loginRequest: true,
				loginFailed: false,
			};
		}
		case GET_USER_SUCCESS: {
			return { ...state, loginFailed: false, name: action.user.name, email: action.user.email, loginRequest: false };
		}
		case GET_USER_FAILED: {
			return { ...state, loginFailed: true, loginRequest: false };
		}
		//Изменение данных пользователя
		case UPDATE_USER_REQUEST: {
			return {
				...state,
				loginRequest: true,
				loginFailed: false,
			};
		}
		case UPDATE_USER_SUCCESS: {
			return { ...state, loginFailed: false, name: action.user.name, email: action.user.email, loginRequest: false };
		}
		case UPDATE_USER_FAILED: {
			return { ...state, loginFailed: true, loginRequest: false };
		}
		//Запрос на смену пароля
		case FORGOT_PASSWORD_REQUEST: {
			return {
				...state,
				loginRequest: true,
				loginFailed: false,
			};
		}
		case FORGOT_PASSWORD_SUCCESS: {
			return { ...state, loginFailed: false, name: action.user.name, email: action.user.email, loginRequest: false };
		}
		case FORGOT_PASSWORD_FAILED: {
			return { ...state, loginFailed: true, loginRequest: false };
		}
		//Смена пароля
		case RESET_PASSWORD_REQUEST: {
			return {
				...state,
				loginRequest: true,
				loginFailed: false,
			};
		}
		case RESET_PASSWORD_SUCCESS: {
			return { ...state, loginFailed: false, name: action.user.name, email: action.user.email, loginRequest: false };
		}
		case RESET_PASSWORD_FAILED: {
			return { ...state, loginFailed: true, loginRequest: false };
		}
		//Выход из системы
		case LOGOUT_REQUEST: {
			return {
				...state,
				logoutRequest: true,
				logoutFailed: false,
			};
		}
		case LOGOUT_SUCCESS: {
			console.log(state.name, state.email)
			return { ...state, logoutFailed: false, name: '', email: '', logoutRequest: false };
		}
		case LOGOUT_FAILED: {
			return { ...state, logoutFailed: true, logoutRequest: false };
		}

		default: {
			return state;
		}
	}
};