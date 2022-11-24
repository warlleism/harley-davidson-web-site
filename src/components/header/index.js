import React from "react";
import './style.scss'

const Header = () => {

    return (
        <div className="header-main">
            <img className="logo-transparent" src={require('../../image/header/Harley-Davidson-Logo-circular-PNG.png')} />
            <div className="nav-bar">
                <div className="child-button">Entrar</div>
                <ul>
                    <li>Motos</li>
                    <li>Peças</li>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div className="child-logo">
                <div className="child-marca">Harley Davidson</div>
                <div className="first-child-text">VISUAL & BELEZA</div>
                <div className="second-child-text">MOTOCICLETAS</div>
            </div>
            <div className="drop-down">
                <a href="#page-1" className="drop-down-button" ><img src={require('../../image/header/down-arrow.png')} /></a>
            </div>
        </div>
    )
}

export default Header;