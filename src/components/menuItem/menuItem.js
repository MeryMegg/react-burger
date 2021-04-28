import React from 'react';
import menuItemStyles from './menuItem.module.css';

function MenuItem(props) {
	return (
		<li className={menuItemStyles['menu-item']}>{props.children}  {props.text}</li>
	);
}


export default MenuItem;