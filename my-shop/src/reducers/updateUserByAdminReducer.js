import { createSlice } from '@reduxjs/toolkit';

const updateInitialState = { success: false, error: null, loading: false };

const userUpdateByAdminSlice = createSlice({
	name: 'update-user-by-admin',
	initialState: updateInitialState,
	reducers: {
		userUpdateByAdminRequest(state) {
			state.loading = true;
			state.success = false;
		},
		userUpdateByAdminSuccess(state, action) {
			state.loading = false;
			state.userInfo = action.payload;
			state.success = true;
		},
		userUpdateByAdminFail(state, action) {
			state.loading = false;
			state.error = action.payload;
			state.success = false;
		},
		userUpdateByAdminReset(state) {
			state.loading = false;
			state.error = null;
			state.success = false;
		},
	},
});

export default userUpdateByAdminSlice;
