import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import { cartActions } from '../store';
import Message from '../UI/Message';
import './PlaceOrderScreen.css';

const PlaceOrderScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cartItems, delivery, deliveryPrice } = useSelector(
		(state) => state.cart
	);
	const userInformations = useSelector((state) => state.userDetails.user);
	const payment = useSelector((state) => state.payment);

	const fullItemsPrice = cartItems
		.reduce((acc, item) => acc + item.qty * item.price, 0)
		.toFixed(2);

	const fullPriceWithDelivery = (
		Number(fullItemsPrice) + deliveryPrice
	).toFixed(2);

	const orderCreate = useSelector((state) => state.order);
	const { orderInfo, success, error } = orderCreate;

	useEffect(() => {
		if (success) {
			navigate(`/order/${orderInfo._id}`);
			dispatch(cartActions.resetCart());
			localStorage.setItem('cartItems', []);
		}
	}, [navigate, success, orderInfo, dispatch]);

	const placeOrderHandler = () => {
		dispatch(
			createOrder({
				orderItems: cartItems,
				shippingAddress: {
					addressName: userInformations.addressName,
					surname: userInformations.surname,
					street: userInformations.street,
					postalCode: userInformations.postalCode,
					city: userInformations.city,
					phone: userInformations.phone,
				},
				paymentMethod: payment.paymentMethod,
				itemsPrice: fullItemsPrice,
				shippingPrice: deliveryPrice,
				shippingMethod: delivery,
				totalPrice: fullPriceWithDelivery,
			})
		);
	};
	return (
		<>
			<div className='placeorder margin-section'>
				<div className='box-shadow'>
					<div className='placeorder-summary'>
						<div className='placeorder-box'>
							<div className='placeorder-form-title'>Adres do wysyłki:</div>
							<div>
								{userInformations.addressName} {userInformations.surname}
							</div>
							<div>
								{userInformations.postalCode} {userInformations.city}
							</div>
							<div>{userInformations.street}</div>
							<div>tel: {userInformations.phone}</div>
						</div>
						<div className='placeorder-box'>
							<div className='placeorder-form-title'>Forma płatności:</div>
							<div>{payment.paymentMethod}</div>
						</div>
						<div className='placeorder-box'>
							<div className='placeorder-form-title'>Produkty:</div>
							{cartItems.map((product) => (
								<div className='placeorder-item-box' key={product._id}>
									<div className='placeorder-image-box'>
										<img
											src={
												product.image.length > 1
													? product.image[0]
													: product.image
											}
											alt={product.name}
										/>
									</div>
									<div className='placeorder-product-name'>
										<Link className='link' to={`/products/${product._id}`}>
											{product.name} {product.size}
										</Link>
									</div>
									<div className='placeorder-amount-box'>
										<div className='placeorder-multiple-price'>
											<div>{product.qty}</div>
											<div>szt</div>
											<div>x</div>
											<div>{product.price}</div>
											<div>zł</div>
										</div>
									</div>
									<div className='placeorder-price-box'>
										<div className='placorder-product-total-price'>
											{(product.price * product.qty).toFixed(2)} zł
										</div>
									</div>
								</div>
							))}
						</div>
						{error && <Message style={{ fontSize: '0.8rem' }}>{error}</Message>}
					</div>
				</div>
				<div className='second-summary-box'>
					<div className='box-shadow'>
						<div>Wartość produktów: {fullItemsPrice} zł</div>
						<div>Dostawa: {deliveryPrice} zł</div>
						<div>
							Razem z dostawą:
							<span className='full-price'> {fullPriceWithDelivery}</span> zł
						</div>
						<div className='placeorder-second-summary-box-btn'>
							<button
								className='btn btn-placeorder-screen'
								onClick={placeOrderHandler}
							>
								Zapłać
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PlaceOrderScreen;
