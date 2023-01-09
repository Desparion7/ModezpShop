import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUsersList, deleteUser } from '../actions/usersActions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Message from '../UI/Message';
import Modal from '../UI/Modal';
import './UsersListScreen.css';

const UsersListScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [showModal, setShowModal] = useState(false);
	const [modalUserID, setModalUserID] = useState(2);

	const userLogin = useSelector((state) => state.userLogin);
	const usersList = useSelector((state) => state.usersList);
	const { loading, error, users } = usersList;

	useEffect(() => {
		if (userLogin.userDetailsInfo !== null) {
			if (userLogin.userDetailsInfo.isAdmin) {
				dispatch(getUsersList());
			}
		} else {
			navigate('/');
		}
	}, [dispatch, navigate, userLogin]);

	const showModalHandler = () => {
		setShowModal(true);
	};
	const closeModalHandler = () => {
		setShowModal(false);
	};
	const deleteHandler = (id) => {
		dispatch(deleteUser(id));
		setShowModal(false);
		dispatch(getUsersList());
	};

	return (
		<>
			{showModal && (
				<Modal
					modalTitle={'Usuwanie użytkownika'}
					modalText={
						'Czy na pewno chcesz usunąć danego użytkownika? Nieodwracalnie utracisz wszelkie dane.'
					}
					rightBtn={deleteHandler}
					rightBtnText={'Usuń'}
					leftBtn={closeModalHandler}
					leftBtnText={'Anuluj'}
					modalID={modalUserID}
				></Modal>
			)}
			<div className='userslist-container'>
				{loading ? (
					<LoadingSpinner />
				) : error ? (
					<Message>{error}</Message>
				) : (
					<div className='margin-section'>
						<Link to='/profile'>
							<button className='btn'>Wróć</button>
						</Link>
						<div className='userslist'>
							<div className='userslist-box'>
								<div className='userslist-header'>
									<div className='userslist-header-text'>ID</div>
									<div className='userslist-header-text'>Nazwa użytkownika</div>
									<div className='userslist-header-text'>
										E-mail użytkownika
									</div>
									<div className='userslist-header-text userslist-text-center'>
										Status admina
									</div>
									<div className='userslist-buttons'></div>
								</div>
								<div className='userslist-body'>
									{users.map((user) => (
										<div className='userslist-body-user' key={user._id}>
											<div className='userslist-body-text'>{user._id}</div>
											<div className='userslist-body-text'>{user.name}</div>
											<div className='userslist-body-text'>{user.email}</div>
											<div className='userslist-text-center'>
												{user.isAdmin ? (
													<i
														className='fas fa-check'
														style={{ color: 'green' }}
													></i>
												) : (
													<i
														className='fas fa-times'
														style={{ color: 'red' }}
													></i>
												)}
											</div>
											<div className='userslist-body-text'>
												<Link to={`/admin/user/${user._id}/edit`}>
													<button className='btn-edit'>
														<i className='fas fa-edit'></i>
													</button>
												</Link>
												<button
													className='btn-remove'
													onClick={() => {
														setModalUserID(user._id);
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
						<div className='userslist-small'>
							{users.map((user) => (
								<div className='userslist-small-user' key={user._id}>
									<div className='userslist-small-body'>
										<div className='userslist-small-header'>ID: </div>
										<div>{user._id}</div>
									</div>
									<div className='userslist-small-body'>
										<div className='userslist-small-header'>Nazwa:</div>
										<div> {user.name}</div>
									</div>
									<div className='userslist-small-body'>
										<div className='userslist-small-header'>Email: </div>
										<div>{user.email}</div>
									</div>
									<div className='userslist-small-body'>
										<div className='userslist-small-header'>
											Status admina:{' '}
										</div>
										{user.isAdmin ? (
											<i
												className='fas fa-check'
												style={{ color: 'green' }}
											></i>
										) : (
											<i className='fas fa-times' style={{ color: 'red' }}></i>
										)}
									</div>
									<div>
										<Link to={`/admin/user/${user._id}/edit`}>
											<button className='btn-edit'>
												<i className='fas fa-edit'></i>
											</button>
										</Link>
										<button
											className='btn-remove'
											onClick={() => {
												setModalUserID(user._id);
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
				)}
			</div>
		</>
	);
};

export default UsersListScreen;
