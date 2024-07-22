import ".//ItemCount.css"

const ItemCount = ({ count, handleSumar, handleRestar,handleAgregar }) => {
    return (
        <div>
            <div className="contador">
                <button className="mas-menos" onClick={handleRestar}>-</button>
                <p className="cont">{count}</p>
                <button className="mas-menos" onClick={handleSumar}>+</button>
            </div>
        <button className="agregar" onClick={handleAgregar}>Agregar</button>
        </div>
    );
};

export default ItemCount;
