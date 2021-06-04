import React, { useState } from 'react'
import { Footer } from './layouts/Footer'
import { Header } from './layouts/Header'
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import { Results } from './pages/Results'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import CustomRoute from './route/CustomRoute'

export const AppRoute = () => {

    const [category, setCategory] = useState(null)

    function handleChangeCategory(element){
        if(element) setCategory(element)
    }

    return (
        <>
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route exact path="/items" component={Results} /> */}
                        <CustomRoute exact path="/items/:id" component={Detail} category={category}/>
                        <CustomRoute exact path="/items" component={Results} handleChangeCategory={handleChangeCategory}/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>
            </Router>
            <Footer />
        </>
    )
}
