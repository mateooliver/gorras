import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { createRoutesFromChildren, Link, useNavigate, } from 'react-router-dom'
import { InputGroup } from 'react-bootstrap'
import { useState } from 'react'
import ItemCount from './itemCount'
import {CartContext} from './CartContext'

const ItemDetail = ({stock, nombre, precio, img, descripcion, talles,id}) => {

  const { addItem, isInCart }= useContext(CartContext);

  const [cantidad, setCantidad] = useState(1)
  
// funcion para volver atras un paso en la navegacion
  const navigate =useNavigate()
  const handleNavigate=()=>{
    navigate(-1)
  }
// agrega al carrito y con una condicion de si hay stock lo permite y sino muestra en consola que no hay stock
  const agregarAlCarrito = () => {  
    if( stock > 0){
     const itemToAdd={
       id,
       nombre,
       precio,
       img,
       cantidad
     }
     addItem (itemToAdd)
  }else{
    console.log('no hay stock')
  }}

// funcio  que resta stock a medida que sumamos en el contador
   const Stock = () =>{
     if(stock >= 1){
         return (`En Stock   (${(stock - cantidad)})`)
     }else{
          return ("Agotado")
     }
   }
  
  //  funcion que pone en el div de entre medio del counter informaciosobre el stock
   const Resultado = () => {
    if (stock > 0 ){
        return cantidad
    } else{
          return "0"
    }}
  
  // cartContext
  const InCart=()=>{
   return !isInCart(id) ?   <ItemCount  max={stock} restaStock={Stock()} resultado={Resultado ()} onAdd={agregarAlCarrito} cantidad={cantidad} setCantidad={setCantidad}/>
    : <Link to={`/cart`} className='btn btn-primary col-2 p-0 m-2'>Ir al carrito</Link>

  }


  return (
    <div className='d-flex columns justify-content-start' style={{width:"100vw"}}>
        <div style={{width:"50vw"}} ><img src={img} alt="" /></div>
        <div className='d-flex row gap-2' style={{width:"50vw"}} >
            <h2>Gorra {nombre}</h2>
            <h3> ${precio}</h3>
            <p className='container-fluid ' style={{width:"60%",marginLeft:"0%"}}>{descripcion}</p>
            <p>Talles disponibles: {talles}</p>

            { InCart ()}
            
            <hr/>
             <Button className='btn btn-outline-secondary bg-white text-dark col-2 m-2 p-0' onClick={handleNavigate}> Volver</Button>
        </div>
 
    </div>
  )
}

export default ItemDetail