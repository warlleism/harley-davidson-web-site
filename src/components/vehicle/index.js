import React from "react";
import "./style.scss"

const Vehicle = () => {

    window.addEventListener('scroll', () => {
        const tela = parseInt(window.scrollY)

        const img = document.querySelectorAll("#img")

        if (tela >= 1389) {
            img[0].style.transform = 'translateX(0px)'

            setTimeout(() => {
                img[1].style.transform = 'translateX(0px)'
            }, 1200)
            setTimeout(() => {
                img[2].style.transform = 'translateX(0px)'
            }, 2500)
        }
    })

    return (
        <div className="vehicle-main">
            <div className="titulo">Encontre seu próximo veículo</div>

            <div className="vehicle-component">

                <div className="container-info" id="img" style={{ zIndex: "1" }}>
                    <img src={require("../../image/vehicle/vehicle-1.png")} />
                    <div className="titulo-vehicle">Road King</div>
                    <div className="desc-vehicle">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
                    </div>
                </div>

                <div className="container-info" id="img" style={{ zIndex: "2" }}>
                    <img src={require("../../image/vehicle/vehicle-2.png")} />
                    <div className="titulo-vehicle">Fat Bob</div>
                    <div className="desc-vehicle">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
                    </div>
                </div>

                <div className="container-info" id="img" style={{ zIndex: "3" }}>
                    <img src={require("../../image/vehicle/vehicle-3.png")} />
                    <div className="titulo-vehicle">ROAD GLIDE"&nbsp;  SPECIAL</div>
                    <div className="desc-vehicle">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Vehicle;