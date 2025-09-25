import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import AllTransactions from './pages/AllTransactions'
import RespectiveTransaction from './pages/RespectiveTransaction'
import AddTransaction from './pages/AddTransactionForm'
import UpdateTransaction from './pages/UpdateTransactionForm'
import SignupForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'
import ForwardingRoute from './components/ForwardingRoute'
import { DataContext } from './context/UserContext'
import { useEffect } from 'react'
import { useContext } from 'react'

function App() {
   const {User,setUser}=useContext(DataContext);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await clientServer.get("/profile");
        setUser(res.data.data); 
      } catch (err) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  

  return (
    <>
     <Navbar/>
     <main>
     <Routes>
     <Route path='/' element={<ForwardingRoute><AllTransactions/></ForwardingRoute>} />
     <Route path="/:id/edit" element={<ForwardingRoute><UpdateTransaction/> </ForwardingRoute>} />
     <Route path="/:id" element={<ForwardingRoute><RespectiveTransaction/></ForwardingRoute>} />
     <Route path="/add" element={<ForwardingRoute><AddTransaction/></ForwardingRoute>} />
     
     <Route path='/signUp' element={<SignupForm/>} />
     <Route path='/signIn' element={<SignInForm/>} />
     </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
