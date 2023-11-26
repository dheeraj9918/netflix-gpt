import React, { useRef, useState } from 'react';

import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/appSlice';
import { BACKGROUN_IMAGE, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [isErrorMessage, setIsErrorMessage] = useState(null);
    const name = useRef(null);
    const password = useRef(null);
    const email = useRef(null);
   
    const dispatch = useDispatch();


    const handleButtonRef = () => {
        const message = checkValidData(email.current?.value, password.current?.value);
        setIsErrorMessage(message);

        if (message) return;
        //Sign up
        if (!isSignedIn) {
            createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }));
                    }).catch((error) => {
                        setIsErrorMessage(error.message);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setIsErrorMessage(errorCode + " " + errorMessage)
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setIsErrorMessage(errorCode + " " + errorMessage);
                });
        }
    };
    const signInToggleHandler = () => {
        setIsSignedIn(!isSignedIn);
    };
    return (
        <div >
            <Header />
            <div className='absolute bg-black'>
                <img
                    className='opacity-60'
                    src={BACKGROUN_IMAGE} alt='backgroundImage'
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='w-[30%] h-[650px] absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 rounded-xl'>
                <h1
                    className='text-white font-bold text-3xl w-full my-3'>
                    {isSignedIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignedIn && (
                    <>
                        <input
                            ref={name}
                            type="text"
                            placeholder='Full Name'
                            className='p-3 my-4 w-full bg-gray-700 rounded-md'
                        />
                        <input
                            type="text"
                            placeholder='Ex. +91 9918183765'
                            className='p-3 my-4 w-full bg-gray-700 rounded-md'
                        />
                    </>
                )}



                <input
                    ref={email}
                    type="email"
                    placeholder={isSignedIn ? 'Email or phone no' : 'Email'}
                    className='p-3 my-4 w-full bg-gray-700 rounded-md'
                />
                <input
                    ref={password}
                    type="password"
                    placeholder='Enter password'
                    className='p-3 my-4 w-full bg-gray-700 rounded-md'
                />
                <p className='text-red-500 font-bold'>{isErrorMessage}</p>
                <button
                    onClick={handleButtonRef}
                    className='p-3 my-6 bg-red-600 w-full text-white font-bold rounded-md'
                >
                    {isSignedIn ? "Sign In" : "Sign Up"}
                </button>
                <p className='text-white my-6' >
                    {isSignedIn ? <span>New to Netflix? </span> : <span>Already registered? </span>}
                    {isSignedIn ?
                        <span className='text-white my-2 cursor-pointer hover:font-bold' onClick={signInToggleHandler}>Sign up now</span>
                        : <span className='text-white my-2 cursor-pointer hover:font-bold' onClick={signInToggleHandler}>Sign In</span>
                    }
                </p>

            </form>

        </div>
    )
}
export default Login;

