export const Productos = [
    {nombre: "Brownie", precio: 800, img: "./img/brownie.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "Brownie full", precio: 2500,img:"./img/maicena.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "Brownie stela", precio: 700, img:"./img/brownie.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "alfajores", precio: 1200,img:"./img/maicena.png", descripcion: "este es uno de los mejores brownies" },
]


export const Asynmock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos)
        }, 100)
    })
}
