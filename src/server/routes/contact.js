import { Router } from 'express'
import sendInfoToMyGmail from '../controller/contact.js';
const router = Router();





router.post('/', sendInfoToMyGmail)

export default router;