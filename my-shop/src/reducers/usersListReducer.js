import { createSlice } from '@reduxjs/toolkit';

const usersListState = { users: [], loading: false, error: null };

const usersListSlice = createSlice({
	name: 'users-list',
	initialState: usersListState,
	reducers: {
		usersListRequest(state) {
			state.loading = true;
		},
		usersListSuccess(state, action) {
			state.loading = false;
			state.users = action.payload;
			state.error = null;
		},
		usersListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		usersListReset(state) {
			state.users = [];
			state.loading = false;
			state.error = null;
		},
	},
});

export default usersListSlice;
