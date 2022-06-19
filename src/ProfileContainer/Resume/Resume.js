import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/Scrollservice";
import Animations from "../../Utilities/Animation";
import "./Resume.css";


export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const ResumeHeading = (props) => {
      return(
        <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate}?(
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
            ): (<div></div>)
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
      )
    
  };

  const resumeBullets = [
    { label: "Education", logosrc: "education.svg" },
    { label: "Work History", logosrc: "work-history.svg" },
    { label: "Programming", logosrc: "Programming-skills.svg" },
    { label: "Interests", logosrc: "interests.svg" },
  ];

  const programmingSkillDetail = [
    { skill: "Java" },
    { skill: "React Js" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "Visual Basic" },
    { skill: "React Native" },
    { skill: "PHP" },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Vaal University of Technology, South Africa Vanderbijlpark"}
        subHeading={"NATIONAL DIPLOMA INFORMATION TECHNOLOGY"}
        fromDate={"2016"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"Vaal University of Technology, South Africa Vanderbijlpark"}
        subHeading={"BACHELOR OF TECHNOLOGY INFORMATION TECHNOLOGY"}
        fromDate={"2019"}
        toDate={"2020"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Mecer"}
        subHeading={"Dynamics368 Trainee"}
        fromDate={"2020"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently doing a training for Dynamics368
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills"
        key="programming skills"
      >
        {programmingSkillDetail.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet">
              <span>{skill.skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Gaming" />
      <ResumeHeading heading="Cooking" />
      <ResumeHeading heading="Music" />
      <ResumeHeading heading="Dancing" />
    </div>,
  ];

  
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const handleCarousal = (index)=> {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY("+ index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = ()=> {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index=== setSelectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}>
        <img
          className="bullet-logo"
        /*  src={require('../../components/Resume/${bullet.logoSrc}').default}
          alt="B"*/
        />
      </div>
    ))
  }

  const getResumescreen = () => {
    return (
      <div
        style ={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };


  return (
    <div resume-container screen-container id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className='resume-card'>
          <div className='resume-bullets'>
           <div className='bullet-container'>
            <div className='bullet-icons'></div>
            <div className='bullets'>{getBullets()}</div>

           </div>

           </div>
              <div className='resume-bullet-details'>{getResumescreen()}</div>
          </div>

        </div>
      </div>
    
  );
}
