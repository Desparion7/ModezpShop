import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './container/Home';
import DetailLoading from './container/DetailLoading';
import Footer from './components/Footer';
import LoginScreen from './container/LoginScreen';
import RegisterScreen from './container/RegisterScreen';
import ProfileScreen from './container/ProfileScreen';
import ProfileUpdateScreen from './container/ProfileUpdateScreen';
import CartScreen from './container/CartScreen';
import ShippingScreen from './container/ShippingScreen';
import ProfileAddressScreen from './container/ProfileAddressScreen';
import PaymentScreen from './container/PaymentScreen';
import PlaceOrderScreen from './container/PlaceOrderScreen';
import OrderScreen from './container/OrderScreen';
import OrdersUserListScreen from './container/OrdersUserListScreen';
import UsersListScreen from './container/UsersListScreen';
import UserEditScreen from './container/UserEditScreen';
import ProductsListScreen from './container/ProductsListScreen';
import ProductEditScreen from './container/ProductEditScreen';
import OrdersAdminListScreen from './container/OrdersAdminListScreen';
import ProductCreateReview from './container/ProductCreateReview';
import MessageCenter from './container/MessageCenter';

import './App.css';

function App() {
	return (
		<div className='app'>
			<Navbar></Navbar>
			<main>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route
						path='/category/:category'
						element={<Home />}
					></Route>
					<Route
						path='/category/:category/page/:pageNumber'
						element={<Home />}
					></Route>
					<Route
						path='/category/:category/search/:keyword'
						element={<Home />}
					></Route>
					<Route
						path='/page/:pageNumber'
						element={<Home />}
					></Route>
					<Route path='/search/:keyword' element={<Home />}></Route>
					<Route
						path='/search/:keyword/page/:pageNumber'
						element={<Home />}
					></Route>
					<Route
						path='/admin/userslist'
						element={<UsersListScreen />}
					></Route>
					<Route
						path='/admin/productslist'
						element={<ProductsListScreen />}
					></Route>
					<Route
						path='/admin/productslist/page/:pageNumber'
						element={<ProductsListScreen />}
					></Route>
					<Route
						path='/admin/orderslist'
						element={<OrdersAdminListScreen />}
					></Route>
					<Route
						path='/admin/user/:id/edit'
						element={<UserEditScreen />}
					></Route>
					<Route
						path='/admin/product/:id/edit'
						element={<ProductEditScreen />}
					></Route>
					<Route
						path='/products/:id'
						element={<DetailLoading />}
					></Route>
					<Route
						path='/product/review/:id'
						element={<ProductCreateReview />}
					></Route>
					<Route path='/cart' element={<CartScreen />} />
					<Route path='/shipping' element={<ShippingScreen />} />
					<Route
						path='/payment'
						element={<PaymentScreen />}
					></Route>
					<Route
						path='/placeorder'
						element={<PlaceOrderScreen />}
					></Route>
					<Route
						path='/order/:id'
						element={<OrderScreen />}
					></Route>
					<Route path='/login' element={<LoginScreen />} />
					<Route path='/register' element={<RegisterScreen />} />
					<Route path='/profile' element={<ProfileScreen />} />
					<Route
						path='/profile/update'
						element={<ProfileUpdateScreen />}
					/>
					<Route
						path='/profile/address'
						element={<ProfileAddressScreen />}
					/>
					<Route
						path='/profile/orderlist'
						element={<OrdersUserListScreen />}
					/>
					<Route
						path='/profile/messagecenter'
						element={<MessageCenter />}
					/>
				</Routes>
			</main>
			<Footer></Footer>
			{/*  W przyszłośći dodać wyszukiwanie produktów w panelu administaratora */}
			{/* dodac mozliwość ustawienia ilości obektów na stronie */}
			{/* poprwic wygląd listy zamówień */}
		</div>
	);
}

export default App;
