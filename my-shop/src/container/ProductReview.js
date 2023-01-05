import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productDetails } from '../actions/productsActions';
import './ProductReview.css';

const ProductReview = () => {
	const dispatch = useDispatch();
	const params = useParams();

	const [value, setValue] = useState(0);
	const [ratingClick, setRatingClick] = useState(false);
	const product = useSelector((state) => state.product.product);

	useEffect(() => {
		dispatch(productDetails(params.id));
	}, [params.id, dispatch]);

	const mouseLeaveHandler = () => {
		if (!ratingClick) {
			setValue(0);
		}
	};

	return (
		<div className='margin-section review-main-box box-shadow'>
			<form className='review-form'>
				<div className='review-title'>Oceń produkt</div>
				{product.name && params.id === product._id && (
					<div className='review-product-details'>
						<div className='review-image-box'>
							<img
								src={
									product.image.length > 1 ? product.image[0] : product.image
								}
								alt={product.name}
							/>
						</div>
						<div className='review-product-title'>{product.name}</div>
					</div>
				)}
				<div className='review-rating'>
					<div className='review-rating-stars'> Twoja ocena:</div>
					<span>
						<i
							style={{ color: '#efb7ba' }}
							className={value >= 1 ? 'fas fa-star' : 'far fa-star'}
							onClick={() => {
								setValue(1);
								setRatingClick(true);
							}}
							onMouseEnter={() => setValue(1)}
							onMouseLeave={mouseLeaveHandler}
						></i>
					</span>
					<span>
						<i
							style={{ color: '#efb7ba' }}
							className={value >= 2 ? 'fas fa-star' : 'far fa-star'}
							onClick={() => {
								setValue(2);
								setRatingClick(true);
							}}
							onMouseEnter={() => {
								setValue(2);
							}}
							onMouseLeave={mouseLeaveHandler}
						></i>
					</span>
					<span>
						<i
							style={{ color: '#efb7ba' }}
							className={value >= 3 ? 'fas fa-star' : 'far fa-star'}
							onClick={() => {
								setValue(3);
								setRatingClick(true);
							}}
							onMouseEnter={() => setValue(3)}
							onMouseLeave={mouseLeaveHandler}
						></i>
					</span>
					<span>
						<i
							style={{ color: '#efb7ba' }}
							className={value >= 4 ? 'fas fa-star' : 'far fa-star'}
							onClick={() => {
								setValue(4);
								setRatingClick(true);
							}}
							onMouseEnter={() => setValue(4)}
							onMouseLeave={mouseLeaveHandler}
						></i>
					</span>
					<span>
						<i
							style={{ color: '#efb7ba' }}
							className={value >= 5 ? 'fas fa-star' : 'far fa-star'}
							onClick={() => {
								setValue(5);
								setRatingClick(true);
							}}
							onMouseEnter={() => setValue(5)}
							onMouseLeave={mouseLeaveHandler}
						></i>
					</span>
				</div>

				<div className='review-comment'>
					<textarea
						className='review-textarea'
						maxLength='300'
						placeholder='Opisz w kilku słowach jak oceniasz produkt.'
					></textarea>
				</div>
				<div className='review-form-button'>
					<button className='btn'>Wystaw ocenę</button>
				</div>
			</form>
		</div>
	);
};

export default ProductReview;
