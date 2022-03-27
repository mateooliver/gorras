import React from 'react'



const ItemDetail = (itemDetail) => {
    const {stock, nombre, precio, img, descripcion, talles} = itemDetail.itemDetail
  return (
    <div className='d-flex columns justify-content-start' style={{width:"100vw"}}>
        <div style={{width:"50vw"}} >{img}</div>
        <div className='d-flex row gap-2' style={{width:"50vw"}} >
            <h2>Gorra {nombre}</h2>
            <h3> ${precio}</h3>
            <p className='container-fluid ' style={{width:"60%",marginLeft:"0%"}}>{descripcion}</p>
            <p> Cantidad en Stock: {stock}</p>
            <p>Talles disponibles: {talles}</p>
            <button className='btn btn-primary col-2'>Comprar</button>
        </div>
    
    </div>
  )
}

export default ItemDetail