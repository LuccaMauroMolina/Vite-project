/*export const productos = [
    {nombre: "Brownie", precio: 800, img: "./imgReact/brownie.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "Brownie full", precio: 2500,img:"./imgReact/maicena.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "Brownie stela", precio: 700, img:"./imgReact/brownie.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "alfajores", precio: 1200,img:"./imgReact/maicena.png", descripcion: "este es uno de los mejores brownies" },
]


export const Asynmock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getItem = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const item = productos.find(prod => prod.id === id)
            resolve(item)
        }, 100)
    })
}

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(productos)
        }, 100) 
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}*/

const productos = [
    {nombre: "Brownie",id:1, precio: 800, img: "./imgReact/brownie.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "Brownie full",id:2, precio: 2500,img:"./imgReact/maicena.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "Brownie stela",id:3, precio: 700, img:"./imgReact/brownie.png", descripcion: "este es uno de los mejores brownies" },
    {nombre: "alfajores",id:4, precio: 1200,img:"./imgReact/maicena.png", descripcion: "este es uno de los mejores brownies" },
]

export const AsynMock = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 100)
    })
}

export const getItem = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const item = productos.find(prod => prod.id === id)
            resolve(item)
        }, 100)
    })
}


export const getCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const categoria = productos.filter(prod => prod.id === idCategoria)
            resolve(categoria)
        }, 100)
    })
}


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(productos)
        }, 100) 
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}