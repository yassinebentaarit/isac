import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";


function LoginRegister() {

  const [action, setAction] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isMatch, setIsMatch] = useState(null);

  function registerLink() {
    setAction(' active');
  }

  function loginLink() {
    setAction('');
  }

  function handlePasswordChange(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsMatch(newPassword === repeatedPassword && repeatedPassword !== ''); // Verify immediately
  };

  function handleRepeatedPasswordChange(e) {
    const newRepeatedPassword = e.target.value;
    setRepeatedPassword(newRepeatedPassword);
    setIsMatch(password === newRepeatedPassword && newRepeatedPassword !== ''); // Verify immediately
  };

  return (
    <div className="h-screen flex flex-col">
      <header>
      <div className="flex items-center space-x-4">
              {/* Logo/Image */}
              <img
                src="/vermeg_header.jpg"
                alt="Logo"
                className="h-[140px] w-screen object-cover"
              />
            </div>
      </header>
      <div className=" flex-grow bg-gray-100 flex items-center justify-center">
        <div className='flex w-screen flex-row justify-center items-center'>
          <div className={`flex-col wrapper${action} w-1/3 items-center`}>
            
            <div className='form-box login'>
              <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                  <input type="text"
                    placeholder='Username'
                    required />
                  <FaUser className='icon' />
                </div>

                <div className='input-box'>
                  <input type="password"
                    placeholder='Password'
                    required />
                  <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                  <label>
                    <input type="checkbox" name="" id="" />
                    remember me
                  </label>
                  <a href='#'>Forgot password?</a>
                </div>
                <button type="submit">Login</button>

                <div className='register-link'>
                  <p>
                    Dont have an account? <a href='#' onClick={registerLink}>Register</a>
                  </p>
                </div>
              </form>
            </div>


            <div className='form-box register'>
              <form action="">
                <h1>Registration</h1>
                <div className='input-box'>
                  <input type="text"
                    placeholder='Username'
                    required />
                  <FaUser className='icon' />
                </div>
                <div className='input-box'>
                  <input type="text"
                    placeholder='Email'
                    required />
                  <FaEnvelope className='icon' />
                </div>

                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Password"
                    id="idPassword"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <FaLock className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Repeat Password"
                    id="idRepeatedPassword"
                    value={repeatedPassword}
                    onChange={handleRepeatedPasswordChange}
                    required
                  />
                  <FaLock className="icon" />
                </div>

                {isMatch !== null && repeatedPassword !== '' && (
                  <p style={{ color: isMatch ? 'green' : 'red' }}>
                    {isMatch ? 'Passwords match!' : 'Passwords do not match!'}
                  </p>
                )}
                <br />
                <button type="submit">Register</button>
                <div className='register-link'>
                  <p>Have an account? <a href='#' onClick={loginLink}>Login</a></p>
                </div>
              </form>
            </div>
          </div>

          <div className='w-2/3'>
          <img
                src="/vermeg_buildings.jpg"
                alt="Logo"
                className="  object-cover"
              />
          </div>

        </div>
      </div>
    </div>
  )
};

export default LoginRegister