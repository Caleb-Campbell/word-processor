import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import StickyNote from './components/StickyNote'

function App() {
  const [text, setText] = useState('')
  const [textSize, setTextSize] = useState(2)
  const [textColor, setTextColor] = useState('white')
  const [notes, setNotes] = useState([])


  const changeFontSize = (e) => {

    if (e.target.id === '+'){setTextSize(textSize + 1)}
    else if (e.target.id === '-' && textSize > 1){setTextSize(textSize - 1)}
  }

  const changeFontColor = (e) => {
    setTextColor(e.target.value)
  }

  const createNewStickyNote = (e) => {
    console.log(e.pageX, e.pageY)
    const newSticky = {
      id: Date.now(),
      x: e.pageX,
      y: e.pageY,
    }
    setNotes([...notes, newSticky])
  }

  const deleteNote = (e) => {
    const newList = notes.filter(note => note.id !== parseInt(e.target.id))
    setNotes(newList)
  }

  return (
    <div className="App">
      <div className='title'>
      <h1>REGOLITH</h1>
      <h2>An Organization App by Caleb Campbell</h2>
      </div>
      <div onDoubleClick={createNewStickyNote} className='workspace'>
        <h3>Double click to add a sticky note</h3>
        {notes.map(note => {
          return (
            <StickyNote key={note.id} deleteNote={deleteNote} x={note.x} y={note.y} id={note.id} />
          )
        })}
      </div>
    </div>
  )
}

export default App
