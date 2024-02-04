/*import { Link } from "react-router-dom"
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

/*
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

export default Item*/
/*
import { useParams } from "react-router-dom";
import {useState, useEffect } from "react";
import { Asynmock } from "../../Asynmock";

export default function Item() {
    const { nombreItem } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
            Asynmock()
                .then(resolve => {
                    setItem(resolve.find((item) => item.nombre === nombreItem))
                })
        }, [nombreItem])

    return(
            <div className="tarjeta">
                <div className="cards">
                    <div className="card">
                        <img className="card-img" src={item?.img} alt=""/>
                    <div className="card-back">
                            <h2 className="card-title"> {item?.nombre} </h2>
                            <div className="card-in">
                            <span className="card-price"> {item?.precio} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
}*/

//import { useState } from "react";
//import "./Item.css"
//import { Link } from "react-router-dom";
//import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";
//import { useState, useEffect} from "react";
//import { db } from "../../Services/firebase/config"

/*
const Item = ({nombre,id,precio,img,stock}) => {

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
    
}

export default Item*/

import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import { Asynmock } from "../../Asynmock";

export default function Item() {
    const { nombreItem } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
            Asynmock()
                .then(resolve => {
                    setItem(resolve.find((item) => item.nombre === nombreItem))
                })
    }, [nombreItem])

        return(
            <div className="tarjeta">
                <div className="cards">
                    <div className="card">
                        <img className="card-img" src={item?.img} alt=""/>
                        <div className="card-back">
                        <h2 className="card-title"> {item?.nombre} </h2>
                        <div className="card-in">
                            <span className="card-price"> {item?.precio} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}