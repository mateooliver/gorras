import React from "react";
import {createContext, useState} from "react";

export const CartContext  = createContext(); 


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  }

  const isInCart=(id)=>{  
    return cart.some(prod=>prod.id===id);
  }
  const cartQuantity=()=>{
    return cart.length;
  }
  const cartTotal=()=>{
    return cart.reduce((total,item)=>total+=item.precio*item.cantidad,0);
  }
  const emptyCart=()=>{
    setCart([]);
  }
  const removeItem=(id)=>{
    setCart(cart.filter(item=>item.id!==id));
  }

  return(
      <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem
      }}>
          {children}
      </CartContext.Provider>
  )
}