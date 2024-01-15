import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <div className="tarjeta">
        {
            productos.map(prod => {
                return <Item key={prod.nombre} {...prod} />
            })
        }
        </div>

    )
}

export default ItemList
