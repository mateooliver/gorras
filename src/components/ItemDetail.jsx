import React from 'react'
import { Button } from 'react-bootstrap'
import { createRoutesFromChildren, Link, useNavigate, } from 'react-router-dom'
import { InputGroup } from 'react-bootstrap'
import { useState } from 'react'


const ItemDetail = ({stock, nombre, precio, img, descripcion, talles}) => {
  const [contador, setContador] = useState(0)
  const navigate =useNavigate()
  const handleNavigate=()=>{
    navigate(-1)
  }

   const Stock = () =>{
     if(stock >= 1){
         return (`En Stock   (${(stock - contador)})`)
     }else{
          return ("Agotado")
     }
   }
   const Cantidad=(tipo)=>{
     if(( tipo=== 'sumar') && (stock > contador)){
       setContador(contador +1)
     } else if ((tipo === 'restar')&& (contador > 0)){
        setContador(contador-1)
   }}

  return (
    <div className='d-flex columns justify-content-start' style={{width:"100vw;"}}>
        <div style={{width:"50vw"}} ><img src={img} alt="" /></div>
        <div className='d-flex row gap-2' style={{width:"50vw"}} >
            <h2>Gorra {nombre}</h2>
            <h3> ${precio}</h3>
            <p className='container-fluid ' style={{width:"60%",marginLeft:"0%"}}>{descripcion}</p>
            <p> Cantidad en Stock: {Stock ()}</p>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" onClick={()=>Cantidad('sumar') } >+</Button>
              <div className='col-1 text-center my-auto'> {contador}</div>
              <Button variant="outline-secondary"  onClick={()=>Cantidad('restar') }>-</Button>
            </InputGroup>
            <p>Talles disponibles: {talles}</p>
            <button className='btn btn-primary col-2 p-0 m-2'>Comprar</button>
            <hr/>
        <Button className='btn btn-outline-secondary bg-white text-dark col-2 m-2 p-0' onClick={handleNavigate}> Volver</Button>
        </div>
 
    </div>
  )
}

export default ItemDetail