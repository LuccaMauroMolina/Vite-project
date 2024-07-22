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
//import { pedirDatos } from "../../../Helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria
    console.log(categoria)

    /*useEffect(() => {
        pedirDatos().then((res) => {
            if (categoria) {
                const productosFiltrados = res.filter((prod) => prod.categoria === categoria);
                setProductos(productosFiltrados);
            } else {
                setProductos(res);
            }
        });
    }, [categoria]);*/


    useEffect(() => {
        const productoRef = collection(db, "productos")

        const q = categoria ? query(productoRef, where("categoria", "==", categoria)) : productoRef



        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return {...doc.data(), id: doc.id }
                    })
                )
            })

    }, [categoria])



    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    );
};

export default ItemListContainer;
