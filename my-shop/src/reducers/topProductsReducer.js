import { createSlice } from '@reduxjs/toolkit';
const topProductsInitialState = { products: [], loading: false, error: null };

const topProductsListSlice = createSlice({
	name: 'top-products',
	initialState: topProductsInitialState,
	reducers: {
		topProductsListRequest(state) {
			state.loading = true;
		},
		topProductsListSuccess(state, action) {
			state.products = action.payload.products;
			state.loading = false;
		},
		topProductsListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});
export default topProductsListSlice;
