/*import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <div className="tarjeta">
        {
            productos.map(prod => {
                return <Item key={prod.id} {...prod} />
            })
        }
        </div>

    )
}

export default ItemList*/

import Item from '../Item/Item';

const ItemList = ({ productos }) => {
  return (
    <div className="tarjeta">
    {productos.map(prod => (
        <Item key={prod.id} {...prod} />
    ))}
    </div>
  );
};

export default ItemList;
