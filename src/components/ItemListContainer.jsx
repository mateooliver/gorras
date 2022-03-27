import React, {useState, useEffect} from "react";
import App from "../App";
import ItemList from "./ItemList"
import img1 from "/Users/mateooliver/Desktop/React/gorras/src/components/img/img1.jpeg"
import img2 from "/Users/mateooliver/Desktop/React/gorras/src/components/img/img2.jpeg"
import img3 from "/Users/mateooliver/Desktop/React/gorras/src/components/img/img3.jpeg"

const ItemListContainer= (props)=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const Gorras =[{id:'1', stock:1, nombre:"Butch", precio:1000, img:img1},
                    {id:'2', stock:3, nombre:"Borrow", precio:1100, img:img2},
                    {id:'3', stock:0, nombre:"Tyson", precio:1050, img:img3}]
    
    
    
    // promesa que se ejecuta en consola 2 segundos mas tarde
     const Promesa =new Promise ((resolve, reject)=>{
        let condicion=true;
        if(condicion){
            setTimeout(()=>{
               resolve (Gorras )}, 2000
            );
        }else{
            reject("Error del servidor");
        }
    });
    useEffect(()=>{
        setLoading(true);
     Promesa
     .then((res)=>setItems(res))
    .catch((error)=>console.log('error', error))
    .finally(()=>setLoading(false));
         },[])
    
    
    return(
        <div >
            {loading ? 
                <div className="text-center mx-auto my-2">
                    <div class="spinner-border text-secondary" role="status"></div>
                    <p className="bg-secondary mx-auto text-white col-3 rounded-3">Un momento, por favor.</p>
                </div>
            
            : <ItemList Items={items}/> }
        </div>
    )
}
export default ItemListContainer