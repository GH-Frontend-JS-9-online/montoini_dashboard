import React, {useState} from 'react'
import './Authorization.css'
import {IUser} from '../../interfaces/IUser'
import apiService from '../../services/ApiService'
import {A} from 'hookrouter'
import {HeaderMenu} from '../headerMenu/HeaderMenu'
import {AsideMenu} from '../asideMenu/AsideMenu'

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    // eslint-disable-next-line
    const [error, setError] = React.useState<string>('')

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }

    const user: IUser = {
        email: email,
        password: password
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        if(!user.email) setError(prev => 'Error: Please enter your Email.');
            else if(!user.password) setError(prev => 'Error: Please enter your Password.');
            else {
            apiService
                .getCurrentUser()
                .then(response => response.json())
                .then(response => {
                    localStorage.setItem('user',
                        JSON.stringify([...localStorage.getItem('user') as any, response]))
                })
                .catch(error => console.error(error))
                    apiService
                        .login(user)
                        .then(response => localStorage.setItem('token',
                            response.headers.get('x-auth-token') as any))
                        .catch(() => setError(prev => 'Error: Such user does not exist or entered data incorrectly.'))
                    setEmail('')
                    setPassword('')
                alert('You entered the correct email and password.')
                window.location.assign('http://localhost:3000/inbox')
            }
        }

    return (
        <div>
            <HeaderMenu/>
            <main className="main">
                <AsideMenu/>
            </main>
            <div className="container" id="container">
                <div className="container__view">
                    <div className="view">
                        <div className="container__image"> </div>
                    </div>
                </div>
                <div className="container__form">
                    <form name="loginForm" onSubmit={handlerSubmit} className="form">
                        <h1>Log in</h1>
                        <A href="/signUp">Not a member?</A>
                        <input type="email" onChange={emailHandler} value={email} name="userEmail"
                               placeholder="Email..." required autoComplete="off"/>
                        <input type="password" onChange={passwordHandler} value={password} name="userPassword"
                            placeholder="Password..." required/>
                        <button className="button btn" type="submit">
                            Log in
                        </button>
                        <A href="/forgot">Forgot password?</A>
                    </form>
                </div>
            </div>
        </div>
    )
}