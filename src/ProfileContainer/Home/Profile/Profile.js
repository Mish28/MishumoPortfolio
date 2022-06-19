import React from "react";
//import Typical from "react-Typical";//
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="call">
          <div className="call-icon">
            <a href="https://www.facebook.com/MishumoMatidze">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCzHfks0SB5X7LtsxczOKNVg/about">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://www.instagram.com/meshoemorematidze/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/mmatidze/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://twitter.com/CynthiaMishumo">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I Am <span className="highlighted-text">Mishumo Matidze</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1> Aspiring Software Engineer</h1>
              <span className="profile-role-tagline">
                Uprising Software engineer, I live and breath software
                Engineering.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me
            </button>
            <a
              href="Mishumo Matidze - Curriculum Vitae.pdf"
              download="Mishumo Matidze - Curriculum Vitae.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
