import React from 'react'
import { BoxSearch } from '../components/boxSearch'
import './styles.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="nav-skip-to-main-content">
                <a className="nav-logo inline-box" href="/#"/>
                <BoxSearch />
            </div>
        </header>
    )
}
