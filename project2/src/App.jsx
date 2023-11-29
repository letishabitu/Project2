import { useState, useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './style.css'
import Home from './pages/Home'
import News from './pages/News'
import Nav from './components/Nav'

import { Route, Routes } from 'react-router-dom';
// import my page components


function App() {
  

  return (
  
      <div className="App">
        
          <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        

      </Routes> 
      </div>
     
  )
}

export default App
