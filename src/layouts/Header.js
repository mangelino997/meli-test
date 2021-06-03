import React from 'react'
import { BoxSearch } from '../components/boxSearch'
import './layouts.css'

export const Header = () => {
    return (
        <div className="header">
            <div className="nav-skip-to-main-content">
                <div className="nav-logo inline-box" />
                <BoxSearch/>
            </div>
        </div>
    )
}
