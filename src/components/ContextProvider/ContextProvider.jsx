import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const UseContext = createContext(null);
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
	const [user, setUser] = useState();

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			return unsubscribe;
		};
	}, []);
	const ContextInfo = {
		user,
		createUser,
		signIn,
		logOut,
	};

	return (
		<div>
			<UseContext.Provider value={ContextInfo}>
				{children}
			</UseContext.Provider>
		</div>
	);
};

export default ContextProvider;
