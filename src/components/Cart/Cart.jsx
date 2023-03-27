import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
	let total = 0;
	let totalShipping = 0;
	for (const product of cart) {
		total = total + product.price;
		totalShipping = totalShipping + product.shipping;
	}

	const tax = (total * 7) / 100;
	const grandTotal = total + totalShipping + tax;

	return (
		<div>
			<h3 className="order-title">Order Summary</h3>
			<div className="order-details">
				<p>Selected Items: {cart.length}</p>
				<p>Total Price: ${total}</p>
				<p>Shipping Charge: ${totalShipping}</p>
				<p>Tax: ${tax}</p>
				<h3>Grand Total: ${grandTotal}</h3>
				<button className="cart-btn-1">
					Clear Cart <FontAwesomeIcon icon={faTrash} />
				</button>
				<button className="cart-btn-2">
					Review Order <FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</div>
	);
};

export default Cart;
