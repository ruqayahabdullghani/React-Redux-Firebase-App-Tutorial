import React from 'react'
import ProjectSammary from './ProjectSammary'

const ProjectList = ({projects}) => {
  return (
    <div className='project-list section'>
      {projects && projects.map(project => {
        return(
          <ProjectSammary project={project} key={project.id}/>

         
        )
      })}

      
      
     
    </div>
  )
}

export default ProjectList