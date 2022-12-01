import React from 'react'
import '../styles/toolbar.css'

export default function Toolbar(props) {
  const {textSize, changeFontSize, textColor} = props

  return (
    <div className='tool-bar'>
    <div className='font-size-menu'>
    <label>Font Size: {textSize}em
    <button onClick={changeFontSize} id='+' className='font-button'>+</button>
    <button onClick={changeFontSize} id='-' className='font-button'>-</button>
    </label>
    </div>

    <div className='font-size-menu'>
    <label>Text Color: {textColor}
    <select value={textColor}>
      <option value={'white'}>White</option>
      <option value={'red'}>Red</option>
      <option value={'blue'}>Blue</option>
      <option value={'green'}>Green</option>
    </select>
    </label>
    </div>

  </div>
  )
}
