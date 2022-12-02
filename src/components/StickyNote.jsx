import React from 'react'
import Draggable from "react-draggable";

import Toolbar from './Toolbar';
import TextArea from './TextArea';



function StickyNote(props) {
  const {x, y, id, deleteNote} = props

//   const styledSticky = styled.div`
//   x: ${x};
//   y: ${y};

// `


  return (
    <Draggable >
        <div key={id}
        style={{
          left: x - 5 + 'px',
          top: y - 5 + 'px'
        }}
        className='sticky-note'>
            <Toolbar deleteNote={deleteNote} id={id} />
            <TextArea />
        </div>
    </Draggable>
  )
}

export default StickyNote