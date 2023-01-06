import React from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import './Pagination.css';

const Pagination = ({ pages, isAdmin = false, keyword = '' }) => {
	const navigate = useNavigate();

	const pageChange = (e) => {
		if (isAdmin) {
			if (keyword) {
				// W przyszłośći dodać wyszukiwanie produktów w panelu administaratora
				navigate(
					`/Modezp-Shop/admin/productslist/${keyword}/page/${e.selected + 1}`
				);
			} else {
				navigate(`/Modezp-Shop/admin/productslist/${e.selected + 1}`);
			}
		} else {
			if (keyword) {
				navigate(`/Modezp-Shop/search/${keyword}/page/${e.selected + 1}`);
			} else {
				navigate(`/Modezp-Shop/page/${e.selected + 1}`);
			}
		}
	};
	return (
		pages > 1 && (
			<>
				<ReactPaginate
					marginPagesDisplayed={1}
					breakLabel='...'
					nextLabel={<i class='fa-solid fa-angle-right'></i>}
					onPageChange={(e) => pageChange(e)}
					pageRangeDisplayed={2}
					pageCount={pages}
					previousLabel={<i class='fa-solid fa-chevron-left'></i>}
					renderOnZeroPageCount={null}
					containerClassName={'pagination-container'}
					pageLinkClassName={''}
					activeClassName={'active-page'}
				/>
			</>
		)
	);
};

export default Pagination;
