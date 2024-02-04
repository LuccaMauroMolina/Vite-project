//import React from 'react'

const ItemDetailContainer = () => {
    return (
    <div>ItemDetailContainer</div>
    )
}

export default ItemDetailContainer


/*
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
import { AsynMock ,getCategoria } from '../../Asynmock'

const ItemDetailContainer = (greeting) => {

    const [productos, setProducto] = useState([])

    const {idCategoria} = useParams()

    const functions = async () =>{
        if(IdCategoria){
            return getCategoria(IdCategoria)
        }else{
            return AsynMock()
        }
    }

    useEffect(() => {
        
        functions()
            .then(res => setProductos(res))
            .catch(error => console.log(error))

    }, [IdCategoria])

console.log(productos)

    return (
        <div>
        <h1 className="titulo"> {greeting} </h1>
        <ItemList productos={productos}/>
        </div>
        
    )
}

<div>
            <ItemDetail {...producto}/>
        </div>
export default ItemDetailContainer*/