//import React from 'react'
import { Link } from "react-router-dom"
import "../Item/Item.css"

const Item = ({producto}) => {
  return (
    <div className="cards">
      <div className="card">
        <img className="card-img" src={producto.img} alt={producto.nombre} />
        <div className="card-back">
        <h2 className="card-title">{producto.nombre}</h2>
        <p className="card-price">{producto.precio}</p>
        <Link className="card-buy" to={`/item/${producto.id}`}>Ver Mas</Link>
        </div>
      </div>
    </div>
  )
}

export default Item