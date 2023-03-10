import React from 'react'

const Button = (props) => {
  return (
    <button className='px-4 py-1 bg-gray-200 rounded-sm m-4'>{props.name}</button>
  )
}

export default Button