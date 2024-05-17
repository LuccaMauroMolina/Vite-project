//import React from 'react'

import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <div>
        <img src={producto.img} alt={producto.nombre} />
        <h2>{producto.nombre}</h2>
        <p>{producto.precio}</p>
        <Link to={`/item/${producto.id}`}>Ver Mas</Link>
    </div>
  )
}

export default Item