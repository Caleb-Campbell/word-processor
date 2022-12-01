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
      x: e.pageX,
      y: e.pageY,
      id: Date.now()
    }
    setNotes([...notes, newSticky])
      
    
  }

  return (
    <div className="App">
      <div className='title'>
      <h1>REGOLITH</h1>
      <h2>A Word Processor by Caleb Campbell</h2>
      </div>
      <div onDoubleClick={createNewStickyNote} className='workspace'>
        <h3>Double click to add a sticky note</h3>
        {notes.map(note => {
          return (
            <StickyNote x={note.x} y={note.y} key={note.id} />
          )
        })}
      </div>
    </div>
  )
}

export default App
