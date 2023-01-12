import { createSlice } from '@reduxjs/toolkit';

const localCartItems = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: {
			cartItems: [],
			delivery: null,
			deliveryPrice: null,
	  };

const cartInitialState = {
	cartItems: localCartItems.cartItems,
	delivery: localCartItems.delivery,
	deliveryPrice: localCartItems.deliveryPrice,
};

const cartItemsSlice = createSlice({
	name: 'cart',
	initialState: cartInitialState,
	reducers: {
		addItem(state, action) {
			const existItem = state.cartItems.find(
				(item) => item._id === action.payload._id
			);
			if (existItem) {
				existItem.qty = action.payload.qty;
			} else {
				state.cartItems.push(action.payload);
			}
		},
		incrementItem(state, action) {
			const existItem = state.cartItems.find(
				(item) => item._id === action.payload
			);

			if (existItem.qty < existItem.countInStock) {
				existItem.qty++;
			}
		},

		decrementItem(state, action) {
			const existItem = state.cartItems.find(
				(item) => item._id === action.payload
			);
			if (existItem.qty === 1 || existItem.qty === '1') {
				state.cartItems = state.cartItems.filter(
					(item) => item._id !== action.payload
				);
			} else {
				existItem.qty--;
			}
		},
		changeQuantity(state, action) {
			const existItem = state.cartItems.find(
				(item) => item._id === action.payload.id
			);
			if (action.payload.value > existItem.countInStock) {
				existItem.qty = existItem.countInStock;
			} else {
				existItem.qty = action.payload.value;
			}
		},

		removeItem(state, action) {
			state.cartItems = state.cartItems.filter(
				(item) => item._id !== action.payload
			);
		},
		addDelivery(state, action) {
			state.delivery = action.payload.delivery;
			state.deliveryPrice = action.payload.deliveryPrice;
		},
		resetCart(state) {
			state.cartItems = [];
			state.delivery = null;
			state.deliveryPrice = null;
		},
	},
});

export default cartItemsSlice;
