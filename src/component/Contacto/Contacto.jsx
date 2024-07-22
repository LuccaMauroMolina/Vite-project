/*import { useForm } from "react-hook-form"
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import "./Contacto.css"
import { useState } from "react";

export const Contacto = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    //const [correct, setCorrect] = useState(true)
    //const [error, setError] = useState(false)
    const { register, handleSubmit } = useForm();


const enviar = (data) => {
    const contacto = {
        datos: data
    }
    console.log(contacto.datos.nombre, contacto.datos.email,contacto.datos.telefono)
    const contactRef = collection(db, "contacto")
    addDoc(contactRef, contacto)
    .then((docRef) => {
        if(!nombre || !email || !telefono){
            console.log("no agregado, complete los campos")
            setError(true)
            return
        }else if(correct) {
            console.log("Documento agregado con ID: ", docRef.id);
            setCorrect(true); // Actualiza el estado si se agregó correctamente (opcional)
        }
    })
    
    */
    //correcto
    /*addDoc(contactRef, contacto)
    .then((docRef) => {
        if(!nombre || !email || !telefono){
            console.log("no agregado, complete los campos")
            setError(true)
            return
        }else if(correct) {
            console.log("Documento agregado con ID: ", docRef.id);
            setCorrect(true); // Actualiza el estado si se agregó correctamente (opcional)
        }
    })*/
//}

    /*return (
        <>
            <h2 className="">Contacto</h2>
        <div className="contacto">
            <form className="contacto" action="" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Ingresar Nombre" {...register("nombre")} onChange={(e) => setNombre(e.target.value)}/>
                <input type="email" placeholder="Ingresar Gmail" {...register("email")} onChange={(e) => setEmail(e.target.value)}/>
                <input type="phone" placeholder="Ingresar Telefono" {...register("telefono")} onChange={(e) => setTelefono(e.target.value)}/>
                <button className="btn" type="submit">Enviar</button>
            </form>
        </div>
        </>
    )
}*/


import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, query, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase'; // Asumiendo que tienes configurada la instancia de Firestore

export const Contacto = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(""); // Estado para manejar errores
    const [correct, setCorrect] = useState(false); // Estado para manejar confirmaciones

    const enviar = async (data) => {
        const { nombre, email, telefono } = data;

        if (!nombre || !email || !telefono) {
            setError("Complete todos los campos");
            return;
        }

        const contacto = {
            nombre: nombre,
            email: email,
            telefono: telefono
        };

        const contactRef = collection(db, "contacto");

        try {
            const docRef = await addDoc(contactRef, contacto);
            console.log("Documento agregado con ID: ", docRef.id);
            setCorrect(true); // Marca como correcto si se agregó correctamente
        } catch (error) {
            console.error("Error al agregar documento: ", error);
            setError("Ocurrió un error al enviar el formulario. Por favor, inténtelo nuevamente.");
        }
    };

    useEffect(() => {
        const q = query(collection(db, "contacto"));

        const modificar = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ id: doc.id, ...doc.data() });
            });
            console.log("Documentos en la colección 'contacto':", docs);
            // Actualizar estado o realizar otras operaciones según los documentos obtenidos
        });

        return () => {
            modificar(); // Limpiar el listener cuando el componente se desmonte
        };
    }, []); // El segundo argumento vacío [] indica que solo se ejecuta una vez al montar el componente

    return (
        <>
            <h2 className="">Contacto</h2>
            <div className="contacto">
                <form className="contacto" action="" onSubmit={handleSubmit(enviar)}>
                    <input type="text" placeholder="Ingresar Nombre" {...register("nombre")} />
                    <input type="email" placeholder="Ingresar Gmail" {...register("email")} />
                    <input type="tel" placeholder="Ingresar Telefono" {...register("telefono")} />
                    <button className="btn" type="submit">Enviar</button>
                </form>
                {error && <p>{error}</p>}
                {correct && <p>¡Formulario enviado correctamente!</p>}
            </div>
        </>
    );
};

export default Contacto;
