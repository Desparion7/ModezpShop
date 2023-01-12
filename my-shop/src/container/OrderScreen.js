import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { detailsOrder, payOrder, deliverOrder } from '../actions/orderActions';
import { orderPayActions, orderDeliverActions } from '../store';
import Message from '../UI/Message';
import LoadingSpinner from '../UI/LoadingSpinner';
import './PlaceOrderScreen.css';

const OrderScreen = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();

	const userLogin = useSelector((state) => state.userLogin);
	const { userDetailsInfo } = userLogin;

	const orderInfo = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderInfo;

	const amount = order.totalPrice;

	const orderPay = useSelector((state) => state.orderPay);
	const { success: successPay, loading: loadingPay } = orderPay;

	const orderDeliver = useSelector((state) => state.orderDeliver);
	const { success: successDeliver, loading: loadingDeliver } = orderDeliver;

	//caluculate price
	const addDecimals = (num) => {
		return (Math.round(num * 100) / 100).toFixed(2);
	};
	const itemsPrice = addDecimals(
		order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	);

	useEffect(() => {
		if (!userLogin) {
			navigate('/Shop/login');
		}
		if (!order || successPay || successDeliver) {
			dispatch(orderPayActions.orderReset());
			dispatch(orderDeliverActions.orderReset());
			dispatch(detailsOrder(params.id));
		}

		if (!order || order._id !== params.id) dispatch(detailsOrder(params.id));
	}, [
		dispatch,
		params,
		order,
		successPay,
		successDeliver,
		userLogin,
		navigate,
	]);

	const successPaymentHandler = (paymentResult) => {
		dispatch(payOrder(params.id, paymentResult));
	};

	const deliveredHandler = () => {
		dispatch(deliverOrder(order));
	};
	const paidHandler = () => {
		const timestamp = Date.now();
		const timestampString = timestamp.toString();
		const randomString = Math.random().toString(36).substring(2, 15);
		const randomId = timestampString + randomString;
		dispatch(
			payOrder(params.id, {
				id: randomId,
				status: 'COMPLETED',
				update_time: timestamp,
				payer: { email_address: 'sb-qgkde23883619@personal.example.com' },
			})
		);
	};

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<Message>{error}</Message>
			) : (
				<div className='placeorder margin-section '>
					<div className='placeorder-summary box-shadow'>
						<div className='placeorder-box'>
							<h1>Zamówienie: {order._id}</h1>
							<div className='placeorder-form-title'>Adres do wysyłki:</div>
							<div>
								{order.shippingAddress.addressName}{' '}
								{order.shippingAddress.surname}
							</div>
							<div>
								{order.shippingAddress.postalCode} {order.shippingAddress.city}
							</div>
							<div>{order.shippingAddress.street}</div>
							<div>tel: {order.shippingAddress.phone}</div>
							{order.isDelivered ? (
								<Message
									style={{ backgroundColor: '#b3ebac', fontSize: '16px' }}
								>
									Zamówienie dostarczone {order.deliveredAt.substring(0, 10)}{' '}
									{order.deliveredAt.substring(11, 16)}
								</Message>
							) : (
								<Message style={{ fontSize: '16px' }}>
									Zamówienie niedostarczone
								</Message>
							)}
						</div>
						<div className='placeorder-box'>
							<div className='placeorder-form-title'>Forma płatności:</div>
							<div>{order.paymentMethod}</div>
							{order.isPaid ? (
								<Message
									style={{ backgroundColor: '#b3ebac', fontSize: '16px' }}
								>
									Zamówienie opłacone {order.paidAt.substring(0, 10)}{' '}
									{order.paidAt.substring(11, 16)}
								</Message>
							) : (
								<Message style={{ fontSize: '16px' }}>
									Zamówienie nieopłacone
								</Message>
							)}
						</div>
						<div className='placeorder-box'>
							<div className='placeorder-form-title'>Produkty:</div>
							{order.orderItems.length === 0 ? (
								<Message>Brak produktów!</Message>
							) : (
								order.orderItems.map((product) => (
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
											<Link
												className='link'
												to={`/products/${product._id.substring(0, 24)}`}
											>
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
								))
							)}
						</div>
					</div>

					<div className='box-shadow'>
						<div>Wartość produktów: {itemsPrice} zł</div>
						<div>{order.shippingMethod}</div>
						<div className='placeorder-full-price'>
							Razem z dostawą:
							<span className='full-price'> {order.totalPrice}</span> zł
						</div>
						{!order.isPaid && (
							<PayPalScriptProvider
								options={{
									'client-id':
										'AVhTiVGF5Edhvkdy7xRgVUNeYDMH1HL9cfsvdDCagZXqpgiylOPl_SWlFnfxP40n400HHXr2jDTz3t6m',
									currency: 'PLN',
								}}
							>
								{loadingPay && <LoadingSpinner />}
								<PayPalButtons
									createOrder={(data, actions) => {
										return actions.order.create({
											purchase_units: [
												{
													amount: {
														currency_code: 'PLN',
														value: amount,
													},
												},
											],
										});
									}}
									onApprove={function (data, actions) {
										return actions.order.capture().then(function (details) {
											successPaymentHandler(details);
										});
									}}
								/>
							</PayPalScriptProvider>
						)}
						{loadingDeliver && <LoadingSpinner />}
						{userDetailsInfo &&
							userDetailsInfo.isAdmin &&
							!order.isPaid &&
							!order.isDelivered && (
								<button className='btn' onClick={paidHandler}>
									Odznacz jako zapłacone
								</button>
							)}
						{userDetailsInfo &&
							userDetailsInfo.isAdmin &&
							order.isPaid &&
							!order.isDelivered && (
								<button className='btn' onClick={deliveredHandler}>
									Odznacz jako dostarczone
								</button>
							)}
					</div>
				</div>
			)}
		</>
	);
};

export default OrderScreen;
