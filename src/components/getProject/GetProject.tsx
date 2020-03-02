import React, {useState} from 'react'
import './GetProject.css'
import {IProject} from '../../interfaces/IProject'
import ApiService from '../../services/ApiService'
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

    const [title, setUpTitle] = useState<string>('')
    const [company, setUpCompany] = useState<string>('')
    const [cost, setUpCost] = useState<string>('')
    const [deadline, setUpDeadline] = useState<string>('')
    const [assigned, setUpAssigned] = useState<string>('')

    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpTitle(event.target.value)
    }
    const companyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpCompany(event.target.value)
    }
    const costHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpCost(event.target.value)
    }
    const deadlineHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpDeadline(event.target.value)
    }
    const assignedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpAssigned(event.target.value)
    }
    const newProject: IProject = {
        title: title,
        company: company,
        cost: `$${cost}`,
        deadline: deadline,
        assigned: JSON.parse(localStorage.getItem('user') as string)
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        ApiService
            .createProject(newProject)
            .then(response => response.json())
            .then(response => {
                dispatch(updateProjects(response))
                ApiService
                    .getAllProjects()
                    .then(response => response.json())
                    .then(response => {
                        localStorage.setItem('projects', JSON.stringify([...localStorage.getItem('projects') as any, response]))
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
        setUpTitle('')
        setUpCompany('')
        setUpCost('')
        setUpDeadline('')
        setUpAssigned('')
    }
    return (
        <div className="getProject" style={{display: props.getProjectDisplay}}>
            <div className="close" onClick={props.close}> </div>
            <h1>Create project</h1>
            <form action="/" onSubmit={handlerSubmit} className="getProject__form">
                <input type="text" onChange={titleHandler} value={title} placeholder="Title" required />
                <input type="text" onChange={companyHandler} value={company} placeholder="Company" required />
                <input type="number" onChange={costHandler}  value={cost} placeholder="Cost $" min="0" required />
                <input type="date" onChange={deadlineHandler} value={deadline} name="deadline"
                       min="01-01-2020" max="01-01-2030" required />
                <input type="text" onChange={assignedHandler} value={assigned} placeholder="Assigned" required />
                <button type="submit">Add project</button>
            </form>
        </div>
    )
}

export default GetProject
