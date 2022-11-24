import React from "react";
import './style.scss'

const Header = () => {

    return (
        <div className="header-main">
            <div></div>
            <img className="logo-transparent" src={require('../../image/header/Harley-Davidson-Logo-circular-PNG.png')} />
            <div className="nav-bar">
                <div className="child-button">Road</div>
                <ul>
                    <li>Motos</li>
                    <li>Peças</li>
                    <li>Sobrenos</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div className="child-logo">
                <div className="child-marca">Harley Davidson</div>
                <div className="first-child-text">VISUAL & BELEZA</div>
                <div className="second-child-text">MOTOCICLETAS</div>
            </div>
            <a href="#page-1" className="drop-down-button" ><img src={require('../../image/header/down-arrow.png')} /></a>
        </div>
    )
}

export default Header;