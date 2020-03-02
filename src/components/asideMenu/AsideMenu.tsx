import React from 'react'
import './AsideMenu.css'
import {A} from 'hookrouter'

export const AsideMenu: React.FC = () => {
    const asideIcons: Array<string> = ['home', 'bars', 'chart-line', 'envelope', 'user-friends']
    const links: Array<string> = ['/', '/projects', '/connection', '/inbox', '/login']
    return(
        <aside className="aside">
            <nav className="aside-nav">
                <ul className="aside-nav__menu">
                    {asideIcons.map((item, index) => {
                        return (
                            <li key={index} className="aside-nav__item">
                                <A href={links[index]} className="aside-nav__link">
                                    <i className={`fas fa-${item}`}> </i>
                                </A>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}