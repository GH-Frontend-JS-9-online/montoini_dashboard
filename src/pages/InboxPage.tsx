import React from 'react'
import {HeaderMenu} from '../components/headerMenu/HeaderMenu'
import {AsideMenu} from '../components/asideMenu/AsideMenu'
import {InboxMenu} from '../components/inboxMenu/InboxMenu'
import {InboxContent} from '../components/inboxContent/InboxContent'
import {InboxConversation} from '../components/inboxConversation/InboxConversation'
import {AboutUsers} from '../components/aboutUsers/AboutUsers'
import apiService from '../services/ApiService'

export const InboxPage: React.FC = () => {
        apiService
            .allThreadMessages()
            .then(response => response.json())
            .then(response => localStorage.setItem('allThreadMessages', JSON.stringify(response)))
            .catch(err => console.error(err))
    return (
        <div>
            <HeaderMenu/>
            <main className="main">
                <AsideMenu/>
                <div className="middle">
                    <InboxMenu/>
                    <div className="message">
                        <InboxContent/>
                        <InboxConversation/>
                        <AboutUsers/>
                    </div>
                </div>
            </main>
        </div>
    )
}