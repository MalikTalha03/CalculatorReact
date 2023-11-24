import React from 'react'

const Operators = () => {
    const handleClick = (e) => {
        console.log(e.target.innerText)
    }
  return (
    <>
        <div className="keypad2">
            <button className='btn' onClick={handleClick}>/</button>
            <button className='btn' onClick={handleClick}>*</button>
            <button className='btn' onClick={handleClick}>-</button>
            <button className='btn' onClick={handleClick}>+</button>
            <button className='btn' onClick={handleClick}>=</button>
        </div>
    </>
  )
}

export default Operators