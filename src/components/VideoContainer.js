import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { MAX_RESULT_API } from '../utils/constants'
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'

const VideoContainer = () => {

  const [videos, setVideos] = useState([])
  
  const getVideo = async () => {
    const data = await fetch(MAX_RESULT_API)
    const json = await data.json();
    setVideos(json.items)
  }

  useEffect(() => {
    getVideo();
  }, [])

  return (videos.length === 0) ? 
      <Shimmer/> : 
      <div className='flex flex-wrap'>
         {videos.map( (video) =><Link to={"/watch?v=" + video.id}> <VideoCard key={video.id} info={video}/> </Link> ) }
      </div>
}

export default VideoContainer