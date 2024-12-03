import express from 'express'
import{Authenticated} from '../Middlewares/auth.js'
import { addRole, deleteRole } from '../Controllers/roleController.js';

const router = express.Router();

//addrole

router.post('/add',addRole)  
router.post('/delete',deleteRole)


export default router