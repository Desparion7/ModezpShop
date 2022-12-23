import { createSlice } from '@reduxjs/toolkit';

const registerInitialState = {};

const userRegisterSlice = createSlice({
	name: 'register-user',
	initialState: registerInitialState,
	reducers: {
		userRegisterRequest(state) {
			state.loading = true;
		},
		userRegisterSuccess(state, action) {
			state.loading = false;
			state.user = action.payload;
			state.error = null;
		},
		userRegisterFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		userRegisterReset() {
			return {};
		},
	},
});

export default userRegisterSlice;
