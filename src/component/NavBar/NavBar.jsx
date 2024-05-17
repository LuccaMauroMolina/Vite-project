//import React from 'react'
import "../NavBar/NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    <nav>
        <Link to="/"><img className="img-logo" src="../../../dist/imgReact/logo.png" alt="" /></Link>
        <ul>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/productos/brownies">Brownie</Link></li>
            <li><Link to="/productos/maicena">Maicena</Link></li>
            <li><Link to="/productos/tortas">Tortas</Link></li>
        </ul>
    </nav>
    )
}

export default NavBar