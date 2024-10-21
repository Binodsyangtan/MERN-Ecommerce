import express from 'express'
import {login, register, users} from '../Controllers/user.js';


const router = express.Router();

// register user

router.post('/register',register)  //=> /api/user/register   vayako hunxa server.js ma link gareko 

//login user
router.post('/login',login)

//get all users
router.get('/all',users)


// varaible jun xa const router tai default export gareko 
export default router