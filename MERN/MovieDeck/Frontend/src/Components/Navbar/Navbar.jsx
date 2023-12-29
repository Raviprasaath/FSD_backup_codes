import React, { useEffect, useState } from 'react'
import logo from "../../assets/movie-logo.png"
import { FaSearch } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDispatch } from 'react-redux'
import { screenModeToggler } from '../../slice/slice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdWatchLater } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
    const [screenMode, setScreenMode] = useState("dark")
    const dispatch = useDispatch();
    const location = useLocation();
    const [loginCheck, setLoginCheck] = useState(false);
    const [snakeBar, setSnakeBar] = useState(false);
    const userLocalCheck = JSON.parse(localStorage.getItem('userDetails')) || [];
    const navigate = useNavigate();

    const handlerDarkModeToggler = () => {
        {screenMode === "light" ? setScreenMode("dark"):setScreenMode("light")}
        dispatch(screenModeToggler(screenMode));
    }

    const handlerWatchList = () => {
        if(!loginCheck) {
            setSnakeBar(true);
        }
        setTimeout(()=> {
            setSnakeBar(false);
        }, 1500)
        if(loginCheck) {
            navigate('/watch-later', {replace: true});
        }
    }
    const handlerCloseSnakeBar = () => {
        setSnakeBar(false);
    }

    const handlerLogout = () => {
        localStorage.removeItem('userDetails');
        localStorage.removeItem('watchList');
        setLoginCheck(false);
    }

    useEffect(()=> {
        if (userLocalCheck.email) {
            setLoginCheck(true);
        } else if (location.pathname.includes('watch-later') && !userLocalCheck.email) {
            navigate('/', {replace: true});
        }
    }, [loginCheck, location.pathname])



  return (
    <section className={`flex sticky top-0 z-10 items-center justify-between px-4 ${screenMode==="dark"? 'bg-slate-800 text-white border-b	':'bg-white text-black border-b border-black'}`}>
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
            <div className='relative'>
                    <MdWatchLater onClick={()=>handlerWatchList()} title='Watch Later' className='text-[20px] cursor-pointer' />
                {snakeBar &&
                    <div className='absolute flex justify-between items-center rounded-lg top-10 -left-10 bg-red-500 w-[200px] py-2 px-1'>
                        <p>
                            Login to Continue
                        </p>
                        <div onClick={()=>handlerCloseSnakeBar()} className='text-[18px]'>
                            <IoMdCloseCircle />    
                        </div> 
                    </div>
                }
            </div>
            {!loginCheck ? 
                (<>
                    <Link to='user-authentication/login'>
                        Log In
                    </Link>
                    <p>/</p>
                    <Link to='user-authentication/signup'>
                        Sign Up
                    </Link>
                </>):(
                    <div onClick={()=>handlerLogout()} className='cursor-pointer'>Log out</div>
                )
            }
            
        </div>
    </section>
  )
}

export default Navbar
