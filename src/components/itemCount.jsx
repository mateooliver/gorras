import React from "react";
import { useState } from "react";
import { InputGroup, Button,  } from "react-bootstrap";


const ItemCount = ({max, cantidad, setCantidad, resultado,restaStock, onAdd}) => {

    
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1);
    }

    const handleRestar = () => {  
        cantidad > 1 && setCantidad(cantidad - 1);
    }

  

  return (
    <div>
        <p> Cantidad en Stock: {restaStock}</p> 
        
        {max <=1 && <p className="text-danger">¡Apurate, esta es la última unidad!</p>}

        <InputGroup className="mb-3">
              <Button variant="outline-secondary" onClick={handleSumar} disabled={resultado===max} >+</Button>
              <span className='col-1 text-center my-auto'> {resultado}</span>
              <Button variant="outline-secondary" disabled={resultado <= 1} onClick={handleRestar }>-</Button>
            </InputGroup>
            <Button className='btn btn-primary col-2 p-0 m-2' onClick={onAdd}>Agregar al carrito </Button>
    </div>
  )
}

export default ItemCount