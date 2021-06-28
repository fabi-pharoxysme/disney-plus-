import React from 'react';
import headerStyles from '../Header/header.module.css';
import logo from '../../images/logo.svg';
import homeIcon from '../../images/home-icon.svg';
import searchIcon from '../../images/search-icon.svg';
import watchListIcon from '../../images/watchlist-icon.svg';
import originalIcon from '../../images/original-icon.svg';
import movieIcon from '../../images/movie-icon.svg';
import serieIcon from '../../images/series-icon.svg';

const Header = () => {
    return (
        <div className={headerStyles.headerContent}>
            <img className= {headerStyles.iconDisney} src={logo} alt=''/>
            <nav className={headerStyles.navBar}>
                <a className={headerStyles.navBarLink}>
                    <img className={headerStyles.iconNavBarLink} src={homeIcon} alt=''/>
                    home
                </a>
                <a className={headerStyles.navBarLink}>
                    <img className={headerStyles.iconNavBarLink} src={searchIcon} alt=''/>
                    search
                </a>
                <a className={headerStyles.navBarLink}>
                    <img className={headerStyles.iconNavBarLink} src={watchListIcon} alt=''/>
                    watchList
                </a>
                <a className={headerStyles.navBarLink}>
                    <img className={headerStyles.iconNavBarLink} src={originalIcon} alt=''/>
                    originals
                </a>
                <a className={headerStyles.navBarLink}>
                    <img className={headerStyles.iconNavBarLink} src={movieIcon} alt=''/>
                    movies
                </a>
                <a className={headerStyles.navBarLink}>
                    <img className={headerStyles.iconNavBarLink} src={serieIcon} alt=''/>
                    series
                </a>
            </nav>
            <img className={headerStyles.userImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0IqHfnD9id72PEHcp-WUOMxU4nMjSDl_-A&usqp=CAU"/>
        </div> 
    )
}

export default Header