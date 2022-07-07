import React from 'react'


const Square = ({value,onClick,isWinnningSquare}) => {
   
  return (
    <button type="button" 
    
     onClick={onClick} 
     className={` square ${isWinnningSquare ? 'winning' : ''} ${value ==='X' ? 'text-green': 'text-orange'}`}
     style={{fontWeight: isWinnningSquare ? 'bold' : 'normal'}}
     >
        {value}
        </button>
  )
}

export default Square;