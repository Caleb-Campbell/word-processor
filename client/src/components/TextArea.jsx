import React from 'react'
import '../styles/text.css'

export default function TextArea(props) {
    const {textSize, text, textColor} = props
  return (
    <div className='text-wrap'>
        <textarea
        placeholder='Diggy Diggy on the Moony Moony...'
        style={{
        fontSize: `${textSize}em`,
        color: textColor
            }}
        className='text-area'>
            {text}
        </textarea>
    </div>
  )
}
