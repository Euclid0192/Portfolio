import React from "react";
import './Background.css'
import bg from '../../assets/onepiece.mp4'

const Background = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video-element">
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
