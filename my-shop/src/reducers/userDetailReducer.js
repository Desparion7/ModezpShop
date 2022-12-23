import { createSlice } from '@reduxjs/toolkit';

const userDetailsState = { user: {} };

const userDetailsSlice = createSlice({
	name: 'user-details',
	initialState: userDetailsState,
	reducers: {
		userDetailsRequest(state) {
			state.loading = true;
		},
		userDetailsSuccess(state, action) {
			state.user = action.payload;
			state.loading = false;
		},
		userDetailsFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default userDetailsSlice;
