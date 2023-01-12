import React, { useState, useEffect } from 'react'
import Form from '../Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyListY from '../BuyList'
import './App.css'

export default function HomeY() {
    

    const [tobuys, setTobuys] = useState([]);

    const addTobuy = (tobuy) => {
        console.log(tobuy);
        setTobuys([...tobuys, tobuy]);
    };

    const deleteTobuy = (id) => {        
        var filtered = tobuys.filter((tobuy) => tobuy.id !== id);
        console.log(filtered);
        setTobuys(filtered);
        if (filtered.length == 0) {
            console.log("Tem nada aqui");            
        };
    };

    const editTobuy = (id, editedText) => {      
        var tobuysArray = [...tobuys];

        tobuysArray.splice(id, 1, { values: editedText, id:id });
        setTobuys(tobuysArray);
    };

  return (
    <Container  style={{ marginLeft: "20%", marginTop: "45px", width: "70vw"}}>        
        <div id='texto' style={{width: "296px"}}>
            <Form addTobuy={addTobuy} />
            <List className='lista_mobi' >
                {tobuys.map((tobuy) => (
                    <div key={tobuy.id} style={{marginTop:"1em", marginLeft: "-16%", 
                    }} >
                        <BuyListY editTobuy={editTobuy} tobuy={tobuy} deleteTobuy={deleteTobuy}/>
                    </div>
                ))}
                {/*<BuyList/> */}
            </List>
        </div>                
    </Container> 
  )
}
