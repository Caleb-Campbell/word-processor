import React from 'react'
import '../styles/modals.css'
import {motion, AnimatePresence} from 'framer-motion'

const backdropVariants = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

export default function RegisterModal({registerModal, setRegisterModal}) {

    const closeLogin = () => {
        setRegisterModal(false)
    }
  return (
    <AnimatePresence exitBeforeEnter>
        {registerModal && (
            <motion.div
            variants={backdropVariants}
            initial='hidden'
            animate='visible'
            className='backdrop'>
                    <button onClick={closeLogin} className='close-login'>x</button>
                <div className='login-wrap'>
                    <h3 className='login-h'>Register</h3>
                    <form>
                        <label className='input-text-label'> Username
                        <input className='input-text' type="text" />
                        </label>
                        <label className='input-text-label'> Password
                        <input className='input-text' type="text" />
                        </label>
                        <input className='login-submit' type='submit' />
                    </form>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}
