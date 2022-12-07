import React, {useState} from 'react'
import '../styles/modals.css'
import {motion, AnimatePresence} from 'framer-motion'

const backdropVariants = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

export default function LoginModal({loginModal, setLoginModal, handleLogin}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const closeLogin = () => {
        setLoginModal(false)
    }

    const loginSubmit = () => {

    }

    const handleChange = (e) => {
        e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value)
    }

    const hidePassword = (input) => {
        let result = ''
        input.forEach(letter => {
            result = result + '*'
        })
        return result
    }


  return (
    <AnimatePresence exitBeforeEnter>
        {loginModal && (
            <motion.div
            variants={backdropVariants}
            initial='hidden'
            animate='visible'
            className='backdrop'>
                    <button onClick={closeLogin} className='close-login'>x</button>
                <div className='login-wrap'>
                <h3 className='login-h'>Login</h3>

                    <form>
                        <label className='input-text-label'> Username
                        <input onChange={handleChange} name='username' value={username} className='input-text' type="text" />
                        </label>
                        <label className='input-text-label'> Password
                        <input onChange={handleChange} name='password' value={()=> {hidePassword(password)}} className='input-text' type="text" />
                        </label>
                        <input className='login-submit' type='submit' />
                    </form>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}
