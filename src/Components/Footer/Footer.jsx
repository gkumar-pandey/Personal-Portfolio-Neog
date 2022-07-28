import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const user = {
    githubHandle: "https://github.com/gkumar-pandey",
    linkedinHandle: "https://www.linkedin.com/in/gkpandey/",
    twitterHandle: "https://twitter.com/gautamkp078",
  };
  return (
    <div className="footer">
      <div>
        <p>CONNECT WITH ME</p>
      </div>
      <div>
        <a href={user.githubHandle} target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} style={style.icon} />
        </a>
        <a href={user.linkedinHandle} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} style={style.icon} />
        </a>
        <a href={user.twitterHandle} target="_blank">
          <FontAwesomeIcon icon={faTwitterSquare} style={style.icon} />
        </a>
      </div>
    </div>
  );
}
const style = {
  icon: {
    fontSize: "3rem",
    padding: "10px",
  },
};

export default Footer;
