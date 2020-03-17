import React from 'react'
import './OptionsForButton.css'

interface IOptions {
    [key: string]: string
}

export const OptionsForButton: React.FC<IOptions> = props => {
    const optionsItem: Array<string> = ['item 1', 'item 2', 'item 3']

    return (
        <div className="wrapper-options">
            {`${props.beforeButtonText}:`}
            <label className="options__button" htmlFor="options__button">
                {props.buttonName}
                <input type="checkbox" id="options__button"/>
                <i className="fas fa-chevron-down"></i>
                <ul className="options__menu">
                    {optionsItem.map((item, index) => {
                        return (
                            <li key={index} className="options__item">
                                <a href="/" className="options__link">
                                    {item}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </label>
        </div>
    )
}