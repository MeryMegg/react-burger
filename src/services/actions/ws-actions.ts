import { TOrder } from '../../types';
import {
	WS_CONNECTION_START,
	WS_CONNECTION_CLOSE,
	WS_SEND_MESSAGE,
	WS_CONNECTION_SUCCESS,
	WS_CONNECTION_ERROR,
	WS_CONNECTION_CLOSED,
	WS_GET_MESSAGE
} from '../constants/ws-actions';


export const wsActions = {
	wsInit: WS_CONNECTION_START,
	wsClose: WS_CONNECTION_CLOSE,
	wsSendMessage: WS_SEND_MESSAGE,
	onOpen: WS_CONNECTION_SUCCESS,
	onClose: WS_CONNECTION_CLOSED,
	onError: WS_CONNECTION_ERROR,
	onMessage: WS_GET_MESSAGE
};

/***/
export interface IWsConnectionStartAction {
	readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionCloseAction {
	readonly type: typeof WS_CONNECTION_CLOSE;
}

export interface IWsSendMessageAction {
	readonly type: typeof WS_SEND_MESSAGE;
}

export interface IWsConnectionSuccessAction {
	readonly type: typeof WS_CONNECTION_SUCCESS;
	payload: any
}

export interface IWsConnectionErrorAction {
	readonly type: typeof WS_CONNECTION_ERROR;
	payload: any
}

export interface IWsConnectionClosedAction {
	readonly type: typeof WS_CONNECTION_CLOSED;
	payload: any
}

export interface IWsGetMessageAction {
	readonly type: typeof WS_GET_MESSAGE;
	payload: ReadonlyArray<TOrder>
}

export type TWSActionsActions =
	| IWsConnectionStartAction
	| IWsConnectionCloseAction
	| IWsSendMessageAction
	| IWsConnectionSuccessAction
	| IWsConnectionErrorAction
	| IWsConnectionClosedAction
	| IWsGetMessageAction;