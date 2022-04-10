import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { BsFillBasketFill } from "react-icons/bs";


const Cartwidget= ()=>{
  const {cartQuantity}=useContext(CartContext)

    return(
      <Link to={"/Cart"} className="mx-4">
        <BsFillBasketFill className="position-relative" style={{color:"#ffff", height:"auto", width:"30px"}}/>
        <span class="position-absolute translate-middle badge rounded-pill bg-dark text-white mx-1">{cartQuantity () || ""}</span>
      </Link>

    )
}
export default Cartwidget