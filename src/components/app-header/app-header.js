import React from 'react';
import cn from 'classnames';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useRouteMatch } from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar';
import styles from './app-header.module.css';

function AppHeader() {
	const isConstructor = !!useRouteMatch({ path: '/', exact: true });
	const isFeed = !!useRouteMatch('/feed');
	const isProfile = !!useRouteMatch('/profile');
	return (
		<header className={cn('pl-10', 'pr-10', 'pt-4', 'pb-4', 'text', 'text_type_main-default', styles.header)}>
			<NavBar>
				<>
					<div className={cn(styles.menu)}>
						<NavLink exact to="/" className={cn(styles.link, 'pt-4', 'pb-4', 'pr-5', 'mr-2')} activeClassName={styles.link_active} >
							<BurgerIcon type={isConstructor ? "primary" : "secondary"} />
							<span className={cn('ml-2')}>Конструктор</span>
						</NavLink>
						<NavLink to="/feed" activeClassName={styles.link_active} className={cn(styles.link, 'pt-4', 'pb-4', 'pr-5', 'pl-5')}>
							<ListIcon type={isFeed ? "primary" : "secondary"} />
							<span className={cn('ml-2')}>Лента заказов</span>
						</NavLink>
					</div>
					<NavLink exact to="/" activeClassName={styles.link_active} className={cn(styles.logo)}>
						<Logo />
					</NavLink>
					<NavLink to="/profile" activeClassName={styles.link_active} className={cn(styles.link)}>
						<ProfileIcon type={isProfile ? "primary" : "secondary"} />
						<span className={cn('pt-4', 'pb-4', 'pl-5')}>Личный кабинет</span>
					</NavLink>
				</>
			</NavBar>

		</header >
	);
}


export default AppHeader;

