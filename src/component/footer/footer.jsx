//import React from 'react'
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import '../footer/footer.css'
import tarjeta from "../../img/MercadoPago-logo.png"

const Footer = () => {
    return (
    <>
    <footer>
    <div className="footer">
            <div>
                <h3 className="footer-title">Metodos de Pago</h3>
                <div className="metodos">
                    <img className="img-metodo" src={tarjeta} alt=""/>
                    <p className="footer-p">Efectivo</p>
                </div>
            </div>
            <div>
                <h3>Redes Sociales</h3>
                <ul className="footer-icon">
                    <IconBrandWhatsapp/>
                    <IconBrandInstagram/>
                    <IconBrandFacebook/>
                </ul>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Footer