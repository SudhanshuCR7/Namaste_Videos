import React from 'react'

const VideoCard = (props) => {
  return (
    <div className=' p-2 m-2 w-64 shadow-lg'>
      <img alt='thumbnail' src={props.info?.snippet?.thumbnails?.medium.url} />
      <h1 className='font-bold'> {props.info?.snippet?.localized?.title}</h1>
      <h1> {props.info?.snippet?.channelTitle}</h1>
      <h1> {props.info?.statistics?.viewCount}</h1>
    </div>
  )
}

export default VideoCard