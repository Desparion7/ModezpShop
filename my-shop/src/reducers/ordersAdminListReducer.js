import { createSlice } from '@reduxjs/toolkit';

const ordersAdminListInitialState = {
	ordersList: [],
	loading: false,
	error: null,
};

const ordersAdminListSlice = createSlice({
	name: 'orders-admin-list',
	initialState: ordersAdminListInitialState,
	reducers: {
		ordersAdminListRequest(state) {
			state.loading = true;
		},
		ordersAdminListSuccess(state, action) {
			state.loading = false;
			state.ordersList = action.payload;
		},
		ordersAdminListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		ordersAdminListReset(state) {
			state.loading = false;
			state.error = null;
			state.ordersList = [];
		},
	},
});

export default ordersAdminListSlice;