import React from 'react'
import './HeaderProjects.css'
import {useSelector} from 'react-redux'

export const HeaderProjects: React.FC = () => {
    const projects = useSelector((state: any) => state.projects)
    return (
        <nav className="project-nav">
            <ul className="project-nav__menu">
                <ul className="project-nav__left">
                    <li className="project-nav__item-left">
                        <a href="/" className="project-nav__link-left">
                            {`All Projects (${projects.length})`}
                        </a>
                    </li>
                    <li className="project-nav__item-left">
                        <a href="/" className="project-nav__link-left workflow">
                            Workflow
                        </a>
                    </li>
                </ul>
                <ul className="project-nav__right">
                    <li className="project-nav__item-right">
                        <a href="/" className="project-nav__link-right">
                            Show projects:
                        </a>
                    </li>
                    <li className="project-nav__item-right">
                        <a href="/" className="project-nav__link-right allProjects">
                            <i className="fas fa-angle-down fa-lg all"><span>All</span></i>
                        </a>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}