import { createSlice } from '@reduxjs/toolkit';
const productDetailsInitialState = { product: {}, loading: false, error: null };

const productDetailSlice = createSlice({
	name: 'product',
	initialState: productDetailsInitialState,
	reducers: {
		productDetailRequest(state) {
			state.loading = true;
			state.success = false;
		},
		productDetailSuccess(state, action) {
			state.product = action.payload;
			state.loading = false;
			state.error = null;
		},
		productDetailFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default productDetailSlice;
