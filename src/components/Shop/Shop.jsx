import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import {
	addToDb,
	deleteShoppingCart,
	getShoppingCart,
} from '../../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const storedCart = getShoppingCart();
		const savedCart = [];
		// Get the id
		for (const id in storedCart) {
			// Get the product using id
			const addedProduct = products.find((product) => product.id === id);
			if (addedProduct) {
				// get the quantity
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				// Add the added product to the saved cart
				savedCart.push(addedProduct);
			}
			// console.log(addedProduct);
		}
		// set saved cart to set cart
		setCart(savedCart);
	}, [products]);

	const handleAddToCart = (product) => {
		// const newCart = [...cart, product];

		let newCart = [];
		const exists = cart.find((pd) => pd.id === product.id);
		if (!exists) {
			product.quantity = 1;
			newCart = [...cart, product];
		} else {
			exists.quantity = exists.quantity + 1;
			const remaining = cart.filter((pd) => pd.id !== product.id);
			newCart = [...remaining, exists];
		}
		setCart(newCart);
		addToDb(product.id);
	};

	const deleteAllFromCart = () => {
		setCart([]);
		deleteShoppingCart();
	};

	return (
		<div className="shop-container">
			<div className="products">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						handleAddToCart={handleAddToCart}
					></Product>
				))}
			</div>
			<div className="order">
				<Cart deleteAllFromCart={deleteAllFromCart} cart={cart}>
					<div>
						<Link to="/orders">
							<button className="cart-btn-2">
								Review Order{' '}
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</Link>
					</div>
				</Cart>
			</div>
		</div>
	);
};

export default Shop;
