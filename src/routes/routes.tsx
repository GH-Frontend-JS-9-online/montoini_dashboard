import React from 'react'
import {MainPage} from '../pages/MainPage'
import {PageOfProjects} from '../pages/PageOfProjects'
import {ConnectionPage} from '../pages/ConnectionPage'
import {InboxPage} from '../pages/InboxPage'
import {SignUp} from '../components/authorization/SingUp'
import {Forgot} from '../components/authorization/Forgot'
import {Login} from '../components/authorization/Login'


const routes = {
    '/': () => <MainPage/>,
    '/projects': () => <PageOfProjects/>,
    '/connection': () => <ConnectionPage/>,
    '/inbox': () => <InboxPage/>,
    '/login': () => <Login/>,
    '/signUp': () => <SignUp/>,
    '/forgot': () => <Forgot/>
}

export default routes