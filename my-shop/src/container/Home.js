import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Product from '../components/Product';
import { productsFetching } from '../actions/productsActions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';
import './Home.css';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.products);
	const loading = useSelector((state) => state.products.loading);
	const error = useSelector((state) => state.products.error);

	useEffect(() => {
		dispatch(productsFetching());
	}, [dispatch]);

	return (
		<div>
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<Message>{error}</Message>
			) : (
				<div className='products-section margin-section'>
					{products.map((product) => (
						<Product key={product._id} product={product} />
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
