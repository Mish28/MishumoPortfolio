import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/Scrollservice";
import Animations from "../../Utilities/Animation";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I hold a National Diploma and a Btech in Information Technology. I'm an Uprising Software engineer willing to be an asset to an organisation. I have an intense desire to make waves in the tech space. I majored in Software Development (Java). I taught myself Html and CSS, I'm currently teaching myself React Native. I wish to work in development fulltime. I am open to learning and developing myself all the time through mentorship. I'm a big fan of w3schools and skill share when it comes to improving my coding skills.",
  highlights:{
    bullets:[
      "Web development",
      "Front and Back end",
      "React and React Native",
      "UI/UX Design (Adobe XD Creative Cloud))",
      "SQL(Database)",
      "Java",

    ],
    heading: "Here are a few Highlights:"
  }
    };
    const renderHighlight = ()=>{
      return(
        SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
          <div className='highlight' key={i}>
           <div className='highlight-blob'>

           </div>
                  <span>{value}</span>
          </div>
        )

        )
      )
    }
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
            <div className='about-me-details'>
              <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
               <div className='about-me-highlights'>
                 <div className='highlight-heading'>
                   <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                 </div>
                 {renderHighlight()}
               </div>
                  <div className='about-me-options'>
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
          </div>
        </div>
      </div>
    
  );
}
