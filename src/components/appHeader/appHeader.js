import React from 'react';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useLocation } from 'react-router-dom';
import NavBar from '../navBar/navBar';
import appHeaderStyles from './appHeader.module.css';

function AppHeader() {
	const { pathname } = useLocation()
	return (
		<header className={`p-2 text text_type_main-default ${appHeaderStyles.header}`}>
			<NavBar>
				<>
					<div className={appHeaderStyles.menu}>
						<NavLink exact to="/" className={appHeaderStyles.link} activeClassName={appHeaderStyles.link_active} >
							<BurgerIcon type={pathname === '/' ? "primary" : "secondary"} />
							<span className={appHeaderStyles.text}>Конструктор</span>
						</NavLink>
						<NavLink to="/lenta" activeClassName={appHeaderStyles.link_active} className={appHeaderStyles.link}>
							<ListIcon type={pathname === '/lenta' ? "primary" : "secondary"} />
							<span className={appHeaderStyles.text}>Лента заказов</span>
						</NavLink>
					</div>
					<NavLink exact to="/" activeClassName={appHeaderStyles.link_active} className={appHeaderStyles.logo}>
						<Logo />
					</NavLink>
					<NavLink to="/account" activeClassName={appHeaderStyles.link_active} className={appHeaderStyles.link}>
						<ProfileIcon type={pathname === '/account' ? "primary" : "secondary"} />
						<span className={appHeaderStyles.text}>Личный кабинет</span>
					</NavLink>
				</>
			</NavBar>

		</header >
	);
}


export default AppHeader;

