import { createSlice } from '@reduxjs/toolkit';


const orderInitialState = {};

const orderSlice = createSlice({
	name: 'order',
	initialState: orderInitialState,
	reducers: {
		orderCreateRequest(state) {
			state.loading = true;
		},
		orderCreateSuccess(state, action) {
			state.loading = false;
			state.success = true;
			state.orderInfo = action.payload;
			state.error = null
		},
		orderCreateFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default orderSlice;