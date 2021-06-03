import React from 'react';
import cn from 'classnames';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './reset-password.module.css';

function ResetPassword() {
	const [value, setValue] = React.useState('')
	const inputRef = React.useRef(null)
	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0)
		alert('Icon Click Callback')
	}
	const [passwordtValue, setPasswordtValue] = React.useState('')
	const onChange = e => {
		setPasswordtValue(e.target.value)
	}

	return (
		<div className={styles.container}>
			<form className={cn(styles.form, 'mb-20')}>
				<h1 className={cn(styles.title, "text text_type_main-medium")}>Восстановление пароля</h1>
				<PasswordInput
					value={passwordtValue}
					name={'password'}
					onChange={onChange}
				/>
				<Input
					type={'text'}
					placeholder={'Введите код из письма'}
					onChange={e => setValue(e.target.value)}
					value={value}
					name={'name'}
					error={false}
					ref={inputRef}
					onIconClick={onIconClick}
					errorText={'Ошибка'}
					size={'default'}
				/>
				<Button type="primary" size="medium">
					Сохранить
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


export default ResetPassword;