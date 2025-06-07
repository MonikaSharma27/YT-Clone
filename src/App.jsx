import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import PlayingVideo from './Components/PlayingVideo'
import Search from './Components/Search'
import { useAuth } from './context/AuthProvider'
import Loading from './loader/Loading'



function App() {
  const {loading}=useAuth()

  return (
    
    // <div >
    //   {loading && <Loading/>}
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" exact element={<Home/>}/>
    //     <Route path="/search/:searchQuery" element={<Search/>}/>
    //     <Route path="/video/:id" element={<PlayingVideo/>}/>
    //   </Routes>
    // </div>
     <div>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
      
    
  )
}

export default App
