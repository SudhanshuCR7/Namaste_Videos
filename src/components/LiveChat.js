import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import ChatComponent from './ChatComponent'
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const LiveChat = () => {

  // const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });

  const [userChat, setUserChat] = useState("")

  const dispatch = useDispatch();

  const chatMessage = useSelector(store => store.chat.message)

  useEffect(()=> {
     const i = setInterval(() => {
        dispatch(addMessage({
          name: uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }),
          text: "Namaste  !"
        }))
     },2000)

     return () => clearInterval(i)
  },[])

  return (
    <>
    <div className='border border-black w-[29rem] h-[28rem] mt-2 background bg-slate-50 overflow-y-scroll flex flex-col-reverse rounded-lg'>
        {chatMessage.map((c,i) => <ChatComponent key={i} name= {c.name} chat= {c.text} />)}
    </div>
    <div className='border border-gray-500 py-2 mt-2 px-2 rounded-lg'>
      <input 
      className='w-[23rem] px-2'
      placeholder='Type Something.....' 
      type="text" 
      value={userChat} 
      onChange={(e) => {setUserChat(e.target.value)}} />
      <button 
      className='bg-green-300 text-black rounded-lg w-[4.25rem] h-[1.75rem]'
      onClick={() => {
        dispatch(addMessage({
          name: "Sudhanshu Nigam",
          text: userChat
        }))
        setUserChat("")
      }
      }>
        Submit</button>
    </div>
    </>
  )
}

export default LiveChat