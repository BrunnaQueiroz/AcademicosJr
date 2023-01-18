import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ReactDOM } from 'react-dom/client'
import './App.css'
import MeetingRoom from './pages/MeetingRoom/MeetingRoom'
import Login from './pages/LoginPage/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {  

  return (
    <div className="App">
      {/*<Login /> 
      <MeetingRoom />   */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Room" element={<MeetingRoom/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
