import React from 'react'
import 'react-circular-progressbar/dist/styles.css'
import './ConnectionMenu.css'
import {CircleProgress} from './CircleProgress'
import {OptionsForButton} from '../options/OptionsForButton'


type ConnectionMenuData = {
    [key: string]: any
}

export const ConnectionMenu:React.FC = () => {
    const data: Array<ConnectionMenuData> = [
        {
            title: 'VIEWS',
            amount: 1300,
            percent: 75
        },
        {
            title: 'VISITORS',
            amount: 800,
            percent: 35
        },
        {
            title: 'VIEWS',
            amount: 3300,
            percent: 62
        }
    ]
    return (
        <nav className="connection-nav">
            <ul className="connection-nav__menu">
                {data.map(({title, amount, percent, index}) => {
                    return (
                        <li key={index} className="connection-nav__item">
                            <CircleProgress percent={percent}/>
                            <div className="visitors">
                                <h3>{amount}</h3>
                                <p>{title}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <OptionsForButton beforeButtonText="Show" buttonName="Week"/>
        </nav>
    )
}