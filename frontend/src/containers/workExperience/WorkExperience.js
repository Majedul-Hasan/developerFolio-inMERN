import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
//import {workExperiences} from "../../portfolio";
import { useSelector } from "react-redux";


const  WorkExperience=()=> {
      const dataList = useSelector((state) => state.dataList);
    const {info} = dataList

  const workExperiences = info[0].workExperiences;

  const {isDark} = useContext(StyleContext);

    return (
  workExperiences.display ?
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div> : null
    );
 
}

export default WorkExperience