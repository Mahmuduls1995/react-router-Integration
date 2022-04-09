import React from 'react';

const Register = () => {
    return (
        <div className=" mt-5 border-2 w-1/3 mx-auto p-4 shadow-lg rounded-md bg-slate-300 ">
            <h3 className="p-3 text-neutral-900 text-xl font-semibold">Please Register Now</h3>
            <form>
                <input type="text" placeholder="Your Name" className="border-2 m-1 p-1" />
                <br />
                <input type="email" placeholder="Your Email" className="border-2 p-1 m-1" />
                <br />
                <input type="password" placeholder="password" className="border-2 p-1 m-1" />
                <br />
                <button type="submit" className="font-semibold border-2 p-1 m-2 rounded-md ">Register</button>
            </form>
        </div>
    );
};

export default Register;