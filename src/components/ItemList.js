import React, {useState} from "react";
import App from "../App";
import Item from "../components/Item"
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from "/Users/mateooliver/Desktop/React/gorras/src/components/img/img1.jpeg"

const Gorras =[{id:'1', stock:1, nombre:"butch", precio:1000, img:"img1"},{id:'2', stock:3, nombre:"Borrow", precio:1100, img:{img1}},{id:'3', stock:0, nombre:"Tyson", precio:1050, img:{img1}}]

// promesa que se ejecuta en consola 2 segundos mas tarde
 const promesa =new Promise ((resolve, reject)=>{
    
    if(true){
        resolve.setTimeout(console.log(Gorras ), 2000
        );
    }else{
        reject("Error del servidor");
    }
});
 promesa.then(
     (resolve)=>{
         return (resolve);
     },
     (reject)=>{
        return(reject);
     }
 )


const ItemList=()=>{
   
    return (
        <div className="d-flex gap-3"> 
      
            {Gorras.map((caracteristicas) => <Item nombre={caracteristicas.nombre} id={caracteristicas.id} precio={caracteristicas.precio} img={caracteristicas.img} stock={caracteristicas.stock} />)
        
        }</div> )}
export default ItemList