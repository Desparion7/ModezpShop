import { createSlice } from '@reduxjs/toolkit';

const ordersUserListInitialState = {
	ordersList: [],
	loading: false,
	error: null,
};

const ordersUserListSlice = createSlice({
	name: 'orders-user-list',
	initialState: ordersUserListInitialState,
	reducers: {
		orderUsersListRequest(state) {
			state.loading = true;
		},
		ordersUserListSuccess(state, action) {
			state.loading = false;
			state.ordersList = action.payload;
			state.reducers = null;
		},
		ordersUserListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		ordersUserListReset(state) {
			state.loading = false;
			state.error = null;
			state.ordersList = [];
		},
	},
});

export default ordersUserListSlice;
