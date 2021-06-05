import React from 'react'
import { Link } from 'react-router-dom'
import { BoxSearch } from '../components/boxSearch'
import './styles.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="nav-skip-to-main-content">
                <a className="nav-logo inline-box" href={`${process.env.REACT_APP_PATH_PREFIX}`}></a>
                <BoxSearch />
            </div>
        </header>
    )
}
