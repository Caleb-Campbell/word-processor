import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Toolbar from './components/Toolbar'
import TextArea from './components/TextArea'

function App() {
  const [text, setText] = useState('')
  const [textSize, setTextSize] = useState(1)


  const changeFontSize = (e) => {
    e.target.id === '+' ? setTextSize(textSize + 1) : setTextSize(textSize - 1)
  }

  return (
    <div className="App">
      <div className='title'>
      <h1>REGOLITH</h1>
      <h2>A Word Processor by Caleb Campbell</h2>
      </div>
        <Toolbar textSize={textSize} changeFontSize={changeFontSize} />
        <TextArea textSize={textSize} text={text} />
    </div>
  )
}

export default App
