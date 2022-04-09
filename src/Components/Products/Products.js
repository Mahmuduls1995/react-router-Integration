import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth= getAuth(app)
const Products = () => {
    const [user]=useAuthState(auth)
    // const {user}=useFirebase();
    return (
        <div>
            <h2>Knock !Who is </h2>
            <h3>{user?user.displayName:'No body '}</h3>

        </div>
    );
};

export default Products;