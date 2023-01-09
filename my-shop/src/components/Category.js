import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { categoryActions } from '../store';
import './Category.css';

const Category = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const hoodiesRef = useRef(false);
	const sweaterRef = useRef();
	const shirtRef = useRef();

	const [hoodies, setHoodies] = useState(false);
	const [sweater, setSweater] = useState(false);
	const [shirts, setShirts] = useState(false);
	const [category, setCategory] = useState('');

	useEffect(() => {
		let handler = (e) => {
			if (hoodies) {
				if (!hoodiesRef.current.contains(e.target)) {
					setHoodies(false);
				}
			}
			if (sweater) {
				if (!sweaterRef.current.contains(e.target)) {
					setSweater(false);
				}
			}
			if (shirts) {
				if (!shirtRef.current.contains(e.target)) {
					setShirts(false);
				}
			}
		};
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	const changeCategoryHandler = (e) => {
		e.preventDefault();
		navigate(`/category/${category}`);
		dispatch(categoryActions.categoryChoose(category));
		setHoodies(false);
		setSweater(false);
		setShirts(false);
	};

	return (
		<>
			<form
				className='products-category-box-big'
				onSubmit={changeCategoryHandler}
			>
				<div className='products-category'>
					<button
						type='submit'
						className='category-type'
						onClick={() => {
							setCategory('piżamy');
						}}
					>
						Piżamy
					</button>
				</div>
				<div className='products-category'>
					<div className='category-type' onClick={() => setHoodies(!hoodies)}>
						Bluzy
					</div>
					{hoodies && (
						<div
							className='under-categories-box'
							onMouseLeave={() => setHoodies(false)}
							ref={hoodiesRef}
						>
							<button
								type='submit'
								className='under-categorie'
								onClick={() => {
									setCategory('bluzy damskie');
								}}
							>
								Bluzy damskie
							</button>
							<button
								type='submit'
								className='under-categorie'
								onClick={() => {
									setCategory('bluzy męskie');
								}}
							>
								Bluzy męskie
							</button>
						</div>
					)}
				</div>
				<div className='products-category'>
					<div className='category-type' onClick={() => setSweater(!sweater)}>
						Swetry
					</div>
					{sweater && (
						<div
							className='under-categories-box'
							onMouseLeave={() => setSweater(false)}
							ref={sweaterRef}
						>
							<button
								type='submit'
								className='under-categorie'
								onClick={() => {
									setCategory('swetry damskie');
								}}
							>
								Swetry damskie
							</button>
							<button
								type='submit'
								className='under-categorie'
								onClick={() => {
									setCategory('swetry męskie');
								}}
							>
								Swetry męskie
							</button>
						</div>
					)}
				</div>
				<div className='products-category'>
					<div className='category-type' onClick={() => setShirts(!shirts)}>
						Koszulki
					</div>
					{shirts && (
						<div
							className='under-categories-box'
							onMouseLeave={() => setShirts(false)}
							ref={shirtRef}
						>
							<button
								type='submit'
								className='under-categorie'
								onClick={() => {
									setCategory('koszulki damskie');
								}}
							>
								Koszulki damskie
							</button>
							<button
								type='submit'
								className='under-categorie'
								onClick={() => {
									setCategory('koszulki męskie');
								}}
							>
								Koszulki męskie
							</button>
						</div>
					)}
				</div>
				<div className='products-category'>
					<button
						className='category-type'
						onClick={() => setCategory('stroje kąpielowe')}
					>
						Stroje kąpielowe
					</button>
				</div>
				<div className='products-category'>
					<button
						type='submit'
						className='category-type'
						onClick={() => setCategory('pozostałe')}
					>
						Pozostałe
					</button>
				</div>
			</form>
		</>
	);
};

export default Category;
