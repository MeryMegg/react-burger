import {
	WS_CONNECTION_SUCCESS,
	WS_CONNECTION_ERROR,
	WS_CONNECTION_CLOSED,
	WS_GET_MESSAGE
} from '../constants/ws-actions';
import { TWSActionsActions } from '../actions/ws-actions';
import { TOrder } from '../../types';

type TWsReduserState = {
	wsConnected: Boolean,
	error: any,
	messages: Array<TOrder>
}

const initialState: TWsReduserState = {
	wsConnected: false,
	error: null,
	messages: []
};

export const wsReducer = (state = initialState, action: TWSActionsActions) => {
	switch (action.type) {
		case WS_CONNECTION_SUCCESS:
			return {
				...state,
				wsConnected: true
			};

		case WS_CONNECTION_ERROR:
			return {
				...state,
				error: action.payload,
				wsConnected: false
			};

		case WS_CONNECTION_CLOSED:
			return {
				...state,
				wsConnected: false
			};

		case WS_GET_MESSAGE:
			return {
				...state,
				messages: action.payload
			};

		default:
			return state;
	}
};


