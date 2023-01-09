import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Message from '../UI/Message';
import LoadingSpinner from '../UI/LoadingSpinner';
import { productDetails, productUpdate } from '../actions/productsActions';
import { productUpdateActions } from '../store';
import './ProductEditScreen.css';
import axios from 'axios';

const ProductEditScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();

	const productId = params.id;
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [images, setImages] = useState([]);
	const [countInStock, setCountInStock] = useState('');
	const [description, setDescription] = useState('');

	const [uploading1, setUploading1] = useState(false);
	const [uploading2, setUploading2] = useState(false);
	const [uploading3, setUploading3] = useState(false);
	const [uploading4, setUploading4] = useState(false);
	const [photo1, setPhoto1] = useState('/images/plus.png');
	const [photo2, setPhoto2] = useState('/images/plus.png');
	const [photo3, setPhoto3] = useState('/images/plus.png');
	const [photo4, setPhoto4] = useState('/images/plus.png');

	const userLogin = useSelector((state) => state.userLogin);
	const productInfo = useSelector((state) => state.product);
	const { product, error, loading } = productInfo;
	const productUpdateInfo = useSelector((state) => state.productUpdate);
	const {
		error: updateError,
		loading: updateLoading,
		success: updateSuccess,
	} = productUpdateInfo;
	useEffect(() => {
		if (updateSuccess) {
			dispatch(productDetails(productId));
			dispatch(productUpdateActions.productUpdateReset());
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
						if (product.image[0]) {
							setPhoto1(product.image[0]);
						} else {
							setPhoto1('/images/plus.png');
						}
						if (product.image[1]) {
							setPhoto2(product.image[1]);
						} else {
							setPhoto2('/images/plus.png');
						}
						if (product.image[2]) {
							setPhoto3(product.image[2]);
						} else {
							setPhoto3('/images/plus.png');
						}
						if (product.image[3]) {
							setPhoto4(product.image[3]);
						} else {
							setPhoto4('/images/plus.png');
						}
					}
				}
			} else {
				navigate('/');
			}
		}
	}, [dispatch, navigate, userLogin, product, productId, updateSuccess]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			productUpdate(productId, {
				name,
				price,
				description,
				image: images,
				category,
				countInStock,
			})
		);
	};
	const uploadFileHandler = async (e, setPhoto, setUploading, index) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('image', file);
		setUploading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};

			const { data } = await axios.post('/api/upload', formData, config);
			setPhoto(data);

			const newImages = images.slice();
			newImages.splice(index, 1, data);
			setImages(newImages);
			setUploading(false);
		} catch (error) {
			console.error(error);
			setUploading(false);
		}
	};

	const removePhotoHandler = (index) => {
		const newImages = images.slice();
		newImages.splice(index, 1);
		setImages(newImages);
	};

	return (
		<div className='margin-section change-product'>
			<Link to='/admin/productslist'>
				<button className='btn'>Wróć</button>
			</Link>
			{updateLoading && <LoadingSpinner />}
			{updateError && <Message>{error}</Message>}
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
							<div className='photo-upload box-shadow'>
								<div className='photo-upload-box'>
									<label htmlFor='upload-photo-1'>
										<button
											className='upload-photo-remove'
											onClick={(index = 0) => removePhotoHandler(index)}
										>
											<i className='fa-solid fa-xmark'></i>
										</button>
										{uploading1 && <LoadingSpinner />}
										{!uploading1 && <img src={photo1} alt='plus'></img>}
									</label>
									<input
										type='file'
										name='photo'
										id='upload-photo-1'
										onChange={(e, index = 0) =>
											uploadFileHandler(e, setPhoto1, setUploading1, index)
										}
									/>
									<label htmlFor='upload-photo-2'>
										<button
											className='upload-photo-remove'
											onClick={(index = 1) => removePhotoHandler(index)}
										>
											<i className='fa-solid fa-xmark'></i>
										</button>
										{uploading2 && <LoadingSpinner />}
										{!uploading2 && <img src={photo2} alt='plus'></img>}
									</label>
									<input
										type='file'
										name='photo'
										id='upload-photo-2'
										onChange={(e, index = 1) =>
											uploadFileHandler(e, setPhoto2, setUploading2, index)
										}
									/>
								</div>
								<div className='photo-upload-box'>
									<label htmlFor='upload-photo-3'>
										<button
											className='upload-photo-remove'
											onClick={(index = 2) => removePhotoHandler(index)}
										>
											<i className='fa-solid fa-xmark'></i>
										</button>
										{uploading3 && <LoadingSpinner />}
										{!uploading3 && <img src={photo3} alt='plus'></img>}
									</label>
									<input
										type='file'
										name='photo'
										id='upload-photo-3'
										onChange={(e, index = 2) =>
											uploadFileHandler(e, setPhoto3, setUploading3, index)
										}
									/>
									<label htmlFor='upload-photo-4'>
										<button
											className='upload-photo-remove'
											onClick={(index = 3) => removePhotoHandler(index)}
										>
											<i className='fa-solid fa-xmark'></i>
										</button>
										{uploading4 && <LoadingSpinner />}
										{!uploading4 && <img src={photo4} alt='plus'></img>}
									</label>
									<input
										type='file'
										name='photo'
										id='upload-photo-4'
										onChange={(e, index = 3) =>
											uploadFileHandler(e, setPhoto4, setUploading4, index)
										}
									/>
								</div>
							</div>
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
