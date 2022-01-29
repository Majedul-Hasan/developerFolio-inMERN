import React from "react";
import "./Progress.scss";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";


//import {illustration, techStack} from "../../portfolio";
import { useSelector } from "react-redux";

const  StackProgress = ()=> {
    const dataList = useSelector((state) => state.dataList);
    const {info} = dataList

  const illustration = info[0].illustration;
  const techStack = info[0].techStack;
 
return(
    techStack.viewSkillBars ? (
        <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={"https://res.cloudinary.com/dxt629rgo/image/upload/v1642958900/skill_jgxa2s.svg"}
              />
            )}
          </div>
        </div>
      </Fade>
    ): null
)

}

export default StackProgress