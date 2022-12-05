import React from 'react'
import '../styles/widget.css'
import { motion } from 'framer-motion'

export default function Widget(props) {

    const {widget, handleWidgetButton, handleTimerClick} = props

  return (
    <div className='widget-wrap'>
      <div onClick={handleWidgetButton} className='widgets'>
        <h3>Widgets</h3>
      </div>
      {widget && (
        <motion.div
        initial={{
          x: -50,
          opacity: .5,
          borderLeft: '2px solid #88888'
        }}
        animate={{
          x: 0,
          opacity: 1,
          borderLeft: 'none'

        }}
        className='widget-list'>
          <ul>
            <li onClick={handleTimerClick} className='widget-button'>
            Timer
            </li>
            <li>
            |
            </li>
            <li className='widget-button'>
            SketchPad
            </li>
          </ul>
        </motion.div>
      )}
      </div>
  )
}
