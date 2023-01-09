import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { categoryActions } from '../store';
import './CategorySmall.css';

const CategorySmall = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const hoodiesRef = useRef(false);
	const sweaterRef = useRef(false);
	const shirtRef = useRef(false);
	const categoriesRef = useRef(false);

	const [categories, setCategories] = useState(false);
	const [hoodies, setHoodies] = useState(false);
	const [sweater, setSweater] = useState(false);
	const [shirts, setShirts] = useState(false);
	const [category, setCategory] = useState('');

	useEffect(() => {
		let handler = (e) => {
			if (categories) {
				if (
					!categoriesRef.current.contains(e.target) &&
					!e.target.parentElement.classList.contains('category-btn-toggle')
				) {
					setCategories(false);
				}
			}
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
		setCategories(false);
	};

	return (
		<form
			className='products-category-box-small'
			onSubmit={changeCategoryHandler}
		>
			<div className='products-category-small-menu'>
				<div className='products-category-small-button category-btn-toggle'>
					<div
						className='products-category-text-btn'
						onClick={() => {
							setCategories(!categories);
						}}
					>
						Kategorie
					</div>
					<div
						className='products-category-btn category-btn-toggle'
						onClick={() => {
							setCategories(!categories);
						}}
					>
						<i className=' fa-solid fa-bars'></i>
					</div>
				</div>
				{categories && (
					<div
						className='products-category-small-undercategory-menu'
						ref={categoriesRef}
					>
						<div className='products-category-small-undercategory'>
							<button
								type='submit'
								className='category-type-small'
								onClick={() => {
									setCategory('piżamy');
								}}
							>
								Piżamy
							</button>
						</div>
						<div className='products-category-small-undercategory'>
							<div
								className='category-type-small'
								onClick={() => {
									setHoodies(!hoodies);
									setCategories(false);
								}}
							>
								Bluzy
							</div>
						</div>
						<div className='products-category-small-undercategory'>
							<div
								className='category-type-small'
								onClick={() => {
									setSweater(!sweater);
									setCategories(false);
								}}
							>
								Swetry
							</div>
						</div>
						<div className='products-category-small-undercategory'>
							<div
								className='category-type-small'
								onClick={() => {
									setShirts(!shirts);
									setCategories(false);
								}}
							>
								Koszulki
							</div>
						</div>
						<div className='products-category-small-undercategory'>
							<button
								className='category-type-small'
								onClick={() => {
									setCategory('stroje kąpielowe');
								}}
							>
								Stroje kąpielowe
							</button>
						</div>
						<div className='products-category-small-undercategory'>
							<button
								className='category-type-small'
								onClick={() => {
									setCategory('pozostałe');
								}}
							>
								Pozostałe
							</button>
						</div>
					</div>
				)}
				{hoodies && (
					<div
						className='under-categories-box-small'
						onMouseLeave={() => setHoodies(false)}
						ref={hoodiesRef}
					>
						<button
							type='submit'
							className='under-categorie-small'
							onClick={() => {
								setCategory('bluzy damskie');
							}}
						>
							Bluzy damskie
						</button>
						<button
							type='submit'
							className='under-categorie-small'
							onClick={() => {
								setCategory('bluzy męskie');
							}}
						>
							Bluzy męskie
						</button>
					</div>
				)}
				{sweater && (
					<div
						className='under-categories-box-small'
						onMouseLeave={() => setSweater(false)}
						ref={sweaterRef}
					>
						<button
							type='submit'
							className='under-categorie-small'
							onClick={() => {
								setCategory('swetry damskie');
							}}
						>
							Swetry damskie
						</button>
						<button
							className='under-categorie-small'
							onClick={() => {
								setCategory('swetry męskie');
							}}
						>
							Swetry męskie
						</button>
					</div>
				)}
				{shirts && (
					<div className='under-categories-box-small' ref={shirtRef}>
						<button
							type='submit'
							className='under-categorie-small'
							onClick={() => setCategory('koszulki damskie')}
						>
							Koszulki damskie
						</button>
						<button
							className='under-categorie-small'
							onClick={() => setCategory('koszulki męskie')}
						>
							Koszulki męskie
						</button>
					</div>
				)}
			</div>
		</form>
	);
};

export default CategorySmall;
