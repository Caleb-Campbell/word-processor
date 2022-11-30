import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="App">
      <textarea
      rows={10}
      cols={150}
      className='text-area'>{text}</textarea>
    </div>
  )
}

export default App
