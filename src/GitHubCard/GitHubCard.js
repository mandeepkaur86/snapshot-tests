import React    from "react";
import template from "./GitHubCard.jsx";

class GitHubCard extends React.Component {
  render() {
    return template.call(this);
  }
}

export default GitHubCard;
