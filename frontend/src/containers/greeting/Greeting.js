import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

//import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

import { useSelector } from "react-redux";



const  Greeting = () => {
  const {isDark} = useContext(StyleContext);

   const dataList = useSelector((state) => state.dataList);

 
     const {info} = dataList

  const illustration = info[0].illustration;
  const greeting = info[0].greeting;

  //console.log(greeting);

  return(
    !greeting.displayGreeting ? null : (  <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={"https://res.cloudinary.com/dxt629rgo/image/upload/v1642958897/manOnTable_eofkji.svg"}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>

    )

  ) 
}

export default Greeting