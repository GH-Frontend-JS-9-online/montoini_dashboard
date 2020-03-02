import React, {useState} from 'react'
import './Authorization.css'
import {IUser} from '../../interfaces/IUser'
import ApiService from '../../services/ApiService'
import { A } from 'hookrouter'
import {HeaderMenu} from '../headerMenu/HeaderMenu'
import {AsideMenu} from '../asideMenu/AsideMenu'

export const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value)
    }

    const namedHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value)
    }

    const user: IUser = {
        email: email,
        password: password,
        name: name
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        ApiService
            .signUp(user)
            .then(response => response.json())
            .then()
            .catch(err => console.error(err))
        setEmail('')
        setPassword('')
        setName('')
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
                    <form name="registerForm" onSubmit={handlerSubmit} className="form">
                        <h1>Sign up</h1>
                        <A href="/login">Existing member?</A>
                        <input type="email" onChange={emailHandler} value={email} name="userEmail"
                            placeholder="Email..." required autoComplete="off"/>
                        <input type="password" onChange={passwordHandler} value={password} name="userPassword"
                            placeholder="Password..." required/>
                        <input type="text" onChange={namedHandler} value={name} name="userName"
                            placeholder="Name..." required/>
                        <button className="button btn" type="submit">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

