import React from "react";
import photo1 from "../../assets/images/home-1.png";
import photo2 from "../..//assets/images/home-3.png";
import photo3 from "../../assets/images/home-2.png";

import "./HomePhotoShoot.css";

function HomePhotoShoot() {
  return (
    <div className="photoshoot-container">
      <span className="model-photo_wrapper boy">
        <img src={photo1} className="model-photo" alt="model photograph" />
      </span>
      <span className="model-photo_wrapper boy">
        <img src={photo2} className="model-photo" alt="model photograph" />
      </span>
      <span className="model-photo_wrapper female">
        <img src={photo3} className="model-photo" alt="model photograph" />
      </span>
    </div>
  );
}

export default HomePhotoShoot;
