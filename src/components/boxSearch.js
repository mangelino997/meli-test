import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SvgSearch from '../constants/icons/SvgSearch'
import './styles.css'

export const BoxSearch = () => {

    const [itemName, setItemName] = useState(null)

    let history = useHistory();

    let query = new URLSearchParams();

    const handleChange = (e) => { setItemName(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (itemName) {
            query.set("search", itemName)
            history.push({ pathname: "/items", search: query.toString() })
        }
    }

    return (
        <div className="box-search inline-box">
            <form >
                <input type="search" className="nav-search-input"
                 placeholder="Nunca dejes de comprar" aria-label="Ingresá lo que quieras encontrar"
                  autoFocus tabIndex="2" autoCapitalize="off" autoCorrect="off" maxLength="120"
                    onChange={handleChange}
                />
                <button type="submit" className="nav-search-btn" onClick={(e) => handleSubmit(e)}
                tabIndex="3">
                    <SvgSearch />
                </button>
            </form>
        </div>
    )
}
