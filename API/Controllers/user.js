import User from "../Models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Role from "../Models/roleModles.js";


//user register
export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  // const type = req.body.type || "USER";
  // const roles = [type];
  try {
    let user = await User.findOne({ email });
    if (user)
      return res
        .status(409)
        .json({ message: "user already exists", success: false });

    const validRoles = ["admin", "user", "seller"];
    if (!role || !validRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role. must be one of admin,user,or seller.",
        success: false,
      });
    }
    const hashPass = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashPass, role });
    res.json({
      message: "user register successfully...",
      user: { name: user.name, email: user.email, role: user.role },
      success: true,
    });
  } catch (error) {
    console.log("error during registration", error);

    res.json({ message: error.message });
  }
};

//user login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ message: "User not found", success: false });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.json({ message: "Invalid credentials", success: false });

    // Fetch permissions based on user's role
    const role = await Role.findOne({ role: user.role });
    if (!role)
      return res
        .status(400)
        .json({ message: "Role not found", success: false });

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id,permissions: role.permissions },
      "!@#$%^&*()",
      { expiresIn: "365d" }
    );

    res.json({
      message: `Welcome ${user.name}, ${user.role}`,
      token,
      role:role.role,
      permissions: role.permissions, // Send permissions in response
      success: true,
    });
  } catch (error) {
    console.log(error); // log error to debug
    res.json({ message: error.message });
  }
};

// export default register

//async and awiat use garena vane error aauxa db bata get garda so use async and await
//get all users
export const users = async (req, res) => {
  const { email } = req.body;
  try {
    let users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.json(error.message);
  }
};

//get user profile
export const profile = async (req, res) => {
  res.json({ user: req.user });
};


export const deleteUser = async(req,res) =>{
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({message:"User delete successfully"});
    
  } catch (error) {
    res.status(500).json({message:"error deleting user",error})
    
  }

}

export const promoteRole = async (req,res) =>{
  try {
      const userId = req.params.id; //user id nikaliyo
      const role = req.body;

      const user = await User.findByIdAndUpdate(
          userId,
          {$addtoSet :{role}}, //yesley updata garxa role field lai
          {new: true} //return garxa update vako user lai 
      );
      if(!user){
          return res.status(404).json({message:"user not found"})
      }
      res.status(200).json({message:"user promoted successfully",user})
      
  } catch (error) {
      res.status(500).json({ message: "Error updating user role", error });
      
  }
}