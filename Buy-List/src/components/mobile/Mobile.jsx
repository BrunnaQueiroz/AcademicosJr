
import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from '../../pages/Home';
import Modal from 'react-modal';
/*import main from '../../../src/main'*/
import Second from '../SecondMobile/Second'
import MobileYellow from '../MobileYellow/MobileYellow'
import FormII from '../FormII';
import CorpoII from '../CorpoII/CorpoII'

Modal.setAppElement('#root')

function Mobile() {    
       
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
    <div className="App">    
      <div className='branca' style={{backgroundColor: "#E6E6E6"}}>
        <div className='headII' style={{ height: "50px", width: "100vw"}}>
          <img id='tracos' src="./imgs/tracos.png" alt="ícone de opções" />
          <h1 id='buyList' style={{ textAlign: "center", fontSize: "100%" }}>LISTA DE COMPRAS</h1>
          <AccountCircleIcon style={{color: "#F5FF66"}}/>
        </div>
        <img id='ponta' src="../imgs/pontaLapis.jpg" alt="" style={{width: "100vw", height: "20vh"}}/>
        <div id='img' style={{marginLeft: "15%", marginTop: "7px"}}>
          <img id='botaoMobile' src="../imgs/botaoII.png" alt="" onClick={handleOpenModal}/>
        </div>
        <FormII/>        
        <CorpoII/>
        <div className='modal'>
          <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>                        
            <button onClick={handleCloseModal}>Close</button>
            {/*<div> <Second/></div>    */}
            <div> 
              <MobileYellow/> 
            </div>                                         
          </Modal> 
        </div>
      </div>                                          
      </div>                    
  )
}


export default Mobile
 



