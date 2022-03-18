import React, {useState} from "react";
import App from "../App";

const ItemListContainer= (props)=> {
    const [contandor, setContador]= useState(0)
    return(
        <div>
            <div class=" col-1 text-center mt-5">
                   <p>Stock: {props.stock}  </p>
            </div>
            <div className="col-1"> 
                <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button">+</button>
                    <input type="text" class="form-control" placeholder="" aria-describedby="button-addon2" aria-label="Example text with two button addons"></input>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">-</button>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer