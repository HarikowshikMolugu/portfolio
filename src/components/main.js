import React from "react";
import "./main";
import resume from "./HARI's Resume.pdf";
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
            <p id="wo-line4" >I am a Web Developer</p>
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
        <p id="pro-head" >MY PROJECTS</p><br></br>
        <div className="line1">
            <div id="pro1">
               <div id="pro-image">
               <img id="pic2" src="/images/todolist.png"></img>
               </div>
               <div id="pro-content">
                 <p  id="pro-content1" align="center">TODO LIST</p>
                 <p id="pro-content2">I created this webpage using REACTJS and NODE JS, it contains the User Authentication with Login and Register so that the user can add their todo's and those will be saved in the database so that user can update them at any time. </p>
                 
               </div>
               <a id="weblink" href="https://hk-todolist.netlify.app/">View Project</a><br></br>
               <a id="weblink" href="https://github.com/HarikowshikMolugu/todoList">Github Repositry</a>
               
            </div>
            <div id="pro2">
            <div id="pro-image">
               <img id="pic2" src="/images/mainlogo.png"></img>
               </div>
               <div id="pro-content">
                 <p  id="pro-content1" align="center">ITYUKTA 2K23</p>
                 <p id="pro-content2">I created this website using REACTJS and CSS on the occasion of technical fest happend in JNTU-GV.Using this website students can register for the events organised by ITYUKTA </p>
                 
               </div>
               <a id="weblink" href="https://ityukta2k23-fest-lolh.vercel.app/">View Project</a><br></br>
               <a id="weblink" href="https://github.com/HarikowshikMolugu/ityukta2k23-fest-">Github Repositry</a>
              
            
            </div>
            <div id="pro3">
            <div id="pro-image">
               <img id="pic2" src="/images/pro2.jpeg"></img>
               </div>
               <div id="pro-content">
                 <p  id="pro-content1" align="center">PORTFOLIO</p>
                 <p id="pro-content2">I created this website using REACTJS AND CSS regarding the PORTFOLIO which consists of  my details and projects I have done.</p>
               </div>
               <a id="weblink" href="/">View Project</a><br></br>
               <a id="weblink" href="https://github.com/HarikowshikMolugu/portfolio">Github Repositry</a>
            
            </div>
            
        </div>
        <div className="line2">
            <div id="pro4">
            <div id="pro-image">
               <img id="pic2" src="/images/pro3.png"></img>
               </div>
               <div id="pro-content">
                 <p  id="pro-content1" align="center">HK FOUNDATION</p>
                 <p id="pro-content2">I created this website using HTML AND CSS regarding the cause of donation based on payment gateway using razorpay.</p>
               </div>
               <a id="weblink" href="https://www.linkedin.com/posts/hari-kowshik-molugu-56042923b_task3-gripjuly2022-gripjuly2022-activity-6955454748271493120-MnRe?utm_source=share&utm_medium=member_android">View Project</a><br></br>
               <a id="weblink" href="https://github.com/HarikowshikMolugu/Paymentgateway">Github Repositry</a>
            
            </div>
            <div id="pro5">
            <div id="pro-image">
               <img id="pic2" src="/images/pro4.png"></img>
               </div>
               <div id="pro-content">
                 <p  id="pro-content1" align="center">VIRTUAL PIANO</p>
                 <p id="pro-content2">I created this website using HTML AND CSS regarding the virtual piano with musical keys.</p>
               </div>
               <a id="weblink" href="https://087679.netlify.app/">View Project</a><br></br>
               <a id="weblink" href="https://github.com/HarikowshikMolugu/simple-piano">Github Repositry</a>
            
            </div>
            <div id="pro6">
            <div id="pro-image">
               <img id="pic2" src="/images/pro5.png"></img>
               </div>
               <div id="pro-content">
                 <p  id="pro-content1" align="center">EMAIL VERIFICATION</p>
                 <p id="pro-content2">I created this website using REACTJS,CSS and EMAILJS regarding the purpose of checking the mails without backend.</p>
               </div>
               <a id="weblink" href="https://lucky-quokka-359d0c.netlify.app/">View Project</a><br></br>
               <a id="weblink" href="https://github.com/HarikowshikMolugu/emailverification">Github Repositry</a>

            </div>
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
                
            </fieldset>
      </div>
      <div id="res" align="center">
        
        <a id="res-btn" href="/images/HARI's Resume.pdf" download>Download Resume</a>
      </div>
    </div>
    )
}

export default main;