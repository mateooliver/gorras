import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Promesa } from './mocks/FakeApi'
import ItemDetail from './ItemDetail'
import { Container } from 'react-bootstrap'
import { dataBase } from '../firebase/config'
import {doc, getDoc} from 'firebase/firestore'


export const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    const [cargando, setCargando] = useState(true)

    const {itemId} = useParams()
    

    useEffect(() => {
      setCargando(true)

        const itemRef=doc(dataBase, 'gorras', itemId)
        getDoc(itemRef)
            .then((res)=> {
                setItemDetail ({id: res.id, ...res.data()})
            })
            .finally(()=>{
              setCargando(false)
            })
    },[itemId]);

  return (
    <Container>
        {cargando ? <p className='bg-secondary mx-auto text-white col-8 rounded-3 text-center my-2'>Estamos buscando la mejor descripcion para tu producto, un momento por favor</p> : <ItemDetail {...itemDetail} />}
    </Container>
  )
}
export default ItemDetailContainer
