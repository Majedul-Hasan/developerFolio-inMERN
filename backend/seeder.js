

import dotenv from "dotenv";
import {illustration,
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails} from "./data/data.js";

import Data from "./models/Data.js";


import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {     


  try {
    await Data.deleteMany();

     const data = {illustration,
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails
    }
    

    const createdData = await Data.insertMany(data);
    


    

    console.log("Data Imported!.....");
    process.exit();
  } catch (error) {
    console.error(`error is ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Data.deleteMany();

    console.log("Data Destroyed!.....");
    process.exit();
  } catch (error) {
    console.error(`error is ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}