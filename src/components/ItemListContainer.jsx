import React, {useState, useEffect} from "react";
import App from "../App";
import ItemList from "./ItemList"
import { Promesa } from './mocks/FakeApi';

const ItemListContainer= (props)=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

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
                    <div className="spinner-border text-secondary" role="status"></div>
                    <p className="bg-secondary mx-auto text-white col-3 rounded-3">Un momento, por favor.</p>
                </div>
            
            : <ItemList Items={items}/> }
        </div>
    )
}
export default ItemListContainer