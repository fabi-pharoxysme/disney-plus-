import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderStyle from './sliderStyle.module.css';
import sliderImg from '../../images/slider-badging.jpg';
import sliderImg1 from  '../../images/slider-badag.jpg';

const ImgSlider = () => {
    const settings = {
        className:"center",
        centerMode:true,
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true
    }
    return(
        <div>
            <Slider {...settings} className={sliderStyle.slider}>
            <div className={sliderStyle.imgContent}>
                <img src={sliderImg} alt=''/>
            </div>
            <div className={sliderStyle.imgContent }>
                <img src={sliderImg1} alt=''/>
            </div>
            </Slider>

        </div>
    )
}

export default ImgSlider