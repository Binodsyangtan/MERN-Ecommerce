import jwt from "jsonwebtoken";
import User from "../Models/user.js";

//next : yo fucntion chalera sakesi arko function chalaunu vanxa next le
export const Authenticated = async (req, res, next) => {
  //just like req.body (yesma token req.header bata aauxa)
  const token = req.header("Auth");
  if (!token) return res.json({ message: "login first" });
  
  const decoded = jwt.verify(token,"!@#$%^&*()")
//   console.log(decoded);
    const id = decoded.userId
    let user = await User.findById(id)
    if(!user) return res.json ({message:'user not exist '})

    req.user = user //yesma user save hunxa so if user use gana chahema req.user use garna sakxu ma 

    next();  // auth paxi k function chalauna ko lagi 
  
};
