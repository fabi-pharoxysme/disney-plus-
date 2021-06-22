import React from 'react';
import viewerStyle from './viewers.module.css';
import logo from '../../images/logo.svg';

const Viewers = () =>{
    return (
        <div className={viewerStyle.viewersContent}>
            <div className={viewerStyle.viewerImgContent}>
                <img src={logo}/>
            </div>
            <div className={viewerStyle.viewerImgContent}>
                <img src={logo}/>
            </div>
            <div className={viewerStyle.viewerImgContent}>
                <img src={logo}/>
            </div>
            <div className={viewerStyle.viewerImgContent}>
                <img src={logo}/>
            </div>
            <div className={viewerStyle.viewerImgContent}>
                <img src={logo}/>
            </div>
        </div>
    )
}
export default Viewers