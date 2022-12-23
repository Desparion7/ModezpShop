import { createSlice } from '@reduxjs/toolkit';

const orderPayInitialState = {};

const orderPaySlice = createSlice({
	name: 'order-pay-reset',
	initialState: orderPayInitialState,
	reducers: {
		orderPayRequest(state) {
			state.loading = true;
		},
		orderPaySuccess(state) {
			state.loading = false;
			state.success = true;
		},
		orderPayFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		orderReset(state) {
			state.loading = false;
			state.success = false;
			state.error = null;
		},
	},
});

export default orderPaySlice;
