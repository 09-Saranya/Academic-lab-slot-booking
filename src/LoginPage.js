import React, { useState } from 'react';
import ContentPage from './ContentPage';
import './login.css';



const LoginPage = ({ students, faculty, setShowLogin }) => {
  const [names, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleSignUp = () => {
    setShowLogin(false);
  };

  const handleLogin = (type) => {
    const isStudent = email.includes('.ee21@bitsathy.ac.in');
    let user = null;

    if (type === 'student') {
      user = students.find((student) => student.email === email && student.password === password);
    } else if (type === 'faculty') {
      user = faculty.find((faculty) => faculty.email === email && faculty.password === password);
    }

    if (user) {
      setUserType(type);
      if ((type === 'student' && isStudent) || (type === 'faculty' && !isStudent)) {
        setName(user.name);
        setMessage(`Welcome ${user.name}!`);
        setLoggedIn(true);
      }
    } else {
      setMessage('Invalid email or password. Please try again.');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      {loggedIn ? (
        <ContentPage name={names} userType={userType} />
      ) : (
        <div className="login-page">
          <h1>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <div className="password-input">
              <input
                type='password'
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <button onClick={() => handleLogin('student')}>Login as Student</button>
            <button onClick={() => handleLogin('faculty')}>Login as Faculty</button>
            <p>{message}</p> 
            <p>
              Don't have an account? <button onClick={toggleSignUp}>Sign up</button>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
