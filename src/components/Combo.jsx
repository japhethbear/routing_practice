import React from 'react'
import { useParams } from 'react-router-dom'

const Combo = () => {
    const {word, textColor, bkgdColor} = useParams ();

  return (
    <div>
      {
        isNaN(word)? 
          <h1 style={
            textColor? {color: textColor, backgroundColor: bkgdColor} : null

          }>The word is: {word}!</h1> 

          :

          <h1>The number is: {word}!</h1>
      }
    </div>
  )
}

export default Combo