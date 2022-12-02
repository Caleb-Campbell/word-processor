import React from 'react'
import '../styles/timer.css'
import Draggable from 'react-draggable'
import Toolbar from './Toolbar'

export default function Timer(props) {
  const {x, y, name, duration} = props
  return (
    <>
    <Draggable>
    <Toolbar  />
    <div
    style={{
      left: x - 5 + 'px',
      top: y - 5 + 'px'
    }}
    className='timer'>{name}
    </div>
    </Draggable>
    </>
  )
}
