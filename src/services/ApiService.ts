import {IUser} from '../interfaces/IUser'
import {IProject} from '../interfaces/IProject'

class ApiService {
    apiBase: string;
    constructor() {
        this.apiBase = `https://geekhub-frontend-js-9.herokuapp.com/api`
    }

    async signUp(user: IUser):Promise<any> {
        return await fetch(`${this.apiBase}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    async login(user: IUser):Promise<any> {
        return await fetch(`${this.apiBase}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    async resetPassword(user: IUser):Promise<any> {
        let token: string = localStorage.getItem('token') as any
        return await fetch(`${this.apiBase}/users/reset_password`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    async getCurrentUser():Promise<any> {
        let token: string = localStorage.getItem('token') as any
        return await fetch(`${this.apiBase}/users/`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
    }

    async allThreadMessages():Promise<any> {
        let token: string = localStorage.getItem('token') as any
        let id: string = JSON.parse(localStorage.getItem('user') as string)._id
        return await fetch(`${this.apiBase}/threads/messages/${id}`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
    }

    async sendMessage(message: string):Promise<any> {
        let token: string = localStorage.getItem('token') as any
        let id: string = JSON.parse(localStorage.getItem('user') as string)._id
        return await fetch(`${this.apiBase}/threads/messages`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                thread: {
                    _id: id
                },
                message: {
                    body: message
                }
            })
        })
    }

    async getAllProjects():Promise<any> {
        let token: string = localStorage.getItem('token') as any
        return await fetch(`${this.apiBase}/projects/`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
    }

    async createProject(project: IProject):Promise<any> {
        let token: string = localStorage.getItem('token') as any
        return await fetch(`${this.apiBase}/projects/`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
    }
}

const apiService = new ApiService()
export default apiService