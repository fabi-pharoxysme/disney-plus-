import React from 'react';
import movieStyle from './movie.module.css';
import { selectMovies } from '../../features/movie/movieSlice'
import { useSelector } from 'react-redux';

const Movies = () => {
    const movies = useSelector(selectMovies);
    console.log('la movie',movies)
    return (
        <div className={movieStyle.movieContainer}>
            <h4>Recomended for You</h4>
            <div className={movieStyle.movieContent}>
            <div className={movieStyle.movieWrap}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwniw90RaOBRs2TLrhXzLg7vf4R2shvPDobJoErWODg=s900-c-k-c0x00ffffff-no-rj" alt=''/>
                </div>
                <div className={movieStyle.movieWrap}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwniw90RaOBRs2TLrhXzLg7vf4R2shvPDobJoErWODg=s900-c-k-c0x00ffffff-no-rj" alt=''/>
                </div>
                <div className={movieStyle.movieWrap}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwniw90RaOBRs2TLrhXzLg7vf4R2shvPDobJoErWODg=s900-c-k-c0x00ffffff-no-rj" alt=''/>
                </div>
                <div className={movieStyle.movieWrap}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwniw90RaOBRs2TLrhXzLg7vf4R2shvPDobJoErWODg=s900-c-k-c0x00ffffff-no-rj" alt=''/>
                </div>
                <div className={movieStyle.movieWrap}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwniw90RaOBRs2TLrhXzLg7vf4R2shvPDobJoErWODg=s900-c-k-c0x00ffffff-no-rj" alt=''/>
                </div>
                <div className={movieStyle.movieWrap}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwniw90RaOBRs2TLrhXzLg7vf4R2shvPDobJoErWODg=s900-c-k-c0x00ffffff-no-rj" alt=''/>
                </div>
                <div className={movieStyle.movieWrap}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwniw90RaOBRs2TLrhXzLg7vf4R2shvPDobJoErWODg=s900-c-k-c0x00ffffff-no-rj" alt=''/>
                </div>
                <div className={movieStyle.movieWrap}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwniw90RaOBRs2TLrhXzLg7vf4R2shvPDobJoErWODg=s900-c-k-c0x00ffffff-no-rj" alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Movies