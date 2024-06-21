import React from 'react';
import { useState } from 'react';
import './signup.css'; // Import the CSS file




const SignUp = ({OnSignUp}) => {
  const [names, setNames] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');




  const handleSignUp = (e) => {
    e.preventDefault();
    OnSignUp(names, email, password);
  };
 




  return (
    <div className="signup-page">
       
      <h1>SignUp</h1>
      <form onSubmit={(e) => handleSignUp(e)}> 
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="Name"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Create Account</button>
       
      </form>
    </div>
  );
};




export default SignUp;



