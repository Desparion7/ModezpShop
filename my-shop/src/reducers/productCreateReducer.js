import { createSlice } from '@reduxjs/toolkit';

const productCreateState = {
	success: false,
	loading: false,
	error: null,
	product: {},
};

const productCreateSlice = createSlice({
	name: 'product-create',
	initialState: productCreateState,
	reducers: {
		productCreateRequest(state) {
			state.loading = true;
		},
		productCreateSuccess(state, action) {
			state.success = true;
			state.loading = false;
			state.error = null;
			state.product = action.payload;
		},
		productCreateFail(state, action) {
			state.loading = false;
			state.error = action.payload;
			state.success = false;
		},
		productReset(state) {
			state.success = false;

		},
	},
});

export default productCreateSlice;
