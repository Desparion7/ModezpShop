import {
	orderActions,
	orderDetailsActions,
	orderPayActions,
	ordersUserListActions,
	ordersAdminListActions,
	orderDeliverActions,
} from '../store';
import axios from 'axios';

export const createOrder = (order) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(orderActions.orderCreateRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();
				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				const { data } = await axios.post(`/api/orders`, order, config);

				dispatch(orderActions.orderCreateSuccess(data));
			} catch (error) {
				dispatch(
					orderActions.orderCreateFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRequest();
	};
};
export const detailsOrder = (id) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(orderDetailsActions.orderDetailsRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();
				const config = {
					headers: {
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				const { data } = await axios.get(`/api/orders/${id}`, config);

				dispatch(orderDetailsActions.orderDetailsSuccess(data));
			} catch (error) {
				dispatch(
					orderDetailsActions.orderDetailsFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRequest();
	};
};

export const orderUpdatePaid = (orderId, paymentResult) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(orderPayActions.orderPayRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();
				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				const { data } = await axios.put(
					`/api/orders/${orderId}/pay`,
					paymentResult,
					config
				);

				dispatch(orderPayActions.orderPaySuccess(data));
			} catch (error) {
				dispatch(
					orderPayActions.orderPayFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRequest();
	};
};

export const payOrder = (orderId, paymentResult) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(orderPayActions.orderPayRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				const { data } = await axios.put(
					`/api/orders/${orderId}/pay`,
					paymentResult,
					config
				);

				dispatch(orderPayActions.orderPaySuccess(data));
			} catch (error) {
				dispatch(
					orderPayActions.orderPayFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRequest();
	};
};
export const deliverOrder = (order) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(orderDeliverActions.orderDeliverRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				const { data } = await axios.put(
					`/api/orders/${order._id}/deliver`,
					{},
					config
				);

				dispatch(orderDeliverActions.orderDeliverSuccess(data));
			} catch (error) {
				dispatch(
					orderDeliverActions.orderDeliverFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRequest();
	};
};

export const getOrderUserList = () => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(ordersUserListActions.orderUsersListRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};
				const { data } = await axios.get(`/api/orders/myorders`, config);

				dispatch(ordersUserListActions.ordersUserListSuccess(data));
			} catch (error) {
				dispatch(
					ordersUserListActions.ordersUserListFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRequest();
	};
};

export const getOrderAdminList = () => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(ordersAdminListActions.ordersAdminListRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};
				const { data } = await axios.get(`/api/orders`, config);

				dispatch(ordersAdminListActions.ordersAdminListSuccess(data));
			} catch (error) {
				dispatch(
					ordersAdminListActions.ordersAdminListFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRequest();
	};
};
