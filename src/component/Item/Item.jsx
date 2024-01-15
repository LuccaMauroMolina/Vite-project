import { Link } from "react-router-dom"
import "./Item.css"
//import brownie from "../../img/brownie.png"
//import { useState } from "react"
//import { Productos } from "../../Asynmock"


const Item = ({img, precio, nombre}) => {
    
    /*const [agregar, setAgregar] = useState(0)
    
    function agrega(){
        if(agregar >= 0){
            setAgregar(agregar + 1)
        }
    }*/


    return(
        <div className="tarjeta">
            <div className="cards">
                <div className="card">
                    <img className="card-img" src={img} alt=""/>
                    <div className="card-back">
                        <h2 className="card-title"> {nombre} </h2>
                        <div className="card-in">
                            <span className="card-price"> {precio} </span>
                            <Link to={`/Item/${nombre}`} className="card-buy">Ver Detalle</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//<span className="card-buy" onClick={agrega}>AGREGAR</span>

export default Item