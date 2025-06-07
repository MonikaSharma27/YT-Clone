import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GiLinkedRings } from "react-icons/gi";
import { MdWatchLater } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { GrChannel } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SiTrendmicro } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { FaRegNewspaper } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";
import { PiFilmSlate } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";








const Sidebar = () => {
    
  const sidebarItems = [
    {
      id:1,
      name:"Home",
      icon:<GoHomeFill/>
    },
    {
      id:2,
      name:"Shorts",
      icon:<SiYoutubeshorts/>
    },
    {
      id:3,
      name:"Subscription",
      icon:<MdOutlineSubscriptions/>
    }
  ];

  const sidebarItems2 = [
    {
      id:1,
      name:"Your Channel",
      icon:<GrChannel/>
    },
    {
      id:2,
      name:"History",
      icon:<FaHistory/>
    },
    {
      id:3,
      name:"Playlists",
      icon:<RiPlayList2Fill  />
    },
    {
      id:4,
      name:"Your Videos",
      icon:<BiVideo/>
    },
    {
      id:5,
      name:"Watch Later",
      icon:<MdWatchLater/>
    },
    {
      id:6,
      name:"Liked Videos",
      icon:<GiLinkedRings/>
    },
  ];

   const sidebarItems3 = [
    {
      id:1,
      name:"Trending",
      icon:<SiTrendmicro />
    },
    {
      id:2,
      name:"Shopping",
      icon:<HiOutlineShoppingBag />
    },
    {
      id:3,
      name:"Music",
      icon:<SiYoutubemusic/>
    },
    {
      id:4,
      name:"Movies",
      icon:<PiFilmSlate/>
    },
    {
      id:5,
      name:"Live",
      icon:<CgMediaLive/>
    },
    {
      id:6,
      name:"Gaming",
      icon:<SiYoutubegaming />
    },
    {
      id:7,
      name:"News",
      icon:<FaRegNewspaper/>
    },
    {
      id:8,
      name:"Sport",
      icon:<TfiCup/>
    },
    {
      id:9,
      name:"Courses",
      icon:<SiStylelint/>
    },
    {
      id:10,
      name:"Fashion & Beauty",
      icon:<PiLightbulbFilamentBold/>
    },
    {
      id:11,
      name:"Podcasts",
      icon:<MdPodcasts/>
    },
  ];

  const sidebarItems4 = [
    {
      id:1,
      name:"YouTube Premium",
      icon:<FaYoutube/>
    },
    {
      id:2,
      name:"YouTube Studio",
      icon:<SiYoutubestudio />
    },
    {
      id:3,
      name:"YouTube Music",
      icon:<SiYoutubemusic/>
    },
    {
      id:4,
      name:"YouTube Kids",
      icon:<SiYoutubekids/>
    }
  ];




  return (
    <div className='px-4 w-[31%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden '>
      {/*home*/}
      <div className='space-y-3 items-center'> 
        {
          sidebarItems.map((item)=>{
            return(
              <div key={item.id} className=' flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-1'>
           <div className='text-xl cursor-pointer ml-2'>{item.icon}</div>
         <span className='cursor-pointer'>{item.name}</span>
        </div>
            ) }) }
      </div>
      <br/>
      <hr/>

       {/*you*/}
      <div className='mt-4 space-y-3 items-center'> 
        <div className='flex items-center space-x-2'>
          <h1 className='font-bold '>You</h1>
           <FaChevronRight className='text-sm'/>
        </div>
        {
          sidebarItems2.map((item)=>{
            return(
              <div key={item.id} className=' flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-1'>
           <div className='text-xl cursor-pointer ml-2'>{item.icon}</div>
         <span className='cursor-pointer'>{item.name}</span>
        </div>
            ) }) }
      </div>
      <br/>
      <hr/>
      
      {/*Explore*/}
      <div className='mt-4 space-y-3 items-center'> 
        <div >
          <h1 className='font-bold '>Explore</h1>
        </div>
        {
          sidebarItems3.map((item)=>{
            return(
              <div key={item.id} className=' flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-1'>
           <div className='text-xl cursor-pointer ml-2'>{item.icon}</div>
         <span className='cursor-pointer'>{item.name}</span>
        </div>
            ) }) }
      </div>
       <br/>
       <hr/>

      {/* more section */}
         <div className='mt-4 space-y-3 items-center'> 
        <div >
          <h1 className='font-bold '>More from YouTube</h1>
        </div>
        {
          sidebarItems4.map((item)=>{
            return(
              <div key={item.id} className=' flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-1'>
           <div className='text-xl cursor-pointer ml-2 text-red-500'>{item.icon}</div>
         <span className='cursor-pointer'>{item.name}</span>
        </div>
            ) }) }
      </div>
      <br/>
      <hr/>

        <div className='mt-3'>
           <span className="text-xs text-gray-600 font-semibold ">
        About Press Copyright <br /> Contact us Creators <br /> Advertise
        Developers <br />
        <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works{" "}
        <br /> Test new features
      </span>
      <br />
      <p className="text-xs text-gray-500 mt-3">© 2025 Monika sharma</p>

        </div>
      
   
    </div>
  )
}

export default Sidebar
