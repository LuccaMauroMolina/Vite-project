//import React from 'react'
/*import { useState, useEffect } from "react"
import { pedirDatos } from "../../../Helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria
    console.log(categoria)

    useEffect(() => {
        pedirDatos()
        .then((res) => {
            if(categoria){
                setProductos(res.filter((prod) => prod.categoria === categoria))
            }else{
                setProductos(res)
            }
        })
    }, [categoria])

    return (
    <div>
        <ItemList productos={productos}/>
    </div>
    )
}

export default ItemListContainer*/

import { useState, useEffect } from "react";
import { pedirDatos } from "../../../Helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    console.log(categoria)

    useEffect(() => {
        pedirDatos().then((res) => {
            if (categoria) {
                const productosFiltrados = res.filter((prod) => prod.categoria === categoria);
                setProductos(productosFiltrados);
            } else {
                setProductos(res);
            }
        });
    }, [categoria]);

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    );
};

export default ItemListContainer;
