import { createSlice } from '@reduxjs/toolkit';

const updateInitialState = {};

const userUpdateSlice = createSlice({
	name: 'update-user',
	initialState: updateInitialState,
	reducers: {
		userUpdateRequest(state) {
			state.loading = true;
			state.success = false;
		},
		userUpdateSuccess(state, action) {
			state.loading = false;
			state.userInfo = action.payload;
			state.success = true;
		},
		userUpdateFail(state, action) {
			state.loading = false;
			state.error = action.payload;
			state.success = false;
		},
	},
});

export default userUpdateSlice;
