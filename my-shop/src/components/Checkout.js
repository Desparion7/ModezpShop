import React from 'react';

const Checkout = ({ step1, step2, step3 }) => {
	return (
		<>
			{step1 ? (
				<div className='process-steps'>
					<div className='process-names'>
						<div className='process-name name-active'>Twój koszyk</div>
						<div className='process-name mobile-hide '>Ustawienia dostawy</div>
						<div className='process-name mobile-hide '>Forma płatności</div>
						<div className='process-name-small'>1/3</div>
					</div>
					<div className='process-lines'>
						<div className='prcoess-line line-active'></div>
						<div className='prcoess-line'></div>
						<div className='prcoess-line'></div>
					</div>
				</div>
			) : (
				''
			)}
			{step2 ? (
				<div className='process-steps'>
					<div className='process-names'>
						<div className='process-name name-active mobile-hide'>
							Twój koszyk
						</div>
						<div className='process-name name-active '>Ustawienia dostawy</div>
						<div className='process-name mobile-hide'>Forma płatności</div>
						<div className='process-name-small'>2/3</div>
					</div>
					<div className='process-lines'>
						<div className='prcoess-line line-active'></div>
						<div className='prcoess-line line-active'></div>
						<div className='prcoess-line'></div>
					</div>
				</div>
			) : (
				''
			)}
			{step3 ? (
				<div className='process-steps'>
					<div className='process-names'>
						<div className='process-name name-active mobile-hide'>
							Twój koszyk
						</div>
						<div className='process-name name-active mobile-hide'>
						Ustawienia dostawy
						</div>
						<div className='process-name name-active'>Forma płatności</div>
						<div className='process-name-small'>3/3</div>
					</div>
					<div className='process-lines'>
						<div className='prcoess-line line-active'></div>
						<div className='prcoess-line line-active'></div>
						<div className='prcoess-line line-active'></div>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Checkout;
