import React, { useEffect, useState } from 'react'
import logo from "../../assets/movie-logo.png"
import { FaSearch } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDispatch } from 'react-redux'
import { screenModeToggler } from '../../slice/slice';
import { Link } from 'react-router-dom';
import { MdWatchLater } from "react-icons/md";


const Navbar = () => {
    const [screenMode, setScreenMode] = useState("dark")
    const dispatch = useDispatch();
    const [loginCheck, setLoginCheck] = useState(false);
    const userLocalCheck = JSON.parse(localStorage.getItem('userDetails')) || [];

    const handlerDarkModeToggler = () => {
        {screenMode === "light" ? setScreenMode("dark"):setScreenMode("light")}
        dispatch(screenModeToggler(screenMode));
    }

    useEffect(()=> {
        if (userLocalCheck.email) {
            setLoginCheck(true);
        }
    }, [loginCheck])

  return (
    <section className={`flex items-center justify-between px-4 ${screenMode==="dark"? 'bg-slate-800 text-white':'bg-white text-black'}`}>
        <Link to='/'>
            <img src={logo} alt="logo" className='w-[150px]' />
        </Link>
        <div className='flex gap-4 items-center justify-center'>
            <div className='flex items-center justify-center gap-4'>
                <input type="text" className={`border-b	 ${screenMode==="dark"? 'bg-slate-800 text-white':'bg-white text-black border-black'}`} />
                <FaSearch className='hover:text-gray-400' />
            </div>
            <button title='Dark/Light Mode' onClick={()=>handlerDarkModeToggler()} className='text-[22px]'>
                {screenMode === "light" ? <MdOutlineDarkMode /> : <CiLight />} 
            </button>
            <div>
                {loginCheck ? 
                    <MdWatchLater title='Watch Later' className='text-[20px] cursor-pointer' />:
                    <div>Login to Continue</div>
                }
            </div>
            <Link to='user-authentication/login'>
                Log In
            </Link>
            <p>/</p>
            <Link to='user-authentication/signup'>
                Sign Up
            </Link>
            
        </div>
    </section>
  )
}

export default Navbar
