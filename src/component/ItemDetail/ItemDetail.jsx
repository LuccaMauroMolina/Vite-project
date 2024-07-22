import { CartContext } from "../CartContext/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import "../ItemDetail/ItemDetail.css"
const ItemDetail = ({item}) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext)
    console.log(carrito)
    const [count, setCount] = useState(1)

    function handleSumar(){
        if(count < item.stock){
            setCount(count + 1)
        }
    }

    function handleRestar(){
        if(count >= 2){
            setCount(count - 1)
        }
    }

    

    return (
    /*<div className="card-detail">
        <div className="cardsss">
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} />
            <div className="detail">
                <p>{item.descripcion}</p>
                <p>{item.precio}</p>
                <p>{item.id}</p>
                <ItemCount count={count} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => {agregarAlCarrito(item, count)}}/>
            </div>
        </div>
    </div>*/
    <div className="card-detail">
    <div className="cardsss">
        <div className="left-content">
            <h3>{item.nombre}</h3>
            <img className="img-detail" src={item.img} alt={item.nombre} />
        </div>
        <div className="right-content">
            <div className="detail">
                <p className="detail-desc">{item.descripcion}</p>
                <p className="detail-precio">${item.precio}</p>
                <p className="detail-id">{item.id}</p>
                <ItemCount count={count} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => {agregarAlCarrito(item, count)}}/>
            </div>
        </div>
    </div>
</div>

    )
}

export default ItemDetail