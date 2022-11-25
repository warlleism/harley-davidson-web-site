import './style.scss'
import React, { useEffect, useState } from "react";



const Caroussel = () => {

    const sliderArr = [1, 2, 3, 4]

    const [x, setX] = useState(0)

    const Rigth = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    }

    const Left = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    }

    return (
        <div className='father-container' style={{ overflow: 'hidden' }}>
            <div className="arrow rigth" >
                <span class="material-symbols-outlined icon" onClick={Rigth} >
                    chevron_right
                </span>
            </div>

            <div className="arrow left" >
                <span class="material-symbols-outlined icon" onClick={Left}>
                    chevron_left
                </span>
            </div>

            <div className='carrousel-main' id="page-1" >
                <div style={{ transform: `translateX(${x}%)` }}>
                    <img className='galery-motos' src={require('../../image/carousel/caroulseu-img1.png')} />
                </div>
                <div style={{ transform: `translateX(${x}%)` }}>
                    <img className='galery-motos' src={require('../../image/carousel/caroulseu-img2.png')} />
                </div>
                <div style={{ transform: `translateX(${x}%)` }}>
                    <img className='galery-motos' src={require('../../image/carousel/caroulseu-img3.png')} />
                </div>
                <div style={{ transform: `translateX(${x}%)` }}>
                    <img className='galery-motos' src={require('../../image/carousel/caroulseu-img4.png')} />
                </div>

                <div className='background-msg'>Experiência</div>

            </div>

        </div>
    )
}

export default Caroussel;