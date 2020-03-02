import React from 'react'
import './App.css'
import routes from '../../routes/routes'
import {useRoutes} from 'hookrouter'
import {ErrorPage} from "../../pages/ErrorPage";


export const App = () => {
    const routeResult = useRoutes(routes)
    return (
        <div className="App">
            {routeResult || <ErrorPage/>}
        </div>
    )
}
