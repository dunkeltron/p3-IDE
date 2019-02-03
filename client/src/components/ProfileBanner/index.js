import React from "react";
import { Col } from "../Grid";
import "./style.css";

function ProfileBanner({ user, src, children }) {
  return (
    <Col size="md-12 mt-3">
      <div className="card text-white bg-info mt-3 mb-3 profileBanner">
        <h1 className="card-header profileBannerHeader">{user}</h1>
        <div className="card-body">
          <img className="profileImg mb-3" src={src} alt="" />
          {children}
        </div>
      </div>
    </Col>
  );
}

export default ProfileBanner;
