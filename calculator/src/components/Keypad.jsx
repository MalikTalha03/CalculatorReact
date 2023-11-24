import React from 'react'

const Keypad = () => {
    const handleClick = (e) => {
        console.log(e.target.innerText)
    }
  return (
    <>
    <div className='keypad'>
        <button className='btn' onClick={handleClick}>7</button>
        <button className='btn' onClick={handleClick}>8</button>
        <button className='btn' onClick={handleClick}>9</button>
        <button className='btn' onClick={handleClick}>4</button>
        <button className='btn' onClick={handleClick}>5</button>
        <button className='btn' onClick={handleClick}>6</button>
        <button className='btn' onClick={handleClick}>1</button>
        <button className='btn' onClick={handleClick}>2</button>
        <button className='btn' onClick={handleClick}>3</button>
        <button className='btn btn-zero' onClick={handleClick}>0</button>
        <button className='btn' onClick={handleClick}>.</button>
    </div>
    </>
  )
}

export default Keypad