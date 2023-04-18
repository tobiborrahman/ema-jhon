import React, { useContext } from 'react';
import logo from '../../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { UseContext } from '../ContextProvider/ContextProvider';

const Header = () => {
	const { user, logOut } = useContext(UseContext);

	const handleLogOut = () => {
		logOut()
			.then((result) => {})
			.then((error) => console.error(error));
	};

	return (
		<nav className="header">
			<img src={logo} alt="" />
			<div>
				<Link to="/">Shop</Link>
				<Link to="/orders">Orders</Link>
				<Link to="/inventory">Inventory</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">Sign Up</Link>
				{user && (
					<span className="text-white">
						{user.email}{' '}
						<button onClick={handleLogOut}>Sign Out</button>{' '}
					</span>
				)}
			</div>
		</nav>
	);
};

export default Header;
