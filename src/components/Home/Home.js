import React from 'react';
import homeStyles from '../Home/home.module.css';
import ImgSlider from '../ImgSlider/ImgSlider';
import Viewers from '../Viewers/Viewers';

const Home = () => {
    return( 
        <div className={homeStyles.homeContainer}>
            <ImgSlider/>
            <Viewers/>
        </div>
    )
}
export default Home 