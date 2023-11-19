import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);

    const signInToggleHandler = () => {
        setIsSignedIn(!isSignedIn);
    };
    return (
        <div >
            <Header />
            <div className='absolute bg-black'>
                <img
                    className='opacity-60'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='backgroundImage'
                />
            </div>
            <form
                className='w-[30%] h-[650px] absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 rounded-xl'>
                <h1
                    className='text-white font-bold text-3xl w-full my-3'>
                    {isSignedIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignedIn && (
                    <>
                        <input
                            type="text"
                            placeholder='Full Name'
                            className='p-3 my-4 w-full bg-gray-700 rounded-md'
                        />
                        <input
                            type="mobile no"
                            placeholder='Ex. +91 9918183765'
                            className='p-3 my-4 w-full bg-gray-700 rounded-md'
                        />
                    </>
                )}



                <input
                    type="email"
                    placeholder={isSignedIn ? 'Email or phone no' : "Mobile no"}
                    className='p-3 my-4 w-full bg-gray-700 rounded-md'
                />
                <input
                    type="password"
                    placeholder='Enter password'
                    className='p-3 my-4 w-full bg-gray-700 rounded-md'
                />
                <button
                    className='p-3 my-6 bg-red-600 w-full text-white font-bold rounded-md' >
                    {isSignedIn ? "Sign In" : "Sign Up"}
                </button>
                <p className='text-white my-6' onClick={signInToggleHandler}>
                    {isSignedIn ? <span>New to Netflix? </span> : <span>Already registered? </span>}
                    {isSignedIn ?
                        <span className='text-white my-2 cursor-pointer hover:font-bold'>Sign up now</span>
                        : <span className='text-white my-2 cursor-pointer hover:font-bold'>Sign In</span>
                    }
                </p>

            </form>

        </div>
    )
}
export default Login;