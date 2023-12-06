import './nav.css'
import logo from "../../img/logo.png"
import CartWidget from '../CartWidget/CartWidget'


const Nav = () => {
    return (
    <>
        <header>
            <nav>
            <ul className="listas">
                <li> <a href="">Brownie</a></li>
                <li> <a href="">Producto</a></li>
                <li> <a href="">Destacado</a></li>
            </ul>
            <img className="logo" src={logo} alt=""/>
            <div id="contador"></div>
            <form action="">
                <input type="text" placeholder="Buscar"/>
            </form>
            <CartWidget />
            </nav>
        </header>
    </>
    )
}

export default Nav