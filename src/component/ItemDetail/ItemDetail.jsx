

const ItemDetail = ({item}) => {
    return (
    <div>
        <div>
            <img src={item.img} alt={item.nombre} />
            <div>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <p>{item.precio}</p>
                <p>{item.id}</p>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail