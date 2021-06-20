import React from 'react'
import headerStyles from '../Header/header.module.css'

const Header = () => {
    return (
        <div className={headerStyles.headerContent}>
            <img className= {headerStyles.iconDisney} src="/images/logo.svg"/>
            <nav className={headerStyles.navBar}>
                <a className={headerStyles.navBarLink}><img className={headerStyles.iconNavBarLink} src="/images/home-icon.svg"/>home</a>
                <a className={headerStyles.navBarLink}><img className={headerStyles.iconNavBarLink} src="/images/search-icon.svg"/>search</a>
                <a className={headerStyles.navBarLink}><img className={headerStyles.iconNavBarLink} src="/images/watchlist-icon.svg"/>watchList</a>
                <a className={headerStyles.navBarLink}><img className={headerStyles.iconNavBarLink} src="/images/original-icon.svg"/>originals</a>
                <a className={headerStyles.navBarLink}><img className={headerStyles.iconNavBarLink} src="/images/movie-icon.svg"/>movies</a>
                <a className={headerStyles.navBarLink}><img className={headerStyles.iconNavBarLink} src="/images/series-icon.svg"/>series</a>
            </nav>
            <img className={headerStyles.userImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0IqHfnD9id72PEHcp-WUOMxU4nMjSDl_-A&usqp=CAU"/>
        </div> 
    )
}

export default Header