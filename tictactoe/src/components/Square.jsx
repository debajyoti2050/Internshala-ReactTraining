import React from 'react'


const Square = ({value,onClick,isWinnningSquare}) => {
   
  return (
    <button type="button" 
    className='square'
     onClick={onClick} 
     style={{fontWeight: isWinnningSquare ? 'bold' : 'normal'}}
     >
        {value}
        </button>
  )
}

export default Square;