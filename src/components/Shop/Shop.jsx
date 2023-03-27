import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
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
				<h3 className="order-title">Order Summary</h3>
				<div className="order-details">
					<p>Selected Items: {cart.length}</p>
					<p>Total Price: $</p>
					<p>Total Shipping Charge: $</p>
					<p>Tax: $</p>
					<h3>Grand Total: $</h3>
					<button className="cart-btn-1">
						Clear Cart <FontAwesomeIcon icon={faTrash} />
					</button>
					<button className="cart-btn-2">
						Review Order <FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Shop;
