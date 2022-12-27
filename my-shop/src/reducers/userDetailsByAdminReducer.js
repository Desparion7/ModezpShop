import { createSlice } from '@reduxjs/toolkit';

const userDetailsByAdminState = { user: {}, error: null, loading: false };

const userDetailsByAdminSlice = createSlice({
	name: 'user-details-by-admin',
	initialState: userDetailsByAdminState,
	reducers: {
		userDetailsByAdminRequest(state) {
			state.loading = true;
		},
		userDetailsByAdminSuccess(state, action) {
			state.user = action.payload;
			state.loading = false;
			state.error = null;
		},
		userDetailsByAdminFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		userDetailsByAdminReset(state) {
			state.loading = false;
			state.error = null;
			state.user = {};
		},
	},
});

export default userDetailsByAdminSlice;
