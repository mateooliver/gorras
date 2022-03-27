import React from "react";
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css'


let promesa;

const Item = ({producto})=>{
    const Stock = () =>{
        if (producto.stock >= 1){
            return ("En Stock")
        }else{
             return ("Agotado")
        }
    }



    return(
        <div>
            <div className="card text-center my-4" style={{width: "18rem"}}>
                <img src={producto.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>                    <h6 className="text-secondary">${producto.precio}</h6>
                    <a className="btn btn-primary" href="">Ver mas</a>
                    <div className="mx-auto bg-secondary text-white rounded-3 text-center my-3 "> {Stock ()}</div>
                </div>
               
            </div>
        </div>)

    }
export default Item 
