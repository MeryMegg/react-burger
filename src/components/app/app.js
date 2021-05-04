import React from 'react';
import { Route } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from '../appHeader/appHeader';
import Main from '../main/main';

function App() {
	return (
		<>
			<AppHeader />
			<Main />
		</>
	);
}

export default App;