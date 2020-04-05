import React from 'react'

import Char from './Char/Char';

const chars = props => props.userInput.split('').map((ch, index) => {
  return <Char 
    character={ch} 
    key={index} 
    click={() => props.clicked(index)}/>
})

export default chars;