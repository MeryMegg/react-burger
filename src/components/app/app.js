import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { Main, Login, Register, ForgotPassword, ResetPassword, Feed, Order, Profile } from '../../pages';

function App() {
	return (
		<Router>
			<AppHeader />
			<Switch>
				<Route path="/" exact={true}>
					<Main />
				</Route>
				<Route path="/login" exact={true}>
					<Login />
				</Route>
				<Route path="/register" exact={true}>
					<Register />
				</Route>
				<Route path="/forgot-password" exact={true}>
					<ForgotPassword />
				</Route>
				<Route path="/reset-password" exact={true}>
					<ResetPassword />
				</Route>
				<Route path="/feed" exact={true}>
					<Feed />
				</Route>
				<Route path="/feed/:id" exact={true}>
					<Order />
				</Route>
				<Route path="/profile/orders/:id" exact={true}>
					<Order />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/ingredients/:id" exact={true}>
					<h1>Здесь будет страница ингредиента. Ей займёмся в следующей проектной работе</h1>
				</Route>
				<Route>
					<h1>Здесь ничего нет</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;