import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Message from '../UI/Message';
import LoadingSpinner from '../UI/LoadingSpinner';
import {
	getUsersDetailsByAdmin,
	updateUserByAdmin,
} from '../actions/usersActions';
import { userUpdateByAdminActions } from '../store';
import './UserEditScreen.css';

const UserEditScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();

	const userId = params.id;
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState('');

	const userLogin = useSelector((state) => state.userLogin);
	const userDetailsByAdmin = useSelector((state) => state.userDetailsByAdmin);
	const { user, error, loading } = userDetailsByAdmin;
	const userUpdateByAdmin = useSelector((state) => state.userUpdateByAdmin);
	const {
		error: updateError,
		loading: updateLoading,
		success: updateSuccess,
	} = userUpdateByAdmin;
	useEffect(() => {
		if (updateSuccess) {
			dispatch(getUsersDetailsByAdmin(userId));
			dispatch(userUpdateByAdminActions.userUpdateByAdminReset());
		} else {
			if (userLogin.userDetailsInfo !== null) {
				if (userLogin.userDetailsInfo.isAdmin) {
					if (!user.name || user._id !== userId) {
						dispatch(getUsersDetailsByAdmin(userId));
					} else {
						setName(user.name);
						setEmail(user.email);
						setIsAdmin(user.isAdmin);
					}
				}
			} else {
				navigate('/');
			}
		}
	}, [dispatch, userId, navigate, userLogin, user, updateSuccess]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateUserByAdmin(userId, {
				name,
				email,
				isAdmin,
			})
		);
	};

	return (
		<div className='margin-section change-user'>
			<Link to='/admin/userslist'>
				<button className='btn'>Wróć</button>
			</Link>
			{updateLoading && <LoadingSpinner />}
			{updateError && <Message>{error}</Message>}
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<Message>{error}</Message>
			) : (
				<div className='change-user-form-box'>
					<div className='change-user-form '>
						<h2 className='change-user-form-title'>
							Zmień ustawienia Użytkownika
						</h2>
						<h3 className='change-user-form-id'>ID: {user._id}</h3>
						<form
							className=' change-user-form-options box-shadow'
							onSubmit={submitHandler}
						>
							<label>Nazwa:</label>
							<input
								type='text'
								value={name}
								required
								onChange={(e) => setName(e.target.value)}
							></input>
							<label>Email:</label>
							<input
								type='text'
								value={email}
								required
								onChange={(e) => setEmail(e.target.value)}
							></input>
							<label>Status Admina:</label>
							<input
								className='change-user-checbox'
								type='checkbox'
								checked={isAdmin}
								onChange={(e) => setIsAdmin(e.target.checked)}
							></input>
							<button className=' change-user-btn' type='submit'>
								ZAKTUALIZUJ DANE
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserEditScreen;
