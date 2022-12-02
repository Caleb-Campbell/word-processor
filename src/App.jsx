import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { motion } from 'framer-motion'

import StickyNote from './components/StickyNote'
import Namer from './components/Namer'
import Widget from './components/Widget'
import Timer from './components/Timer'

function App() {
  const [text, setText] = useState('')
  const [textSize, setTextSize] = useState(2)
  const [textColor, setTextColor] = useState('white')
  const [notes, setNotes] = useState([])
  const [timers, setTimers] = useState([])
  const [widget, setwidget] = useState(false)
  const [namer, setNamer] = useState(false)
  const [namerCords, setNamerCords] = useState({})
  const [whatToPlace, setWhatToPlace] = useState('note')
  const [widgetPlace, setWidgetPlace] = useState({
    timer: false,
    sketchPad: false
  })


  const handleDoubleClick = (e) => {
    setNamer(!namer)
    setNamerCords({
      x: e.pageX,
      y: e.pageY,
    })
  }

  const handleNamerSubmit = (e, name) => {
    setNamer(false)
    createNewStickyNote(e, name)
  }

  const createNewStickyNote = (e, name) => {
    console.log(e.pageX, e.pageY)
    const newSticky = {
      type: 'note',
      id: Date.now(),
      name: name,
      x: e.pageX,
      y: e.pageY,
    }
    setNotes([...notes, newSticky])
  }

  const deleteNote = (e) => {
    const newList = notes.filter(note => note.id !== parseInt(e.target.id))
    setNotes(newList)
  }

  const handleWidgetButton = () => {
    setwidget(!widget)
  }

  const handleWidgetPlacement = (e) => {
    let name = 'boy'
    let duration = 1000 * 8
    if(widgetPlace.timer){placeTimer(name, duration, e.pageX, e.pageY)}
  }

  const handleTimerClick = () => {
    setWidgetPlace({...widgetPlace, timer: true})
    setWhatToPlace('timer')
    console.log(widgetPlace.timer)
  }

  const placeTimer = (name, duration, x, y) => {
    const newTimer = {
      type: 'timer',
      id: Date.now(),
      name: name,
      duration: duration,
      x: x,
      y: y,
    }
    setTimers([...timers, newTimer])
    setWidgetPlace({timer: false, sketchPad: false})
  }

  const giveInstructions = () => {
    if(widgetPlace.timer){return 'Click to add timer'}
    else if(widgetPlace.sketchPad){return 'Click to add sketch'}
    else {return 'Double click to add sticky note'}
  }

  return (
    <div className="App">
      <div className='title'>
      <h1>REGOLITH</h1>
      <h2>An Organization App by Caleb Campbell</h2>
      </div>
      <Widget widget={widget} handleTimerClick={handleTimerClick} handleWidgetButton={handleWidgetButton} />
      {namer && (
        <Namer whatToPlace={whatToPlace} handleNamerSubmit={handleNamerSubmit} x={namerCords.x} y={namerCords.y} />
      )}
      <div onClick={handleWidgetPlacement} onDoubleClick={handleDoubleClick} className='workspace'>
        <h3>{giveInstructions()}</h3>
        {timers.map(timer => {
          return (
            <Timer key={timer.id} x={timer.x} y={timer.y} name={timer.name} duration={timer.duration} />
          )
        })}
        {notes.map(note => {
          return (
            <StickyNote key={note.id} name={note.name} deleteNote={deleteNote} x={note.x} y={note.y} id={note.id} />
          )
        })}
      </div>
    </div>
  )
}

export default App
