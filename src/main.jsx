import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import productsLoader from './loaders/productsLoader';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import ContextProvider from './components/ContextProvider/ContextProvider';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home></Home>,
		children: [
			{
				path: '/',
				element: <Shop></Shop>,
			},
			{
				path: 'orders',
				element: <Orders></Orders>,
				loader: productsLoader,
			},
			{
				path: 'inventory',
				element: <Inventory></Inventory>,
			},
			{
				path: 'checkout',
				element: <Checkout></Checkout>,
			},
			{
				path: 'login',
				element: <Login></Login>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
	</React.StrictMode>
);
