import express from 'express';
import { test } from '../controllers/user.controller.js';
import { signin, signup ,google,signOut} from '../controllers/auth.controller.js';

const router = express.Router();

 router.post('/signup',signup);
 router.post('/signin',signin);
 router.post('/google',google);
 router.get('/signout',signOut);
 export default router;