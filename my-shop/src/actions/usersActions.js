import axios from 'axios';
import {
	userLoginActions,
	userRegisterActions,
	userDetailsActions,
	userUpdateActions,
} from '../store';
import store from '../store';

export const login = (email, password) => {
	return (dispatch) => {
		const sendLoginRequest = async () => {
			try {
				dispatch(userLoginActions.userLoginRequest());
				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				};
				const { data } = await axios.post(
					'/api/users/login',
					{
						email,
						password,
					},
					config
				);

				dispatch(userLoginActions.userLoginSuccess(data));
				localStorage.setItem(
					'userInfo',
					JSON.stringify(store.getState().userLogin)
				);
			} catch (error) {
				dispatch(
					userLoginActions.userLoginFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendLoginRequest();
	};
};

export const logout = () => (dispatch) => {
	localStorage.removeItem('userInfo');
	dispatch(userLoginActions.userLogout());
};

export const registerUser = (name, email, password) => {
	return (dispatch) => {
		const sendRegisterRequest = async () => {
			try {
				dispatch(userRegisterActions.userRegisterRequest());
				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				};
				const { data } = await axios.post(
					'/api/users',
					{
						email,
						password,
						name,
					},
					config
				);

				dispatch(userRegisterActions.userRegisterSuccess(data));
				dispatch(userLoginActions.userLoginSuccess(data));
			} catch (error) {
				dispatch(
					userRegisterActions.userRegisterFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRegisterRequest();
	};
};

export const getUserDetails = (id) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(userDetailsActions.userDetailsRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				const { data } = await axios.get(`/api/users/${id}`, config);

				dispatch(userDetailsActions.userDetailsSuccess(data));
			} catch (error) {
				dispatch(
					userDetailsActions.userDetailsFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRequest();
	};
};

export const updateUserProfile = (user) => {
	return (dispatch, getState) => {
		const sendRequest = async () => {
			try {
				dispatch(userUpdateActions.userUpdateRequest());

				const {
					userLogin: { userDetailsInfo },
				} = getState();

				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${userDetailsInfo.token}`,
					},
				};

				const { data } = await axios.put(`/api/users/profile`, user, config);
				dispatch(userUpdateActions.userUpdateSuccess(data));
				
			} catch (error) {
				dispatch(
					userUpdateActions.userUpdateFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		sendRequest();
	};
};
