import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MeetingRoom from './pages/MeetingRoom/MeetingRoom'
import Login from './pages/LoginPage/Login'

function App() {  

  return (
    <div className="App">
      <MeetingRoom />     
      <Login /> 
    </div>
  )
}

export default App
