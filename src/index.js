import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer, history } from './services/reducers';
import { socketMiddleware } from './services/middleware';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,

  WS_CONNECTION_CLOSED_AUTH,
  WS_CONNECTION_ERROR_AUTH,
  WS_CONNECTION_START_AUTH,
  WS_CONNECTION_SUCCESS_AUTH,
  WS_GET_MESSAGE_AUTH,
  WS_SEND_MESSAGE_AUTH
} from './services/actions/ws-actions';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const WS_URL = 'wss://norma.nomoreparties.space/orders/all';
const WS_URL_AUTH = 'wss://norma.nomoreparties.space/orders';

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};
const wsActionsAuth = {
  wsInit: WS_CONNECTION_START_AUTH,
  wsSendMessage: WS_SEND_MESSAGE_AUTH,
  onOpen: WS_CONNECTION_SUCCESS_AUTH,
  onClose: WS_CONNECTION_CLOSED_AUTH,
  onError: WS_CONNECTION_ERROR_AUTH,
  onMessage: WS_GET_MESSAGE_AUTH
};

const enhancer = composeEnhancers(
  //applyMiddleware(thunk, routerMiddleware(history), socketMiddleware(WS_URL, wsActions, false))
  applyMiddleware(thunk, routerMiddleware(history), socketMiddleware(WS_URL, wsActions, false), socketMiddleware(WS_URL_AUTH, wsActionsAuth, true))
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
