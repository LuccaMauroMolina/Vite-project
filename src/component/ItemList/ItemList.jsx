//import React from 'react'
//import { productos } from "../../Asynmock"
import Item from "../Item/Item"
import "../ItemList/ItemList.css"


const ItemList = ({productos}) => {
    return (
    <>
        <h1>Productos</h1>
    <div className="cards">
        {
            productos.length > 0 &&
            productos.map((producto) => {
                return(
                    <Item key={producto.id} producto={producto}/>
                )
            })
        }
        </div>
        </>
    )
}

export default ItemList