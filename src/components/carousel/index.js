import './style.scss'
import React, { useState } from "react";



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
        <div>
            <div className="arrow rigth" onClick={Rigth}>
                <span class="material-symbols-outlined icon" >
                    chevron_right
                </span>
            </div>

            <div className="arrow left" onClick={Left}>
            <span class="material-symbols-outlined icon" >
                    chevron_left
                </span>
            </div>

            <div className='carrousel-main' id="page-1" >
                <div style={{ transform: `translateX(${x}%)` }}>
                    <img src={require('../../image/carousel/caroulseu-img1.png')} />
                    <img className='logo-png' src={require('../../image/carousel/logo.png')} />
                </div>
                <div style={{ transform: `translateX(${x}%)` }}>
                    <img src={require('../../image/carousel/caroulseu-img2.png')} />
                    <img className='logo-png' src={require('../../image/carousel/logo.png')} />
                </div>
                <div style={{ transform: `translateX(${x}%)` }}>
                    <img src={require('../../image/carousel/caroulseu-img3.png')} />
                    <img className='logo-png' src={require('../../image/carousel/logo.png')} />
                </div>
                <div style={{ transform: `translateX(${x}%)` }}>
                    <img src={require('../../image/carousel/caroulseu-img4.png')} />
                    <img className='logo-png' src={require('../../image/carousel/logo.png')} />
                </div>
            </div>


        </div>
    )
}

export default Caroussel;