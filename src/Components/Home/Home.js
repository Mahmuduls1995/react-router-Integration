import React from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';
const auth= getAuth(app)
const Home = () => {

    const [user]=useAuthState(auth)
    // const {user}=useFirebase();
    return (
        <div className>
            <h1 className="">This is Home</h1>
            <p>Current User:{user?user.displayName:'No body '}</p>
        </div>
    );
};

export default Home;