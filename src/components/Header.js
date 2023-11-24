import React from 'react'
import {signOut} from 'firebase/auth';
import {auth} from '../utils/firebase';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const user = useSelector((store)=>store.user)
  const nevigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      nevigate("/")
    }).catch((error) => {
      nevigate("/error")
    });
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b flex justify-between from-black z-10'>
      <img
        className='w-52'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt='logo' />
     {user && <div className='mt-4 flex '>
        <img alt="userImage" className='w-[60px] h-14 mx-2 rounded-[30px]' src="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg" />
        <button onClick={handleSignOut} className='font-bold text-white h-8 mt-3 rounded-lg px-2 hover:bg-orange-600 '>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;