import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Vibhuti</h2>
        <div className="prompt">
          <p>A software developer with a passion for creating valuable applications.</p>
          <a 
          href="https://www.linkedin.com/in/vibhuti-gajinkar" 
          target='_blank'
          rel="noopener noreferrer"
          aria-label='LinkedIn'>
            <LinkedInIcon />
            </a>
            <a 
          href="https://github.com/vibhuti1" 
          target='_blank'
          rel="noopener noreferrer"
          aria-label='Github'>
          <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS,  NPM,
              BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
             .NET, MySQL, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C#, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;