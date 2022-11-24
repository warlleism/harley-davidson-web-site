import React from "react";
import "./style.scss"

const Vehicle = () => {
    return (
        <div className="vehicle-main">
            <div className="titulo">Encontre seu próximo veículo</div>

            <div className="vehicle-component">

                <div className="container-info">
                    <img src={require("../../image/vehicle/vehicle-1.png")} />
                    <div className="titulo-vehicle">Road King</div>
                    <div className="desc-vehicle">
                        A Road King™ Special 2022, uma bagger
                        customizada com o icônico estilo H-D, é
                        uma hot rod customizada na fábrica com
                        potência topo de linha e uma presença
                        impositiva.
                    </div>
                </div>


                <div className="container-info">
                    <img src={require("../../image/vehicle/vehicle-2.png")} />
                    <div className="titulo-vehicle">Fat Bob</div>
                    <div className="desc-vehicle">
                        Construída com estilo e desempenho reforçados,
                        a Fat Bob™ 114 2022 é uma devoradora de ruas
                        que irá satisfazer os mais exigentes motociclistas com fome de desempenho.
                    </div>
                </div>

                <div className="container-info">
                    <img src={require("../../image/vehicle/vehicle-3.png")} />
                    <div className="titulo-vehicle">ROAD GLIDE"&nbsp;  SPECIAL</div>
                    <div className="desc-vehicle">Como uma bagger de desempenho nas
                        opções totalmente preta e laranja brilhante,
                        a Road Glide™ Special 2022 apresenta um design
                        clássico de touring equipada com recursos
                        premium.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Vehicle;