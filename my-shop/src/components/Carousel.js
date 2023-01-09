import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { topProductsFetching } from '../actions/productsActions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
	const dispatch = useDispatch();

	const topProductsInfo = useSelector((state) => state.topProducts);
	const { products } = topProductsInfo;

	useEffect(() => {
		dispatch(topProductsFetching());
	}, [dispatch]);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	};
	return (
		<div>
			<h2 className='bottom-slider-title'>Top produkty w sprzedaży</h2>
			<Slider {...settings} className='bottom-slider margin-section'>
				{products.map((product) => (
					<Link
						to={`/products/${product._id}`}
						key={product._id}
						className='link bottom-slider-products'
					>
						<div className='bottom-slider-products-img'>
							<img src={product.image[0]} alt={product.name} />
						</div>

						<h3 className='bottom-slider-products-name'>{product.name}</h3>
						<h3 className='bottom-slider-products-price'>{product.price} zł</h3>
					</Link>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
