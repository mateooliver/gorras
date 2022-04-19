import { useContext, useState } from 'react';
import React from 'react'
import { CartContext } from './CartContext'
import { dataBase } from "../firebase/config";
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { Link, Navigate } from 'react-router-dom';

const Checkout = () => {
    const {cart, cartTotal, emptyCart}=useContext(CartContext);
    const [ordenId, setOrdenId]=useState(null);

// capturar el valor de los inputs
    const [value, setValue] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })
    const handleInputChange = (e) => {
        setValue({
           ...value,
              [e.target.name]: e.target.value
        })
    }

    // muestra la infirmacion del carrito
    const handleSubmit = (e) => {
        e.preventDefault();

        const orden={
            items: cart,
            total: cartTotal(),
            comprador:{
               ...value
            }
        }
        const ordenRef=collection(dataBase, 'ordenes');

        cart.forEach((item)=>{
          const docRef = doc(dataBase, 'gorras', item.id );
            getDoc(docRef)
                .then((doc)=>{
                    if(doc.data().stock >= item.cantidad){
                    updateDoc(docRef, {
                        stock: doc.data().stock - item.cantidad
                    })}else{
                        alert('No hay stock suficiente')
                    }
            })
        })

        addDoc(ordenRef, orden)
            .then((doc)=>{
                setOrdenId(doc.id);
                emptyCart();

            }) 
    }
      
      if (ordenId){
        return <div className='text-center'>
                <h2>Gracias por tu compra</h2>
                <hr className="mx-auto col-8"/>
                <br/>
                <h2>Tu compra se ha registrado correctamente :)</h2>
                <div className='d-flex text-center mx-auto justify-content-center align-items-center'>
                <h3 className='fs-6 text-secondary '>Tu codigo de orden es el siguiente:</h3>
                <h3 className=' col-2 fs-5 text-dark rounded-3'>{ordenId}</h3>
                </div>
                <br/>
                <Link to={"/"} className="btn btn-dark">Volver</Link>
             </div>
        }

      if(cart.length===0){
          return <Navigate to={'/'}/>
      }

  return (
      <div className='mx-auto text-center'>
        <div className='fs-2 bg-secondary text-center text-white fw-bold col-4 mx-auto rounded-3 my-2'>Checkout</div>
        <p> Para poder continuar con la compra vamos a necesitar unos datos</p>
        <hr className='col-5 mx-auto'/>
        <form onSubmit={handleSubmit} className="col-4 mx-auto text-center">
            <input
                className='form-control my-2'
                type={'text'}
                placeholder={'Nombre'}
                value={value.nombre}
                name={'nombre'}
                onChange={handleInputChange}
            />
             <input
                className='form-control my-2'
                type={'email'}
                placeholder={'Email'}
                value={value.email}
                name={'email'}
                onChange={handleInputChange}
            /> 
            <input
                className='form-control my-2'
                type={'tel'}
                placeholder={'Celular'}
                value={value.telefono}
                name={'telefono'}
                onChange={handleInputChange}
            />

            <button  className='btn btn-dark my-2 text-center' type='submit'>Enviar</button>

        </form>
    </div>
  )
}

export default Checkout