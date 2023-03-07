import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store';
import store from '../store';
import Checkout from '../components/Checkout';
import './CartScreen.css';
import Modal from '../UI/Modal';

const CartScreen = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [showModal, setShowModal] = useState(false);
	const [productIdToRemove, setProductIdToRemove] = useState('');

	const fullPrice = cartItems
		.reduce((acc, item) => acc + item.qty * item.price, 0)
		.toFixed(2);

	const updateLocalStorage = () => {
		localStorage.setItem('cartItems', JSON.stringify(store.getState().cart));
	};

	const decrementHandler = (id) => {
		dispatch(cartActions.decrementItem(id));
		updateLocalStorage();
	};
	const incrementHandler = (id) => {
		dispatch(cartActions.incrementItem(id));
		updateLocalStorage();
	};

	const valueChangeHandler = (id, event) => {
		dispatch(
			cartActions.changeQuantity({
				value: event.target.value,
				id,
			})
		);
		updateLocalStorage();
	};

	const changeValueToOne = (id, event) => {
		if (event.target.value === '' || event.target.value < 1) {
			dispatch(
				cartActions.changeQuantity({
					value: 1,
					id,
				})
			);
			updateLocalStorage();
		}
	};
	const removeHandler = () => {
		dispatch(cartActions.removeItem(productIdToRemove));
		updateLocalStorage();
		setShowModal(false)
	};

	const closeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<>
			{showModal && (
				<Modal
					modalTitle={'Usuwanie produktu z koszyka!'}
					modalText={'Czy na pewno chcesz usunąć produkt?'}
					rightBtn={removeHandler}
					rightBtnText={'Tak'}
					leftBtn={closeModalHandler}
					leftBtnText={'Nie'}
				></Modal>
			)}
			{cartItems.length < 1 ? (
				<div className='empty-cart margin-section'>
					<img src='./images/cart.png' alt='cart'></img>
					<Link to='/'>
						<button className='btn'>Dobierz produkty</button>
					</Link>
				</div>
			) : (
				<div className='cart margin-section box-shadow'>
					<div className='cart-box'>
						<Checkout step1 />
						{cartItems.map((product) => (
							<div className='item-box' key={product._id}>
								<div className='image-box'>
									<img
										src={
											product.image.length > 1
												? product.image[0]
												: product.image
										}
										alt={product.name}
									/>
								</div>
								<div className='product-name'>
									<Link
										className='link'
										to={`/products/${product._id.substring(0, 24)}`}
									>
										{product.name} {product.size}
									</Link>
								</div>
								<div className='change-amount-box'>
									<button onClick={decrementHandler.bind(null, product._id)}>
										-
									</button>
									<input
										type='number'
										value={product.qty}
										onChange={valueChangeHandler.bind(null, product._id)}
										onBlur={changeValueToOne.bind(null, product._id)}
									/>
									<button onClick={incrementHandler.bind(null, product._id)}>
										+
									</button>
								</div>
								<div className='price-box'>
									<div className='product-total-price'>
										{(product.price * product.qty).toFixed(2)} zł
									</div>
									<div className='product-price'>
										za sztukę {product.price} zł
									</div>
								</div>
								<div className='remove-box'>
									<i
										className='fa-regular fa-trash-can'
										onClick={() => {
											setShowModal(true);
											setProductIdToRemove(product._id);
											// removeHandler.bind(null, product._id);
										}}
									></i>
								</div>
							</div>
						))}
						<div className='summary-box'>
							<div className='summary-amount'>
								Razem <span>{fullPrice} zł</span>
							</div>
						</div>
						<Link to='/'>
							<button className='btn cart-add-products-btn'>
								<i className='fa-solid fa-arrow-left'></i> Dobierz produkty
							</button>
						</Link>
					</div>

					<div className='second-summary-box'>
						<div className='box-shadow'>
							<div>Wartość produktów: {fullPrice} zł</div>
							<div>Dostawa od: 0,00 zł</div>
							<div>Razem z dostawą: {fullPrice} zł</div>
							<Link to='/shipping'>
								<button className='btn btn-cart-screen'>
									Dostawa i płatność
									{'  '}
									<i className='fa-solid fa-arrow-right'></i>
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CartScreen;
