import express from 'express';
import protectRoute from '../middlewares/protectRoute.middleware.js';
import { getUserForsidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRoute, getUserForsidebar) 

export default router;