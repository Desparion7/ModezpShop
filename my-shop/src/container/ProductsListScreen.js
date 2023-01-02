import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
	productsFetching,
	productDeleteById,
} from '../actions/productsActions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';
import Modal from '../UI/Modal';
import './ProductsListScreen.css';

const ProductsListScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [showModal, setShowModal] = useState(false);
	const [modalProductID, setModalProductID] = useState(2);

	const userLogin = useSelector((state) => state.userLogin);
	const productsList = useSelector((state) => state.products);
	const productDelete = useSelector((state) => state.productDelete);
	const { success, error: deleteError } = productDelete;
	const { loading, error, products } = productsList;

	useEffect(() => {
		if (userLogin.userDetailsInfo !== null) {
			if (userLogin.userDetailsInfo.isAdmin) {
				dispatch(productsFetching());
			}
		} else {
			navigate('/Modezp-Shop');
		}
	}, [dispatch, navigate, userLogin, success]);

	const showModalHandler = () => {
		setShowModal(true);
	};
	const closeModalHandler = () => {
		setShowModal(false);
	};
	const deleteHandler = (id) => {
		dispatch(productDeleteById(id));
		setShowModal(false);
	};

	return (
		<>
			{showModal && (
				<Modal
					modalTitle={'Usuwanie produktu'}
					modalText={
						'Czy na pewno chcesz usunąć dany produkt? Nieodwracalnie utracisz wszelkie dane.'
					}
					rightBtn={deleteHandler}
					rightBtnText={'Usuń'}
					leftBtn={closeModalHandler}
					leftBtnText={'Anuluj'}
					modalID={modalProductID}
				></Modal>
			)}
			<div className='productslist-container'>
				{loading ? (
					<LoadingSpinner />
				) : error ? (
					<Message>{error}</Message>
				) : (
					<>
						{deleteError && <Message>{deleteError}</Message>}
						<div className='margin-section'>
							<div className='productslist'>
								<div className='productslist-box'>
									<div className='productslist-header'>
										<div className='productslist-header-text'>ID</div>
										<div className='productslist-header-text'>
											Nazwa produktu
										</div>
										<div className='productslist-header-text productslist-text-center'>
											Cena
										</div>
										<div className='productslist-header-text productslist-text-center'>
											Kategoria
										</div>
										<div className='productslist-buttons'></div>
									</div>
									<div className='productslist-body'>
										{products.map((product) => (
											<div className='productslist-body-user' key={product._id}>
												<div className='productslist-body-text'>
													{product._id}
												</div>
												<Link
													className='link'
													to={`/Modezp-Shop/products/${product._id}`}
												>
													<div className='productslist-body-text'>
														{product.name}
													</div>
												</Link>
												<div className='productslist-body-text productslist-text-center'>
													{product.price} zł
												</div>
												<div className='productslist-text-center'>
													{product.category}
												</div>
												<div className='productslist-body-text'>
													<Link
														to={`/Modezp-Shop/admin/product/${product._id}/edit`}
													>
														<button className='btn-edit'>
															<i className='fas fa-edit'></i>
														</button>
													</Link>
													<button
														className='btn-remove'
														onClick={() => {
															setModalProductID(product._id);
															showModalHandler();
														}}
													>
														<i className='fas fa-trash'></i>
													</button>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className='productslist-small'>
								{products.map((product) => (
									<div className='productslist-small-user' key={product._id}>
										<div className='productslist-small-body'>
											<div className='productslist-small-header'>ID: </div>
											<div>{product._id}</div>
										</div>
										<div className='productslist-small-body'>
											<div className='productslist-small-header'>Nazwa:</div>
											<Link
												className='link'
												to={`/Modezp-Shop/products/${product._id}`}
											>
												<div> {product.name}</div>
											</Link>
										</div>
										<div className='productslist-small-body'>
											<div className='productslist-small-header'>Cena: </div>
											<div>{product.price} zł</div>
										</div>
										<div className='productslist-small-body'>
											<div className='productslist-small-header'>
												Kategoria:{' '}
											</div>
											<div>{product.category}</div>
										</div>
										<div>
											<Link to={`/Modezp-Shop/admin/user/${product._id}/edit`}>
												<button className='btn-edit'>
													<i className='fas fa-edit'></i>
												</button>
											</Link>
											<button
												className='btn-remove'
												onClick={() => {
													setModalProductID(product._id);
													showModalHandler();
												}}
											>
												<i className='fas fa-trash'></i>
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default ProductsListScreen;
