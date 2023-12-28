import React, { useState } from 'react'
import bg from '../../assets/userpage.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const { screenMode } = useSelector((state) => state.movieReducer);

  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    });


  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: false,
    password: false,
    showGeneralError: false,
  });

  const userLocalCheck = JSON.parse(localStorage.getItem('userDetails')) || [];

  const handleUserForm = (e) => {
    e.preventDefault();

    const isEmailValid = /\S+@\S+\.\S+/.test(user.email);
    const isPasswordValid = user.password.trim().length >= 8;

    const isAnyFieldMissing = !isEmailValid || !isPasswordValid;

    setError({
      email: !isEmailValid,
      password: !isPasswordValid,
      showGeneralError: isAnyFieldMissing,
    });

    if (!isAnyFieldMissing) {
      console.log('Form submitted:', user);
      registerAPIcall(user);
      localStorage.setItem('userDetails', JSON.stringify(user));
    }
  };

  const registerAPIcall = async(user) => {
    console.log('test2')
      const option = {
        method: 'POST',
        body: {
          username: user.username,
          email: user.email,
          password: user.password,
        },
        headers: {
          accept: 'application/json',
        },
      };
    const response = await fetch('http://localhost:4500/auth/register/', option);
    const result = await response.json();
    console.log(result);
    console.log('result');
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: false,
      showGeneralError: false, 
    }));
  };

  return (
    <>
      <div className={`flex ${screenMode==="dark"?"bg-slate-800 text-white":"bg-white text-black"}`}>
        <img className="w-[60%]" src={bg} alt="background" />
        <form onSubmit={handleUserForm} className="w-[40%] flex flex-col gap-2 justify-center items-center">
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className={`border ${error.email ? 'border-red-500' : ''} ${screenMode==="dark"? 'bg-slate-800 text-white':'bg-white text-black border-black'}`}
          />
          {error.email && <p className="text-red-500 text-[14px]">Please enter a valid email</p>}
          <div className="my-1"></div>

          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            className={`border ${error.password ? 'border-red-500' : ''} ${screenMode==="dark"? 'bg-slate-800 text-white':'bg-white text-black border-black'}`}
          />
          {error.password && <p className="text-red-500 text-[14px]">Please enter a valid password</p>}
          <div className="my-1"></div>

          <button type="submit" className="bg-orange-400 px-4 py-1 rounded-lg hover:bg-orange-300">
            Continue
          </button>
          {error.showGeneralError && (
            <p className="text-red-500 text-[14px]">Please fill in all the fields</p>
          )}
          <Link to='/user-authentication/signup'>
            New User
          </Link>
        </form>
      </div>
    </>
  )
}

export default LoginPage
