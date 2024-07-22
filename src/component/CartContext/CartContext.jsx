import { createContext, useState,useEffect } from "react";
import "./CartContext.css"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

  const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []
    
  const [carrito, setCarrito] = useState(carritoInicial)
  const agregarAlCarrito = (item,count) => {
    const itemAgregado = {...item, count}
    
    const nuevoCarrito = [...carrito]
    const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id)
    

    if(estaEnElCarrito){
        estaEnElCarrito.count += count
        setCarrito(nuevoCarrito)
    }else{
        nuevoCarrito.push(itemAgregado)
    }
    //setCarrito([...carrito, itemAgregado])
    setCarrito(nuevoCarrito)
}

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc,prod) => acc + prod.count, 0)
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.count, 0)
  }

  const eliminar = (id) => {
    const nuevoCarrito = [...carrito]
    
    const indiceEliminar = nuevoCarrito.findIndex(prod => prod.id === id)

    if(indiceEliminar !== -1){
      //eliminacion.pop(carrito)
      nuevoCarrito.splice(indiceEliminar, 1)
      setCarrito(nuevoCarrito)
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    }

  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])


  return <CartContext.Provider value={{carrito, agregarAlCarrito,eliminar, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
    {children}
  </CartContext.Provider>
}