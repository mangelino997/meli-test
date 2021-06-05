import React from 'react'
import { Link } from 'react-router-dom'
import { BoxSearch } from '../components/boxSearch'
import './styles.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="nav-skip-to-main-content">
                <Link to={`${process.env.PATH_PREFIX}/`} />
                <BoxSearch />
            </div>
        </header>
    )
}
