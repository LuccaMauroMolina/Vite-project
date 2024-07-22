import { useEffect, useState } from "react"
//import { pedirItemPorId } from "../../../Helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Firebase/firebase"
import "../ItemDetailContainer/ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const id = useParams().id



    useEffect(() => {
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    {...resp.data(), id: resp.id}
                )
            })


    }, [id])



    /*useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])*/

    return (
        <div className="item-detail">
            {item && <ItemDetail item={item}/> }
        </div>
    )
}

export default ItemDetailContainer