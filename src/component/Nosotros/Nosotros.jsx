import { useEffect } from "react"
import "./Nosotros.css"


const Nosotros = () => {

    useEffect(() => {
        const clickear = () => {
            console.log("click")
        }

        window.addEventListener("click", clickear)

        return () => {
            window.removeEventListener("click", clickear)
        } 

    }, [])

    return (
    <div>
        <h1>Bienvenidos a Brownies Deliciosos</h1>
        <p className="nosotros">

        En Brownies Deliciosos nos apasiona llevar la indulgencia y el placer a cada bocado. Desde nuestros inicios, nos hemos dedicado a perfeccionar la receta clásica del brownie para ofrecerte una experiencia única y satisfactoria.

Nuestro compromiso con la calidad comienza con ingredientes cuidadosamente seleccionados. Utilizamos chocolate de primera calidad, mantequilla fresca y ingredientes naturales para asegurar que cada brownie sea una obra maestra de sabor y textura.

Fundada por amantes de los postres, nuestra misión es simple: compartir la alegría de los brownies más deliciosos con todo el mundo. Desde brownies clásicos hasta creaciones gourmet y opciones sin gluten, cada producto está hecho con cariño y atención al detalle.

En Brownies Deliciosos, no solo creamos postres excepcionales, también nos esforzamos por ofrecer un servicio al cliente excepcional. Nos encanta escuchar de nuestros clientes y estamos aquí para hacer de cada pedido una experiencia especial y memorable.

Explora nuestro catálogo y descubre por qué nuestros brownies son más que un dulce, son una celebración de los pequeños placeres de la vida. Únete a nuestra familia de amantes del chocolate y déjate seducir por el sabor único de Brownies Deliciosos.

Nuestro compromiso con la innovación nos lleva a experimentar constantemente con nuevos sabores y técnicas, asegurando que cada brownie sea una sorpresa deliciosa para tu paladar. Desde las combinaciones clásicas hasta las más audaces, cada mordisco es una invitación a disfrutar de la pasión por el chocolate y los postres.

Como empresa comprometida con la comunidad, apoyamos iniciativas locales y nos preocupamos por el bienestar de nuestros empleados y clientes. Cada brownie que sale de nuestra cocina es un testimonio de nuestro compromiso con la calidad, la frescura y la excelencia.

Gracias por elegirnos para endulzar tus momentos más especiales. Esperamos seguir siendo tu elección número uno para disfrutar de la verdadera delicia de un brownie perfecto. ¡Te invitamos a explorar y dejarte llevar por el placer irresistible de Brownies Deliciosos!</p>
    </div>
    )
}

export default Nosotros