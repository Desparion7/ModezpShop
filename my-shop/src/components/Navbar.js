import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import Menu from './Menu';
import './Navbar.css';

const Navbar = () => {
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

	return (
		<>
			<div className='navbar'>
				<Link className='name' to='/Modezp-Shop'>
					<h1>Modezp</h1>
				</Link>
				<div className='nav-options'>
					<div className='btn-cart'>
						<Link className='link' to='/Modezp-Shop/cart'>
							<i className='fa-solid fa-cart-shopping nav-cart-box'>
								{cartItemsAmount ? (
									<div className='nav-cart-amount'>{cartItemsAmount}</div>
								) : null}
							</i>
							<span className='icon-name'>Koszyk</span>
						</Link>
					</div>
					<div ref={menuRef} className='my-account'>
						<p onClick={showMyAccount}>
							<i className='fa-regular fa-user'></i>
							<span className='icon-name btn-my-account'>
								{stateUser ? stateUser.name : 'Moje Konto '}
							</span>
							{showMyAccountOptions && (
								<i className='fa-solid fa-chevron-up'></i>
							)}
							{!showMyAccountOptions && (
								<i className='fa-solid fa-chevron-down'></i>
							)}
						</p>
						<div>{showMyAccountOptions ? <Menu /> : ''}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
