import React, {Suspense, useContext, lazy} from 'react';
import Button from "../../components/button/Button";

import StyleContext from "../../contexts/StyleContext";


import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

//import {openSource, socialMediaLinks} from "../../portfolio";
import { useSelector } from "react-redux";




import "./Project.scss";


  //const GithubCard = lazy(()=> GithubRepoCard )
const Projects = () => {

      const dataList = useSelector((state) => state.dataList);
    const {info} = dataList

  const openSource = info[0].openSource;
  const socialMediaLinks = info[0].socialMediaLinks;

  const githubDataList = useSelector((state) => state.githubDataList);
    const {githubData} = githubDataList


    //console.log(githubData);

  const {isDark} = useContext(StyleContext);

    

  return( 
    openSource.display ? <Suspense >
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">  
          {!githubData ? <p>data not found</p> : <div className="repo-cards-div-main"> {githubData.map((v, i)=>{
            return (
                <GithubRepoCard repo={v} key={v.id} isDark={isDark} />
              );
              
          })}  </div> }

           
          </div>

          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
          </div>
          </Suspense> : null
          )
};

export default Projects;





/*
import React, { useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

//import {openSource, socialMediaLinks} from "../../portfolio";
import { useSelector } from "react-redux";


const Projects=()=> {

      const dataList = useSelector((state) => state.dataList);
    const {info} = dataList

  const openSource = info[0].openSource;
  const socialMediaLinks = info[0].socialMediaLinks;

  const githubDataList = useSelector((state) => state.githubDataList);
    const {githubData} = githubDataList



  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  



    return (
  
    openSource.display ? 

      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {githubData.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense> :   <FailedLoading />
    );
 
}

export default Projects
*/