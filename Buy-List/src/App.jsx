
import React, { useState, useEffect } from 'react'
import '../src/App.css'
import Second_desk from "../src/pages/second_page/second_page";
import {Link, Routes, Route} from "react-router-dom";
import First_desk from "./pages/first_page";
import Mobile_Yellow from "../src/components/MobileYellow/MobileYellow";





  function App() {    


    
  return ( 
    <div className="App">
      <Routes>
        <Route path='/' element={<First_desk/> }/>
        <Route path='/lista' element={<Second_desk/> }/>
        <Route path='/mobiyellow' element={<Mobile_Yellow/>}/>
      </Routes>
    </div>
      
      
  )
};


export default App
 