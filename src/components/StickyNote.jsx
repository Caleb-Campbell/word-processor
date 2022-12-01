import React from 'react'
import Draggable from "react-draggable";

import Toolbar from './Toolbar';
import TextArea from './TextArea';
import styled from 'styled-components';



function StickyNote(props) {
  const {x, y, id} = props

  const styledSticky = styled.div`
  x: ${x};
  y: ${y};

`



  return (
    <Draggable key={id}>
        <div 
        style={{
          left: x  + 'px',
          top: y - 120 + 'px'
        }}
        className='sticky-note'>
            <Toolbar />
            <TextArea />
        </div>
    </Draggable>
  )
}

export default StickyNote