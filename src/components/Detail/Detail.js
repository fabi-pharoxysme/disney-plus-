import React from 'react';
import detailStyle from './detail.module.css';
import playIconB from '../../images/play-icon-black.png';
import playIconW from '../../images/play-icon-white.png';
import groupIcon from '../../images/group-icon.png';

const Detail = () => {
    return(
        <div className={detailStyle.detailContainer}>
            <div className={detailStyle.bgContainer}>
                <img src='https://lumiere-a.akamaihd.net/v1/images/2965757bb69beda9b610e5d5a587be89_4096x2270_9c9fbf6f.jpeg?region=30%2C0%2C4036%2C2270' alt=''/>
            </div>
            <div className={detailStyle.imgTitle}>
                <img src='https://lumiere-a.akamaihd.net/v1/images/hb_luca_disneyplus_logo_21383_c05a0131.png' alt=''/>
            </div>
            <div className={detailStyle.controls}>
            <button className={detailStyle.playBtn}>
                <img src={playIconB} alt=''/>
                <spa>PLAY</spa>
            </button>
            <button className={detailStyle.trailerBtn}>
                <img src={playIconW} alt=''/>
                <span>Trailer</span>
            </button>
            <button className={detailStyle.addBtn}>
                <span>+</span>
            </button>
            <button className={detailStyle.groupWathcBtn}>
                <img src={groupIcon} alt=''/>
            </button>
            </div>
            <div className={detailStyle.subTitle}>
                <p>2021 · 101m · Family, Fantasy, Kids, Animation</p>
            </div>
            <div className={detailStyle.description}>
                <p>Ambientada en un hermoso pueblo costero de la Riviera italiana, 
                    esta nueva película animada original es la historia del paso de la niñez a la adultez 
                    de un niño que vive un verano inolvidable repleto de gelato, pastas y viajes interminables en scooter. 
                    Luca comparte estas aventuras con su nuevo mejor amigo, pero toda la diversión se ve amenazada por un secreto muy bien escondido:
                    Luca es un monstruo marino de un mundo que se encuentra justo por debajo de la superficie del agua.
                </p>
            </div>
        </div>
    )
}

export default Detail