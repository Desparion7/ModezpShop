import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderUserList } from '../actions/orderActions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';
import './OrdersUserListScreen.css';

const OrdersUserListScreen = () => {
	const dispatch = useDispatch();

	const userOrdersList = useSelector((state) => state.ordersUserList);
	const { ordersList, loading, error } = userOrdersList;
	const reverseOrderList = ordersList.map((item) => item).reverse();

	useEffect(() => {
		dispatch(getOrderUserList());
	}, [dispatch]);
	return (
		<div className='orders-list-main-box margin-section'>
			<h1>Moje zamówienia</h1>
			<div className='orders-list-box'>
				{loading ? (
					<LoadingSpinner />
				) : error ? (
					<Message>{error}</Message>
				) : ordersList.length > 0 ? (
					reverseOrderList.map((order) => (
						<div className='order-list-border' key={order._id}>
							<div className='order-list-detail'>
								<h2>ID zamówinia: {order._id}</h2>
							</div>
							<div className='order-list-details'>
								<div className='order-list-first-box box-shadow'>
									<div className='order-list-detail'>
										<div>Koszt zakupu:</div>
										<div className='orders-list-info'>
											{order.totalPrice} zł
										</div>
									</div>
								</div>
								<div className='order-list-second-box box-shadow'>
									<div className='order-list-detail'>
										<div>Data zamówienia:</div>
										<div className='orders-list-info'>
											{order.createdAt.substring(0, 10)}
										</div>
									</div>
									<div className='order-list-detail'>
										<div>Data opłacenia:</div>
										{order.isPaid ? (
											<div className='orders-list-info'>
												{order.paidAt.substring(0, 10)}
											</div>
										) : (
											<div>brak</div>
										)}
									</div>
									<div className='order-list-detail'>
										<div>Data dostarczenia:</div>
										{order.isDelivered ? (
											<div className='orders-list-info '>
												{order.deliveredAt.substring(0, 10)}
											</div>
										) : (
											<div>brak</div>
										)}
									</div>
								</div>
							</div>
							{order.orderItems.map((product) => (
								<div className='order-list-product' key={product._id}>
									<div className='order-img-name-box'>
										<div className='order-list-image-box'>
											<img
												src={
													product.image.length > 1
														? product.image[0]
														: product.image
												}
												alt={product.name}
											/>
										</div>
										<div className='order-list-product-name'>
											<Link
												className='link'
												to={`/products/${product._id.substring(0, 24)}`}
											>
												{product.name} {product.size}
											</Link>
										</div>
									</div>
									<div className='order-review-qty-box'>
										<div className='order-list-product-review'>
											<Link
												className='order-list-product-review-link'
												to={`/product/review/${product._id.substring(0, 24)}`}
											>
												Oceń
											</Link>
										</div>
										<div className='order-list-product-qty'>
											{product.qty} szt.
										</div>
									</div>
								</div>
							))}
							<div className='order-list-btn-box'>
								<Link className='orders-list-btn' to={`/order/${order._id}`}>
									Szczegóły{' '}
								</Link>
							</div>
						</div>
					))
				) : (
					<Message>Brak zamówień</Message>
				)}
			</div>
		</div>
	);
};

export default OrdersUserListScreen;
