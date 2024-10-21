import User from "../Models/user.js";
import bcrypt from "bcryptjs";

//user register
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user)
      return res.json({ message: "user already exists", success: false });
    const hashPass = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashPass });
    res.json({ message: "user register successfully...", user, success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//user login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.json({ message: "user not found", success: false });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.json({ message: "invalid credentail", success: false });
    res.json({ message: `welcome ${user.name}`, success: true, user });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// export default register


//async and awiat use garena vane error aauxa db bata get garda so use async and await 
export const users = async (req, res) => {
    const{email} = req.body
  try {
    let users = await User.find().sort({createdAt:-1 });
    res.json(users);
  } catch (error) {
    res.json(error.message);
  }
};
