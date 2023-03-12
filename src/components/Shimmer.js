import React from 'react'
// import SideBar from './SideBar'

const Shimmer = () => {
  return (
    <div>
      {/* <SideBar/> */}
      <div className='flex flex-wrap'>
        {
            Array(50).fill("").map((e,index) => <div key={index} className='p-2 m-2 w-64 h-60 shadow-lg bg-gray-200'> </div> )
        }
      
      </div>
    </div>
  )
}

export default Shimmer