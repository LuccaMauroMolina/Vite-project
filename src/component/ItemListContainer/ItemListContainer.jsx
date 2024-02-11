//import React from 'react'
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { AsynMock } from "../../Asynmock"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        AsynMock()
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