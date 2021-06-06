import React, { useState } from 'react';
import cn from 'classnames';
import styles from './profile.module.css';
import { NavLink } from 'react-router-dom';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Switch, Route, Link } from 'react-router-dom';
import OrdersItem from '../../components/orders-item/orders-item';


function Profile() {
	const [state, setState] = useState({
		// Соответствует name полю ввода
		name: '',
		email: '',
		password: '',
	})

	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		setState({
			...state,
			[name]: value
		});
	}
	const nameInputRef = React.useRef(null)
	const emailInputRef = React.useRef(null)
	const passwordInputRef = React.useRef(null)
	const onIconClick = (e) => {
		setTimeout(() => state.currentRef?.current.focus(), 0)
		alert('Icon Click Callback')
	}

	const orders = [1, 2, 3, 4, 5, 6]

	return (
		<div className={cn(styles.main, 'pt-10', 'pl-10', 'pr-10', 'mt-10')}>
			<div className={cn(styles.nav)}>
				<ul className={cn(styles['list-nav'], 'mb-20')}>
					<li>
						<NavLink exact to="/profile" className={cn(styles.link, 'pt-4', 'pb-4', 'pr-5', 'mr-2', "text text_type_main-medium text_color_inactive")} activeClassName={styles.link_active} >
							<span className={cn('ml-2')}>Профиль</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/profile/orders" className={cn(styles.link, 'pt-4', 'pb-4', 'pr-5', 'mr-2', "text text_type_main-medium text_color_inactive")} activeClassName={styles.link_active} >
							<span className={cn('ml-2')}>История заказов</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/" className={cn(styles.link, 'pt-4', 'pb-4', 'pr-5', 'mr-2', "text text_type_main-medium text_color_inactive")} activeClassName={styles.link_active} >
							<span className={cn('ml-2')}>Выход</span>
						</NavLink>
					</li>
				</ul>
				<span className={cn("text text_type_main-default text_color_inactive")}>В этом разделе вы можете изменить свои персональные данные</span>
			</div>
			<Switch>
				<Route path="/profile" exact={true}>
					<div className={cn(styles.forms)}>
						<Input
							type={'text'}
							placeholder={'Имя'}
							onChange={handleInputChange}
							icon={'EditIcon'}
							value={state.name}
							name={'name'}
							error={false}
							ref={nameInputRef}
							onIconClick={onIconClick}
							errorText={'Ошибка'}
							size={'default'}
						/>
						<Input
							type={'text'}
							placeholder={'Логин'}
							onChange={handleInputChange}
							icon={'EditIcon'}
							value={state.email}
							name={'email'}
							error={false}
							ref={emailInputRef}
							onIconClick={onIconClick}
							errorText={'Ошибка'}
							size={'default'}
						/>
						<Input
							type={'text'}
							placeholder={'Пароль'}
							onChange={handleInputChange}
							icon={'EditIcon'}
							value={state.password}
							name={'password'}
							error={false}
							ref={passwordInputRef}
							onIconClick={e => onIconClick(e)}
							errorText={'Ошибка'}
							size={'default'}
						/>
					</div>
				</Route>
				<Route path="/profile/orders" exact={true} >
					<ul className={cn(styles.list, 'mb-20')}>
						{orders.map((el, i) => (
							<li className={cn(styles['list-item'])} key={i}>
								<Link to={`/profile/orders/${i}`} className={styles['burger-link']}>
									<OrdersItem />
								</Link>
							</li>
						))}
					</ul>

				</Route>
				<Route>
					<h1>Здесь ничего нет</h1>
				</Route>
			</Switch>


		</div >
	);
}

export default Profile;
