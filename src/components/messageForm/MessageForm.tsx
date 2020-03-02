import React, {useState} from 'react'
import './MessageForm.css'
import ApiService from '../../services/ApiService'
import {useDispatch} from 'react-redux'
import {updateMessages} from '../../reducers/reducers'

export const MessageForm: React.FC = () => {
    const [message, setUpMessage] = useState('')
    const dispatch = useDispatch()

    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpMessage(event.target.value)
    }
    const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (message.trim() !== '') {
            ApiService
                .sendMessage(message)
                .then(response => response.json())
                .then(response => {localStorage.setItem('allThreadMessages',
                    JSON.stringify([...localStorage.getItem('allThreadMessages') as any, response]))
                    dispatch(updateMessages(response))
                })
                .catch(error => console.error(error))
            ApiService
                .getAllProjects()
                .then(response => response.json())
                .then(response => localStorage.setItem('projects', JSON.stringify(response)))
                .catch(err => console.error(err))
            setUpMessage('')
        }
    }
    return (
        <form action="#" onSubmit={submitHandler} className="write-message">
            <input type="text" onChange={messageHandler} value={message} className="write-message__text"
                   placeholder="Write a message" required pattern=".*\S.*" autoComplete="off"/>
            <button type="submit" className="write-message__button">
                <i className="fas fa-paperclip"></i>
            </button>
        </form>
    )
}