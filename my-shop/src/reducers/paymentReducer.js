import { createSlice } from '@reduxjs/toolkit';

const paymentFromStorage = localStorage.getItem('paymentMethod')
	? JSON.parse(localStorage.getItem('paymentMethod'))
	: {paymentMethod:null};

const paymentSlice = createSlice({
	name: 'payment',
	initialState: paymentFromStorage,
	reducers: {
		savePaymentMethod(state, action) {
			state.paymentMethod = action.payload;
		},
	},
});

export default paymentSlice;
