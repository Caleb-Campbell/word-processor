import React from 'react'
import '../styles/text.css'

export default function TextArea(props) {
    const {textSize, text} = props
  return (
    <div className='text-wrap'>
        <textarea
        style={{
        fontSize: `${textSize}em`
            }}
        className='text-area'>
            {text}
        </textarea>
    </div>
  )
}
