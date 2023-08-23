import React from "react";
import "./main";
import projectsData from "./projects.json";

function main(){
    return(
        <div className="App">
      <div className='intro'>
        
        <div id='pic'>
          <div id="pic-box">
          <img id="pic1" src="/images/logo.jpg"></img>
          </div>
        </div>
        <div id='wo'>
            <p id="wo-line1">Hi Welcome to</p>
         
            <p id="wo-line3">M.HARI KOWSHIK's PORTFOLIO</p>
            <p id="wo-line4" >I am a Full Stack Developer</p>
        </div>
      </div>
      <div className="about">
      <div id="fs1">
                <p id="about-content1"><b>A Little About My Self</b></p>
                <p id="about-content2" >I am a <i>WEB DEVELOPER</i> and I am enthusiastic in developing responsive web pages.I have experience in both Frontend and Backend. </p>
      </div>

      </div>
      <div className="about">
        <div id="fs1">
            <p id="about-content1"><b>Educational Qualification</b></p>
            <p id="about-content2">B.Tech in Information Technology</p>
            <p id="about-content2">At JNTU-GV</p>
            <p id="about-content2">2020 - present</p>
            
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
                <p className="project-title" align="center">{project.name}</p>
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