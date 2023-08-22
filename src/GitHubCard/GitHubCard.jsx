import "./GitHubCard.css";
import React from "react";
import logo from './mandeep.png'

function template() {
  return (
    <div className="git-hub-card">
      <h1>Mandeep Kaur</h1>
      <h2>About Me</h2>
      <img src ={logo} alt="my picture" style={{width: 10 + 'em'}}/>
      <p>I am Mandeep kaur currently enrolled in NC state University. I am mom of 2 wonderful kids who are 9 and 2.
         I want to be a successful software developer.
      </p>
    </div>
  );
};

export default template;
