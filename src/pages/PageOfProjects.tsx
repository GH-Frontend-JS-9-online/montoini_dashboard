import React from "react"
import {HeaderMenu} from '../components/headerMenu/HeaderMenu'
import {AsideMenu} from '../components/asideMenu/AsideMenu'
import {ShowProjects} from '../components/showProjects/ShowProjects'
import apiService from '../services/ApiService'

export const PageOfProjects: React.FC = () => {
    apiService
        .getAllProjects()
        .then(response => response.json())
        .then(response => localStorage.setItem('projects', JSON.stringify(response)))
        .catch(error => console.error(error))
    return (
        <div className="main">
            <HeaderMenu/>
            <AsideMenu/>
            <ShowProjects/>
        </div>
    )
}