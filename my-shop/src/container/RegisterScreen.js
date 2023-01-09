import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/usersActions';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';
import './ManagementScreen.css';

const RegisterScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmePassword, setConfirmePassword] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState(null);

	const userInfo = useSelector((state) => state.userRegister);

	const { user, error, loading } = userInfo;

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [navigate, user]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmePassword) {
			setMessage('Podane hasła nie pasują do siebie');
		} else {
			dispatch(registerUser(name, email, password));
		}
	};

	return (
		<div className='management-box margin-section'>
			{loading && <LoadingSpinner />}
			{error && <Message>Nieprawidłowy email lub hasło</Message>}
			{message && <Message>{message}</Message>}
			<div className='management-container box-shadow'>
				<div className='management-box-form'>
					<form onSubmit={submitHandler}>
						<label htmlFor='name'>Nazawa konta:</label>
						<input
							autoComplete='name'
							type='name'
							id='name'
							name='name'
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						></input>
						<label htmlFor='email'>Email:</label>
						<input
							autoComplete='email'
							type='email'
							id='email'
							name='email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						></input>
						<label htmlFor='password'>Hasło:</label>
						<input
							autoComplete='password'
							type='password'
							id='password'
							name='password'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						></input>
						<label htmlFor='cofirmePassword'>Powtórz hasło:</label>
						<input
							autoComplete='cofirmePassword'
							type='password'
							id='condirmePassword'
							name='confirmePassword'
							value={confirmePassword}
							onChange={(e) => {
								setConfirmePassword(e.target.value);
							}}
						></input>
						<button className='btn btn-management' type='submit'>
							ZAREJESTRUJ SIĘ
						</button>
					</form>
				</div>
				<div className='rediret-box'>
					<label>Masz konto?</label>
					<Link to='/management' className='management-box-redirect-link'>
						ZALOGUJ SIĘ
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
