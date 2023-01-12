
import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from '../pages/Home';



function Corpo() {    

  return ( 
    <div id='corpo'>  
        <h2 className='organize' > ORGANIZE SUA LISTA AQUI</h2>          
        <div className="produtos">
            <button className='nome_produto'>Papel Higiênico</button>
            <button className='nome_produto'>Feijão</button>
            <button className='nome_produto'>Detergente</button>
            <button className='nome_produto'>Ovos</button>
            <button className='nome_produto'>Protetor Solar</button>
            <button className='nome_produto'>Maçã</button>
        </div>
        <div>
            <h2>TALVEZ VOCÊ TAMBÉM PRECISE...</h2>
        </div>
        <div className='footer' >
            <p className='img_produto'> <img src="./src/assets/liqui.png" alt="LiquclassNameificador" /> Liquidificador</p>
            <p className='img_produto'> <img src="./src/assets/bate.png" alt="Batedeira" /> Batedeira</p>
            <p className='img_produto'> <img src="./src/assets/ferro.png" alt="Ferro de passar roupa" /> Ferro de passar roupa</p>
            <p className='img_produto'> <img src="./src/assets/panela.png" alt="Panelas" /> Panelas</p>
            <p className='img_produto'> <img src="./src/assets/prod_beleza.png" alt="Produtos de beleza" /> Produtos de beleza</p>
            <p className='img_produto'> <img src="./src/assets/plantas.png" alt="Plantas" /> Plantas</p>
            <p className='img_produto'> <img src="./src/assets/ferramenta.png" alt="Ferramentas" /> Ferramentas</p>
        </div>
    </div>
  )
}


export default Corpo
 



