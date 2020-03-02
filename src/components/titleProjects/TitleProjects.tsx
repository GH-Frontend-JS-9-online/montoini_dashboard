import React from 'react'
import './TitleProjects.css'

export const TitleProjects: React.FC = () => {
    const projectTitleItems: Array<string> = [
        'Project title',
        'Value',
        'Deadline',
        'Time spent',
        'Progress',
        'Status',
        'Assigned to',
        ''
    ]

    return (
        <ul className="title-projects">
            {projectTitleItems.map((item, index) => {
                return (
                    <li key={index} className="title-projects__item">
                        <h4>{item}</h4>
                    </li>
                )
            })}
        </ul>
    )
}