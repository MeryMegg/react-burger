import {
	WS_CONNECTION_SUCCESS_AUTH,
	WS_CONNECTION_ERROR_AUTH,
	WS_CONNECTION_CLOSED_AUTH,
	WS_GET_MESSAGE_AUTH
} from '../constants/ws-actions-auth';
import { TWSActionsAuthActions } from '../actions/ws-actions-auth';
import { TOrder } from '../../types';

type TWsReduserAuthState = {
	wsConnected: Boolean,
	error: any,
	messages: Array<TOrder>
}



const initialState: TWsReduserAuthState = {
	wsConnected: false,
	error: null,
	messages: []
};

export const wsReducerAuth = (state = initialState, action: TWSActionsAuthActions) => {
	switch (action.type) {
		case WS_CONNECTION_SUCCESS_AUTH:
			return {
				...state,
				wsConnected: true
			};

		case WS_CONNECTION_ERROR_AUTH:
			return {
				...state,
				error: action.payload,
				wsConnected: false
			};

		case WS_CONNECTION_CLOSED_AUTH:
			return {
				...state,
				wsConnected: false
			};

		case WS_GET_MESSAGE_AUTH:
			return {
				...state,
				messages: action.payload
			};
		// case WS_USER_STATUS_UPDATE:
		// 	return {
		// 		...state,
		// 		user: action.payload
		// 	};

		default:
			return state;
	}
};


