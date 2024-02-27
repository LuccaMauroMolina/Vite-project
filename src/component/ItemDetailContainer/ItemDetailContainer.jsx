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

/*
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { AsynMock, getCategoria} from '../../Asynmock';
        
const ItemDetailContainer = ({greeting}) => {
const [productos, setProductos] = useState([]);
const {idCategoria} = useParams();


const { idItem } = useParams();

useEffect(() => {
    const functions = async () => {
    if (idItem) {
        return getCategoria(idItem);
    } else {
        return AsynMock();
    }
};


    functions()
        .then((res) => setProductos(res))
        .catch((error) => console.log(error));

        return new Promise((resolve) => {
            setTimeout(() => {
                const categoria = productos.filter(
                (prod) => prod.id === Number(idCategoria)
                );
                resolve(categoria);
            }, 100);
        });

}, [idItem]);





    console.log(productos);

    
    
    return (
        <div>
        <h1 className="titulo"> {greeting} </h1>
        <ItemList productos={productos}/>
        </div>
    );

    };
    
    export default ItemDetailContainer;
*/
/*
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { AsynMock, getItem } from '../../Asynmock';

const ItemDetailContainer = ({ greeting }) => {
  const [producto, setProductos] = useState([]);
  //const { idCategoria, idItem } = useParams();

  const { idItem } = useParams();

  useEffect(() => {
    const functions = async () => {
      if (idItem) {
        return getItem(idItem);
      } else {
        return AsynMock();
      }
    };

    functions()
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  }, [idItem]);

    return new Promise((resolve) => {
    setTimeout(() => {
      const categoria = producto.filter((prod) => prod.id === Number(idItem));
      resolve(categoria);
    }, 100);
    return (
        <div>
          <h1 className="titulo">{greeting}</h1>
          <ItemList productos={producto} />
        </div>
      );
    })
};*/


  /*useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (idItem) {
          data = await getItem(idItem);
        } else {
          data = await AsynMock();
        }
        setProductos(data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [idItem, idCategoria]);

  console.log(producto);*/

  /*return (
    <div>
      <h1 className="titulo">{greeting}</h1>
      <ItemList productos={producto} />
    </div>
  );
};
*/

import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { AsynMock, getItem } from '../../Asynmock';

const ItemDetailContainer = ({ greeting }) => {
  const [producto, setProductos] = useState([]);
  const { idItem } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (idItem) {
          //data = await getItem(idItem);
          return getItem(idItem)
        } else {
          //data = await AsynMock();
          setProductos(data);
          return AsynMock()
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [idItem]);

  console.log(producto)

  return (
    <div>
      <h1 className="titulo">{greeting}</h1>
      <ItemList productos={producto} />
    </div>
  );
};

export default ItemDetailContainer;







    /*useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (idItem) {
          //data = await getItem(idItem);
          return getItem(idItem)
        } else {
          //data = await AsynMock();
          setProductos(data);
          return AsynMock()
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [idItem]);*/