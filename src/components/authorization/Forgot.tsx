import React, {useState} from 'react'
import './Authorization.css'
import {IUser} from '../../interfaces/IUser'
import apiService from '../../services/ApiService'
import { A } from 'hookrouter'
import {HeaderMenu} from '../headerMenu/HeaderMenu'
import {AsideMenu} from '../asideMenu/AsideMenu'

export const Forgot:React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }

    const confirmPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setConfirmPassword(event.target.value)
    }

    const user: IUser = {
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        apiService
            .resetPassword(user)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err))
        setEmail('')
        setPassword('')
        setConfirmPassword('')
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
                        <div className="container__image"></div>
                    </div>
                </div>
                <div className="container__form">
                    <form name="resetForm" onSubmit={handlerSubmit} className="form">
                        <h1>Reset password</h1>
                        <A href="/login">Existing member?</A>
                        <input type="email" onChange={emailHandler} value={email} name="userEmail"
                            placeholder="Email..." required autoComplete="off"/>
                        <input type="password" onChange={passwordHandler} value={password} name="userPassword"
                            placeholder="Password..." required/>
                        <input type="password" onChange={confirmPasswordHandler} value={confirmPassword}
                               name="userConfirmPassword" placeholder="Confirm password..." required/>
                        <button className="button btn" type="submit">
                            Reset
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}