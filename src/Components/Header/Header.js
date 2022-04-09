import { getAuth,signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';
const auth=getAuth(app)
const Header = () => {

    const [user]=useAuthState(auth)
    // const {user,handleSignOut} =useFirebase();
    return (
        <div className="m-7 shadow-lg m-auto p-5 sticky top-0">
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/home'>Home</Link>
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/products'>Products</Link>
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/orders'>Orders</Link>
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/register'>Register</Link>
            <span>{user ?.displayName && user.displayName}</span>

            {
                user?.uid? <button className="font-semibold bg-yellow-700 text-white border-2 p-1 m-2 rounded-md" onClick={()=>signOut(auth)}>Sign Out</button> :
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/login'>Login</Link>
            }

        </div>
    );
};

export default Header;