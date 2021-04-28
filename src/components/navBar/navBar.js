import React from 'react';
import navBarStyles from './navBar.module.css';


function NavBar(props) {
	return (
		<div className={navBarStyles['nav-bar']}>
			{props.children}
		</div>
	);
}

export default NavBar;