import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as moon } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="social">
      <div className="mode">
        <FontAwesomeIcon icon={moon} className="icon" />
      </div>
      <div className="social-links">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <FontAwesomeIcon icon={faThreads} className="icon" />
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </div>
    </div>
  );
};

export default Social;
