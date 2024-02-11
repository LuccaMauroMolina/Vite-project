
/*import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import { Asynmock } from "../../Asynmock";*/
//import "./Item.css"
//import { Link } from "react-router-dom";

/*export default function Item({nombre,precio,img, id, stock}) {
    //const { nombreItem } = useParams();
    /*const [item, setItem] = useState();

    useEffect(() => {
            Asynmock()
                .then(resolve => {
                    setItem(resolve.find((item) => item.nombre === nombreItem))
                })
    }, [nombreItem])

        return(
            <div className="prod">
                    <div className="card" key={id}>
                    <img className="card-img" src={img} alt="" />
                        <h2 className="card-name">{nombre}</h2>
                        <p className="card-precio">{precio}</p>
                        <p className="card-stock">{stock}</p>
                        <Link to={`/item/${nombre}`} className="btn">Ver Detalle</Link>
                    </div>
        </div>
    )
}*/

//import { useState } from "react";
import "./Item.css"
import { Link } from "react-router-dom";
//import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";
//import { useState, useEffect} from "react";
//import { db } from "../../Services/firebase/config"


const Item = ({nombre,id,precio,img,stock}) => {

    return(
        <div className="prod">
                    <div className="card" key={id}>
                    <img className="card-img" src={img} alt="" />
                        <h2 className="card-name">{nombre}</h2>
                        <p className="card-precio">{precio}</p>
                        <p className="card-id">{id}</p>
                        <p className="card-stock">{stock}</p>
                        <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
                    </div>
        </div>
    )
    
    
}

export default Item