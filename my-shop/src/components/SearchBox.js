import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategorySmall from './CategorySmall';
import './SearchBox.css';

const SearchBox = () => {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword === '') {
			navigate(`/Modezp-Shop`);
		} else {
			navigate(`/Modezp-Shop/search/${keyword}`);
		}
	};

	return (
		<form className='navbar-search-box' onSubmit={submitHandler}>
			<CategorySmall />
			<input
				type='text'
				placeholder='Czego szukasz?'
				onChange={(e) => setKeyword(e.target.value.trim())}
			></input>
			<button type='submit' className='navbar-search-btn'>
				Szukaj
			</button>
		</form>
	);
};

export default SearchBox;
