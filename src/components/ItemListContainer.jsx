import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import App from "../App";
import ItemList from "./ItemList"
import { Promesa } from './mocks/FakeApi';

const ItemListContainer= (props)=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const {categoryId}=useParams()
    
  

    useEffect(()=>{
        setLoading(true);
     Promesa
     .then((res)=>{
         if(categoryId){    
            setItems(res.filter((items)=>items.category===categoryId));
        }else{
         setItems(res)}
        })
    .catch((error)=>console.log('error', error))
    .finally(()=>setLoading(false));
         },[categoryId])
    
    
    return(
        <div >
            {loading ? 
                <div className="text-center mx-auto my-2">
                    <div className="spinner-border text-secondary" role="status"></div>
                    <p className="bg-secondary mx-auto text-white col-3 rounded-3">Un momento, por favor.</p>
                </div>
            
            : <ItemList Items={items}/> }
        </div>
    )
}
export default ItemListContainer