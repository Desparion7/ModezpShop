import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Message from '../UI/Message';
import LoadingSpinner from '../UI/LoadingSpinner';
import './UserEditScreen.css';

const UserEditScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState('');
	const [successShow, setShowSuccess] = useState(false);

	const userInfo = useSelector((state) => state.userLogin);
	const { userDetailsInfo } = userInfo;

	useEffect(() => {}, []);

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className='margin-section change-user'>
			<Link to='/Modezp-Shop/admin/userslist'>
				<button className='btn'>Wróć</button>
			</Link>
			<div className='change-user-form-box'>
				<div className='change-user-form '>
					<h2 className='change-user-form-title'>
						Zmień ustawienia Użytkownika
					</h2>
					<h2 className='change-user-form-id'>ID:432262657375487675</h2>
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
							value={isAdmin}
							required
							onChange={(e) => setIsAdmin(e.target.checked)}
						></input>
						<button className=' change-user-btn' type='submit'>
							ZAKTUALIZUJ DANE
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserEditScreen;
