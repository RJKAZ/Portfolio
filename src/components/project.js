import React, { useState } from 'react';
import {Container} from 'react-bootstrap';

import projectList from '../assets/projects.json';
import Project from '../components/projects';
import '../components/project.css';

function Projects() {
  const [projects] = useState(projectList);

  return (
    <>
    <Container className= 'content'>
      <div className='preface'>
        <h1 style={{fontSize: "75px", textAlign: "center", textShadow: "2px 5px lightgrey" }}> Check out some of my Work!</h1>
        
        </div>
    <div>
      {projects.map((project) => {
        return (
          <Project
          key={project.id}
          title={project.title}
          desc={project.description}
          livelink={project.livelink}
          codelink={project.codelink}
          technologies={project.technologies}
          img={project.img}
          />
        );
      })}
    </div>



    </Container>
    </>
  );
}

export default Projects;