import React from 'react'
import '../styles/login.css'

export default function Login({loginModal, setLoginModal, registerModal, setRegisterModal}) {

    const handleLoginClick = () => {
        setLoginModal(true)
    }

    const handleRegisterClick =() => {
        setRegisterModal(true)
    }

  return (
    <div className='login-wrapper'>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegisterClick}>Register</button>
    </div>
  )
}
