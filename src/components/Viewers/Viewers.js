import React from 'react';
import viewerStyle from './viewers.module.css';
import disney from '../../images/viewers-disney.png';
import pixar from '../../images/viewers-pixar.png';
import marvel from '../../images/viewers-marvel.png';
import starwars from '../../images/viewers-starwars.png';
import national from '../../images/viewers-national.png';

const Viewers = () =>{
    return (
        <div className={viewerStyle.viewersContent}>
            <div className={viewerStyle.viewerImgContent}>
                <img src={disney} alt=''/>
            </div>
            <div className={viewerStyle.viewerImgContent}>
                <img src={pixar} alt=''/>
            </div>
            <div className={viewerStyle.viewerImgContent}>
                <img src={marvel} alt=''/>
            </div>
            <div className={viewerStyle.viewerImgContent}>
                <img src={starwars} alt=''/>
            </div>
            <div className={viewerStyle.viewerImgContent}>
                <img src={national} alt=''/>
            </div>
        </div>
    )
}
export default Viewers