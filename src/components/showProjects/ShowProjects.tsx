import React from 'react'
import './ShowProjects.css'
import {HeaderProjects} from '../headerProjects/HeaderProjects'
import {TitleProjects} from '../titleProjects/TitleProjects'
import {ProjectsContent} from '../projectsContent/ProjectsContent'


export const ShowProjects: React.FC = () => {

    return (
        <div className="middle">
            <HeaderProjects/>
            <TitleProjects/>
            <ProjectsContent/>
        </div>
    )
}