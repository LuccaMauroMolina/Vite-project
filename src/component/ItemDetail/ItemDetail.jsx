import './ItemDetail.css'
import ItemCount from '../ItemCount/Count'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Context } from '../CartContext/CartContext'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {



const [agregarCantidad, setAgregarCantidad] = useState(0);


const {agregarProducto} = useContext(Context);



const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);


    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
}
return (
    <div className='contenedorItem'>
        <div className='descripcion'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3> ID: {id} </h3>
            <h3>Stock: {stock}</h3>
            <p className='parrafo'>Este es un procesaor que esta en excelente funcionamiento <br/> Este es un procesaor que esta en excelente funcionamiento  <br /> Este es un procesaor que esta en excelente funcionamiento <br /> Este es un procesaor que esta en excelente funcionamiento <br /> </p>
        </div>
        <div className='imgCant'>
        <img src={img} alt={nombre} />
        <div className='contador'>

        {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
        
    </div>
    </div>
    </div>
)
}

export default ItemDetail