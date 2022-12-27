import { createSlice } from '@reduxjs/toolkit';

const userDeleteState = { success: false, loading: false, error: null };

const userDeleteSlice = createSlice({
	name: 'user-delete',
	initialState: userDeleteState,
	reducers: {
		userDeleteRequest(state) {
			state.loading = true;
		},
		userDeleteSuccess(state) {
			state.success = true;
			state.loading = false;
			state.error = null;
		},
		userDeleteFail(state, action) {
			state.loading = false;
			state.error = action.payload;
			state.success = false;
		},
	},
});

export default userDeleteSlice;
