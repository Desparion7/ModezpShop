import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Message from '../UI/Message';
import LoadingSpinner from '../UI/LoadingSpinner';
import { productDetails } from '../actions/productsActions';
import { userUpdateByAdminActions } from '../store';
import './ProductEditScreen.css';

const ProductEditScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();

	const productId = params.id;
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [images, setImages] = useState('');
	const [countInStock, setCountInStock] = useState('');
	const [description, setDescription] = useState('');

	const userLogin = useSelector((state) => state.userLogin);
	const productInfo = useSelector((state) => state.product);
	const { product, error, loading } = productInfo;
	// const userUpdateByAdmin = useSelector((state) => state.userUpdateByAdmin);
	// const {
	// 	error: updateError,
	// 	loading: updateLoading,
	// 	success: updateSuccess,
	// } = userUpdateByAdmin;
	useEffect(() => {
		if (false) {
			dispatch(productDetails(productId));
			dispatch(userUpdateByAdminActions.userUpdateByAdminReset());
		} else {
			if (userLogin.userDetailsInfo !== null) {
				if (userLogin.userDetailsInfo.isAdmin) {
					if (!product.name || product._id !== productId) {
						dispatch(productDetails(productId));
					} else {
						setName(product.name);
						setPrice(product.price);
						setCategory(product.category);
						setImages(product.image);
						setCountInStock(product.countInStock);
						setDescription(product.description);
					}
				}
			} else {
				navigate('/Modezp-Shop');
			}
		}
	}, [dispatch, navigate, userLogin, product, productId]);

	const submitHandler = (e) => {
		e.preventDefault();
		// dispatch(
		// 	updateUserByAdmin(userId, {
		// 		name,
		// 		email,
		// 		isAdmin,
		// 	})
		// );
	};

	return (
		<div className='margin-section change-product'>
			<Link to='/Modezp-Shop/admin/productslist'>
				<button className='btn'>Wróć</button>
			</Link>
			{/* {updateLoading && <LoadingSpinner />}
			{updateError && <Message>{error}</Message>} */}
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<Message>{error}</Message>
			) : (
				<div className='change-product-form-box'>
					<div className='change-product-form '>
						<h2 className='change-product-form-title'>
							Zmień parametry produktu
						</h2>
						<h3 className='change-product-form-id'>ID: {product._id}</h3>
						<form
							className=' change-product-form-options box-shadow'
							onSubmit={submitHandler}
						>
							<label>Nazwa:</label>
							<input
								type='text'
								value={name}
								required
								onChange={(e) => setName(e.target.value)}
							></input>
							<label>Cena:</label>
							<input
								type='number'
								value={price}
								required
								onChange={(e) => setPrice(e.target.value)}
							></input>
							<label>Kategoria:</label>
							<input
								type='text'
								value={category}
								required
								onChange={(e) => setCategory(e.target.value)}
							></input>
							<label>Zdjęcia:</label>
							<input
								type='text'
								value={images}
								required
								onChange={(e) => setImages(e.target.value)}
							></input>
							<label>Dostępna ilość:</label>
							<input
								type='number'
								value={countInStock}
								required
								onChange={(e) => setCountInStock(e.target.value)}
							></input>
							<label>Opis:</label>
							<textarea
								type='text'
								value={description}
								required
								onChange={(e) => setDescription(e.target.value)}
							></textarea>

							<button className=' change-product-btn' type='submit'>
								ZAKTUALIZUJ DANE
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductEditScreen;
