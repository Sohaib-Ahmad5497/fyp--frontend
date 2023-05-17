import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';


function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    });
    const data = await response.json();
    console.log(`response data are here ${data}`);

    if (response.status === 200) {
      alert("Login successful");
      setIsLoggedIn(true);
      navigate('/hero-section')
    } else {
       alert("Login failed. Please try again.");
    }

  };

  const registerHandler = () => {
    navigate('/register');
  }

  return (
    <>

      <div className='login-wrapper'>

        <div className="login-form">
          <h2>Login Form</h2>
          <form method='POST' onSubmit={handleSubmit}>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <div className='login-button'>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <div className='login-side'>
          <div className='p-hello'><h1>Welcome Back!</h1></div>
          <div className='p-enter'><p>To keep connected with us please login<br />with your personal info</p></div>
          <div className='log-button'>
            <button onClick={registerHandler}>Register</button></div>
        </div>
      </div>

    </>
  );
}

export default Login;
