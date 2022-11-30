import React from 'react'
import '../styles/toolbar.css'

export default function Toolbar(props) {
  const {textSize, changeFontSize} = props

  return (
    <div className='tool-bar'>
    <div className='font-size-menu'>
    <label>Font Size: {textSize}em
    <button onClick={changeFontSize} id='+' className='font-button'>+</button>
    <button onClick={changeFontSize} id='-' className='font-button'>-</button>
    </label>
    </div>

    <div className='font-size-menu'>
    <label>Font Size: {textSize}em
    <button onClick={changeFontSize} id='+' className='font-button'>+</button>
    <button onClick={changeFontSize} id='-' className='font-button'>-</button>
    </label>
    </div>

    <div className='font-size-menu'>
    <label>Font Size: {textSize}em
    <button onClick={changeFontSize} id='+' className='font-button'>+</button>
    <button onClick={changeFontSize} id='-' className='font-button'>-</button>
    </label>
    </div>

    <div className='font-size-menu'>
    <label>Font Size: {textSize}em
    <button onClick={changeFontSize} id='+' className='font-button'>+</button>
    <button onClick={changeFontSize} id='-' className='font-button'>-</button>
    </label>
    </div>
    
  </div>
  )
}
