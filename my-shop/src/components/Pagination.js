import React from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import './Pagination.css';

const Pagination = ({
	pages,
	page,
	isAdmin = false,
	keyword = '',
	category = '',
}) => {
	const navigate = useNavigate();

	const pageChange = (e) => {
		if (isAdmin) {
			if (keyword) {
				// W przyszłośći dodać wyszukiwanie produktów w panelu administaratora
				navigate(
					`/admin/productslist/${keyword}/page/${e.selected + 1}`
				);
			} else {
				navigate(`/admin/productslist/page/${e.selected + 1}`);
			}
		} else {
			if (keyword) {
				navigate(`/search/${keyword}/page/${e.selected + 1}`);
			} else {
				if (category) {
					navigate(`/category/piżamy/page/${e.selected + 1}`);
				} else {
					navigate(`/page/${e.selected + 1}`);
				}
			}
		}
	};
	return (
		pages > 1 && (
			<>
				<ReactPaginate
					marginPagesDisplayed={1}
					breakLabel='...'
					nextLabel={<i className='fa-solid fa-angle-right'></i>}
					onPageChange={(e) => pageChange(e)}
					pageRangeDisplayed={2}
					pageCount={pages}
					forcePage={page - 1}
					previousLabel={<i className='fa-solid fa-chevron-left'></i>}
					renderOnZeroPageCount={null}
					containerClassName={'pagination-container'}
					activeClassName={'active-page'}
				/>
			</>
		)
	);
};

export default Pagination;
