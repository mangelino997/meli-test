import React, { useEffect } from 'react'
import SvgSearch from '../constants/icons/SvgSearch'
import './styles.css'
import { itemsApi } from '../api/item';

export const BoxSearch = () => {

    useEffect(() => {
        console.log('init')
        itemsApi.getItems('samsung')
        .then(res => console.log(res.data));
    }, [])
    return (
        <div className="box-search inline-box">
            <input type="search" className="nav-search-input" />
            <button type="submit" className="nav-search-btn">
                <SvgSearch />
            </button>
        </div>
    )
}
