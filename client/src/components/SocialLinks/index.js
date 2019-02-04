import React from "react";
import "./style.css";

function SocialLinks({ user, srcGith, srcLinked, srcPersonal }) {
  return (
    <div className="SLContainer">
      <a
        className="imageAnchor socialLinks"
        href={srcGith}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="gitText">
          <img
            src="https://via.placeholder.com/90"
            className="gitAva"
            alt="github logo"
          />
        </div>
      </a>

      <a
        className="imageAnchor socialLinks"
        href={srcLinked}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="linkedinText">
          <img
            src="https://via.placeholder.com/90"
            className="linkedinAva"
            alt="linkedin logo"
          />
        </div>
      </a>

      <a
        className="imageAnchor socialLinks"
        href={srcPersonal}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="personalText">
          <img
            src="https://via.placeholder.com/90"
            className="personalAva"
            alt="personal logo"
          />
        </div>
      </a>
    </div>
  );
}

export default SocialLinks;
