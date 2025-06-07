import moment from 'moment'
import React from 'react'

const Time = (time) => {
    const videoTime = moment()?.startOf('day')?.seconds(time)?.format('H:mm:ss')
  return (
    <div>
        <span className='absolute bottom-2 right-2 bg-black text-white text-xs px-1 py-0.5 rounded-md'> 
            {videoTime}
        </span>
    </div>
  )
}

export default Time