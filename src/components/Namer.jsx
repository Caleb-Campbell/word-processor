import React, {useState} from 'react'
import '../styles/namer.css'




export default function Namer(props) {
    const {x, y, handleNamerSubmit} = props
    
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        handleNamerSubmit(e, input)
    }
    
  return (
    <div className='namer-wrap'
    style={{
        left: x - 5 + 'px',
        top: y - 5 + 'px'
    }}
    >

    <input
        className='namer'
        onChange={handleChange}
        value={input}
        name='namer' placeholder='Name your note...'></input>
        <button onClick={handleSubmit} className='name-submit'>+</button>
        </div>
        

  )
}
