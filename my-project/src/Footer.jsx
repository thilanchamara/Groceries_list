import React from 'react'

const Footer = ({items}) => {
  return (
    <div className=' flex justify-center items-center bg-blue-600 p-1 text-white '>
        {items.length ? <p>There is {items.length} items</p>: <p>There is no item in the list</p>}
    </div>
  )
}

export default Footer