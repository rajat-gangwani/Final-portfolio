import React from 'react';
import "./projectsstyle.css"
import projectimg from "../../images/project-completed.svg"
 function Projects() {
  return (
    <main className='project-main' >
        <div className='project-left' >
        <h1>Memories - Social Media App</h1>
        <p>A Social media app to share your memories about different places.
          A fully functional CRUD app where users can login create, update, delete memories. Even users can like and comment on memories and search for different memories.          
        </p>
        <h6>Tech Stack Used: MERN Stack</h6>
        <h5>Concepts: Redux, Api, CRUD, MongoDB Atlas, </h5>
        <h5>Code Link: skndksdnksnksd</h5>
        <h5>Project Link: skndksdnksnksd</h5>
        <div className='div-learn' >
        <button className="btn-learn">
        <a className="a-learn" href="/mylearings">my Learnings</a>
      </button>
      </div>
        </div>
        <div className='project-right'>
        <img className='project-img' alt="project-svg" src={projectimg}  />
        

        </div>

    </main>
  )
}
export default Projects;
