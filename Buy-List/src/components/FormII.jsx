import React, { useState, useEffect } from 'react'

import { Button, Paper, TextField } from '@mui/material';
import '../App.jsx';



export default function FormII({ addTobuy, deleteTobuy }) {

  const [values, setValues] = useState(); 
  const [id, setId]  = useState(0)

  const tobuyCreate = (values) => {
    const tobuyObj = {values: values, id: id};
    setId(id + 1);
    addTobuy(tobuyObj);
    document.getElementById("outlined-basic").value = null; 
    
   
  }
 
 
  return (               
      <Paper style={{ padding: "0.5em", borderRadius: "9px", 
      backgroundColor: "white", width: "50vw", marginTop: "19px",
      marginLeft: "20%", marginBottom: "30px"}}>
        <div id='textfield' style={{ display:"flex", justifyContent: "center"}}>
            <TextField
            type="text"
            id="outlined-basic"
            name='produto'
            label="o que eu desejo?"
            variant="outlined"
            onChange={(e) => setValues(e.target.value)}
            fullWidth
            />
            <a href="/mobiyellow"><Button
            variant="text" /*</div>onClick={handleClickButtom}*/
            onClick={() => tobuyCreate(values)} ><img src="./imgs/botao.png" alt="botão de adicionar" /></Button></a>             
        </div>
      </Paper>    
  )
}
