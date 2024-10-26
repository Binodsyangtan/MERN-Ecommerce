import express from 'express'
import { addAddress } from '../Controllers/address.js';
import { Authenticated } from '../Middlewares/auth.js';

const router = express.Router();

router.post('/add',Authenticated,addAddress)

export default router;