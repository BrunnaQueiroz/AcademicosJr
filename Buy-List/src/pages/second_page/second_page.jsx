import React, { useState, useEffect } from 'react'
import './second.css';
import '../../App.css'

/*import Mobile from '../mobile/Mobile'*/
import Mobile from '../../components/mobile/Mobile'


import Form from '../../components/Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyList from '../../components/BuyList';
import Home_desk from "../../components/Home_2"

function App() {    

  return ( 
    <div className="App_2">
      <div className='mobile'><Mobile/></div>                  
      <div className='desktopPage'>
      <div className='cabeca_primeiro'>
          <div className = "insta">
            <p> <img src="./src/assets/insta.png" alt="Instagem" />  Instagram</p>
          </div>
          <div className='sugestao'>
            <p> <img src="./src/assets/sugest.png" alt="Sugestão" />  Sugestão</p>
          </div>
          <div className='comp'>
            <p> <img src="./src/assets/comp.png" alt="Compartilhar" />  Compatilhar</p>
          </div>
        </div>
        <div className='cabeca_segundo'>
          <div className='logo_direito'>
            <p id='suaLista'>SUA LISTA DE COMPRAS WEB  </p>
            <img id='listaVerde' src="./src/assets/lista.png" alt="Lista" />
          </div>
          <Home_desk/>
          <div className='logo_esquerdo'>
          <div className='opcoes'>
            <div className='lista'>
              <p> <img className="img_lista" src="./src/assets/flechas.png" alt="Flechas" /> Criar nova lista</p>
            </div>
            <div className='conta'>     
              <img src="./src/assets/Símbolo perfil.png" alt="perfil icone" style={{width: "35px", height: "30px"}}/>
              <p id='textConta'>Entrar ou criar conta</p>                       
              {/*<p><img src="./src/assets/Símbolo perfil.png" alt="Usuario"/> Entrar ou criar conta </p>*/}
            </div>
          </div>
          </div>
        </div>                         
      </div>
      <div className='lista_2' >
       <h1 className='texto_1'>SUA LISTA DE COMPRAS</h1>     
      </div>

    </div>
  )
}


export default App



