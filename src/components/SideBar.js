import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const SideBar = () => {

  const isMenuOpen = useSelector(store => store.menu.isOpen)
  
  if(!isMenuOpen) return null;  //early return

  return(
    <div className='shadow-lg w-44 '>

      <div>
          <ul>
            <li className='p-1'> <Link to="/">Home</Link></li>
            <li className='p-1'>Shorts</li>
            <li className='p-1'>Subscription</li>
            <li className='p-1'>Home</li>
            <li className='p-1'>Shorts</li>
            <li className='p-1'>Subscription</li>
          </ul>
      </div>           
 </div>
  )
}

export default SideBar