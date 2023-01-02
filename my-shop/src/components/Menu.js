import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/usersActions.js';
import { userRegisterActions } from '../store.js';
import './Menu.css';

const Menu = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userLogin.userDetailsInfo);

	const logoutHandler = (e) => {
		e.preventDefault();
		dispatch(logout());
		dispatch(userRegisterActions.userRegisterReset());
	};
	return (
		<div className='menu box-shadow'>
			{user ? (
				<div className='menu-links'>
					<Link to='/Modezp-Shop/profile' className='menu-link'>
						Moje Konto
					</Link>
					<Link to='Modezp-Shop/profile/orderlist' className='menu-link'>
						Moje zamówienia
					</Link>
					<Link to='/Modezp-Shop' className='menu-link'>
						Wyślij wiadomość
					</Link>
					<Link to='/Modezp-Shop/login'>
						<button className='btn' onClick={logoutHandler}>
							Wyloguj się
						</button>
					</Link>
				</div>
			) : (
				<>
					<Link to='/Modezp-Shop/login'>
						<button className='btn'>Zaloguj się</button>
					</Link>

					<p>Nie masz konta?</p>
					<Link to='/Modezp-Shop/register' className='menu-link-register'>
						Zarejestruj się
					</Link>
				</>
			)}
		</div>
	);
};

export default Menu;
