import "./GitHubCard.css";
import React from "react";
import Image from "react-bootstrap/Image";

function template() {
  return (
    <div className="git-hub-card">
      <h1>Mandeep Kaur</h1>
      <h2>About Me</h2>
      <Image src ="src/Image/mandeep.jpg"></Image>
    </div>
  );
};

export default template;
