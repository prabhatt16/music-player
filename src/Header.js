import React from 'react'
import './Header.css'
import musicIcon from './music.png'

function Header() {
    return (
        <div className="header">
            <img src={musicIcon} alt="logo" />
        </div>
    )
}

export default Header
