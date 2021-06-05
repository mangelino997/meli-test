import React from 'react'
import imageNotFound from '../assets/error.png'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <article className="center">
            <img src={imageNotFound} alt="Página no encontrada" width="300" height="400" />
            <div>
                <p>404 - Página no encontrada</p>
                <Link to={`${process.env.REACT_APP_PATH_PREFIX}`} >
                    <button className="button">Volver</button>
                </Link>
            </div>
        </article>
    )
}
