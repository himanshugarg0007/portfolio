import './Card.css';
import projects from './projects';
import { Button } from '@chakra-ui/react';
export default function Projects() {
  return (
    <div id='projects'>
      {projects.map((project, index) => (
        <div id='project-card' key={index}>
          {
            project.image.Naruto ? <img  src={project.image.Naruto} alt="Narutoresume" /> :
            <img  src={project.image.Indeed} alt="Indeed.com" />
          }
          <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>TechStack : {project.techStack}</p>
            <div style={{display:"flex",justifyContent:"space-between", marginTop:"10px"}}>
              <Button colorScheme='blue' onClick={() => window.open(project.githubLink)}>View Github</Button>
              <Button colorScheme='blue' onClick={() => window.open(project.Sitelink)}>View Site</Button>
            </div>
            </div>
        </div>
      ))}
    </div>
  )
}
