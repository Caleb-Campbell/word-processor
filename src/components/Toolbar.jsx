import React from 'react'
import '../styles/toolbar.css'

export default function Toolbar(props) {
  const { deleteNote, id, name } = props

  return (
    <div className='tool-bar'>
      <button  className='toolbar-option'>-</button>
      <h4>{name}</h4>
      <button onClick={deleteNote} id={id} className='toolbar-option'>x</button>
  </div>
  )
}