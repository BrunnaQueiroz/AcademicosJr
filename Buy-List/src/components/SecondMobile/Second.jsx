
import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from '../../pages/Home';
import FormII from '../FormII';
import Corpo from  '../Corpo'
import ModalPage from '../mobile/ModalPage'
import CorpoII from '../CorpoII/CorpoII'
import Modal from 'react-modal';


Modal.setAppElement('#root')

function Second({handleCloseModal, handleOpenModal}) {    
  
  const [modalIsOpen, setIsopen] = useState(false)
  
    function handleOpenModal() {
      setIsopen(true)         
    }

    function handleCloseModal() {
      setIsopen(false)       
    }

    const customStyle = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',        
      }
    }

  return ( 
    <div className="AppII">           
      <div className='headII' style={{ height: "50px"}}>
        <img id='tracos' src="./imgs/tracos.png" alt="ícone de opções" />
        <h1 id='buyList' style={{ textAlign: "center", fontSize: "100%" }}>LISTA DE COMPRAS</h1> 
        <AccountCircleIcon style={{color: "#F5FF66"}}/>         
      </div>       
      <img id='ponta' src="../imgs/pontaLapis.jpg" alt=""/>                                       
      <FormII/>
      <div id='img' style={{ marginLeft: "50%", paddingTop: "20px", paddingBottom: "20px"}}>
        <img id='botaoMobile' src="../imgs/botaoII.png" alt="" onClick={handleCloseModal}/>               
      </div>
      <CorpoII/>
    </div>
  )
}


export default Second
 



