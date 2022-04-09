import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase();
    return (
        <div className=" mt-5 border-2 w-1/3 mx-auto p-4 shadow-lg rounded-md bg-slate-300 ">
        <h3 className="p-3 text-neutral-900 text-xl font-semibold">Please Login</h3>
        <form>
            <input type="email" placeholder="Your Email" className="border-2 p-1 m-1" />
            <br />
            <input type="password" placeholder="password" className="border-2 p-1 m-1" />
            <br />
            <button type="submit" className="font-semibold border-2 p-1 m-2 rounded-md " >Login </button>
            <br />
            <br />
        </form>
        <button className="font-semibold bg-emerald-500 border-2 p-1 m-2 rounded-md" onClick={signInWithGoogle}>Google Sign In </button>
    </div>
    );
};

export default Login;