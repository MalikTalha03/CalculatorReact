import React from 'react'

const Input = (props) => {
  return (
    <>
    <input className='text' type="text" value={props.val} disabled/>
    </>
  )
}

export default Input