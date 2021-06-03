import React from 'react';
import cn from 'classnames';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './register.module.css';

function Register() {
	const [value, setValue] = React.useState('')
	const inputRef = React.useRef(null)
	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0)
		alert('Icon Click Callback')
	}
	const [passwordValue, setPasswordValue] = React.useState('')
	const onChange = e => {
		setPasswordValue(e.target.value)
	}

	return (
		<div className={styles.container}>
			<form className={cn(styles.form, 'mb-20')}>
				<h1 className={cn(styles.title, "text text_type_main-medium")}>Регистрация</h1>
				<Input
					type={'text'}
					placeholder={'Имя'}
					onChange={e => setValue(e.target.value)}
					value={value}
					name={'name'}
					error={false}
					ref={inputRef}
					onIconClick={onIconClick}
					errorText={'Ошибка'}
					size={'default'}
				/>
				<Input
					type={'text'}
					placeholder={'E-mail'}
					onChange={e => setValue(e.target.value)}
					value={value}
					name={'name'}
					error={false}
					ref={inputRef}
					onIconClick={onIconClick}
					errorText={'Ошибка'}
					size={'default'}
				/>
				<PasswordInput
					value={passwordValue}
					name={'password'}
					onChange={onChange}
				/>
				<Button type="primary" size="medium">
					Зарегистрироваться
				</Button>

			</form>
			<div>
				<span className={'text text_type_main-default text_color_inactive'}>Уже зарегистрированы?</span>
				<Button type="secondary" size="medium">
					Войти
				</Button>
			</div>
		</div >


	);
}


export default Register;