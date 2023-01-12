
import React, { useState, useEffect } from 'react'
import './App.css';

function CorpoII() {    

  return ( 
    <div>
      <div id='corpoII'>          
      <div className="produtosII">
            <button className='nome_produtoII'>Papel Higiênico</button>
            <button className='nome_produtoII'>Feijão</button>
            <button className='nome_produtoII'>Detergente</button>
            <button className='nome_produtoII'>Ovos</button>
            <button className='nome_produtoII'>Protetor Solar</button>
            <button className='nome_produtoII'>Maçã</button>
        </div>
          <div>
              <h2 id='talvez'>TALVEZ VOCÊ TAMBÉM PRECISE...</h2>
          </div>
          <div className='container'>
            
            <div className='gallery-wrapper'>
              <div className='footer' >
                  <p className='img_produto'> <img src="./src/assets/liqui.png" alt="LiquclassNameificador" class="itemI current-item"/> Liquidificador</p>
                  <p className='img_produto'> <img src="./src/assets/bate.png" alt="Batedeira" class="itemI current-item" /> Batedeira</p>
                  <p className='img_produto'> <img src="./src/assets/ferro.png" alt="Ferro de passar roupa" class="itemI current-item" /> Ferro de passar roupa</p>
                  <p className='img_produto'> <img src="./src/assets/panela.png" alt="Panelas" class="itemI current-item" /> Panelas</p>
                  <p className='img_produto'> <img src="./src/assets/prod_beleza.png" alt="Produtos de beleza" class="itemI current-item"/> Produtos de beleza</p>
                  <p className='img_produto'> <img src="./src/assets/plantas.png" alt="Plantas" class="itemI current-item"/> Plantas</p>
                  <p className='img_produto'> <img src="./src/assets/ferramenta.png" alt="Ferramentas" class="itemI current-item"/> Ferramentas</p>
              </div>
            </div> 
          </div>                 
      </div>      
       
    </div>
  )
}


export default CorpoII
 



