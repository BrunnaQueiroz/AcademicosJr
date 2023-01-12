import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button, Paper, TextField } from '@mui/material';
import '../App.jsx';
import Form from './Form_mobile';


export default function Form({ addTobuy, deleteTobuy }) {

  const [values, setValues] = useState(); 
  const [id, setId]  = useState(0)

  const tobuyCreate = (values) => {
    const tobuyObj = {values: values, id: id};
    setId(id + 1);
    addTobuy(tobuyObj);
    document.getElementById("outlined-basic").value = null;     
    Axios.post("http://localhost:3001/produto/insert", {
      produto:values,
    }).then((response)=>{
      console.log(response)
    })  
    
  }
 
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,    
    }));
  }; 
  

 
  return (               
      <Paper style={{ padding: "0.5em", borderRadius: "10px", 
      backgroundColor: "white"}}>
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
            <Button
            variant="text" 
            onClick={() => tobuyCreate(values)}><img src="./imgs/botao.png" alt="botão de adicionar" /></Button> 
        </div>
      </Paper>    
  )
}