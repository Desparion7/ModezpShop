import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Checkout from '../components/Checkout';
import { savePaymentMethod } from '../actions/paymentActions';
import './PaymentScreen.css';

const PaymentScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [paymentMethod, setPaymentMethod] = useState('PayPal');
	const { cartItems, deliveryPrice } = useSelector((state) => state.cart);

	const fullPrice = cartItems
		.reduce((acc, item) => acc + item.qty * item.price, 0)
		.toFixed(2);

	const fullPriceWithDelivery = (Number(fullPrice) + deliveryPrice).toFixed(2);
	
	const changePaymentHandler = (e) => {
		e.preventDefault();
		const paymentIcons = document.querySelectorAll('.payment-icon');
		paymentIcons.forEach((icon) =>
			icon.classList.remove('payment-photo-active')
		);
		e.target.classList.add('payment-photo-active');
		setPaymentMethod(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		navigate('/placeorder');
	};
	return (
		<div className='paymentscreen margin-section'>
			<div className='payment-box'>
				<Checkout step3></Checkout>
				<div className='payment-form-title'>Wybierz formę płatnosći:</div>
				<form
					onSubmit={(e) => {
						submitHandler(e);
					}}
					className='choose-payment-form'
					id='paymentform'
				>
					<div className='payment-box-method'>
						<div>
							<input
								src='./images/pp_cc_mark_111x69.jpg'
								type='image'
								label='PayPal or Credit Card'
								id='PayPal'
								name='paymentMethod'
								value='PayPal'
								className='payment-icon payment-photo-active'
								onClick={(e) => {
									changePaymentHandler(e);
								}}
								alt='PayPal logo'
							></input>
						</div>
						<div>
							<input
								type='image'
								src='./images/PAYU_LOGO_LIME-990x640.png'
								label='PayU'
								id='PayU'
								name='paymentMethod'
								value='PayU'
								className='payment-icon'
								onClick={(e) => {
									changePaymentHandler(e);
								}}
								alt='Pay logo'
								disabled
							></input>
						</div>
					</div>
				</form>
			</div>
			<div className='second-summary-box'>
				<div className='box-shadow'>
					<div>Wartość produktów: {fullPrice} zł</div>
					<div>Dostawa {deliveryPrice} zł</div>
					<div>
						Razem z dostawą:
						<span className='full-price'> {fullPriceWithDelivery}</span> zł
					</div>
					<div className='payment-second-summary-box-btn'>
						<button
							type='submit'
							form='paymentform'
							className='btn btn-payment-screen'
						>
							Podsumowanie
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentScreen;
