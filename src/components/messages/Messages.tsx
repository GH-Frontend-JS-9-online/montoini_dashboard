import React from 'react'
import './Messages.css'
import {correctDate} from '../../services/correctDate'

export const Messages: React.FC = () => {
    return (
        <ul className="show-messages">
            <li className="show-messages__item">
                <i className="fas fa-circle"></i>
                <div>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla
                        pariatur.
                    </p>
                    <span>{correctDate()}</span>
                </div>
            </li>
            <li className="show-messages__item right">
                <i className="fas fa-circle"></i>
                <div>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla
                        pariatur.
                    </p>
                    <span>4 April 2016, 5:32 PM</span>
                </div>
            </li>
        </ul>
    )
}