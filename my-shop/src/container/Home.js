import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import Product from '../components/Product';
import { productsFetching } from '../actions/productsActions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';
import Pagination from '../components/Pagination';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import './Home.css';

const Home = () => {
	const params = useParams();
	const keyword = params.keyword;
	const pageNumber = params.pageNumber;
	const category = params.category;

	const dispatch = useDispatch();
	const productsInfo = useSelector((state) => state.products);
	const { products, loading, error, pages, page } = productsInfo;

	useEffect(() => {
		dispatch(productsFetching(keyword, pageNumber, category));
	}, [dispatch, keyword, pageNumber, category]);

	return (
		<div>
			<Category />
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<Message>{error}</Message>
			) : (
				<>
					<div className='products-section margin-section box-shadow'>
						{products.map((product) => (
							<Product key={product._id} product={product} />
						))}
					</div>
					<Pagination
						pages={pages}
						page={page}
						keyword={keyword}
						category={category}
					></Pagination>
				</>
			)}

			<Carousel />
		</div>
	);
};

export default Home;
