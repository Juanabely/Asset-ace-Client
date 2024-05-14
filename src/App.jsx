
import About from "./Components/Public routes/About/About"
import Contact from "./Components/Public routes/Contact/Contact"
import Footer from "./Components/Public routes/Footer/Footer"
import Companies from "./Components/Public routes/Home/Companies/Companies"
import Header from "./Components/Public routes/Home/Header/Header"
import Home from "./Components/Public routes/Home/Home"
// App.js or another top-level component
import React, { useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "./Components/AuthProvider"


function App() {
  const navigate= useNavigate()
  const {logout}=useContext(AuthContext)

  useEffect(()=>{
    const handleBackButton = () =>{
      logout()
      navigate('/form')
    }
    window.onpopstate = handleBackButton
    return()=>{
      window.onpopstate = null
    }
  },[navigate,logout])
  return (
    <>
      <section className="app">
        <Header/>
        <Home/>
        <Companies/>
        <About/>
        <Contact/>
        <Footer/>
      </section>
    </>
  )
}

export default App
