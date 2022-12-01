import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Toolbar from './components/Toolbar'
import TextArea from './components/TextArea'

function App() {
  const [text, setText] = useState('')
  const [textSize, setTextSize] = useState(3)
  const [textColor, setTextColor] = useState('white')


  const changeFontSize = (e) => {

    if (e.target.id === '+'){setTextSize(textSize + 1)}
    else if (e.target.id === '-' && textSize > 1){setTextSize(textSize - 1)}
  }

  const changeFontColor = (e) => {
    setTextColor(e.target.value)
  }

  return (
    <div className="App">
      <div className='title'>
      <h1>REGOLITH</h1>
      <h2>A Word Processor by Caleb Campbell</h2>
      </div>
      <p>{textColor}</p>
        <Toolbar textSize={textSize} changeFontSize={changeFontSize} />
        <TextArea textSize={textSize} text={text} textColor={textColor} />
    </div>
  )
}

export default App
