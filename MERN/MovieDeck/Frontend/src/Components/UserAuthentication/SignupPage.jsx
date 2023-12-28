import React, { useState } from 'react';
import bg from '../../assets/userpage.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignUpPage = () => {
  const { screenMode } = useSelector((state) => state.movieReducer);
  const [register, setRegister] = useState(
    {
      username: '',
      email: '',
      password: ''
    });
    
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    username: false,
    email: false,
    password: false,
    showGeneralError: false,
  });

  const userLocalCheck = JSON.parse(localStorage.getItem('userDetails')) || [];

  const handleUserForm = (e) => {
    e.preventDefault();

    const isUsernameValid = user.username.trim() !== '';
    const isEmailValid = /\S+@\S+\.\S+/.test(user.email);
    const isPasswordValid = user.password.trim().length >= 8;

    const isAnyFieldMissing = !isUsernameValid || !isEmailValid || !isPasswordValid;

    setError({
      username: !isUsernameValid,
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
  const registerAPIcall = async (user) => {
    console.log('test2');

    const options = {
        method: 'POST',
        body: JSON.stringify({
            username: user.username,
            email: user.email,
            password: user.password,
        }),
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
    };

    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
        try {
            const response = await fetch('http://localhost:4500/auth/register/', options);
            const result = await response.json();
            console.log(result);
            console.log('result');
            return; // Successful, exit the loop
        } catch (error) {
            console.error('Error during registration API call:', error);
            retryCount++;
            console.log(`Retrying... (${retryCount}/${maxRetries})`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        }
    }

    console.error('Failed to fetch after retries');
};



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
          <label htmlFor="username">USER NAME</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            className={`border ${error.username ? 'border-red-500' : ''} ${screenMode==="dark"? 'bg-slate-800 text-white':'bg-white text-black border-black'}`}
          />
          {error.username && <p className="text-red-500 text-[14px]">Please enter a valid name</p>}
          <div className="my-1"></div>

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
          <Link to='/user-authentication/login'>
            Already have a Account
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
