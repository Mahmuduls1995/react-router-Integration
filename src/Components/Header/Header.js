import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user} =useFirebase();
    return (
        <div className="m-7 shadow-lg m-auto p-5 ">
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/home'>Home</Link>
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/products'>Products</Link>
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/orders'>Orders</Link>
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/register'>Register</Link>

            {
                user.uid? <button>Sign Out</button> :
            <Link className="m-3 p-4 text-violet-800 font-bold hover:text-lime-400" to='/login'>Login</Link>
            }

        </div>
    );
};

export default Header;