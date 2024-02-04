export const Productos = [
    {nombre: "Brownie", precio: 800, img: "./imgReact/brownie.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "Brownie full", precio: 2500,img:"./imgReact/maicena.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "Brownie stela", precio: 700, img:"./imgReact/brownie.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "alfajores", precio: 1200,img:"./imgReact/maicena.png", descripcion: "este es uno de los mejores brownies" },
]


export const Asynmock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos)
        }, 100)
    })
}

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(Productos)
        }, 100) 
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = Productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}