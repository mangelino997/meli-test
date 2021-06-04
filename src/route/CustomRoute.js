import React from 'react'
import { Route } from 'react-router-dom'

export default function CustomRoute({component: Component, category,handleChangeCategory, ...rest}){
    return (
        <Route {...rest}>
            <Component category={category} handleChangeCategory={handleChangeCategory} />
        </Route>
    )
}
