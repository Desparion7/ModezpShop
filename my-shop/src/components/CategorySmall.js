import React, { useState, useRef, useEffect } from 'react';
import './CategorySmall.css';

const CategorySmall = () => {
	const hoodiesRef = useRef(false);
	const sweaterRef = useRef(false);
	const shirtRef = useRef(false);
	const categoriesRef = useRef(false);

	const [categories, setCategories] = useState(false);
	const [hoodies, setHoodies] = useState(false);
	const [sweater, setSweater] = useState(false);
	const [shirts, setShirts] = useState(false);

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

	return (
		<div className='products-category-box-small'>
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
						onClick={() => {
							setCategories(false);
						}}
					>
						<div className='products-category-small-undercategory'>
							<div className='category-type-small'>Piżamy</div>
						</div>
						<div className='products-category-small-undercategory'>
							<div
								className='category-type-small'
								onClick={() => setHoodies(!hoodies)}
							>
								Bluzy
							</div>
						</div>
						<div className='products-category-small-undercategory'>
							<div
								className='category-type-small'
								onClick={() => setSweater(!sweater)}
							>
								Swetry
							</div>
						</div>
						<div className='products-category-small-undercategory'>
							<div
								className='category-type-small'
								onClick={() => setShirts(!shirts)}
							>
								Koszulki
							</div>
						</div>
						<div className='products-category-small-undercategory'>
							<div className='category-type-small'>Stroje kąpielowe</div>
						</div>
						<div className='products-category-small-undercategory'>
							<div className='category-type-small'>Pozostałe</div>
						</div>
					</div>
				)}
				{hoodies && (
					<div
						className='under-categories-box'
						onMouseLeave={() => setHoodies(false)}
						ref={hoodiesRef}
					>
						<div className='under-categorie' onClick={() => setHoodies(false)}>
							Bluzy damskie
						</div>
						<div className='under-categorie' onClick={() => setHoodies(false)}>
							Bluzy męskie
						</div>
					</div>
				)}
				{sweater && (
					<div
						className='under-categories-box'
						onMouseLeave={() => setSweater(false)}
						ref={sweaterRef}
					>
						<div className='under-categorie' onClick={() => setSweater(false)}>
							Swetry damskie
						</div>
						<div className='under-categorie' onClick={() => setSweater(false)}>
							Swetry męskie
						</div>
					</div>
				)}
				{shirts && (
					<div className='under-categories-box' ref={shirtRef}>
						<div className='under-categorie' onClick={() => setShirts(false)}>
							Koszulki damskie
						</div>
						<div className='under-categorie' onClick={() => setShirts(false)}>
							Koszulki męskie
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CategorySmall;
