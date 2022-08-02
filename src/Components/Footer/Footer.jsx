import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer({ isDarkMode }) {
  const user = {
    githubHandle: "https://github.com/gkumar-pandey",
    linkedinHandle: "https://www.linkedin.com/in/gkpandey/",
    twitterHandle: "https://twitter.com/gautamkp078",
  };
  const bgColor = isDarkMode ? "#1B2430" : "#262534";

  return (
    <div className="footer" style={{backgroundColor: `${bgColor}`}}>
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
    fontSize: "2.3rem",
    padding: "8px",
  },
};

export default Footer;
