import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../actions/usersActions';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';


const ProfileUpdateScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmePassword, setConfirmePassword] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState(null);
	const [successShow, setShowSuccess] = useState(false);

	const userInfo = useSelector((state) => state.userLogin);
	const { userDetailsInfo } = userInfo;

	const detailsUser = useSelector((state) => state.userDetails);
	const { user, error, loading } = detailsUser;

	const userUpdateProfil = useSelector((state) => state.userUpdate);
	const { success } = userUpdateProfil;

	useEffect(() => {
		if (!userDetailsInfo) {
			navigate('/');
		} else {
			if (!user.name) {
				dispatch(getUserDetails('profile'));
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [dispatch, navigate, user, userDetailsInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmePassword) {
			setMessage('Podane hasła nie pasują do siebie');
			setShowSuccess(false);
		} else {
			dispatch(updateUserProfile({ id: user._id, name, email, password }));
			setMessage(null);
			setShowSuccess(true);
		}
	};

	return (
		<div className='margin-section'>
			<Link to='/profile'>
				<button className='btn'>Wróć</button>
			</Link>

			<div className='management-box '>

				{loading && <LoadingSpinner />}
				{success && successShow && (
					<Message style={{ backgroundColor: '#b3ebac' }}>
						Dane zostały zaktualizowane
					</Message>
				)}
				{error && <Message>Nieprawidłowy email lub hasło</Message>}
				{message && <Message>{message}</Message>}
				<div className='management-container box-shadow-form'>
					<div className='management-box-form'>
						<h3>Zmień ustawienia konta</h3>
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
							<label htmlFor='password'>Nowe hasło:</label>
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
								ZAKTUALIZUJ DANE
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileUpdateScreen;
