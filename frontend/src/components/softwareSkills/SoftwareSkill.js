import React from "react";
import "./SoftwareSkill.scss";


//import {skillsSection} from "../../portfolio";

import { useSelector } from "react-redux";

const  SoftwareSkill= ()=> {

   const dataList = useSelector((state) => state.dataList);

 
     const {info} = dataList

  const skillsSection = info[0].skillsSection;





  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill