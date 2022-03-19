import React, {useState} from "react";
import App from "../App";

const ItemListContainer= (props)=> {
    const [contandor, setContador]= useState(0);

    const click=(tipo)=>{
        if(( tipo ==='suma') && ( contandor<props.stock)){
            setContador(contandor +1);
            document.getElementById("boton").addClass("text-white")
        
        }else if((tipo==='resta')&&(contandor !=0)){
            setContador(contandor -1);
        }
    
    }
   
    return(
        <div>
            <div class=" col-1 text-center mt-5">
                   <p>Stock: {props.stock - contandor}  </p>
            </div>
            <div className="col-1"> 
                <div class="input-group mb-3">
                    <button  class="btn btn-outline-secondary"  onClick={()=> click("suma" )} type="button">+</button>
                    <div id="boton" class="form-control" >{contandor}</div>
                    <button class="btn btn-outline-secondary"  onClick={()=> click("resta")} type="button" id="button-addon2">-</button>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer