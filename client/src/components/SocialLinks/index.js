import React from "react";
import "./style.css";

function SocialLinks({ user, src }) {
  return (
    <div className="SLContainer">
      <a className="imageAnchor socialLinks" href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <div className="gitText">
          <img src="https://via.placeholder.com/100" className="gitAva" alt="github logo"/>
          <div className="n">Github</div>
        </div>
      </a>

      <a className="imageAnchor socialLinks" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <div className="linkedinText">
          <img src="https://via.placeholder.com/100" className="linkedinAva" alt="linkedin logo"/>
          <div className="n">Linkedin</div>
        </div>
      </a>

      <a className="imageAnchor socialLinks" href="https://google.com/" target="_blank" rel="noopener noreferrer">
        <div className="personalText">
          <img src="https://via.placeholder.com/100" className="personalAva" alt="personal logo"/>
          <div className="n">Personal</div>
        </div>
      </a>

      {/* <a className="socialLinks" href="www.github.com">
        Link
      </a>
      <a className="socialLinks" href="www.github.com">
        Link
      </a>
      <a className="socialLinks" href="www.github.com">
        Link
      </a> */}
      </div>

      /* <div class="card text-white bg-primary mb-3 linkCard">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card text-white bg-warning mb-3 linkCard">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card text-white bg-info mb-3 linkCard">
        <div class="card-header">Header</div> 
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */
  );
}

export default SocialLinks;
