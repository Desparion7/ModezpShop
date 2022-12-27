import { configureStore } from '@reduxjs/toolkit';

import productsListSlice from './reducers/productsListReducer';
import productDetailSlice from './reducers/productDetailReducer';

import userLoginSlice from './reducers/userLoginReducer';
import userRegisterSlice from './reducers/userRegisterReducer';
import userDetailsSlice from './reducers/userDetailReducer';
import userUpdateSlice from './reducers/updateUserReducer';
import usersListSlice from './reducers/usersListReducer';
import userDeleteSlice from './reducers/userDeleteReducer';

import paymentSlice from './reducers/paymentReducer';
import cartItemsSlice from './reducers/cartReducer';

import orderSlice from './reducers/orderReducer';
import orderDetailsSlice from './reducers/orderDetailsReducer';
import orderPaySlice from './reducers/orderPayReducer';
import ordersUserListSlice from './reducers/ordersUserListReducer';

const store = configureStore({
	reducer: {
		products: productsListSlice.reducer,
		product: productDetailSlice.reducer,

		cart: cartItemsSlice.reducer,
		payment: paymentSlice.reducer,
		order: orderSlice.reducer,
		orderDetails: orderDetailsSlice.reducer,
		orderPay: orderPaySlice.reducer,
		ordersUserList: ordersUserListSlice.reducer,

		userLogin: userLoginSlice.reducer,
		userRegister: userRegisterSlice.reducer,
		userDetails: userDetailsSlice.reducer,
		userUpdate: userUpdateSlice.reducer,
		usersList: usersListSlice.reducer,
		userDelete: userDeleteSlice.reducer,
	},
});
export const productsListActions = productsListSlice.actions;
export const productDetailActions = productDetailSlice.actions;

export const cartActions = cartItemsSlice.actions;
export const paymentActions = paymentSlice.actions;
export const orderActions = orderSlice.actions;
export const orderDetailsActions = orderDetailsSlice.actions;
export const orderPayActions = orderPaySlice.actions;
export const ordersUserListActions = ordersUserListSlice.actions;

export const userLoginActions = userLoginSlice.actions;
export const userRegisterActions = userRegisterSlice.actions;
export const userDetailsActions = userDetailsSlice.actions;
export const userUpdateActions = userUpdateSlice.actions;
export const usersListActions = usersListSlice.actions;
export const userDeleteActions = userDeleteSlice.actions;

export default store;
