import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/menuSlice';
import LiveChat from './LiveChat';



const commentsData = [
  {
    name: "Sudhanshu Nigam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [{ name: "Camavinga" , text: "Lorem ipsum dolor" , replies: []}]
  },
  {
    name: "Sudhanshu Nigam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      { 
        name: "Camavinga", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        replies: [
          {
            name: "Militao", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
            replies: [
              {
                name: "Vini Jr ", 
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Sudhanshu Nigam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [{ name: "Camavinga" , text: "Lorem ipsum dolor" , replies: []}]
  },
  {
    name: "Sudhanshu Nigam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [{ name: "Camavinga" , text: "Lorem ipsum dolor" , replies: []}]
  },
  {
    name: "Sudhanshu Nigam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [{ name: "Camavinga" , text: "Lorem ipsum dolor" , replies: []}]
  },
  {
    name: "Sudhanshu Nigam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [{ name: "Camavinga" , text: "Lorem ipsum dolor" , replies: []}]
  },
  {
    name: "Sudhanshu Nigam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [{ name: "Camavinga" , text: "Lorem ipsum dolor" , replies: []}]
  },
  {
    name: "Sudhanshu Nigam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [{ name: "Camavinga" , text: "Lorem ipsum dolor" , replies: []}]
  }
  
]

const Comment = (props) => {
  return (
    <div className='flex'>
       <img className='w-6 h-6 m-2' alt='user-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQ2pdRFQNGZRLDnCdtiYBUZs1PvaxiAZDbA&usqp=CAU'/>
       <div className='background: bg-gray-100'>
          <p>{props.data.name}</p>
          <p>{props.data.text}</p>
       </div>
    </div>
  )
}

const CommentsList = (props) => {
      return  props.comments.map( (comment) => 
                  <div className='py-1 mt-3'>
                    <Comment data={comment}/>
                    <div className='pl-5 border-l-2'>
                      <CommentsList comments={comment.replies} /> 
                    </div>
                  </div>
                  )       
}

const CommentsContainer = () => {
  return (
    <div className='mt-[2.75rem]'>
       <h1 className='font-bold'>Comments</h1>
       <CommentsList comments={commentsData} />
    </div>
  )
}

const Watchpage = () => {

  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(closeMenu())
  }, [])

  return (
    <>
    <div className='px-5 py-2'>
      <iframe 
      width="1000" 
      height="500" 
      src={"https://www.youtube.com/embed/"+searchParam.get('v')} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>    
      </iframe>
      <CommentsContainer/>
    </div>
    <div>
      <LiveChat/>
    </div>
    </>
  )
}

export default Watchpage