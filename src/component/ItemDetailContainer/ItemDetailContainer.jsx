

import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { AsynMock, getCategoria } from '../../Asynmock';

const ItemDetailContainer = ({ greeting }) => {
  const [producto, setProductos] = useState([]);
  const { idItem } = useParams();


  useEffect(() => {
    function Prod(){
      if (idItem){
        return getCategoria (idItem)
      }else {
        return AsynMock()
      }
    }


      Prod()
        .then(res => setProductos(res))
        .catch(error => console.log(error))
  }, [ idItem])




  console.log(producto)

  return (
    <div>
      <h1 className="titulo">{greeting}</h1>
      <ItemList productos={producto} />
    </div>
  );
};

export default ItemDetailContainer;




//USEEFFECT
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