import express from 'express';
const router = express.Router();
import { sendLink, verifyToken} from '../controller/authcontroller.js';

router.post('/send-link', sendLink);
router.get('/verify', verifyToken);

export default router;