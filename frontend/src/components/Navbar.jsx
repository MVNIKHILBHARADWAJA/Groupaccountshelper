import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css";
import clientServer from '../config';
import { DataContext } from '../context/UserContext';
import { useContext } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
    const {User,setUser}=useContext(DataContext);
  
  const logOut = async () => {
    try{
   const res=await clientServer.get("/logout");
   console.log(res);
   const {message}=res.data;
       setUser(null);
    

      alert(message);
      navigate("/");
    } catch (err) {
      if (err.response) {
    console.error("Backend Error:", err.response.data);         
    console.error("Status Code:", err.response.status);         
  }  else {
    console.error("Axios Error:", err.message);
  }  
    }
    
  };
  return (
    <nav className="navbar">
       <div className="nav-links">
        
        <Link to="/">Transactions</Link>
        {User?.role === "admin" && (
        <Link to="/add">Add new Transaction</Link>)}
      
  
    {!User && (
  <>
    <Link to="/signUp">SignUp</Link>
    <Link to="/signIn">SignIn</Link>
  </>
)}

  

  {User && <button className='logout' onClick={logOut}>Logout</button>}




      </div>
    </nav>
  )
}

export default Navbar;