import { createSlice } from '@reduxjs/toolkit';

const reviewCreateState = {
	loading: false,
	success: false,
	error: null,
	check: false,
};

const reviewCreateSlice = createSlice({
	name: 'product-review-create',
	initialState: reviewCreateState,
	reducers: {
		reviewCreateRequest(state) {
			state.loading = true;
		},
		reviewCreateSuccess(state) {
			state.loading = false;
			state.success = true;
		},
		reviewCreateFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		reviewCreateReset(state) {
			state.loading = false;
			state.success = false;
			state.error = null;
			state.check = false;
		},
		reviewCheck(state, action) {
			state.check = action.payload;
			state.loading = false;
		},
	},
});
export default reviewCreateSlice;
