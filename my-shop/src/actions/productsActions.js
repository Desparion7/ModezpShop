import { productsListActions } from '../store';
import axios from 'axios';

export const productsFetching = () => {
	return (dispatch) => {
		const fetchProducts = async () => {
			try {
				dispatch(productsListActions.productsListRequest());
				const res = await axios.get('/api/products');
				dispatch(productsListActions.productsListSuccess(res.data));
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


