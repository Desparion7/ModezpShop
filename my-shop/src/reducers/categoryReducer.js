import { createSlice } from '@reduxjs/toolkit';
const categoryInitialState = { category: null };

const categorySlice = createSlice({
	name: 'category',
	initialState: categoryInitialState,
	reducers: {
		categoryChoose(state, action) {
			state.category = action.payload;
		},
		categoryReset(state) {
			state.category = null;
		},
	},
});

export default categorySlice;
