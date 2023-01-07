import React, { useState, useRef, useEffect } from 'react';
import './Category.css';

const Category = () => {
	const hoodiesRef = useRef(false);
	const sweaterRef = useRef();
	const shirtRef = useRef();
	const [hoodies, setHoodies] = useState(false);
	const [sweater, setSweater] = useState(false);
	const [shirts, setShirts] = useState(false);

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

	return (
		<div className='products-category-box'>
			<div className='products-category'>
				<div className='category-type'>Piżamy</div>
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
						<div className='under-categorie' onClick={() => setHoodies(false)}>
							Bluzy damskie
						</div>
						<div className='under-categorie' onClick={() => setHoodies(false)}>
							Bluzy męskie
						</div>
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
						<div className='under-categorie' onClick={() => setSweater(false)}>
							Swetry damskie
						</div>
						<div className='under-categorie' onClick={() => setSweater(false)}>
							Swetry męskie
						</div>
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
						<div className='under-categorie' onClick={() => setShirts(false)}>
							Koszulki damskie
						</div>
						<div className='under-categorie' onClick={() => setShirts(false)}>
							Koszulki męskie
						</div>
					</div>
				)}
			</div>
			<div className='products-category'>
				<div className='category-type'>Stroje kąpielowe</div>
			</div>
			<div className='products-category'>
				<div className='category-type'>Pozostałe</div>
			</div>
		</div>
	);
};

export default Category;
