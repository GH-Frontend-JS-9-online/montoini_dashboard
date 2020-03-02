import React from "react"
import {HeaderMenu} from '../components/headerMenu/HeaderMenu'
import {AsideMenu} from '../components/asideMenu/AsideMenu'

export const ErrorPage: React.FC = () => {
    return (
        <div>
            <HeaderMenu/>
            <main className="main">
                <AsideMenu/>
            </main>
        </div>
    )
}