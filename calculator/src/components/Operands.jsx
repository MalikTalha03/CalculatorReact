import React from 'react'

const Operands = () => {
    const handleClick = (e) => {
        console.log(e.target.innerText)
    }
  return (
    <>
    <div className="keypad">
        <button className='btn' onClick={handleClick}>AC</button>
        <button className='btn' onClick={handleClick}>+/-</button>
        <button className='btn' onClick={handleClick}>%</button>
    </div>
    </>
  )
}

export default Operands