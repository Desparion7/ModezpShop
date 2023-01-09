import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/usersActions';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';
import './ManagementScreen.css';

const LoginScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const userInfo = useSelector((state) => state.userLogin);

	const { userDetailsInfo, error, loading } = userInfo;

	useEffect(() => {
		if (userDetailsInfo) {
			navigate('/');
		}
	}, [navigate, userDetailsInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
		setEmail('');
		setPassword('');
	};

	return (
		<div className='management-box margin-section'>
			{loading && <LoadingSpinner />}
			{error && <Message>Nieprawidłowy email lub hasło</Message>}
			<div className='management-container box-shadow'>
				<div className='management-box-form'>
					<form onSubmit={submitHandler}>
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
						<button className='btn btn-management' type='submit'>
							Zaloguj się
						</button>
					</form>
				</div>
				<div className='rediret-box'>
					<label>Nie masz konta?</label>
					<Link to='/register' className='management-box-redirect-link'>
						ZAREJESTRUJ SIĘ
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
