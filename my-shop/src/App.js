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
import OrdersListScreen from './container/OrdersListScreen';

import './App.css';

function App() {
	return (
		<div className='app'>
			<Navbar></Navbar>
			<main>
				<Routes>
					<Route path='/Modezp-Shop' element={<Home></Home>}></Route>
					<Route
						path='/Modezp-Shop/products/:id'
						element={<DetailLoading></DetailLoading>}
					></Route>
					<Route path='/Modezp-Shop/cart' element={<CartScreen></CartScreen>} />
					<Route
						path='/Modezp-Shop/shipping'
						element={<ShippingScreen></ShippingScreen>}
					/>
					<Route
						path='/Modezp-Shop/payment'
						element={<PaymentScreen />}
					></Route>
					<Route
						path='/Modezp-Shop/placeorder'
						element={<PlaceOrderScreen />}
					></Route>
					<Route
						path='/Modezp-Shop/order/:id'
						element={<OrderScreen />}
					></Route>
					<Route path='/Modezp-Shop/login' element={<LoginScreen />} />
					<Route path='/Modezp-Shop/register' element={<RegisterScreen />} />
					<Route path='/Modezp-Shop/profile' element={<ProfileScreen />} />
					<Route
						path='/Modezp-Shop/profile/update'
						element={<ProfileUpdateScreen />}
					/>
					<Route
						path='/Modezp-Shop/profile/address'
						element={<ProfileAddressScreen />}
					/>
					<Route
						path='/Modezp-Shop/profile/orderlist'
						element={<OrdersListScreen />}
					/>
				</Routes>
			</main>
			<Footer></Footer>
			{/* poprawić w nawwigacji zamykanie się po kliknięciu wyboru */}
			{/* poprawić wyzualnie wygląd głównego profilu */}
			{/* dodac box shadowy */}
			{/* poprzenosić stany ze storage do backendu */}
		</div>
	);
}

export default App;
