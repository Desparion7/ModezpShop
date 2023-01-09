
import {
	productsListActions,
	productDetailActions,
	productDeleteActions,
	productCreateActions,
	productUpdateActions,
	reviewCreateActions,
	topProductsListActions,
} from '../store';
import axios from 'axios';

export const productsFetching = (
	keyword = '',
	pageNumber = '',
	category = ''
) => {
	return (dispatch) => {
		const fetchProducts = async () => {
			try {
				dispatch(productsListActions.productsListRequest());
				const { data } = await axios.get(
					`/api/products?keyword=${keyword}&pageNumber=${pageNumber}&category=${category}`
				);
				dispatch(productsListActions.productsListSuccess(data));
			} catch (error) {
				dispatch(
					productsListActions.productsListFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};

		fetchProducts();
	};
};
export const productDetails = (id) => {
	return (dispatch) => {
		const sendRequest = async () => {
			try {
				dispatch(productDetailActions.productDetailRequest());
				const res = await axios.get(`/api/products/${id}`);
				dispatch(productDetailActions.productDetailSuccess(res.data));
			} catch (error) {
				dispatch(
					productDetailActions.productDetailFail(
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
export const productDeleteById = (id) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(productDeleteActions.productDeleteRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				await axios.delete(`/api/products/${id}`, config);
				dispatch(productDeleteActions.productDeleteSuccess());
			} catch (error) {
				dispatch(
					productDeleteActions.productDeleteFail(
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
export const productCreate = () => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(productCreateActions.productCreateRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				const { data } = await axios.post(`/api/products`, {}, config);
				dispatch(productCreateActions.productCreateSuccess(data));
			} catch (error) {
				dispatch(
					productCreateActions.productCreateFail(
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
export const productUpdate = (productId, product) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(productUpdateActions.productUpdateRequest());

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
					`/api/products/${productId}`,
					product,
					config
				);
				dispatch(productUpdateActions.productUpdateSuccess(data));
			} catch (error) {
				dispatch(
					productUpdateActions.productUpdateFail(
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

export const reviewCreate = (productId, review) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(reviewCreateActions.reviewCreateRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				await axios.post(`/api/products/${productId}/review`, review, config);
				dispatch(reviewCreateActions.reviewCreateSuccess());
			} catch (error) {
				dispatch(
					reviewCreateActions.reviewCreateFail(
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
export const checkReview = (productId) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(reviewCreateActions.reviewCreateRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				const { data } = await axios.post(
					`/api/products/${productId}/check`,
					{},
					config
				);
				dispatch(reviewCreateActions.reviewCheck(data));
			} catch (error) {
				dispatch(
					reviewCreateActions.reviewCreateFail(
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

export const topProductsFetching = () => {
	return (dispatch) => {
		const fetchProducts = async () => {
			try {
				dispatch(topProductsListActions.topProductsListRequest());
				const { data } = await axios.get(`/api/products/top`);
				dispatch(topProductsListActions.topProductsListSuccess(data));
			} catch (error) {
				dispatch(
					topProductsListActions.topProductsListFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};

		fetchProducts();
	};
};
