import React from 'react';
import cn from 'classnames';
import styles from './navBar.module.css';


function NavBar(props) {
	return (
		<div className={cn(styles['nav-bar'])}>
			{props.children}
		</div>
	);
}

export default NavBar;