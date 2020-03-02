import React from 'react'
import './ProjectsContent.css'
import {convertDate} from '../../services/convertDate'
import {useSelector} from 'react-redux'

export const ProjectsContent: React.FC = () => {
    const projects = useSelector((state: any) => state.projects)
    return (
        <>
            {projects.map((item: any) => {
                return (
                    <ul key={item._id as any} className="projects-content" style={
                        {borderColor: (item.progress === 0) ? '#e2e3e8' : (item.progress === 100) ? '#4caf50' : '#2196f3'}
                    }>
                        <li className="projects__item">
                            <div className="title">
                                <h4>{item.title}</h4>
                                <p>{item.company}</p>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="value">
                                <h4>{item.cost}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="deadline">
                                <h4>{`${convertDate(item.deadline)}`}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="time-spent">
                                <h4>{`${item.timeSpent} hours`}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="progress">
                                <h4>{`${item.progress}%`}</h4>
                                <div>
                                    <span style={{
                                        width: `${item.progress}%`,
                                        background: (item.progress === 0) ? '#9ea3b4' : (item.progress === 100) ? '#4caf50' : '#2196f3'
                                    }}>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="status">
                                <h4>{item.status}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="assigned">
                                <i className="fas fa-circle"> </i>
                                <div className="assigned-block">
                                    <h4>{item.assigned.name}</h4>
                                    <p>{item.assigned.position}</p>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="ellipsis">
                                <i className="fas fa-ellipsis-v"> </i>
                            </div>
                        </li>
                    </ul>
                )
            })}
        </>
    )
}