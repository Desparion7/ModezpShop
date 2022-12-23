import { createSlice } from '@reduxjs/toolkit';
const orderDetailsInitialState = {
	loading: true,
	order: {
		orderItems: [],
		shippingAddress: {},
	},
};

const orderDetailsSlice = createSlice({
	name: 'order-detail',
	initialState: orderDetailsInitialState,
	reducers: {
		orderDetailsRequest(state) {
			state.loading = true;
		},
		orderDetailsSuccess(state, action) {
			state.loading = false;
			state.error = null;
			state.order = action.payload;
		},
		orderDetailsFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default orderDetailsSlice;
