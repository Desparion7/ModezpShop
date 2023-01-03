import { createSlice } from '@reduxjs/toolkit';

const orderDeliverInitialState = {};

const orderDeliverSlice = createSlice({
	name: 'order-deliver',
	initialState: orderDeliverInitialState,
	reducers: {
		orderDeliverRequest(state) {
			state.loading = true;
		},
		orderDeliverSuccess(state) {
			state.loading = false;
			state.success = true;
		},
		orderDeliverFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		orderReset(state) {
			state.success = false;
			
		},
	},
});

export default orderDeliverSlice;