//import { AsynMock } from "../data/Asynmock";
import { AsynMock } from "../Data/data";

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(AsynMock)
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = AsynMock.find((el) => el.id === id)

        if(item){
            resolve(item)
        }else{
            reject({
                error : "No se encontro el producto"
            })
        }
    })
}