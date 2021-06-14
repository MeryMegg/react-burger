import React from 'react';
import styles from './preloader.module.css';

const Preloader = () => {
	return (<div className={styles["mk-spinner-wrap"]}>
		<div className={styles["mk-spinner-bubbles"]}></div>
	</div>)
}

export default Preloader;

