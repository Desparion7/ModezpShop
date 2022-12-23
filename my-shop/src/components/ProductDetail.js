import React, { useState, useRef } from 'react';
import Rating from './Rating';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store';
import store from '../store';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [mainImg, setImage] = useState(product.image[0]);
	const [amountInput, setAmountInput] = useState('1');
	

	const photos = useRef();

	const changePhotoHandler = (img, i) => {
		setImage(img);
		photos.current.childNodes.forEach((element) => {
			element.classList.remove('small-photo-box-active');
		});
		photos.current.childNodes[i].classList.add('small-photo-box-active');
	};

	const decrementHandler = () => {
		if (+amountInput === 1) {
		} else {
			setAmountInput(+amountInput - 1);
		}
	};
	const incrementHandler = () => {
		if (+amountInput >= product.countInStock) {
		} else {
			setAmountInput(+amountInput + 1);
		}
	};
	const valueChangeHandler = (e) => {
		setAmountInput(e.target.value);
	};
	const changeValueToDefault = (e) => {
		if (e.target.value < 1) {
			setAmountInput('1');
			console.log(amountInput);
		}
		if (e.target.value > product.countInStock) {
			setAmountInput(product.countInStock);
		}
	};

	const addToCart = () => {
		dispatch(
			cartActions.addItem({
				_id: product._id,
				name: product.name,
				image: product.image,
				price: product.price,
				countInStock: product.countInStock,
				qty: amountInput,
			})
		);
		localStorage.setItem(
			'cartItems',
			JSON.stringify(store.getState().cart.cartItems)
		);
	};

	const buyByCartHandler = () => {
		navigate('/Modezp-Shop/cart');
		addToCart();
	};
	const addToCartHandler = () => {
		addToCart();
	};

	return (
		<div className='margin-section'>
			<div className='box-shadow-productdetail'>
				<div className='detail-title'>{product.name}</div>
				<div className='product-detail-box'>
					<div className='photo-box'>
						<div className='photo-detail-box-left' ref={photos}>
							{product.image.map((img, i) => (
								<div
									key={i}
									className={
										i === 0
											? 'small-photo-box small-photo-box-active'
											: 'small-photo-box'
									}
									onClick={() => {
										changePhotoHandler(img, i);
									}}
								>
									<img src={img} alt='produkt' />
								</div>
							))}
						</div>
						<div className='photo-detail-box-right'>
							<img src={mainImg} alt={product.name} />
						</div>
					</div>

					<div className='buy-box'>
						<div className='detail-price'>Cena: {product.price} zł</div>
						<div className='product-detail-change-amount'>
							<button onClick={decrementHandler}>-</button>
							<input
								type='number'
								value={amountInput}
								onChange={valueChangeHandler}
								onMouseDown={changeValueToDefault}
								onBlur={changeValueToDefault}
							/>
							<button onClick={incrementHandler}>+</button>
						</div>
						<div className='detail-stock'>
							{product.countInStock > 0
								? `ze: ${product.countInStock} sztuk`
								: 'Brak na magazynie'}
						</div>

						<button
							className='btn'
							disabled={!product.countInStock > 0}
							onClick={addToCartHandler}
						>
							Dodaj do Koszyka
						</button>

						<button
							className='btn'
							disabled={!product.countInStock > 0}
							onClick={buyByCartHandler}
						>
							Kup teraz
						</button>
						<Rating value={product.rating} text={product.numReviews}></Rating>
					</div>
				</div>
			</div>
			<div className='box-shadow-product-description '>
				<div className='detail-box'>
					<div className='detail-description-tittle'>Opis</div>
					<div className='detail-description'>{product.description}</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
