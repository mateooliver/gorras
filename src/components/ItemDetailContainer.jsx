import React, { useEffect,useState } from 'react'
import { Promesa } from './mocks/FakeApi'
import ItemDetail from './ItemDetail'


export const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        Promesa
            .then((res)=> setItemDetail(res.find(item => item.id === '1')))
            .catch((error)=>console.log('error'))
            .finally(()=>setCargando(false))
    },[]);

  return (
    <div>
        {cargando ? <p className='bg-secondary mx-auto text-white col-8 rounded-3 text-center'>Estamos buscando la mejor descripcion para tu producto, un momento por favor</p> : <ItemDetail itemDetail={itemDetail} />}
    </div>
  )
}
export default ItemDetailContainer
