import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
//import {educationInfo} from "../../portfolio";
import { useSelector } from "react-redux";


const Education=()=> {
     const dataList = useSelector((state) => state.dataList);
    const {info} = dataList

  const educationInfo = info[0].educationInfo;
  


    return (
  educationInfo.display ? 
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div> : null
    );
  
}

export default Education