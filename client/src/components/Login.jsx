import React from 'react'
import '../styles/login.css'

export default function Login({loginModal, setLoginModal}) {

    const handleLoginClick = () => {
        setLoginModal(true)
    }

  return (
    <div className='login-wrapper'>
        <button onClick={handleLoginClick}>Login</button>
        <button>Register</button>
    </div>
  )
}
