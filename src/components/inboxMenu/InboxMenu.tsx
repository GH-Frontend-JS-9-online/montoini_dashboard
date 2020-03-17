import React from 'react'
import './InboxMenu.css'
import {useSelector} from 'react-redux'
import {OptionsForButton} from '../options/OptionsForButton'

export const InboxMenu: React.FC = () => {
    const allThreadMessages = useSelector((state: any) => state.allThreadMessages)
    return (
        <nav className="inbox-nav">
            <ul className="inbox-nav__left">
                <li className="inbox-nav__left-item">
                    <a href="\" className="inbox-nav__left-link">
                        <i className="fas fa-inbox"></i>
                        {`Inbox (${allThreadMessages.length})`}
                    </a>
                </li>
                <li className="inbox-nav__left-item">
                    <a href="\" className="inbox-nav__left-link sent">
                        <i className="fas fa-paper-plane"></i>
                        Sent
                    </a>
                </li>
                <li className="inbox-nav__left-item">
                    <a href="\" className="inbox-nav__left-link trash">
                        <i className="fas fa-trash"></i>
                        Trash
                    </a>
                </li>
            </ul>
            <OptionsForButton beforeButtonText="Filter messages" buttonName="Date"/>
        </nav>
    )
}