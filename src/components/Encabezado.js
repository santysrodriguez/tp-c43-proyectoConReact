import React from 'react'
import logo from '../assets/img/logo-DH.png';

export default function Encabezado() {
    return (
        <header className="encabezado">
            <nav id="logo">
                <a href="#img"><img src={logo} alt="Logo Digital House" /></a>
            </nav>
            <nav id="opciones">
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
