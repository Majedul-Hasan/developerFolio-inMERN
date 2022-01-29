
import asyncHandler from "express-async-handler";

import request from 'request'

import Data from "../models/Data.js";



// @desc fetch all data
// @route get /api/data
// @access public

/*

illustration,
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

 */


const getData = asyncHandler(async(req, res)=>{
    
    const data = await Data.find();

//    const {illustration,
//	greeting,
//	socialMediaLinks,
//	skillsSection,
//	educationInfo,
//	techStack,
//	workExperiences,
//	openSource,
//	bigProjects,
//	achievementSection,
//	blogSection,
//	talkSection,
//	podcastSection,
//	contactInfo,
//	twitterDetails } =  data[0]
//
//    res.json(socialMediaLinks)
    res.json(data)

  

})

// @desc GET user repos from github
// @route get /api/data/github
// @access public

const getGithubRepos = asyncHandler(async(req, res)=>{


	try {
		const options = {
			uri: `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?per_page=5&sort=created:asc&client_id=${process.env.githubClientId}&client_secret=${process.env.githubSecret}`,

			method: 'GET',
			headers: {'user-agent': 'node.js'}
		}
		request(options, (error, response, body)=>{
			if(error) console.error(error)

			if(response.statusCode !== 200) {
				return  res.status(404).json({msg: 'No github profile found'})
			}

			res.json(JSON.parse(body))
		})
		
	} catch (error) {
		console.error(error.message)
		res.status(500).send('server error')
		
	}

	
})


export {getData, getGithubRepos}