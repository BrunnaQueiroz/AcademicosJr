
import React, { useState, useEffect } from 'react'

import './App.css'
import Modal from 'react-modal';

Modal.setAppElement('#root')

function ModalPage({handleOpenModal, handleCloseModal}) {    


  
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
        right: 'auto'
        
      }
    }

  return (   
    <div>
        <div className='modal'>          
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
          <div className='estilo'>            
            <button onClick={handleCloseModal}>Close</button>                        
          </div>            
        </Modal>
        </div>                         
    </div>
  )
}


export default ModalPage
 



