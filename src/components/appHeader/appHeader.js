import React from 'react';
import cn from 'classnames';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from 'react-router-dom';
import NavBar from '../navBar/navBar';
import style from './appHeader.module.css';

function AppHeader() {
	const { pathname } = useLocation()
	return (
		<header className={cn('pl-10', 'pr-10', 'pt-4', 'pb-4', 'text', 'text_type_main-default', style.header)}>
			<NavBar>
				<>
					<div className={cn(style.menu)}>
						<NavLink exact to="/" className={cn(style.link)} activeClassName={style.link_active} >
							<BurgerIcon type={pathname === '/' ? "primary" : "secondary"} />
							<span className={cn(style.text)}>Конструктор</span>
						</NavLink>
						<NavLink to="/lenta" activeClassName={style.link_active} className={cn(style.link)}>
							<ListIcon type={pathname === '/lenta' ? "primary" : "secondary"} />
							<span className={cn(style.text)}>Лента заказов</span>
						</NavLink>
					</div>
					<NavLink exact to="/" activeClassName={style.link_active} className={cn(style.logo)}>
						<Logo />
					</NavLink>
					<NavLink to="/account" activeClassName={style.link_active} className={cn(style.link)}>
						<ProfileIcon type={pathname === '/account' ? "primary" : "secondary"} />
						<span className={cn(style.text)}>Личный кабинет</span>
					</NavLink>
				</>
			</NavBar>

		</header >
	);
}


export default AppHeader;

