//import React from 'react'
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { Asynmock } from "../../Asynmock"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        Asynmock()
            .then(resolve => {
                setProductos(resolve)
            })
    }, [])

    return (
    <div>
        <ItemList productos={productos}/>
    </div>
    )
}

export default ItemListContainer