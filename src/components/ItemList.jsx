import React, {useEffect} from "react";
import App from "../App";
import Item from "./Item"
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemList=({Items})=>{
   
    return (
        <div className="d-flex justify-content-center"> 
      
            {Items.map((producto) => <Item producto={producto} key={producto.id} />)}
        
        </div> )
}
export default ItemList