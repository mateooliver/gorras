import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import App from "../App";
import ItemList from "./ItemList"
import { Promesa } from './mocks/FakeApi';
import { collection, query, getDocs, where } from "firebase/firestore";
import { dataBase } from "../firebase/config";

const ItemListContainer= (props)=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const {categoryId}=useParams()
    
  

    useEffect(()=>{
        setLoading(true);
        // tenemos dos pasos, 1 armar la referencia a la coleccion
        const gorrasRef=collection(dataBase, 'gorras');
        const  q= categoryId ? query(gorrasRef, where('category', '==', categoryId)): gorrasRef

        //2= obtener los datos: llamar (async)a esa referecnia
        getDocs(q)
            .then(respuesta=>{
                const gorras= respuesta.docs.map((gorra)=>({id: gorra.id, ...gorra.data()}))
                setItems(gorras)
            })
            .finally(()=>{
                setLoading(false)
            })
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