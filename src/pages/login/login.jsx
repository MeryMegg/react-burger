import React from 'react';
import cn from 'classnames';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './login.module.css';

function Login() {
	const [value, setValue] = React.useState('bob@example.com')
	const onChange = e => {
		setValue(e.target.value)
	}
	const [passwordtValue, setPasswordtValue] = React.useState('')
	const onChangePassword = e => {
		setPasswordtValue(e.target.value)
	}

	return (
		<div className={styles.container}>
			<form className={cn(styles.form, 'mb-20')}>
				<h1 className={cn(styles.title, "text text_type_main-medium")}>Вход</h1>
				<EmailInput
					type={'text'}
					value={value}
					name={'email'}
					onChange={onChange}
				/>
				<PasswordInput
					value={passwordtValue}
					name={'password'}
					onChange={onChangePassword}
				/>
				<Button type="primary" size="medium">
					Войти
				</Button>

			</form>
			<div>
				<span className={'text text_type_main-default text_color_inactive'}>Вы - новый пользователь?</span>
				<Button type="secondary" size="medium">
					Зарегистрироваться
				</Button>
			</div>
			<div>
				<span className={'text text_type_main-default text_color_inactive'}>Забыли пароль?</span>
				<Button type="secondary" size="medium">
					Восстановить пароль
				</Button>
			</div>
		</div >


	);
}


export default Login;