import { createSlice } from "@reduxjs/toolkit";
const productsInitialState = { products: [], loading: false, error: null };

const productsListSlice = createSlice({
	name: 'products',
	initialState: productsInitialState,
	reducers: {
		productsListRequest(state) {
			state.loading = true;
		},
		productsListSuccess(state, action) {
			state.products = action.payload;
			state.loading = false;
		},
		productsListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});
export default productsListSlice