import React, { useEffect } from 'react'
import ChatComponent from './ChatComponent'

const LiveChat = () => {

  useEffect(()=> {
     const i = setInterval(() => {
        console.log("API polling")
     },2000)

     return () => clearInterval(i)
  },[])

  return (
    <div className='border border-black w-[26rem] h-[31rem] mt-2 background bg-slate-50'>
        <ChatComponent name={"Brock Lesnar"} chat={"The Beast Incarnate"} />
    </div>
  )
}

export default LiveChat