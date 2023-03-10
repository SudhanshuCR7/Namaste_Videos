import React from 'react'

const ChatComponent = (props) => {
  return (
    <div className='flex align-bottom'>
        <img 
            className='w-4 h-4 m-2'
            alt='user-icon' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQ2pdRFQNGZRLDnCdtiYBUZs1PvaxiAZDbA&usqp=CAU'/>
        <p className='px-1 font-bold'>{props.name}</p>
        <p className='px-1'>{props.chat}</p>
    </div>
  )
}

export default ChatComponent