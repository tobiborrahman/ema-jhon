import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { UseContext } from '../ContextProvider/ContextProvider';

const Login = () => {
	const { signIn } = useContext(UseContext);

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		console.log(email, password);

		signIn(email, password)
			.then((result) => {
				const signedUser = result.user;
				console.log(signedUser);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<form onSubmit={handleLogin} className="form-container">
				<h2 className="form-title">Login</h2>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required />
				</div>
				<button className="form-btn">Login</button>
				<p style={{ textAlign: 'center', fontSize: '10px' }}>
					New to ema-john?{' '}
					<Link style={{ textDecoration: 'none' }} to="/signup">
						Create New Account
					</Link>{' '}
				</p>

				<p className="form-p">
					<span className="first"></span> or
					<span className="second"></span>
				</p>
			</form>
		</div>
	);
};

export default Login;
