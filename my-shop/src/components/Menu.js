import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/usersActions.js';
import { userRegisterActions } from '../store.js';
import './Menu.css';

const Menu = ({ hideMenu }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userLogin.userDetailsInfo);

	const logoutHandler = (e) => {
		e.preventDefault();
		dispatch(logout());
		dispatch(userRegisterActions.userRegisterReset());
		navigate('/');
	};

	return (
		<div className='menu box-shadow'>
			{user ? (
				<div className='menu-links'>
					<Link to='/profile' className='menu-link' onClick={hideMenu}>
						Moje Konto
					</Link>
					<Link
						to='/profile/orderlist'
						className='menu-link'
						onClick={hideMenu}
					>
						Moje zamówienia
					</Link>
					<Link
						to='/profile/messagecenter'
						className='menu-link'
						onClick={hideMenu}
					>
						Wyślij wiadomość
					</Link>
					<button
						className='btn'
						onClick={(e) => {
							logoutHandler(e);
							hideMenu();
							navigate('/login');
						}}
					>
						Wyloguj się
					</button>
				</div>
			) : (
				<>
					<Link to='/login'>
						<button className='btn' onClick={hideMenu}>
							Zaloguj się
						</button>
					</Link>
					<Link to='/login'>
						<button className='btn' onClick={hideMenu}>
							Demo
						</button>
					</Link>

					<p>Nie masz konta?</p>
					<Link
						to='/register'
						className='menu-link-register'
						onClick={hideMenu}
					>
						Zarejestruj się
					</Link>
				</>
			)}
		</div>
	);
};

export default Menu;
