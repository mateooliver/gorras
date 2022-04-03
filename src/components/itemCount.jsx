import React from "react";
import { useState } from "react";
import { InputGroup, Button,  } from "react-bootstrap";


const ItemCount = ({max, cantidad, setCantidad, resultado,restaStock}) => {

    
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1);
    }

    const handleRestar = () => {  
        cantidad > 1 && setCantidad(cantidad - 1);
    }

  

  return (
    <div>
        <p> Cantidad en Stock: {restaStock}</p> 
        <InputGroup className="mb-3">
              <Button variant="outline-secondary" onClick={handleSumar} >+</Button>
              <span className='col-1 text-center my-auto'> {resultado}</span>
              <Button variant="outline-secondary"  onClick={handleRestar }>-</Button>
            </InputGroup>
            
    </div>
  )
}

export default ItemCount