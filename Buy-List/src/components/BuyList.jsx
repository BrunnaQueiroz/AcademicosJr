import React, { useState, useEffect } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditText from './EditText';


export default function BuyList({ tobuy, deleteTobuy, editTobuy} ) {  

  const [openDialog, setOpenDialog] = useState(false); 

  const dialogHandler = () => {
    setOpenDialog(!openDialog); //a exclamação inverte
  }

  return (
  <div>
    <EditText 
    editTobuy={editTobuy} 
    open={openDialog} 
    dialogHandler={dialogHandler} 
    tobuy={tobuy} 
    />
    <Paper style={{ boxSizing: "borderBox", height: "75px", 
    width: "400px" ,borderRadius: "9px", padding: "0.5em 0em", 
    backgroundColor: "#F5FF66", height: "44px"}}>     
    
      <ListItem                               
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => deleteTobuy(tobuy.id)}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding      
      >
        <ListItemButton role={undefined}   dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple  
              style={{ color: "green"}}            
            />
          </ListItemIcon>
          <ListItemText primary={tobuy.values} 
          onClick={() => setOpenDialog(true)} 
          style={{ textTransform: "uppercase"}}          
          />
        </ListItemButton>
      </ListItem>
    </Paper>
  </div>
  );
}