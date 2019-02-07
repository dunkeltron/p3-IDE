import React from "react";
import "./style.css";

function SocialLinks({ user, srcGith, srcLinked, srcPersonal }) {
  return (
    <div className="SLContainer">
      <a
        className="imageAnchor socialLinks"
        href={srcGith || "www.github.com"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="gitText">
          <img
            src="https://i.ibb.co/9GQcnYh/Background.png"
            className="gitAva"
            alt="github logo"
          />
        </div>
      </a>
      
      <a
        className="imageAnchor socialLinks"
        href={srcLinked || "www.linkedin.com"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="linkedinText">
          <img
            src="https://i.ibb.co/80Zwxz9/linkedin-Logo.png"
            className="linkedinAva"
            alt="linkedin logo"
          />
        </div>
      </a>

      <a
        className="imageAnchor socialLinks"
        href={srcPersonal || null}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="personalText">
          <img
            src="https://i.ibb.co/fSc2Hp7/personal-Addres.png"
            className="personalAva"
            alt="personal logo"
          />
        </div>
      </a>
    </div>
  );
}

export default SocialLinks;

//Don't remove just incase links are lost for whatever reason
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/80Zwxz9/linkedin-Logo.png" alt="linkedin-Logo" border="0"></a>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/fSc2Hp7/personal-Addres.png" alt="personal-Addres" border="0"></a>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/9GQcnYh/Background.png" alt="Background" border="0"></a>