import express from 'express'
import{Authenticated} from '../Middlewares/auth.js'
import { addRole, deleteRole,promoteRole } from '../Controllers/roleController.js';

const router = express.Router();

//addrole

router.post('/add',addRole)  
router.post('/delete',deleteRole)
router.put('/promote/:id',promoteRole)


export default router