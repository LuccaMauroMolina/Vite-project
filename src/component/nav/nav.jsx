import "./nav.css"
import logo from "../../img/logo.png"
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
    return (
    <>
        <header>
            <nav>
            <ul className="listas">
                <li>
                    <NavLink to={`/Categoria/Brownie`}> Brownie </NavLink>
                </li>
                <li>
                    <NavLink to={`/Categoria/Producto`}> Producto </NavLink>
                </li>
                <li>
                    <NavLink to={`/Categoria/Destacado`}> Destacado </NavLink>
                </li>
            </ul>
            <Link>
                <img className="logo" src={logo} alt=""/>
            </Link>
            <div id="contador"></div>
            
            <CartWidget />
            </nav>
            <form action="">
                <input type="text" placeholder="Buscar" className="buscar"/>
            </form>
        </header>
    </>
    )
}

export default Nav

/*<li> <a href="">Brownie</a></li>
                <li> <a href="">Producto</a></li>
                <li> <a href="">Destacado</a></li>


*/