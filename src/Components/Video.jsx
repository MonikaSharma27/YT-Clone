import React from 'react'
import { Link } from 'react-router-dom'
import Time from '../loader/Time'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from 'js-abbreviation-number';


const Video = ({video}) => {
    console.log (video)
  return (

    <div className=''>
        <Link to={`/video/${video?.videoId}`}>
        <div className='flex flex-col '>
          <div className=' relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden'>
            <img className='h-full w-full' src={video?.thumbnails[0]?.url} alt="" />
            {video?.lengthSeconds && <Time time= {video?.lengthSeconds}/>}
          </div>


          <div className='flex space-x-2 mt-1 items-center'>
           <div className='flex items-start'>
             <div className='flex items-center h-9 w-9 rounded-full overflow-hidden mt-3'>
              <img className='w-full h-full rounded-full ' src={video?.author?.avatar[0]?.url} alt="" />
            </div>
           </div>
            <div>
              <span className='text-sm font-bold line-clamp-2'>{video?.title}</span>
              <span className='flex items-centerfont-semibold mt-2 text-[12px] text-gray-600'> 
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill
                className='text-gray-600 ml-1 text-[12px]'/>) }
              </span>
              <div className='flex text-gray-600 text-[12px] '>
                <span>
                  {`${abbreviateNumber(video?.stats?.views,2)} views`}
                </span>
                <span className='flex text-[24px] leading-none font-bold relative top-[-10px] mx-1'>.
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>


        </div>
        </Link>
        </div>
  )
}

export default Video