import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"


const CartWidget = () => {
    const {cantidadEnCarrito} = useContext(CartContext)
    return (
    <div>
        <Link to="/carrito">
            <span className="numero">Carrito{cantidadEnCarrito()}</span>
        </Link>
    </div>
    )
}

export default CartWidget