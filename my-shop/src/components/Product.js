import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './Product.css';

const Product = ({ product }) => {
	return (
		<div className='product-box'>
			<Link to={`/products/${product._id}`}>
				<img src={product.image[0]} alt={product.name}></img>
			</Link>
			<Link className='link-title' to={`/products/${product._id}`}>
				<div className='title'>{product.name}</div>
			</Link>
			<Rating
				className='rating'
				value={product.rating}
				text={product.numReviews}
			/>
			<div className='price'>{product.price} zł</div>
		</div>
	);
};

export default Product;
