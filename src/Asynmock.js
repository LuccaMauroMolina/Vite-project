export const Productos = [
    {nombre: "Brownie", precio: 800, img: "./img/brownie.png"},
    {nombre: "Brownie", precio: 2500,img:"./img/logo.png" },
    {nombre: "Brownie", precio: 700, img:"./img/brownie.png" },
    {nombre: "Brownie", precio: 1200,img:"./img/maicena.png" },
]


export const Asynmock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos)
        }, 100)
    })
}
