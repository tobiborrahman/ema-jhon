import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
	const { id, name, img, quantity, price } = product;
	return (
		<div className="review-item">
			<div className="img-name">
				<img src={img} alt="" />
				<div>
					<h4 className="item">Name: {name}</h4>
					<p className="item">
						Price: <span className="orange-p">${price}</span>
					</p>
					<p className="item">
						Order Quantity:
						<span className="orange-p">{quantity}</span>
					</p>
				</div>
			</div>
			<FontAwesomeIcon
				onClick={() => handleRemoveFromCart(id)}
				className="icon"
				icon={faTrashAlt}
			/>
		</div>
	);
};

export default ReviewItem;
