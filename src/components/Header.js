import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/appSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const nevigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch)

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

  const gptHandleToggle = () => {
    dispatch(toggleGptSearchView());
  };

  const langChangeHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b flex justify-between from-black z-10'>
      <img
        className='w-52'
        src={LOGO}
        alt='logo' />

      {user && <div className='mt-4 flex '>
        {showGptSearch && (
          <select className='px-2 my-[16.5px] text-white rounded-md bg-gray-700 hover:opacity-70' onClick={langChangeHandler}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifer} value={lang.identifer}>{lang.name}</option>)
            )}
          </select>
        )}

        <button
          className='bg-purple-700 text-white px-2 mx-3  my-4 rounded-md hover:opacity-70'
          onClick={gptHandleToggle}
        >
          {showGptSearch ? "GPT Search" : " Homepage"}
        </button>

        <img alt="userImage" className='w-[60px] h-14 mx-2 rounded-[30px]' src={user.photoURL} />
        <button onClick={handleSignOut} className='hover:bg-purple-700 text-white px-2 mx-3 my-4 rounded-md '>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;