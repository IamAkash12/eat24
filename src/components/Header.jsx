import React, { useState } from 'react'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import Group1 from './img/logo.png';
import Avatar from './img/avatar.png';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';


const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue()

  const [isMenu,setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshtoken, providerData }
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    }
    else{
      setIsMenu(!isMenu);
    }
  };

  const logout = ()=>{
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user:null
    })
  }


  return (
    <header className="fixer z-50 w-screen p-3 px-4 md:p-6 md:px-16 ">
      {/* desktop & tablet */}
      <div className=" hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Group1} className="w-9 object-cover" alt='Logo' />
          <p className="text-headingColor text-x1 font-semibold">Eat 24</p>
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul
          initial= {{opacity:0 , x:200}}
          animate= {{opacity: 1 , x:0}}
          exit={{opacity:0 , x:200}}
           className='flex items-center gap-8 '>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
          </motion.ul>
          <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className=' absolute -top-3.5 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt='Profile'
              onClick={login} />

            {
              isMenu &&(
                <motion.div initial={{opacity:0,scale:0.6}}
                animate={{opacity:1,scale:1}}
                exit={{opacity:0,scale:0.6}}
                className='w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0 '>
              {
                user && user.email === "akashkhurana28@gmail.com" && (
                  <Link to={'/createItem'}>
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'> New Item <MdAdd /></p>
                  </Link>
                )
              }
              
              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}> Log out  <MdLogout /></p>
            </motion.div>
              )
            }
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex item-center justify-between md:hidden w-full h-full">
      

        <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className=' absolute -top-0.5 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>

          <Link to={"/"} className='flex items-center gap-2'>
          <img src={Group1} className="w-9 object-cover" alt='Logo' />
          <p className="text-headingColor text-x1 font-semibold">Eat 24</p>
        </Link>

        <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt='Profile'
              onClick={login} />

         

            {
              isMenu &&(
                <motion.div initial={{opacity:0,scale:0.6}}
                animate={{opacity:1,scale:1}}
                exit={{opacity:0,scale:0.6}}
                className='w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0 '>
              {
                user && user.email === "akashkhurana28@gmail.com" && (
                  <Link to={'/createItem'}>
                    <p className='px-4 py-2 flex items-center cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'> New Item <MdAdd /></p>
                  </Link>
                )
              }
              <ul className='flex flex-col '>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2  hover:bg-slate-100">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2  hover:bg-slate-100">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2  hover:bg-slate-100">About Us</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2  hover:bg-slate-100">Service</li>
          </ul>
              <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
              onClick={logout}> Log out  <MdLogout /></p>
            </motion.div>
              )
            }
          </div>
      </div>
    </header>
  )
}

export default Header
