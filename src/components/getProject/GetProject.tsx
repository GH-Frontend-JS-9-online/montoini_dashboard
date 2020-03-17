import React, {useState} from 'react'
import './GetProject.css'
import apiService from '../../services/ApiService'
import {IProject} from '../../interfaces/IProject'
import {useSelector, useDispatch} from 'react-redux'
import {updateProjects} from '../../reducers/reducers'



interface GetProjectType {
    getProjectDisplay: string
    close(): void
}

const GetProject: React.FC<GetProjectType> = props => {
    // eslint-disable-next-line
    const projects = useSelector((state: any) => state.projects)
    const dispatch = useDispatch()

    const [title, setTitle] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [cost, setCost] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')

    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const companyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompany(event.target.value)
    }
    const costHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCost(event.target.value)
    }
    const deadlineHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeadline(event.target.value)
    }
    const newProject: IProject = {
        title: title,
        company: company,
        cost: `$${cost}`,
        deadline: deadline,
        assigned: JSON.parse(localStorage.getItem('user') as string)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        apiService
            .createProject(newProject)
            .then(response => response.json())
            .then(response => {
                dispatch(updateProjects(response))
                apiService
                    .getAllProjects()
                    .then(response => response.json())
                    .then(response => {
                        localStorage.setItem('projects',
                            JSON.stringify([...localStorage.getItem('projects') as any, response]))
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
        setTitle('')
        setCompany('')
        setCost('')
        setDeadline('')
        window.location.assign('http://localhost:3000/projects')
    }
    return (
        <div className="getProject" style={{display: props.getProjectDisplay}}>
            <div className="close" onClick={props.close}> </div>
            <h1>Create project</h1>
            <form action="/" onSubmit={handleSubmit} className="getProject__form">
                <input type="text" onChange={titleHandler} value={title} placeholder="Title" required />
                <input type="text" onChange={companyHandler} value={company} placeholder="Company" required />
                <input type="number" onChange={costHandler}  value={cost} placeholder="Cost $" min="0" required />
                <input type="date" onChange={deadlineHandler} value={deadline} name="deadline"
                       min="01-01-2020" max="01-01-2030" required />
                <button type="submit">Add project</button>
            </form>
        </div>
    )
}

export default GetProject
