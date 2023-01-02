import { createSlice } from '@reduxjs/toolkit';

const updateInitialState = {};

const productUpdateSlice = createSlice({
	name: 'update-product',
	initialState: updateInitialState,
	reducers: {
		productUpdateRequest(state) {
			state.loading = true;
			state.success = false;
		},
		productUpdateSuccess(state, action) {
			state.loading = false;
			state.userInfo = action.payload;
			state.success = true;
		},
		productUpdateFail(state, action) {
			state.loading = false;
			state.error = action.payload;
			state.success = false;
		},
		productUpdateReset(state) {
			state.success = false;
		},
	},
});

export default productUpdateSlice;
