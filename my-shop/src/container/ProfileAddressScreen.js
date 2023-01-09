import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Message from '../UI/Message';
import LoadingSpinner from '../UI/LoadingSpinner';

import { getUserDetails, updateUserProfile } from '../actions/usersActions';

const ProfileAddressScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [addressName, setAddressName] = useState('');
	const [surname, setSurname] = useState('');
	const [street, setStreet] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [city, setCity] = useState('');
	const [phone, setPhone] = useState('');
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
			if (!user._id) {
				dispatch(getUserDetails('profile'));
			}
			if(user._addressName) {
				setAddressName(user.addressName);
				setSurname(user.surname);
				setStreet(user.street);
				setPostalCode(user.postalCode);
				setCity(user.city);
				setPhone(user.phone);
			}
		}
	}, [dispatch, navigate, user, userDetailsInfo]);

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(
			updateUserProfile({
				id: user._id,
				addressName,
				surname,
				street,
				postalCode,
				city,
				phone,
			})
		);
		setShowSuccess(true);
	};

	return (
		<div className='margin-section'>
			<Link to='/profile'>
				<button className='btn'>Wróć</button>
			</Link>
			<div className='management-box '>
				<div className='change-address-form '>
					<h2 className='account-title'>Adres do wysyłki:</h2>
					{loading && <LoadingSpinner />}
					{success && successShow && (
						<Message style={{ backgroundColor: '#b3ebac' }}>
							Dane zostały zaktualizowane
						</Message>
					)}
					{error && <Message>{error}</Message>}
					<div className='management-container'>
						<div className='management-box-form'>
							<form className='box-shadow' onSubmit={submitHandler}>
								<label>Imię:</label>
								<input
									type='text'
									value={addressName}
									required
									onChange={(e) => setAddressName(e.target.value)}
								></input>
								<label>Nazwisko:</label>
								<input
									type='text'
									value={surname}
									required
									onChange={(e) => setSurname(e.target.value)}
								></input>
								<label>Ulica i numer domu:</label>
								<input
									type='text'
									value={street}
									required
									onChange={(e) => setStreet(e.target.value)}
								></input>
								<label>Kod pocztowy:</label>
								<input
									type='text'
									value={postalCode}
									required
									onChange={(e) => setPostalCode(e.target.value)}
								></input>
								<label>Miejscowość:</label>
								<input
									type='text'
									value={city}
									required
									onChange={(e) => setCity(e.target.value)}
								></input>
								<label>Telefon:</label>
								<input
									type='number'
									value={phone}
									required
									onChange={(e) => setPhone(e.target.value)}
								></input>
								<button className='btn btn-management' type='submit'>
									ZAKTUALIZUJ DANE
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileAddressScreen;
