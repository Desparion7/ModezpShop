import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProfileScreen.css';

const ProfileScreen = () => {
	const navigate = useNavigate();
	const userInfo = useSelector((state) => state.userLogin);
	const { userDetailsInfo } = userInfo;

	useEffect(() => {
		if (userInfo.userDetailsInfo === null) {
			navigate('/login');
		} else {
		}
	}, [navigate, userInfo]);

	return (
		<>
			{userDetailsInfo && (
				<div className='profile-menu'>
					<div className='profile-user-name box-shadow '>
						<h2>{userDetailsInfo ? `Witaj ${userDetailsInfo.name}!` : ''}</h2>
						<h3>{userDetailsInfo ? userDetailsInfo.email : ''}</h3>
					</div>
					<div className='profil-info box-shadow'>
						<div className='profile-user'>
							<h2 className='profile-user'>Ustawienia konta</h2>
							<div className='subtitle'>Adres do wysyłki:</div>
							{userDetailsInfo.addressName ? (
								<div className='profil-user-address'>
									<div>
										{userDetailsInfo.addressName} {userDetailsInfo.surname}
									</div>
									<div>{`${userDetailsInfo.postalCode} ${userDetailsInfo.city}`}</div>
									<div>{`ul. ${userDetailsInfo.street}`}</div>
									<div>{`tel ${userDetailsInfo.phone}`}</div>
								</div>
							) : (
								<div className='no-address'>Brak adresu do wysyłki</div>
							)}

							<Link
								className='link-on-profile'
								to='/profile/address'
							>
								Zmień adres do wysyłki {' '}
								<i className="fa-solid fa-arrow-right"></i>
							</Link>
							<Link
								className='link-on-profile'
								to='/profile/update'
							>
								Zmień ustawienia konta {' '}
								<i className="fa-solid fa-arrow-right"></i>
							</Link>
						</div>
						<div className='profile-info-orders'>
							<h2>Zamówienia</h2>
							<Link
								className='link-on-profile'
								to='/profile/orderlist'
							>
								Przejdz do moich zamówień {' '}
								<i className="fa-solid fa-arrow-right"></i>
							</Link>
						</div>
					</div>
					{userDetailsInfo.isAdmin && (
						<div className='profile-admin box-shadow '>
							<h2>Opcje Administratora</h2>
							<div className='profile-admin-options'>
								<Link
									className='link-on-profile'
									to='/admin/userslist'
								>
									Lista użytkowników{' '}
									<i className="fa-solid fa-arrow-right"></i>
								</Link>
								<Link
									className='link-on-profile'
									to='/admin/productslist'
								>
									Lista produktów {' '}
									<i className="fa-solid fa-arrow-right"></i>
								</Link>
								<Link
									className='link-on-profile'
									to='/admin/orderslist'
								>
									Lista zamówień{' '}
									<i className="fa-solid fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default ProfileScreen;
