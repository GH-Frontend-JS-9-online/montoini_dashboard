import React from 'react'
import {HeaderMenu} from '../components/headerMenu/HeaderMenu'
import {AsideMenu} from '../components/asideMenu/AsideMenu'
import {ConnectionMenu} from '../components/connectionMenu/ConnectionMenu'
import {ConnectionChart} from '../components/connectionChart/ConnectionChart'
import {ConnectionTable} from '../components/connectionTable/ConnectionTable'

export const ConnectionPage:React.FC = () => {
    return (
        <div>
            <HeaderMenu/>
            <main className="main">
                <AsideMenu/>
                <div className="connection" style={{width: '100%'}}>
                    <ConnectionMenu/>
                    <ConnectionChart/>
                    <ConnectionTable/>
                </div>
            </main>
        </div>
    )
}