import express from "express";
import { getData, getGithubRepos } from "../controllers/dataControllers.js";

const router = express.Router();


router.get('/', getData)
router.get('/github', getGithubRepos)

export default router;