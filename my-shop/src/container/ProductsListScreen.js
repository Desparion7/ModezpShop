import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
	productsFetching,
	productDeleteById,
	productCreate,
} from '../actions/productsActions';
import { productCreateActions } from '../store';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';
import Modal from '../UI/Modal';
import Pagination from '../components/Pagination';
import './ProductsListScreen.css';

const ProductsListScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();

	const pageNumber = params.pageNumber;


	const [showModal, setShowModal] = useState(false);
	const [modalProductID, setModalProductID] = useState(2);

	const userLogin = useSelector((state) => state.userLogin);
	const productsList = useSelector((state) => state.products);
	const { products, loading, error, pages, page } = productsList;

	const productDelete = useSelector((state) => state.productDelete);
	const { success, error: deleteError } = productDelete;

	const newProductCreate = useSelector((state) => state.productCreate);
	const {
		success: createSuccess,
		error: createError,
		loading: createLoading,
		product: createProdukt,
	} = newProductCreate;

	

	useEffect(() => {
		dispatch(productCreateActions.productReset());
		if (userLogin.userDetailsInfo !== null) {
			if (userLogin.userDetailsInfo.isAdmin) {
				dispatch(productsFetching('', pageNumber, ''));
			}
		} else {
			navigate('/');
		}
		if (createSuccess) {
			navigate(`/admin/product/${createProdukt._id}/edit`);
		}
	}, [
		dispatch,
		navigate,
		userLogin,
		success,
		createSuccess,
		createProdukt,
		pageNumber,
	]);

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
	const createProductHandler = () => {
		dispatch(productCreate());
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
						{createError && <Message>{deleteError}</Message>}
						{createLoading && <LoadingSpinner />}
						<div className='margin-section'>
							<Link to='/profile'>
								<button className='btn'>Wróć</button>
							</Link>
							<button className='btn btn-add' onClick={createProductHandler}>
								Dodaj nowy produkt
							</button>
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
													to={`/products/${product._id}`}
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
														to={`/admin/product/${product._id}/edit`}
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
												to={`/products/${product._id}`}
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
											<Link
												to={`/admin/product/${product._id}/edit`}
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
					</>
				)}
				<Pagination
					pages={pages}
					page={page}
					isAdmin={true}
				
				/>
			</div>
		</>
	);
};

export default ProductsListScreen;
