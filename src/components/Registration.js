import React, { useState } from 'react';
import '../styles/registration.css';
import { useNavigate } from 'react-router-dom';

function Registration() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  console.log("----------", username);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  console.log("----------", email);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = async (event) => {
    console.log("handle submit called");
    event.preventDefault();
    // handle form submission here
    const response = await fetch("http://localhost:3001/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });
    console.log("------test---------", response);
    const data = await response.json();


    if (response.status === 200) {
      alert("Login successful");
      navigate("/login")
   } else {
      alert("Login failed. Please try again.");
   }
  };
  const loginHandler = () => {
    navigate('/login');
    }
  return (
    <>
      <div className='regist-wrapper'>

        <div className='regist-side'>
          <div className='p-hello'><h1>Hello, Friend!</h1></div>
          <div className='p-enter'><p>Enter your personal details and start <br />Journey with us</p></div>
          <div><button onClick={loginHandler}>Login</button></div>
        </div>
        <div className="registration-form">
          <h2>Registration Form</h2>
          <form method='POST' onSubmit={handleSubmit}>
            <label >Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />

            <label >Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />

            <label >Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className='regist-button'>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
