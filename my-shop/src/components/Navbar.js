import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { categoryActions } from '../store';
import React from 'react';
import Menu from './Menu';
import './Navbar.css';
import SearchBox from './SearchBox';

const Navbar = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const stateUser = useSelector((state) => state.userLogin.userDetailsInfo);

	const cartItemsAmount = cartItems.reduce((acc, items) => acc + +items.qty, 0);
	const [showMyAccountOptions, setMyAccountOptions] = useState(false);
	const menuRef = useRef();

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setMyAccountOptions(false);
			}
		};
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	const showMyAccount = () => {
		setMyAccountOptions(!showMyAccountOptions);
	};
	const hideMenuHandler = () => {
		setMyAccountOptions(false);
	};

	return (
		<>
			<div className='navbar'>
				<Link
					className='name'
					to='/'
					onClick={() => {
						dispatch(categoryActions.categoryReset());
					}}
				>
					<h1>Modezp</h1>
				</Link>
				<SearchBox />
				<div className='nav-options'>
					<div className='btn-cart'>
						<Link className='link' to='/cart'>
							<i className='fa-solid fa-cart-shopping nav-cart-box menu-icon'>
								{cartItemsAmount ? (
									<div className='nav-cart-amount'>{cartItemsAmount}</div>
								) : null}
							</i>
							<span className='icon-name'>Koszyk</span>
						</Link>
					</div>
					<div ref={menuRef} className='my-account'>
						<p onClick={showMyAccount}>
							<i className='fa-regular fa-user menu-icon'></i>
							<span className='icon-name btn-my-account'>
								{stateUser ? stateUser.name : 'Moje Konto '}
							</span>
						</p>
						<div>
							{showMyAccountOptions ? <Menu hideMenu={hideMenuHandler} /> : ''}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
