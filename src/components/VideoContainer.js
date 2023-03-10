import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { MAX_RESULT_API } from '../utils/constants'
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

  
  return (
    <div className='flex flex-wrap'>
      {videos.map( (video) =><Link to={"/watch?v=" + video.id}> <VideoCard key={video.id} info={video}/> </Link> ) }
    </div>
  )
}

export default VideoContainer