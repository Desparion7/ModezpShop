import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProfileScreen.css';

const ProfileScreen = () => {
	const navigate = useNavigate();
	const userInfo = useSelector((state) => state.userLogin);
	const { userDetailsInfo } = userInfo;

	useEffect(() => {
		if (!userDetailsInfo) {
			navigate('/Modezp-Shop/login');
		}
	}, [navigate, userDetailsInfo]);

	return (
		<div className='profile-menu'>
			<div className='profile-user-name'>
				<h2>{userDetailsInfo? `Witaj ${userDetailsInfo.name}!` : ''}</h2>
				<h3>{userDetailsInfo ? userDetailsInfo.email : ''}</h3>
			</div>
			<div className='profil-info'>
				<div className='profile-info-account'>
					<h2>Ustawienia konta</h2>
					<div className='subtitle'>Adres do wysyłki:</div>
					<div>
						<div>Mateusz Woś</div>
						<div>37-716 Orły</div>
						<div>ul Lipowa 88</div>
						<div>tel 456 456 456</div>
					</div>
					<Link className='link-on-profile'to='/Modezp-Shop/profile/address'>Zmień adres do wysyłki</Link>
					<Link className='link-on-profile' to='/Modezp-Shop/profile/update'>Zmień ustawienia konta</Link>
				</div>
				<div className='profile-info-orders'>
					<h2>Zamówienia</h2>
					<Link className='link-on-profile' to='/Modezp-Shop/profile/orderlist'>
						Przejdz do moich zamówień
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
