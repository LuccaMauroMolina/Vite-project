import "./Item.css"
//import brownie from "../../img/brownie.png"
import { useState } from "react"
import { Productos } from "../../Asynmock"

function Item() {
    
    const [agregar, setAgregar] = useState(0)
    
    function Agrega(){
        if(agregar >= 0){
            setAgregar(agregar + 1)
        }
    }

    const listItems = Productos.map(prod => {
            <div className="cards">
                <div className="card">
                    <img className="card-img" src={prod.img} alt=""/>
                    <div className="card-back">
                        <h2 className="card-title">{prod.nombre} </h2>
                        <div className="card-in">
                            <span className="card-price"> {prod.precio} </span>
                            <span className="card-buy" onClick={Agrega}>AGREGAR</span>
                            <span>{agregar}</span>
                        </div>
                    </div>
                </div>
            </div>
})
    return(
        <main>
            <section>
                {listItems}
            </section>
        </main>
    )
}

export default Item
/*
<div className="cards">
                <div className="card">
                    <img className="card-img" src={prod.img} alt=""/>
                    <div className="card-back">
                        <h2 className="card-title">{prod.nombre} </h2>
                        <div className="card-in">
                            <span className="card-price"> {prod.precio} </span>
                            <span className="card-buy" onClick={Agrega}>AGREGAR</span>
                            <span>{agregar}</span>
                        </div>
                    </div>
                </div>
            </div>*/