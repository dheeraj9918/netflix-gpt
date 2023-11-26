import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/appSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const nevigate = useNavigate();

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        nevigate("/browse");

      } else {
        dispatch(removeUser());
        nevigate("/");
      }
    })
    return () => unsubscribe();
  }, []);


  const handleSignOut = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      nevigate("/error")
    });
  };


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b flex justify-between from-black z-10'>
      <img
        className='w-52'
        src={LOGO}
        alt='logo' />
      {user && <div className='mt-4 flex '>
        <img alt="userImage" className='w-[60px] h-14 mx-2 rounded-[30px]' src={user.photoURL} />
        <button onClick={handleSignOut} className='font-bold text-white h-8 mt-3 rounded-lg px-2 hover:bg-orange-600 '>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;