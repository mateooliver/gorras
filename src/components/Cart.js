import React, {useContext} from 'react';
import {CartContext} from './CartContext'


const Cart =()=>{
    const {cart}=useContext(CartContext);
   
    return(
    
        <div>
           Cantidad de productos dentro del carrito de compra:  {cart.length}
        </div>
    )
}
export default Cart