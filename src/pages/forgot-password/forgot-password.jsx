import React from 'react';
import cn from 'classnames';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './forgot-password.module.css';

function ForgotPassword() {
	const [value, setValue] = React.useState('')
	const inputRef = React.useRef(null)
	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0)
		alert('Icon Click Callback')
	}

	return (
		<div className={styles.container}>
			<form className={cn(styles.form, 'mb-20')}>
				<h1 className={cn(styles.title, "text text_type_main-medium")}>Восстановление пароля</h1>
				<Input
					type={'text'}
					placeholder={'Укажите e-mail'}
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
					Восстановить
				</Button>

			</form>
			<div>
				<span className={'text text_type_main-default text_color_inactive'}>Вспомнили пароль?</span>
				<Button type="secondary" size="medium">
					Войти
				</Button>
			</div>
		</div >


	);
}


export default ForgotPassword;