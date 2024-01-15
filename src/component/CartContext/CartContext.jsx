//import React from 'react'

import { useState } from "react"
import { createContext } from "react"

export const Context = createContext({carrito:[]})

export const Proveedor = ({children}) => {
    const [carrito, setCarrito] = useState([])

    console.log(carrito)

    const agregarProd = (item, cant) => {
        if(!estaEnCarrito (item.id)){
            setCarrito(prev => [...prev, {item,cant}])
        }else {
            console.log("agregado")
        }
    }

    const eliminar  = (id) => {
        const actualizar = carrito.filter(prod => prod.id !== id)
        setCarrito(actualizar)
    }

    const vaciar = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    return (
        <Context.Provider value={{carrito, agregarProd, eliminar, vaciar}}>
            {children}
        </Context.Provider>
    )


}
/*
const CartContext = () => {
    return (
    <div>CartContext</div>
    )
}

export default CartContext*/