import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../Firebase/firebase"
import "./Checkout.css"

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const {register, handleSubmit} = useForm()

    const comprar = (data) => {
        const pedido = {
            cliete: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)
        const pedidoRef = collection(db, "pedidos")
        addDoc(pedidoRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }

    if(pedidoId){
        return (
            <div>
                <h1> muchas gracias por su compra</h1>
                <p>tu pedido es : {pedidoId}</p>
            </div>
        )
    }

    return (
        <>
        <h2 className="">Finalizar Compra</h2>
        <div>
        <form className="checkout" action="" onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder="Ingresar Nombre" {...register("nombre")}/>
            <input type="email" placeholder="Ingresar Gmail" {...register("email")}/>
            <input type="phone" placeholder="Ingresar Telefono" {...register("telefono")}/>
            <button className="btn" type="submit">Enviar</button>
        </form>
    </div>
        </>
    )
}

export default Checkout