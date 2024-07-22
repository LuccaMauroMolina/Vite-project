import ItemListContainer from "./component/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./component/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nosotros from "./component/Nosotros/Nosotros"
import { Contacto } from "./component/Contacto/Contacto"
//import { useState } from "react"
import { CartProvider } from "./component/CartContext/CartContext"
import Carrito from "./component/Carrito/Carrito"
import Checkout from "./component/Checkout/Checkout"

const App = () => {

  /*const [carrito, setCarrito] = useState([])
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
    setCarrito([...carrito, itemAgregado])
}

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc,prod) => acc + prod.count, 0)
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.count, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }*/

  return (
    <div>
      <CartProvider>


      <BrowserRouter>
        <NavBar/>

        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </div>
  )
}

export default App

/*
<Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/nosotros" element={<Nosotros />}/>*/