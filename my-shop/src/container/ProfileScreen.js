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
			navigate('/Modezp-Shop/login');
		}else{
			
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
					<div className='profil-info'>
						<div className='profile-info-account'>
							<div className='profile-user box-shadow '>
								<h2>Ustawienia konta</h2>
								<div className='subtitle'>Adres do wysyłki:</div>
								{userDetailsInfo.addressName ? (
									<div>
										<div>
											{userDetailsInfo.addressName} {userDetailsInfo.surname}
										</div>
										<div>{`${userDetailsInfo.postalCode} ${userDetailsInfo.city}`}</div>
										<div>{`ul. ${userDetailsInfo.street}`}</div>
										<div>{`tel ${userDetailsInfo.phone}`}</div>
									</div>
								) : (
									<div>Brak adresu do wysyłki</div>
								)}

								<Link
									className='link-on-profile'
									to='/Modezp-Shop/profile/address'
								>
									Zmień adres do wysyłki
								</Link>
								<Link
									className='link-on-profile'
									to='/Modezp-Shop/profile/update'
								>
									Zmień ustawienia konta
								</Link>
							</div>
							{userDetailsInfo.isAdmin && (
								<div className='profile-admin box-shadow '>
									<h2>Opcje Administratora</h2>
									<div className='profile-admin-options'>
										<Link
											className='link-on-profile'
											to='/Modezp-Shop/admin/userslist'
										>
											Lista użytkowników
										</Link>
										<Link className='link-on-profile' to='/Modezp-Shop/admin/productslist'>
											Lista produktów
										</Link>
										<Link className='link-on-profile' to='/Modezp-Shop/admin/orderslist'>
											Lista zamówień
										</Link>
									</div>
								</div>
							)}
						</div>
						<div className='profile-info-orders box-shadow '>
							<h2>Zamówienia</h2>
							<Link
								className='link-on-profile'
								to='/Modezp-Shop/profile/orderlist'
							>
								Przejdz do moich zamówień
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProfileScreen;
