import React from 'react';
import LoginPage from './LoginPage';
import Footer from './Footer';
import SignUp from './SignUp'
import {useState} from 'react';
import Header from './Header'
import './app.css';
import register from './register';


const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "saranya",
      email: "saranya.ee21@bitsathy.ac.in",
      password: "sara@123"
    },
    {
      id: 2,
      name: "anjali",
      email: "anjali327@gmail.com",
      password: "anjali123"
    }
  ]);
  const [faculty, setFaculty] = useState([
    {
      id: 1,
      name: "shankar",
      email: "shankar@bitsathy.ac.in",
      password: "shankar@12"
    },
    {
      id: 2,
      name: "gopika",
      email: "gopika@bitsathy.ac.in",
      password: "gopika@09"
    }
  ]);
  return (
    <div>
      <Header title = "Academic Lab Slot Booking"/>
      {showLogin ? <LoginPage
      students={students}
      faculty={faculty}
      setShowLogin ={setShowLogin}/> : <SignUp
      setShowLogin = {setShowLogin}/>}
      <Footer/>
      <register />
    </div>
  );
}


export default App;
