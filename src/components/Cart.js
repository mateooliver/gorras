import React, {useContext} from 'react';
import {CartContext} from './CartContext'
import {AiOutlineDelete, } from 'react-icons/ai'
import { Button } from 'bootstrap';
import {BsFillCartCheckFill, BsCartX} from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Cart =()=>{
    const {cart, cartTotal,emptyCart,removeItem}=useContext(CartContext);
  
    return(
        <div>
        {  
        // uso de ternario para verificar si el carrito esta vacio
            cart.length === 0 
              // si es true, muestra esto
            ?<div className=' text-center ' style={{height:"100vh", marginTop:"20vh"}}>
            <h1 className=''>Ups!</h1>
             <p className=''>Tu carrito esta vacio</p>
             <i>Vuelve al inicio y selecciona todos los items que mas te gustan</i>
             <div className='my-2'>
                <Link to={"/"} className="btn btn-dark">Volver</Link>
             </div>
             </div>

            : 
            // si es false, muestra esto
            <>
            <div>
                    <div className='col-6 mx-auto bg-secondary my-2 text-center text-white fw-bolder rounded-3'>Tus items seleccionados, solo resta confirmar compra</div>


           {
               cart.map((item)=>(
                <div>
                  <div className='d-flex justify-content-between col-8 mx-auto my-3'>
                        <div className='d-flex my-auto'>  
                            <img src={item.img} alt="" style={{height:"7vw"}}/>
                           <div>
                                <h4>Modelo {item.nombre}</h4>
                                <p className=''>Precio unitario $ {item.precio}</p>
                            </div>
                        </div>
                        <div>
                            <p>Cantidad {item.cantidad}</p>
                            <p>Precio total $ {item.precio*item.cantidad}</p>
                           
                           <div className='d-flex mx-auto'> 
                            <div className='btn bg-secondary  text-center' onClick={()=>removeItem(item.id)}><AiOutlineDelete className=' text-white'   /></div>
                            </div>
                        </div>
                    </div>
                    <hr className='col-8 mx-auto'/>
                </div>
               ))
           }
              <div className='d-flex row justify-content-end col-8 mx-auto my-3'>
                   <div className='btn bg-success  text-center text-white mx-4 col-2 ' ><BsFillCartCheckFill/></div>
                   <p className='fw-bolder fs-6 text-end col-10 my-auto'>Total de compra: ${cartTotal()} </p>
                </div>
                   <hr className='col-8 mx-auto'/>
                   <div className='text-end col-10'>
                        <button className='btn bg-dark  text-center text-white col-1 ' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Vaciar Carrito"  onClick={emptyCart}><BsCartX/>  <p style={{fontSize:"10px", margin:"0 1% 0 0"}}>Vaciar carrito</p></button>
                       
                    </div>
        </div>
            </>
        }
        </div>
    )
}
export default Cart