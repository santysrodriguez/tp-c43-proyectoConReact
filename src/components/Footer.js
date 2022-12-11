import React from 'react'
import logo from '../assets/img/logo-DH.png';

export default function Footer() {
    return (
        <footer class="pie">
            <nav id="logo">
            <a href="#img"><img src={logo} alt="Logo Digital House" /></a>
            </nav>
            <nav id="opciones">
                <ul>
                    <li><a href="#facebook">facebook</a></li>
                    <li><a href="#Instagram">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    )
}
