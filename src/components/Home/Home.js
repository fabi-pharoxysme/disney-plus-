import React from 'react';
import homeStyles from '../Home/home.module.css';
import ImgSlider from '../ImgSlider/ImgSlider';
import Viewers from '../Viewers/Viewers';
import Movies from '../Movies/Movies';

const Home = () => {
    return( 
        <div className={homeStyles.homeContainer}>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </div>
    )
}
export default Home 