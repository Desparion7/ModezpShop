import { createSlice } from '@reduxjs/toolkit';

const productDeleteState = { success: false, loading: false, error: null };

const productDeleteSlice = createSlice({
	name: 'product-delete',
	initialState: productDeleteState,
	reducers: {
		productDeleteRequest(state) {
			state.loading = true;
		},
		productDeleteSuccess(state) {
			state.success = true;
			state.loading = false;
			state.error = null;
		},
		productDeleteFail(state, action) {
			state.loading = false;
			state.error = action.payload;
			state.success = false;
		},
	},
});

export default productDeleteSlice;