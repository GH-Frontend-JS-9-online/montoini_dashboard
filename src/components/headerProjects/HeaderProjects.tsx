import React from 'react'
import './HeaderProjects.css'
import {useSelector} from 'react-redux'
import {OptionsForButton} from '../options/OptionsForButton'

export const HeaderProjects: React.FC = () => {
    const projects = useSelector((state: any) => state.projects)
    return (
        <nav className="project-nav">
            <ul className="project-nav__menu">
                    <li className="project-nav__item">
                        <a href="/" className="project-nav__link">
                            {`All Projects (${projects.length})`}
                        </a>
                    </li>
                    <li className="project-nav__item">
                        <a href="/" className="project-nav__link workflow">
                            Workflow
                        </a>
                    </li>
            </ul>
            <OptionsForButton beforeButtonText="Show projects" buttonName="All"/>
        </nav>
    )
}