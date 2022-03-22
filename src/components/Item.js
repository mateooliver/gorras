import React from "react";
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css'


let promesa;

const Item = ({nombre, id, precio, img, stock})=>{
    const Stock = () =>{
        if (stock >= 1){
            return ("En Stock")
        }else{
             return ("Agotado")
        }
    }



    return(
        <div key={id}>
            <div class="card text-center my-4" style={{width: "18rem"}}>
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6 className="text-secondary">${precio}</h6>
                    <a className="btn btn-primary">Ver mas</a>
                    <div className="mx-auto bg-secondary text-white rounded-3 text-center my-3 "> {Stock ()}</div>
                </div>
               
            </div>
        </div>)

    }
export default Item 
