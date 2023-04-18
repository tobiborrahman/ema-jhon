import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UseContext } from '../ContextProvider/ContextProvider';

const SignUp = () => {
	const [error, setError] = useState();
	const { createUser } = useContext(UseContext);
	const handleSingUP = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;

		console.log(email, password, confirm);
		setError('');

		if (password !== confirm) {
			setError('Password did not match');
			return;
		} else if (password.length < 6) {
			setError('Password must be 6 characters or longer');
			return;
		}

		createUser(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<div>
			<form onSubmit={handleSingUP} className="form-container">
				<h2 className="form-title">Sign Up</h2>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required />
				</div>
				<div className="form-control">
					<label htmlFor="confirm">Confirm Password</label>
					<input type="password" name="confirm" required />
				</div>
				<button className="form-btn">Sign Up</button>
				<p className="error">{error}</p>
				<p style={{ textAlign: 'center', fontSize: '10px' }}>
					Already have an account?{' '}
					<Link style={{ textDecoration: 'none' }} to="/login">
						Login
					</Link>
				</p>

				<p className="form-p">
					<span className="first"></span> or
					<span className="second"></span>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
