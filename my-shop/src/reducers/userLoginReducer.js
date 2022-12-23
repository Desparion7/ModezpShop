import { createSlice } from '@reduxjs/toolkit';

const loginInitialState = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: {
			loading: false,
			userDetailsInfo: null,
			error: null,
	  };

const userLoginSlice = createSlice({
	name: 'login-user',
	initialState: loginInitialState,
	reducers: {
		userLoginRequest(state) {
			state.loading = true;
		},
		userLoginSuccess(state, action) {
			state.loading = false;
			state.userDetailsInfo = action.payload;
			state.error = null;
		},
		userLoginFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		userLogout(state) {
			state.loading = false;
			state.userDetailsInfo = null;
			state.error = null;
		},
	},
});

export default userLoginSlice;
