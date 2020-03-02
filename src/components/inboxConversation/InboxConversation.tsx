import React from 'react'
import './InboxConversation.css'
import {MessageForm} from '../messageForm/MessageForm'


export const InboxConversation:React.FC = () => {
    return (
        <div className="conversation">

            <MessageForm/>
        </div>
    )
}
    