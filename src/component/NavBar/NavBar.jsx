//import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import "../NavBar/NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    <header>
    <nav>
        <ul className="listas-nav">
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/productos/brownie">Brownie</Link></li>
            <li><Link to="/productos/maicena">Maicena</Link></li>
            <li><Link to="/productos/tortas">Tortas</Link></li>
        </ul>
        <Link to="/"><img className="img-logo" src="../../../dist/imgReact/logo.png" alt="" /></Link>
            <li className="carrito"><CartWidget/> </li>
    </nav>
    </header>
    )
}

export default NavBar