import { paymentActions } from '../store';

export const savePaymentMethod = (data) => (dispatch) => {
	dispatch(paymentActions.savePaymentMethod(data));
};
