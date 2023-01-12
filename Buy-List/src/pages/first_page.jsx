
import React, { useState, useEffect } from 'react'
import '../App.css'
import Axios from 'axios';
import axios from 'axios';
import Mobile from '../components/mobile/Mobile'
import Cabecalho from './Cabecalho_first'
import Corpo from '../components/Corpo'
import Second from '../components/SecondMobile/Second'
import MobileYellow from "../components/MobileYellow/MobileYellow"


function App() {    


  const [values, setValues] = useState();  
  

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,          
    }));
  };

  const handleClickButtom = () => {    
    Axios.post("http://localhost:3001/produto/insert", {
      produto:values.produto,
    }).then((response)=>{
      console.log(response)
    })
    
  }
   
  useEffect (() => {
    axios.get("http://localhost:3001/produto/find")
  })

  const ClickDelete = () => {
    Axios.post("http://localhost:3001/produto/delete", {
      produto:values.produto,
    }).then((response) => {
      console.log(response)
    })        
  }

  useEffect (() => {
    axios.get("http://localhost:3001/produto/delete")
  })     


  return (
      <div className="App">
          <div className='mobile'><Mobile/></div>                  
        <div className='desktopPage'>

          <Cabecalho/>  

          <a href="/lista">Lista</a>               

          <a href="/lista">  </a>  
          <div>
            <img src="" alt="" />
          </div>

          <Corpo/>
          <div id='second'><Second/></div>

          <Cabecalho/>            
          <Corpo/>
          <div id='second'><Second/></div>
          <div id="Yellow"><MobileYellow/></div>

        </div>
      </div>
      
      
  )
}


export default App