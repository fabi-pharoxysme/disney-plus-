import React from 'react'
import headerStyles from '../Header/header.module.css'

const Header = () => {
    return (
        <div className={headerStyles.headerContent}>
            <img className= {headerStyles.iconDisney} src="https://img.icons8.com/plasticine/452/disney-plus.png"/>
            <nav className={headerStyles.navBar}>

            </nav>
        </div>
    )
}

export default Header