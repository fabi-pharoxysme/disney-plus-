import React, { useEffect } from 'react';
import homeStyles from '../Home/home.module.css';
import ImgSlider from '../ImgSlider/ImgSlider';
import Viewers from '../Viewers/Viewers';
import Movies from '../Movies/Movies';
import db from '../../controls/firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../../features/movie/movieSlice'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        db.collection('movies').onSnapshot((snap)=>{
            let tempMovies = snap.docs.map((e)=>{
                return { id: e.id, ...e.data() }
            })
            //fails when you try to use the object below 
            //dispatch(setMovies(tempMovies))
        })
    },[])
    return( 
        <div className={homeStyles.homeContainer}>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </div>
    )
}
export default Home 