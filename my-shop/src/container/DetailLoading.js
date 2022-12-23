import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from '../components/ProductDetail';
import { productDetailActions } from '../store';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';


const DetailLoading = () => {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product.product);
	const loading = useSelector((state) => state.product.loading);
	const error = useSelector((state) => state.product.error);

	const [loaded, setIsLoaded] = useState(false);
	const params = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				dispatch(productDetailActions.productDetailRequest());
				const res = await axios.get(`/api/products/${params.id}`);
				dispatch(productDetailActions.productDetailSuccess(res.data));
				setIsLoaded(true);
			} catch (error) {
				dispatch(
					productDetailActions.productDetailFail(
						error.response && error.response.data.message
							? error.response.data.message
							: error.message
					)
				);
			}
		};
		fetchProduct();
	}, [params.id, dispatch]);

	return (
		<>
			<div className='margin-section'>
				<Link to='/Modezp-Shop'>
					<button className='btn'>Wróć</button>
				</Link>
			</div>
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<Message>{error}</Message>
			) : (
				loaded && <ProductDetail product={product}></ProductDetail>
			)}
		</>
	);
};

export default DetailLoading;
