import express from 'express'
import {deleteUser, login, profile, register, users} from '../Controllers/user.js';
import{Authenticated} from '../Middlewares/auth.js'
import { promoteRole } from '../Controllers/roleController.js';

const router = express.Router();

// register user

router.post('/register',register)  //=> /api/user/register   vayako hunxa server.js ma link gareko 

//login user
router.post('/login',login)

//get all users
router.get('/all',users)

//get user profile 
router.get('/profile',Authenticated,profile)
router.delete('/delete/:id',deleteUser)
router.put('/role/:id',promoteRole)


// varaible jun xa const router tai default export gareko 
export default router