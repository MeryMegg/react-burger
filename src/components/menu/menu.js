import React from 'react';
import menuStyles from './menu.module.css';

function Menu(props) {
	return (
		<nav className={menuStyles.menu}>
			{props.children}
		</nav>
	);
}

export default Menu;