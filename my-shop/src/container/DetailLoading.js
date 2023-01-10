import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { productDetails } from '../actions/productsActions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';

const DetailLoading = () => {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product.product);
	const loading = useSelector((state) => state.product.loading);
	const error = useSelector((state) => state.product.error);

	const params = useParams();

	useEffect(() => {
		dispatch(productDetails(params.id));
	}, [params.id, dispatch]);

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<Message>{error}</Message>
			) : (
				product._id && <ProductDetail product={product}></ProductDetail>
			)}
		</>
	);
};

export default DetailLoading;
