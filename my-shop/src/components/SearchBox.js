import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategorySmall from './CategorySmall';
import { useSelector } from 'react-redux';
import './SearchBox.css';

const SearchBox = () => {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState('');

	const category = useSelector((state) => state.category.category);

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword === '') {
			navigate(`/`);
		} else {
			if (category) {
				navigate(`/category/${category}/search/${keyword}`);
			} else {
				navigate(`/search/${keyword}`);
			}
		}
	};

	return (
		<div className='navbar-category-search-box'>
			<CategorySmall />
			<form className='navbar-search-box'>
				<input
					type='text'
					placeholder='Czego szukasz?'
					onChange={(e) => setKeyword(e.target.value.trim())}
				></input>
				<button className='navbar-search-btn' onClick={submitHandler}>
					Szukaj
				</button>
			</form>
		</div>
	);
};

export default SearchBox;
