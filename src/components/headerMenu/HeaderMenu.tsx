import React, {useState} from 'react'
import './HeaderMenu.css'
import GetProject from '../getProject/GetProject'
import logo from '../../inserts/images/header/logo.png'
import {A} from 'hookrouter'

export const HeaderMenu: React.FC = () => {
    const headerIcons: Array<string> = [' ']
    const [isShowProject, setProject] = useState<boolean>(false)
    const toggleHandler = (id: number): void => {
        if (id === 0) {
            setProject(prev => !prev)
        }
    }

    const closeGetProject = (): void => {
        setProject(prev => !prev)
    }
    return(
        <header className="header">
            <nav className="header__nav">
                <A href="/">
                    <img className="header__logo" src={logo} alt="logo"/>
                </A>
                <ul className="header-nav__menu">
                    {headerIcons.map((item, index) => {
                        return (
                            <li key={index} onClick={() => toggleHandler(index)}
                                className="header-nav__item">
                                <A href="/" className="header-nav__link">
                                    <i className="fas fa-plus header-nav__icon-plus"><span>Add</span></i>
                                    <i className="fas fa-search fa-lg header-nav__icon"> </i>
                                    <i className="far fa-bell fa-lg header-nav__icon"> </i>
                                    <i className="fas fa-angle-down fa-lg header-nav__icon"> </i>
                                </A>
                            </li>
                        )
                    })}
                </ul>
                <GetProject close={closeGetProject} getProjectDisplay={(isShowProject) ? 'flex' : 'none'} />
            </nav>
        </header>
    )
}