import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import StickyNote from './components/StickyNote'
import Namer from './components/Namer'

function App() {
  const [text, setText] = useState('')
  const [textSize, setTextSize] = useState(2)
  const [textColor, setTextColor] = useState('white')
  const [notes, setNotes] = useState([])
  const [widget, setwidget] = useState(false)
  const [namer, setNamer] = useState(false)
  const [namerCords, setNamerCords] = useState({})

  const changeFontSize = (e) => {

    if (e.target.id === '+'){setTextSize(textSize + 1)}
    else if (e.target.id === '-' && textSize > 1){setTextSize(textSize - 1)}
  }

  const changeFontColor = (e) => {
    setTextColor(e.target.value)
  }

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

  

  return (
    <div className="App">
      <div className='title'>
      <h1>REGOLITH</h1>
      <h2>An Organization App by Caleb Campbell</h2>
      </div>
      <div onClick={handleWidgetButton} className='widgets'>
        <h3>Widgets</h3>
      </div>
      {widget && (
        <div className='widget-list'>
        </div>
      )}
      {namer && (
        <Namer handleNamerSubmit={handleNamerSubmit} x={namerCords.x} y={namerCords.y} />
      )}
      <div onDoubleClick={handleDoubleClick} className='workspace'>
        <h3>Double click to add a sticky note</h3>
        
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
