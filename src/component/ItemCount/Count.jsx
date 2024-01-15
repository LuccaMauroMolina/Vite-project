import { useState } from "react"

const Count = () => {

    const [count, setCount] = useState(0)

    function sumar(){
        if(count >= 0 ){
            setCount(count + 1)
        }
    }
    function restar(){
        if(count >= 0){
            setCount(count - 1)
        }
    }

    return (
        <>
        <button onClick={restar}>-</button>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
        </>
    )
}

export default Count