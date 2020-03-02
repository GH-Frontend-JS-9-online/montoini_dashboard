import React from 'react'
import './InboxContent.css'
import {useSelector} from 'react-redux'
import {convertDate} from '../../services/convertDate'

export const InboxContent: React.FC = () => {
    const allThreadMessages = useSelector((state: any) => state.allThreadMessages)
    return (
        <div className="inbox-content">
            {allThreadMessages.map((item: any, index: number) => {
                return (
                    <div key={index} className="inbox-content__messages">
                        <div className="inbox-content__person">
                            <div>
                                <i className="fas fa-circle"></i>
                                <h2>{item.user['name']}</h2>
                            </div>
                            <span>{convertDate(item.created_at)} PM</span>
                        </div>
                        <p>
                            {item.body}
                        </p>
                    </div>
                )
            })}
            <div className="new-conversation">
                <div>
                    <button type="button" className="new-conversation__button">
                        <i className="fas fa-plus"></i>
                        New conversation
                    </button>
                </div>
            </div>
        </div>
    )
}