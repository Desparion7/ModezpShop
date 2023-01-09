import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getOrderAdminList } from '../actions/orderActions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';
import './OrdersAdminListScreen.css';

const OrdersAdminListScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userLogin = useSelector((state) => state.userLogin);
	const ordersAdminList = useSelector((state) => state.ordersAdminList);
	const { loading, error, ordersList } = ordersAdminList;

	useEffect(() => {
		if (userLogin.userDetailsInfo !== null) {
			if (userLogin.userDetailsInfo.isAdmin) {
				dispatch(getOrderAdminList());
			}
		} else {
			navigate('/');
		}
	}, [dispatch, navigate, userLogin]);

	return (
		<>
			<div className='orderslist-container'>
				{loading ? (
					<LoadingSpinner />
				) : error ? (
					<Message>{error}</Message>
				) : (
					<div className='margin-section'>
						<Link to='/profile'>
							<button className='btn'>Wróć</button>
						</Link>
						<div className='orderslist'>
							<div className='orderslist-box'>
								<div className='orderslist-header'>
									<div className='orderslist-header-text'>ID</div>
									<div className='orderslist-header-text'>Użytkownik</div>
									<div className='orderslist-header-text'>Kwota</div>
									<div className='orderslist-header-text'>Data zamówienia</div>
									<div className='orderslist-header-text'>Data opłacenia</div>
									<div className='orderslist-header-text'>
										Data dostarczenia
									</div>
									<div className='orderslist-buttons'></div>
								</div>
								<div className='orderslist-body'>
									{(ordersList.length > 0) &&
										ordersList.map((order) => (
											<div className='orderslist-body-user' key={order._id}>
												<div className='orderslist-body-text'>{order._id}</div>
												<div className='orderslist-body-text'>
													{order.user.name}
												</div>
												<div className='orderslist-body-text'>
													{order.totalPrice} zł
												</div>
												<div className='orderslist-body-text'>
													{order.createdAt.substring(0, 10)}
												</div>
												<div className='orderslist-text-center'>
													{order.isPaid ? (
														order.paidAt.substring(0, 10)
													) : (
														<i
															className='fas fa-times'
															style={{ color: 'red' }}
														></i>
													)}
												</div>
												<div className='orderslist-text-center'>
													{order.isDelivered ? (
														order.deliveredAt.substring(0, 10)
													) : (
														<i
															className='fas fa-times'
															style={{ color: 'red' }}
														></i>
													)}
												</div>
												<div className='orderslist-body-text'>
													<Link to={`/order/${order._id}`}>
														<button className='btn-edit'>
															<i className='fas fa-edit'></i>
														</button>
													</Link>
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
						<div className='orderslist-small'>
							{ordersList.map((order) => (
								<div className='orderslist-small-user' key={order._id}>
									<div className='orderslist-small-body'>
										<div className='orderslist-small-header'>ID: </div>
										<div>{order._id}</div>
									</div>
									<div className='orderslist-small-body'>
										<div className='orderslist-small-header'>Użytkownik:</div>
										<div>{order.user.name}</div>
									</div>
									<div className='orderslist-small-body'>
										<div className='orderslist-small-header'>Kwota: </div>
										<div>{order.totalPrice} zł</div>
									</div>
									<div className='orderslist-small-body'>
										<div className='orderslist-small-header'>
											Data zamówienia:{' '}
										</div>
										<div>{order.createdAt.substring(0, 10)}</div>
									</div>
									<div className='orderslist-small-body'>
										<div className='orderslist-small-header'>
											Data opłacenia:{' '}
										</div>
										{order.isPaid ? (
											order.paidAt.substring(0, 10)
										) : (
											<i className='fas fa-times' style={{ color: 'red' }}></i>
										)}
									</div>
									<div className='orderslist-small-body'>
										<div className='orderslist-small-header'>
											Data dostarczenia:{' '}
										</div>
										{order.isDelivered ? (
											order.deliveredAt.substring(0, 10)
										) : (
											<i className='fas fa-times' style={{ color: 'red' }}></i>
										)}
									</div>
									<div>
										<Link to={`/order/${order._id}`}>
											<button className='btn-edit'>
												<i className='fas fa-edit'></i>
											</button>
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default OrdersAdminListScreen;
