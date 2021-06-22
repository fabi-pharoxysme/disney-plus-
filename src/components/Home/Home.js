import React from 'react';
import homeStyles from '../Home/home.module.css';
import ImgSlider from '../ImgSlider/ImgSlider';

const Home = () => {
    return( 
        <div className={homeStyles.homeContainer}>
            <ImgSlider/>
        </div>
    )
}
export default Home 