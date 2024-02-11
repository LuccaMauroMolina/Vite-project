/*import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
import { AsynMock ,getCategoria } from '../../AsynMock'


const ItemDetailContainer = (greeting) => {

    const [productos, setProducto] = useState([])

    const {idCategoria} = useParams()

    const functions = async () =>{
        if(idCategoria){
            return getCategoria(idCategoria)
        }else{
            return AsynMock()
        }
    }

    useEffect(() => {
        
        functions()
            .then(res => setProducto(res))
            .catch(error => console.log(error))

    }, [idCategoria])

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
        </div>*/


import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { AsynMock, getCategoria } from '../../Asynmock';
        
const ItemDetailContainer = ({greeting}) => {
const [productos, setProductos] = useState([]);
const {idCategoria} = useParams();


    useEffect(() => {
        const functions = async () =>{
            if(idCategoria){
                return getCategoria(idCategoria)
            }else{
                return AsynMock()
            }
        }

        functions()
            .then(res => setProductos(res))
            .catch(error => console.log(error))

    }, [idCategoria])

    /*useEffect(() => {
        const fetchData = async () => {
            try {
            let response;
            
            if (idCategoria) {
                response = await getCategoria(idCategoria);
                } else {
                response = await AsynMock();
                }
                    
                setProductos(response);
            } catch (error) {
                console.log(error);
            }
            
                };
    fetchData();
    }, [idCategoria]);*/
    
    console.log(productos);
    
    return (
        <div>
        <h1 className="titulo"> {greeting} </h1>
        <ItemList productos={productos}/>
        </div>
    );
    };
    
    export default ItemDetailContainer;
        



    /*useEffect(() => {
        getUnProducto (idItem)
            .then(res => setProducto(res))
    }, [idItem])*/

    /*return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}*/

//export default ItemDetailContainer

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