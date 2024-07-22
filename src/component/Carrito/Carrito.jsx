import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"
import "./Carrito.css"


const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito, eliminar} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    const eliminacion = (id) => {
        eliminar(id)
    }

    return (
    <div>
        <h1>Carrito</h1>
        {
            carrito.map((prod) => (
                <div className="carritos" key={prod.id}>
                    <h3>{prod.nombre}</h3>
                    <img src={prod.img} alt="" />
                    <span>{prod.categoria}</span>
                    <p className="prices">{prod.precio}</p>
                    <p className="prices">{prod.count}</p>
                    <button className="eliminar" onClick={() => eliminacion(prod.id)}>Eliminar</button>
                    <p>${prod.precio * prod.count}</p>
                </div>
            ))
        }
        {
            carrito.length > 0 ? 
        <>
            <h2>Total: ${precioTotal()}</h2> 
            <button className="vaciar-finalizar" onClick={handleVaciar}>Vaciar Carrito</button>
            <Link className="vaciar-finalizar" to="/checkout" >Finalizar Compra</Link>
        </>:
        <h2>el carrito esta vacio</h2>
        } 
    </div>
    )
}

export default Carrito