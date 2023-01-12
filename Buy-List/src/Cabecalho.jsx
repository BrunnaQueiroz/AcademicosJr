
import React, { useState, useEffect } from 'react'
import Home from '../pages/Home';



function Cabecalho() {       

  return ( 
    <div id='divCabecalho'>
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
                <a href="/lista"><p id='suaLista'>SUA LISTA DE COMPRAS WEB  </p></a> 
                <a href="/lista"><img id='listaVerde' src="./src/assets/lista.png" alt="Lista" /></a>
              </div>
              <Home/>
              <div className='logo_esquerdo'>
              <div className='opcoes'>
                <div className='lista'>
                  <p id='criar'> <img className="img_lista" src="./src/assets/flechas.png" alt="Flechas" /> Criar nova lista</p>
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
  )
}


export default Cabecalho
 



