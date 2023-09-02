import React from "react";
import "./main";
import projectsData from "./projects.json";
import 'animate.css';

function main(){
    return(
        <div className="App">
      <div className='intro'>
        
      <div id='pic'>
  <div id="pic-box">
    <div id="pic1-container">
      <img id="pic1" src="/images/logo.jpg" alt="Logo Image"></img>
    </div>
    <div className="shadow-mask">
      <div className="shadow"></div>
    </div>
  </div>
</div>






        <div id='wo'>
            <p id="wo-line1">Hi Welcome to</p>
         
            <p id="wo-line3">M.HARI KOWSHIK's PORTFOLIO</p>
            <p id="wo-line4" >I am a Full Stack Developer</p>
        </div>
      </div>
      <div className="about-head">
        <div className="animate__animated animate__bounceIn about-content">
        <div className="about">
      <div id="fs1">
                <p id="about-content1"><b>A Little About My Self</b></p>
                <p id="about-content2" >Passionate <b style={{color:'gold'}}>Full Stack Developer</b> and <b style={{color:'gold'}}>Dynamic Problem Solver</b> with a proven track record of turning challenges
into opportunities. My dedication to continuous learning drives me to stay at the forefront of industry trends, ensuring innovative and effective solutions.
</p>
      </div>
      

      </div>
      <div className="about">
        <div id="fs1">
            <p id="about-content1"><b>Educational Qualification</b></p>
            <p id="about-content2">B.Tech in Information Technology</p>
            <p id="about-content2">At JNTU-GV College of Engineering Viziznagaram</p>
            <p id="about-content2">2020 - 2024</p>
            
        </div>
      </div>
        </div>
        <div className="animate__animated animate__bounceIn fs2">
        <img src="https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2020/03/full-stack-development.gif" alt="gif"></img>
      </div>
      </div>
      
      <div className="pro">
        <p id="pro-head">MY PROJECTS</p><br></br>
        <div className="project-container">
          {projectsData.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-content">
                <p className="project-title" align="center"><b style={{color:'gold'}}>{project.name}</b></p>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-links">
                {project.webLink&&(
                  <>
                <a className="weblink" href={project.webLink}>View Project</a><br />
                </>
                )}
                
                {project.githubLink&&(
                  <>
                <a className="weblink" href={project.githubLink}>Github Repository</a>
                </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sk">
      <fieldset id="fs2">
                <legend><p id="sk-content"><b>MY SKILLS</b></p></legend>
                <img id="sk-img" src="/images/react.png"></img>
                <img id="sk-img" src="/images/bootstrap.png"></img>
                <img id="sk-img" src="/images/html.png"></img>
                <img id="sk-img" src="/images/css.png"></img>
                <img id="sk-img" src="/images/js.png"></img>
                <img id="sk-img" src="/images/nodejs.png"></img>
                <img id="sk-img" style={{backgroundColor:"black"}} src="/images/c.jpg"></img>
                <img id="sk-img" src="/images/python.png"></img>
                <img id="sk-img" src="/images/github.png"></img>
                <img id="sk-img" src="/images/java.png"></img>
                <img id="sk-img" src="/images/spring.png"></img>
                
            </fieldset>
      </div>
      <div id="res" align="center">
        
        <a id="res-btn" href="/images/HARI's Resume.pdf" download>Download Resume</a>
      </div>
    </div>
    
    
    )
}

export default main;